# mainTwoPassCoarseWGSL

## Overview

TODO: doc

Should be dispatched with one workgroup PER coarse renderable face (one thread per face-X-bin).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainTwoPassCoarseWGSLOptions {: #mainTwoPassCoarseWGSLOptions }


```js
import type { mainTwoPassCoarseWGSLOptions } from 'scenerystack/alpenglow';
```
- **config**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;
- **coarseRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassCoarseRenderableFace](../alpenglow/TwoPassCoarseRenderableFace.md)[]&gt;
- **coarseEdges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **fineRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassFineRenderableFace](../alpenglow/TwoPassFineRenderableFace.md)[]&gt;
- **fineEdges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **addresses**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- **numCoarseRenderableFaces**: [WGSLExpressionU32](../alpenglow/WGSLString.md#WGSLExpressionU32)




## Source Code

See the source for [mainTwoPassCoarseWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/rasterize-two-pass/mainTwoPassCoarseWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
