// Copyright 2022, University of Colorado Boulder

/**
 * Includes the code needed to create scenery-specific code sandboxes.
 *
 * Requires codemirror CSS/JS and examples.css
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import { showAriaLive } from './ariaLiveDisplay.js';
import { extractFunctionJS } from './extractFunctionJS.js';
import { BooleanProperty, DerivedProperty, Display, merge, Node, TinyEmitter } from '/lib/scenerystack.esm.min.js';
import '/lib/codemirror-5.52.2.min.js';
import '/lib/codemirror-5.52.2.javascript.min.js';
import '/lib/codemirror-5.52.2.xml.min.js';
import '/lib/codemirror-5.52.2.htmlmixed.min.js';
import { colors } from './colors.js';
import { createLabeledBox } from './createLabeledBox.js';
import { getAriaLiveEmitter } from './getAriaLiveEmitter.js';
import { getPDOMHTMLOutput } from './getPDOMHTMLOutput.js';
import { getPDOMHTMLProperty } from './getPDOMHTMLProperty.js';
import { ResizableNode } from './ResizableNode.js';

const isDarkModeProperty = new BooleanProperty( false );
self.isDarkModeProperty = isDarkModeProperty;
{
  const onThemeChange = callback => {
    function getCurrentTheme() {
      return document.body.getAttribute( 'data-md-color-scheme' );
    }

    let lastTheme = getCurrentTheme();

    const observer = new MutationObserver( () => {
      const newTheme = getCurrentTheme();
      if ( newTheme && newTheme !== lastTheme ) {
        lastTheme = newTheme;
        callback( newTheme );
      }
    } );

    observer.observe( document.body, {
      attributes: true,
      attributeFilter: [ 'data-md-color-scheme' ]
    } );

    callback( lastTheme );

    return () => observer.disconnect();
  }

  // Example usage:
  onThemeChange(theme => {
    isDarkModeProperty.value = theme === 'slate';
  } );
}

// TODO: Better link these to the theme
const foregroundColor = new DerivedProperty( [ isDarkModeProperty ], isDark => {
  return isDark ? 'rgb(226, 228, 233)' : '#000';
} );
const backgroundColor = new DerivedProperty( [ isDarkModeProperty ], isDark => {
  return isDark ? 'rgb(30, 33, 41)' : '#fff';
} );

const scenerystackImportsPromise = import( '/lib/scenerystack.esm.min.js' );

scenerystackImportsPromise.then( actualImports => {
  self.scenerystackImports = {};

  // Add all of SceneryStack
  Object.keys( actualImports ).forEach( key => {
    if ( key !== 'default' ) {
      self.scenerystackImports[ key ] = actualImports[ key ];
    }
  } );

  // Plus some custom things
  self.scenerystackImports.colors = colors;
  self.scenerystackImports.createLabeledBox = createLabeledBox;
  self.scenerystackImports.ResizableNode = ResizableNode;
  self.scenerystackImports.isDarkModeProperty = isDarkModeProperty;
  self.scenerystackImports.foregroundColor = foregroundColor;
  self.scenerystackImports.backgroundColor = backgroundColor;
} );

export const createSandbox = ( divOrId, func, providedOptions ) => {

  let id;
  let parentElement;

  if ( typeof divOrId === 'string' ) {
    id = divOrId;
    parentElement = document.getElementById( id );
  }
  else {
    const idBits = divOrId.dataset.example.split( '/' );
    id = idBits[ idBits.length - 1 ].replace( '.js', '' );
    parentElement = divOrId;

    // Don't double-initialize
    if ( parentElement.hasChildNodes() ) {
      return;
    }
  }

  // console.log( `creating sandbox for ${id}` );

  const disposeEmitter = new TinyEmitter();

  const { js, jsBefore, jsAfter } = extractFunctionJS( func );

  const options = merge( {
    jsBefore: jsBefore,
    jsAfter: jsAfter,
    showDisplay: true,
    showCode: true,
    showErrors: true,
    showPDOM: false,
    showAriaLive: false
  }, providedOptions );

  const displayContainerElement = document.createElement( 'div' );
  if ( options.showDisplay ) {
    parentElement.appendChild( displayContainerElement );
  }

  const pdomContainerElement = document.createElement( 'div' );
  if ( options.showPDOM ) {
    parentElement.appendChild( pdomContainerElement );
  }

  const ariaLiveContainerElement = document.createElement( 'div' );
  if ( options.showAriaLive ) {
    parentElement.appendChild( ariaLiveContainerElement );
  }

  const codeContainerElement = document.createElement( 'div' );
  if ( options.showCode ) {
    parentElement.appendChild( codeContainerElement );
  }

  const errorsContainerElement = document.createElement( 'div' );
  errorsContainerElement.classList.add( 'errors' );
  if ( options.showErrors ) {
    parentElement.appendChild( errorsContainerElement );
  }

  const codeMirror = CodeMirror( codeContainerElement, { // eslint-disable-line no-undef
    lineNumbers: true,
    tabSize: 2,
    value: js,
    mode: 'javascript',
    theme: 'monokai',
    lineWrapping: true
  } );

  const container = new Node();
  const scene = new Node();

  container.addChild( scene );

  const display = new Display( container, {
    width: 1,
    height: 1,
    accessibility: true,
    listenToOnlyElement: true,
    allowCSSHacks: true,
    passiveEvents: true
  } );
  display.domElement.style.position = 'relative';

  if ( options.showPDOM ) {
    const pdomHTMLProperty = getPDOMHTMLProperty( display );
    disposeEmitter.addListener( () => pdomHTMLProperty.dispose() );

    pdomContainerElement.appendChild( getPDOMHTMLOutput( pdomHTMLProperty ) );
  }

  if ( options.showAriaLive ) {
    getAriaLiveEmitter( display ).addListener( showAriaLive );
  }

  const stepEmitter = new TinyEmitter();

  if ( options.showDisplay ) {
    display.updateOnRequestAnimationFrame( dt => {
      stepEmitter.emit( dt );

      const padding = 2;
      if ( scene.bounds.isValid() ) {
        const width = codeContainerElement.offsetWidth || parentElement.offsetWidth;
        scene.centerX = width / 2;
        scene.top = padding;
        display.width = width;
        display.height = Math.ceil( scene.bottom ) + padding;
      }
      displayContainerElement.style.height = `${Math.ceil( display.height )}px`;
    } );
    display.initializeEvents();

    displayContainerElement.appendChild( display._domElement );
  }

  const run = async () => {
    const oldChildren = scene.children;
    scene.removeAllChildren();
    displayContainerElement.style.backgroundColor = 'transparent';
    scene.opacity = 1;
    errorsContainerElement.style.display = 'none';

    try {
      window[ `scene${id}` ] = scene;
      window[ `stepEmitter${id}` ] = stepEmitter;
      window[ `display${id}` ] = display;

      const codeMirrorCode = codeMirror.getValue();

      await scenerystackImportsPromise;

      const imports = Object.keys( self.scenerystackImports ).map( key => {
        if ( codeMirrorCode.includes( key ) || options.jsBefore.includes( key ) || options.jsAfter.includes( key ) ) {
          return `const ${key} = scenerystackImports.${key};\n`;
        }
      } ).join( '' );

      const code = `${imports}${Math.random()};(${options.jsBefore}\n${codeMirrorCode}\n${options.jsAfter}\n)( window[ 'scene${id}' ], window[ 'stepEmitter${id}' ], window[ 'display${id}' ] )`;

      // Assumes it's in a function, differently from the sandbox
      const dataURI = `data:text/javascript;base64,${btoa( code )}`;

      await import( dataURI );
    }
    catch( e ) {
      console.error( e );
      scene.children = oldChildren;
      displayContainerElement.style.backgroundColor = 'rgba(255,0,0,0.2)';
      scene.opacity = 0.5;

      errorsContainerElement.style.display = 'block';
      errorsContainerElement.innerHTML = `<pre>${e}</pre>`;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  codeMirror.on( 'change', editor => run && run() );

  run();

  // Clean up sandbox when it is removed, see https://github.com/scenerystack/community/issues/130
  {
    const interval = setInterval( () => {
      if ( !parentElement.isConnected ) {
        // console.log(`disposing sandbox for ${id}`);

        disposeEmitter.emit();
        display.dispose();
        container.disposeSubtree();

        clearInterval( interval );
      }
    }, 100 );
  }
};