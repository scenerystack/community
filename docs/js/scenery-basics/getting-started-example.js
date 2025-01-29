import { createSandbox } from "/js/createSandbox.js";

createSandbox( "getting-started-example-appendix", ( scene, stepEmitter, display ) => {
  const box = ( () => {

    // This is a bit hacked, where we're ignoring the Display that createSandbox gives us, and creating our own
    if ( window.gettingStartedDisplay ) {
      try {
        window.gettingStartedDisplay.dispose && window.gettingStartedDisplay.dispose();
      }
      catch ( e ) {
        console.error( e );
      }

      const gettingStartedExample = document.querySelector( '#getting-started-example' );
      while ( gettingStartedExample.hasChildNodes() ) {
        gettingStartedExample.removeChild( gettingStartedExample.lastChild );
      }
    }

    /*START*/

    // Create a Node as the root of our tree (it can contain children)
    const scene = new Node();

    // Create a display using this root node, using our existing div
    const display = new Display( scene, {
      container: document.querySelector( '#getting-started-example' ),
      backgroundColor: '#fff'
    } );

    // Add some text
    scene.addChild( new Text( 'Hello World', {
      fill: 'black', // any CSS color will work
      centerX: 200, // the center of our text's bounds is at x = 200
      centerY: 50, // the center of our text's bounds is at y = 50
      font: '25px sans-serif' // any CSS 'font' declaration will work
    } ) );

    // Add an image
    scene.addChild( new Image( '/assets/scenerystack-round.png', {
      scale: 0.1, // scales the image down to 10% of its original size
      rotation: Math.PI / 6, // rotates the image by 30 degrees
      left: 10, // the left edge of the image is at x = 10
      centerY: 50 // the center of the image's bounds is at y = 50
    } ) );

    // Paint any changes (in this case, our text).
    display.updateDisplay();
    /*END*/

    // Hack for changing sizes
    display.width = 400;
    display.height = 100;
    display.updateDisplay();

    window.gettingStartedDisplay = display;

    // empty-ish node as a placeholder
    return new Node( { children: [ new Rectangle( 0, 0, 0, 0, { fill: 'transparent' } ) ] } );
  } )();
  scene.addChild( box );
} );