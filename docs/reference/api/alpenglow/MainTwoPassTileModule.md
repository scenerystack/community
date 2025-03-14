# MainTwoPassTileModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassTileModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassTileModule.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainTwoPassTileModule {: #MainTwoPassTileModule }


inputSize: number - numRenderableFaces * numTiles

```js
import { MainTwoPassTileModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainTwoPassTileModule( providedOptions : <span style="font-weight: 400;">[MainTwoPassTileModuleOptions](../alpenglow/MainTwoPassTileModule.md#MainTwoPassTileModuleOptions)</span> ) {: #MainTwoPassTileModule-constructor data-toc-label='new MainTwoPassTileModule' }

### Instance Methods



### Instance Properties

#### config : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;</span> {: #config data-toc-label='config' }

(readonly)

input

#### initialRenderableFaces : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassInitialRenderableFace](../alpenglow/TwoPassInitialRenderableFace.md)[]&gt;</span> {: #initialRenderableFaces data-toc-label='initialRenderableFaces' }

(readonly)

#### initialEdges : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;</span> {: #initialEdges data-toc-label='initialEdges' }

(readonly)

#### coarseRenderableFaces : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassCoarseRenderableFace](../alpenglow/TwoPassCoarseRenderableFace.md)[]&gt;</span> {: #coarseRenderableFaces data-toc-label='coarseRenderableFaces' }

(readonly)

output

#### coarseEdges : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;</span> {: #coarseEdges data-toc-label='coarseEdges' }

(readonly)

#### addresses : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #addresses data-toc-label='addresses' }

(readonly)



## Type MainTwoPassTileModuleOptions {: #MainTwoPassTileModuleOptions }


```js
import type { MainTwoPassTileModuleOptions } from 'scenerystack/alpenglow';
```


- **config**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;
<br>  input
- **initialRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassInitialRenderableFace](../alpenglow/TwoPassInitialRenderableFace.md)[]&gt;
- **initialEdges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **coarseRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassCoarseRenderableFace](../alpenglow/TwoPassCoarseRenderableFace.md)[]&gt;
<br>  output
- **coarseEdges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **addresses**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- &amp; [mainTwoPassTileWGSLOptions](../alpenglow/mainTwoPassTileWGSL.md#mainTwoPassTileWGSLOptions) &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [MainTwoPassTileModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassTileModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
