# reduceWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/reduceWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/reduceWGSL.ts) for the most up-to-date information.

## Overview

A template that performs a reduce operation on a single workgroup. The value will be valid at local_id.x === 0.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type reduceWGSLOptions {: #reduceWGSLOptions }


```js
import type { reduceWGSLOptions } from 'scenerystack/alpenglow';
```


- **value**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  the "input" and "output" variable name
- **scratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  name for var&lt;workgroup&gt; array&lt;T, workgroupSize&gt; TODO: consider abstracting, so we could run multiple reduces
  TODO: concurrently
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **mapScratchIndex**?: ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
<br>  allows overriding the index used for the scratch array, so that we can run multiple smaller loads in the same
  workgroup
- **convergent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether we should reduce in a convergent order. This will reduce control divergence when running, and will
  potentially allow warps to exit early. This should result in a speed-up, but the data either needs to have a
  commutative combine operation, OR the order should be in a "convergent" order. That would mean that for each data
  chunk read by each workgroup, the indices are bit-reversed (e.g. if we have a workgroup size of 256, then we are
  reversing the last 8 bits of the index, thus the first element should be stored at index 0, the second element at
  index 128, the third element at index 64, etc.). See get_convergent_index for more information.
  For instance, the order of reduction of the first 16 hex digits (in a convergent order) would be
  084c2a6e195d3b7f.
- **scratchPreloaded**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, we won't need to load the value INTO the scratch array
- **valuePreloaded**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, we won't need to load the value FROM the scratch array
- &amp; [WorkgroupSizable](../alpenglow/WGSLUtils.md#WorkgroupSizable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable)




## Source Code

See the source for [reduceWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/reduceWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
