# swapObjectKeys

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phet-core/blob/main/js/swapObjectKeys.ts](https://github.com/phetsims/phet-core/blob/main/js/swapObjectKeys.ts) for the most up-to-date information.

## Overview

Swap the values of two keys on an object, but only if the value is defined

@example
swapObjectKeys( { x: 4,y: 3 }, 'x', 'y' ) -&gt; { x: 4, y:3 }
swapObjectKeys( { x: 4 }, 'x', 'y' ) -&gt; { y:4 }
swapObjectKeys( { x: 4, y: undefined }, 'x', 'y' ) -&gt; { x: undefined, y:4 }
swapObjectKeys( { otherStuff: 'hi' }, 'x', 'y' ) -&gt; { otherStuff: 'hi' }

@author Michael Kauzmann (PhET Interactive Simulations)



## Source Code

See the source for [swapObjectKeys.ts](https://github.com/phetsims/phet-core/blob/main/js/swapObjectKeys.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
