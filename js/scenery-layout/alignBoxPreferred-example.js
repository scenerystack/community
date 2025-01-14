import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'alignBoxPreferred-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const rect = new Rectangle( 0, 0, 50, 50, {
      fill: 'red'
    } );
    return new AlignBox( rect, {
      preferredWidth: 100,
      preferredHeight: 100,
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