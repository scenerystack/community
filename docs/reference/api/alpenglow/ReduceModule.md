# ReduceModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/ReduceModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/ReduceModule.ts) for the most up-to-date information.

## Overview

A full reduction, with the method of reduction chosen based on the type and configuration.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class ReduceModule {: #ReduceModule }


inputSize: number

```js
import { ReduceModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new ReduceModule( providedOptions : <span style="font-weight: 400;">[ReduceModuleOptions](../alpenglow/ReduceModule.md#ReduceModuleOptions)&lt;T&gt;</span> ) {: #ReduceModule-constructor data-toc-label='new ReduceModule' }

### Instance Methods



### Instance Properties

#### input : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #input data-toc-label='input' }

(readonly)

#### output : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #output data-toc-label='output' }

(readonly)

#### slots : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;[]</span> {: #slots data-toc-label='slots' }

(readonly)

#### internalSlots : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;[]</span> {: #internalSlots data-toc-label='internalSlots' }

(readonly)



## Type ReduceModuleOptions {: #ReduceModuleOptions }


```js
import type { ReduceModuleOptions } from 'scenerystack/alpenglow';
```


[PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)



## Source Code

See the source for [ReduceModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/ReduceModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
