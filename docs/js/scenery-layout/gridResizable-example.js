import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'gridResizable-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new GridBox( {
      rows: [
        [
          new Rectangle( 0, 0, 50, 50, {
            fill: colors[ 0 ]
          } ),
          new Rectangle( 0, 0, 50, 50, {
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
          new Rectangle( {
            // This rectangle will adjust its height
            heightSizable: true,
            layoutOptions: { grow: 1, stretch: true },
            localMinimumHeight: 50,

            // But will not adjust its width
            widthSizable: false,
            rectWidth: 50,

            fill: 'gray'
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