# TwoPassConfig

## Overview



## Type TwoPassConfig {: #TwoPassConfig }


Raw type for a TwoPassConfig

Notes about relationships for the various properties (how we align bins and tiles, index things, including pixels):

raster-width, raster-height
tile-width, tile-height ---- ensure tile-x &lt; tile-width and tile-y &lt; tile-height!!!
  (tile index = tile-x + tile-y * tile-width)
num-tiles = tile-width * tile-height
bin-width, bin-height --- ensure bin-x &lt; bin-width and bin-y &lt; bin-height!!!
  (bin index = ( rel-bin-x + rel-bin-y * 16 ) + tile-index &lt;&lt; 8?) - guarantee 256 bins per tile? BUT don't compute ones outside?
num-bins = 256 * num-tiles --- note not all will be used

tile-size: 16 * bin-size
bin-size: usually subdivide-size (16), but could be 15 or 13 if bilinear/bicubic

filter: box, bilinear, bicubic
adjust-filter-size: 1 or THE SCALE of the filter --- if non-1, we won't use the "grid filter" approach
filter-radius (how much we need to expand by)
[defer] tile/bin enabled mask (whether it should compute or write out)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import type { TwoPassConfig } from 'scenerystack/alpenglow';
```
- **rasterWidth**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **rasterHeight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tileWidth**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tileHeight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **binWidth**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **binHeight**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tileSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **binSize**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **filter**: [PolygonFilterType](../alpenglow/PolygonFilterType.md)
- **filterScale**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **rasterColorSpace**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [TwoPassConfig.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/rasterize-two-pass/TwoPassConfig.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
