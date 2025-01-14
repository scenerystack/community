# getCorankWGSL

## Overview

Co-rank function, that determines the indices into two arrays that would be at a given rank if they were sorted
together (with a binary search).

It will return the index into the first array (A), and the index into the second array (B) would just be
k - result.

See ByteEncoder.getCorank for more information.

Somewhat adapted from "Programming Massively Parallel Processors" by Hwu, Kirk and Hajj

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type getCorankWGSLOptions {: #getCorankWGSLOptions }


```js
import type { getCorankWGSLOptions } from 'scenerystack/alpenglow';
```


- **value**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  output name (u32)
- **outputIndex**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **lengthA**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **lengthB**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **compare**: ( ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionI32](../alpenglow/WGSLString.md#WGSLExpressionI32) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  TODO: can we rewrite this as a custom ORDER type?
  =&gt; {-1, 0, 1} (i32)
- **greaterThan**?: ( ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  used (sometimes) instead of compare if provided
- **lessThanOrEqual**?: ( ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




## Source Code

See the source for [getCorankWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/getCorankWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
