import { createSandbox } from "/js/createSandbox.js";

createSandbox( "declarative-rectangle-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    // Parameters here: x, y, width, height, options
    const rectangle = new Rectangle( 0, 0, 200, 30, {
      fill: 'orange',
      stroke: 'red',
      lineWidth: 5
    } );
    /*END*/
    return rectangle;
  } )();
  scene.addChild( box );
} );