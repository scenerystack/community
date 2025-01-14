# mainReduceWGSL

## Overview

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainReduceWGSLOptions {: #mainReduceWGSLOptions }


```js
import type { mainReduceWGSLOptions } from 'scenerystack/alpenglow';
```


- **input**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **output**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **stripeOutput**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **convergentRemap**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **loadReducedOptions**?: StrictOmit&lt;[loadReducedWGSLOptions](../alpenglow/loadReducedWGSL.md#loadReducedWGSLOptions)&lt;T&gt;, "value" | "binaryOp" | "loadExpression" | "loadStatements" | "workgroupSize" | "grainSize" | "globalIndex" | "workgroupIndex" | "localIndex"&gt;
- **reduceOptions**?: StrictOmit&lt;[reduceWGSLOptions](../alpenglow/reduceWGSL.md#reduceWGSLOptions)&lt;T&gt;, "value" | "scratch" | "workgroupSize" | "binaryOp" | "localIndex" | "scratchPreloaded" | "valuePreloaded" | "mapScratchIndex"&gt;
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable)




## Source Code

See the source for [mainReduceWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainReduceWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
