# solveCubicRootsReal

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/util/solveCubicRootsReal.ts](https://github.com/phetsims/dot/blob/main/js/util/solveCubicRootsReal.ts) for the most up-to-date information.

## Overview

Returns an array of the real roots of the cubic equation $ax^3 + bx^2 + cx + d=0$, or null if every value is a
solution. If a is nonzero, there should be between 0 and 3 (inclusive) values returned.

@param [discriminantThreshold] - for determining whether we have a single real root
@returns The real roots of the equation, or null if all values are roots. If the root has
         a multiplicity larger than 1, it will be repeated that many times.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [solveCubicRootsReal.ts](https://github.com/phetsims/dot/blob/main/js/util/solveCubicRootsReal.ts) in the [dot](https://github.com/phetsims/dot) repository.
