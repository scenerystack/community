# RadixSortModule

## Overview

A full reduction, with the method of reduction chosen based on the type and configuration.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RadixSortModule {: #RadixSortModule }


stageInputSize: number

```js
import { RadixSortModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new RadixSortModule( providedOptions : <span style="font-weight: 400;">[RadixSortModuleOptions](../alpenglow/RadixSortModule.md#RadixSortModuleOptions)&lt;T&gt;</span> ) {: #RadixSortModule-constructor data-toc-label='new RadixSortModule' }

### Instance Methods



### Instance Properties

#### input : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #input data-toc-label='input' }

(readonly)

#### output : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #output data-toc-label='output' }

(readonly)

#### histogram : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #histogram data-toc-label='histogram' }

(readonly)

#### extraSlots : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;[]</span> {: #extraSlots data-toc-label='extraSlots' }

(readonly)

### Static Methods

#### getMaximumElementQuantity( radixWorkgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radixGrainSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, scanWorkgroupSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, scanGrainSize : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, bitsPerPass : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, scanLevels ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMaximumElementQuantity data-toc-label='getMaximumElementQuantity' }



## Type RadixSortModuleOptions {: #RadixSortModuleOptions }


```js
import type { RadixSortModuleOptions } from 'scenerystack/alpenglow';
```


[PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)



## Source Code

See the source for [RadixSortModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/RadixSortModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
