// Copyright 2022, University of Colorado Boulder

/**
 * Includes the code needed to create scenery-specific code sandboxes.
 *
 * Requires codemirror CSS/JS and examples.css
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import { extractFunctionJS } from './extractFunctionJS.js';
import { Display, merge, Node, TinyEmitter } from '/lib/scenerystack.esm.min.js';
import '/lib/codemirror-5.52.2.min.js';
import '/lib/codemirror-5.52.2.javascript.min.js';
import { colors } from './colors.js';
import { createLabeledBox } from './createLabeledBox.js';
import { ResizableNode } from './ResizableNode.js';

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
} );

export const createSandbox = ( id, func, providedOptions ) => {

  const { js, jsBefore, jsAfter } = extractFunctionJS( func );

  const options = merge( {
    jsBefore: jsBefore,
    jsAfter: jsAfter,
    showDisplay: true,
    showCode: true,
    showErrors: true
  }, providedOptions );

  const parentElement = document.getElementById( id );

  const displayContainerElement = document.createElement( 'div' );
  if ( options.showDisplay ) {
    parentElement.appendChild( displayContainerElement );
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

  const isDescendant = function( parent, child ) {
    let node = child;
    while ( node ) {
      if ( node === parent ) {
        return true;
      }

      // Traverse up to the parent
      node = node.parentNode;
    }

    // Go up until the root but couldn't find the `parent`
    return false;
  };

  window.addEventListener( 'keydown', event => {
    // if shift-enter is pressed
    if ( event.keyCode === 13 && event.shiftKey && isDescendant( document.getElementById( 'code' ), document.activeElement ) ) {
      run();

      event.preventDefault();
    }
  } );

  const stepEmitter = new TinyEmitter();

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
};