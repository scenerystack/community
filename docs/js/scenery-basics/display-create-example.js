import { createSandbox } from "/js/createSandbox.js";

createSandbox( "display-create-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    if ( false ) {
      /*START*/
      const display = new Display( scene, {} );
      /*END*/
    }
    return new Rectangle( 0, 0, 50, 50, { fill: 'transparent' } );
  } )();
  scene.addChild( box );
}, {
  showDisplay: false
} );