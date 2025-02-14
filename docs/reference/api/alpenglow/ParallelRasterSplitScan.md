# ParallelRasterSplitScan

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterSplitScan.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterSplitScan.ts) for the most up-to-date information.

## Overview

Multiple stream compaction for chunks: distributes the relevant data from the clipped chunks to the reducible and
complete chunks, and generates the chunkIndexMap.

NOTE: Has similar code to ParallelRasterEdgeScan

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterSplitScan {: #ParallelRasterSplitScan }


```js
import { ParallelRasterSplitScan } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippedChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)&gt;</span>, splitReduces0 : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span>, splitReduces1 : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span>, splitReduces2 : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span>, numClippedChunks : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, reducibleChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunk](../alpenglow/RasterChunk.md)&gt;</span>, completeChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterCompleteChunk](../alpenglow/RasterCompleteChunk.md)&gt;</span>, chunkIndexMap : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, debugReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterSplitScan.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterSplitScan.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
