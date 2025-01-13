# PipelineLayout

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PipelineLayout {: #PipelineLayout }


```js
import { PipelineLayout } from 'scenerystack/alpenglow';
```
### Constructor

#### new PipelineLayout( deviceContext : <span style="font-weight: 400; opacity: 80%;">DeviceContext</span>, bindGroupLayouts : <span style="font-weight: 400; opacity: 80%;">BindGroupLayout[]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### hasBindingWithSlot( slot : <span style="font-weight: 400; opacity: 80%;">ResourceSlot</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasBindingWithSlot data-toc-label='hasBindingWithSlot' }

#### getBindingFromSlot( slot : <span style="font-weight: 400; opacity: 80%;">ResourceSlot</span> ) : <span style="font-weight: 400; opacity: 80%;">Binding</span> {: #getBindingFromSlot data-toc-label='getBindingFromSlot' }

### Instance Properties

#### layout : <span style="font-weight: 400; opacity: 80%;">GPUPipelineLayout</span> {: #layout data-toc-label='layout' }

(readonly)



## Source Code

See the source for [PipelineLayout.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/PipelineLayout.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
