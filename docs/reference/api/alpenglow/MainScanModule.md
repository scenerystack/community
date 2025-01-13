# MainScanModule

## Overview

A single level of scan (prefix sum) with configurable options.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainScanModule {: #MainScanModule }


inputSize: number

```js
import { MainScanModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainScanModule( providedOptions : <span style="font-weight: 400; opacity: 80%;">MainScanModuleOptions&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### input : <span style="font-weight: 400; opacity: 80%;">BufferArraySlot&lt;T&gt;</span> {: #input data-toc-label='input' }

(readonly)

#### output : <span style="font-weight: 400; opacity: 80%;">BufferArraySlot&lt;T&gt;</span> {: #output data-toc-label='output' }

(readonly)

#### reduction : <span style="font-weight: 400; opacity: 80%;">BufferArraySlot&lt;T&gt; | null</span> {: #reduction data-toc-label='reduction' }

(readonly)

#### scannedReduction : <span style="font-weight: 400; opacity: 80%;">BufferArraySlot&lt;T&gt; | null</span> {: #scannedReduction data-toc-label='scannedReduction' }

(readonly)

#### scannedDoubleReduction : <span style="font-weight: 400; opacity: 80%;">BufferArraySlot&lt;T&gt; | null</span> {: #scannedDoubleReduction data-toc-label='scannedDoubleReduction' }

(readonly)



## Source Code

See the source for [MainScanModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainScanModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
