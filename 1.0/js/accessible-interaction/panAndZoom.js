import { createAccessibleDemo } from './createAccessibleDemo.js';

createAccessibleDemo( 'panAndZoom', `
export class View extends Node {
  // Provides a Model and a TReadOnlyProperty<Bounds2> that will
  // contain the bounds of the layout area for the view.
  constructor( model, layoutBoundsProperty ) {
    const font = Font.fromCSS( '18px Arial' );
    const boldFont = Font.fromCSS( 'bold 18px Arial' );

    const cyclistNode = new CyclistNode( model.cyclist, {
      // Add structure to the node
      tagName: 'p',
      labelTagName: 'h2',
      labelContent: 'Cyclist'
    } );

    model.cyclist.isPointingRightProperty.lazyLink( isPointingRight => {
      cyclistNode.alertDescriptionUtterance( \`The cyclist is now pointing to the \${isPointingRight ? 'right' : 'left'}\` );
    } );

    new Multilink( [
      model.cyclist.isPointingRightProperty,
      model.cyclist.bicycleColorShiftProperty,
      model.cyclist.effortProperty,
      model.velocityProperty,
      model.accelerationProperty
    ], ( isPointingRight, bicycleColorShift, effort, velocity, acceleration ) => {

      const color = {
        [ BLUE_COLOR_SHIFT ]: 'blue',
        [ GREEN_COLOR_SHIFT ]: 'green',
        [ RED_COLOR_SHIFT ]: 'red'
      }[ bicycleColorShift ];

      const direction = isPointingRight ? 'right' : 'left';

      const braking = velocity * acceleration < 0;

      const effortString = braking ? 'braking' : Math.abs( acceleration ) < 1e-5 ? 'coasting' : {
        0: 'pedaling lightly',
        1: 'pedaling moderately',
        2: 'pedaling hard',
        3: 'pedaling very hard'
      }[ effort ];

      let velocityString;
      const speed = Math.abs( velocity );
      if ( speed < 1e-5 ) {
        velocityString = 'stationary';
      }
      else if ( speed < 5 ) {
        velocityString = 'moving slowly';
      }
      else if ( speed < 13 ) {
        velocityString = 'moving at a moderate speed';
      }
      else if ( speed < 25 ) {
        velocityString = 'moving quickly';
      }
      else {
        velocityString = 'moving very quickly';
      }

      cyclistNode.innerContent = \`The cyclist is on a \${color} bicycle pointing to the \${direction}. \${speed > 1e-5 ? \`The cyclist is \${effortString}. \` : ''}The cyclist is \${velocityString}.\`;
    } );
    
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
    
    const labelFactory = text => () => new Text( text, { font: font } );
    const bicycleColorRadioButtonGroup = new VerticalAquaRadioButtonGroup( model.cyclist.bicycleColorShiftProperty, [
      { value: BLUE_COLOR_SHIFT, createNode: labelFactory( 'Blue' ) },
      { value: GREEN_COLOR_SHIFT, createNode: labelFactory( 'Green' ) },
      { value: RED_COLOR_SHIFT, createNode: labelFactory( 'Red' ) }
    ], {
      labelTagName: 'h3',
      accessibleName: 'Bicycle Color',
      accessibleHelpText: 'Change the color of the bicycle',
      touchAreaXDilation: 20
    } );
    
    const controlsNode = new Panel( new HBox( {
      spacing: 30,
      align: 'top',
      tagName: 'div',
      labelTagName: 'h2',
      labelContent: 'Controls',
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

    const scaledNode = new Node( {
      children: [
        cyclistNode,
        controlsNode
      ]
    } );
    
    const descriptionNode = new Node( {
      tagName: 'p',
      innerContent: 'There is a cyclist on a road. You can control the acceleration of the cyclist using a slider. There is a stop button to stop the cyclist.'
    } );

    super( {
      tagName: 'div',
      labelTagName: 'h1',
      labelContent: 'Accessible Interaction Demo',
      children: [
        descriptionNode,
        new BackgroundNode( model.positionProperty, layoutBoundsProperty ),
        scaledNode
      ]
    } );
    
    /*START*/
    // Create and add a zoom listener (after the super() call)
    const zoomListener = new AnimatedPanZoomListener( this, {
      maxScale: 10
    } );

    this.addInputListener( zoomListener );
    
    layoutBoundsProperty.link( bounds => {
      const scale = bounds.height / 500;
      scaledNode.setScaleMagnitude( bounds.height / 500 );
      scaledNode.y = ( bounds.top + 3 * bounds.bottom ) / 4;
      cyclistNode.centerX = bounds.centerX / scale;
      controlsNode.centerX = bounds.centerX / scale;
      
      // Provide the zoom listener with updated bounds
      zoomListener.setTargetBounds( bounds );
      zoomListener.setPanBounds( bounds );
    } );
    /*END*/
  }
}
`, { showPDOM: false } );