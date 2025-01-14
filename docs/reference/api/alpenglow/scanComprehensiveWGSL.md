# scanComprehensiveWGSL

## Overview

All of the needed logic for a raked workgroup scan (including the logic to load and store the data).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type scanComprehensiveWGSLOptions {: #scanComprehensiveWGSLOptions }


```js
import type { scanComprehensiveWGSLOptions } from 'scenerystack/alpenglow';
```
- **input**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **output**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **scratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **exclusive**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **getAddedValue**?: ( ( varName: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; [OptionalLengthExpressionable](../alpenglow/WGSLUtils.md#OptionalLengthExpressionable) &amp; [GlobalIndexable](../alpenglow/WGSLUtils.md#GlobalIndexable) &amp; [WorkgroupIndexable](../alpenglow/WGSLUtils.md#WorkgroupIndexable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable) &amp; Pick&lt;[scanRakedWGSLOptions](../alpenglow/scanRakedWGSL.md#scanRakedWGSLOptions)&lt;T&gt;, "storeReduction" | "stripeReducedOutput" | "addedValueNeedsWorkgroupBarrier"&gt; &amp; Pick&lt;[loadMultipleWGSLOptions](../alpenglow/loadMultipleWGSL.md#loadMultipleWGSLOptions)&lt;T&gt;, "factorOutSubexpressions" | "inputOrder" | "inputAccessOrder"&gt;




## Source Code

See the source for [scanComprehensiveWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/scanComprehensiveWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
