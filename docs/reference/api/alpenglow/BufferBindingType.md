# BufferBindingType

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BufferBindingType {: #BufferBindingType }


```js
import { BufferBindingType } from 'scenerystack/alpenglow';
```
### Constructor

#### new BufferBindingType( type : <span style="font-weight: 400;">GPUBufferBindingType</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### combined( other : <span style="font-weight: 400;">[BindingType](../alpenglow/BindingType.md)</span> ) : <span style="font-weight: 400;">[BindingType](../alpenglow/BindingType.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #combined data-toc-label='combined' }

#### toDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toDebugString data-toc-label='toDebugString' }

#### mutateBindGroupLayoutEntry( entry : <span style="font-weight: 400;">GPUBindGroupLayoutEntry</span> ) {: #mutateBindGroupLayoutEntry data-toc-label='mutateBindGroupLayoutEntry' }

(protected)

### Static Properties

#### UNIFORM : <span style="font-weight: 400;">[BufferBindingType](../alpenglow/BufferBindingType.md)</span> {: #UNIFORM data-toc-label='UNIFORM' }

(readonly)

#### READ_ONLY_STORAGE : <span style="font-weight: 400;">[BufferBindingType](../alpenglow/BufferBindingType.md)</span> {: #READ_ONLY_STORAGE data-toc-label='READ_ONLY_STORAGE' }

(readonly)

#### STORAGE : <span style="font-weight: 400;">[BufferBindingType](../alpenglow/BufferBindingType.md)</span> {: #STORAGE data-toc-label='STORAGE' }

(readonly)



## Source Code

See the source for [BufferBindingType.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BufferBindingType.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
