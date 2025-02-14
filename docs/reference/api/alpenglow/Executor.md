# Executor

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Executor.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Executor.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Executor {: #Executor }


```js
import { Executor } from 'scenerystack/alpenglow';
```
### Constructor

#### new Executor( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md)</span>, encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, bufferLogger : <span style="font-weight: 400;">[BufferLogger](../alpenglow/BufferLogger.md)</span>, providedOptions? : <span style="font-weight: 400;">[ExecutorOptions](../alpenglow/Executor.md#ExecutorOptions)</span> ) {: #Executor-constructor data-toc-label='new Executor' }

### Instance Methods

#### getComputePass( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[ComputePass](../alpenglow/ComputePass.md)</span> {: #getComputePass data-toc-label='getComputePass' }

#### setTypedBufferValue( typedBuffer : <span style="font-weight: 400;">[TypedBuffer](../alpenglow/TypedBuffer.md)&lt;T&gt;</span>, value : <span style="font-weight: 400;">T</span> ) {: #setTypedBufferValue data-toc-label='setTypedBufferValue' }

#### getTypedBufferValue( typedBuffer : <span style="font-weight: 400;">[TypedBuffer](../alpenglow/TypedBuffer.md)&lt;T&gt;</span> ) : <span style="font-weight: 400;">Promise&lt;T&gt;</span> {: #getTypedBufferValue data-toc-label='getTypedBufferValue' }

#### arrayBuffer( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;ArrayBuffer&gt;</span> {: #arrayBuffer data-toc-label='arrayBuffer' }

#### u32( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;Uint32Array&gt;</span> {: #u32 data-toc-label='u32' }

#### i32( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;Int32Array&gt;</span> {: #i32 data-toc-label='i32' }

#### f32( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;Float32Array&gt;</span> {: #f32 data-toc-label='f32' }

#### u32Numbers( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #u32Numbers data-toc-label='u32Numbers' }

#### i32Numbers( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #i32Numbers data-toc-label='i32Numbers' }

#### f32Numbers( buffer : <span style="font-weight: 400;">GPUBuffer</span> ) : <span style="font-weight: 400;">Promise&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #f32Numbers data-toc-label='f32Numbers' }

### Static Methods

#### execute( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md)</span>, task : <span style="font-weight: 400;">( executor: [Executor](../alpenglow/Executor.md) ) =&gt; Promise&lt;T&gt;</span>, options? : <span style="font-weight: 400;">[ExecutorOptions](../alpenglow/Executor.md#ExecutorOptions)</span> ) : <span style="font-weight: 400;">Promise&lt;T&gt;</span> {: #execute data-toc-label='execute' }



## Type ExecutorOptions {: #ExecutorOptions }


```js
import type { ExecutorOptions } from 'scenerystack/alpenglow';
```


- **getTimestampWrites**?: ( name: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> ) =&gt; GPUComputePassTimestampWrites | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **logBuffer**?: GPUBuffer | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




## Source Code

See the source for [Executor.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Executor.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
