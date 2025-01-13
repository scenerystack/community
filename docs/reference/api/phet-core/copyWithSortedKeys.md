# copyWithSortedKeys

## Overview

Preload file that sorts the keys in an object intended for JSON, using the strategy defined in
https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key

This is used in the simulation side to make sure the elements-baseline file is sorted, and used in the phet-io
wrapper side to make sure the elements-overrides file is sorted.

Namespacing and naming are discussed in https://github.com/phetsims/phet-io/issues/1446#issuecomment-476842068 and below
NOTE: Please be mindful of the copy in formatPhetioAPI, see https://github.com/phetsims/phet-io/issues/1733

@author Sam Reid (PhET Interactive Simulations)
@author Chris Klusendorf (PhET Interactive Simulations)



## Source Code

See the source for [copyWithSortedKeys.ts](https://github.com/phetsims/phet-core/blob/main/js/copyWithSortedKeys.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
