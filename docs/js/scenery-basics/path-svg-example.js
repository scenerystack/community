import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const shape = new Shape( 'M 0 0 L 40 40 Q 80 0 40 -40 L 40 0 L 0 0 Z' );
    const content = new Path( shape, {
      fill: 'cyan',
      stroke: foregroundColor,
      lineWidth: 2
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );