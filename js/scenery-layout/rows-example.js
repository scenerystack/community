import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'rows-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new GridBox( {
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
          null,
          new Rectangle( 0, 0, 50, 50, {
            fill: colors[ 8 ]
          } )
        ]
      ]
    } );

    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );