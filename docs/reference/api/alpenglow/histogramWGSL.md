# histogramWGSL

## Overview

Calculates a histogram in shared (workgroup) memory by using atomics

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type histogramWGSLOptions {: #histogramWGSLOptions }


```js
import type { histogramWGSLOptions } from 'scenerystack/alpenglow';
```


- **histogramScratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  var&lt;workgroup&gt; array&lt;atomic&lt;u32&gt;, numBins&gt; // TODO: can we actually get memory-compacted histograms here, instead of using a full u32?
- **getBin**: ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[coalescedLoopWGSLOptions](../alpenglow/coalescedLoopWGSL.md#coalescedLoopWGSLOptions), "callback"&gt;




## Source Code

See the source for [histogramWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/histogramWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
