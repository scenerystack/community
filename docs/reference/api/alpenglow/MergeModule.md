# MergeModule

## Overview

Merges two sorted arrays into a single sorted array.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MergeModule {: #MergeModule }


outputSize: number (sum of inputASize and inputBSize)

```js
import { MergeModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MergeModule( providedOptions : <span style="font-weight: 400;">[MergeModuleOptions](../alpenglow/MergeModule.md#MergeModuleOptions)&lt;T&gt;</span> ) {: #MergeModule-constructor data-toc-label='new MergeModule' }

### Instance Methods



### Instance Properties

#### inputA : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #inputA data-toc-label='inputA' }

(readonly)

#### inputB : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #inputB data-toc-label='inputB' }

(readonly)

#### output : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #output data-toc-label='output' }

(readonly)



## Type MergeModuleOptions {: #MergeModuleOptions }


```js
import type { MergeModuleOptions } from 'scenerystack/alpenglow';
```


- **inputA**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- **inputB**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- **output**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- &amp; [mainMergeWGSLOptions](../alpenglow/mainMergeWGSL.md#mainMergeWGSLOptions)&lt;T&gt; &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [MergeModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MergeModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
