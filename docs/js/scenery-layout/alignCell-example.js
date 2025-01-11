import { createSandbox } from "/js/createSandbox.js";

createSandbox( "alignCell-example", ( scene, stepEmitter, display ) => {
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
    widthResizable: true
  } ) );
} );