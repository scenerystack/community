import { createSandbox } from "/js/createSandbox.js";

createSandbox( "siblings-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const pdomNode = new Node( {

      // pdom
      tagName: 'button',
      innerContent: 'Grab Magnet',
      labelTagName: 'h3',
      labelContent: 'Magnet',
      descriptionTagName: 'p',
      descriptionContent: 'Magnet has a grey south pole on the left and a red north pole on the right.',
      containerTagName: 'section'
    } );

    // the visual representation of the magnet
    var southPole = new Rectangle( 0, 0, 48, 64, { fill: 'grey' } );
    var northPole = new Rectangle( 48, 0, 48, 64, { fill: 'red' } );
    pdomNode.children = [ southPole, northPole ];

    pdomNode.addChild( new Text( 'North South Magnet', { stroke: 'black', center: pdomNode.center } ) );
    /*END*/
    return pdomNode;
  } )();
  scene.addChild( box );
} );