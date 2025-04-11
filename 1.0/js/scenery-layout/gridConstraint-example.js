import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const firstChild = createLabeledBox( 'First child', '#faa', 150, 30 );
    const secondChild = createLabeledBox( 'Second child', '#afa', 150, 30 );
    const thirdChild = createLabeledBox( 'Third child', '#aaf', 150, 30 );
    firstChild.layoutOptions = { row: 0, column: 0 };
    secondChild.layoutOptions = { row: 1, column: 0 };
    thirdChild.layoutOptions = { row: 0, column: 1 };

    const firstParent = new Node( {
      children: [
        firstChild,
        createLabeledBox( 'First parent', null, 400, 200 )
      ]
    } );
    const secondParent = new Node( {
      children: [
        secondChild,
        createLabeledBox( 'Second parent', null, 400, 200 )
      ],
      scale: 0.75
    } );
    const thirdParent = new Node( {
      children: [
        thirdChild,
        createLabeledBox( 'Third parent', null, 400, 200 )
      ],
      scale: 0.5
    } );

    const scene = new Node( {
      children: [ firstParent, secondParent, thirdParent ]
    } );

    // Directly create the constraint, specifying a layoutOrigin to position the content
    const constraint = new GridConstraint( scene, {
      layoutOriginProperty: new Property( new Vector2( 10, 10 ) ),
      xAlign: 'left',
      yAlign: 'top',
      spacing: 10
    } );

    // For the grid, cells are created and added (they can be removed/disposed later).
    constraint.addCell( new GridCell( constraint, firstChild, null ) );
    constraint.addCell( new GridCell( constraint, secondChild, null ) );
    constraint.addCell( new GridCell( constraint, thirdChild, null ) );
    constraint.updateLayout();
    /*END*/
    return scene;
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );