# ParallelRasterInitialEdgeReduce

## Overview

Computes the reducible/complete edge counts for each EdgeClip, and applies the first level of reduction.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterInitialEdgeReduce {: #ParallelRasterInitialEdgeReduce }


```js
import { ParallelRasterInitialEdgeReduce } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, clippedChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterClippedChunk&gt;</span>, edgeClips : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterEdgeClip&gt;</span>, numEdgeClips : <span style="font-weight: 400; opacity: 80%;">number</span>, debugFullEdgeReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span>, edgeReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterInitialEdgeReduce.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialEdgeReduce.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
