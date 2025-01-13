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

#### new TwoPassModule( providedOptions : <span style="font-weight: 400; opacity: 80%;">TwoPassModuleOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### config : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassConfig&gt;</span> {: #config data-toc-label='config' }

(readonly)

#### coarseRenderableFaces : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassCoarseRenderableFace[]&gt;</span> {: #coarseRenderableFaces data-toc-label='coarseRenderableFaces' }

(readonly)

#### coarseEdges : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;LinearEdge[]&gt;</span> {: #coarseEdges data-toc-label='coarseEdges' }

(readonly)

#### renderProgramInstructions : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;number[]&gt;</span> {: #renderProgramInstructions data-toc-label='renderProgramInstructions' }

(readonly)

#### output : <span style="font-weight: 400; opacity: 80%;">TextureViewSlot</span> {: #output data-toc-label='output' }

(readonly)

#### initializeAddressesModule : <span style="font-weight: 400; opacity: 80%;">MainTwoPassInitializeAddressesModule</span> {: #initializeAddressesModule data-toc-label='initializeAddressesModule' }

(readonly)

#### coarseModule : <span style="font-weight: 400; opacity: 80%;">MainTwoPassCoarseModule</span> {: #coarseModule data-toc-label='coarseModule' }

(readonly)

#### fineModule : <span style="font-weight: 400; opacity: 80%;">MainTwoPassFineModule</span> {: #fineModule data-toc-label='fineModule' }

(readonly)



## Source Code

See the source for [TwoPassModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/TwoPassModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
