# coalescedLoopWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/coalescedLoopWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/coalescedLoopWGSL.ts) for the most up-to-date information.

## Overview

A simple unrolled loop that provides both a "blocked" and "striped" (coalesced) index for each iteration.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type coalescedLoopWGSLOptions {: #coalescedLoopWGSLOptions }


```js
import type { coalescedLoopWGSLOptions } from 'scenerystack/alpenglow';
```


- **callback**: ( localIndex: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32), dataIndex: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32) ) =&gt; [WGSLStatements](../alpenglow/WGSLString.md#WGSLStatements)
- &amp; [RakedSizable](../alpenglow/WGSLUtils.md#RakedSizable) &amp; [OptionalLengthExpressionable](../alpenglow/WGSLUtils.md#OptionalLengthExpressionable) &amp; [WorkgroupIndexable](../alpenglow/WGSLUtils.md#WorkgroupIndexable) &amp; [LocalIndexable](../alpenglow/WGSLUtils.md#LocalIndexable)




## Source Code

See the source for [coalescedLoopWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/gpu/coalescedLoopWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
