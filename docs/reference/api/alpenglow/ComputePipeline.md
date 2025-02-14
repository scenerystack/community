# ComputePipeline

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ComputePipeline.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ComputePipeline.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ComputePipeline {: #ComputePipeline }


```js
import { ComputePipeline } from 'scenerystack/alpenglow';
```
### Instance Properties

#### pipeline : <span style="font-weight: 400;">GPUComputePipeline</span> {: #pipeline data-toc-label='pipeline' }

This will be available by the time it can be accessed publicly

#### logBarrierPipeline : <span style="font-weight: 400;">GPUComputePipeline | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #logBarrierPipeline data-toc-label='logBarrierPipeline' }

### Static Methods

#### withContextAsync( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md)</span>, name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, wgsl : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, pipelineLayout : <span style="font-weight: 400;">[PipelineLayout](../alpenglow/PipelineLayout.md)</span> ) : <span style="font-weight: 400;">Promise&lt;[ComputePipeline](../alpenglow/ComputePipeline.md)&gt;</span> {: #withContextAsync data-toc-label='withContextAsync' }

NOTE: Create the non-async version if we ever REALLY want it.



## Source Code

See the source for [ComputePipeline.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ComputePipeline.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
