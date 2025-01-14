# bitPackRadixExclusiveScanWGSL

## Overview

Performs a serial exclusive scan (prefix sum) on a bit-packed histogram. See bit_pack_radix_access for more documentation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type bitPackRadixExclusiveScanWGSLOptions {: #bitPackRadixExclusiveScanWGSLOptions }


```js
import type { bitPackRadixExclusiveScanWGSLOptions } from 'scenerystack/alpenglow';
```


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

See the source for [bitPackRadixExclusiveScanWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/bitPackRadixExclusiveScanWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
