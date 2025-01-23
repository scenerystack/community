import { createSandbox } from "/js/createSandbox.js";

createSandbox( "mutation-rectangle-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const rectangle = new Rectangle( 0, 0, 200, 30 );
    rectangle.fill = 'orange';
    rectangle.stroke = 'red';
    rectangle.lineWidth = 5;
    /*END*/
    return rectangle;
  } )();
  scene.addChild( box );
} );