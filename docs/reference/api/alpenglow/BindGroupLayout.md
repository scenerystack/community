# BindGroupLayout

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BindGroupLayout.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BindGroupLayout.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BindGroupLayout {: #BindGroupLayout }


```js
import { BindGroupLayout } from 'scenerystack/alpenglow';
```
### Constructor

#### new BindGroupLayout( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md)</span>, name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, groupIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, bindingDescriptors : <span style="font-weight: 400;">[BindingDescriptor](../alpenglow/BindingDescriptor.md)[]</span> ) {: #BindGroupLayout-constructor data-toc-label='new BindGroupLayout' }

### Instance Methods

#### hasBindingWithSlot( slot : <span style="font-weight: 400;">[ResourceSlot](../alpenglow/ResourceSlot.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasBindingWithSlot data-toc-label='hasBindingWithSlot' }

#### getBindingFromSlot( slot : <span style="font-weight: 400;">[ResourceSlot](../alpenglow/ResourceSlot.md)</span> ) : <span style="font-weight: 400;">[Binding](../alpenglow/Binding.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getBindingFromSlot data-toc-label='getBindingFromSlot' }

### Instance Properties

#### layout : <span style="font-weight: 400;">GPUBindGroupLayout</span> {: #layout data-toc-label='layout' }

(readonly)

#### bindings : <span style="font-weight: 400;">[Binding](../alpenglow/Binding.md)[]</span> {: #bindings data-toc-label='bindings' }

(readonly)



## Source Code

See the source for [BindGroupLayout.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BindGroupLayout.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
