import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'alignBoxMargins-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const rect = new Rectangle( 0, 0, 50, 50, {
      fill: 'red'
    } );
    return new AlignBox( rect, {
      alignBounds: new Bounds2( 0, 0, 100, 100 ),
      xAlign: 'left',
      yAlign: 'bottom',
      leftMargin: 5,
      bottomMargin: 10
    } );
    /*END*/
  } )();
  scene.addChild( new Node( {
    children: [
      box,
      new Rectangle( {
        rectBounds: box.bounds,
        stroke: 'black'
      } )
    ]
  } ) );
} );