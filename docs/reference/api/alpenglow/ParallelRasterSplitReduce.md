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

#### dispatch( workgroupSize : <span style="font-weight: 400; opacity: 80%;">number</span>, numReduces : <span style="font-weight: 400; opacity: 80%;">number</span>, inputReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span>, outputReduces : <span style="font-weight: 400; opacity: 80%;">ParallelStorageArray&lt;RasterSplitReduceData&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #dispatch data-toc-label='dispatch' }



## Source Code

See the source for [ParallelRasterSplitReduce.ts](https://github.com/phetsims/alpenglow/blob/main/js/parallel/raster-clip/ParallelRasterSplitReduce.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
