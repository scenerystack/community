import { createSandbox } from "/js/createSandbox.js";

createSandbox( "invis-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new HBox( {
      children: [
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 2 ] } ),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ], visible: false } ),
        new Circle( 25, { fill: colors[ 6 ] } ),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 8 ] } )
      ]
    } );
    /*END*/
  } )();
  scene.addChild( box );
} );