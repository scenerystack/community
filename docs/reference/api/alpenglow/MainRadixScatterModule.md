# MainRadixScatterModule

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainRadixScatterModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainRadixScatterModule.ts) for the most up-to-date information.

## Overview

Uses a scanned histogram to perform a step of the radix sort.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MainRadixScatterModule {: #MainRadixScatterModule }


inputSize: number

```js
import { MainRadixScatterModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MainRadixScatterModule( providedOptions : <span style="font-weight: 400;">[MainRadixScatterModuleOptions](../alpenglow/MainRadixScatterModule.md#MainRadixScatterModuleOptions)&lt;T&gt;</span> ) {: #MainRadixScatterModule-constructor data-toc-label='new MainRadixScatterModule' }

### Instance Methods



### Instance Properties

#### input : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #input data-toc-label='input' }

(readonly)

#### output : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #output data-toc-label='output' }

(readonly)



## Type MainRadixScatterModuleOptions {: #MainRadixScatterModuleOptions }


```js
import type { MainRadixScatterModuleOptions } from 'scenerystack/alpenglow';
```


- **input**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- **output**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- &amp; [mainRadixScatterWGSLOptions](../alpenglow/mainRadixScatterWGSL.md#mainRadixScatterWGSLOptions)&lt;T&gt; &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [MainRadixScatterModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MainRadixScatterModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
