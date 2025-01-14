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
<br>  varname of var&lt;workgroup&gt; array&lt;${binaryOp.type.valueType}, ${workgroupSize * grainSize}&gt;
- **direction**?: "left" | "right"
<br>  The direction of the scan. For instance, a left inclusive scan of [ 1, 2, 3, 4 ] is [ 1, 3, 6, 10 ],
  but a right incluive scan is [ 10, 9, 7, 4 ] (just scans in the other direction)
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **storeReduction**?: ( ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), expr: [WGSLExpression](../alpenglow/WGSLString.md#WGSLExpression) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  null | ( index expr, expr: T ) =&gt; statements - Stores out the "fully reduced" value
- **stripeReducedOutput**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether we should stripe the reduced output (so that each workgroup has a reduced value)
- **exclusive**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  boolean (whether the scan should be exclusive - otherwise it is inclusive).
  e.g. an inclusive left scan of [ 1, 2, 3, 4 ] is [ 1, 3, 6, 10 ], whereas an exclusive left scan is [ 0, 1, 3, 6 ]
- **getAddedValue**?: ( ( varName: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  null | ( varName ) =&gt; statements - should write a value to be added to everything into the specific variable name
  This is designed to be used for multi-level scans, where you essentially want to add an "offset" value to
  everything in the workgroup.
- **addedValueNeedsWorkgroupBarrier**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  We can opt out of the extra workgroupBarrier if getAddedValue executes one itself (say, for atomics).
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; [WorkgroupIndexable](../alpenglow/WGSLUtils.md#WorkgroupIndexable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable)




## Source Code

See the source for [scanRakedWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/scanRakedWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
