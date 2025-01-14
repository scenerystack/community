# DeviceContext

## Overview

Handle resources and settings connected to a GPUDevice

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DeviceContext {: #DeviceContext }


```js
import { DeviceContext } from 'scenerystack/alpenglow';
```
### Constructor

#### new DeviceContext( device : <span style="font-weight: 400;">GPUDevice</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### createBuffer( size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, flags ) : <span style="font-weight: 400;">GPUBuffer</span> {: #createBuffer data-toc-label='createBuffer' }

in bytes

#### createDataBuffer( data : <span style="font-weight: 400;">ArrayBufferView</span> ) : <span style="font-weight: 400;">GPUBuffer</span> {: #createDataBuffer data-toc-label='createDataBuffer' }

#### createU32Buffer( data : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) : <span style="font-weight: 400;">GPUBuffer</span> {: #createU32Buffer data-toc-label='createU32Buffer' }

#### createI32Buffer( data : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) : <span style="font-weight: 400;">GPUBuffer</span> {: #createI32Buffer data-toc-label='createI32Buffer' }

#### createF32Buffer( data : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) : <span style="font-weight: 400;">GPUBuffer</span> {: #createF32Buffer data-toc-label='createF32Buffer' }

#### createByteEncoderBuffer( encoder : <span style="font-weight: 400;">[ByteEncoder](../alpenglow/ByteEncoder.md)</span> ) : <span style="font-weight: 400;">GPUBuffer</span> {: #createByteEncoderBuffer data-toc-label='createByteEncoderBuffer' }

#### createMapReadableBuffer( size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">GPUBuffer</span> {: #createMapReadableBuffer data-toc-label='createMapReadableBuffer' }

in bytes

#### createQueryBuffer( size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">GPUBuffer</span> {: #createQueryBuffer data-toc-label='createQueryBuffer' }

in bytes (takes 8 bytes per count)

#### createQuerySet( capacity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">GPUQuerySet</span> {: #createQuerySet data-toc-label='createQuerySet' }

(will take 8*capacity bytes)

#### getCanvasContext( canvas : <span style="font-weight: 400;">[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)</span>, colorSpace : <span style="font-weight: 400;">'srgb' | 'display-p3'</span> ) : <span style="font-weight: 400;">GPUCanvasContext</span> {: #getCanvasContext data-toc-label='getCanvasContext' }

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### preferredCanvasFormat : <span style="font-weight: 400;">[PreferredCanvasFormat](../alpenglow/WebGPUAPI.md#PreferredCanvasFormat)</span> {: #preferredCanvasFormat data-toc-label='preferredCanvasFormat' }

(readonly)

#### preferredStorageFormat : <span style="font-weight: 400;">'bgra8unorm' | 'rgba8unorm'</span> {: #preferredStorageFormat data-toc-label='preferredStorageFormat' }

(readonly)

#### lostEmitter : <span style="font-weight: 400;">[TinyEmitter](../axon/TinyEmitter.md)</span> {: #lostEmitter data-toc-label='lostEmitter' }

(readonly)

### Static Methods

#### getDevice( providedOptions? : <span style="font-weight: 400;">[DeviceContextDeviceOptions](../alpenglow/DeviceContext.md#DeviceContextDeviceOptions)</span> ) : <span style="font-weight: 400;">Promise&lt;GPUDevice | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #getDevice data-toc-label='getDevice' }

#### getMappedFloatArray( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;Float32Array&gt;</span> {: #getMappedFloatArray data-toc-label='getMappedFloatArray' }

TODO: reduce code duplication around here

#### getMappedUintArray( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;Uint32Array&gt;</span> {: #getMappedUintArray data-toc-label='getMappedUintArray' }

#### getMappedIntArray( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;Int32Array&gt;</span> {: #getMappedIntArray data-toc-label='getMappedIntArray' }

#### getMappedByteArray( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;Uint8Array&gt;</span> {: #getMappedByteArray data-toc-label='getMappedByteArray' }

#### getMappedArrayBuffer( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;ArrayBuffer&gt;</span> {: #getMappedArrayBuffer data-toc-label='getMappedArrayBuffer' }



## Type DeviceContextDeviceOptions {: #DeviceContextDeviceOptions }


```js
import type { DeviceContextDeviceOptions } from 'scenerystack/alpenglow';
```
- **maxLimits**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **timestampQuery**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **highPerformance**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [DeviceContext.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/DeviceContext.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
