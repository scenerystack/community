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

#### new MainScanModule( providedOptions : <span style="font-weight: 400;">[MainScanModuleOptions](../alpenglow/MainScanModule.md#MainScanModuleOptions)&lt;T&gt;</span> ) {: #MainScanModule-constructor data-toc-label='new MainScanModule' }

### Instance Methods



### Instance Properties

#### input : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #input data-toc-label='input' }

(readonly)

#### output : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #output data-toc-label='output' }

(readonly)

#### reduction : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #reduction data-toc-label='reduction' }

(readonly)

#### scannedReduction : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #scannedReduction data-toc-label='scannedReduction' }

(readonly)

#### scannedDoubleReduction : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #scannedDoubleReduction data-toc-label='scannedDoubleReduction' }

(readonly)



## Type MainScanModuleOptions {: #MainScanModuleOptions }


```js
import type { MainScanModuleOptions } from 'scenerystack/alpenglow';
```


- **input**?: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **output**?: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **data**?: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **reduction**?: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **scannedReduction**?: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **scannedDoubleReduction**?: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [mainScanWGSLOptions](../alpenglow/mainScanWGSL.md#mainScanWGSLOptions)&lt;T&gt; &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [MainScanModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainScanModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
