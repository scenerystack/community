import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'flowConstraint-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const firstChild = createLabeledBox( 'First child', '#faa', 150, 30 );
    const secondChild = createLabeledBox( 'Second child', '#afa', 150, 30 );
    const thirdChild = createLabeledBox( 'Third child', '#aaf', 150, 30 );

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
    const constraint = new FlowConstraint( scene, {
      layoutOriginProperty: new Property( new Vector2( 10, 10 ) ),
      align: 'top',
      spacing: 10
    } );

    // For Flow constraints, we need to know the order, so cells are inserted at specific indices. They can be
    // removed later
    constraint.insertCell( 0, new FlowCell( constraint, firstChild, null ) );
    constraint.insertCell( 1, new FlowCell( constraint, secondChild, null ) );
    constraint.insertCell( 2, new FlowCell( constraint, thirdChild, null ) );
    constraint.updateLayout();
    /*END*/
    return scene;
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );