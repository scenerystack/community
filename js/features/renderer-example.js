import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new HBox( {
      spacing: 10,
      children: [
        new Rectangle( 0, 0, 50, 50, {
          fill: 'red',
          renderer: 'canvas'
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: 'green',
          renderer: 'svg'
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: 'blue',
          renderer: 'webgl'
        } )
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );