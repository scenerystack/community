import { createEditor } from '../createEditor.js';

const id = 'demo1';

const initialize = ( iframe, container ) => {
  const ViewTypes = iframe.contentWindow.ViewTypes;

  container.appendChild( createEditor( `
export class View extends Node {
  // Provides a Model and a TReadOnlyProperty<Bounds2> that will
  // contain the bounds of the layout area for the view.
  constructor( model, layoutBoundsProperty ) {

    // Create a cyclist node
    const cyclistNode = new CyclistNode( model.cyclist );

    // Place it in a scaled container
    // (we will include the rest of the UI here also)
    const scaledNode = new Node( {
      children: [
        cyclistNode
      ]
    } );

    // Initialize the view
    super( {
      children: [
        new BackgroundNode( model.positionProperty, layoutBoundsProperty ),
        scaledNode
      ]
    } );

    // Center the text and the rectangle dynamically
    layoutBoundsProperty.link( bounds => {
      const scale = bounds.height / 500;
      scaledNode.setScaleMagnitude( bounds.height / 500 );
      scaledNode.y = ( bounds.top + 3 * bounds.bottom ) / 4;
      cyclistNode.centerX = bounds.centerX / scale;
    } );
  }
}
`.trim(), async js => {
    const ViewTypesId = `ViewTypes_${id}`;
    self[ ViewTypesId ] = ViewTypes;

    const jsBefore = '';
    const jsAfter = '';

    const imports = Object.keys( ViewTypes ).map( key => {
      if ( js.includes( key ) || jsBefore.includes( key ) || jsAfter.includes( key ) ) {
        return `const ${key} = ${ViewTypesId}.${key};\n`;
      }
    } ).join( '' );

    const code = `${imports}${Math.random()};${jsBefore}\n${js}\n${jsAfter}\n`;

    // Assumes it's in a function, differently from the sandbox
    const dataURI = `data:text/javascript;base64,${btoa( code )}`;

    const module = await import( dataURI );

    iframe.contentWindow.setViewClass( module.View );
    iframe.contentWindow.interactiveHighlightsEnabledProperty.value = false;
    iframe.contentWindow.display.setPointerAreaDisplayVisible( false );
  } ) );

  // TODO: re-run the editor handling when the iframe is resized
};

document$.subscribe( async () => {
  const iframe = document.querySelector( '#demo-1' );

  if ( iframe ) {
    console.log( 'subscribe' );
    const interval = setInterval( () => {
      const container = document.querySelector( '#demo-1-info' );

      if ( iframe && container && iframe.contentWindow?.ViewTypes ) {
        clearInterval( interval );

        console.log( 'initialize' );
        initialize( iframe, container );
      }
    }, 50 );
  }
} );