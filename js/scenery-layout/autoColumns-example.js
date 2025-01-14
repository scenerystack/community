import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'autoColumns-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new GridBox( {
      autoColumns: 3,
      children: colors.map( color => {
        return new Rectangle( 0, 0, 50, 50, { fill: color } );
      } )
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );