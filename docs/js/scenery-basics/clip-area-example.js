import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const content = new Node( {
      children: [
        new Rectangle( 0, 0, 500, 500, { fill: foregroundColor, opacity: 0.15 } ),
        new Text( 'clipArea', {
          fill: foregroundColor,
          center: new Vector2( 250, 250 ),
          font: 'bold 100px Arial'
        } )
      ],
      clipArea: Shape.ellipse( 250, 250, 160, 50, 0 )
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );