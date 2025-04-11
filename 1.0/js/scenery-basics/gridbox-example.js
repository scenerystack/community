import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new GridBox( {
      spacing: 10,
      xAlign: 'center', // the default, left/right/origin also supported
      yAlign: 'center', // the default, top/bottom/origin also supported
      rows: [
        [
          new Circle( 32, { fill: 'red' } ),
          new Circle( 27, { fill: 'red' } ),
        ], [
          new Circle( 22, { fill: 'red' } ),
          new Circle( 16, { fill: 'red' } ),
        ]
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );