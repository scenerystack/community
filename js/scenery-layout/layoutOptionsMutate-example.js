import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'layoutOptionsMutate-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const box = new HBox( {
      children: [
        new Rectangle( 0, 0, 50, 100, {
          fill: colors[ 0 ]
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 2 ],
          layoutOptions: { leftMargin: 10 }
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 4 ],
          layoutOptions: { align: 'top' }
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 6 ]
        } )
      ]
    } );
    return box;
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true,
    heightResizable: true
  } ) );
} );