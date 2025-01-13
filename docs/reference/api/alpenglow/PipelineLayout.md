# PipelineLayout

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PipelineLayout {: #PipelineLayout }


```js
import { PipelineLayout } from 'scenerystack/alpenglow';
```
### Constructor

#### new PipelineLayout( deviceContext : <span style="font-weight: 400;">[DeviceContext](../alpenglow/DeviceContext.md)</span>, bindGroupLayouts : <span style="font-weight: 400;">[BindGroupLayout](../alpenglow/BindGroupLayout.md)[]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### hasBindingWithSlot( slot : <span style="font-weight: 400;">[ResourceSlot](../alpenglow/ResourceSlot.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasBindingWithSlot data-toc-label='hasBindingWithSlot' }

#### getBindingFromSlot( slot : <span style="font-weight: 400;">[ResourceSlot](../alpenglow/ResourceSlot.md)</span> ) : <span style="font-weight: 400;">[Binding](../alpenglow/Binding.md)</span> {: #getBindingFromSlot data-toc-label='getBindingFromSlot' }

### Instance Properties

#### layout : <span style="font-weight: 400;">GPUPipelineLayout</span> {: #layout data-toc-label='layout' }

(readonly)



## Source Code

See the source for [PipelineLayout.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/PipelineLayout.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
