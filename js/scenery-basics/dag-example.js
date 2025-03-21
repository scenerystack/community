import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const quantity = 7;
    const radius = 20;
    const distanceFromCenter = ( radius + 5 ) / Math.sin( Math.PI / quantity );
    const node = new Circle( radius, {
      fill: 'red',
      cursor: 'pointer',
      // Toggle a color change when any instance of the circle is clicked
      inputListeners: [ new FireListener( { fire: () => {
        node.fill = node.fill === 'red' ? 'blue' : 'red';
      } } ) ],
      children: [
        new Circle( radius / 2, { fill: 'purple', y: radius } )
      ]
    } );
    const content = new Node( {
      children: [ ...Array( quantity ).keys() ].map( n => {
        const angle = n * 2 * Math.PI / quantity;
        return new Node( {
          children: [ node ],
          rotation: angle,
          translation: Vector2.createPolar( distanceFromCenter, angle )
        } );
      } )
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );