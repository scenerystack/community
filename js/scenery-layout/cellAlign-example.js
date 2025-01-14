import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'cellAlign-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new HBox( {
      grow: 1, // expand everything
      children: [
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 0 ] } ),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 2 ] } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 4 ],
          layoutOptions: { cellAlign: 'right' }
        } ),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 6 ] } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 7 ],
          layoutOptions: { cellAlign: 'center' }
        } ),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 8 ] } )
      ]
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true
  } ) );
} );