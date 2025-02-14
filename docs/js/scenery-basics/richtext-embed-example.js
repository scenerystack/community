import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const string = 'Nodes like <node id="circle" align="center"/> and even <node id="otherText"/> can be embedded in RichText.';
    const content = new RichText( string, {
      fill: foregroundColor,
      font: '20px Arial',
      nodes: {
        circle: new Circle( 10, { fill: 'red' } ),
        otherText: new Text( 'other text', {
          fill: 'blue',
          font: '26px Arial'
        } )
      }
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );