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
          fill: '#eee',
          pickable: false
        } )
      ],
      // For rectanglar areas, Bounds2 can be provided
      mouseArea: new Bounds2( -100, -50, 100, 0 ),
      // For other types, a Shape can be provided
      touchArea: Shape.circle( 0, 0, 80 )
    } );
    /*END*/

    const toShape = area => area ? ( area instanceof Shape ? area : Shape.bounds( area ) ) : new Shape();
    const mouseShape = toShape( draggableObject.mouseArea );
    const touchShape = toShape( draggableObject.touchArea );

    draggableObject.addChild( new Node( {
      pickable: false,
      opacity: 0.8,
      children: [
        new Path( mouseShape, { stroke: 'blue', lineDash: [ 5, 3 ] } ),
        new Path( touchShape, { stroke: 'red', lineDash: [ 5, 3 ] } ),
        new Text( 'mouseArea', { fill: 'blue', centerX: mouseShape.bounds.centerX, bottom: mouseShape.bounds.top - 5 } ),
        new Text( 'touchArea', { fill: 'red', centerX: touchShape.bounds.centerX, top: touchShape.bounds.bottom + 5 } )
      ]
    } ) );

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
    return content;
  } )();
  scene.addChild( box );
}, { showCode: false } );