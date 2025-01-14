# StorageTextureBindingType

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class StorageTextureBindingType {: #StorageTextureBindingType }


```js
import { StorageTextureBindingType } from 'scenerystack/alpenglow';
```
### Constructor

#### new StorageTextureBindingType( access : <span style="font-weight: 400;">GPUStorageTextureAccess</span>, format : <span style="font-weight: 400;">GPUTextureFormat</span>, viewDimension : <span style="font-weight: 400;">GPUTextureViewDimension</span> ) {: #StorageTextureBindingType-constructor data-toc-label='new StorageTextureBindingType' }

### Instance Methods

#### toDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toDebugString data-toc-label='toDebugString' }

#### combined( other : <span style="font-weight: 400;">[BindingType](../alpenglow/BindingType.md)</span> ) : <span style="font-weight: 400;">[BindingType](../alpenglow/BindingType.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #combined data-toc-label='combined' }

#### mutateBindGroupLayoutEntry( entry : <span style="font-weight: 400;">GPUBindGroupLayoutEntry</span> ) {: #mutateBindGroupLayoutEntry data-toc-label='mutateBindGroupLayoutEntry' }

(protected)



## Source Code

See the source for [StorageTextureBindingType.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/StorageTextureBindingType.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
