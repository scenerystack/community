import { createSandbox } from "/js/createSandbox.js";

createSandbox( "translation-vector2-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new Node( {
      children: [
        // 100x100 rectangle
        new Rectangle( 0, 0, 100, 100, {
          fill: 'red'
        } ),
        // 100x100 rectangle, shifted 100 pixels to the right, and 50 down
        new Rectangle( 0, 0, 100, 100, {
          fill: 'blue',
          translation: new Vector2( 100, 50 )
        } ),
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );