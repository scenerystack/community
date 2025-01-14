# mainReduceNonCommutativeWGSL

## Overview

A specialized raked reduce for when our input is non-commutative AND stored in a blocked (not striped) order.
We essentially serialize some of it (reading a workgroup-size chunk at a time, reducing it, then loading the next).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainReduceNonCommutativeWGSLOptions {: #mainReduceNonCommutativeWGSLOptions }


```js
import type { mainReduceNonCommutativeWGSLOptions } from 'scenerystack/alpenglow';
```


- **input**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **output**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
<br>  TODO: length handling?!?
- **stripeOutput**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  We can stripe the output (so the next layer of reduce can read it as striped)
- **reduceOptions**?: StrictOmit&lt;[reduceWGSLOptions](../alpenglow/reduceWGSL.md#reduceWGSLOptions)&lt;T&gt;, "value" | "scratch" | "workgroupSize" | "binaryOp" | "localIndex" | "scratchPreloaded" | "valuePreloaded" | "mapScratchIndex" | "convergent"&gt;
<br>  e.g. something in the future?
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; [OptionalLengthExpressionable](../alpenglow/WGSLUtils.md#OptionalLengthExpressionable)




## Source Code

See the source for [mainReduceNonCommutativeWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainReduceNonCommutativeWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
