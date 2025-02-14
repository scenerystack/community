# ParallelRasterInitialChunk

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialChunk.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialChunk.ts) for the most up-to-date information.

## Overview

Creates the two RasterClippedChunk (min/max) for each RasterChunk.

NOTE: These only fill in certain values, and leave a lot blank to be filled in by the upcoming reduce.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterInitialChunk {: #ParallelRasterInitialChunk }


```js
import { ParallelRasterInitialChunk } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, chunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunk](../alpenglow/RasterChunk.md)&gt;</span>, numChunks : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippedChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }

#### validate( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, chunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterChunk](../alpenglow/RasterChunk.md)&gt;</span>, numChunks : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippedChunks : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterClippedChunk](../alpenglow/RasterClippedChunk.md)&gt;</span> ) {: #validate data-toc-label='validate' }



## Source Code

See the source for [ParallelRasterInitialChunk.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterInitialChunk.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
