# ParallelRasterEdgeScan

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

#### dispatch( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, clippedChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterClippedChunk&gt;</span>, edgeClips : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterEdgeClip&gt;</span>, edgeReduces0 : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span>, edgeReduces1 : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span>, edgeReduces2 : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span>, numEdgeClips : <span style="font-weight: 400; opacity: 80%;">number</span>, reducibleEdges : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterEdge&gt;</span>, completeEdges : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterCompleteEdge&gt;</span>, chunkIndices : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;number&gt;</span>, debugEdgeScan : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterEdgeScan.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterEdgeScan.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
