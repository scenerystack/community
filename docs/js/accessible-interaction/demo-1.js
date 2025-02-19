import { createEditor } from '../createEditor.js';

const id = 'demo1';

const iframe = document.querySelector( '#demo-1' );
const container = document.querySelector( '#demo-1-info' );

const initialize = () => {
  const ViewTypes = iframe.contentWindow.ViewTypes;

  container.appendChild( createEditor( `export class View extends Node {
  constructor( model, layoutBoundsProperty ) {

    const cyclistNode = new CyclistNode( model.cyclist );

    const scaledNode = new Node( {
      children: [
        cyclistNode
      ]
    } );

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
}`, async js => {
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
  const interval = setInterval( () => {
    if ( iframe?.contentWindow?.ViewTypes ) {
      clearInterval( interval );

      initialize();
    }
  }, 50 );
} );