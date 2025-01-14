# mainRadixHistogramWGSL

## Overview

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainRadixHistogramWGSLOptions {: #mainRadixHistogramWGSLOptions }


```js
import type { mainRadixHistogramWGSLOptions } from 'scenerystack/alpenglow';
```
- **input**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **output**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- **workgroupSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **grainSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **order**: [BitOrder](../alpenglow/ConcreteType.md#BitOrder)&lt;T&gt;
- **pass**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bitsPerPass**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lengthExpression**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)




## Source Code

See the source for [mainRadixHistogramWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainRadixHistogramWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
