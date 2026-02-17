import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const boxes = colors.map( color => new Rectangle( 0, 0, 50, 50, { fill: color } ) );
    const box = new GridBox( {
      children: boxes,
      autoColumns: 3,
      grow: 1
    } );
    box.autoColumns = null;

    // Find a node and insert a row before it
    box.insertRow( box.getRowOfNode( boxes[ 4 ] ), [
      new Rectangle( 0, 0, 50, 50, { fill: 'black' } ),
      new Rectangle( 0, 0, 50, 50, { fill: 'black' } ),
      new Rectangle( 0, 0, 50, 50, { fill: 'black' } )
    ] );

    // Find a node and insert a column before it
    box.insertColumn( box.getColumnOfNode( boxes[ 4 ] ), [
      new Rectangle( 0, 0, 50, 50, { fill: 'black' } ),
      new Rectangle( 0, 0, 50, 50, { fill: 'black' } ),
      new Rectangle( 0, 0, 50, 50, { fill: 'black' } ),
      new Rectangle( 0, 0, 50, 50, { fill: 'black' } ),
      new Rectangle( 0, 0, 50, 50, { fill: 'black' } )
    ] );

    return box;
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );