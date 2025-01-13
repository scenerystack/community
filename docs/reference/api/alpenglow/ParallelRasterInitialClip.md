# ParallelRasterInitialClip

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

#### dispatch( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, chunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunk&gt;</span>, edges : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterEdge&gt;</span>, numEdges : <span style="font-weight: 400; opacity: 80%;">number</span>, clippedChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterClippedChunk&gt;</span>, edgeClips : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterEdgeClip&gt;</span>, chunkReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunkReduceQuad&gt;</span>, debugFullChunkReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunkReducePair&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #dispatch data-toc-label='dispatch' }

#### validate( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, chunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunk&gt;</span>, edges : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterEdge&gt;</span>, numEdges : <span style="font-weight: 400; opacity: 80%;">number</span>, clippedChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterClippedChunk&gt;</span>, edgeClips : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterEdgeClip&gt;</span>, chunkReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunkReduceQuad&gt;</span>, debugFullChunkReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;{ min: RasterChunkReduceData; max: RasterChunkReduceData }&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #validate data-toc-label='validate' }



## Source Code

See the source for [ParallelRasterInitialClip.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialClip.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
