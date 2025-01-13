# ComputePipeline

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ComputePipeline {: #ComputePipeline }


```js
import { ComputePipeline } from 'scenerystack/alpenglow';
```
### Instance Properties

#### pipeline : <span style="font-weight: 400; opacity: 80%;">GPUComputePipeline</span> {: #pipeline data-toc-label='pipeline' }

This will be available by the time it can be accessed publicly

#### logBarrierPipeline : <span style="font-weight: 400; opacity: 80%;">GPUComputePipeline | null</span> {: #logBarrierPipeline data-toc-label='logBarrierPipeline' }

### Static Methods

#### getLogBarrierWGSL( pipelineLayout : <span style="font-weight: 400; opacity: 80%;">PipelineLayout</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getLogBarrierWGSL data-toc-label='getLogBarrierWGSL' }

#### withContextAsync( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, name : <span style="font-weight: 400; opacity: 80%;">string</span>, wgsl : <span style="font-weight: 400; opacity: 80%;">string</span>, pipelineLayout : <span style="font-weight: 400; opacity: 80%;">PipelineLayout</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;ComputePipeline&gt;</span> {: #withContextAsync data-toc-label='withContextAsync' }

NOTE: Create the non-async version if we ever REALLY want it.



## Source Code

See the source for [ComputePipeline.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ComputePipeline.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
