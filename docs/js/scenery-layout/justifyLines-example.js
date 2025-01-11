import { createSandbox } from "/js/createSandbox.js";

createSandbox( "justifyLines-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const boxes = [
      "top",
      "bottom",
      "center",
      "spaceBetween",
      "spaceAround",
      "spaceEvenly",
      null
    ].map( justifyLines => {
      const createResizable = () => {
        const node = new Rectangle( {
          sizable: true,
          localMinimumWidth: 20,
          localMinimumHeight: 20,
          fill: "gray"
        } );
        return node;
      };
      return new HBox( {
        preferredWidth: 40,
        widthSizable: false,
        wrap: true,
        stretch: true,
        children: [
          new Rectangle( 0, 0, 20, 20, { fill: colors[ 2 ] } ),
          createResizable(),
          new Rectangle( 0, 0, 20, 20, { fill: colors[ 4 ] } ),
          createResizable(),
          new Rectangle( 0, 0, 20, 20, { fill: colors[ 6 ] } ),
          createResizable(),
          new Rectangle( 0, 0, 20, 20, { fill: colors[ 8 ] } ),
          createResizable()
        ],
        justifyLines: justifyLines
      } );
    } );
    /*END*/
    const container = new HBox( {
      justify: "left",
      stretch: true,
      children: boxes
    } );
    return container;
  } )();
  scene.addChild( new ResizableNode( display, box, {
    heightResizable: true
  } ) );
  box.preferredHeight = 150;
} );