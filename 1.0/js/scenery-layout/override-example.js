import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new HBox( {
      topMargin: 10,
      align: "top",
      children: [
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 2 ],
          layoutOptions: { topMargin: 0 }
        } ),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } ),
        new Circle( 25, { fill: colors[ 6 ] } ),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 8 ] } )
      ]
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true
  } ) );
} );