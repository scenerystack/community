
const iframe = document.querySelector( '#demo-1' );

const ViewTypes = iframe.contentWindow.ViewTypes;

console.log( ViewTypes );

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
    super( {
      children: [
        new Text( 'This is a replacement view', {
          left: 20,
          top: 20
        } )
      ]
    } );
  }
}

// iframe.contentWindow.setViewClass( View );
