import { createSandbox } from "/js/createSandbox.js";

createSandbox( "add-child-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new Node();
    for ( let i = 0; i < 5; i++ ) {
      content.addChild( new Rectangle( i * 50, 0, 50, 50, {
        fill: `rgb(${i * 40},0,0)`
      } ) );
    }
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );