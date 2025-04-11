import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new Node( {
      children: [
        // 100x100 rectangle
        new Rectangle( 0, 0, 100, 100, {
          fill: 'red'
        } ),
        // 100x100 rectangle, scaled down to 75%
        new Rectangle( 0, 0, 100, 100, {
          fill: 'blue',
          scale: 0.75
        } ),
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );