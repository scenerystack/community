# scanWGSL

## Overview

A template that performs a scan operation using workgroup memory on a single workgroup (one value per thread).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type scanWGSLOptions {: #scanWGSLOptions }


```js
import type { scanWGSLOptions } from 'scenerystack/alpenglow';
```
- **value**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **scratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **direction**?: "left" | "right"
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **mapScratchIndex**?: ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **exclusive**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **needsValidScratch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **scratchPreloaded**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **valuePreloaded**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [WorkgroupSizable](../alpenglow/WGSLUtils.md#WorkgroupSizable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable)




## Source Code

See the source for [scanWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/scanWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
