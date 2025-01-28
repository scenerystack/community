import { createSandbox } from "/js/createSandbox.js";

createSandbox( "matrix-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const theta = Math.PI / 6;
    const x = 100;
    const y = 50;
    const content = new Node( {
      children: [
        // 100x100 rectangle
        new Rectangle( 0, 0, 100, 100, {
          fill: 'red'
        } ),
        // 100x100 rectangle, scaled down to 75%
        new Rectangle( 0, 0, 100, 100, {
          fill: 'blue',
          matrix: Matrix3.rowMajor(
            Math.cos( theta ), -Math.sin( theta ), x,
            Math.sin( theta ), Math.cos( theta ), y,
            0, 0, 1
          )
        } ),
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );