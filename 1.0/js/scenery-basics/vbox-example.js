import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new VBox( {
      spacing: 10,
      align: 'center', // the default, left/right/origin also supported
      children: [
        new Circle( 32, { fill: 'red' } ),
        new Circle( 27, { fill: 'red' } ),
        new Circle( 22, { fill: 'red' } ),
        new Circle( 16, { fill: 'red' } ),
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );