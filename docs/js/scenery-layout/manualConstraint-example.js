import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'manualConstraint-example', ( scene, stepEmitter, display ) => {

  const box = ( () => {
    /*START*/
    const background = new Rectangle( 0, 0, 400, 200, {
      fill: '#ccc'
    } );

    const child1 = createLabeledBox( 'Child 1', colors[ 2 ], 50, 50 );
    const child2 = createLabeledBox( 'Child 2', colors[ 4 ], 50, 50 );
    const child3 = createLabeledBox( 'Child 3', colors[ 5 ], 50, 50 );

    ManualConstraint.create( background, [ child1, child2 ], ( child1Proxy, child2Proxy ) => {
      child2Proxy.leftCenter = child1Proxy.rightCenter;
    } );
    ManualConstraint.create( background, [ child2, child3 ], ( child2Proxy, child3Proxy ) => {
      child3Proxy.left = child2Proxy.right;
    } );
    ManualConstraint.create( background, [ child1, child3 ], ( child1Proxy, child3Proxy ) => {
      child3Proxy.centerY = child1Proxy.centerY;
    } );

    const nodes = [
      new Node( { x: 50, y: 50, children: [ child1 ] } ),
      new Node( { scale: 2, y: 20, children: [ child2 ] } ),
      new Node( {
        matrix: phet.dot.Matrix3.rowMajor(
          0.5, 0, 0,
          0, 1, 0,
          0, 0, 1 ), children: [ child3 ]
      } )
    ];

    let elapsedTime = 0;

    stepEmitter.addListener( dt => {
      elapsedTime += dt;
      child1.translation = Vector2.createPolar( 10, 2 * elapsedTime );

      background.children = [
        ...( elapsedTime % 3 < 2 ? [ nodes[ 0 ] ] : [] ),
        ...( elapsedTime % 5 < 4 ? [ nodes[ 1 ] ] : [] ),
        ...( elapsedTime % 7 < 5 ? [ nodes[ 2 ] ] : [] )
      ];
    } );

    /*END*/
    return background;
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );