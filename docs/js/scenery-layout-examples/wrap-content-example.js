import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const earthIcon = new Rectangle( 0, 0, 20, 20, { fill: 'brown' } );
    const earthLabel = new Text( 'Earth', { font: new PhetFont( { size: 14, weight: 'bold' } ) } );

    const waterIcon = new Rectangle( 0, 0, 20, 20, { fill: 'blue' } );
    const waterLabel = new Text( 'Water', { font: new PhetFont( { size: 14, weight: 'bold' } ) } );

    const windIcon = new Rectangle( 0, 0, 20, 20, { fill: 'grey' } );
    const windLabel = new Text( 'Wind', { font: new PhetFont( { size: 14, weight: 'bold' } ) } );

    const fireIcon = new Rectangle( 0, 0, 20, 20, { fill: 'red' } );
    const fireLabel = new Text( 'Fire', { font: new PhetFont( { size: 14, weight: 'bold' } ) } );

    const earth = new HBox( { children: [ earthIcon, earthLabel ], spacing: 5 } );
    const water = new HBox( { children: [ waterIcon, waterLabel ], spacing: 5 } );
    const wind = new HBox( { children: [ windIcon, windLabel ], spacing: 5 } );
    const fire = new HBox( { children: [ fireIcon, fireLabel ], spacing: 5 } );

    const content = new HBox( {
      children: [ earth, water, wind, fire ],
      wrap: true,
      spacing: 10,
      lineSpacing: 10,
      preferredWidth: 250
    } );
    /*END*/

    let elapsedTime = 0;
    stepEmitter.addListener( dt => {
      elapsedTime += dt;

      const minWidth = 20;
      const maxWidth = 200;
      earthIcon.rectWidth = ( minWidth + maxWidth ) / 2 + Math.cos( elapsedTime ) * ( maxWidth - minWidth ) / 2;
    } );
    return content;
  } )();
  scene.addChild( box );
} );