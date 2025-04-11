import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new HBox( {
      spacing: 20,
      children: [
        new RectangularPushButton( {
          content: new Rectangle( 0, 0, 50, 20, { fill: 'purple' } )
        } ),
        new RectangularPushButton( {
          content: new Rectangle( 0, 0, 50, 20, { fill: 'purple' } ),
          buttonAppearanceStrategy: ButtonNode.FlatAppearanceStrategy
        } ),
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );