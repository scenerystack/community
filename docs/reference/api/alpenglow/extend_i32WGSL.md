# extend_i32WGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/render-program/extend_i32WGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/render-program/extend_i32WGSL.ts) for the most up-to-date information.

## Overview

Integer extension for RenderExtend.

Given size=4, provide the following patterns:

input:  -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

pad:     0,  0,  0,  0,  0,  0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3
repeat:  2,  3,  0,  1,  2,  3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1
reflect: 2,  3,  3,  2,  1,  0, 0, 1, 2, 3, 3, 2, 1, 0, 0, 1

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [extend_i32WGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/render-program/extend_i32WGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
