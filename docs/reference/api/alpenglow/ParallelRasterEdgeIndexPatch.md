# ParallelRasterEdgeIndexPatch

## Overview

Updates the edges with the correct chunk indices (clippedChunk =&gt; outputChunk) and first/last flags.

NOTE: It was possible to attempt to set first/last flags earlier (when we wrote the edges), but it would require
more traversal for edges that were fully clipped at the start/end (so they didn't contribute at all). We would
instead have to find the first/last "non-degenerate" EdgeClip, so it's just easier to do it here.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterEdgeIndexPatch {: #ParallelRasterEdgeIndexPatch }


```js
import { ParallelRasterEdgeIndexPatch } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, chunkIndexMap : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, chunkIndices : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, numEdges : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, edges : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdge](../alpenglow/RasterEdge.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterEdgeIndexPatch.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterEdgeIndexPatch.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
