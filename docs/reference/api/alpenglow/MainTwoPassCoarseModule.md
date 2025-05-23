# MainTwoPassCoarseModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassCoarseModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassCoarseModule.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainTwoPassCoarseModule {: #MainTwoPassCoarseModule }


inputSize: number - numRenderableFaces

```js
import { MainTwoPassCoarseModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainTwoPassCoarseModule( providedOptions : <span style="font-weight: 400;">[MainTwoPassCoarseModuleOptions](../alpenglow/MainTwoPassCoarseModule.md#MainTwoPassCoarseModuleOptions)</span> ) {: #MainTwoPassCoarseModule-constructor data-toc-label='new MainTwoPassCoarseModule' }

### Instance Methods



### Instance Properties

#### config : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;</span> {: #config data-toc-label='config' }

(readonly)

input

#### coarseRenderableFaces : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassCoarseRenderableFace](../alpenglow/TwoPassCoarseRenderableFace.md)[]&gt;</span> {: #coarseRenderableFaces data-toc-label='coarseRenderableFaces' }

(readonly)

#### coarseEdges : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;</span> {: #coarseEdges data-toc-label='coarseEdges' }

(readonly)

#### fineRenderableFaces : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassFineRenderableFace](../alpenglow/TwoPassFineRenderableFace.md)[]&gt;</span> {: #fineRenderableFaces data-toc-label='fineRenderableFaces' }

(readonly)

output

#### fineEdges : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;</span> {: #fineEdges data-toc-label='fineEdges' }

(readonly)

#### addresses : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #addresses data-toc-label='addresses' }

(readonly)



## Type MainTwoPassCoarseModuleOptions {: #MainTwoPassCoarseModuleOptions }


```js
import type { MainTwoPassCoarseModuleOptions } from 'scenerystack/alpenglow';
```


- **config**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;
<br>  input
- **coarseRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassCoarseRenderableFace](../alpenglow/TwoPassCoarseRenderableFace.md)[]&gt;
- **coarseEdges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **fineRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassFineRenderableFace](../alpenglow/TwoPassFineRenderableFace.md)[]&gt;
<br>  output
- **fineEdges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **addresses**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- &amp; [mainTwoPassCoarseWGSLOptions](../alpenglow/mainTwoPassCoarseWGSL.md#mainTwoPassCoarseWGSLOptions) &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [MainTwoPassCoarseModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassCoarseModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
