# mergeWGSL

## Overview

A template that merges together two sorted arrays into a single sorted array.

This version uses block-level loading (for memory coalescing) and circular buffers noted in
"Programming Massively Parallel Processors" by Hwu, Kirk and Hajj.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mergeWGSLOptions {: #mergeWGSLOptions }


```js
import type { mergeWGSLOptions } from 'scenerystack/alpenglow';
```
- **lengthA**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **lengthB**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **compare**: ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionI32](../alpenglow/WGSLString.md#WGSLExpressionI32)
- **greaterThan**?: ( ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **lessThanOrEqual**?: ( ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **workgroupA**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **workgroupB**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **loadFromA**: ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT)
- **loadFromB**: ( indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT)
- **storeOutput**: ( indexOutput: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), value: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)
- **blockOutputSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **sharedMemorySize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **atomicConsumed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [WorkgroupSizable](../alpenglow/WGSLUtils.md#WorkgroupSizable)




## Source Code

See the source for [mergeWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mergeWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
