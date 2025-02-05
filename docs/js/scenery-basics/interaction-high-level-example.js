import { createSandbox } from "/js/createSandbox.js";

createSandbox( "interaction-high-level-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const background = new Rectangle( 0, 0, 400, 300, { stroke: foregroundColor } );

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
        draggableObject
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );