# mainMergeWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainMergeWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainMergeWGSL.ts) for the most up-to-date information.

## Overview

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainMergeWGSLOptions {: #mainMergeWGSLOptions }


```js
import type { mainMergeWGSLOptions } from 'scenerystack/alpenglow';
```


- **inputA**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **inputB**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **output**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **workgroupSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **blockOutputSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **sharedMemorySize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  should be a divisor of blockOutputSize, and ideally a multiple of workgroupSize
- **order**: [CompareOrder](../alpenglow/ConcreteType.md#CompareOrder)&lt;T&gt;
- **lengthExpressionA**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **lengthExpressionB**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)




## Source Code

See the source for [mainMergeWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainMergeWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
