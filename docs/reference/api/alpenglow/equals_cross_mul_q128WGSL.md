# equals_cross_mul_q128WGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/math/equals_cross_mul_q128WGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/math/equals_cross_mul_q128WGSL.ts) for the most up-to-date information.

## Overview

Checks whether two rational numbers are equal (by using cross-multiplication).

IMPORTANT NOTE: this only works if we have the bits to spare (where numerator * denominator does NOT overflow)
to avoid reduction. Reduction would also work.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [equals_cross_mul_q128WGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/math/equals_cross_mul_q128WGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
