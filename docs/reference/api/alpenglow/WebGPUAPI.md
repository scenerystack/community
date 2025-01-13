# WebGPUAPI

## Overview

WebGPU commands should be run through here, so we can record them for later playback (and possibly other reasons).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class WebGPUAPI {: #WebGPUAPI }


```js
import { WebGPUAPI } from 'scenerystack/alpenglow';
```
### Instance Methods

#### enableRecording() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #enableRecording data-toc-label='enableRecording' }

#### startRecording() : <span style="font-weight: 400; opacity: 80%;">WebGPUCommandList</span> {: #startRecording data-toc-label='startRecording' }

#### stopRecording( commandList : <span style="font-weight: 400; opacity: 80%;">WebGPUCommandList</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #stopRecording data-toc-label='stopRecording' }

#### getAdapter( options? : <span style="font-weight: 400; opacity: 80%;">GPURequestAdapterOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;GPUAdapter | null&gt;</span> {: #getAdapter data-toc-label='getAdapter' }

#### getPreferredCanvasFormat() : <span style="font-weight: 400; opacity: 80%;">PreferredCanvasFormat</span> {: #getPreferredCanvasFormat data-toc-label='getPreferredCanvasFormat' }

#### adapterHasFeature( adapter : <span style="font-weight: 400; opacity: 80%;">GPUAdapter</span>, featureName : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #adapterHasFeature data-toc-label='adapterHasFeature' }

#### adapterRequestDevice( adapter : <span style="font-weight: 400; opacity: 80%;">GPUAdapter</span>, descriptor? : <span style="font-weight: 400; opacity: 80%;">GPUDeviceDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;GPUDevice | null&gt;</span> {: #adapterRequestDevice data-toc-label='adapterRequestDevice' }

#### deviceCreateBuffer( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUBufferDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> {: #deviceCreateBuffer data-toc-label='deviceCreateBuffer' }

#### deviceCreateQuerySet( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUQuerySetDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUQuerySet</span> {: #deviceCreateQuerySet data-toc-label='deviceCreateQuerySet' }

#### deviceCreateBindGroupLayout( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupLayoutDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupLayout</span> {: #deviceCreateBindGroupLayout data-toc-label='deviceCreateBindGroupLayout' }

#### deviceCreatePipelineLayout( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUPipelineLayoutDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUPipelineLayout</span> {: #deviceCreatePipelineLayout data-toc-label='deviceCreatePipelineLayout' }

#### deviceCreateShaderModule( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUShaderModuleDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUShaderModule</span> {: #deviceCreateShaderModule data-toc-label='deviceCreateShaderModule' }

#### deviceCreateComputePipeline( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUComputePipelineDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUComputePipeline</span> {: #deviceCreateComputePipeline data-toc-label='deviceCreateComputePipeline' }

#### deviceCreateComputePipelineAsync( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUComputePipelineDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;GPUComputePipeline&gt;</span> {: #deviceCreateComputePipelineAsync data-toc-label='deviceCreateComputePipelineAsync' }

#### deviceCreateBindGroup( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBindGroup</span> {: #deviceCreateBindGroup data-toc-label='deviceCreateBindGroup' }

#### deviceCreateCommandEncoder( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor? : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoderDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span> {: #deviceCreateCommandEncoder data-toc-label='deviceCreateCommandEncoder' }

#### deviceWriteBuffer( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, bufferOffset : <span style="font-weight: 400; opacity: 80%;">number</span>, data : <span style="font-weight: 400; opacity: 80%;">| BufferSource
      | SharedArrayBuffer</span>, dataOffset? : <span style="font-weight: 400; opacity: 80%;">number</span>, size? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #deviceWriteBuffer data-toc-label='deviceWriteBuffer' }

#### deviceQueueSubmit( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, commandBuffers : <span style="font-weight: 400; opacity: 80%;">Iterable&lt;GPUCommandBuffer&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #deviceQueueSubmit data-toc-label='deviceQueueSubmit' }

#### deviceHasFeature( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, featureName : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #deviceHasFeature data-toc-label='deviceHasFeature' }

#### deviceDestroy( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #deviceDestroy data-toc-label='deviceDestroy' }

#### bufferMapAsync( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, mode : <span style="font-weight: 400; opacity: 80%;">GPUMapModeFlags</span>, offset? : <span style="font-weight: 400; opacity: 80%;">number</span>, size? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #bufferMapAsync data-toc-label='bufferMapAsync' }

#### bufferUnmap( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #bufferUnmap data-toc-label='bufferUnmap' }

#### bufferGetMappedRange( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, offset? : <span style="font-weight: 400; opacity: 80%;">number</span>, size? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span> {: #bufferGetMappedRange data-toc-label='bufferGetMappedRange' }

#### bufferDestroy( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #bufferDestroy data-toc-label='bufferDestroy' }

#### encoderBeginRenderPass( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPURenderPassDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPURenderPassEncoder</span> {: #encoderBeginRenderPass data-toc-label='encoderBeginRenderPass' }

#### encoderBeginComputePass( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, descriptor? : <span style="font-weight: 400; opacity: 80%;">GPUComputePassDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span> {: #encoderBeginComputePass data-toc-label='encoderBeginComputePass' }

#### encoderCopyBufferToBuffer( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, source : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, sourceOffset : <span style="font-weight: 400; opacity: 80%;">number</span>, destination : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, destinationOffset : <span style="font-weight: 400; opacity: 80%;">number</span>, size : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #encoderCopyBufferToBuffer data-toc-label='encoderCopyBufferToBuffer' }

#### encoderCopyBufferToTexture( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, source : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyBuffer</span>, destination : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyTexture</span>, copySize : <span style="font-weight: 400; opacity: 80%;">GPUExtent3DStrict</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #encoderCopyBufferToTexture data-toc-label='encoderCopyBufferToTexture' }

#### encoderCopyTextureToBuffer( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, source : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyTexture</span>, destination : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyBuffer</span>, copySize : <span style="font-weight: 400; opacity: 80%;">GPUExtent3DStrict</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #encoderCopyTextureToBuffer data-toc-label='encoderCopyTextureToBuffer' }

#### encoderCopyTextureToTexture( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, source : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyTexture</span>, destination : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyTexture</span>, copySize : <span style="font-weight: 400; opacity: 80%;">GPUExtent3DStrict</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #encoderCopyTextureToTexture data-toc-label='encoderCopyTextureToTexture' }

#### encoderClearBuffer( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, offset? : <span style="font-weight: 400; opacity: 80%;">number</span>, size? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #encoderClearBuffer data-toc-label='encoderClearBuffer' }

#### encoderResolveQuerySet( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, querySet : <span style="font-weight: 400; opacity: 80%;">GPUQuerySet</span>, firstQuery : <span style="font-weight: 400; opacity: 80%;">number</span>, queryCount : <span style="font-weight: 400; opacity: 80%;">number</span>, destination : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, destinationOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #encoderResolveQuerySet data-toc-label='encoderResolveQuerySet' }

#### encoderFinish( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, descriptor? : <span style="font-weight: 400; opacity: 80%;">GPUCommandBufferDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUCommandBuffer</span> {: #encoderFinish data-toc-label='encoderFinish' }

#### computePassEncoderSetPipeline( computePassEncoder : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span>, pipeline : <span style="font-weight: 400; opacity: 80%;">GPUComputePipeline</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #computePassEncoderSetPipeline data-toc-label='computePassEncoderSetPipeline' }

#### computePassEncoderDispatchWorkgroups( computePassEncoder : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y? : <span style="font-weight: 400; opacity: 80%;">number</span>, z? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #computePassEncoderDispatchWorkgroups data-toc-label='computePassEncoderDispatchWorkgroups' }

#### computePassEncoderDispatchWorkgroupsIndirect( computePassEncoder : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span>, indirectBuffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, indirectOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #computePassEncoderDispatchWorkgroupsIndirect data-toc-label='computePassEncoderDispatchWorkgroupsIndirect' }

#### passEncoderSetBindGroup( passEncoder : <span style="font-weight: 400; opacity: 80%;">GPURenderPassEncoder | GPUComputePassEncoder</span>, index : <span style="font-weight: 400; opacity: 80%;">number</span>, bindGroup : <span style="font-weight: 400; opacity: 80%;">GPUBindGroup | null</span>, dynamicOffsets? : <span style="font-weight: 400; opacity: 80%;">Iterable&lt;number&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #passEncoderSetBindGroup data-toc-label='passEncoderSetBindGroup' }

TODO: consider adding the other approach to dynamic offsets?

#### computePassEncoderEnd( computePassEncoder : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #computePassEncoderEnd data-toc-label='computePassEncoderEnd' }

#### querySetDestroy( querySet : <span style="font-weight: 400; opacity: 80%;">GPUQuerySet</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #querySetDestroy data-toc-label='querySetDestroy' }

### Instance Properties

#### recorder : <span style="font-weight: 400; opacity: 80%;">WebGPURecorder | null</span> {: #recorder data-toc-label='recorder' }



## Source Code

See the source for [WebGPUAPI.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/WebGPUAPI.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
