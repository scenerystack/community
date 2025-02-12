import { createSandbox } from "/js/createSandbox.js";

createSandbox( "a11y-basics-example", ( scene, stepEmitter, display ) => {
  const box = ( () => {
    /*START*/
    const element = new HBox( {
      spacing: 10,
      children: [
        new Checkbox( new BooleanProperty( true ), new Text( 'Wear Hat', { font: '20px sans-serif' } ), {
          accessibleName: 'Wear Hat',
          helpText: 'Check this box to wear a hat'
        } ),
        new TextPushButton( 'Go Outside', {
          font: '20px sans-serif',
          accessibleName: 'Go Outside',
          helpText: 'Click this button to go outside'
        } )
      ]
    } );

    const pdomRichText = new RichText( '', {
      align: 'left',
      font: '14px "Noto Sans Mono", SFMono-Regular, Consolas, Menlo, monospace'
    } );

    const content = new VBox( {
      spacing: 10,
      children: [
        element,
        pdomRichText
      ]
    } );

    new MutationObserver( () => {
      let html = html_beautify( display.getPDOMRootElement().innerHTML, {
        indent_size: 2,
        inline: [],
        unformatted: []
      } );

      for ( const attribute of [
        'class',
        'data-unique-id',
        'data-exclude-from-input',
        'data-focusable',
        'style',
        'id',
        'for'
      ] ) {
        html = html.replace( new RegExp( ` ${ attribute }="[^"]+"`, 'g' ), '' );
      }

      pdomRichText.string = escapeHTML( html ).replaceAll( '\n', '<br>' ).replaceAll( ' ', '&nbsp;' )
    } ).observe( display.getPDOMRootElement(), {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      } )
    /*END*/
    return content;
  } )();
  scene.addChild( box );
} );