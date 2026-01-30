import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {

  /*START*/

  const resizingWidthRectangle = new Rectangle( 0, 0, 20, 20, { fill: colors[ 0 ] } );

  const vBox = new VBox( {
    layoutOptions: {
      minContentWidth: 100
    },
    children: [
      resizingWidthRectangle,
      new Rectangle( 0, 0, 30, 30, { fill: colors[ 2 ] } )
    ]
  } );

  const resizingHeightRectangle = new Rectangle( 0, 0, 20, 20, { fill: colors[ 4 ] } );

  const hBox = new HBox( {
    preferredHeight: 100,
    heightSizable: false,
    children: [
      resizingHeightRectangle,
      new Rectangle( 0, 0, 30, 30, { fill: colors[ 8 ] } )
    ]
  } );

  /*END*/

  let elapsedTime = 0;
  stepEmitter.addListener( dt => {
    elapsedTime += dt;
    const minWidth = 20;
    const maxWidth = 120;
    resizingWidthRectangle.rectWidth = ( minWidth + maxWidth ) / 2 + Math.cos( elapsedTime ) * ( maxWidth - minWidth ) / 2;

    const minHeight = 20;
    const maxHeight = 120;
    resizingHeightRectangle.rectHeight = ( minHeight + maxHeight ) / 2 + Math.cos( elapsedTime ) * ( maxHeight - minHeight ) / 2;
  } );

  const container = new HBox( { children: [ vBox, hBox ], preferredHeight: 120 } );

  scene.addChild( container );
} );