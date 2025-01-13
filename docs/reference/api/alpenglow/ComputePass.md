# ComputePass

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ComputePass {: #ComputePass }


```js
import { ComputePass } from 'scenerystack/alpenglow';
```
### Constructor

#### new ComputePass( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, computePassDescriptor : <span style="font-weight: 400;">GPUComputePassDescriptor</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispatchPipeline( computePipeline : <span style="font-weight: 400;">[ComputePipeline](../alpenglow/ComputePipeline.md)</span>, bindGroups : <span style="font-weight: 400;">[BindGroup](../alpenglow/BindGroup.md)[]</span>, dispatchX, dispatchY, dispatchZ ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #dispatchPipeline data-toc-label='dispatchPipeline' }

#### dispatchPipelineIndirect( computePipeline : <span style="font-weight: 400;">[ComputePipeline](../alpenglow/ComputePipeline.md)</span>, bindGroups : <span style="font-weight: 400;">[BindGroup](../alpenglow/BindGroup.md)[]</span>, indirectBuffer : <span style="font-weight: 400;">GPUBuffer</span>, indirectOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #dispatchPipelineIndirect data-toc-label='dispatchPipelineIndirect' }

#### end() {: #end data-toc-label='end' }

### Instance Properties

#### id {: #id data-toc-label='id' }

(readonly)

#### computePassEncoder : <span style="font-weight: 400;">GPUComputePassEncoder</span> {: #computePassEncoder data-toc-label='computePassEncoder' }

(readonly)



## Source Code

See the source for [ComputePass.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ComputePass.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
