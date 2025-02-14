# toFixedNumber

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/util/toFixedNumber.ts](https://github.com/phetsims/dot/blob/main/js/util/toFixedNumber.ts) for the most up-to-date information.

## Overview

A predictable implementation of toFixed, where the result is returned as a number instead of a string.

JavaScript's toFixed is notoriously buggy, behavior differs depending on browser,
because the spec doesn't specify whether to round or floor.
Rounding is symmetric for positive and negative values, see roundSymmetric.

@author Chris Malley (cmalley@pixelzoom.com)
@author Michael Kauzmann (PhET Interactive Simulations)



## Source Code

See the source for [toFixedNumber.ts](https://github.com/phetsims/dot/blob/main/js/util/toFixedNumber.ts) in the [dot](https://github.com/phetsims/dot) repository.
