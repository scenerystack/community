import { createAccessibleDemo } from './createAccessibleDemo.js';

createAccessibleDemo( 'radioButtons', `
export class View extends Node {
  // Provides a Model and a TReadOnlyProperty<Bounds2> that will
  // contain the bounds of the layout area for the view.
  constructor( model, layoutBoundsProperty ) {
    const font = Font.fromCSS( '18px Arial' );
    const boldFont = Font.fromCSS( 'bold 18px Arial' );

    const cyclistNode = new CyclistNode( model.cyclist );
    
    const accelerationSlider = new AccelerationSlider( model.accelerationProperty, {
      trackSize: new Dimension2( 200, 5 ),
      accessibleName: 'Acceleration',
      accessibleHelpText: 'Adjust the acceleration of the cyclist',
      pdomCreateAriaValueText: value => \`\${toFixed( value / 2, 1 )} meters per second squared\`,
      thumbTouchAreaYDilation: 7
    } );
    
    const stopButton = new TextPushButton( 'Stop', {
      font: font,
      listener: () => {
        model.stop();

        stopButton.alertDescriptionUtterance( 'The cyclist has stopped' );
      },
      accessibleName: 'Stop',
      accessibleHelpText: 'Stop all motion of the cyclist'
    } );
    
    /*START*/
    // Utility for creating labels
    const labelFactory = text => () => new Text( text, { font: font } );
    
    // Listen to the color shift property, and give options for each color
    const bicycleColorRadioButtonGroup = new VerticalAquaRadioButtonGroup( model.cyclist.bicycleColorShiftProperty, [
      { value: BLUE_COLOR_SHIFT, createNode: labelFactory( 'Blue' ) },
      { value: GREEN_COLOR_SHIFT, createNode: labelFactory( 'Green' ) },
      { value: RED_COLOR_SHIFT, createNode: labelFactory( 'Red' ) }
    ], {
      accessibleName: 'Bicycle Color',
      accessibleHelpText: 'Change the color of the bicycle',
      touchAreaXDilation: 20
    } );
    
    // This will be wrapped with an HBox to horizontally contain content
    const controlsNode = new Panel( new HBox( {
      spacing: 30,
      align: 'top',
      children: [
        new VBox( {
          spacing: 7,
          children: [
            new Text( 'Acceleration', { font: boldFont } ),
            accelerationSlider,
            stopButton
          ]
        } ),
        new VBox( {
          spacing: 7,
          children: [
            new Text( 'Bicycle Color', { font: boldFont } ),
            bicycleColorRadioButtonGroup
          ]
        } )
      ]
    } ), {
      top: cyclistNode.bottom + 7,
      xMargin: 20
    } );
    /*END*/

    const scaledNode = new Node( {
      children: [
        cyclistNode,
        controlsNode
      ]
    } );

    super( {
      children: [
        new BackgroundNode( model.positionProperty, layoutBoundsProperty ),
        scaledNode
      ]
    } );

    layoutBoundsProperty.link( bounds => {
      const scale = bounds.height / 500;
      scaledNode.setScaleMagnitude( bounds.height / 500 );
      scaledNode.y = ( bounds.top + 3 * bounds.bottom ) / 4;
      cyclistNode.centerX = bounds.centerX / scale;
      controlsNode.centerX = bounds.centerX / scale;
    } );
  }
}
` );