import { createSandbox } from "/js/createSandbox.js";

createSandbox( "text-basic-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new Text( 'Lauren Ipsum, daughter of Dolor Sit Amet', {
      fill: foregroundColor,
      font: 'bold 20px Arial' // any CSS font property is valid
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );