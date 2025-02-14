# assertHasProperties

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/assertHasProperties.ts](https://github.com/phetsims/phet-core/blob/main/js/assertHasProperties.ts) for the most up-to-date information.

## Overview

Throws an assertion error if specified object doesn't have all provided properties. This will also work for anything
defined on class prototypes (like Node.prototype.setOpacity)

@example
assertHasProperties( { tree:1, flower:2 }, [ 'tree' ] ) =&gt; no error
assertHasProperties( { flower:2 }, [ 'tree' ] ) =&gt; error
assertHasProperties( { tree:1, flower:2 }, [ 'tree', 'flower' ] ) =&gt; no error
assertHasProperties( { tree:1 }, [ 'tree', 'flower' ] ) =&gt; error
assertHasProperties( new phet.scenery.Node(), [ 'getOpacity','opacity', '_opacity' ] ) =&gt; no error

@author Michael Kauzmann (PhET Interactive Simulations)



## Source Code

See the source for [assertHasProperties.ts](https://github.com/phetsims/phet-core/blob/main/js/assertHasProperties.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
