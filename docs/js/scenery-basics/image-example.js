import { createSandbox } from "/js/createSandbox.js";

createSandbox( "image-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new Node( {
      children: [
        new Image( '/assets/scenerystack-round.png', {
          scale: 0.2
        } ),
        new Image( '/assets/scenerystack-round.png', {
          scale: 0.1,
          rotation: Math.PI / 6,
          x: 120,
          y: 50
        } )
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );