# WebGPURecorder

## Overview

Responsible for recording GPU commands globally, so we can play them back later.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class WebGPURecorder {: #WebGPURecorder }


```js
import { WebGPURecorder } from 'scenerystack/alpenglow';
```
### Instance Methods

#### start() : <span style="font-weight: 400;">[WebGPUCommandList](../alpenglow/WebGPURecorder.md#WebGPUCommandList)</span> {: #start data-toc-label='start' }

#### stop( commandList : <span style="font-weight: 400;">[WebGPUCommandList](../alpenglow/WebGPURecorder.md#WebGPUCommandList)</span> ) {: #stop data-toc-label='stop' }

#### recordGetAdapter( result : <span style="font-weight: 400;">GPUAdapter | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, options? : <span style="font-weight: 400;">GPURequestAdapterOptions</span> ) {: #recordGetAdapter data-toc-label='recordGetAdapter' }

#### recordAdapterRequestDevice( result : <span style="font-weight: 400;">GPUDevice</span>, adapter : <span style="font-weight: 400;">GPUAdapter</span>, descriptor? : <span style="font-weight: 400;">GPUDeviceDescriptor</span> ) {: #recordAdapterRequestDevice data-toc-label='recordAdapterRequestDevice' }

#### recordDeviceCreateBuffer( result : <span style="font-weight: 400;">GPUBuffer</span>, device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUBufferDescriptor</span> ) {: #recordDeviceCreateBuffer data-toc-label='recordDeviceCreateBuffer' }

#### recordDeviceCreateQuerySet( result : <span style="font-weight: 400;">GPUQuerySet</span>, device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUQuerySetDescriptor</span> ) {: #recordDeviceCreateQuerySet data-toc-label='recordDeviceCreateQuerySet' }

#### recordDeviceCreateBindGroupLayout( result : <span style="font-weight: 400;">GPUBindGroupLayout</span>, device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUBindGroupLayoutDescriptor</span> ) {: #recordDeviceCreateBindGroupLayout data-toc-label='recordDeviceCreateBindGroupLayout' }

#### recordDeviceCreatePipelineLayout( result : <span style="font-weight: 400;">GPUPipelineLayout</span>, device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUPipelineLayoutDescriptor</span> ) {: #recordDeviceCreatePipelineLayout data-toc-label='recordDeviceCreatePipelineLayout' }

#### recordDeviceCreateShaderModule( result : <span style="font-weight: 400;">GPUShaderModule</span>, device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUShaderModuleDescriptor</span> ) {: #recordDeviceCreateShaderModule data-toc-label='recordDeviceCreateShaderModule' }

#### recordDeviceCreateComputePipeline( result : <span style="font-weight: 400;">GPUComputePipeline</span>, device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUComputePipelineDescriptor</span>, async : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #recordDeviceCreateComputePipeline data-toc-label='recordDeviceCreateComputePipeline' }

#### recordDeviceCreateBindGroup( result : <span style="font-weight: 400;">GPUBindGroup</span>, device : <span style="font-weight: 400;">GPUDevice</span>, descriptor : <span style="font-weight: 400;">GPUBindGroupDescriptor</span> ) {: #recordDeviceCreateBindGroup data-toc-label='recordDeviceCreateBindGroup' }

#### recordDeviceCreateCommandEncoder( result : <span style="font-weight: 400;">GPUCommandEncoder</span>, device : <span style="font-weight: 400;">GPUDevice</span>, descriptor? : <span style="font-weight: 400;">GPUCommandEncoderDescriptor</span> ) {: #recordDeviceCreateCommandEncoder data-toc-label='recordDeviceCreateCommandEncoder' }

#### recordDeviceWriteBuffer( device : <span style="font-weight: 400;">GPUDevice</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span>, bufferOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, data : <span style="font-weight: 400;">BufferSource | SharedArrayBuffer</span>, dataOffset? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, size? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #recordDeviceWriteBuffer data-toc-label='recordDeviceWriteBuffer' }

#### recordDeviceQueueSubmit( device : <span style="font-weight: 400;">GPUDevice</span>, commandBuffers : <span style="font-weight: 400;">Iterable&lt;GPUCommandBuffer&gt;</span> ) {: #recordDeviceQueueSubmit data-toc-label='recordDeviceQueueSubmit' }

#### recordDeviceDestroy( device : <span style="font-weight: 400;">GPUDevice</span> ) {: #recordDeviceDestroy data-toc-label='recordDeviceDestroy' }

#### recordBufferMapAsync( buffer : <span style="font-weight: 400;">GPUBuffer</span>, mode : <span style="font-weight: 400;">GPUMapModeFlags</span>, offset? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, size? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #recordBufferMapAsync data-toc-label='recordBufferMapAsync' }

#### recordBufferUnmap( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) {: #recordBufferUnmap data-toc-label='recordBufferUnmap' }

#### recordBufferDestroy( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) {: #recordBufferDestroy data-toc-label='recordBufferDestroy' }

#### recordEncoderBeginRenderPass( result : <span style="font-weight: 400;">GPURenderPassEncoder</span>, commandEncoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, descriptor : <span style="font-weight: 400;">GPURenderPassDescriptor</span> ) {: #recordEncoderBeginRenderPass data-toc-label='recordEncoderBeginRenderPass' }

#### recordEncoderBeginComputePass( result : <span style="font-weight: 400;">GPUComputePassEncoder</span>, commandEncoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, descriptor? : <span style="font-weight: 400;">GPUComputePassDescriptor</span> ) {: #recordEncoderBeginComputePass data-toc-label='recordEncoderBeginComputePass' }

#### recordEncoderCopyBufferToBuffer( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, source : <span style="font-weight: 400;">GPUBuffer</span>, sourceOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, destination : <span style="font-weight: 400;">GPUBuffer</span>, destinationOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #recordEncoderCopyBufferToBuffer data-toc-label='recordEncoderCopyBufferToBuffer' }

#### recordEncoderCopyBufferToTexture( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, source : <span style="font-weight: 400;">GPUImageCopyBuffer</span>, destination : <span style="font-weight: 400;">GPUImageCopyTexture</span>, copySize : <span style="font-weight: 400;">GPUExtent3DStrict</span> ) {: #recordEncoderCopyBufferToTexture data-toc-label='recordEncoderCopyBufferToTexture' }

#### recordEncoderCopyTextureToBuffer( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, source : <span style="font-weight: 400;">GPUImageCopyTexture</span>, destination : <span style="font-weight: 400;">GPUImageCopyBuffer</span>, copySize : <span style="font-weight: 400;">GPUExtent3DStrict</span> ) {: #recordEncoderCopyTextureToBuffer data-toc-label='recordEncoderCopyTextureToBuffer' }

#### recordEncoderCopyTextureToTexture( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, source : <span style="font-weight: 400;">GPUImageCopyTexture</span>, destination : <span style="font-weight: 400;">GPUImageCopyTexture</span>, copySize : <span style="font-weight: 400;">GPUExtent3DStrict</span> ) {: #recordEncoderCopyTextureToTexture data-toc-label='recordEncoderCopyTextureToTexture' }

#### recordEncoderClearBuffer( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span>, offset? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, size? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #recordEncoderClearBuffer data-toc-label='recordEncoderClearBuffer' }

#### recordEncoderResolveQuerySet( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, querySet : <span style="font-weight: 400;">GPUQuerySet</span>, firstQuery : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, queryCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, destination : <span style="font-weight: 400;">GPUBuffer</span>, destinationOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #recordEncoderResolveQuerySet data-toc-label='recordEncoderResolveQuerySet' }

#### recordEncoderFinish( result : <span style="font-weight: 400;">GPUCommandBuffer</span>, encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, descriptor? : <span style="font-weight: 400;">GPUCommandBufferDescriptor</span> ) {: #recordEncoderFinish data-toc-label='recordEncoderFinish' }

#### recordComputePassEncoderSetPipeline( encoder : <span style="font-weight: 400;">GPUComputePassEncoder</span>, pipeline : <span style="font-weight: 400;">GPUComputePipeline</span> ) {: #recordComputePassEncoderSetPipeline data-toc-label='recordComputePassEncoderSetPipeline' }

#### recordComputePassEncoderDispatchWorkgroups( encoder : <span style="font-weight: 400;">GPUComputePassEncoder</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #recordComputePassEncoderDispatchWorkgroups data-toc-label='recordComputePassEncoderDispatchWorkgroups' }

#### recordComputePassEncoderDispatchWorkgroupsIndirect( encoder : <span style="font-weight: 400;">GPUComputePassEncoder</span>, indirectBuffer : <span style="font-weight: 400;">GPUBuffer</span>, indirectOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #recordComputePassEncoderDispatchWorkgroupsIndirect data-toc-label='recordComputePassEncoderDispatchWorkgroupsIndirect' }

#### recordComputePassEncoderEnd( encoder : <span style="font-weight: 400;">GPUComputePassEncoder</span> ) {: #recordComputePassEncoderEnd data-toc-label='recordComputePassEncoderEnd' }

#### recordPassEncoderSetBindGroup( passEncoder : <span style="font-weight: 400;">GPURenderPassEncoder | GPUComputePassEncoder</span>, index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, bindGroup : <span style="font-weight: 400;">GPUBindGroup | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, dynamicOffsets? : <span style="font-weight: 400;">Iterable&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> ) {: #recordPassEncoderSetBindGroup data-toc-label='recordPassEncoderSetBindGroup' }

#### recordQuerySetDestroy( querySet : <span style="font-weight: 400;">GPUQuerySet</span> ) {: #recordQuerySetDestroy data-toc-label='recordQuerySetDestroy' }

### Static Methods

#### getNamePrefix( obj : <span style="font-weight: 400;">IntentionalAny</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getNamePrefix data-toc-label='getNamePrefix' }

#### createNameMap( objects : <span style="font-weight: 400;">IntentionalAny[]</span> ) : <span style="font-weight: 400;">Map&lt;IntentionalAny, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #createNameMap data-toc-label='createNameMap' }

#### arrayBufferLikeString( data : <span style="font-weight: 400;">ArrayLike&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; | ArrayBufferLike</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #arrayBufferLikeString data-toc-label='arrayBufferLikeString' }

TODO: consider how we're handling this

#### objectToString( level : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, map : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span>&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #objectToString data-toc-label='objectToString' }

#### rawValue( level : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, value : <span style="font-weight: 400;">IntentionalAny</span>, nameMap? : <span style="font-weight: 400;">Map&lt;IntentionalAny, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, objectOverrides? : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, ( value: IntentionalAny ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span></span> {: #rawValue data-toc-label='rawValue' }

#### bitfieldToString( bitfield : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, nameMap : <span style="font-weight: 400;">Map&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #bitfieldToString data-toc-label='bitfieldToString' }



## Class WebGPUCommand {: #WebGPUCommand }


```js
import { WebGPUCommand } from 'scenerystack/alpenglow';
```
### Constructor

#### new WebGPUCommand( result : <span style="font-weight: 400;">IntentionalAny | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, dependencies : <span style="font-weight: 400;">IntentionalAny[]</span> ) {: #WebGPUCommand-constructor data-toc-label='WebGPUCommand-constructor' }

### Instance Methods

#### toJS( nameMap : <span style="font-weight: 400;">Map&lt;IntentionalAny, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, level? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WebGPUCommand-toJS data-toc-label='WebGPUCommand-toJS' }

#### getDeclaration( nameMap : <span style="font-weight: 400;">Map&lt;IntentionalAny, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WebGPUCommand-getDeclaration data-toc-label='WebGPUCommand-getDeclaration' }

(protected)



## Class WebGPUCommandList {: #WebGPUCommandList }


```js
import { WebGPUCommandList } from 'scenerystack/alpenglow';
```
### Constructor

#### new WebGPUCommandList( commands : <span style="font-weight: 400;">[WebGPUCommand](../alpenglow/WebGPURecorder.md#WebGPUCommand)[]</span> ) {: #WebGPUCommandList-constructor data-toc-label='WebGPUCommandList-constructor' }

### Instance Methods

#### push( command : <span style="font-weight: 400;">[WebGPUCommand](../alpenglow/WebGPURecorder.md#WebGPUCommand)</span> ) {: #WebGPUCommandList-push data-toc-label='WebGPUCommandList-push' }

#### getDeclaredObjects() : <span style="font-weight: 400;">IntentionalAny[]</span> {: #WebGPUCommandList-getDeclaredObjects data-toc-label='WebGPUCommandList-getDeclaredObjects' }

#### getUnboundObjects( declaredObjects : <span style="font-weight: 400;">IntentionalAny[]</span> ) : <span style="font-weight: 400;">IntentionalAny[]</span> {: #WebGPUCommandList-getUnboundObjects data-toc-label='WebGPUCommandList-getUnboundObjects' }

#### getObjects() : <span style="font-weight: 400;">IntentionalAny[]</span> {: #WebGPUCommandList-getObjects data-toc-label='WebGPUCommandList-getObjects' }

#### getNameMap() : <span style="font-weight: 400;">Map&lt;IntentionalAny, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #WebGPUCommandList-getNameMap data-toc-label='WebGPUCommandList-getNameMap' }

#### toJS( nameMap : <span style="font-weight: 400;">Map&lt;IntentionalAny, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, level ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WebGPUCommandList-toJS data-toc-label='WebGPUCommandList-toJS' }

#### toJSClosure( nameMap : <span style="font-weight: 400;">Map&lt;IntentionalAny, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, level ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WebGPUCommandList-toJSClosure data-toc-label='WebGPUCommandList-toJSClosure' }



## Source Code

See the source for [WebGPURecorder.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/WebGPURecorder.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
