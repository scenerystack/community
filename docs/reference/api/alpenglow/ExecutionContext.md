# ExecutionContext

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ExecutionContext {: #ExecutionContext }


```js
import { ExecutionContext } from 'scenerystack/alpenglow';
```
### Constructor

#### new ExecutionContext( executor : <span style="font-weight: 400; opacity: 80%;">Executor</span>, computePipelineMap : <span style="font-weight: 400; opacity: 80%;">Map&lt;PipelineBlueprint, ComputePipeline&gt;</span>, bindGroupMap : <span style="font-weight: 400; opacity: 80%;">Map&lt;BindGroupLayout, BindGroup&gt;</span>, resourceMap : <span style="font-weight: 400; opacity: 80%;">Map&lt;ResourceSlot, Resource&gt;</span>, separateComputePasses : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispatch( pipelineBlueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span>, dispatchX, dispatchY, dispatchZ ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispatch data-toc-label='dispatch' }

#### dispatchIndirect( pipelineBlueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span>, indirectBuffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, indirectOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispatchIndirect data-toc-label='dispatchIndirect' }

#### getEncoderForCustomRender() : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span> {: #getEncoderForCustomRender data-toc-label='getEncoderForCustomRender' }

TODO: see if we can get the bind groups to be optimized?

#### setTypedBufferValue( bufferSlot : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;T&gt;</span>, value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setTypedBufferValue data-toc-label='setTypedBufferValue' }

#### getTypedBufferValue( bufferSlot : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;T&gt;</span> {: #getTypedBufferValue data-toc-label='getTypedBufferValue' }

#### arrayBuffer( bufferSlot : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;ArrayBuffer&gt;</span> {: #arrayBuffer data-toc-label='arrayBuffer' }

#### u32( bufferSlot : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Uint32Array&gt;</span> {: #u32 data-toc-label='u32' }

#### i32( bufferSlot : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Int32Array&gt;</span> {: #i32 data-toc-label='i32' }

#### f32( bufferSlot : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Float32Array&gt;</span> {: #f32 data-toc-label='f32' }

#### u32Numbers( bufferSlot : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;number[]&gt;</span> {: #u32Numbers data-toc-label='u32Numbers' }

#### i32Numbers( bufferSlot : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;number[]&gt;</span> {: #i32Numbers data-toc-label='i32Numbers' }

#### f32Numbers( bufferSlot : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;number[]&gt;</span> {: #f32Numbers data-toc-label='f32Numbers' }

#### finish() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #finish data-toc-label='finish' }



## Source Code

See the source for [ExecutionContext.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/ExecutionContext.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
