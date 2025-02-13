import { createSandbox } from "/js/createSandbox.js";

createSandbox( "renderer-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const container = new Node();

    const scenerystackLogoImage = new window.Image();
    scenerystackLogoImage.onload = () => {
      /*START*/
      const rectangle = new Rectangle( 0, 0, 50, 50, { fill: 'red' } );
      const image = new Image( scenerystackLogoImage, {
        scale: 0.1,
      } );
      const circle = new Circle( 25, { fill: 'blue' } );
      const text = new Text( 'Text', {
        fill: foregroundColor,
        font: 'bold 20px Arial'
      } );

      const withRenderer = ( node, renderer ) => new VBox( {
        spacing: 3,
        children: [
          new Node( {
            renderer: renderer,
            children: [ node ]
          } ),
          new Text( renderer, {
            fill: foregroundColor,
            font: '14px Arial'
          } )
        ]
      } );

      const content = new GridBox( {
        xSpacing: 10,
        ySpacing: 30,
        rows: [
          [
            withRenderer( rectangle, 'svg' ),
            withRenderer( rectangle, 'canvas' ),
            withRenderer( rectangle, 'dom' ),
            withRenderer( rectangle, 'webgl' ),
          ],
          [
            withRenderer( image, 'svg' ),
            withRenderer( image, 'canvas' ),
            withRenderer( image, 'dom' ),
            withRenderer( image, 'webgl' ),
          ],
          [
            withRenderer( circle, 'svg' ),
            withRenderer( circle, 'canvas' ),
            withRenderer( circle, 'dom' ),
          ],
          [
            withRenderer( text, 'svg' ),
            withRenderer( text, 'canvas' ),
            withRenderer( text, 'dom' ),
          ]
        ]
      } );
      /*END*/
      container.addChild( content );
    };
    scenerystackLogoImage.src = '/assets/scenerystack-round.png';

    return container;
  } )();
  scene.addChild( box );
} );