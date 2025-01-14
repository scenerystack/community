# scanWGSL

## Overview

A template that performs a scan operation using workgroup memory on a single workgroup (one value per thread).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type scanWGSLOptions {: #scanWGSLOptions }


```js
import type { scanWGSLOptions } from 'scenerystack/alpenglow';
```


- **value**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  the "input" and "output" variable name
- **scratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  name for var&lt;workgroup&gt; array&lt;T, workgroupSize&gt; TODO: consider abstracting, so we could run multiple reduces
  TODO: concurrently
- **direction**?: "left" | "right"
<br>  The direction of the scan. For instance, a left inclusive scan of [ 1, 2, 3, 4 ] is [ 1, 3, 6, 10 ],
  but a right incluive scan is [ 10, 9, 7, 4 ] (just scans in the other direction)
- **binaryOp**: [BinaryOp](../alpenglow/ConcreteType.md#BinaryOp)&lt;T&gt;
- **mapScratchIndex**?: ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
<br>  allows overriding the index used for the scratch array, so that we can run multiple smaller loads in the same
  workgroup
- **exclusive**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  boolean (whether the scan should be exclusive - otherwise it is inclusive).
  e.g. an inclusive left scan of [ 1, 2, 3, 4 ] is [ 1, 3, 6, 10 ], whereas an exclusive left scan is [ 0, 1, 3, 6 ]
- **needsValidScratch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  if the scratch value doesn't need to be accurate, we can skip this
- **scratchPreloaded**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  TODO: some of this is duplicated with reduce.wgsl, how can we factor it out?
  If true, we won't need to load the value INTO the scratch array
- **valuePreloaded**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, we won't need to load the value FROM the scratch array
- &amp; [WorkgroupSizable](../alpenglow/WGSLUtils.md#WorkgroupSizable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable)




## Source Code

See the source for [scanWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/scanWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
