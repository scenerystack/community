# fromStripedIndexWGSL

## Overview

Converts an index from a striped order to a normal (blocked) order.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type fromStripedIndexWGSLOptions {: #fromStripedIndexWGSLOptions }


```js
import type { fromStripedIndexWGSLOptions } from 'scenerystack/alpenglow';
```


- **i**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
<br>  represents a striped index into data. So 0 is the 1st element, workgroupSIze is the 2nd element, etc.
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable)




## Source Code

See the source for [fromStripedIndexWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/fromStripedIndexWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
