# ComputePass

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ComputePass {: #ComputePass }


```js
import { ComputePass } from 'scenerystack/alpenglow';
```
### Constructor

#### new ComputePass( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, computePassDescriptor : <span style="font-weight: 400; opacity: 80%;">GPUComputePassDescriptor</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispatchPipeline( computePipeline : <span style="font-weight: 400; opacity: 80%;">ComputePipeline</span>, bindGroups : <span style="font-weight: 400; opacity: 80%;">BindGroup[]</span>, dispatchX, dispatchY, dispatchZ ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #dispatchPipeline data-toc-label='dispatchPipeline' }

#### dispatchPipelineIndirect( computePipeline : <span style="font-weight: 400; opacity: 80%;">ComputePipeline</span>, bindGroups : <span style="font-weight: 400; opacity: 80%;">BindGroup[]</span>, indirectBuffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, indirectOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #dispatchPipelineIndirect data-toc-label='dispatchPipelineIndirect' }

#### end() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #end data-toc-label='end' }

### Instance Properties

#### id {: #id data-toc-label='id' }

(readonly)

#### computePassEncoder : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span> {: #computePassEncoder data-toc-label='computePassEncoder' }

(readonly)



## Source Code

See the source for [ComputePass.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ComputePass.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
