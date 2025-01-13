# BlitShader

## Overview

Shader for blitting things to a Canvas if needed

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BlitShader {: #BlitShader }


```js
import { BlitShader } from 'scenerystack/alpenglow';
```
### Constructor

#### new BlitShader( device : <span style="font-weight: 400; opacity: 80%;">GPUDevice</span>, format : <span style="font-weight: 400; opacity: 80%;">GPUTextureFormat</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispatch( encoder : <span style="font-weight: 400; opacity: 80%;">GPUCommandEncoder</span>, outTextureView : <span style="font-weight: 400; opacity: 80%;">GPUTextureView</span>, sourceTextureView : <span style="font-weight: 400; opacity: 80%;">GPUTextureView</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispatch data-toc-label='dispatch' }

### Instance Properties

#### module : <span style="font-weight: 400; opacity: 80%;">GPUShaderModule</span> {: #module data-toc-label='module' }

(readonly)

#### bindGroupLayout : <span style="font-weight: 400; opacity: 80%;">GPUBindGroupLayout</span> {: #bindGroupLayout data-toc-label='bindGroupLayout' }

(readonly)

#### pipeline : <span style="font-weight: 400; opacity: 80%;">GPURenderPipeline</span> {: #pipeline data-toc-label='pipeline' }

(readonly)



## Source Code

See the source for [BlitShader.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/BlitShader.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
