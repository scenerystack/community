# assertMutuallyExclusiveOptions

## Overview

Throws an assertion error if mutually exclusive options are specified.

@example
assertMutuallyExclusiveOptions( { tree:1, flower:2 }, [ 'tree' ], [ 'flower' ] ) =&gt; error
assertMutuallyExclusiveOptions( { flower:2 }, [ 'tree' ], [ 'flower' ] ) =&gt; no error
assertMutuallyExclusiveOptions( { tree:1 }, [ 'tree' ], [ 'flower' ] ) =&gt; no error
assertMutuallyExclusiveOptions( { tree:1, mountain:2 }, [ 'tree', 'mountain' ], [ 'flower' ] ) =&gt; no error

@author Sam Reid (PhET Interactive Simulations)



## Source Code

See the source for [assertMutuallyExclusiveOptions.ts](https://github.com/phetsims/phet-core/blob/main/js/assertMutuallyExclusiveOptions.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
