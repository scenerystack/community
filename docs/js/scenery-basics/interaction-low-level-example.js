import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const radius = 5;
    const lineContainer = new Node();
    const dotContainer = new Node();
    const background = new Rectangle( 0, 0, 400, 300, { stroke: foregroundColor } );
    background.addChild( new Text( 'Drag a finger or mouse here', {
      fill: foregroundColor,
      center: background.center,
      font: 'bold 20px sans-serif',
      opacity: 0.2
    } ) );
    const content = new Node( {
      children: [
        background,
        lineContainer,
        dotContainer
      ]
    } );
    let lastPoint = null;
    const addPoint = point => {
      if ( !background.bounds.eroded( radius ).containsPoint( point ) ) {
        return;
      }
      dotContainer.addChild( new Circle( radius, {
        fill: foregroundColor,
        center: point
      } ) );
      if ( lastPoint ) {
        lineContainer.addChild( new Line( lastPoint, point, {
          stroke: 'red',
          lineWidth: 2
        } ) );
      }
      lastPoint = point;
      if ( dotContainer.children.length > 50 ) {
        dotContainer.removeChild( dotContainer.children[ 0 ] );
      }
      if ( lineContainer.children.length > 49 ) {
        lineContainer.removeChild( lineContainer.children[ 0 ] );
      }
    };
    content.addInputListener( {
      move: event => { addPoint( content.globalToLocalPoint( event.pointer.point ) ); }
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );