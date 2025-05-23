# TiledTwoPassModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/TiledTwoPassModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/TiledTwoPassModule.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TiledTwoPassModule {: #TiledTwoPassModule }


inputSize: TiledTwoPassRunSize

```js
import { TiledTwoPassModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new TiledTwoPassModule( providedOptions : <span style="font-weight: 400;">[TiledTwoPassModuleOptions](../alpenglow/TiledTwoPassModule.md#TiledTwoPassModuleOptions)</span> ) {: #TiledTwoPassModule-constructor data-toc-label='new TiledTwoPassModule' }

### Instance Methods



### Instance Properties

#### config : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;</span> {: #config data-toc-label='config' }

(readonly)

#### initialRenderableFaces : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassInitialRenderableFace](../alpenglow/TwoPassInitialRenderableFace.md)[]&gt;</span> {: #initialRenderableFaces data-toc-label='initialRenderableFaces' }

(readonly)

#### initialEdges : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;</span> {: #initialEdges data-toc-label='initialEdges' }

(readonly)

#### renderProgramInstructions : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;</span> {: #renderProgramInstructions data-toc-label='renderProgramInstructions' }

(readonly)

#### output : <span style="font-weight: 400;">[TextureViewSlot](../alpenglow/TextureViewSlot.md)</span> {: #output data-toc-label='output' }

(readonly)

#### initializeAddressesModule : <span style="font-weight: 400;">[MainTwoPassInitializeAddressesModule](../alpenglow/MainTwoPassInitializeAddressesModule.md)</span> {: #initializeAddressesModule data-toc-label='initializeAddressesModule' }

(readonly)

#### tileModule : <span style="font-weight: 400;">[MainTwoPassTileModule](../alpenglow/MainTwoPassTileModule.md)</span> {: #tileModule data-toc-label='tileModule' }

(readonly)

#### twoPassModule : <span style="font-weight: 400;">[TwoPassModule](../alpenglow/TwoPassModule.md)</span> {: #twoPassModule data-toc-label='twoPassModule' }

(readonly)



## Type TiledTwoPassModuleOptions {: #TiledTwoPassModuleOptions }


```js
import type { TiledTwoPassModuleOptions } from 'scenerystack/alpenglow';
```


[PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)



## Type TiledTwoPassRunSize {: #TiledTwoPassRunSize }


```js
import type { TiledTwoPassRunSize } from 'scenerystack/alpenglow';
```


- **numTiles**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numBins**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numInitialRenderableFaces**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [TiledTwoPassModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/TiledTwoPassModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
