# loadReducedWGSL

## Overview

Loads data (usually from main memory) with multiple values per thread, but reduces them into a single value per
thread. Supports multiple orders of data (both in access order and storage order).

grainSize controls how many items are loaded per thread.

For each thread, it will essentially load the first value, and then combine that with subsequently loaded values.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [loadReducedWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/loadReducedWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
