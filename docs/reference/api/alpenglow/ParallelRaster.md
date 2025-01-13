# ParallelRaster

## Overview

Rasterization prototype for WebGPU, but using the parallel (debuggable) API.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRaster {: #ParallelRaster }


```js
import { ParallelRaster } from 'scenerystack/alpenglow';
```
### Static Methods

#### getTestRawInputChunks() : <span style="font-weight: 400; opacity: 80%;">RasterChunk[]</span> {: #getTestRawInputChunks data-toc-label='getTestRawInputChunks' }

#### getTestRawInputEdges() : <span style="font-weight: 400; opacity: 80%;">RasterEdge[]</span> {: #getTestRawInputEdges data-toc-label='getTestRawInputEdges' }

#### test() : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #test data-toc-label='test' }

#### process( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, numInputChunks : <span style="font-weight: 400; opacity: 80%;">number</span>, numInputEdges : <span style="font-weight: 400; opacity: 80%;">number</span>, inputChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunk&gt;</span>, inputEdges : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterEdge&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;{
    reducibleChunks: ParallelStorageArray&lt;RasterChunk&gt;;
    reducibleEdges: ParallelStorageArray&lt;RasterEdge&gt;;
    numReducibleChunks: number;
    numReducibleEdges: number;

    completeChunks: ParallelStorageArray&lt;RasterCompleteChunk&gt;;
    completeEdges: ParallelStorageArray&lt;RasterCompleteEdge&gt;;
    numCompleteChunks: number;
    numCompleteEdges: number;
  }&gt;</span> {: #process data-toc-label='process' }



## Source Code

See the source for [ParallelRaster.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRaster.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
