# TwoPassModule

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TwoPassModule {: #TwoPassModule }


inputSize: TwoPassRunSize

```js
import { TwoPassModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new TwoPassModule( providedOptions : <span style="font-weight: 400;">[TwoPassModuleOptions](../alpenglow/TwoPassModule.md#TwoPassModuleOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### config : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;</span> {: #config data-toc-label='config' }

(readonly)

#### coarseRenderableFaces : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassCoarseRenderableFace](../alpenglow/TwoPassCoarseRenderableFace.md)[]&gt;</span> {: #coarseRenderableFaces data-toc-label='coarseRenderableFaces' }

(readonly)

#### coarseEdges : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;</span> {: #coarseEdges data-toc-label='coarseEdges' }

(readonly)

#### renderProgramInstructions : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #renderProgramInstructions data-toc-label='renderProgramInstructions' }

(readonly)

#### output : <span style="font-weight: 400;">[TextureViewSlot](../alpenglow/TextureViewSlot.md)</span> {: #output data-toc-label='output' }

(readonly)

#### initializeAddressesModule : <span style="font-weight: 400;">[MainTwoPassInitializeAddressesModule](../alpenglow/MainTwoPassInitializeAddressesModule.md)</span> {: #initializeAddressesModule data-toc-label='initializeAddressesModule' }

(readonly)

#### coarseModule : <span style="font-weight: 400;">[MainTwoPassCoarseModule](../alpenglow/MainTwoPassCoarseModule.md)</span> {: #coarseModule data-toc-label='coarseModule' }

(readonly)

#### fineModule : <span style="font-weight: 400;">[MainTwoPassFineModule](../alpenglow/MainTwoPassFineModule.md)</span> {: #fineModule data-toc-label='fineModule' }

(readonly)



## Type TwoPassModuleOptions {: #TwoPassModuleOptions }


```js
import type { TwoPassModuleOptions } from 'scenerystack/alpenglow';
```


[PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)



## Type TwoPassRunSize {: #TwoPassRunSize }


```js
import type { TwoPassRunSize } from 'scenerystack/alpenglow';
```


- **numBins**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numCoarseRenderableFaces**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [TwoPassModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/TwoPassModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
