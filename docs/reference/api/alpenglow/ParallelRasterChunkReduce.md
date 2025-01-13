# ParallelRasterChunkReduce

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

#### dispatch( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, inputChunkReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunkReduceQuad&gt;</span>, numReduces : <span style="font-weight: 400; opacity: 80%;">number</span>, clippedChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterClippedChunk&gt;</span>, outputChunkReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunkReduceQuad&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterChunkReduce.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterChunkReduce.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
