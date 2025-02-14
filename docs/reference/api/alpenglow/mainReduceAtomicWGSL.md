# mainReduceAtomicWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainReduceAtomicWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainReduceAtomicWGSL.ts) for the most up-to-date information.

## Overview

Meant for reduction on u32/i32 values (could be generalized to things that can be represented with multiple atomic
values, haven't run into that yet).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainReduceAtomicWGSLOptions {: #mainReduceAtomicWGSLOptions }


```js
import type { mainReduceAtomicWGSLOptions } from 'scenerystack/alpenglow';
```


- **input**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **output**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T&gt;
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **loadReducedOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[loadReducedWGSLOptions](../alpenglow/loadReducedWGSL.md#loadReducedWGSLOptions)&lt;T&gt;, "value" | "binaryOp" | "loadExpression" | "loadStatements" | "workgroupSize" | "grainSize" | "globalIndex" | "workgroupIndex" | "localIndex"&gt;
<br>  e.g. length / inputOrder / inputAccessOrder / sequentialReduceStyle
- **reduceOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[reduceWGSLOptions](../alpenglow/reduceWGSL.md#reduceWGSLOptions)&lt;T&gt;, "value" | "scratch" | "workgroupSize" | "binaryOp" | "localIndex" | "scratchPreloaded" | "valuePreloaded" | "mapScratchIndex"&gt;
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable)




## Source Code

See the source for [mainReduceAtomicWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainReduceAtomicWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
