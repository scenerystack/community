import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const createBoxes = label => [
      new Rectangle( 0, 0, 170, 30, {
        fill: colors[ 2 ], children: [
          new Text( label, { fontSize: 16, centerY: 15 } )
        ]
      } ),
      new Rectangle( 0, 0, 50, 30, { fill: colors[ 4 ] } ),
      new Circle( 15, { fill: colors[ 6 ] } ),
      new Rectangle( 0, 0, 50, 30, { fill: colors[ 8 ] } )
    ];
    /*START*/
    const boxes = [
      new HBox( {
        justify: 'left',
        children: createBoxes( 'justify:left' )
      } ),
      new HBox( {
        justify: 'right',
        children: createBoxes( 'justify:right' )
      } ),
      new HBox( {
        justify: 'spaceBetween',
        children: createBoxes( 'justify:spaceBetween' )
      } ),
      new HBox( {
        justify: 'spaceAround',
        children: createBoxes( 'justify:spaceAround' )
      } ),
      new HBox( {
        justify: 'spaceEvenly',
        children: createBoxes( 'justify:spaceEvenly' )
      } ),
      new HBox( {
        justify: 'center',
        children: createBoxes( 'justify:center' )
      } )
    ];
    /*END*/
    const container = new VBox( {
      justify: 'top',
      stretch: true,
      children: boxes
    } );
    return container;
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true
  } ) );
  box.preferredWidth = 400;
} );