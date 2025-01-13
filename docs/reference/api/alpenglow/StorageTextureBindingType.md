# StorageTextureBindingType

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class StorageTextureBindingType {: #StorageTextureBindingType }


```js
import { StorageTextureBindingType } from 'scenerystack/alpenglow';
```
### Constructor

#### new StorageTextureBindingType( access : <span style="font-weight: 400; opacity: 80%;">GPUStorageTextureAccess</span>, format : <span style="font-weight: 400; opacity: 80%;">GPUTextureFormat</span>, viewDimension : <span style="font-weight: 400; opacity: 80%;">GPUTextureViewDimension</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### toDebugString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toDebugString data-toc-label='toDebugString' }

#### combined( other : <span style="font-weight: 400; opacity: 80%;">BindingType</span> ) : <span style="font-weight: 400; opacity: 80%;">BindingType | null</span> {: #combined data-toc-label='combined' }

#### mutateBindGroupLayoutEntry( entry : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupLayoutEntry</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #mutateBindGroupLayoutEntry data-toc-label='mutateBindGroupLayoutEntry' }

(protected)



## Source Code

See the source for [StorageTextureBindingType.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/StorageTextureBindingType.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
