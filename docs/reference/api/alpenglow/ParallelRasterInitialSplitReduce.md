# ParallelRasterInitialSplitReduce

## Overview

Calculates the initial splits (reducible/complete counts) for each clipped chunk, and applies the first level of
reduction.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterInitialSplitReduce {: #ParallelRasterInitialSplitReduce }


```js
import { ParallelRasterInitialSplitReduce } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippedChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)&gt;</span>, numClippedChunks : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, debugFullSplitReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span>, splitReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterInitialSplitReduce.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialSplitReduce.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
