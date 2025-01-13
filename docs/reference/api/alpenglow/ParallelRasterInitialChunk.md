# ParallelRasterInitialChunk

## Overview

Creates the two RasterClippedChunk (min/max) for each RasterChunk.

NOTE: These only fill in certain values, and leave a lot blank to be filled in by the upcoming reduce.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterInitialChunk {: #ParallelRasterInitialChunk }


```js
import { ParallelRasterInitialChunk } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, chunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunk&gt;</span>, numChunks : <span style="font-weight: 400; opacity: 80%;">number</span>, clippedChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterClippedChunk&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #dispatch data-toc-label='dispatch' }

#### validate( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, chunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterChunk&gt;</span>, numChunks : <span style="font-weight: 400; opacity: 80%;">number</span>, clippedChunks : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterClippedChunk&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #validate data-toc-label='validate' }



## Source Code

See the source for [ParallelRasterInitialChunk.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialChunk.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
