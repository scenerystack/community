import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'autoRows-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new GridBox( {
      autoRows: 3,
      children: colors.map( color => {
        return new Rectangle( 0, 0, 50, 50, { fill: color } );
      } )
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );