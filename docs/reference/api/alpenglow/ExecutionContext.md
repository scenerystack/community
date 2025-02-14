# ExecutionContext

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ExecutionContext.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ExecutionContext.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ExecutionContext {: #ExecutionContext }


```js
import { ExecutionContext } from 'scenerystack/alpenglow';
```
### Constructor

#### new ExecutionContext( executor : <span style="font-weight: 400;">[Executor](../alpenglow/Executor.md)</span>, computePipelineMap : <span style="font-weight: 400;">Map&lt;[PipelineBlueprint](../alpenglow/PipelineBlueprint.md), [ComputePipeline](../alpenglow/ComputePipeline.md)&gt;</span>, bindGroupMap : <span style="font-weight: 400;">Map&lt;[BindGroupLayout](../alpenglow/BindGroupLayout.md), [BindGroup](../alpenglow/BindGroup.md)&gt;</span>, resourceMap : <span style="font-weight: 400;">Map&lt;[ResourceSlot](../alpenglow/ResourceSlot.md), [Resource](../alpenglow/Resource.md)&gt;</span>, separateComputePasses : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #ExecutionContext-constructor data-toc-label='new ExecutionContext' }

### Instance Methods

#### dispatch( pipelineBlueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span>, dispatchX, dispatchY, dispatchZ ) {: #dispatch data-toc-label='dispatch' }

#### dispatchIndirect( pipelineBlueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span>, indirectBuffer : <span style="font-weight: 400;">GPUBuffer</span>, indirectOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #dispatchIndirect data-toc-label='dispatchIndirect' }

#### getEncoderForCustomRender() : <span style="font-weight: 400;">GPUCommandEncoder</span> {: #getEncoderForCustomRender data-toc-label='getEncoderForCustomRender' }

TODO: see if we can get the bind groups to be optimized?

#### setTypedBufferValue( bufferSlot : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;</span>, value : <span style="font-weight: 400;">T</span> ) {: #setTypedBufferValue data-toc-label='setTypedBufferValue' }

#### getTypedBufferValue( bufferSlot : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;T&gt;</span> {: #getTypedBufferValue data-toc-label='getTypedBufferValue' }

#### arrayBuffer( bufferSlot : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;ArrayBuffer&gt;</span> {: #arrayBuffer data-toc-label='arrayBuffer' }

#### u32( bufferSlot : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;Uint32Array&gt;</span> {: #u32 data-toc-label='u32' }

#### i32( bufferSlot : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;Int32Array&gt;</span> {: #i32 data-toc-label='i32' }

#### f32( bufferSlot : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;Float32Array&gt;</span> {: #f32 data-toc-label='f32' }

#### u32Numbers( bufferSlot : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #u32Numbers data-toc-label='u32Numbers' }

#### i32Numbers( bufferSlot : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #i32Numbers data-toc-label='i32Numbers' }

#### f32Numbers( bufferSlot : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #f32Numbers data-toc-label='f32Numbers' }

#### finish() {: #finish data-toc-label='finish' }



## Source Code

See the source for [ExecutionContext.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ExecutionContext.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
