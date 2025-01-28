import { createSandbox } from "/js/createSandbox.js";

createSandbox( "richtext-basic-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const string = 'H<sub>2</sub>O for <u><b>Lauren</b> Ipsum</u>';
    const content = new RichText( string, {
      fill: 'purple',
      font: '20px Arial'
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );