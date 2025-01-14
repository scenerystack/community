# WebGPUAPI

## Overview

WebGPU commands should be run through here, so we can record them for later playback (and possibly other reasons).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class WebGPUAPI {: #WebGPUAPI }


```js
import { WebGPUAPI } from 'scenerystack/alpenglow';
```
### Instance Methods

#### enableRecording() {: #enableRecording data-toc-label='enableRecording' }

#### startRecording() : <span style="font-weight: 400;">[WebGPUCommandList](../alpenglow/WebGPURecorder.md#WebGPUCommandList)</span> {: #startRecording data-toc-label='startRecording' }

#### stopRecording( commandList : <span style="font-weight: 400;">[WebGPUCommandList](../alpenglow/WebGPURecorder.md#WebGPUCommandList)</span> ) {: #stopRecording data-toc-label='stopRecording' }

#### getAdapter( options? : <span style="font-weight: 400;">GPURequestAdapterOptions</span> ) : <span style="font-weight: 400;">Promise&lt;GPUAdapter | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #getAdapter data-toc-label='getAdapter' }

#### getPreferredCanvasFormat() : <span style="font-weight: 400;">[PreferredCanvasFormat](../alpenglow/WebGPUAPI.md#PreferredCanvasFormat)</span> {: #getPreferredCanvasFormat data-toc-label='getPreferredCanvasFormat' }

#### adapterHasFeature( adapter : <span style="font-weight: 400;">GPUAdapter</span>, featureName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #adapterHasFeature data-toc-label='adapterHasFeature' }

#### adapterRequestDevice( adapter : <span style="font-weight: 400;">GPUAdapter</span>, descriptor? : <span style="font-weight: 400;">GPUDeviceDescriptor</span> ) : <span style="font-weight: 400;">Promise&lt;GPUDevice | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #adapterRequestDevice data-toc-label='adapterRequestDevice' }

#### deviceCreateBuffer( device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUBufferDescriptor</span> ) : <span style="font-weight: 400;">GPUBuffer</span> {: #deviceCreateBuffer data-toc-label='deviceCreateBuffer' }

#### deviceCreateQuerySet( device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUQuerySetDescriptor</span> ) : <span style="font-weight: 400;">GPUQuerySet</span> {: #deviceCreateQuerySet data-toc-label='deviceCreateQuerySet' }

#### deviceCreateBindGroupLayout( device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUBindGroupLayoutDescriptor</span> ) : <span style="font-weight: 400;">GPUBindGroupLayout</span> {: #deviceCreateBindGroupLayout data-toc-label='deviceCreateBindGroupLayout' }

#### deviceCreatePipelineLayout( device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUPipelineLayoutDescriptor</span> ) : <span style="font-weight: 400;">GPUPipelineLayout</span> {: #deviceCreatePipelineLayout data-toc-label='deviceCreatePipelineLayout' }

#### deviceCreateShaderModule( device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUShaderModuleDescriptor</span> ) : <span style="font-weight: 400;">GPUShaderModule</span> {: #deviceCreateShaderModule data-toc-label='deviceCreateShaderModule' }

#### deviceCreateComputePipeline( device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUComputePipelineDescriptor</span> ) : <span style="font-weight: 400;">GPUComputePipeline</span> {: #deviceCreateComputePipeline data-toc-label='deviceCreateComputePipeline' }

#### deviceCreateComputePipelineAsync( device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUComputePipelineDescriptor</span> ) : <span style="font-weight: 400;">Promise&lt;GPUComputePipeline&gt;</span> {: #deviceCreateComputePipelineAsync data-toc-label='deviceCreateComputePipelineAsync' }

#### deviceCreateBindGroup( device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUBindGroupDescriptor</span> ) : <span style="font-weight: 400;">GPUBindGroup</span> {: #deviceCreateBindGroup data-toc-label='deviceCreateBindGroup' }

#### deviceCreateCommandEncoder( device : <span style="font-weight: 400;">GPUDevice</span>, descriptor? : <span style="font-weight: 400;">GPUCommandEncoderDescriptor</span> ) : <span style="font-weight: 400;">GPUCommandEncoder</span> {: #deviceCreateCommandEncoder data-toc-label='deviceCreateCommandEncoder' }

#### deviceWriteBuffer( device : <span style="font-weight: 400;">GPUDevice</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span>, bufferOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, data : <span style="font-weight: 400;">| BufferSource
      | SharedArrayBuffer</span>, dataOffset? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, size? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #deviceWriteBuffer data-toc-label='deviceWriteBuffer' }

#### deviceQueueSubmit( device : <span style="font-weight: 400;">GPUDevice</span>, commandBuffers : <span style="font-weight: 400;">Iterable&lt;GPUCommandBuffer&gt;</span> ) {: #deviceQueueSubmit data-toc-label='deviceQueueSubmit' }

#### deviceHasFeature( device : <span style="font-weight: 400;">GPUDevice</span>, featureName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #deviceHasFeature data-toc-label='deviceHasFeature' }

#### deviceDestroy( device : <span style="font-weight: 400;">GPUDevice</span> ) {: #deviceDestroy data-toc-label='deviceDestroy' }

#### bufferMapAsync( buffer : <span style="font-weight: 400;">GPUBuffer</span>, mode : <span style="font-weight: 400;">GPUMapModeFlags</span>, offset? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, size? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #bufferMapAsync data-toc-label='bufferMapAsync' }

#### bufferUnmap( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) {: #bufferUnmap data-toc-label='bufferUnmap' }

#### bufferGetMappedRange( buffer : <span style="font-weight: 400;">GPUBuffer</span>, offset? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, size? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">ArrayBuffer</span> {: #bufferGetMappedRange data-toc-label='bufferGetMappedRange' }

#### bufferDestroy( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) {: #bufferDestroy data-toc-label='bufferDestroy' }

#### encoderBeginRenderPass( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, descriptor : <span style="font-weight: 400;">GPURenderPassDescriptor</span> ) : <span style="font-weight: 400;">GPURenderPassEncoder</span> {: #encoderBeginRenderPass data-toc-label='encoderBeginRenderPass' }

#### encoderBeginComputePass( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, descriptor? : <span style="font-weight: 400;">GPUComputePassDescriptor</span> ) : <span style="font-weight: 400;">GPUComputePassEncoder</span> {: #encoderBeginComputePass data-toc-label='encoderBeginComputePass' }

#### encoderCopyBufferToBuffer( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, source : <span style="font-weight: 400;">GPUBuffer</span>, sourceOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, destination : <span style="font-weight: 400;">GPUBuffer</span>, destinationOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #encoderCopyBufferToBuffer data-toc-label='encoderCopyBufferToBuffer' }

#### encoderCopyBufferToTexture( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, source : <span style="font-weight: 400;">GPUImageCopyBuffer</span>, destination : <span style="font-weight: 400;">GPUImageCopyTexture</span>, copySize : <span style="font-weight: 400;">GPUExtent3DStrict</span> ) {: #encoderCopyBufferToTexture data-toc-label='encoderCopyBufferToTexture' }

#### encoderCopyTextureToBuffer( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, source : <span style="font-weight: 400;">GPUImageCopyTexture</span>, destination : <span style="font-weight: 400;">GPUImageCopyBuffer</span>, copySize : <span style="font-weight: 400;">GPUExtent3DStrict</span> ) {: #encoderCopyTextureToBuffer data-toc-label='encoderCopyTextureToBuffer' }

#### encoderCopyTextureToTexture( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, source : <span style="font-weight: 400;">GPUImageCopyTexture</span>, destination : <span style="font-weight: 400;">GPUImageCopyTexture</span>, copySize : <span style="font-weight: 400;">GPUExtent3DStrict</span> ) {: #encoderCopyTextureToTexture data-toc-label='encoderCopyTextureToTexture' }

#### encoderClearBuffer( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span>, offset? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, size? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #encoderClearBuffer data-toc-label='encoderClearBuffer' }

#### encoderResolveQuerySet( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, querySet : <span style="font-weight: 400;">GPUQuerySet</span>, firstQuery : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, queryCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, destination : <span style="font-weight: 400;">GPUBuffer</span>, destinationOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #encoderResolveQuerySet data-toc-label='encoderResolveQuerySet' }

#### encoderFinish( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, descriptor? : <span style="font-weight: 400;">GPUCommandBufferDescriptor</span> ) : <span style="font-weight: 400;">GPUCommandBuffer</span> {: #encoderFinish data-toc-label='encoderFinish' }

#### computePassEncoderSetPipeline( computePassEncoder : <span style="font-weight: 400;">GPUComputePassEncoder</span>, pipeline : <span style="font-weight: 400;">GPUComputePipeline</span> ) {: #computePassEncoderSetPipeline data-toc-label='computePassEncoderSetPipeline' }

#### computePassEncoderDispatchWorkgroups( computePassEncoder : <span style="font-weight: 400;">GPUComputePassEncoder</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #computePassEncoderDispatchWorkgroups data-toc-label='computePassEncoderDispatchWorkgroups' }

#### computePassEncoderDispatchWorkgroupsIndirect( computePassEncoder : <span style="font-weight: 400;">GPUComputePassEncoder</span>, indirectBuffer : <span style="font-weight: 400;">GPUBuffer</span>, indirectOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #computePassEncoderDispatchWorkgroupsIndirect data-toc-label='computePassEncoderDispatchWorkgroupsIndirect' }

#### passEncoderSetBindGroup( passEncoder : <span style="font-weight: 400;">GPURenderPassEncoder | GPUComputePassEncoder</span>, index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, bindGroup : <span style="font-weight: 400;">GPUBindGroup | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, dynamicOffsets? : <span style="font-weight: 400;">Iterable&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> ) {: #passEncoderSetBindGroup data-toc-label='passEncoderSetBindGroup' }

TODO: consider adding the other approach to dynamic offsets?

#### computePassEncoderEnd( computePassEncoder : <span style="font-weight: 400;">GPUComputePassEncoder</span> ) {: #computePassEncoderEnd data-toc-label='computePassEncoderEnd' }

#### querySetDestroy( querySet : <span style="font-weight: 400;">GPUQuerySet</span> ) {: #querySetDestroy data-toc-label='querySetDestroy' }

### Instance Properties

#### recorder : <span style="font-weight: 400;">[WebGPURecorder](../alpenglow/WebGPURecorder.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #recorder data-toc-label='recorder' }



## Type PreferredCanvasFormat {: #PreferredCanvasFormat }


```js
import type { PreferredCanvasFormat } from 'scenerystack/alpenglow';
```
"bgra8unorm" | "rgba8unorm"



## Source Code

See the source for [WebGPUAPI.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/WebGPUAPI.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
