import { createSandbox } from "/js/createSandbox.js";

createSandbox( "dynamic-centering-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const resizingRectangle = new Rectangle( {
      fill: 'green',
      rectHeight: 15
    } );

    let elapsedTime = 0;
    stepEmitter.addListener( dt => {
      elapsedTime += dt;

      const minWidth = 30;
      const maxWidth = 200;
      resizingRectangle.rectWidth = ( minWidth + maxWidth ) / 2 + Math.cos( elapsedTime ) * ( maxWidth - minWidth ) / 2;
    } );

    /*START*/
    const observationWindowFrame = new Rectangle( 0, 0, 500, 300, { stroke: 'black' } );
    const resizingPushButton = new RectangularPushButton( { content: resizingRectangle } );

    const observationWindow = new Node( { children: [ observationWindowFrame, resizingPushButton ] } );

    ManualConstraint.create( observationWindow, [ resizingPushButton ], ( pushButtonProxy ) => {
      pushButtonProxy.center = observationWindowFrame.center
    } );
    /*END*/
    return observationWindow;
  } )();
  scene.addChild( box );
} );