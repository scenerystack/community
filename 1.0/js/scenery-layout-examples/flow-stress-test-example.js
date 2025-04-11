import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new FlowBox( {
      orientation: 'horizontal',
      wrap: true,
      justify: 'left',
      children: [ ...Array( 300 ).keys() ].map( n => new Rectangle( 0, 0, dotRandom.nextDoubleBetween( 2, 20 ), dotRandom.nextDoubleBetween( 10, 50 ), {
        fill: colors[ dotRandom.nextIntBetween( 2, 8 ) ]
      } ) ),
      preferredWidth: 500
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );