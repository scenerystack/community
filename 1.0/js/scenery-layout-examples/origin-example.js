import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const normalText = ( str, options = {} ) => new Text( str, merge( {
      font: new PhetFont( 12 )
    }, options ) );
    const sectionText = ( str, options = {} ) => new Text( str, merge( {
      font: new PhetFont( { size: 14, weight: 'bold' } )
    }, options ) );
    const bigText = ( str, options = {} ) => new Text( str, merge( {
      font: new PhetFont( { size: 18, weight: 'bold' } )
    }, options ) );

    /*START*/
    const originSize = 50;
    const originNode = new Path( new Shape().moveTo( -originSize, 0 ).lineTo( originSize, 0 ).moveTo( 0, originSize ).lineTo( 0, -originSize ), {
      stroke: 'rgba(0,0,0,0.3)'
    } );

    const flowBox = new FlowBox( {
      orientation: 'horizontal',
      align: 'origin',
      spacing: 5,
      lineSpacing: 5,
      children: [
        new Circle( 20, { fill: 'rgba(255,0,0,0.3)' } ),
        bigText( 'Text' ),
        normalText( 'Text' ),
        new Circle( 20, { fill: 'rgba(255,0,0,0.3)' } ),
        bigText( 'Text' ),
        normalText( 'text' ),
        new Circle( 20, { fill: 'rgba(255,0,0,0.3)' } ),
        bigText( 'Text' ),
        normalText( 'text' ),
        new Circle( 20, { fill: 'rgba(255,0,0,0.3)' } ),
        bigText( 'Text' ),
        normalText( 'text' )
      ],
      wrap: true,
      preferredWidth: 170,
      widthSizable: false,
      justify: 'left'
    } );

    const gridBox = new GridBox( {
      xAlign: 'origin',
      yAlign: 'origin',
      children: [
        new Circle( 20, { fill: 'rgba(255,0,0,0.3)', layoutOptions: { column: 0, row: 0 } } ),
        new Circle( 10, { fill: 'rgba(255,0,0,0.3)', layoutOptions: { column: 1, row: 0 } } ),
        new Circle( 15, { fill: 'rgba(255,0,0,0.3)', layoutOptions: { column: 0, row: 1 } } ),
        new Circle( 25, { fill: 'rgba(255,0,0,0.3)', layoutOptions: { column: 1, row: 1 } } )
      ]
    } );

    const content = new GridBox( {
      spacing: 15,
      children: [
        sectionText( 'FlowBox', { layoutOptions: { column: 0, row: 0 } } ),
        sectionText( 'GridBox', { layoutOptions: { column: 1, row: 0 } } ),
        new Node( {
          children: [
            originNode,
            flowBox
          ],
          layoutOptions: { column: 0, row: 1, yAlign: 'origin' }
        } ),
        new Node( {
          children: [
            new GridBackgroundNode( gridBox.constraint ),
            originNode,
            gridBox
          ],
          layoutOptions: { column: 1, row: 1, yAlign: 'origin' }
        } )
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );