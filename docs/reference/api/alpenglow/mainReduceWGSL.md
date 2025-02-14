# mainReduceWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainReduceWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainReduceWGSL.ts) for the most up-to-date information.

## Overview

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainReduceWGSLOptions {: #mainReduceWGSLOptions }


```js
import type { mainReduceWGSLOptions } from 'scenerystack/alpenglow';
```


- **input**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **output**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
<br>  TODO: should we really have lengthExpression in loadReducedOptions? Also inputOrder options?!?
- **stripeOutput**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  We can stripe the output (so the next layer of reduce can read it as striped)
- **convergentRemap**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether we should remap the data to convergent indices before reducing (i.e. a convergent reduce with non-commutative
  data.
- **loadReducedOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[loadReducedWGSLOptions](../alpenglow/loadReducedWGSL.md#loadReducedWGSLOptions)&lt;T&gt;, "value" | "binaryOp" | "loadExpression" | "loadStatements" | "workgroupSize" | "grainSize" | "globalIndex" | "workgroupIndex" | "localIndex"&gt;
<br>  e.g. lengthExpression / inputOrder / inputAccessOrder / sequentialReduceStyle
- **reduceOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[reduceWGSLOptions](../alpenglow/reduceWGSL.md#reduceWGSLOptions)&lt;T&gt;, "value" | "scratch" | "workgroupSize" | "binaryOp" | "localIndex" | "scratchPreloaded" | "valuePreloaded" | "mapScratchIndex"&gt;
<br>  e.g. convergent
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable)




## Source Code

See the source for [mainReduceWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainReduceWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
