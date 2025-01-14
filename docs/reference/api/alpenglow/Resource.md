# Resource

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Resource {: #Resource }


```js
import { Resource } from 'scenerystack/alpenglow';
```
### Constructor

#### new Resource( resource : <span style="font-weight: 400;">GPUBuffer | GPUTextureView</span> ) {: #Resource-constructor data-toc-label='new Resource' }

### Instance Methods

#### getBindGroupEntry( binding : <span style="font-weight: 400;">[Binding](../alpenglow/Binding.md)</span> ) : <span style="font-weight: 400;">GPUBindGroupEntry</span> {: #getBindGroupEntry data-toc-label='getBindGroupEntry' }

TODO: consider modifying to just BufferLocation or bindingIndex

#### toDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toDebugString data-toc-label='toDebugString' }

### Instance Properties

#### id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #id data-toc-label='id' }

(readonly)



## Source Code

See the source for [Resource.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Resource.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
