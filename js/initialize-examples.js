document$.subscribe( async () => {
  // console.log( 'reloading examples' );

  document.querySelectorAll( '.sandbox-example[data-example]' ).forEach( async div => {
    if ( div.dataset.initialized ) {
      return;
    }

    div.dataset.initialized = 'true';

    const module = await import( div.dataset.example );

    if ( typeof module.initialize === 'function' ) {
      module.initialize( div );
    }
  } );

  // Mkdocs material seems to be wiping away our CSS. Add it back.
  // See https://github.com/scenerystack/community/issues/130
  const module = await import( '/lib/scenerystack.esm.min.js' );
  module.reapplyGlobalStyle();
} );