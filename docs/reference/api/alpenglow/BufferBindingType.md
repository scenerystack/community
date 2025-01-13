# BufferBindingType

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BufferBindingType {: #BufferBindingType }


```js
import { BufferBindingType } from 'scenerystack/alpenglow';
```
### Constructor

#### new BufferBindingType( type : <span style="font-weight: 400; opacity: 80%;">GPUBufferBindingType</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### combined( other : <span style="font-weight: 400; opacity: 80%;">BindingType</span> ) : <span style="font-weight: 400; opacity: 80%;">BindingType | null</span> {: #combined data-toc-label='combined' }

#### toDebugString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toDebugString data-toc-label='toDebugString' }

#### mutateBindGroupLayoutEntry( entry : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupLayoutEntry</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #mutateBindGroupLayoutEntry data-toc-label='mutateBindGroupLayoutEntry' }

(protected)

### Static Properties

#### UNIFORM : <span style="font-weight: 400; opacity: 80%;">BufferBindingType</span> {: #UNIFORM data-toc-label='UNIFORM' }

(readonly)

#### READ_ONLY_STORAGE : <span style="font-weight: 400; opacity: 80%;">BufferBindingType</span> {: #READ_ONLY_STORAGE data-toc-label='READ_ONLY_STORAGE' }

(readonly)

#### STORAGE : <span style="font-weight: 400; opacity: 80%;">BufferBindingType</span> {: #STORAGE data-toc-label='STORAGE' }

(readonly)



## Source Code

See the source for [BufferBindingType.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BufferBindingType.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
