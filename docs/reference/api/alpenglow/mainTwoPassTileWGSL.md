# mainTwoPassTileWGSL

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/rasterize-two-pass/mainTwoPassTileWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/rasterize-two-pass/mainTwoPassTileWGSL.ts) for the most up-to-date information.

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainTwoPassTileWGSLOptions {: #mainTwoPassTileWGSLOptions }


```js
import type { mainTwoPassTileWGSLOptions } from 'scenerystack/alpenglow';
```


- **config**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;
<br>  input
- **initialRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassInitialRenderableFace](../alpenglow/TwoPassInitialRenderableFace.md)[]&gt;
- **initialEdges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **coarseRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassCoarseRenderableFace](../alpenglow/TwoPassCoarseRenderableFace.md)[]&gt;
<br>  output
- **coarseEdges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **addresses**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- **numInitialRenderableFaces**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)




## Source Code

See the source for [mainTwoPassTileWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/rasterize-two-pass/mainTwoPassTileWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
