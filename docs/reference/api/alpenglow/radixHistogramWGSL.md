# radixHistogramWGSL

## Overview

Calculates a histogram for a section, then writes the histogram out in a striped manner ready for a prefix sum.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type radixHistogramWGSLOptions {: #radixHistogramWGSLOptions }


```js
import type { radixHistogramWGSLOptions } from 'scenerystack/alpenglow';
```


- **numBins**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **storeHistogram**: ( index: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), value: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)
<br>  indices up to numBins * Math.ceil( length / ( workgroupSize * grainSize ) )
- &amp; [WithoutNull](../phet-core/WithoutNull.md)&lt;[WithRequired](../phet-core/WithRequired.md)&lt;[histogramWGSLOptions](../alpenglow/histogramWGSL.md#histogramWGSLOptions), "lengthExpression"&gt;, "lengthExpression"&gt;




## Source Code

See the source for [radixHistogramWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/radixHistogramWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
