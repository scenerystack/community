# boxMullerTransform

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/util/boxMullerTransform.ts](https://github.com/phetsims/dot/blob/main/js/util/boxMullerTransform.ts) for the most up-to-date information.

## Overview

Generates a random Gaussian sample with the given mean and standard deviation.
This method relies on the "static" variables generate, z0, and z1 defined above.
Random.js is the primary client of this function, but it is defined here so it can be
used other places more easily if need be.
Code inspired by example here: https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform.

@param mu - The mean of the Gaussian
@param sigma - The standard deviation of the Gaussian

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [boxMullerTransform.ts](https://github.com/phetsims/dot/blob/main/js/util/boxMullerTransform.ts) in the [dot](https://github.com/phetsims/dot) repository.
