import { createSandbox } from "/js/createSandbox.js";

createSandbox( "children-ordering-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new Node( {
      children: [
        // Ordered from back to front
        new Rectangle( 0, 0, 200, 80, { fill: 'lightBlue' } ),
        new Rectangle( 10, 10, 180, 30, { fill: 'white' } ),
        new Text( 'Text on top', {
          centerX: 100, centerY: 40,
          font: 'bold 20px sans-serif',
        } )
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );