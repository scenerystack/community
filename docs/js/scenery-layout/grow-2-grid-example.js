import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'grow-2-grid-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new GridBox( {
      rows: [
        [
          new Rectangle( 0, 0, 75, 50, {
            fill: colors[ 0 ],
            layoutOptions: { xGrow: 1 }
          } ),
          new Rectangle( 0, 0, 50, 75, {
            fill: colors[ 2 ]
          } ),
          new Circle( 25, {
            fill: colors[ 4 ]
          } )
        ],
        [
          new Rectangle( 0, 0, 50, 50, {
            fill: colors[ 6 ]
          } ),
          new Rectangle( 0, 0, 50, 50, {
            fill: colors[ 8 ],
            layoutOptions: { yGrow: 1 }
          } )
        ]
      ]
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true,
    heightResizable: true
  } ) );
} );