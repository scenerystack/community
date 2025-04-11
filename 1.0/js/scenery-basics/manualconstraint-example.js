import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const circle = new Circle( 40, { fill: 'red' } );
    const rectangle = new Rectangle( 0, 0, 50, 10, {
      fill: 'orange'
    } );
    const content = new Node( {
      children: [
        circle,
        // Put the circle and rectangle in different coordinate frames
        // (with different parent nodes)
        new Node( {
          y: 40,
          scale: 2,
          children: [ rectangle ]
        } )
      ]
    } );

    // The layout code will run when the circle and rectangle are somehow
    // connected.
    ManualConstraint.create( content, [
      circle, rectangle
    ], ( circleProxy, rectangleProxy ) => {
      // Positions of the proxy objects are in the content's coordinate frame
      rectangleProxy.center = circleProxy.center;
    } );

    // Keeps the rectangle adjusted to the position of the circle,
    // even if it moves or scales
    circle.x = 40;
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );