import { createAccessibleDemo } from './createAccessibleDemo.js';

createAccessibleDemo( 'sliderTouchArea', `
export class View extends Node {
  // Provides a Model and a TReadOnlyProperty<Bounds2> that will
  // contain the bounds of the layout area for the view.
  constructor( model, layoutBoundsProperty ) {
    const font = Font.fromCSS( '18px Arial' );
    const boldFont = Font.fromCSS( 'bold 18px Arial' );

    const cyclistNode = new CyclistNode( model.cyclist );
    
    /*START*/
    const accelerationSlider = new AccelerationSlider( model.accelerationProperty, {
      trackSize: new Dimension2( 200, 5 ),
      accessibleName: 'Acceleration',
      accessibleHelpText: 'Adjust the acceleration of the cyclist',
      pdomCreateAriaValueText: value => \`\${toFixed( value / 2, 1 )} meters per second squared\`,
      thumbTouchAreaXDilation: 20,
      thumbTouchAreaYDilation: 15
    } );
    /*END*/
    
    const controlsNode = new Panel( new VBox( {
      spacing: 7,
      children: [
        new Text( 'Acceleration', { font: boldFont } ),
        accelerationSlider
      ]
    } ), {
      top: cyclistNode.bottom + 40,
      xMargin: 20
    } );

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
`, { pointerAreas: true } );