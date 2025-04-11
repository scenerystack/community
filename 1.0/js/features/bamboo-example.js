import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/

    const createDataSet = ( min, max, frequency, delta = 0.005 ) => {
      const dataSet = [];
      for ( let x = min; x <= max; x += delta ) {
        dataSet.push( new Vector2( x, Math.sin( x * frequency ) ) );
      }
      return dataSet;
    };

    const chartTransform = new ChartTransform( {
      viewWidth: 700,
      viewHeight: 300,
      modelXRange: new Range( -Math.PI / 8, Math.PI / 8 ),
      modelYRange: new Range( -4 / Math.PI, 4 / Math.PI )
    } );

    const chartRectangle = new ChartRectangle( chartTransform, {
      fill: 'white',
      stroke: 'black',
      cornerXRadius: 6,
      cornerYRadius: 6
    } );

    const zoomLevelProperty = new NumberProperty( 1, { range: new Range( 1, 4 ) } );

    const zoomButtonGroup = new PlusMinusZoomButtonGroup( zoomLevelProperty, {
      orientation: 'horizontal',
      left: chartRectangle.right + 10,
      bottom: chartRectangle.bottom
    } );
    zoomLevelProperty.link( zoomLevel => {
      chartTransform.setModelXRange(
        zoomLevel === 1 ? new Range( -Math.PI / 8, Math.PI / 8 ) :
        zoomLevel === 2 ? new Range( -Math.PI / 4, Math.PI / 4 ) :
        zoomLevel === 3 ? new Range( -Math.PI / 3, Math.PI / 3 ) :
        new Range( -Math.PI / 2, Math.PI / 2 )
      );
    } );

    // Anything you want clipped goes in here
    const content = new Node( { children: [

      // Background
      chartRectangle,

      // span that shows PI/8, at bottom-left of chart
      new SpanNode( chartTransform, Orientation.HORIZONTAL, Math.PI / 8, new Text( `${MathSymbols.PI}/8`, {
        font: new PhetFont( 14 )
      } ), {
        left: chartRectangle.left,
        top: chartRectangle.bottom + 25
      } ),

      // Clipped contents
      new Node( {
        // TODO https://github.com/phetsims/bamboo/issues/15 what if the chart area changes, then clip needs to change
        clipArea: chartRectangle.getShape(),
        children: [

          // Minor grid lines
          new GridLineSet( chartTransform, Orientation.HORIZONTAL, Math.PI / 32, { stroke: 'lightGray' } ),
          new GridLineSet( chartTransform, Orientation.VERTICAL, 0.5, { stroke: 'lightGray' } ),

          // Axes nodes are clipped in the chart
          new AxisArrowNode( chartTransform, Orientation.HORIZONTAL ),
          new AxisArrowNode( chartTransform, Orientation.VERTICAL ),

          // Some data
          new LinePlot( chartTransform, createDataSet( -2, 2, 5 ), { stroke: 'red', lineWidth: 2 } ),
          new LinePlot( chartTransform, createDataSet( -2, 2, 10 ), { stroke: 'green', lineWidth: 2 } ),
          new LinePlot( chartTransform, createDataSet( -2, 2, 20 ), { stroke: 'blue', lineWidth: 2 } ),
          new LinePlot( chartTransform, createDataSet( -2, 2, 30 ), { stroke: 'orange', lineWidth: 2 } )
        ]
      } ),

      // Tick marks outside the chart
      new TickMarkSet( chartTransform, Orientation.VERTICAL, 0.5, { edge: 'min' } ),
      new TickLabelSet( chartTransform, Orientation.VERTICAL, 0.5, { edge: 'min' } ),
      new TickMarkSet( chartTransform, Orientation.HORIZONTAL, Math.PI / 8, { edge: 'min' } ),
      new TickLabelSet( chartTransform, Orientation.HORIZONTAL, Math.PI / 8, {
        edge: 'min',
        createLabel: ( value ) => new Text( Math.abs( value ) < 1E-6 ? toFixed( value, 0 ) : toFixed( value, 2 ), {
          fontSize: 12
        } )
      } ),
      new Text( 'x', { leftCenter: chartRectangle.rightCenter.plusXY( 4, 0 ), fontSize: 18 } ),

      zoomButtonGroup
    ], scale: 0.7 } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
}, { showCode: false } );