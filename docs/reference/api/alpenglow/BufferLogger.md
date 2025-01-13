# BufferLogger

## Overview

Assists in logging out buffers for WebGPU debugging.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BufferLogger {: #BufferLogger }


```js
import { BufferLogger } from 'scenerystack/alpenglow';
```
### Constructor

#### new BufferLogger( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### complete() : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> {: #complete data-toc-label='complete' }

#### hasCallbacks() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasCallbacks data-toc-label='hasCallbacks' }

#### withBuffer( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span>, callback : <span style="font-weight: 400;">( arrayBuffer: ArrayBuffer ) =&gt; Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>&gt;</span> ) {: #withBuffer data-toc-label='withBuffer' }

#### arrayBufferPromise( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;ArrayBuffer&gt;</span> {: #arrayBufferPromise data-toc-label='arrayBufferPromise' }

#### arrayBuffer( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;ArrayBuffer&gt;</span> {: #arrayBuffer data-toc-label='arrayBuffer' }

#### u32( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;Uint32Array&gt;</span> {: #u32 data-toc-label='u32' }

#### i32( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;Int32Array&gt;</span> {: #i32 data-toc-label='i32' }

#### f32( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;Float32Array&gt;</span> {: #f32 data-toc-label='f32' }

#### u32Numbers( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #u32Numbers data-toc-label='u32Numbers' }

#### i32Numbers( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #i32Numbers data-toc-label='i32Numbers' }

#### f32Numbers( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #f32Numbers data-toc-label='f32Numbers' }

#### logIndexed( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span>, name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, type : <span style="font-weight: 400;">[FromArrayBufferable](../alpenglow/BufferLogger.md#FromArrayBufferable)</span>, lengthCallback : <span style="font-weight: 400;">( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #logIndexed data-toc-label='logIndexed' }

#### logIndexedMultiline( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400;">GPUBuffer</span>, name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, type : <span style="font-weight: 400;">[FromMultiArrayBufferable](../alpenglow/BufferLogger.md#FromMultiArrayBufferable)</span>, lengthCallback : <span style="font-weight: 400;">( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #logIndexedMultiline data-toc-label='logIndexedMultiline' }

#### logIndexedImmediate( arrayBuffer : <span style="font-weight: 400;">ArrayBuffer</span>, name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, type : <span style="font-weight: 400;">[FromArrayBufferable](../alpenglow/BufferLogger.md#FromArrayBufferable)</span>, lengthCallback : <span style="font-weight: 400;">( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #logIndexedImmediate data-toc-label='logIndexedImmediate' }

### Static Methods

#### toIndexedString( n : <span style="font-weight: 400;">{ [toString](function toString() { [native code] })(): <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> }</span>, i : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toIndexedString data-toc-label='toIndexedString' }

#### toMultiIndexedString( n : <span style="font-weight: 400;">{ toStrings(): <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[] }</span>, i : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toMultiIndexedString data-toc-label='toMultiIndexedString' }

#### startGroup( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #startGroup data-toc-label='startGroup' }

#### endGroup() {: #endGroup data-toc-label='endGroup' }

### Static Properties

#### RasterU32 {: #RasterU32 data-toc-label='RasterU32' }

(readonly)

#### RasterI32 {: #RasterI32 data-toc-label='RasterI32' }

(readonly)

#### RasterF32 {: #RasterF32 data-toc-label='RasterF32' }

(readonly)



## Source Code

See the source for [BufferLogger.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BufferLogger.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
