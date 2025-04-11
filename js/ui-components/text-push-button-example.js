import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new HBox( {
      spacing: 20,
      children: [
        new TextPushButton( 'TextPushButton (default)', {
          font: '20px sans-serif'
        } ),
        new TextPushButton( 'TextPushButton (flat)', {
          font: '20px sans-serif',
          buttonAppearanceStrategy: ButtonNode.FlatAppearanceStrategy
        } ),
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );