import '/lib/codemirror-5.52.2.min.js';
import '/lib/codemirror-5.52.2.javascript.min.js';
import '/lib/codemirror-5.52.2.xml.min.js';
import '/lib/codemirror-5.52.2.htmlmixed.min.js';

// asyncRun is ( text: string ) => Promise<void>
export const createEditor = ( initialJS, asyncRun ) => {
  const container = document.createElement( 'div' );

  const codeContainerElement = document.createElement( 'div' );
  container.appendChild( codeContainerElement );

  const errorsContainerElement = document.createElement( 'div' );
  errorsContainerElement.classList.add( 'errors' );
  container.appendChild( errorsContainerElement );

  const codeMirror = CodeMirror( codeContainerElement, { // eslint-disable-line no-undef
    lineNumbers: true,
    tabSize: 2,
    value: initialJS,
    mode: 'javascript',
    theme: 'monokai',
    lineWrapping: true
  } );

  const run = async () => {
    errorsContainerElement.style.display = 'none';

    try {
      await asyncRun( codeMirror.getValue() );
    }
    catch( e ) {
      console.error( e );

      errorsContainerElement.style.display = 'block';
      errorsContainerElement.innerHTML = `<pre>${e}</pre>`;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  codeMirror.on( 'change', editor => run && run() );

  run();

  // We need to call codeMirror.refresh() once it is connected to the DOM
  {
    const observer = new MutationObserver( () => {
      if ( container.isConnected ) {
        codeMirror.refresh();
        observer.disconnect();
      }
    } );
    observer.observe( document, {
      childList: true,
      subtree: true
    } );
  }

  return container;
};