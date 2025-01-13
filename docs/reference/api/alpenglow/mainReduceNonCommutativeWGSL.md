# mainReduceNonCommutativeWGSL

## Overview

A specialized raked reduce for when our input is non-commutative AND stored in a blocked (not striped) order.
We essentially serialize some of it (reading a workgroup-size chunk at a time, reducing it, then loading the next).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [mainReduceNonCommutativeWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainReduceNonCommutativeWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
