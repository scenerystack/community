import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const container = new Node();

    const scenerystackLogoImage = new window.Image();
    scenerystackLogoImage.onload = () => {

      /*START*/
      const quantity = 500;
      const width = 1000;
      const height = 340;
      const bounds = new Bounds2( 0, 0, width, height ).eroded( 50 );

      // Create a SpriteImage from a Scenery Image (or Canvas, or URL, etc.)
      const logoSpriteImage = new SpriteImage( scenerystackLogoImage, new Vector2( 337, 337 ) );

      // Create a SpriteImage from a Node
      const square = new Rectangle( 0, 0, 50, 50, {
        fill: 'red',
        stroke: 'black'
      } );
      let squareSpriteImage;
      square.toCanvas( canvas => {
        squareSpriteImage = new SpriteImage( canvas, square.center );
      } );

      // Create sprites (which can switch between SpriteImages)
      const logoSprite = new Sprite( logoSpriteImage );
      const squareSprite = new Sprite( squareSpriteImage );

      // Create SpriteInstances
      const instances = [ ...Array( quantity ).keys() ].map( () => {
        const instance = SpriteInstance.pool.create();
        instance.sprite = Math.random() < 0.5 ? logoSprite : squareSprite;

        const scale = instance.sprite === logoSprite ? 0.08 : 0.5;
        instance.matrix.setToScaleTranslationRotation(
          scale,
          Math.random() * width,
          Math.random() * height,
          Math.random() * 2 * Math.PI
        );

        instance.velocity = Vector2.createPolar( 0.5 + 1.5 * Math.random(), Math.random() * 2 * Math.PI );
        return instance;
      } );

      const sprites = new Sprites( {
        // The sprites we have available (fixed, won't change)
        sprites: [ logoSprite, squareSprite ],
        spriteInstances: instances,
        canvasBounds: bounds,
        renderer: 'webgl', // prefer WebGL over Canvas
      } );

      // every frame
      stepEmitter.addListener( dt => {
        const distance = 50 * dt;

        for ( let i = instances.length - 1; i >= 0; i-- ) {
          const instance = instances[ i ];
          const matrix = instance.matrix;

          // Optimized translation
          matrix.set02( ( matrix.m02() + instance.velocity.x * distance + width ) % width );
          matrix.set12( ( matrix.m12() + instance.velocity.y * distance + height ) % height );
        }

        // We modified our instances, so we need this to repaint
        sprites.invalidatePaint();
      } );
      /*END*/
      container.addChild( sprites );
    };
    scenerystackLogoImage.src = '/assets/scenerystack-round.png';

    return container;
  } )();
  scene.addChild( box );
}, { showCode: false } );