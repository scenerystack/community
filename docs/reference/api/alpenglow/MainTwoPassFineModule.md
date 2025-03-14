# MainTwoPassFineModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassFineModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassFineModule.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainTwoPassFineModule {: #MainTwoPassFineModule }


inputSize: number - numBins (!)

```js
import { MainTwoPassFineModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainTwoPassFineModule( providedOptions : <span style="font-weight: 400;">[MainTwoPassFineModuleOptions](../alpenglow/MainTwoPassFineModule.md#MainTwoPassFineModuleOptions)</span> ) {: #MainTwoPassFineModule-constructor data-toc-label='new MainTwoPassFineModule' }

### Instance Methods



### Instance Properties

#### config : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;</span> {: #config data-toc-label='config' }

(readonly)

#### addresses : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #addresses data-toc-label='addresses' }

(readonly)

#### fineRenderableFaces : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassFineRenderableFace](../alpenglow/TwoPassFineRenderableFace.md)[]&gt;</span> {: #fineRenderableFaces data-toc-label='fineRenderableFaces' }

(readonly)

#### renderProgramInstructions : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #renderProgramInstructions data-toc-label='renderProgramInstructions' }

(readonly)

#### edges : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;</span> {: #edges data-toc-label='edges' }

(readonly)

#### output : <span style="font-weight: 400;">[TextureViewSlot](../alpenglow/TextureViewSlot.md)</span> {: #output data-toc-label='output' }

(readonly)



## Type MainTwoPassFineModuleOptions {: #MainTwoPassFineModuleOptions }


```js
import type { MainTwoPassFineModuleOptions } from 'scenerystack/alpenglow';
```


- **config**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;
- **addresses**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- **fineRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassFineRenderableFace](../alpenglow/TwoPassFineRenderableFace.md)[]&gt;
- **renderProgramInstructions**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- **edges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **output**: [TextureViewSlot](../alpenglow/TextureViewSlot.md)
- &amp; [mainTwoPassFineWGSLOptions](../alpenglow/mainTwoPassFineWGSL.md#mainTwoPassFineWGSLOptions) &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [MainTwoPassFineModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassFineModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
