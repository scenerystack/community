import { createSandbox } from "/js/createSandbox.js";

createSandbox( "mutation-rectangle-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    // Provide options on construction
    const rect1 = new Rectangle( 0, 0, 100, 75, {
      fill: colors[ 1 ],
      stroke: 'black'
    } );

    // Mutate directly after construction
    const rect2 = new Rectangle( 0, 0, 100, 75 );
    rect2.fill = colors[ 3 ];
    rect2.stroke = 'black';

    // mutate() with options after construction
    const rect3 = new Rectangle( 0, 0, 100, 75 );
    rect3.mutate( {
      fill: colors[ 5 ],
      stroke: 'black'
    } );

    /*END*/
    return new HBox( {
      spacing: 20,
      children: [ rect1, rect2, rect3 ]
    } );
  } )();
  scene.addChild( box );
}, { showDisplay: true } );