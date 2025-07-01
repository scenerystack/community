import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const string = 'H<sub>2</sub>O for <u><b>Lauren</b> Ipsum</u>';
    const content = new RichText( string, {
      fill: foregroundColor,
      font: '20px Arial'
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );