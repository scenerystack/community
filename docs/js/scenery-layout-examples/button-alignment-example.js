import { createSandbox } from "/js/createSandbox.js";

export const initialize = div => createSandbox( div, ( scene, stepEmitter, display ) => {
  const box = ( () => {
    const resizingRectangle = new Rectangle( {
      fill: 'green',
      rectHeight: 15
    } );

    let elapsedTime = 0;
    stepEmitter.addListener( dt => {
      elapsedTime += dt;

      const minWidth = 30;
      const maxWidth = 200;
      resizingRectangle.rectWidth = ( minWidth + maxWidth ) / 2 + Math.cos( elapsedTime ) * ( maxWidth - minWidth ) / 2;
    } );

    /*START*/
    const content = new GridBox( {
      spacing: 5,
      stretch: true,
      rows: [
        [
          new RectangularPushButton( {
            xAlign: 'stretch',
            yAlign: 'stretch',
            content: new GridBox( {
              grow: 1,
              rows: [
                [
                  new Rectangle( 0, 0, 25, 25, { fill: colors[ 2 ] } ),
                  new Rectangle( 0, 0, 25, 25, { fill: colors[ 4 ] } )
                ],
                [
                  new Rectangle( 0, 0, 25, 25, { fill: colors[ 6 ] } ),
                  new Rectangle( 0, 0, 25, 25, { fill: colors[ 8 ] } )
                ]
              ]
            } ),
            sizable: true
          } ),
          new RectangularPushButton( {
            content: new Rectangle( 0, 0, 50, 100, { fill: 'red' } ),
            sizable: true
          } )
        ],
        [
          new RectangularPushButton( {
            content: resizingRectangle,
            sizable: true
          } ),
          new RectangularPushButton( {
            content: new Rectangle( 0, 0, 100, 100, { fill: 'red' } ),
            sizable: true
          } )
        ]
      ]
    } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );