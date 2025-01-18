# isClearingPhetioDynamicElementsProperty

## Overview

Property that is set to true when the PhET-iO State Engine is clearing dynamic elements.

Marking if we are clearing dynamic elements from instrumented containers. This information is useful because certain
logic depends on whether we are setting PhET-iO state but also needs to know about when clearing dynamic elements
to handle it separately.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)



## Source Code

See the source for [isClearingPhetioDynamicElementsProperty.ts](https://github.com/phetsims/tandem/blob/main/js/isClearingPhetioDynamicElementsProperty.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
