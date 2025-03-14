import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const originSize = 50;
  const originNode = new Path( new Shape().moveTo( -originSize, 0 ).lineTo( originSize, 0 ).moveTo( 0, originSize ).lineTo( 0, -originSize ), {
    stroke: 'rgba(0,0,0,0.5)'
  } );
  const box = ( () => {
    /*START*/
    return new GridBox( {
      layoutOrigin: new Vector2( 40, 20 ),
      opacity: 0.5,
      children: colors.map( color => new Rectangle( 0, 0, 40, 40, { fill: color } ) ),
      autoColumns: 3
    } );
    /*END*/
  } )();
  scene.addChild( new AlignBox( new Node( {
    children: [ originNode, box ]
  } ) ) );
} );