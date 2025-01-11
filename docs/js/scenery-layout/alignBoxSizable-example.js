import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'alignBoxSizable-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const rect = new Rectangle( 0, 0, 50, 50, {
      fill: 'red'
    } );
    return new AlignBox( rect, {
      xAlign: 'left',
      yAlign: 'bottom',
      sizable: true,
      margin: 10
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true,
    heightResizable: true
  } ) );
} );