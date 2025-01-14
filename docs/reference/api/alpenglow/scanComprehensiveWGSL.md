# scanComprehensiveWGSL

## Overview

All of the needed logic for a raked workgroup scan (including the logic to load and store the data).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type scanComprehensiveWGSLOptions {: #scanComprehensiveWGSLOptions }


```js
import type { scanComprehensiveWGSLOptions } from 'scenerystack/alpenglow';
```


- **input**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  varname of input var&lt;storage&gt; array&lt;{valueType}&gt;
- **output**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  varname of output var&lt;storage&gt; array&lt;{valueType}&gt; (can be the same as the input)
- **scratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  varname of output var&lt;workgroup&gt; array&lt;${valueType}, ${workgroupSize * grainSize}&gt;
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **exclusive**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **getAddedValue**?: ( ( varName: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  null | ( varName ) =&gt; statements - should write a value to be added to everything into the specific variable name
  This is designed to be used for multi-level scans, where you essentially want to add an "offset" value to
  everything in the workgroup.
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; [OptionalLengthExpressionable](../alpenglow/WGSLUtils.md#OptionalLengthExpressionable) &amp; [GlobalIndexable](../alpenglow/WGSLUtils.md#GlobalIndexable) &amp; [WorkgroupIndexable](../alpenglow/WGSLUtils.md#WorkgroupIndexable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable) &amp; Pick&lt;[scanRakedWGSLOptions](../alpenglow/scanRakedWGSL.md#scanRakedWGSLOptions)&lt;T&gt;, "storeReduction" | "stripeReducedOutput" | "addedValueNeedsWorkgroupBarrier"&gt; &amp; Pick&lt;[loadMultipleWGSLOptions](../alpenglow/loadMultipleWGSL.md#loadMultipleWGSLOptions)&lt;T&gt;, "factorOutSubexpressions" | "inputOrder" | "inputAccessOrder"&gt;




## Source Code

See the source for [scanComprehensiveWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/scanComprehensiveWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
