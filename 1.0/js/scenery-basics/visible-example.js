import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const nodes = [ ...Array( 10 ).keys() ].map( n => {
      return new Rectangle( 0, 0, 30, 30, {
        fill: colors[ n ]
      } );
    } );
    const content = new HBox( {
      spacing: 5,
      children: nodes
    } );
    let elapsedTime = 0;
    const speed = 2;
    stepEmitter.addListener( dt => {
      if ( Math.floor( ( dt + elapsedTime ) * speed ) !== Math.floor( elapsedTime * speed ) ) {
        const randomNode = nodes[ Math.floor( Math.random() * nodes.length ) ];
        randomNode.visible = !randomNode.visible;
      }
      elapsedTime += dt;
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );