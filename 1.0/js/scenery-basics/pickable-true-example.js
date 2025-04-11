import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const background = new Rectangle( 0, 0, 400, 300, { stroke: foregroundColor } );
    /*START*/
    const draggableObject = new Circle( 50, {
      fill: 'purple',
      cursor: 'pointer',
      children: [
        new Text( 'Drag me', {
          center: Vector2.ZERO,
          font: 'bold 20px sans-serif',
          fill: '#eee'
        } )
      ]
    } );
    const blockingObject = new Circle( 30, {
      fill: 'red',
      x: 230,
      y: 150,
      pickable: true
    } );
    /*END*/

    const positionProperty = new Property( new Vector2( 200, 150 ) );
    positionProperty.link( position => draggableObject.translation = position );

    draggableObject.addInputListener( new DragListener( {
      positionProperty: positionProperty,
      dragBoundsProperty: new Property( background.bounds.eroded( 60 ) )
    } ) );

    const content = new Node( {
      clipArea: Shape.bounds( background.bounds ),
      children: [
        background,
        draggableObject,
        blockingObject
      ]
    } );
    return content;
  } )();
  scene.addChild( box );
} );