# mainTwoPassFineWGSL

## Overview

Fine rasterization stage for the "two-pass" setup.

Each bin (16x16, or smaller if grid-filtering) will have a linked list of (non-overlapping) faces that need to be
rendered into its pixels. We spawn a workgroup PER bin, so we have (nominally) a thread-per-pixel. We'll loop over
the faces, accumulating the color for each pixel. Then once done, we can gamut-map it and store it.

There will be the following filter types:
- Box filtering (implemented)
- Bilinear filtering (implemented)
- Mitchell-Netravali filtering (not implemented) TODO: implement Mitchell-Netravali (both grid and arbitrary-scale)

When filter scale is 1, we can use a grid-filtering approach for bilinear+ filtering, where we will compute
a full 16x16 grid of integrals (and colors), which will then be combined into the proper (e.g. 15x15) set of pixels.
Thus the bin size can be 15x15 (if bilinear and filter_scale=1), or 13x13 (if Mitchell-Netravali and filter_scale=1).

Should be dispatched with one workgroup PER bin (one thread per grid "pixel")

TODO: optimize is_constant

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type mainTwoPassFineWGSLOptions {: #mainTwoPassFineWGSLOptions }


```js
import type { mainTwoPassFineWGSLOptions } from 'scenerystack/alpenglow';
```


- **config**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassConfig](../alpenglow/TwoPassConfig.md)&gt;
- **addresses**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- **fineRenderableFaces**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[TwoPassFineRenderableFace](../alpenglow/TwoPassFineRenderableFace.md)[]&gt;
- **renderProgramInstructions**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]&gt;
- **edges**: [BufferSlot](../alpenglow/BufferSlot.md)&lt;[LinearEdge](../alpenglow/LinearEdge.md)[]&gt;
- **output**: [TextureViewSlot](../alpenglow/TextureViewSlot.md)
- **storageFormat**: GPUTextureFormat
- **supportsGridFiltering**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **supportsBilinear**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **supportsMitchellNetravali**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [mainTwoPassFineWGSL.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/rasterize-two-pass/mainTwoPassFineWGSL.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
