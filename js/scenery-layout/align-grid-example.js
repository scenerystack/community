import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new GridBox( {
      grow: 1,
      rows: [
        [
          new Rectangle( 0, 0, 75, 50, {
            fill: colors[ 0 ],
            layoutOptions: { xAlign: 'left', yAlign: 'top' }
          } ),
          new Rectangle( 0, 0, 50, 75, {
            fill: colors[ 2 ]
          } ),
          new Circle( 25, {
            fill: colors[ 4 ],
            layoutOptions: { yAlign: 'bottom' }
          } )
        ],
        [
          new Rectangle( 0, 0, 50, 50, {
            fill: colors[ 6 ]
          } ),
          new Rectangle( 0, 0, 50, 50, {
            fill: colors[ 8 ],
            layoutOptions: { yAlign: 'top' }
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