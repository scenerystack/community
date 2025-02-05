import { createSandbox } from "/js/createSandbox.js";

createSandbox( "text-property-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const property = new StringProperty( 'Initial Text' );
    const content = new Text( property, {
      fill: foregroundColor,

      // font properties can be specified independently
      fontFamily: 'serif',
      fontSize: 26,
      fontStyle: 'italic'
    } );

    // change the text property
    property.value = 'Different, serif text';
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );