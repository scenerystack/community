# loadMultipleWGSL

## Overview

Loads data (usually from main memory) with multiple values per thread, storing them typically in shared memory.
Notably supports larger sizes than the workgroup size.

grainSize controls how many items are loaded per thread.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type loadMultipleWGSLOptions {: #loadMultipleWGSLOptions }


```js
import type { loadMultipleWGSLOptions } from 'scenerystack/alpenglow';
```
- **loadExpression**?: ( ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **loadStatements**?: ( ( varName: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName), index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **storeStatements**: ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), value: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)
- **type**: [ConcreteType](../alpenglow/ConcreteType.md)&lt;T&gt;
- **outOfRangeValue**?: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **inputOrder**: "blocked" | "striped"
- **inputAccessOrder**?: "blocked" | "striped"
- **factorOutSubexpressions**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; [GlobalIndexable](../alpenglow/WGSLUtils.md#GlobalIndexable) &amp; [WorkgroupIndexable](../alpenglow/WGSLUtils.md#WorkgroupIndexable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable) &amp; [OptionalLengthExpressionable](../alpenglow/WGSLUtils.md#OptionalLengthExpressionable)




## Source Code

See the source for [loadMultipleWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/loadMultipleWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
