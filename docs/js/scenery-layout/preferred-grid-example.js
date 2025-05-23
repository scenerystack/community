import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
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
            sizable: true,
            localMinimumWidth: 50,
            localMinimumHeight: 50,
            fill: 'gray',
            layoutOptions: { grow: 1, stretch: true }
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