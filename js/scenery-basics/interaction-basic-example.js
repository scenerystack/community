import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const button = new TextPushButton( 'Change Button Color', {
      baseColor: 'orange',
      font: '20px sans-serif',
      listener: () => {
        button.baseColor = button.baseColor === 'orange' ? 'cyan' : 'orange';
      }
    } );
    /*END*/
    return button;
  } )();
  scene.addChild( box );
} );