# scanRakedWGSL

## Overview

Raked workgroup scan. Assumes the existence of things in the scratch array.

WILL NEED workgroupBarrier() before/after (before if needed for scratch, after for scratch)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type scanRakedWGSLOptions {: #scanRakedWGSLOptions }


```js
import type { scanRakedWGSLOptions } from 'scenerystack/alpenglow';
```
- **scratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **direction**?: "left" | "right"
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **storeReduction**?: ( ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), expr: [WGSLExpression](../alpenglow/WGSLString.md#WGSLExpression) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **stripeReducedOutput**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **exclusive**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **getAddedValue**?: ( ( varName: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **addedValueNeedsWorkgroupBarrier**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; [WorkgroupIndexable](../alpenglow/WGSLUtils.md#WorkgroupIndexable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable)




## Source Code

See the source for [scanRakedWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/scanRakedWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
