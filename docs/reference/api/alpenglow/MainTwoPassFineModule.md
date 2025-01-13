# MainTwoPassFineModule

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainTwoPassFineModule {: #MainTwoPassFineModule }


inputSize: number - numBins (!)

```js
import { MainTwoPassFineModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainTwoPassFineModule( providedOptions : <span style="font-weight: 400; opacity: 80%;">MainTwoPassFineModuleOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### config : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassConfig&gt;</span> {: #config data-toc-label='config' }

(readonly)

#### addresses : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;number[]&gt;</span> {: #addresses data-toc-label='addresses' }

(readonly)

#### fineRenderableFaces : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;TwoPassFineRenderableFace[]&gt;</span> {: #fineRenderableFaces data-toc-label='fineRenderableFaces' }

(readonly)

#### renderProgramInstructions : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;number[]&gt;</span> {: #renderProgramInstructions data-toc-label='renderProgramInstructions' }

(readonly)

#### edges : <span style="font-weight: 400; opacity: 80%;">BufferSlot&lt;LinearEdge[]&gt;</span> {: #edges data-toc-label='edges' }

(readonly)

#### output : <span style="font-weight: 400; opacity: 80%;">TextureViewSlot</span> {: #output data-toc-label='output' }

(readonly)



## Source Code

See the source for [MainTwoPassFineModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/rasterize-two-pass/MainTwoPassFineModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
