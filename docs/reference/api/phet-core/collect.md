# collect

## Overview

Creates an array of results from an iterator that takes a callback.

For instance, if calling a function f( g ) will call g( 1 ), g( 2 ), and g( 3 ),
collect( function( callback ) { f( callback ); } );
will return [1,2,3].

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [collect.ts](https://github.com/phetsims/phet-core/blob/main/js/collect.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
