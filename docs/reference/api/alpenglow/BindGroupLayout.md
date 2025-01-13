# BindGroupLayout

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BindGroupLayout {: #BindGroupLayout }


```js
import { BindGroupLayout } from 'scenerystack/alpenglow';
```
### Constructor

#### new BindGroupLayout( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, name : <span style="font-weight: 400; opacity: 80%;">string</span>, groupIndex : <span style="font-weight: 400; opacity: 80%;">number</span>, bindingDescriptors : <span style="font-weight: 400; opacity: 80%;">BindingDescriptor[]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### hasBindingWithSlot( slot : <span style="font-weight: 400; opacity: 80%;">ResourceSlot</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasBindingWithSlot data-toc-label='hasBindingWithSlot' }

#### getBindingFromSlot( slot : <span style="font-weight: 400; opacity: 80%;">ResourceSlot</span> ) : <span style="font-weight: 400; opacity: 80%;">Binding | null</span> {: #getBindingFromSlot data-toc-label='getBindingFromSlot' }

### Instance Properties

#### layout : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupLayout</span> {: #layout data-toc-label='layout' }

(readonly)

#### bindings : <span style="font-weight: 400; opacity: 80%;">Binding[]</span> {: #bindings data-toc-label='bindings' }

(readonly)



## Source Code

See the source for [BindGroupLayout.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/BindGroupLayout.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
