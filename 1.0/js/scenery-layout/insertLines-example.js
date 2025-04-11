import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const box = new GridBox( { grow: 1 } );
    box.insertRow( 0, [
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 2 ] } ),
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 2 ] } )
    ] );
    box.insertColumn( 1, [
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } ),
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } ),
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } )
    ] );
    box.insertRow( 2, [
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 6 ] } ),
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 6 ] } ),
      new Rectangle( 0, 0, 50, 50, { fill: colors[ 6 ] } )
    ] );
    return box;
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );