import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const box = new GridBox();
    box.addRow( [
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 2 ] } ),
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 2 ] } )
    ] );
    box.addColumn( [
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } ),
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } ),
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } )
    ] );
    return box;
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );