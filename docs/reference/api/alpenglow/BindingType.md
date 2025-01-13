# BindingType

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BindingType {: #BindingType }


```js
import { BindingType } from 'scenerystack/alpenglow';
```
### Instance Methods

#### mutateBindGroupLayoutEntry( entry : <span style="font-weight: 400;">GPUBindGroupLayoutEntry</span> ) {: #mutateBindGroupLayoutEntry data-toc-label='mutateBindGroupLayoutEntry' }

(protected)

#### combined( other : <span style="font-weight: 400;">[BindingType](../alpenglow/BindingType.md)</span> ) : <span style="font-weight: 400;">[BindingType](../alpenglow/BindingType.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #combined data-toc-label='combined' }

null if they can't be combined

#### toDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toDebugString data-toc-label='toDebugString' }

#### getBindGroupLayoutEntry( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">GPUBindGroupLayoutEntry</span> {: #getBindGroupLayoutEntry data-toc-label='getBindGroupLayoutEntry' }



## Source Code

See the source for [BindingType.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BindingType.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
