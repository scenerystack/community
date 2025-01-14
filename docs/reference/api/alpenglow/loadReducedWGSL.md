# loadReducedWGSL

## Overview

Loads data (usually from main memory) with multiple values per thread, but reduces them into a single value per
thread. Supports multiple orders of data (both in access order and storage order).

grainSize controls how many items are loaded per thread.

For each thread, it will essentially load the first value, and then combine that with subsequently loaded values.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type loadReducedWGSLOptions {: #loadReducedWGSLOptions }


CASE: if commutative reduce, we want to load coalesced, keep striped, so we can skip extra workgroupBarriers and
      rearranging. We'll use convergent reduce anyway
CASE: if non-commutative reduce, we want to ... load blocked (?), reverseBits into convergent, and convergent-reduce?
CASE: if non-commutative reduce on striped data, we want to load striped, morph into convergent, and convergent-reduce
CASE: scan: load how the data is stored (blocked/striped), NO storeOrder, then scan.

```js
import type { loadReducedWGSLOptions } from 'scenerystack/alpenglow';
```
- **value**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **loadExpression**?: ( ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **loadStatements**?: ( ( varName: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName), index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **inputOrder**?: "blocked" | "striped"
- **inputAccessOrder**?: "blocked" | "striped"
- **sequentialReduceStyle**?: "factored" | "unfactored" | "nested"
- **useSelectIfOptional**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **orderOverride**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; [GlobalIndexable](../alpenglow/WGSLUtils.md#GlobalIndexable) &amp; [WorkgroupIndexable](../alpenglow/WGSLUtils.md#WorkgroupIndexable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable) &amp; [OptionalLengthExpressionable](../alpenglow/WGSLUtils.md#OptionalLengthExpressionable)




## Source Code

See the source for [loadReducedWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/loadReducedWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
