import { createSandbox } from "/js/createSandbox.js";

createSandbox( 'absolute-example', ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    return new GridBox( {
      children: [
        new Rectangle( 0, 0, 75, 50, {
          fill: colors[ 0 ],
          layoutOptions: { column: 0, row: 0 }
        } ),
        new Rectangle( 0, 0, 50, 75, {
          fill: colors[ 2 ],
          layoutOptions: { column: 1, row: 0 }
        } ),
        new Circle( 25, {
          fill: colors[ 4 ],
          layoutOptions: { column: 2, row: 0 }
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 6 ],
          layoutOptions: { column: 0, row: 1 }
        } ),
        new Rectangle( 0, 0, 50, 50, {
          fill: colors[ 8 ],
          layoutOptions: { column: 1, row: 2 }
        } )
      ]
    } );
    /*END*/
  } )();
  scene.addChild( new ResizableNode( display, box, {} ) );
} );