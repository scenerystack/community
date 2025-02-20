import { createAccessibleDemo } from './createAccessibleDemo.js';

createAccessibleDemo( 'settingUp', `
/*START*/
export class View extends Node {
  // Provides a Model and a TReadOnlyProperty<Bounds2> that will
  // contain the bounds of the layout area for the view.
  constructor( model, layoutBoundsProperty ) {

    // Create a cyclist node
    const cyclistNode = new CyclistNode( model.cyclist );

    // Place it in a scaled container
    // (we will include the rest of the UI here also)
    const scaledNode = new Node( {
      children: [
        cyclistNode
      ]
    } );

    // Initialize the view
    super( {
      children: [
        new BackgroundNode( model.positionProperty, layoutBoundsProperty ),
        scaledNode
      ]
    } );

    // Center the text and the rectangle dynamically
    layoutBoundsProperty.link( bounds => {
      const scale = bounds.height / 500;
      scaledNode.setScaleMagnitude( bounds.height / 500 );
      scaledNode.y = ( bounds.top + 3 * bounds.bottom ) / 4;
      cyclistNode.centerX = bounds.centerX / scale;
    } );
  }
}
/*END*/
` );