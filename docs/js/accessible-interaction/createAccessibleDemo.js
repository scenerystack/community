import { createEditor } from '../createEditor.js';
import { extractFunctionJS } from '../extractFunctionJS.js';
import { getPDOMHTMLOutput } from '../getPDOMHTMLOutput.js';
import { getPDOMHTMLProperty } from '../getPDOMHTMLProperty.js';

export const createAccessibleDemo = ( id, fullJS, options ) => {
  const { js, jsBefore, jsAfter } = extractFunctionJS( fullJS );

  const showPDOM = options?.showPDOM ?? true;
  const interactiveHighlights = options?.interactiveHighlights ?? false;
  const pointerAreas = options?.pointerAreas ?? false;

  const initialize = ( iframe, container ) => {
    const ViewTypes = iframe.contentWindow.ViewTypes;

    if ( showPDOM ) {
      const pdomHTMLProperty = getPDOMHTMLProperty( iframe.contentWindow.display );

      container.appendChild( getPDOMHTMLOutput( pdomHTMLProperty ) );
    }

    container.appendChild( createEditor( js.trim(), async js => {
      const ViewTypesId = `ViewTypes_${id}`;
      self[ ViewTypesId ] = ViewTypes;

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
      iframe.contentWindow.interactiveHighlightsEnabledProperty.value = interactiveHighlights;
      iframe.contentWindow.display.setPointerAreaDisplayVisible( pointerAreas );
    } ) );

    // TODO: re-run the editor handling when the iframe is resized
  };

  document$.subscribe( async () => {
    const iframe = document.querySelector( `#${id}` );

    if ( iframe ) {
      console.log( 'subscribe' );
      const interval = setInterval( () => {
        const container = document.querySelector( `#${id}-info` );

        if ( iframe && container && iframe.contentWindow?.ViewTypes ) {
          clearInterval( interval );

          console.log( 'initialize' );
          initialize( iframe, container );
        }
      }, 50 );
    }
  } );
};