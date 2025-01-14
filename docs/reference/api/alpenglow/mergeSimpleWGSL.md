# mergeSimpleWGSL

## Overview

A template that merges together two sorted arrays into a single sorted array.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mergeSimpleWGSLOptions {: #mergeSimpleWGSLOptions }


```js
import type { mergeSimpleWGSLOptions } from 'scenerystack/alpenglow';
```


- **lengthA**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **lengthB**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **compare**: ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionI32](../alpenglow/WGSLString.md#WGSLExpressionI32)
- **greaterThan**?: ( ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **lessThanOrEqual**?: ( ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionBool](../alpenglow/WGSLString.md#WGSLExpressionBool) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **setFromA**: ( indexOutput: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)
- **setFromB**: ( indexOutput: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)
- &amp; [GrainSizable](../alpenglow/WGSLUtils.md#GrainSizable) &amp; [GlobalIndexable](../alpenglow/WGSLUtils.md#GlobalIndexable)




## Source Code

See the source for [mergeSimpleWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mergeSimpleWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
