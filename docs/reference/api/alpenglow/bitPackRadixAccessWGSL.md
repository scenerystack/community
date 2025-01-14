# bitPackRadixAccessWGSL

## Overview

Accesses a count from within a bit-packed histogram. This is used for memory-efficient in-workgroup-memory sorting.

Main documentation for the bit-packing pattern and rationale:

Naively, we can store counts in a vec4 (similar to
https://betterprogramming.pub/memory-bandwidth-optimized-parallel-radix-sort-in-metal-for-apple-m1-and-beyond-4f4590cfd5d3).
However, we're using a u32 for each count, and it's taking up a lot of workgroup memory to store these counts
(16 bytes per thread). If our count only takes N bits, we can store up to floor( 32 / N ) counts in a single u32,
and with a vector size M (M=1 is u32, M=2 is vec2u, M=3 is vec3u, M=4 is vec4u), we can thus store up to
M * floor( 32 / N ) counts efficiently. NOTE that it might be possible to pack things even tighter, but it would
involve a single count being spread across different vector components, so we skip that.

E.g. if we have a simple 2-bit sort with workgroupSize=256 (8 bit counts), we can pack all of these into a single u32, e.g.
count0 | ( count1 &lt;&lt; 8 ) | ( count2 &lt;&lt; 16 ) | ( count3 &lt;&lt; 24 )

E.g. if we have a 3-bit sort (8 bins) with a possible count of 1024 (10 bit counts), we'll have:
vec3(
  count0 | ( count1 &lt;&lt; 10 ) | ( count2 &lt;&lt; 20 ),
  count3 | ( count4 &lt;&lt; 10 ) | ( count5 &lt;&lt; 20 ),
  count6 | ( count7 &lt;&lt; 10 )
)

TODO: We could actually have the bitVector workgroup variable be shorter(!) since a lot of the time we don't need
TODO: that much memory. ACTUALLY this depends on... the length? Likely unless we know our data is shorter, this is
TODO: NOT the case

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type bitPackRadixAccessWGSLOptions {: #bitPackRadixAccessWGSLOptions }


```js
import type { bitPackRadixAccessWGSLOptions } from 'scenerystack/alpenglow';
```


- **bits**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **bitVector**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **bitsPerInnerPass**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bitVectorSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxCount**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [bitPackRadixAccessWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/bitPackRadixAccessWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
