# dimensionForEach

## Overview

ForEach for multidimensional arrays.

e.g. dimensionForEach( 1, array, callback ) is equivalent to array.forEach( callback )
e.g. dimensionForEach( 2, [ [ 1, 2 ], [ 3, 4 ] ], f ) will call:
     f(1), f(2), f(3), f(4)
  OR more accurately (since it includes indices indicating how to reach that element:
     f(1,0,0), f(2,0,1), f(3,1,0), f(4,1,1)
  Notably, f(2,0,1) is called for the element 3 BECAUSE original[ 0 ][ 1 ] is the element 2

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [dimensionForEach.ts](https://github.com/phetsims/phet-core/blob/main/js/dimensionForEach.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
