import { createSandbox } from "/js/createSandbox.js";

createSandbox( "display-preexisting-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    if ( false ) {
      /*START*/
      const display = new Display( scene, {
        container: document.querySelector( '#some-element' )
      } );
      /*END*/
    }
    return new Rectangle( 0, 0, 50, 50, { fill: 'transparent' } );
  } )();
  scene.addChild( box );
}, {
  showDisplay: false
} );