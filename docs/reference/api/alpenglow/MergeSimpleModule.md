# MergeSimpleModule

## Overview

Merges two sorted arrays into a single sorted array (with a simpler algorithm than MergeModule).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MergeSimpleModule {: #MergeSimpleModule }


outputSize: number (sum of inputASize and inputBSize)

```js
import { MergeSimpleModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new MergeSimpleModule( providedOptions : <span style="font-weight: 400;">[MergeSimpleModuleOptions](../alpenglow/MergeSimpleModule.md#MergeSimpleModuleOptions)&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Instance Properties

#### inputA : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #inputA data-toc-label='inputA' }

(readonly)

#### inputB : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #inputB data-toc-label='inputB' }

(readonly)

#### output : <span style="font-weight: 400;">[BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;</span> {: #output data-toc-label='output' }

(readonly)



## Type MergeSimpleModuleOptions {: #MergeSimpleModuleOptions }


```js
import type { MergeSimpleModuleOptions } from 'scenerystack/alpenglow';
```


- **inputA**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- **inputB**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- **output**: [BufferArraySlot](../alpenglow/BufferArraySlot.md)&lt;T&gt;
- &amp; [mainMergeSimpleWGSLOptions](../alpenglow/mainMergeSimpleWGSL.md#mainMergeSimpleWGSLOptions)&lt;T&gt; &amp; [PipelineBlueprintOptions](../alpenglow/PipelineBlueprint.md#PipelineBlueprintOptions)




## Source Code

See the source for [MergeSimpleModule.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/modules/gpu/MergeSimpleModule.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
