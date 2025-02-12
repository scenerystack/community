import { createSandbox } from "/js/createSandbox.js";

createSandbox( "voicing-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    // create a class that is compsed with Voicing
    class VoicingRectangle extends Voicing( Rectangle ) {
      constructor() {

        // super constructor for a blue rectangle
        super( 0, 0, 64, 64, { fill: 'blue' } );

        // setters for the various responses
        this.voicingNameResponse = 'Rectangle';
        this.voicingObjectResponse = 'blue';

        // add a listener that updates the color of the rectangle and requests speech on release
        this.addInputListener( new PressListener( {
          release: () => {

            // change the Rectangle fill color
            const newFill = this.fill === 'blue' ? 'red' : 'blue';
            this.fill = newFill;

            // update the object response (describing the new state of the rectangle)
            this.voicingObjectResponse = newFill;

            // speak all responses
            this.voicingSpeakFullResponse();
          }
        } ) );
      }
    }

    const voicingRectangle = new VoicingRectangle();

    voicingManager.initialize( DisplayGlobals.userGestureEmitter );
    voicingManager.enabledProperty.value = true;
    /*END*/
    return voicingRectangle;
  } )();
  scene.addChild( box );
} );