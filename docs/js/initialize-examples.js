document$.subscribe( () => {
  console.log( 'reloading examples' );

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
} );