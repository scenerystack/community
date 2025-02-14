# toStripedIndexWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/toStripedIndexWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/toStripedIndexWGSL.ts) for the most up-to-date information.

## Overview

Converts an index from a normal (blocked) order to a striped order (for improved memory coherence).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type toStripedIndexWGSLOptions {: #toStripedIndexWGSLOptions }


```js
import type { toStripedIndexWGSLOptions } from 'scenerystack/alpenglow';
```


- **i**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
<br>  represents a normal (blocked) index into data. So 0 is the 1st element, 1 is the 2nd, etc.
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable)




## Source Code

See the source for [toStripedIndexWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/toStripedIndexWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
