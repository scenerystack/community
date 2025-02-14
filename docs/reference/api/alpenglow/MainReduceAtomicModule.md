# MainReduceAtomicModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainReduceAtomicModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainReduceAtomicModule.ts) for the most up-to-date information.

## Overview

Meant for reduction on u32/i32 values (could be generalized to things that can be represented with multiple atomic
values, haven't run into that yet).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainReduceAtomicModule {: #MainReduceAtomicModule }


inputSize: number

```js
import { MainReduceAtomicModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainReduceAtomicModule( providedOptions : <span style="font-weight: 400;">[MainReduceAtomicModuleOptions](../alpenglow/MainReduceAtomicModule.md#MainReduceAtomicModuleOptions)&lt;T&gt;</span> ) {: #MainReduceAtomicModule-constructor data-toc-label='new MainReduceAtomicModule' }

### Instance Methods



### Instance Properties

#### input : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #input data-toc-label='input' }

(readonly)

#### output : <span style="font-weight: 400;">[BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;</span> {: #output data-toc-label='output' }

(readonly)



## Type MainReduceAtomicModuleOptions {: #MainReduceAtomicModuleOptions }


```js
import type { MainReduceAtomicModuleOptions } from 'scenerystack/alpenglow';
```


- **input**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- **output**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;
- &amp; [mainReduceAtomicWGSLOptions](../alpenglow/mainReduceAtomicWGSL.md#mainReduceAtomicWGSLOptions)&lt;T&gt; &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [MainReduceAtomicModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainReduceAtomicModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
