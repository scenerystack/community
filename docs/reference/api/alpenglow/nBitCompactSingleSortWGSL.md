# nBitCompactSingleSortWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/nBitCompactSingleSortWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/nBitCompactSingleSortWGSL.ts) for the most up-to-date information.

## Overview

Performs a N-bit radix sort of an array in workgroup memory (which can be of length workgroupSize * grainSize),
using a more complicated/computational but lower-memory approach by packing the accumulated bits (that we scan over)
into a more compact form (packed into either a u32/vec2u/vec3u/vec4u, depending on the bitVectorSize parameter).

NOTE: This is a stable sort, but it only sorts things BASED ON ONLY N (bitsPerInnerPass) BITS of the key (so it's not a
full sort). You'll want to run this multiple times (giving different sections of bits each time, from lower to higher)
in order to achieve a full sort.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type nBitCompactSingleSortWGSLOptions {: #nBitCompactSingleSortWGSLOptions }


```js
import type { nBitCompactSingleSortWGSLOptions } from 'scenerystack/alpenglow';
```


- **order**: [BitOrder](../alpenglow/ConcreteType.md#BitOrder)&lt;T&gt;
<br>  Currently mostly used for the type, but we might be able to use it for more later. (TODO)
- **bitsScratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  var&lt;workgroup&gt; array&lt;u32|vec2u|vec3u|vec4u, workgroupSize&gt; TODO: we can pack this more efficiently, no?
- **valueScratch**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  var&lt;workgroup&gt; array&lt;T, workgroupSize * grainSize&gt;
- **lengthExpression**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **getBits**: ( value: [WGSLExpressionT](../alpenglow/WGSLString.md#WGSLExpressionT) ) =&gt; [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **earlyLoad**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  (controls whether we load the values early or late - might affect register pressure)
- **bitsPerInnerPass**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  e.g. 2 for a two-bit sort
- **bitVectorSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  (1/2/3/4) for (u32/vec2u/vec3u/vec4u) e.g. 4 for a vec4u
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable)




## Source Code

See the source for [nBitCompactSingleSortWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/nBitCompactSingleSortWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
