import { Bounds2, CombinedRaster, DeviceContext, FaceRasterizer, Matrix3, PolygonalFace, PolygonFilterType, Rasterize, RenderableFace, RenderColor, RenderColorSpace, RenderDepthSort, RenderExtend, RenderGradientStop, RenderLinearGradient, RenderLinearGradientAccuracy, RenderPath, RenderPathBoolean, RenderStack, v2, v3, v4, Vector2 } from '/lib/scenerystack.esm.min.js';

const deviceContextPromise = DeviceContext.getDevice().then( device => {
  if ( device ) {
    return new DeviceContext( device );
  }
  else {
    return null;
  }
} );

export const initialize = async div => {

  /*
  <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; text-align: center;">
    <figure>
      <canvas id="siemens-canvas" alt="Displays a Siemens Star and checkerboard pattern using Canvas in your browser" style="width: 128px; height: 192px;"></canvas>
      <figcaption>
        Canvas
      </figcaption>
    </figure>

    <figure>
      <svg id="siemens-svg" role="img" alt="Displays a Siemens Star and checkerboard pattern using SVG in your browser" style="width: 128px; height: 192px; vertical-align: baseline;"></svg>
      <figcaption>
        SVG
      </figcaption>
    </figure>

    <figure>
      <canvas id="siemens-box" alt="Displays a Siemens Star and checkerboard pattern using a box filter" style="width: 128px; height: 192px;"></canvas>
      <figcaption>
        Box Filter
      </figcaption>
    </figure>

    <figure>
      <canvas id="siemens-bilinear" alt="Displays a Siemens Star and checkerboard pattern using a bilinear filter" style="width: 128px; height: 192px;"></canvas>
      <figcaption>
        Bilinear Filter
      </figcaption>
    </figure>
  </div>
   */

  {
    const deviceContext = await deviceContextPromise;

    // Create container div
    const container = document.createElement( 'div' );
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.gap = '16px';
    container.style.flexWrap = 'wrap';
    container.style.textAlign = 'center';

    const figures = [
      { id: 'siemens-canvas', tag: 'canvas', caption: 'Canvas' },
      { id: 'siemens-svg', tag: 'svg', caption: 'SVG', role: 'img' },
      { id: 'siemens-box', tag: 'canvas', caption: 'Box Filter' },
      { id: 'siemens-bilinear', tag: 'canvas', caption: 'Bilinear Filter' }
    ];

    figures.forEach( fig => {
      const figure = document.createElement( 'figure' );
      figure.style.margin = '0';

      const element = document.createElement( fig.tag );
      element.id = fig.id;
      element.style.width = '128px';
      element.style.height = '192px';
      element.style.backgroundColor = '#fff';

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
    const svg = document.getElementById( 'siemens-svg' );

    let boxVisible = true;
    let bilinearVisible = true;
    let canvasVisible = true;
    let svgVisible = true;

    const observer = new IntersectionObserver( ( entries, observer ) => {
      entries.forEach( entry => {
        if ( entry.target === boxCanvas ) {
          boxVisible = entry.isIntersecting;
        }
        else if ( entry.target === bilinearCanvas ) {
          bilinearVisible = entry.isIntersecting;
        }
        else if ( entry.target === canvasCanvas ) {
          canvasVisible = entry.isIntersecting;
        }
        else if ( entry.target === svg ) {
          svgVisible = entry.isIntersecting;
        }
      } );
    } );
    observer.observe( boxCanvas );
    observer.observe( bilinearCanvas );
    observer.observe( canvasCanvas );
    observer.observe( svg );

    const numRasterizers = 1;
    const rasterizers = deviceContext ? [ ...Array( numRasterizers ).keys() ].map( () => new FaceRasterizer( {
      deviceContext: deviceContext,

      supportsGridFiltering: true,
      supportsBilinear: true,
      supportsMitchellNetravali: false
    } ) ) : null;

    // Combined Siemens star and checkerboard
    {
      const outputWidth = 128;
      const outputHeight = 192;
      const rasterWidth = Math.ceil( outputWidth * window.devicePixelRatio );
      const rasterHeight = Math.ceil( outputHeight * window.devicePixelRatio );

      let isFirstRender = true;

      for ( const canvas of [ boxCanvas, bilinearCanvas, canvasCanvas ] ) {
        canvas.width = rasterWidth;
        canvas.height = rasterHeight;
        canvas.style.width = `${outputWidth}px`;
        canvas.style.height = `${outputHeight}px`;
      }
      svg.setAttribute( 'width', outputWidth );
      svg.setAttribute( 'height', outputHeight );


      const boxCanvasContext = deviceContext ? deviceContext.getCanvasContext( boxCanvas, 'srgb' ) : boxCanvas.getContext( '2d' );
      const bilinearCanvasContext = deviceContext ? deviceContext.getCanvasContext( bilinearCanvas, 'srgb' ) : bilinearCanvas.getContext( '2d' );
      const canvasContext = canvasCanvas.getContext( '2d' );
      const svgPath = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
      svgPath.setAttribute( 'style', 'fill: black; stroke: none;' );
      svg.appendChild( svgPath );

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

      const reference = Date.now();

      let count = 0;
      const step = () => {
        if ( rasterizers ) {
          requestAnimationFrame( step );
        }

        if ( !isFirstRender && !boxVisible && !bilinearVisible && !canvasVisible && !svgVisible ) {
          return;
        }

        const timeDelta = Date.now() - reference;

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

        if ( rasterizers ) {
          if ( boxVisible || isFirstRender ) {
            rasterizers[ count % numRasterizers ].run( {
              renderableFaces: renderableFaces,
              canvasContext: boxCanvasContext,
              rasterWidth: rasterWidth,
              rasterHeight: rasterHeight,
              colorSpace: 'srgb',
              filterType: PolygonFilterType.Box,
              filterScale: 1
            } );
          }

          if ( bilinearVisible || isFirstRender ) {
            rasterizers[ count % numRasterizers ].run( {
              renderableFaces: renderableFaces,
              canvasContext: bilinearCanvasContext,
              rasterWidth: rasterWidth,
              rasterHeight: rasterHeight,
              colorSpace: 'srgb',
              filterType: PolygonFilterType.Bilinear,
              filterScale: 1
            } );
          }
        }
        else {
          const rasterBox = new CombinedRaster( rasterWidth, rasterHeight, {
            colorSpace: 'srgb'
          } );
          const rasterBilinear = new CombinedRaster( rasterWidth, rasterHeight, {
            colorSpace: 'srgb'
          } );

          const program = new RenderStack( [
            new RenderPathBoolean(
              new RenderPath( 'nonzero', renderableFaces.filter( face => face.renderProgram === blackProgram ).map( face => face.face.polygons[ 0 ] ) ),
              blackProgram,
              whiteProgram
            )
          ] );

          Rasterize.rasterize( program, rasterBox, new Bounds2( 0, 0, rasterWidth, rasterHeight ), {
            polygonFiltering: PolygonFilterType.Box
          } );
          Rasterize.rasterize( program, rasterBilinear, new Bounds2( 0, 0, rasterWidth, rasterHeight ), {
            polygonFiltering: PolygonFilterType.Bilinear
          } );

          rasterBox.writeToCanvas( boxCanvas, boxCanvasContext );
          rasterBilinear.writeToCanvas( bilinearCanvas, bilinearCanvasContext );
        }

        // Canvas
        if ( canvasVisible || isFirstRender ) {
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

        // SVG
        if ( svgVisible || isFirstRender ) {
          const path = renderableFaces.map( renderableFace => {
            if ( renderableFace.renderProgram === whiteProgram ) { return ''; }

            const vertices = renderableFace.face.polygons[ 0 ];

            let path = `M${vertices[ 0 ].x} ${vertices[ 0 ].y} `;
            for ( let j = 1; j < vertices.length; j++ ) {
              path += `L${vertices[ j ].x} ${vertices[ j ].y} `;
            }

            return path;
          } ).join( '' );

          svgPath.setAttribute( 'd', `${path}Z` );
          svgPath.setAttribute( 'transform', `scale(${( 1 / window.devicePixelRatio ).toFixed( 15 )})` );
        }

        isFirstRender = false;
      };
      step();
    }
  }
};