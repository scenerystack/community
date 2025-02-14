# DelayedMutate

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/DelayedMutate.ts](https://github.com/phetsims/scenery/blob/main/js/util/DelayedMutate.ts) for the most up-to-date information.

## Overview

A mixin that delays the mutation of a certain set of mutation keys until AFTER the super() call has fully finished.
This can be wrapped around a type where a mutate( { someKey: ... } ) would cause an error in the super(), and we
want to postpone that until after construction. e.g.:

const SomeNode = DelayedMutate( 'SomeNode', [ 'someOption' ], class extends SuperNode {
  constructor( options ) {
    super( options );

    this.someOptionProperty = new Property( something );
  }

  set someOption( value: Something ) {
    this.someOptionProperty.value = value;
  }

  get someOption(): Something {
    return this.someOptionProperty.value;
  }
} );

If this was NOT done, the following would error out:

new SomeNode( { someOption: something } )

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [DelayedMutate.ts](https://github.com/phetsims/scenery/blob/main/js/util/DelayedMutate.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
