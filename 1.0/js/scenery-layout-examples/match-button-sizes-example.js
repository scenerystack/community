import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const buttonOptions = { font: new PhetFont( 14 ) };
    const leftButton = new TextPushButton( 'Left', buttonOptions );
    const middleButton = new TextPushButton( 'Middle', buttonOptions );
    const rightButton = new TextPushButton( 'Right', buttonOptions );

    const alignGroup = new AlignGroup( [ leftButton, middleButton, rightButton ] );

    const content = new HBox( {
      spacing: 10,
      children: [
        alignGroup.createBox( leftButton, { align: 'stretch' } ),
        alignGroup.createBox( middleButton, { align: 'stretch' } ),
        alignGroup.createBox( rightButton, { align: 'stretch' } )
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );