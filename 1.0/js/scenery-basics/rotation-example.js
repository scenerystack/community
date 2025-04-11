import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new Node( {
      children: [
        // 100x100 rectangle
        new Rectangle( 0, 0, 100, 100, {
          fill: 'red'
        } ),
        // 100x100 rectangle, rotated by pi/6 radians
        new Rectangle( 0, 0, 100, 100, {
          fill: 'blue',
          rotation: Math.PI / 6
        } ),
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );