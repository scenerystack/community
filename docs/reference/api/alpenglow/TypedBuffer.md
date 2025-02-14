# TypedBuffer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/TypedBuffer.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/TypedBuffer.ts) for the most up-to-date information.

## Overview

A GPUBuffer that is typed to a specific type, and can be used to encode/decode values to/from it.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TypedBuffer {: #TypedBuffer }


```js
import { TypedBuffer } from 'scenerystack/alpenglow';
```
### Constructor

#### new TypedBuffer( buffer : <span style="font-weight: 400;">GPUBuffer</span>, type : <span style="font-weight: 400;">[ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;</span> ) {: #TypedBuffer-constructor data-toc-label='new TypedBuffer' }

### Instance Methods

#### setValue( device : <span style="font-weight: 400;">GPUDevice</span>, value : <span style="font-weight: 400;">T</span> ) {: #setValue data-toc-label='setValue' }

#### getValue( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, bufferLogger : <span style="font-weight: 400;">[BufferLogger](../alpenglow/BufferLogger.md)</span> ) : <span style="font-weight: 400;">Promise&lt;T&gt;</span> {: #getValue data-toc-label='getValue' }

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Methods

#### createArray( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md)</span>, type : <span style="font-weight: 400;">[ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;</span>, size : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, outOfRangeElement? : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">[TypedBuffer](../alpenglow/TypedBuffer.md)&lt;T[]&gt;</span> {: #createArray data-toc-label='createArray' }

#### createArrayFromData( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md)</span>, type : <span style="font-weight: 400;">[ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;</span>, data : <span style="font-weight: 400;">T[]</span> ) : <span style="font-weight: 400;">[TypedBuffer](../alpenglow/TypedBuffer.md)&lt;T[]&gt;</span> {: #createArrayFromData data-toc-label='createArrayFromData' }

#### wrapArray( buffer : <span style="font-weight: 400;">GPUBuffer</span>, type : <span style="font-weight: 400;">[ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;</span>, outOfRangeElement? : <span style="font-weight: 400;">T</span>, size ) : <span style="font-weight: 400;">[TypedBuffer](../alpenglow/TypedBuffer.md)&lt;T[]&gt;</span> {: #wrapArray data-toc-label='wrapArray' }



## Source Code

See the source for [TypedBuffer.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/TypedBuffer.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
