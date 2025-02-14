# div_u64_u64WGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/math/div_u64_u64WGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/math/div_u64_u64WGSL.ts) for the most up-to-date information.

## Overview

Integer division of two u64s, returning a vec4&lt;u32&gt; with the quotient (result.xy) and remainder (result.zw).

Packed quotient, remainder
See https://stackoverflow.com/questions/18448343/divdi3-division-used-for-long-long-by-gcc-on-x86
and https://stackoverflow.com/questions/11548070/x86-64-big-integer-representation/18202791#18202791
TODO: eeek, will this work, we're using our signed subtraction on unsigned where we guarantee the top bit
TODO: could optimize the left shift
TODO: omg, are we going to overflow?
TODO: we can ignore division with https://en.wikipedia.org/wiki/Binary_GCD_algorithm perhaps?

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [div_u64_u64WGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/math/div_u64_u64WGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
