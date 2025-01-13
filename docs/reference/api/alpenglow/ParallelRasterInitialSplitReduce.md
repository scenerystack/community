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

#### dispatch( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, clippedChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterClippedChunk&gt;</span>, numClippedChunks : <span style="font-weight: 400; opacity: 80%;">number</span>, debugFullSplitReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span>, splitReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterInitialSplitReduce.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialSplitReduce.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
