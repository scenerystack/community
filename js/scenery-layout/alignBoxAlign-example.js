import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'alignBoxAlign-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const rect = new Rectangle( 0, 0, 50, 50, {
      fill: 'red'
    } );
    return new AlignBox( rect, {
      alignBounds: new Bounds2( 0, 0, 100, 100 ),
      xAlign: 'left',
      yAlign: 'bottom'
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