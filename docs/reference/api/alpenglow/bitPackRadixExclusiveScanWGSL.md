# bitPackRadixExclusiveScanWGSL

## Overview

Performs a serial exclusive scan (prefix sum) on a bit-packed histogram. See bit_pack_radix_access for more documentation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type bitPackRadixExclusiveScanWGSLOptions {: #bitPackRadixExclusiveScanWGSLOptions }


```js
import type { bitPackRadixExclusiveScanWGSLOptions } from 'scenerystack/alpenglow';
```


- **bitVector**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **bitsPerInnerPass**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bitVectorSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxCount**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [bitPackRadixExclusiveScanWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/bitPackRadixExclusiveScanWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
