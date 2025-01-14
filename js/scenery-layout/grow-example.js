import { createSandbox } from "/js/createSandbox.js";

createSandbox( "grow-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new HBox( {
      children: [
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 2 ] } ),
        new Rectangle( {
          sizable: true,
          localMinimumWidth: 50,
          localMinimumHeight: 50,
          fill: "gray",
          layoutOptions: { grow: 1 }
        } ),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } ),
        new Rectangle( {
          sizable: true,
          localMinimumWidth: 50,
          localMinimumHeight: 50,
          fill: "gray",
          layoutOptions: { grow: 4 }
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