import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new Node();
    for ( let i = 0; i < 7; i++ ) {
      content.addChild( new Circle( 30, {
        x: i * 40,
        fill: `rgb(${i * 40},0,0)`
      } ) );
    }
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );