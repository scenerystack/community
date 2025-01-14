# bitPackRadixIncrementWGSL

## Overview

Increments a count from within a bit-packed histogram. See bit_pack_radix_access for more documentation.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type bitPackRadixIncrementWGSLOptions {: #bitPackRadixIncrementWGSLOptions }


```js
import type { bitPackRadixIncrementWGSLOptions } from 'scenerystack/alpenglow';
```
- **bits**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **bitVector**: [WGSLVariableName](../alpenglow/WGSLString.md#WGSLVariableName)
- **bitsPerInnerPass**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bitVectorSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxCount**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [bitPackRadixIncrementWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/bitPackRadixIncrementWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
