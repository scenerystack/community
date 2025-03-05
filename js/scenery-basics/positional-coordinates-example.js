import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const rectangle = new Rectangle( 0, 0, 100, 100, { fill: 'red' } );

    const content = new Node( {
      children: [
        rectangle,
        // Position a circle to the left of the rectangle (top aligned)
        new Circle( 20, {
          right: rectangle.left,
          top: rectangle.top,
          fill: 'green'
        } ),
        // Mark the left-center of the rectangle
        new Circle( 5, {
          center: rectangle.leftCenter,
          fill: foregroundColor
        } ),
        // Mark the right-top of the rectangle
        new Circle( 5, {
          center: rectangle.rightTop,
          fill: foregroundColor
        } ),
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );