import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const originSize = 50;
  const originNode = new Path( new Shape().moveTo( -originSize, 0 ).lineTo( originSize, 0 ).moveTo( 0, originSize ).lineTo( 0, -originSize ), {
    stroke: 'rgba(0,0,0,0.5)'
  } );
  const normalText = ( str, options ) => new Text( str, merge( {
    font: new Font( { size: 12 } )
  }, options ) );
  const bigText = ( str, options ) => new Text( str, merge( {
    font: new Font( { size: 18, weight: 'bold' } )
  }, options ) );
  const box = ( () => {
    /*START*/
    return new HBox( {
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
    /*END*/
  } )();
  scene.addChild( new AlignBox( new Node( {
    children: [ originNode, box ]
  } ) ) );
} );