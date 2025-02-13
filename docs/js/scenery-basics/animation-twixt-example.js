import { createSandbox } from "/js/createSandbox.js";

createSandbox( "animation-twixt-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const background = new Rectangle( -150, -50, 300, 100, {
      fill: 'transparent'
    } );
    /*START*/
    const square = new Rectangle( -25, -25, 50, 50, {
      fill: 'red',
      x: -100,
    } );

    // Composite animation that moves and rotates the square
    const rightAnimation = new Animation( {
      targets: [
        { // animate the square to the right (x=100)
          object: square,
          attribute: 'x',
          to: 100
        },
        { // rotate the square 360 degrees
          object: square,
          attribute: 'rotation',
          from: 0,
          to: Math.PI * 2
        }
      ],
      duration: 1 // 1 second
    } );

    // Animates the square back to the left
    const leftAnimation = new Animation( {
      object: square,
      attribute: 'x',
      to: -100,
      // ease in only (default is cubic in-out)
      easing: Easing.QUADRATIC_IN,
      duration: 0.5 // do this over a faster time period
    } );

    // alternate between the two animations
    rightAnimation.endedEmitter.addListener( () => leftAnimation.start() );
    leftAnimation.endedEmitter.addListener( () => rightAnimation.start() );
    leftAnimation.start();
    /*END*/

    const content = new Node( {
      children: [ background, square ]
    } );

    return content;
  } )();
  scene.addChild( box );
} );