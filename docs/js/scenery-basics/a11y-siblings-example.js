import { createSandbox } from "/js/createSandbox.js";

createSandbox( "a11y-siblings-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const circleButton = new Circle( 30, {
      tagName: 'button',
      labelTagName: 'span',
      labelContent: 'red button',
      descriptionTagName: 'p',
      descriptionContent: 'This is a description for the red button.',
      containerTagName: 'div',
      children: [
        new Node( {
          tagName: 'p',
          innerContent: 'This is within the button'
        } )
      ],
      fill: 'red',
      inputListeners: [ new FireListener( { fire: () => {
        circleButton.fill = circleButton.fill === 'red' ? 'blue' : 'red';
        circleButton.labelContent = `${circleButton.fill} button`;
        circleButton.descriptionContent = `This is a description for the ${circleButton.fill} button.`;
      } } ) ],
      cursor: 'pointer'
    } );
    /*END*/
    return circleButton;
  } )();
  scene.addChild( box );
}, {
  showPDOM: true
} );