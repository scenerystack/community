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
<br>  =&gt; {-1, 0, 1} (i32)
- **greaterThan**?: ( ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  used (sometimes) instead of compare if provided
- **lessThanOrEqual**?: ( ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **workgroupA**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  var&lt;workgroup&gt; array&lt;T,sharedMemorySize&gt;
- **workgroupB**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **loadFromA**: ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT)
- **loadFromB**: ( indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT)
- **storeOutput**: ( indexOutput: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), value: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)
<br>  TODO: we should provide either storeOutput OR setFromA/setFromB. In one case, we set from our shared memory,
  TODO: but in the other case, it is a global memory (say that we're sorting objects that are much larger?)
  TODO: would that ALWAYS have worse memory performance? I mean, we're dealing with "global" indices anyway, so
  TODO: it isn't a huge lift.
  TODO: For more clarity, if setFromA/setFromB are provided (AND we don't have storeOutput), we'll use those
  TODO: to directly move things from global memory to global memory. This WILL require more reads, HOWEVER
  TODO: it will also enable us to have loadFromX methods return a much smaller object used in shared memory.
  TODO: It is unclear how much of a performance win this would be, so I haven't implemented it yet.
  TODO:   setFromA, // ( indexOutput, indexA ) =&gt; void
  TODO:   setFromB, // ( indexOutput, indexB ) =&gt; void
- **blockOutputSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **sharedMemorySize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  should be a divisor of blockOutputSize, and ideally a multiple of workgroupSize
- **atomicConsumed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  controls whether we use atomics to track consumed_a/consumed_b, OR whether we compute another corank
- &amp; [WorkgroupSizable](../alpenglow/WGSLUtils.md#WorkgroupSizable)




## Source Code

See the source for [mergeWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mergeWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
