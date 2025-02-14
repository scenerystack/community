# TextureBindingType

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/TextureBindingType.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/TextureBindingType.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TextureBindingType {: #TextureBindingType }


```js
import { TextureBindingType } from 'scenerystack/alpenglow';
```
### Constructor

#### new TextureBindingType( sampleType : <span style="font-weight: 400;">GPUTextureSampleType</span>, viewDimension : <span style="font-weight: 400;">GPUTextureViewDimension</span>, multisampled ) {: #TextureBindingType-constructor data-toc-label='new TextureBindingType' }

### Instance Methods

#### toDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toDebugString data-toc-label='toDebugString' }

#### combined( other : <span style="font-weight: 400;">[BindingType](../alpenglow/BindingType.md)</span> ) : <span style="font-weight: 400;">[BindingType](../alpenglow/BindingType.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #combined data-toc-label='combined' }

#### mutateBindGroupLayoutEntry( entry : <span style="font-weight: 400;">GPUBindGroupLayoutEntry</span> ) {: #mutateBindGroupLayoutEntry data-toc-label='mutateBindGroupLayoutEntry' }

(protected)



## Source Code

See the source for [TextureBindingType.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/TextureBindingType.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
