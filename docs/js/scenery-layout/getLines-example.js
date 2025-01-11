import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'getLines-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {

    const range = ( start, end, step = 1 ) => {
      return Array.from( { length: Math.ceil( ( end - start ) / step ) }, ( _, i ) => start + i * step );
    };

    /*START*/
    const box = new GridBox( {
      rows: range( 0, 8 ).map( row => {
        return range( 0, 8 ).map( column => {
          return new Rectangle( 0, 0, 20, 20, {
            fill: new Color( row * 32, column * 32, 1 )
          } );
        } );
      } )
    } );
    box.getNodesInRow( 3 ).forEach( node => { node.opacity = 0.5; } );
    box.getNodesInColumn( 3 ).forEach( node => { node.opacity = 0.5; } );
    return box;
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );