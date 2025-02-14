# ParallelRasterInitialClip

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialClip.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialClip.ts) for the most up-to-date information.

## Overview

We do the following:

1. Binary clip each RasterEdge into two RasterEdgeClips (one for each side of the split)
2. Take these, do a segmented parallel reduction, and
3. During reduction, store associated data to the RasterClippedChunks (precisely when we have reduced all of the
   edges for a particular chunk)

NOTE: The reduction is also completed in ParallelRasterChunkReduce, so if changing this file, please check there too

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterInitialClip {: #ParallelRasterInitialClip }


```js
import { ParallelRasterInitialClip } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, chunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunk](../alpenglow/RasterChunk.md)&gt;</span>, edges : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdge](../alpenglow/RasterEdge.md)&gt;</span>, numEdges : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippedChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)&gt;</span>, edgeClips : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdgeClip](../alpenglow/RasterEdgeClip.md)&gt;</span>, chunkReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)&gt;</span>, debugFullChunkReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunkReducePair](../alpenglow/RasterChunkReducePair.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }

#### validate( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, chunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunk](../alpenglow/RasterChunk.md)&gt;</span>, edges : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdge](../alpenglow/RasterEdge.md)&gt;</span>, numEdges : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippedChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)&gt;</span>, edgeClips : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdgeClip](../alpenglow/RasterEdgeClip.md)&gt;</span>, chunkReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)&gt;</span>, debugFullChunkReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;{ min: [RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md); max: [RasterChunkReduceData](../alpenglow/RasterChunkReduceData.md) }&gt;</span> ) {: #validate data-toc-label='validate' }



## Source Code

See the source for [ParallelRasterInitialClip.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialClip.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
