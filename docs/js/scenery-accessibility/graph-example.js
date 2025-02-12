import { createSandbox } from "/js/createSandbox.js";

createSandbox( "graph-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const dimension = 64;

    // add a parent rectangle, represented as an unordered list
    const rectangle = new Rectangle( 0, 0, dimension, dimension, {
      fill: 'lightblue',

      // pdom
      tagName: 'ul'
    } );

    // add child circles, each represented as a list item
    for ( let i = 0; i < 5; i++ ) {
      const x = Math.floor( Math.random() * dimension );
      const y = Math.floor( Math.random() * dimension );

      rectangle.addChild( new Circle( 3, {
        fill: 'red',
        center: new Vector2( x, y ),

        // pdom
        tagName: 'li',
        innerContent: `Circle ${i} at ${x},${y}`
      } ) );
    }
    /*END*/
    return rectangle;
  } )();
  scene.addChild( box );
} );