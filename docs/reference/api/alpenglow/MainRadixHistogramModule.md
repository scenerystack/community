# MainRadixHistogramModule

## Overview

Saves a striped histogram into memory (for use in a radix sort).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainRadixHistogramModule {: #MainRadixHistogramModule }


inputSize: number

```js
import { MainRadixHistogramModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainRadixHistogramModule( providedOptions : <span style="font-weight: 400;">[MainRadixHistogramModuleOptions](../alpenglow/MainRadixHistogramModule.md#MainRadixHistogramModuleOptions)&lt;T&gt;</span> ) {: #MainRadixHistogramModule-constructor data-toc-label='new MainRadixHistogramModule' }

### Instance Methods



### Instance Properties

#### input : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #input data-toc-label='input' }

(readonly)

#### output : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #output data-toc-label='output' }

(readonly)



## Type MainRadixHistogramModuleOptions {: #MainRadixHistogramModuleOptions }


```js
import type { MainRadixHistogramModuleOptions } from 'scenerystack/alpenglow';
```


- **input**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- **output**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;
- &amp; [mainRadixHistogramWGSLOptions](../alpenglow/mainRadixHistogramWGSL.md#mainRadixHistogramWGSLOptions)&lt;T&gt; &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [MainRadixHistogramModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainRadixHistogramModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
