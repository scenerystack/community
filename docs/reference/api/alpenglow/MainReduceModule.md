# MainReduceModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainReduceModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainReduceModule.ts) for the most up-to-date information.

## Overview

A single level of standalone reduction.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainReduceModule {: #MainReduceModule }


inputSize: number

```js
import { MainReduceModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainReduceModule( providedOptions : <span style="font-weight: 400;">[MainReduceModuleOptions](../alpenglow/MainReduceModule.md#MainReduceModuleOptions)&lt;T&gt;</span> ) {: #MainReduceModule-constructor data-toc-label='new MainReduceModule' }

### Instance Methods



### Instance Properties

#### input : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #input data-toc-label='input' }

(readonly)

#### output : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #output data-toc-label='output' }

(readonly)



## Type MainReduceModuleOptions {: #MainReduceModuleOptions }


```js
import type { MainReduceModuleOptions } from 'scenerystack/alpenglow';
```


- **input**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- **output**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- &amp; [mainReduceWGSLOptions](../alpenglow/mainReduceWGSL.md#mainReduceWGSLOptions)&lt;T&gt; &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [MainReduceModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainReduceModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
