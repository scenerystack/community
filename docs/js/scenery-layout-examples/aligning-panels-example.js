import { createSandbox } from "/js/createSandbox.js";

createSandbox( "aligning-panels-example", ( scene, stepEmitter, display ) => {
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

    const content = new VBox( {
      // This sets the default alignment to stretch (could be provided in each of the
      // Panel's layoutOptions instead)
      stretch: true,

      spacing: 10,
      children: [
        new Panel( new VBox( {
          align: 'left',
          stretch: true,
          spacing: 5,
          children: [
            new Text( 'Checkboxes', { font: new PhetFont( { size: 14, weight: 'bold' } ) } ),
            new Checkbox( new BooleanProperty( false ), new Text( 'First checkbox', {
              font: new PhetFont( 12 )
            } ), {
              boxWidth: 14
            } ),
            new Checkbox( new BooleanProperty( false ), new Text( 'Second checkbox', {
              font: new PhetFont( 12 )
            } ), {
              boxWidth: 14
            } )
          ]
        } ) ),
        new Panel( new VBox( {
          align: 'left',
          spacing: 5,
          children: [
            new Text( 'Resizing', { font: new PhetFont( { size: 14, weight: 'bold' } ) } ),
            resizingRectangle
          ]
        } ) )
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );