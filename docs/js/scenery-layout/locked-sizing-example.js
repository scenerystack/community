import { createSandbox } from "/js/createSandbox.js";

createSandbox( "locked-sizing-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const circle = new Circle( 25, { fill: colors[ 6 ] } );
    let time = 0;
    stepEmitter.addListener( dt => {
      time += dt;
      circle.radius = 25 + 10 * Math.sin( 4 * time );
    } );
    const box = new HBox( {
      resize: false,
      children: [
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 2 ] } ),
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 4 ] } ),
        circle,
        new Rectangle( 0, 0, 50, 50, { fill: colors[ 8 ] } )
      ]
    } );
    /*END*/
    return box;
  } )();
  scene.addChild( box );
} );