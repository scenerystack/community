# mainMergeSimpleWGSL

## Overview

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainMergeSimpleWGSLOptions {: #mainMergeSimpleWGSLOptions }


```js
import type { mainMergeSimpleWGSLOptions } from 'scenerystack/alpenglow';
```


- **inputA**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **inputB**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **output**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **workgroupSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **grainSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **order**: [CompareOrder](../alpenglow/ConcreteType.md#CompareOrder)&lt;T&gt;
- **lengthExpressionA**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **lengthExpressionB**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)




## Source Code

See the source for [mainMergeSimpleWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainMergeSimpleWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
