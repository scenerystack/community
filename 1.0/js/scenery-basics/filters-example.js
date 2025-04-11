import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const filters = [
      null,
      new HueRotate( Math.PI ),
      new Contrast( 2 ),
      new Contrast( 0.5 ),
      new Saturate( 3 ),
      new Brightness( 2 ),
      new Brightness( 0.5 ),
      new Invert(),
      new Sepia(),
      new ColorMatrixFilter(
        0, 0, 0, 0, 1,
        0, 2, 0, 0, -1,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0
      )
    ];

    const image = new Image( '/assets/scenerystack-round.png', {
      scale: 0.1,
    } );

    const content = new GridBox( {
      autoColumns: 4,
      spacing: 10,
      children: filters.map( filter => {
        return new Node( {
          filters: filter !== null ? [ filter ] : [],
          children: [ image ]
        } );
      } ),
      renderer: 'canvas'
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );