import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new AlignBox( new Rectangle( 0, 0, 50, 50, { fill: 'red' } ), {
      alignBounds: new Bounds2( 0, 0, 100, 100 ),
      xAlign: 'left',
      yAlign: 'bottom',
      margin: 10
    } );
    /*END*/
    return new Node( {
      children: [
        Rectangle.bounds( content.bounds, { fill: '#ccc' } ),
        content
      ]
    } );
  } )();
  scene.addChild( box );
} );