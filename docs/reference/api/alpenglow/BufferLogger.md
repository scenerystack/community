# BufferLogger

## Overview

Assists in logging out buffers for WebGPU debugging.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BufferLogger {: #BufferLogger }


```js
import { BufferLogger } from 'scenerystack/alpenglow';
```
### Constructor

#### new BufferLogger( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### complete() : <span style="font-weight: 400; opacity: 80%;">Promise&lt;void&gt;</span> {: #complete data-toc-label='complete' }

#### hasCallbacks() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasCallbacks data-toc-label='hasCallbacks' }

#### withBuffer( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, callback : <span style="font-weight: 400; opacity: 80%;">( arrayBuffer: ArrayBuffer ) =&gt; Promise&lt;void&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #withBuffer data-toc-label='withBuffer' }

#### arrayBufferPromise( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;ArrayBuffer&gt;</span> {: #arrayBufferPromise data-toc-label='arrayBufferPromise' }

#### arrayBuffer( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;ArrayBuffer&gt;</span> {: #arrayBuffer data-toc-label='arrayBuffer' }

#### u32( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Uint32Array&gt;</span> {: #u32 data-toc-label='u32' }

#### i32( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Int32Array&gt;</span> {: #i32 data-toc-label='i32' }

#### f32( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Float32Array&gt;</span> {: #f32 data-toc-label='f32' }

#### u32Numbers( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;number[]&gt;</span> {: #u32Numbers data-toc-label='u32Numbers' }

#### i32Numbers( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;number[]&gt;</span> {: #i32Numbers data-toc-label='i32Numbers' }

#### f32Numbers( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;number[]&gt;</span> {: #f32Numbers data-toc-label='f32Numbers' }

#### logIndexed( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, name : <span style="font-weight: 400; opacity: 80%;">string</span>, type : <span style="font-weight: 400; opacity: 80%;">FromArrayBufferable</span>, lengthCallback : <span style="font-weight: 400; opacity: 80%;">( () =&gt; number ) | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #logIndexed data-toc-label='logIndexed' }

#### logIndexedMultiline( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, name : <span style="font-weight: 400; opacity: 80%;">string</span>, type : <span style="font-weight: 400; opacity: 80%;">FromMultiArrayBufferable</span>, lengthCallback : <span style="font-weight: 400; opacity: 80%;">( () =&gt; number ) | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #logIndexedMultiline data-toc-label='logIndexedMultiline' }

#### logIndexedImmediate( arrayBuffer : <span style="font-weight: 400; opacity: 80%;">ArrayBuffer</span>, name : <span style="font-weight: 400; opacity: 80%;">string</span>, type : <span style="font-weight: 400; opacity: 80%;">FromArrayBufferable</span>, lengthCallback : <span style="font-weight: 400; opacity: 80%;">( () =&gt; number ) | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #logIndexedImmediate data-toc-label='logIndexedImmediate' }

### Static Methods

#### toIndexedString( n : <span style="font-weight: 400; opacity: 80%;">{ toString(): string }</span>, i : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toIndexedString data-toc-label='toIndexedString' }

#### toMultiIndexedString( n : <span style="font-weight: 400; opacity: 80%;">{ toStrings(): string[] }</span>, i : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toMultiIndexedString data-toc-label='toMultiIndexedString' }

#### startGroup( name : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #startGroup data-toc-label='startGroup' }

#### endGroup() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #endGroup data-toc-label='endGroup' }

### Static Properties

#### RasterU32 {: #RasterU32 data-toc-label='RasterU32' }

(readonly)

#### RasterI32 {: #RasterI32 data-toc-label='RasterI32' }

(readonly)

#### RasterF32 {: #RasterF32 data-toc-label='RasterF32' }

(readonly)



## Source Code

See the source for [BufferLogger.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BufferLogger.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
