import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
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

    const content = new Panel( new VBox( {
      align: 'left',
      stretch: true,
      spacing: 5,
      children: [
        new Text( 'Checkbox Icons', { font: new PhetFont( { size: 14, weight: 'bold' } ) } ),
        new Checkbox( new BooleanProperty( false ), new HBox( {
          spacing: 10,
          children: [
            new Text( 'First', {
              font: new PhetFont( 12 )
            } ),
            new Rectangle( 0, 0, 14, 14, { fill: 'red' } )
          ]
        } ), {
          boxWidth: 14
        } ),
        new Checkbox( new BooleanProperty( false ), new HBox( {
          spacing: 10,
          children: [
            new Text( 'Second', {
              font: new PhetFont( 12 )
            } ),
            new Rectangle( 0, 0, 14, 14, { fill: 'blue' } )
          ]
        } ), {
          boxWidth: 14,
          layoutOptions: {
            leftMargin: 20
          }
        } ),
        resizingRectangle
      ]
    } ) );

    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );