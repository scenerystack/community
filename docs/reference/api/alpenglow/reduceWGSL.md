# reduceWGSL

## Overview

A template that performs a reduce operation on a single workgroup. The value will be valid at local_id.x === 0.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type reduceWGSLOptions {: #reduceWGSLOptions }


```js
import type { reduceWGSLOptions } from 'scenerystack/alpenglow';
```
- **value**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **scratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **mapScratchIndex**?: ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **convergent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **scratchPreloaded**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **valuePreloaded**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [WorkgroupSizable](../alpenglow/WGSLUtils.md#WorkgroupSizable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable)




## Source Code

See the source for [reduceWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/reduceWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
