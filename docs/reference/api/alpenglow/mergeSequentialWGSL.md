# mergeSequentialWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mergeSequentialWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mergeSequentialWGSL.ts) for the most up-to-date information.

## Overview

A template that merges together two sorted arrays into a single sorted array (in a fully sequential single-thread way)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mergeSequentialWGSLOptions {: #mergeSequentialWGSLOptions }


```js
import type { mergeSequentialWGSLOptions } from 'scenerystack/alpenglow';
```


- **lengthA**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **lengthB**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)
- **compare**: ( indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLExpressionI32](../alpenglow/WGSLString.md#WGSLExpressionI32)
<br>  =&gt; {-1, 0, 1} (i32)
- **setFromA**: ( indexOutput: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexA: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)
- **setFromB**: ( indexOutput: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), indexB: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)




## Source Code

See the source for [mergeSequentialWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/mergeSequentialWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
