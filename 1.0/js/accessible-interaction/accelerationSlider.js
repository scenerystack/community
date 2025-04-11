import { createAccessibleDemo } from './createAccessibleDemo.js';

createAccessibleDemo( 'accelerationSlider', `
export class View extends Node {
  // Provides a Model and a TReadOnlyProperty<Bounds2> that will
  // contain the bounds of the layout area for the view.
  constructor( model, layoutBoundsProperty ) {
    const cyclistNode = new CyclistNode( model.cyclist );
    
    /*START*/
    // Create a slider that controls the model.accelerationProperty
    const accelerationSlider = new AccelerationSlider( model.accelerationProperty, {
      trackSize: new Dimension2( 200, 5 )
    } );
    
    const boldFont = Font.fromCSS( 'bold 18px Arial' );
    
    // Wrap this in a panel, and position it.
    // The following line can be placed in the layoutBoundsProperty
    // link to center it:
    //   controlsNode.centerX = bounds.centerX / scale;
    const controlsNode = new Panel( new VBox( {
      spacing: 7,
      children: [
        // Place a label above the slider
        new Text( 'Acceleration', { font: boldFont } ),
        accelerationSlider
      ]
    } ), {
      top: cyclistNode.bottom + 40,
      xMargin: 20
    } );

    // Our scaled container will include the controlsNode
    const scaledNode = new Node( {
      children: [
        cyclistNode,
        controlsNode
      ]
    } );
    /*END*/

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