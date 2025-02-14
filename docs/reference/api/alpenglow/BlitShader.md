# BlitShader

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/BlitShader.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/BlitShader.ts) for the most up-to-date information.

## Overview

Shader for blitting things to a Canvas if needed

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BlitShader {: #BlitShader }


```js
import { BlitShader } from 'scenerystack/alpenglow';
```
### Constructor

#### new BlitShader( device : <span style="font-weight: 400;">GPUDevice</span>, format : <span style="font-weight: 400;">GPUTextureFormat</span> ) {: #BlitShader-constructor data-toc-label='new BlitShader' }

### Instance Methods

#### dispatch( encoder : <span style="font-weight: 400;">GPUCommandEncoder</span>, outTextureView : <span style="font-weight: 400;">GPUTextureView</span>, sourceTextureView : <span style="font-weight: 400;">GPUTextureView</span> ) {: #dispatch data-toc-label='dispatch' }

### Instance Properties

#### module : <span style="font-weight: 400;">GPUShaderModule</span> {: #module data-toc-label='module' }

(readonly)

#### bindGroupLayout : <span style="font-weight: 400;">GPUBindGroupLayout</span> {: #bindGroupLayout data-toc-label='bindGroupLayout' }

(readonly)

#### pipeline : <span style="font-weight: 400;">GPURenderPipeline</span> {: #pipeline data-toc-label='pipeline' }

(readonly)



## Source Code

See the source for [BlitShader.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/BlitShader.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
