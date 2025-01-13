# WebGPURecorder

## Overview

Responsible for recording GPU commands globally, so we can play them back later.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class WebGPURecorder {: #WebGPURecorder }


```js
import { WebGPURecorder } from 'scenerystack/alpenglow';
```
### Instance Methods

#### start() : <span style="font-weight: 400; opacity: 80%;">WebGPUCommandList</span> {: #start data-toc-label='start' }

#### stop( commandList : <span style="font-weight: 400; opacity: 80%;">WebGPUCommandList</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #stop data-toc-label='stop' }

#### recordGetAdapter( result : <span style="font-weight: 400; opacity: 80%;">GPUAdapter | null</span>, options? : <span style="font-weight: 400; opacity: 80%;">GPURequestAdapterOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordGetAdapter data-toc-label='recordGetAdapter' }

#### recordAdapterRequestDevice( result : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, adapter : <span style="font-weight: 400; opacity: 80%;">GPUAdapter</span>, descriptor? : <span style="font-weight: 400; opacity: 80%;">GPUDeviceDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordAdapterRequestDevice data-toc-label='recordAdapterRequestDevice' }

#### recordDeviceCreateBuffer( result : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUBufferDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceCreateBuffer data-toc-label='recordDeviceCreateBuffer' }

#### recordDeviceCreateQuerySet( result : <span style="font-weight: 400; opacity: 80%;">GPUQuerySet</span>, device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUQuerySetDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceCreateQuerySet data-toc-label='recordDeviceCreateQuerySet' }

#### recordDeviceCreateBindGroupLayout( result : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupLayout</span>, device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupLayoutDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceCreateBindGroupLayout data-toc-label='recordDeviceCreateBindGroupLayout' }

#### recordDeviceCreatePipelineLayout( result : <span style="font-weight: 400; opacity: 80%;">GPUPipelineLayout</span>, device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUPipelineLayoutDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceCreatePipelineLayout data-toc-label='recordDeviceCreatePipelineLayout' }

#### recordDeviceCreateShaderModule( result : <span style="font-weight: 400; opacity: 80%;">GPUShaderModule</span>, device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUShaderModuleDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceCreateShaderModule data-toc-label='recordDeviceCreateShaderModule' }

#### recordDeviceCreateComputePipeline( result : <span style="font-weight: 400; opacity: 80%;">GPUComputePipeline</span>, device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUComputePipelineDescriptor</span>, async : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceCreateComputePipeline data-toc-label='recordDeviceCreateComputePipeline' }

#### recordDeviceCreateBindGroup( result : <span style="font-weight: 400; opacity: 80%;">GPUBindGroup</span>, device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceCreateBindGroup data-toc-label='recordDeviceCreateBindGroup' }

#### recordDeviceCreateCommandEncoder( result : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, descriptor? : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoderDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceCreateCommandEncoder data-toc-label='recordDeviceCreateCommandEncoder' }

#### recordDeviceWriteBuffer( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, bufferOffset : <span style="font-weight: 400; opacity: 80%;">number</span>, data : <span style="font-weight: 400; opacity: 80%;">BufferSource | SharedArrayBuffer</span>, dataOffset? : <span style="font-weight: 400; opacity: 80%;">number</span>, size? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceWriteBuffer data-toc-label='recordDeviceWriteBuffer' }

#### recordDeviceQueueSubmit( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, commandBuffers : <span style="font-weight: 400; opacity: 80%;">Iterable&lt;GPUCommandBuffer&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceQueueSubmit data-toc-label='recordDeviceQueueSubmit' }

#### recordDeviceDestroy( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordDeviceDestroy data-toc-label='recordDeviceDestroy' }

#### recordBufferMapAsync( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, mode : <span style="font-weight: 400; opacity: 80%;">GPUMapModeFlags</span>, offset? : <span style="font-weight: 400; opacity: 80%;">number</span>, size? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordBufferMapAsync data-toc-label='recordBufferMapAsync' }

#### recordBufferUnmap( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordBufferUnmap data-toc-label='recordBufferUnmap' }

#### recordBufferDestroy( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordBufferDestroy data-toc-label='recordBufferDestroy' }

#### recordEncoderBeginRenderPass( result : <span style="font-weight: 400; opacity: 80%;">GPURenderPassEncoder</span>, commandEncoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, descriptor : <span style="font-weight: 400; opacity: 80%;">GPURenderPassDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordEncoderBeginRenderPass data-toc-label='recordEncoderBeginRenderPass' }

#### recordEncoderBeginComputePass( result : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span>, commandEncoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, descriptor? : <span style="font-weight: 400; opacity: 80%;">GPUComputePassDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordEncoderBeginComputePass data-toc-label='recordEncoderBeginComputePass' }

#### recordEncoderCopyBufferToBuffer( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, source : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, sourceOffset : <span style="font-weight: 400; opacity: 80%;">number</span>, destination : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, destinationOffset : <span style="font-weight: 400; opacity: 80%;">number</span>, size : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordEncoderCopyBufferToBuffer data-toc-label='recordEncoderCopyBufferToBuffer' }

#### recordEncoderCopyBufferToTexture( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, source : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyBuffer</span>, destination : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyTexture</span>, copySize : <span style="font-weight: 400; opacity: 80%;">GPUExtent3DStrict</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordEncoderCopyBufferToTexture data-toc-label='recordEncoderCopyBufferToTexture' }

#### recordEncoderCopyTextureToBuffer( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, source : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyTexture</span>, destination : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyBuffer</span>, copySize : <span style="font-weight: 400; opacity: 80%;">GPUExtent3DStrict</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordEncoderCopyTextureToBuffer data-toc-label='recordEncoderCopyTextureToBuffer' }

#### recordEncoderCopyTextureToTexture( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, source : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyTexture</span>, destination : <span style="font-weight: 400; opacity: 80%;">GPUImageCopyTexture</span>, copySize : <span style="font-weight: 400; opacity: 80%;">GPUExtent3DStrict</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordEncoderCopyTextureToTexture data-toc-label='recordEncoderCopyTextureToTexture' }

#### recordEncoderClearBuffer( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, offset? : <span style="font-weight: 400; opacity: 80%;">number</span>, size? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordEncoderClearBuffer data-toc-label='recordEncoderClearBuffer' }

#### recordEncoderResolveQuerySet( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, querySet : <span style="font-weight: 400; opacity: 80%;">GPUQuerySet</span>, firstQuery : <span style="font-weight: 400; opacity: 80%;">number</span>, queryCount : <span style="font-weight: 400; opacity: 80%;">number</span>, destination : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, destinationOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordEncoderResolveQuerySet data-toc-label='recordEncoderResolveQuerySet' }

#### recordEncoderFinish( result : <span style="font-weight: 400; opacity: 80%;">GPUCommandBuffer</span>, encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, descriptor? : <span style="font-weight: 400; opacity: 80%;">GPUCommandBufferDescriptor</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordEncoderFinish data-toc-label='recordEncoderFinish' }

#### recordComputePassEncoderSetPipeline( encoder : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span>, pipeline : <span style="font-weight: 400; opacity: 80%;">GPUComputePipeline</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordComputePassEncoderSetPipeline data-toc-label='recordComputePassEncoderSetPipeline' }

#### recordComputePassEncoderDispatchWorkgroups( encoder : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y? : <span style="font-weight: 400; opacity: 80%;">number</span>, z? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordComputePassEncoderDispatchWorkgroups data-toc-label='recordComputePassEncoderDispatchWorkgroups' }

#### recordComputePassEncoderDispatchWorkgroupsIndirect( encoder : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span>, indirectBuffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, indirectOffset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordComputePassEncoderDispatchWorkgroupsIndirect data-toc-label='recordComputePassEncoderDispatchWorkgroupsIndirect' }

#### recordComputePassEncoderEnd( encoder : <span style="font-weight: 400; opacity: 80%;">GPUComputePassEncoder</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordComputePassEncoderEnd data-toc-label='recordComputePassEncoderEnd' }

#### recordPassEncoderSetBindGroup( passEncoder : <span style="font-weight: 400; opacity: 80%;">GPURenderPassEncoder | GPUComputePassEncoder</span>, index : <span style="font-weight: 400; opacity: 80%;">number</span>, bindGroup : <span style="font-weight: 400; opacity: 80%;">GPUBindGroup | null</span>, dynamicOffsets? : <span style="font-weight: 400; opacity: 80%;">Iterable&lt;number&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordPassEncoderSetBindGroup data-toc-label='recordPassEncoderSetBindGroup' }

#### recordQuerySetDestroy( querySet : <span style="font-weight: 400; opacity: 80%;">GPUQuerySet</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recordQuerySetDestroy data-toc-label='recordQuerySetDestroy' }

### Static Methods

#### getNamePrefix( obj : <span style="font-weight: 400; opacity: 80%;">IntentionalAny</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getNamePrefix data-toc-label='getNamePrefix' }

#### createNameMap( objects : <span style="font-weight: 400; opacity: 80%;">IntentionalAny[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Map&lt;IntentionalAny, string&gt;</span> {: #createNameMap data-toc-label='createNameMap' }

#### arrayBufferLikeString( data : <span style="font-weight: 400; opacity: 80%;">ArrayLike&lt;number&gt; | ArrayBufferLike</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #arrayBufferLikeString data-toc-label='arrayBufferLikeString' }

TODO: consider how we're handling this

#### objectToString( level : <span style="font-weight: 400; opacity: 80%;">number</span>, map : <span style="font-weight: 400; opacity: 80%;">Record&lt;string, string | undefined&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #objectToString data-toc-label='objectToString' }

#### rawValue( level : <span style="font-weight: 400; opacity: 80%;">number</span>, value : <span style="font-weight: 400; opacity: 80%;">IntentionalAny</span>, nameMap? : <span style="font-weight: 400; opacity: 80%;">Map&lt;IntentionalAny, string&gt;</span>, objectOverrides? : <span style="font-weight: 400; opacity: 80%;">Record&lt;string, ( value: IntentionalAny ) =&gt; string&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">string | undefined</span> {: #rawValue data-toc-label='rawValue' }

#### bitfieldToString( bitfield : <span style="font-weight: 400; opacity: 80%;">number</span>, nameMap : <span style="font-weight: 400; opacity: 80%;">Map&lt;number, string&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #bitfieldToString data-toc-label='bitfieldToString' }



## Class WebGPUCommand {: #WebGPUCommand }


```js
import { WebGPUCommand } from 'scenerystack/alpenglow';
```
### Constructor

#### new WebGPUCommand( result : <span style="font-weight: 400; opacity: 80%;">IntentionalAny | null</span>, dependencies : <span style="font-weight: 400; opacity: 80%;">IntentionalAny[]</span> ) {: #WebGPUCommand-constructor data-toc-label='WebGPUCommand-constructor' }

### Instance Methods

#### toJS( nameMap : <span style="font-weight: 400; opacity: 80%;">Map&lt;IntentionalAny, string&gt;</span>, level? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WebGPUCommand-toJS data-toc-label='WebGPUCommand-toJS' }

#### getDeclaration( nameMap : <span style="font-weight: 400; opacity: 80%;">Map&lt;IntentionalAny, string&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WebGPUCommand-getDeclaration data-toc-label='WebGPUCommand-getDeclaration' }

(protected)



## Class WebGPUCommandList {: #WebGPUCommandList }


```js
import { WebGPUCommandList } from 'scenerystack/alpenglow';
```
### Constructor

#### new WebGPUCommandList( commands : <span style="font-weight: 400; opacity: 80%;">WebGPUCommand[]</span> ) {: #WebGPUCommandList-constructor data-toc-label='WebGPUCommandList-constructor' }

### Instance Methods

#### push( command : <span style="font-weight: 400; opacity: 80%;">WebGPUCommand</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #WebGPUCommandList-push data-toc-label='WebGPUCommandList-push' }

#### getDeclaredObjects() : <span style="font-weight: 400; opacity: 80%;">IntentionalAny[]</span> {: #WebGPUCommandList-getDeclaredObjects data-toc-label='WebGPUCommandList-getDeclaredObjects' }

#### getUnboundObjects( declaredObjects : <span style="font-weight: 400; opacity: 80%;">IntentionalAny[]</span> ) : <span style="font-weight: 400; opacity: 80%;">IntentionalAny[]</span> {: #WebGPUCommandList-getUnboundObjects data-toc-label='WebGPUCommandList-getUnboundObjects' }

#### getObjects() : <span style="font-weight: 400; opacity: 80%;">IntentionalAny[]</span> {: #WebGPUCommandList-getObjects data-toc-label='WebGPUCommandList-getObjects' }

#### getNameMap() : <span style="font-weight: 400; opacity: 80%;">Map&lt;IntentionalAny, string&gt;</span> {: #WebGPUCommandList-getNameMap data-toc-label='WebGPUCommandList-getNameMap' }

#### toJS( nameMap : <span style="font-weight: 400; opacity: 80%;">Map&lt;IntentionalAny, string&gt;</span>, level ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WebGPUCommandList-toJS data-toc-label='WebGPUCommandList-toJS' }

#### toJSClosure( nameMap : <span style="font-weight: 400; opacity: 80%;">Map&lt;IntentionalAny, string&gt;</span>, level ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WebGPUCommandList-toJSClosure data-toc-label='WebGPUCommandList-toJSClosure' }



## Source Code

See the source for [WebGPURecorder.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/WebGPURecorder.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
