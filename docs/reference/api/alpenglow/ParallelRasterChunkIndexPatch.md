# ParallelRasterChunkIndexPatch

## Overview

Updates the reducible/complete chunks with proper destination edge indices (so the chunk references the range of
edges it is comprised of).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterChunkIndexPatch {: #ParallelRasterChunkIndexPatch }


```js
import { ParallelRasterChunkIndexPatch } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, chunkIndexMap : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, chunkIndices : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, clippedChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)&gt;</span>, numClippedChunks : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, reducibleChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunk](../alpenglow/RasterChunk.md)&gt;</span>, completeChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterCompleteChunk](../alpenglow/RasterCompleteChunk.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterChunkIndexPatch.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterChunkIndexPatch.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
