# compactSingleRadixSortWGSL

## Overview

Performs a full radix-sort of an array in workgroup memory (which can be of length workgroupSize * grainSize),
using a more complicated/computational but lower-memory approach by packing the accumulated bits (that we scan over)
into a more compact form (packed into either a u32/vec2u/vec3u/vec4u, depending on the bitVectorSize parameter).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type compactSingleRadixSortWGSLOptions {: #compactSingleRadixSortWGSLOptions }


```js
import type { compactSingleRadixSortWGSLOptions } from 'scenerystack/alpenglow';
```
- **totalBits**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **getBitsAtIndex**: ( value: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT), bitIndex: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- &amp; StrictOmit&lt;[nBitCompactSingleSortWGSLOptions](../alpenglow/nBitCompactSingleSortWGSL.md#nBitCompactSingleSortWGSLOptions)&lt;T&gt;, "getBits"&gt;




## Source Code

See the source for [compactSingleRadixSortWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/compactSingleRadixSortWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
