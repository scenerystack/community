import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const pdomNode = new Rectangle( 0, 0, 64, 64, {
      fill: 'blue',

      // pdom
      tagName: 'p',
      innerContent: 'I am a beautiful, blue rectangle.'
    } );
    /*END*/
    return pdomNode;
  } )();
  scene.addChild( box );
} );