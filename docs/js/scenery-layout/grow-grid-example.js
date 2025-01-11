import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'grow-grid-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new GridBox( {
      grow: 1,
      rows: [
        [
          new Rectangle( 0, 0, 75, 50, {
            fill: colors[ 0 ]
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
            fill: colors[ 8 ]
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