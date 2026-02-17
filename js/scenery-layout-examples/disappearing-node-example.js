import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const result = new Rectangle( {
      fill: 'green',
      rectWidth: 150,
      rectHeight: 100
    } );

    let elapsedTime = 0;
    stepEmitter.addListener( dt => {
      elapsedTime += dt;
      result.visible = Math.floor( elapsedTime ) % 2 === 0;
    } );

    /*START*/

    const panel = new Panel( new FlowBox( {
      orientation: 'vertical',
      align: 'left',
      spacing: 5,
      children: [
        new HSeparator(),
        new Text( 'Disappearing node?:', { font: new PhetFont( { size: 14, weight: 'bold' } ) } ),
        new HSeparator(),
        result,
        new HSeparator()
      ]
    } ) );
    const content = new VBox( { children: [ panel ], preferredHeight: 150 } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );