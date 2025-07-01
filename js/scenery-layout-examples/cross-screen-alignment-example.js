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
    // This AlignGroup might be declared in a parent screen view, or another sim-wide accessible class.
    const alignGroup = new AlignGroup( { matchHorizontal: true, matchVertical: true } );

    // Screen 1 content:
    const threeStoogesAlignBox = new AlignBox( new VBox( {
      children: [
        new Checkbox( new BooleanProperty( false ), new Text( 'Moe', new PhetFont( 12 ) ) ),
        new Checkbox( new BooleanProperty( false ), new Text( 'Larry', new PhetFont( 12 ) ) ),
        new Checkbox( new BooleanProperty( false ), new Text( 'Curly', new PhetFont( 12 ) ) ),
        resizingRectangle
      ]
    } ), { group: alignGroup } );

    const threeStoogesPanel = new Panel( threeStoogesAlignBox );

    const screen1 = new Node( { children: [ threeStoogesPanel ], x: 0 } );

    // Screen 2 content:
    const threeMusketeersAlignBox = new AlignBox( new VBox( {
      children: [
        new Checkbox( new BooleanProperty( false ), new Text( 'Athos', new PhetFont( 12 ) ) ),
        new Checkbox( new BooleanProperty( false ), new Text( 'Porthos', new PhetFont( 12 ) ) ),
        new Checkbox( new BooleanProperty( false ), new Text( 'Aramis', new PhetFont( 12 ) ) )
      ]
    } ), { group: alignGroup } );

    const threeMusketeersPanel = new Panel( threeMusketeersAlignBox );

    const screen2 = new Node( { children: [ threeMusketeersPanel ], x: 300 } );

    const content = new Node( { children: [ screen1, screen2 ] } );
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );