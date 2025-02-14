import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    if ( false ) {
      /*START*/
      const display = new Display( scene, {
        // initial sizes
        width: 400,
        height: 200
      } );

      // Change the size of the display
      display.width = 600;
      /*END*/
    }
    return new Rectangle( 0, 0, 50, 50, { fill: 'transparent' } );
  } )();
  scene.addChild( box );
}, {
  showDisplay: false
} );