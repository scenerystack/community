# ParallelRaster

## Overview

Rasterization prototype for WebGPU, but using the parallel (debuggable) API.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRaster {: #ParallelRaster }


```js
import { ParallelRaster } from 'scenerystack/alpenglow';
```
### Static Methods

#### getTestRawInputChunks() : <span style="font-weight: 400;">[RasterChunk](../alpenglow/RasterChunk.md)[]</span> {: #getTestRawInputChunks data-toc-label='getTestRawInputChunks' }

#### getTestRawInputEdges() : <span style="font-weight: 400;">[RasterEdge](../alpenglow/RasterEdge.md)[]</span> {: #getTestRawInputEdges data-toc-label='getTestRawInputEdges' }

#### test() : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #test data-toc-label='test' }

#### process( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numInputChunks : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numInputEdges : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, inputChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunk](../alpenglow/RasterChunk.md)&gt;</span>, inputEdges : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdge](../alpenglow/RasterEdge.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;{
    reducibleChunks: [ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunk](../alpenglow/RasterChunk.md)&gt;;
    reducibleEdges: [ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterEdge](../alpenglow/RasterEdge.md)&gt;;
    numReducibleChunks: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>;
    numReducibleEdges: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>;

    completeChunks: [ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterCompleteChunk](../alpenglow/RasterCompleteChunk.md)&gt;;
    completeEdges: [ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterCompleteEdge](../alpenglow/RasterCompleteEdge.md)&gt;;
    numCompleteChunks: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>;
    numCompleteEdges: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>;
  }&gt;</span> {: #process data-toc-label='process' }



## Source Code

See the source for [ParallelRaster.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRaster.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
