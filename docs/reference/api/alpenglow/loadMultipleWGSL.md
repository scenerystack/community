# loadMultipleWGSL

## Overview

Loads data (usually from main memory) with multiple values per thread, storing them typically in shared memory.
Notably supports larger sizes than the workgroup size.

grainSize controls how many items are loaded per thread.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [loadMultipleWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/loadMultipleWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
