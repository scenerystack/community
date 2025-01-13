# partition

## Overview

Partitions an array into two arrays: the first contains all elements that satisfy the predicate, and the second
contains all the (other) elements that do not satisfy the predicate.

e.g. partition( [1,2,3,4], function( n ) { return n % 2 === 0; } ) will return [[2,4],[1,3]]

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [partition.ts](https://github.com/phetsims/phet-core/blob/main/js/partition.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
