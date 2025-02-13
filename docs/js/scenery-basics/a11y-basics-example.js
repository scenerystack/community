import { createSandbox } from "/js/createSandbox.js";

createSandbox( "a11y-basics-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new HBox( {
      spacing: 10,
      children: [
        new Checkbox( new BooleanProperty( true ), new Text( 'Wear Hat', { font: '20px sans-serif' } ), {
          accessibleName: 'Wear Hat',
          helpText: 'Check this box to wear a hat'
        } ),
        new TextPushButton( 'Go Outside', {
          font: '20px sans-serif',
          accessibleName: 'Go Outside',
          helpText: 'Click this button to go outside'
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