import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/

    // AlignGroup by default matches both width and height
    const alignGroup = new AlignGroup( {
      matchHorizontal: false
    } );

    // Wrap some icons in AlignBoxes
    const iconA = alignGroup.createBox( new Rectangle( 0, 0, 50, 30, { fill: colors[ 0 ] } ) );
    const iconB = alignGroup.createBox( new Rectangle( 0, 0, 30, 50, { fill: colors[ 2 ] } ) );
    const iconC = alignGroup.createBox( new Circle( 20, { fill: colors[ 4 ] } ) );

    return new HBox( {
      spacing: 2,
      children: [ iconA, iconB, iconC ].map( icon => {
        // Shows a background behind each item (to see the AlignBox bounds)
        return new Node( {
          children: [
            Rectangle.bounds( icon.bounds, { fill: '#ccc' } ),
            icon
          ]
        } );
      } )
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true,
    heightResizable: true
  } ) );
} );