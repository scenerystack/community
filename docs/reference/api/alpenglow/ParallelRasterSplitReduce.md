# ParallelRasterSplitReduce

## Overview

Takes the input reductions and computes the inclusive prefix sum (scan) into it, in a form that can be used for
computing the exclusive prefix sum (zeros the last element). Outputs the reduction of the entire input into the
output reduces.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ParallelRasterSplitReduce {: #ParallelRasterSplitReduce }


```js
import { ParallelRasterSplitReduce } from 'scenerystack/alpenglow';
```
### Static Methods

#### dispatch( workgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numReduces : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, inputReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span>, outputReduces : <span style="font-weight: 400;">[ParallelStorageArray](../alpenglow/ParallelStorageArray.md)&lt;[RasterSplitReduceData](../alpenglow/RasterSplitReduceData.md)&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterSplitReduce.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterSplitReduce.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
