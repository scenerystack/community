import { createSandbox } from "/js/createSandbox.js";

createSandbox( "stretch-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new HBox( {
      children: [
        new Rectangle( 0, 0, 50, 100, {
          fill: colors[ 2 ]
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 4 ],
          layoutOptions: { align: "top" }
        } ),
        new Rectangle( {
          sizable: true,
          localMinimumWidth: 50,
          localMinimumHeight: 50,
          fill: "gray",
          layoutOptions: { stretch: true }
        } ),
        new Circle( 25, {
          fill: colors[ 6 ],
          layoutOptions: { align: "bottom" }
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 8 ],
          layoutOptions: { align: "center" }
        } )
      ]
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true,
    heightResizable: true
  } ) );
} );