# MainTwoPassCoarseModule

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainTwoPassCoarseModule {: #MainTwoPassCoarseModule }


inputSize: number - numRenderableFaces

```js
import { MainTwoPassCoarseModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainTwoPassCoarseModule( providedOptions : <span style="font-weight: 400; opacity: 80%;">MainTwoPassCoarseModuleOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### config : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassConfig&gt;</span> {: #config data-toc-label='config' }

(readonly)

input

#### coarseRenderableFaces : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassCoarseRenderableFace[]&gt;</span> {: #coarseRenderableFaces data-toc-label='coarseRenderableFaces' }

(readonly)

#### coarseEdges : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;LinearEdge[]&gt;</span> {: #coarseEdges data-toc-label='coarseEdges' }

(readonly)

#### fineRenderableFaces : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassFineRenderableFace[]&gt;</span> {: #fineRenderableFaces data-toc-label='fineRenderableFaces' }

(readonly)

output

#### fineEdges : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;LinearEdge[]&gt;</span> {: #fineEdges data-toc-label='fineEdges' }

(readonly)

#### addresses : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;number[]&gt;</span> {: #addresses data-toc-label='addresses' }

(readonly)



## Source Code

See the source for [MainTwoPassCoarseModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassCoarseModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
