import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'span-grid-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new GridBox( {
      children: [
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 0 ],
          layoutOptions: { column: 0, row: 0 }
        } ),
        new Rectangle( 0, 0, 100, 50, {
          fill: colors[ 2 ],
          sizable: true,
          localMinimumWidth: 100,
          localMinimumHeight: 50,
          layoutOptions: { column: 1, row: 0, horizontalSpan: 2, stretch: true, grow: 1 }
        } ),
        new Rectangle( 0, 0, 100, 100, {
          fill: colors[ 4 ],
          sizable: true,
          localMinimumWidth: 100,
          localMinimumHeight: 100,
          layoutOptions: { column: 0, row: 1, horizontalSpan: 2, verticalSpan: 2, stretch: true }
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 6 ],
          layoutOptions: { column: 2, row: 1 }
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 8 ],
          layoutOptions: { column: 2, row: 2 }
        } ),
        new Circle( 25, {
          fill: colors[ 0 ],
          layoutOptions: { column: 0, row: 3 }
        } ),
        new Circle( 25, {
          fill: colors[ 1 ],
          layoutOptions: { column: 1, row: 3 }
        } ),
        new Circle( 25, {
          fill: colors[ 2 ],
          layoutOptions: { column: 2, row: 3 }
        } )
      ]
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {
    widthResizable: true,
    heightResizable: true
  } ) );
} );