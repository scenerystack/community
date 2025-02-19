
const iframe = document.querySelector( '#demo-1' );

const initialize = () => {
  const ViewTypes = iframe.contentWindow.ViewTypes;

  const AnimatedPanZoomListener = ViewTypes.AnimatedPanZoomListener;
  const Font = ViewTypes.Font;
  const HBox = ViewTypes.HBox;
  const Node = ViewTypes.Node;
  const Text = ViewTypes.Text;
  const VBox = ViewTypes.VBox;
  const Model = ViewTypes.Model;
  const CyclistNode = ViewTypes.CyclistNode;
  const Multilink = ViewTypes.Multilink;
  const Bounds2 = ViewTypes.Bounds2;
  const Dimension2 = ViewTypes.Dimension2;
  const toFixed = ViewTypes.toFixed;
  const Panel = ViewTypes.Panel;
  const TextPushButton = ViewTypes.TextPushButton;
  const VerticalAquaRadioButtonGroup = ViewTypes.VerticalAquaRadioButtonGroup;
  const BackgroundNode = ViewTypes.BackgroundNode;
  const BLUE_COLOR_SHIFT = ViewTypes.BLUE_COLOR_SHIFT;
  const GREEN_COLOR_SHIFT = ViewTypes.GREEN_COLOR_SHIFT;
  const RED_COLOR_SHIFT = ViewTypes.RED_COLOR_SHIFT;
  const AccelerationSlider = ViewTypes.AccelerationSlider;

  class View extends Node {
    constructor( model, layoutBoundsProperty ) {

      const cyclistNode = new CyclistNode( model.cyclist );

      const scaledNode = new Node( {
        children: [
          cyclistNode
        ]
      } );

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

  iframe.contentWindow.setViewClass( View );
  iframe.contentWindow.interactiveHighlightsEnabledProperty.value = false;
  // iframe.contentWindow.display.setPointerAreaDisplayVisible( true );
};

const interval = setInterval( () => {
  if ( iframe.contentWindow.ViewTypes ) {
    clearInterval( interval );
    initialize();
  }
}, 50 );
