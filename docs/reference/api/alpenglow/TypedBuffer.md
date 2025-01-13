# TypedBuffer

## Overview

A GPUBuffer that is typed to a specific type, and can be used to encode/decode values to/from it.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TypedBuffer {: #TypedBuffer }


```js
import { TypedBuffer } from 'scenerystack/alpenglow';
```
### Constructor

#### new TypedBuffer( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, type : <span style="font-weight: 400; opacity: 80%;">ConcreteType&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setValue( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setValue data-toc-label='setValue' }

#### getValue( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, bufferLogger : <span style="font-weight: 400; opacity: 80%;">BufferLogger</span> ) : <span style="font-weight: 400; opacity: 80%;">Promise&lt;T&gt;</span> {: #getValue data-toc-label='getValue' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Static Methods

#### createArray( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, type : <span style="font-weight: 400; opacity: 80%;">ConcreteType&lt;T&gt;</span>, size : <span style="font-weight: 400; opacity: 80%;">number</span>, outOfRangeElement? : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">TypedBuffer&lt;T[]&gt;</span> {: #createArray data-toc-label='createArray' }

#### createArrayFromData( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, type : <span style="font-weight: 400; opacity: 80%;">ConcreteType&lt;T&gt;</span>, data : <span style="font-weight: 400; opacity: 80%;">T[]</span> ) : <span style="font-weight: 400; opacity: 80%;">TypedBuffer&lt;T[]&gt;</span> {: #createArrayFromData data-toc-label='createArrayFromData' }

#### wrapArray( buffer : <span style="font-weight: 400; opacity: 80%;">GPUBuffer</span>, type : <span style="font-weight: 400; opacity: 80%;">ConcreteType&lt;T&gt;</span>, outOfRangeElement? : <span style="font-weight: 400; opacity: 80%;">T</span>, size ) : <span style="font-weight: 400; opacity: 80%;">TypedBuffer&lt;T[]&gt;</span> {: #wrapArray data-toc-label='wrapArray' }



## Source Code

See the source for [TypedBuffer.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/TypedBuffer.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
