# Executor

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Executor {: #Executor }


```js
import { Executor } from 'scenerystack/alpenglow';
```
### Constructor

#### new Executor( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, bufferLogger : <span style="font-weight: 400; opacity: 80%;">BufferLogger</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ExecutorOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getComputePass( name : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">ComputePass</span> {: #getComputePass data-toc-label='getComputePass' }

#### setTypedBufferValue( typedBuffer : <span style="font-weight: 400; opacity: 80%;">TypedBuffer&lt;T&gt;</span>, value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setTypedBufferValue data-toc-label='setTypedBufferValue' }

#### getTypedBufferValue( typedBuffer : <span style="font-weight: 400; opacity: 80%;">TypedBuffer&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;T&gt;</span> {: #getTypedBufferValue data-toc-label='getTypedBufferValue' }

#### arrayBuffer( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;ArrayBuffer&gt;</span> {: #arrayBuffer data-toc-label='arrayBuffer' }

#### u32( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Uint32Array&gt;</span> {: #u32 data-toc-label='u32' }

#### i32( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Int32Array&gt;</span> {: #i32 data-toc-label='i32' }

#### f32( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;Float32Array&gt;</span> {: #f32 data-toc-label='f32' }

#### u32Numbers( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;number[]&gt;</span> {: #u32Numbers data-toc-label='u32Numbers' }

#### i32Numbers( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;number[]&gt;</span> {: #i32Numbers data-toc-label='i32Numbers' }

#### f32Numbers( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;number[]&gt;</span> {: #f32Numbers data-toc-label='f32Numbers' }

### Static Methods

#### execute( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, task : <span style="font-weight: 400; opacity: 80%;">( executor: Executor ) =&gt; Promise&lt;T&gt;</span>, options? : <span style="font-weight: 400; opacity: 80%;">ExecutorOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;T&gt;</span> {: #execute data-toc-label='execute' }



## Source Code

See the source for [Executor.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Executor.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
