# Resource

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Resource {: #Resource }


```js
import { Resource } from 'scenerystack/alpenglow';
```
### Constructor

#### new Resource( resource : <span style="font-weight: 400; opacity: 80%;">GPUBuffer | GPUTextureView</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getBindGroupEntry( binding : <span style="font-weight: 400; opacity: 80%;">Binding</span> ) : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupEntry</span> {: #getBindGroupEntry data-toc-label='getBindGroupEntry' }

TODO: consider modifying to just BufferLocation or bindingIndex

#### toDebugString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toDebugString data-toc-label='toDebugString' }

### Instance Properties

#### id : <span style="font-weight: 400; opacity: 80%;">number</span> {: #id data-toc-label='id' }

(readonly)



## Source Code

See the source for [Resource.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/compute/Resource.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
