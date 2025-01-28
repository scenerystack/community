import { createSandbox } from "/js/createSandbox.js";

createSandbox( "path-shape-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    // Method calls on the Shape can be chained for convenience
    const shape = new Shape()
      .moveTo( 0, 0 ) // start at 0,0
      .lineTo( 40, 40 ) // line from 0.0 to 40,40
      .quadraticCurveTo( 80, 0, 40, -40 ) // cubic to 40,-40
      .lineTo( 40, 0 ) // line from 40,-40 to 40,0
      .close(); // close with a line from 40,0 to 0,0

    const content = new Path( shape, {
      fill: 'red',
      stroke: 'black',
      lineWidth: 2
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );