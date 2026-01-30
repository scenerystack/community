import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new HBox( {
      margin: 5,
      children: [
        new VSeparator(),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 2 ] } ),
        new VSeparator(),
        new VSeparator(),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } ),
        new Circle( 25, { fill: colors[ 6 ] } ),
        new VSeparator(),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 8 ] } ),
        new VSeparator()
      ]
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true
  } ) );
} );