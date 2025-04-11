import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const resizingRectangle = new Rectangle( {
      fill: 'green',
      rectHeight: 15
    } );

    let elapsedTime = 0;
    stepEmitter.addListener( dt => {
      elapsedTime += dt;

      const minWidth = 30;
      const maxWidth = 200;
      resizingRectangle.rectWidth = ( minWidth + maxWidth ) / 2 + Math.cos( elapsedTime ) * ( maxWidth - minWidth ) / 2;
    } );

    /*START*/
    const content = new RectangularPushButton( {
      content: resizingRectangle
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );