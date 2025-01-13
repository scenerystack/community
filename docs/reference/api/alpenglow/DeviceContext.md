# DeviceContext

## Overview

Handle resources and settings connected to a GPUDevice

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DeviceContext {: #DeviceContext }


```js
import { DeviceContext } from 'scenerystack/alpenglow';
```
### Constructor

#### new DeviceContext( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### createBuffer( size : <span style="font-weight: 400; opacity: 80%;">number</span>, flags ) : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> {: #createBuffer data-toc-label='createBuffer' }

in bytes

#### createDataBuffer( data : <span style="font-weight: 400; opacity: 80%;">ArrayBufferView</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> {: #createDataBuffer data-toc-label='createDataBuffer' }

#### createU32Buffer( data : <span style="font-weight: 400; opacity: 80%;">number[]</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> {: #createU32Buffer data-toc-label='createU32Buffer' }

#### createI32Buffer( data : <span style="font-weight: 400; opacity: 80%;">number[]</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> {: #createI32Buffer data-toc-label='createI32Buffer' }

#### createF32Buffer( data : <span style="font-weight: 400; opacity: 80%;">number[]</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> {: #createF32Buffer data-toc-label='createF32Buffer' }

#### createByteEncoderBuffer( encoder : <span style="font-weight: 400; opacity: 80%;">ByteEncoder</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> {: #createByteEncoderBuffer data-toc-label='createByteEncoderBuffer' }

#### createMapReadableBuffer( size : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> {: #createMapReadableBuffer data-toc-label='createMapReadableBuffer' }

in bytes

#### createQueryBuffer( size : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> {: #createQueryBuffer data-toc-label='createQueryBuffer' }

in bytes (takes 8 bytes per count)

#### createQuerySet( capacity : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUQuerySet</span> {: #createQuerySet data-toc-label='createQuerySet' }

(will take 8*capacity bytes)

#### getCanvasContext( canvas : <span style="font-weight: 400; opacity: 80%;">HTMLCanvasElement</span>, colorSpace : <span style="font-weight: 400; opacity: 80%;">'srgb' | 'display-p3'</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUCanvasContext</span> {: #getCanvasContext data-toc-label='getCanvasContext' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Instance Properties

#### preferredCanvasFormat : <span style="font-weight: 400; opacity: 80%;">PreferredCanvasFormat</span> {: #preferredCanvasFormat data-toc-label='preferredCanvasFormat' }

(readonly)

#### preferredStorageFormat : <span style="font-weight: 400; opacity: 80%;">'bgra8unorm' | 'rgba8unorm'</span> {: #preferredStorageFormat data-toc-label='preferredStorageFormat' }

(readonly)

#### lostEmitter : <span style="font-weight: 400; opacity: 80%;">TinyEmitter</span> {: #lostEmitter data-toc-label='lostEmitter' }

(readonly)

### Static Methods

#### getDevice( providedOptions? : <span style="font-weight: 400; opacity: 80%;">DeviceContextDeviceOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;GPUDevice | null&gt;</span> {: #getDevice data-toc-label='getDevice' }

#### getMappedFloatArray( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Float32Array&gt;</span> {: #getMappedFloatArray data-toc-label='getMappedFloatArray' }

TODO: reduce code duplication around here

#### getMappedUintArray( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Uint32Array&gt;</span> {: #getMappedUintArray data-toc-label='getMappedUintArray' }

#### getMappedIntArray( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Int32Array&gt;</span> {: #getMappedIntArray data-toc-label='getMappedIntArray' }

#### getMappedByteArray( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Uint8Array&gt;</span> {: #getMappedByteArray data-toc-label='getMappedByteArray' }

#### getMappedArrayBuffer( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;ArrayBuffer&gt;</span> {: #getMappedArrayBuffer data-toc-label='getMappedArrayBuffer' }



## Source Code

See the source for [DeviceContext.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/DeviceContext.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
