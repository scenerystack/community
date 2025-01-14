# mainTwoPassTileWGSL

## Overview

TODO: doc

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainTwoPassTileWGSLOptions {: #mainTwoPassTileWGSLOptions }


```js
import type { mainTwoPassTileWGSLOptions } from 'scenerystack/alpenglow';
```
- **config**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;
- **initialRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassInitialRenderableFace](../alpenglow/TwoPassInitialRenderableFace.md)[]&gt;
- **initialEdges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **coarseRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassCoarseRenderableFace](../alpenglow/TwoPassCoarseRenderableFace.md)[]&gt;
- **coarseEdges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **addresses**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- **numInitialRenderableFaces**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)




## Source Code

See the source for [mainTwoPassTileWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/rasterize-two-pass/mainTwoPassTileWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
