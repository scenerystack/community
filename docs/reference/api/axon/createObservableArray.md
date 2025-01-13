# createObservableArray

## Overview

createObservableArray conforms to the Proxy interface, which is polluted with `any` types.  Therefore we disable
this rule for this file.
/* eslint-disable @typescript-eslint/no-explicit-any */
Creates an object that has the same API as an Array, but also supports notifications and PhET-iO. When an item
is added or removed, the lengthProperty changes before elementAddedEmitter or elementRemovedEmitter emit.

@author Sam Reid (PhET Interactive Simulations)



## Source Code

See the source for [createObservableArray.ts](https://github.com/phetsims/axon/blob/main/js/createObservableArray.ts) in the [axon](https://github.com/phetsims/axon) repository.
