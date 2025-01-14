# mainRadixScatterWGSL

## Overview

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainRadixScatterWGSLOptions {: #mainRadixScatterWGSLOptions }


```js
import type { mainRadixScatterWGSLOptions } from 'scenerystack/alpenglow';
```


- **input**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **histogramOffsets**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- **output**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;T[]&gt;
- **order**: [BitOrder](../alpenglow/ConcreteType.md#BitOrder)&lt;T&gt;
- **pass**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bitsPerPass**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bitsPerInnerPass**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **innerBitVectorSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **earlyLoad**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **lengthExpression**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
<br>  TODO: get option pass-through
- **loadMultipleOptions**?: StrictOmit&lt;[loadMultipleWGSLOptions](../alpenglow/loadMultipleWGSL.md#loadMultipleWGSLOptions)&lt;T&gt;, "loadExpression" | "loadStatements" | "storeStatements" | "type" | "workgroupSize" | "grainSize" | "lengthExpression" | "outOfRangeValue" | "inputOrder" | "inputAccessOrder"&gt;
<br>  e.g. factorOutSubexpressions
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable)




## Source Code

See the source for [mainRadixScatterWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mainRadixScatterWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
