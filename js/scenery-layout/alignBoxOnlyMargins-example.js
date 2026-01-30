import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const rect = new Rectangle( 0, 0, 50, 50, {
      fill: 'red'
    } );
    return new AlignBox( rect, {
      topMargin: 30,
      xMargin: 10
    } );
    /*END*/
  } )();
  scene.addChild( new Node( {
    children: [
      box,
      new Rectangle( {
        rectBounds: box.bounds,
        stroke: 'black'
      } )
    ]
  } ) );
} );