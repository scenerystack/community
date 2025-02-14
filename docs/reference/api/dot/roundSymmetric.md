# roundSymmetric

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/util/roundSymmetric.ts](https://github.com/phetsims/dot/blob/main/js/util/roundSymmetric.ts) for the most up-to-date information.

## Overview

Rounds using "Round half away from zero" algorithm. See dot#35.

JavaScript's Math.round is not symmetric for positive and negative numbers, it uses IEEE 754 "Round half up".
See https://en.wikipedia.org/wiki/Rounding#Round_half_up.
For sims, we want to treat positive and negative values symmetrically, which is IEEE 754 "Round half away from zero",
See https://en.wikipedia.org/wiki/Rounding#Round_half_away_from_zero

Note that -0 is rounded to 0, since we typically do not want to display -0 in sims.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [roundSymmetric.ts](https://github.com/phetsims/dot/blob/main/js/util/roundSymmetric.ts) in the [dot](https://github.com/phetsims/dot) repository.
