# ParallelRasterSplitScan

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

#### dispatch( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, clippedChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterClippedChunk&gt;</span>, splitReduces0 : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span>, splitReduces1 : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span>, splitReduces2 : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span>, numClippedChunks : <span style="font-weight: 400; opacity: 80%;">number</span>, reducibleChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunk&gt;</span>, completeChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterCompleteChunk&gt;</span>, chunkIndexMap : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;number&gt;</span>, debugReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterSplitScan.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterSplitScan.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
