import { Bounds2, CombinedRaster, Matrix3, PolygonalFace, PolygonFilterType, Rasterize, RenderableFace, RenderColor, RenderDepthSort, RenderPath, RenderPathBoolean, RenderStack, v2, v3, v4, Vector2 } from '/lib/scenerystack.esm.min.js';

const sizeCanvas = canvas => {
  canvas.style.width = `${canvas.width / window.devicePixelRatio}px`;
  canvas.style.height = `${canvas.height / window.devicePixelRatio}px`;
};

// composite Rasterize/CombinedRaster options
const getRasterizedElement = ( renderProgram, width, height, options ) => {
  const program = renderProgram.transformed( Matrix3.scaling( window.devicePixelRatio ) );

  const outputWidth = width * window.devicePixelRatio;
  const outputHeight = height * window.devicePixelRatio;

  const raster = new CombinedRaster( outputWidth, outputHeight, options );
  Rasterize.rasterize( program, raster, new Bounds2( 0, 0, outputWidth, outputHeight ), options );
  const canvas = Rasterize.imageDataToCanvas( raster.toImageData() );
  sizeCanvas( canvas );
  canvas.style.display = 'block';
  canvas.style.position = 'relative';
  canvas.style.margin = '0 auto';
  canvas.style.left = '0';
  canvas.style.top = '0';
  return canvas;
};

export const initialize = async div => {
  {
    // Create container div
    const container = document.createElement( 'div' );
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.gap = '16px';
    container.style.flexWrap = 'wrap';
    container.style.textAlign = 'center';

    const figures = [
      { id: 'siemens-canvas', tag: 'canvas', caption: 'Canvas' },
      { id: 'siemens-box', tag: 'canvas', caption: 'Alpenglow (fast)' },
      { id: 'siemens-bilinear', tag: 'canvas', caption: 'Alpenglow (quality)' }
    ];

    figures.forEach( fig => {
      const figure = document.createElement( 'figure' );
      figure.style.margin = '0';

      const element = document.createElement( fig.tag );
      element.id = fig.id;
      element.style.width = '128px';
      element.style.height = '192px';
      element.style.backgroundColor = '#fff';
      element.style.display = 'block';

      if ( fig.role ) {
        element.setAttribute( 'role', fig.role );
      }

      const caption = document.createElement( 'figcaption' );
      caption.textContent = fig.caption;

      figure.appendChild( element );
      figure.appendChild( caption );

      container.appendChild( figure );
    } );

    div.appendChild( container );

    const boxCanvas = document.getElementById( 'siemens-box' );
    const bilinearCanvas = document.getElementById( 'siemens-bilinear' );
    const canvasCanvas = document.getElementById( 'siemens-canvas' );

    // Combined Siemens star and checkerboard
    {
      const outputWidth = 128;
      const outputHeight = 192;
      const rasterWidth = Math.ceil( outputWidth * window.devicePixelRatio );
      const rasterHeight = Math.ceil( outputHeight * window.devicePixelRatio );

      for ( const canvas of [ boxCanvas, bilinearCanvas, canvasCanvas ] ) {
        canvas.width = rasterWidth;
        canvas.height = rasterHeight;
        canvas.style.width = `${outputWidth}px`;
        canvas.style.height = `${outputHeight}px`;
      }


      const canvasContext = canvasCanvas.getContext( '2d' );

      const blackProgram = new RenderColor( v4( 0, 0, 0, 1 ) );
      const whiteProgram = new RenderColor( v4( 1, 1, 1, 1 ) );

      const numRadialVertices = 200;

      const centerVertex = v2( rasterWidth / 2, rasterWidth / 2 );
      const innerVertices = [ ...Array( numRadialVertices ).keys() ].map( i => {
        const theta = i * 2 * Math.PI / numRadialVertices;
        return Vector2.createPolar( rasterWidth * 0.4, theta ).add( centerVertex );
      } );

      const renderableFaces = [ ...Array( numRadialVertices ).keys() ].map( i => {
        return new RenderableFace(
          new PolygonalFace( [
            [ centerVertex, innerVertices[ i ], innerVertices[ ( i + 1 ) % numRadialVertices ] ]
          ] ),
          i % 2 === 0 ? blackProgram : whiteProgram,
          new Bounds2( 0, 0, rasterWidth, rasterWidth )
        );
      } );

      const checkerboardRenderableFaces = [];

      const checkerXMin = -35;
      const checkerXMax = 35;
      const checkerY = -5;
      const checkerZMin = 4;
      const checkerZMax = 80;

      { // Initialize checker faces
        for ( let x = checkerXMin; x < checkerXMax; x++ ) {
          for ( let z = checkerZMin; z < checkerZMax; z++ ) {
            checkerboardRenderableFaces.push( new RenderableFace(
              new PolygonalFace( [
                [ v2( 0, 0 ), v2( 0, 0 ), v2( 0, 0 ), v2( 0, 0 ) ]
              ] ),
              ( x + z ) % 2 === 0 ? whiteProgram : blackProgram,
              new Bounds2( 0, 0, rasterWidth, rasterHeight )
            ) );
          }
        }
        renderableFaces.push( ...checkerboardRenderableFaces );
      }

      const updateCheckers = ( diff ) => {
        const dl = 10;

        const projectionMatrix = RenderDepthSort.getProjectionMatrix( 1, 100, -1, -1, 1, 1 );
        const rotationMatrix = Matrix3.rotationY( 0.1 * Math.cos( diff ) ).timesMatrix( Matrix3.rotationX( 0 ) );
        const dlv = v3( 0, 0, dl );

        const scratch3 = v3( 0, 0, 0 );
        const scratch4 = v4( 0, 0, 0, 0 );

        const matrix = Matrix3.scaling( rasterHeight / 3 ).timesMatrix( Matrix3.translation( 1, 0, 0 ) );

        const project = ( p3, p2 ) => {
          // a rotation, for testing
          p3.subtract( dlv );
          rotationMatrix.multiplyVector3( p3 );
          p3.add( dlv );

          const clip = projectionMatrix.timesVector4( scratch4.setXYZW( p3.x, p3.y, p3.z, 1 ) );

          p2.setXY( clip.x / clip.w, -clip.y / clip.w );
          matrix.multiplyVector2( p2 );
          p2.addXY( 0, rasterHeight / 384 * 256 );
        };

        let y = checkerY + Math.cos( diff / 3 );

        let i = 0;
        for ( let x = checkerXMin; x < checkerXMax; x++ ) {
          for ( let z = checkerZMin; z < checkerZMax; z++ ) {
            const points = checkerboardRenderableFaces[ i++ ].face.polygons[ 0 ];
            project( scratch3.setXYZ( x, y, z + 1 ), points[ 0 ] );
            project( scratch3.setXYZ( x + 1, y, z + 1 ), points[ 1 ] );
            project( scratch3.setXYZ( x + 1, y, z ), points[ 2 ] );
            project( scratch3.setXYZ( x, y, z ), points[ 3 ] );
          }
        }
      };
      updateCheckers( 0 );

      const timeDelta = 1;

      const offsetAmount = rasterWidth * 0.05;
      const offsetAngle = timeDelta / 1000;
      const rotateAngle = timeDelta / 5000;
      const offset = Vector2.createPolar( offsetAmount, offsetAngle ).addXY( rasterWidth / 2, rasterWidth / 2 );

      centerVertex.set( offset );

      for ( let i = 0; i < numRadialVertices; i++ ) {
        const theta = i * 2 * Math.PI / numRadialVertices + rotateAngle;
        innerVertices[ i ].setPolar( rasterWidth * 0.45, theta ).add( centerVertex );
      }
      updateCheckers( timeDelta / 1000 );

      const program = new RenderStack( [
        new RenderPathBoolean(
          new RenderPath( 'nonzero', renderableFaces.filter( face => face.renderProgram === blackProgram ).map( face => face.face.polygons[ 0 ] ) ),
          blackProgram,
          whiteProgram
        )
      ] ).transformed( Matrix3.scaling( 1 / window.devicePixelRatio ) );

      const boxElement = getRasterizedElement( program, outputWidth, outputHeight, {
        polygonFiltering: PolygonFilterType.Box
      } );
      const bilinearElement = getRasterizedElement( program, outputWidth, outputHeight, {
        polygonFiltering: PolygonFilterType.MitchellNetravali
      } );

      // TODO:
      boxCanvas.parentElement.replaceChild( boxElement, boxCanvas );
      bilinearCanvas.parentElement.replaceChild( bilinearElement, bilinearCanvas );

      // Canvas
      {
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect( 0, 0, rasterWidth, rasterHeight );

        canvasContext.fillStyle = 'black';
        canvasContext.beginPath();

        for ( let i = 0; i < renderableFaces.length; i++ ) {
          const renderableFace = renderableFaces[ i ];

          if ( renderableFace.renderProgram === whiteProgram ) { continue; }

          const vertices = renderableFace.face.polygons[ 0 ];

          canvasContext.moveTo( vertices[ 0 ].x, vertices[ 0 ].y );
          for ( let j = 1; j < vertices.length; j++ ) {
            canvasContext.lineTo( vertices[ j ].x, vertices[ j ].y );
          }
        }

        canvasContext.fill();
      }
    }
  }
};