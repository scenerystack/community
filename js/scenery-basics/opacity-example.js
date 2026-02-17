import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const quantity = 20;
    const content = new HBox( {
      spacing: 5,
      children: [ ...Array( quantity ).keys() ].map( n => {
        return new Rectangle( 0, 0, 15, 50, {
          fill: 'red',
          opacity: ( n + 1 ) / quantity
        } );
      } )
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );