import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const boxes = [
      "top",
      "bottom",
      "center",
      "origin"
    ].map( align => {
      return new HBox( {
        children: [
          new Rectangle( 0, 0, 50, 15, { fill: colors[ 9 ] } ),
          new Rectangle( 0, 0, 50, 20, { fill: colors[ 6 ] } ),
          new Rectangle( 0, 0, 50, 5, { fill: colors[ 4 ] } ),
          new Rectangle( 0, 0, 50, 15, { fill: colors[ 2 ] } ),
          new Circle( 7, { fill: colors[ 0 ] } ),
          new Text( `Alignment: ${align}` )
        ],
        justify: "left",
        align: align
      } );
    } );
    /*END*/
    return new VBox( {
      children: boxes,
      spacing: 10,
      align: "left"
    } );
  } )();
  scene.addChild( box );
} );