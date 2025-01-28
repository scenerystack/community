import { createSandbox } from "/js/createSandbox.js";

createSandbox( "coordinate-frame-diagram", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const padding = 20;
    const content = new GridBox( {
      xSpacing: 50,
      ySpacing: 20,
      rows: [
        [
          new Node( {
            children: [
              new Rectangle( 0, 0, 100, 50, {
                fill: 'red',
              } ),
              new GridNode( new Property( ModelViewTransform2.createIdentity() ), 10, Vector2.ZERO, 50, {
                clipArea: Shape.rect( -padding, -padding, 100 + padding * 2, 50 + padding * 2 ),
                stroke: 'black',
                lineWidth: 0.5,
                opacity: 0.5
              } ),
              new Line( -padding, 0, 100 + padding, 0, {
                stroke: 'black',
                lineWidth: 2
              } ),
              new Line( 0, -padding, 0, 50 + padding, {
                stroke: 'black',
                lineWidth: 2
              } ),
            ]
          } ),
          new Node( {
            children: [
              new Rectangle( 0, 0, 100, 50, {
                fill: 'red',
                scale: 2,
                rotation: Math.PI / 12
              } ),
              new GridNode( new Property( ModelViewTransform2.createIdentity() ), 10, Vector2.ZERO, 50, {
                clipArea: Shape.rect( -padding * 2, -padding * 2, 2 * ( 100 + padding * 2 ), 2 * ( 70 + padding * 2 ) ),
                stroke: 'black',
                lineWidth: 0.5,
                opacity: 0.5
              } ),
              new Line( -padding * 2, 0, 2 * ( 100 + padding ), 0, {
                stroke: 'black',
                lineWidth: 2
              } ),
              new Line( 0, -padding * 2, 0, 2 * ( 70 + padding ), {
                stroke: 'black',
                lineWidth: 2
              } ),
            ]
          } )
        ],
        [
          new Text( 'Local Frame', { font: 'bold 20px sans-serif' } ),
          new Text( 'Parent Frame', { font: 'bold 20px sans-serif' } )
        ]
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
}, { showCode: false } );