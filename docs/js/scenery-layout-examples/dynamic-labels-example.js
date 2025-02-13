import { createSandbox } from "/js/createSandbox.js";

createSandbox( "dynamic-labels-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const line = new Line( 0, 0, 400, 0, { stroke: 'black' } );
    const leftLineEnd = new Circle( 3, { fill: 'black', centerX: line.x1, centerY: 0 } )
    const rightLineEnd = new Circle( 3, { fill: 'black', centerX: line.x2, centerY: 0 } )

    /*START*/
    const speedLine = new Node( { children: [ line, leftLineEnd, rightLineEnd ] } );
    const hyperspeedLabel = new Text( 'Hyperspeed', { font: new PhetFont( { size: 14, weight: 'bold' } ) } );
    const parkedLabel = new Text( 'Parked', { font: new PhetFont( { size: 14, weight: 'bold' } ) } );

    const arrow = new ArrowNode( 0, -35, 0, -10 );
    const label = new Text( 'Millenium Falcon', {
      font: new PhetFont( { size: 14, weight: 'bold' } ),
      centerY: -42
    } );

    const speedHBox = new HBox( { children: [ parkedLabel, speedLine, hyperspeedLabel ], spacing: 10 } );
    const speedNode = new Node( { children: [ label, arrow, speedHBox ] } );

    ManualConstraint.create( speedNode, [ label, arrow ], ( labelProxy, arrowProxy ) => {
      labelProxy.centerX = arrowProxy.centerX;
    } )
    /*END*/

    let elapsedTime = 0;
    stepEmitter.addListener( dt => {
      elapsedTime += dt;

      const minX = speedLine.left;
      const maxX = speedLine.right;
      arrow.x = ( maxX + minX ) / 2 + Math.cos( elapsedTime ) * ( minX - maxX ) / 2;
    } );
    return speedNode;
  } )();
  scene.addChild( box );
} );