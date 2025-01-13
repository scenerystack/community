# TiledTwoPassModule

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TiledTwoPassModule {: #TiledTwoPassModule }


inputSize: TiledTwoPassRunSize

```js
import { TiledTwoPassModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new TiledTwoPassModule( providedOptions : <span style="font-weight: 400; opacity: 80%;">TiledTwoPassModuleOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### config : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassConfig&gt;</span> {: #config data-toc-label='config' }

(readonly)

#### initialRenderableFaces : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassInitialRenderableFace[]&gt;</span> {: #initialRenderableFaces data-toc-label='initialRenderableFaces' }

(readonly)

#### initialEdges : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;LinearEdge[]&gt;</span> {: #initialEdges data-toc-label='initialEdges' }

(readonly)

#### renderProgramInstructions : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;number[]&gt;</span> {: #renderProgramInstructions data-toc-label='renderProgramInstructions' }

(readonly)

#### output : <span style="font-weight: 400; opacity: 80%;">TextureViewSlot</span> {: #output data-toc-label='output' }

(readonly)

#### initializeAddressesModule : <span style="font-weight: 400; opacity: 80%;">MainTwoPassInitializeAddressesModule</span> {: #initializeAddressesModule data-toc-label='initializeAddressesModule' }

(readonly)

#### tileModule : <span style="font-weight: 400; opacity: 80%;">MainTwoPassTileModule</span> {: #tileModule data-toc-label='tileModule' }

(readonly)

#### twoPassModule : <span style="font-weight: 400; opacity: 80%;">TwoPassModule</span> {: #twoPassModule data-toc-label='twoPassModule' }

(readonly)



## Source Code

See the source for [TiledTwoPassModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/TiledTwoPassModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
