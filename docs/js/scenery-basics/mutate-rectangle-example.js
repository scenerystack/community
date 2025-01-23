import { createSandbox } from "/js/createSandbox.js";

createSandbox( "mutate-rectangle-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const rectangle = new Rectangle( 0, 0, 200, 30 );
    rectangle.mutate( {
      fill: 'orange',
      stroke: 'red',
      lineWidth: 5
    } );
    /*END*/
    return rectangle;
  } )();
  scene.addChild( box );
} );