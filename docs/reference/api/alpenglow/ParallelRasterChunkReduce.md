# ParallelRasterChunkReduce

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterChunkReduce.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterChunkReduce.ts) for the most up-to-date information.

## Overview

We continue the segmented reduction started in ParallelRasterInitialClip, also applying things to RasterClippedChunks,
however we need to track the "left" and "right" values separately.

See docs on RasterChunkReduceQuad for the need for "left"/"right"

NOTE: The reduction is also completed in ParallelRasterInitialClip, so if changing this file, please check there too

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterChunkReduce {: #ParallelRasterChunkReduce }


```js
import { ParallelRasterChunkReduce } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, inputChunkReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)&gt;</span>, numReduces : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippedChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)&gt;</span>, outputChunkReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunkReduceQuad](../alpenglow/RasterChunkReduceQuad.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterChunkReduce.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterChunkReduce.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
