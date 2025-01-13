# MainTwoPassTileModule

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainTwoPassTileModule {: #MainTwoPassTileModule }


inputSize: number - numRenderableFaces * numTiles

```js
import { MainTwoPassTileModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainTwoPassTileModule( providedOptions : <span style="font-weight: 400; opacity: 80%;">MainTwoPassTileModuleOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### config : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassConfig&gt;</span> {: #config data-toc-label='config' }

(readonly)

input

#### initialRenderableFaces : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassInitialRenderableFace[]&gt;</span> {: #initialRenderableFaces data-toc-label='initialRenderableFaces' }

(readonly)

#### initialEdges : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;LinearEdge[]&gt;</span> {: #initialEdges data-toc-label='initialEdges' }

(readonly)

#### coarseRenderableFaces : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassCoarseRenderableFace[]&gt;</span> {: #coarseRenderableFaces data-toc-label='coarseRenderableFaces' }

(readonly)

output

#### coarseEdges : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;LinearEdge[]&gt;</span> {: #coarseEdges data-toc-label='coarseEdges' }

(readonly)

#### addresses : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;number[]&gt;</span> {: #addresses data-toc-label='addresses' }

(readonly)



## Source Code

See the source for [MainTwoPassTileModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassTileModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
