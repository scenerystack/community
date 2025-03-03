import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    // Shadow the actual display
    const display = {
      updateOnRequestAnimationFrame: callback => {
        stepEmitter.addListener( callback );
      }
    };
    /*START*/

    const background = new Rectangle( -150, -50, 300, 100, {
      fill: foregroundColor,
      opacity: 0.2
    } );
    const square = new Rectangle( -25, -25, 50, 50, {
      fill: 'red',
      centerY: background.centerY
    } );
    const content = new Node( {
      children: [ background, square ]
    } );

    let timeElapsed = 0;
    display.updateOnRequestAnimationFrame( dt => {
      timeElapsed += dt;

      // rotate the square
      square.rotation += 2 * dt;

      // move the square back and forth
      square.centerX = Math.sin( 0.823 * timeElapsed ) * 100;
    } );
    /*END*/

    return content;
  } )();
  scene.addChild( box );
} );