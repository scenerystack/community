import { createAccessibleDemo } from './createAccessibleDemo.js';

createAccessibleDemo( 'sliderAccessibleProperties', `
export class View extends Node {
  // Provides a Model and a TReadOnlyProperty<Bounds2> that will
  // contain the bounds of the layout area for the view.
  constructor( model, layoutBoundsProperty ) {
    const cyclistNode = new CyclistNode( model.cyclist );
    
    /*START*/
    const accelerationSlider = new AccelerationSlider( model.accelerationProperty, {
      trackSize: new Dimension2( 200, 5 ),
      accessibleName: 'Acceleration',
      accessibleHelpText: 'Adjust the acceleration of the cyclist'
    } );
    /*END*/
    
    const controlsNode = new Panel( accelerationSlider, {
      top: cyclistNode.bottom + 7,
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
` );