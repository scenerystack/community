import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new HBox( {
      spacing: 10,
      children: [
        new Checkbox( new BooleanProperty( true ), new Text( 'Wear Hat', {
          font: '20px sans-serif',
          fill: foregroundColor
        } ), {
          checkboxColor: foregroundColor,
          checkboxColorBackground: backgroundColor,
          accessibleName: 'Wear Hat',
          accessibleHelpText: 'Check this box to wear a hat'
        } ),
        new TextPushButton( 'Go Outside', {
          font: '20px sans-serif',
          accessibleName: 'Go Outside',
          accessibleHelpText: 'Click this button to go outside'
        } )
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
}, {
  showPDOM: true
} );