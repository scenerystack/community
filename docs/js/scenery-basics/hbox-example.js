import { createSandbox } from "/js/createSandbox.js";

createSandbox( "hbox-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new HBox( {
      spacing: 10,
      align: 'center', // the default, top/bottom/origin also supported
      children: [
        new Circle( 32, { fill: 'red' } ),
        new Circle( 27, { fill: 'red' } ),
        new Circle( 22, { fill: 'red' } ),
        new Circle( 16, { fill: 'red' } ),
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );