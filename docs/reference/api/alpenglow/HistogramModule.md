# HistogramModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/HistogramModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/HistogramModule.ts) for the most up-to-date information.

## Overview

Applies a histogram operation to an array.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class HistogramModule {: #HistogramModule }


inputSize: number

```js
import { HistogramModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new HistogramModule( providedOptions : <span style="font-weight: 400;">[HistogramModuleOptions](../alpenglow/HistogramModule.md#HistogramModuleOptions)&lt;T&gt;</span> ) {: #HistogramModule-constructor data-toc-label='new HistogramModule' }

### Instance Methods



### Instance Properties

#### input : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #input data-toc-label='input' }

(readonly)

#### output : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #output data-toc-label='output' }

(readonly)



## Type HistogramModuleOptions {: #HistogramModuleOptions }


```js
import type { HistogramModuleOptions } from 'scenerystack/alpenglow';
```


- **input**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- **output**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;
- &amp; [mainHistogramWGSLOptions](../alpenglow/mainHistogramWGSL.md#mainHistogramWGSLOptions)&lt;T&gt; &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [HistogramModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/HistogramModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
