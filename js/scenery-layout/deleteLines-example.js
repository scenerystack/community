import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {

    const range = ( start, end, step = 1 ) => {
      return Array.from( { length: Math.ceil( ( end - start ) / step ) }, ( _, i ) => start + i * step );
    };

    /*START*/
    const box = new GridBox( {
      rows: range( 0, 8 ).map( row => {
        return range( 0, 8 ).map( column => {
          return new Rectangle( 0, 0, 80, 20, {
            fill: new Color( row * 32, column * 32, 1 ),
            children: [
              new Text( `row ${row}, column ${column}`, { fill: 'white', centerX: 40, centerY: 10 } )
            ]
          } );
        } );
      } )
    } );
    box.removeRow( 2 );
    box.removeRow( 2 );
    box.removeColumn( 5 );
    box.removeColumn( 5 );

    return box;
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );