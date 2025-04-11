import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const rightText = new Text( 'Text aligned on right', new PhetFont( 12 ) );
    const leftText = new Text( 'Text aligned on left', new PhetFont( 12 ) );

    const resizer = new Rectangle( {
      fill: 'green',
      rectWidth: 30
    } );

    let elapsedTime = 0;
    stepEmitter.addListener( dt => {
      elapsedTime += dt;

      const minHeight = 50;
      const maxHeight = 200;
      resizer.rectHeight = ( minHeight + maxHeight ) / 2 + Math.cos( elapsedTime ) * ( maxHeight - minHeight ) / 2;
    } );

    const panel = new Panel( new FlowBox( {
      orientation: 'vertical',
      align: 'left',
      spacing: 5,
      children: [
        resizer,
        rightText
      ]
    } ) );


    const alignBox = new AlignBox( panel, { margin: 10, xAlign: 'right', yAlign: 'top' } );

    const node = new Node();

    // Can create the constraint before things are connected (it will listen)
    ManualConstraint.create( node, [ leftText, rightText, panel ], ( leftProxy, rightProxy, panelProxy ) => {
      leftProxy.centerY = rightProxy.centerY;
      leftProxy.right = panelProxy.left - 10;
    } );

    node.children = [ leftText, alignBox ];

    const content = new VBox( { children: [ node ], preferredHeight: 250 } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );