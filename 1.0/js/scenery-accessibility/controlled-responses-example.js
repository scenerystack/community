import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/

    // create a class that is compsed with Voicing
    class VoicingRectangle extends Voicing( Rectangle ) {
      constructor() {

        // super constructor for a blue rectangle
        super( 0, 0, 32, 32, { fill: 'blue' } );

        // setters for the various responses
        this.voicingNameResponse = 'Rectangle';

        // add a listener that updates the color of the rectangle and requests speech on release
        this.addInputListener( new DragListener( {
          translateNode: true,
          dragBoundsProperty: new Property( new Bounds2( 0, 0, 128 - 32, 128 - 32 ) ),
          press: () => {

            // on press, speak the voicingNameResponse
            this.voicingSpeakNameResponse();
          },
          release: () => {

            // on release, speak the new position of the rectangle (object response)
            this.voicingObjectResponse = this.center.x > 64 ? 'right side' : 'left side';

            // speak all responses
            this.voicingSpeakObjectResponse();
          }
        } ) );
      }
    }

    const voicingRectangle = new VoicingRectangle();

    voicingManager.initialize( DisplayGlobals.userGestureEmitter );
    voicingManager.enabledProperty.value = true;

    // globally enable/disable object responses
    document.getElementById( 'object-responses' ).addEventListener( 'change', () => {
      voicingManager.objectResponsesEnabledProperty.toggle();
    } );
    /*END*/
    return voicingRectangle;
  } )();
  scene.addChild( box );
} );