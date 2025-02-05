import { createSandbox } from "/js/createSandbox.js";

createSandbox( "path-basic-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new HBox( {
      spacing: 10,
      children: [
        // Rectangles are specified with x, y, width, height
        new Rectangle( 0, 0, 50, 50, {
          // fill is the "internal" color
          fill: 'red',

          // stroke color is applied on top, on the border of the shape
          stroke: foregroundColor,

          // the width of the stroke can be controlled
          lineWidth: 3
        } ),
        // Circles have a radius specified
        new Circle( 25, { fill: 'green' } ),
        // Lines are specified with x1, y1, x2, y2 (connecting two points)
        new Line( 0, 0, 50, 50, {
          stroke: 'blue',
          lineWidth: 5,

          // lineCap can be used to control the appearance of the
          // ends of the line similarly, lineJoin can be used to
          // control the appearance of any corners
          lineCap: 'round'
        } )
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );