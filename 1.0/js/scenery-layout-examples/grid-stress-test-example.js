import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new GridBox( {
      autoColumns: 30,
      children: [ ...Array( 30 * 30 ).keys() ].map( () => {
        return new Rectangle( 0, 0, dotRandom.nextDoubleBetween( 2, 20 ), dotRandom.nextDoubleBetween( 2, 20 ), {
          fill: colors[ dotRandom.nextIntBetween( 2, 8 ) ]
        } );
      } )
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );