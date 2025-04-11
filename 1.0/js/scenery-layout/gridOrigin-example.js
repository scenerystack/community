import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const originSize = 50;
  const originNode = new Path( new Shape().moveTo( -originSize, 0 ).lineTo( originSize, 0 ).moveTo( 0, originSize ).lineTo( 0, -originSize ), {
    stroke: 'rgba(0,0,0,0.5)'
  } );
  const box = ( () => {
    /*START*/
    return new GridBox( {
      xAlign: 'origin',
      yAlign: 'origin',
      children: [
        new Circle( 20, { fill: 'rgba(255,0,0,0.3)', layoutOptions: { column: 0, row: 0 } } ),
        new Circle( 10, { fill: 'rgba(255,0,0,0.3)', layoutOptions: { column: 1, row: 0 } } ),
        new Circle( 15, { fill: 'rgba(255,0,0,0.3)', layoutOptions: { column: 0, row: 1 } } ),
        new Circle( 25, { fill: 'rgba(255,0,0,0.3)', layoutOptions: { column: 1, row: 1 } } )
      ]
    } );
    /*END*/
  } )();
  scene.addChild( new AlignBox( new Node( {
    children: [ originNode, box ]
  } ) ) );
} );