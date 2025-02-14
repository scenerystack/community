# ParallelRasterInitialEdgeReduce

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialEdgeReduce.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialEdgeReduce.ts) for the most up-to-date information.

## Overview

Computes the reducible/complete edge counts for each EdgeClip, and applies the first level of reduction.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterInitialEdgeReduce {: #ParallelRasterInitialEdgeReduce }


```js
import { ParallelRasterInitialEdgeReduce } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippedChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)&gt;</span>, edgeClips : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdgeClip](../alpenglow/RasterEdgeClip.md)&gt;</span>, numEdgeClips : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, debugFullEdgeReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span>, edgeReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterInitialEdgeReduce.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialEdgeReduce.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
