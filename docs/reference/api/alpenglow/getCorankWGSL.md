# getCorankWGSL

## Overview

Co-rank function, that determines the indices into two arrays that would be at a given rank if they were sorted
together (with a binary search).

It will return the index into the first array (A), and the index into the second array (B) would just be
k - result.

See ByteEncoder.getCorank for more information.

Somewhat adapted from "Programming Massively Parallel Processors" by Hwu, Kirk and Hajj

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;



## Source Code

See the source for [getCorankWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/getCorankWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
