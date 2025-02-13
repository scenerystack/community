import '/lib/beautify-html-1.15.1.min.js';

export const beautifyPDOM = pdomHTML => {
  let html = html_beautify( pdomHTML, {
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

  return html;
};