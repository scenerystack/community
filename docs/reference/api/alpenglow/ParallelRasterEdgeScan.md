# ParallelRasterEdgeScan

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterEdgeScan.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterEdgeScan.ts) for the most up-to-date information.

## Overview

Multiple stream compaction: distributes the relevant data from the RasterEdgeClips into the reducible (RasterEdge)
and complete (RasterCompleteEdge) locations, and generates the needed chunkIndices array as a byproduct.

NOTE: Has similar code to ParallelRasterSplitScan

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterEdgeScan {: #ParallelRasterEdgeScan }


```js
import { ParallelRasterEdgeScan } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippedChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)&gt;</span>, edgeClips : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdgeClip](../alpenglow/RasterEdgeClip.md)&gt;</span>, edgeReduces0 : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span>, edgeReduces1 : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span>, edgeReduces2 : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span>, numEdgeClips : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, reducibleEdges : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdge](../alpenglow/RasterEdge.md)&gt;</span>, completeEdges : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterCompleteEdge](../alpenglow/RasterCompleteEdge.md)&gt;</span>, chunkIndices : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, debugEdgeScan : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterEdgeScan.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterEdgeScan.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
