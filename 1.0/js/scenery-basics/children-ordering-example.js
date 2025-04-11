import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new Node( {
      children: [
        // Ordered from back to front
        new Rectangle( 0, 0, 200, 80, {
          fill: new LinearGradient( 0, 0, 0, 80 )
            .addColorStop( 0, 'red' )
            .addColorStop( 1, 'purple' )
        } ),
        new Rectangle( 15, 15, 170, 50, { fill: '#fff', opacity: 0.7 } ),
        new Text( 'Text on top', {
          centerX: 100, centerY: 40,
          font: 'bold 20px sans-serif',
        } )
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );