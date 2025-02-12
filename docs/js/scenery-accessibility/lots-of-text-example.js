import { createSandbox } from "/js/createSandbox.js";

createSandbox( "lots-of-text-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const pdomNode = new Node( {

      // pdom
      tagName: 'p',
      innerContent: 'Don\'t forget about Chemistry too!',
      labelContent: 'This is paragraph 1. Physics is the best, and this node is going to tell the world!',
      descriptionContent: 'This is paragraph 2. Math is also pretty cool.'
    } );
    /*END*/
    return pdomNode;
  } )();
  scene.addChild( box );
} );