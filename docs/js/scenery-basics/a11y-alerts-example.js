import { createSandbox } from "/js/createSandbox.js";

createSandbox( "a11y-alerts-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    let count = 0;
    const circleButton = new Circle( 30, {
      tagName: 'button',
      innerContent: 'Circle Button',
      fill: 'red',
      inputListeners: [ new FireListener( { fire: () => {
        const alertString = `Clicked ${++count} time${count > 1 ? 's' : ''}`
        circleButton.alertDescriptionUtterance( alertString );
      } } ) ],
      cursor: 'pointer'
    } );
    /*END*/
    return circleButton;
  } )();
  scene.addChild( box );
}, {
  showPDOM: true,
  showAriaLive: true
} );