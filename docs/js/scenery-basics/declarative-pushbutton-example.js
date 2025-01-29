import { createSandbox } from "/js/createSandbox.js";

createSandbox( "declarative-pushbutton-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const button = new TextPushButton( 'Example Button', {
      baseColor: 'orange',
      font: '20px sans-serif'
    } );
    /*END*/
    return button;
  } )();
  scene.addChild( box );
} );