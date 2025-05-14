import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const createLabeledBox = ( label, fill, width, height ) => {
      return new Rectangle( 0, 0, width, height, {
        stroke: 'black',
        fill: fill,
        children: [
          new Text( label, { font: new PhetFont( 14 ), left: 7, bottom: height - 7 } )
        ]
      } );
    };

    const firstChild = createLabeledBox( 'First child', '#faa', 150, 30 );
    const secondChild = createLabeledBox( 'Second child', '#afa', 150, 30 );
    const thirdChild = createLabeledBox( 'Third child', '#aaf', 150, 30 );

    firstChild.y = 50;

    const firstParent = new Node( {
      children: [
        firstChild,
        createLabeledBox( 'First parent', null, 200, 200 )
      ]
    } );
    const secondParent = new Node( {
      children: [
        secondChild,
        createLabeledBox( 'Second parent', null, 200, 200 )
      ],
      scale: 0.75
    } );
    const thirdParent = new Node( {
      children: [
        thirdChild,
        createLabeledBox( 'Third parent', null, 200, 200 )
      ],
      scale: 0.5
    } );

    const content = new Node( {
      children: [ firstParent, secondParent, thirdParent ],
      localBounds: new Bounds2( 0, 0, 1200, 400 )
    } );

    let elapsedTime = 0;
    stepEmitter.addListener( dt => {
      elapsedTime += dt;

      secondParent.x = 500;
      secondParent.y = 150;
      firstParent.x = 250;
      firstParent.y = 100 + Math.cos( elapsedTime ) * 100;
      thirdParent.x = secondParent.centerX + 150 + Math.cos( elapsedTime ) * 100;
      thirdParent.y = secondParent.centerY + Math.sin( elapsedTime ) * 100;
    } );

    const constraint = new FlowConstraint( scene, {
      layoutOriginProperty: new Vector2Property( new Vector2( 400, 100 ) )
    } );
    constraint.spacing = 10;
    constraint.insertCell( 0, new FlowCell( constraint, firstChild, null ) );
    constraint.insertCell( 1, new FlowCell( constraint, secondChild, null ) );
    constraint.insertCell( 2, new FlowCell( constraint, thirdChild, null ) );
    constraint.updateLayout();
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );