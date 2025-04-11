import '/lib/codemirror-5.52.2.min.js';
import '/lib/codemirror-5.52.2.javascript.min.js';
import '/lib/codemirror-5.52.2.xml.min.js';
import '/lib/codemirror-5.52.2.htmlmixed.min.js';

let globalId = 0;

export const getPDOMHTMLOutput = pdomHTMLProperty => {
  globalId++;

  const container = document.createElement( 'div' );

  const label = document.createElement( 'label' );
  label.htmlFor = `pdom-${globalId}`;
  label.textContent = 'Simplified Parallel DOM HTML:';
  container.appendChild( label );

  const div = document.createElement( 'div' );
  div.style.margin = '0 2em';
  div.id = `pdom-${globalId}`;
  container.appendChild( div );

  const pdomCodeMirror = CodeMirror( div, { // eslint-disable-line no-undef
    lineNumbers: false,
    tabSize: 2,
    value: pdomHTMLProperty.value,
    mode: 'htmlmixed',
    theme: 'monokai',
    lineWrapping: true,
    readOnly: true
  } );

  pdomHTMLProperty.link( html => {
    pdomCodeMirror.setValue( html );
  } );

  return container;
};