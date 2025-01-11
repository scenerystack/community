import { createSandbox } from "/js/createSandbox.js";

createSandbox( "marginCell-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new HBox( {
      align: "top",
      children: [
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 2 ],
          layoutOptions: { topMargin: 10 }
        } ),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } ),
        new Circle( 25, { fill: colors[ 6 ] } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 8 ],
          layoutOptions: { leftMargin: 10 }
        } )
      ]
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true
  } ) );
} );