# bitPackRadixIncrementWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/bitPackRadixIncrementWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/bitPackRadixIncrementWGSL.ts) for the most up-to-date information.

## Overview

Increments a count from within a bit-packed histogram. See bit_pack_radix_access for more documentation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type bitPackRadixIncrementWGSLOptions {: #bitPackRadixIncrementWGSLOptions }


```js
import type { bitPackRadixIncrementWGSLOptions } from 'scenerystack/alpenglow';
```


- **bits**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
<br>  u32 name
- **bitVector**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
<br>  (u32/vec2u/vec3u/vec4u) name
- **bitsPerInnerPass**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  TODO: once this is working, form it into a larger object of settings for Radix handling
  e.g. 2 for a two-bit sort
- **bitVectorSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  (1/2/3/4) for (u32/vec2u/vec3u/vec4u) e.g. 4 for a vec4u
- **maxCount**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  the maximum count in the histogram




## Source Code

See the source for [bitPackRadixIncrementWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/bitPackRadixIncrementWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
