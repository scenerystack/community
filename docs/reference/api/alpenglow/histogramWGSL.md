# histogramWGSL

## Overview

Calculates a histogram in shared (workgroup) memory by using atomics

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type histogramWGSLOptions {: #histogramWGSLOptions }


```js
import type { histogramWGSLOptions } from 'scenerystack/alpenglow';
```


- **histogramScratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **getBin**: ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- &amp; StrictOmit&lt;[coalescedLoopWGSLOptions](../alpenglow/coalescedLoopWGSL.md#coalescedLoopWGSLOptions), "callback"&gt;




## Source Code

See the source for [histogramWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/histogramWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
