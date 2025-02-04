# VectorCanvas

## Overview

Similar to an DOM Canvas, but stores a vector representation of the relevant drawing commands.

TODO TODO: This should be done instead in the rational-half-edge space, so we get better exactness on the repeated
TODO: CAG. What is causing the issues?

TODO: We really would want to "cache" all of the commands at once, build up a "pending" RenderProgram, and then
TODO: handle all the paths at once.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class VectorCanvas {: #VectorCanvas }


```js
import { VectorCanvas } from 'scenerystack/alpenglow';
```
### Constructor

#### new VectorCanvas( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, colorSpace : <span style="font-weight: 400;">'srgb' | 'display-p3'</span>, polygonFiltering : <span style="font-weight: 400;">[PolygonFilterType](../alpenglow/PolygonFilterType.md)</span> ) {: #VectorCanvas-constructor data-toc-label='new VectorCanvas' }

### Instance Methods

#### fillColor( renderPath : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span>, color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) {: #fillColor data-toc-label='fillColor' }

Assumes sRGB? We'll do srgb-linear blending to mimic for now?

#### fillLinearGradient( renderPath : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, stops : <span style="font-weight: 400;">{ ratio: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; color: [Vector4](../dot/Vector4.md) }[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderLinearGradientAccuracy](../alpenglow/RenderLinearGradientAccuracy.md)</span> ) {: #fillLinearGradient data-toc-label='fillLinearGradient' }

#### fillRadialGradient( renderPath : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span>, transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, startRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stops : <span style="font-weight: 400;">{ ratio: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; color: [Vector4](../dot/Vector4.md) }[]</span>, extend : <span style="font-weight: 400;">[RenderExtend](../alpenglow/RenderExtend.md)</span>, accuracy : <span style="font-weight: 400;">[RenderRadialGradientAccuracy](../alpenglow/RenderRadialGradientAccuracy.md)</span> ) {: #fillRadialGradient data-toc-label='fillRadialGradient' }

#### copy() : <span style="font-weight: 400;">[VectorCanvas](../alpenglow/VectorCanvas.md)</span> {: #copy data-toc-label='copy' }

#### updateWidthHeight( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #updateWidthHeight data-toc-label='updateWidthHeight' }

#### getImageData( options? : <span style="font-weight: 400;">[CombinedRasterOptions](../alpenglow/CombinedRaster.md#CombinedRasterOptions)</span> ) : <span style="font-weight: 400;">ImageData</span> {: #getImageData data-toc-label='getImageData' }

#### getCanvas( options? : <span style="font-weight: 400;">[CombinedRasterOptions](../alpenglow/CombinedRaster.md#CombinedRasterOptions)</span> ) : <span style="font-weight: 400;">[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)</span> {: #getCanvas data-toc-label='getCanvas' }

### Instance Properties

#### renderableFaces : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)[]</span> {: #renderableFaces data-toc-label='renderableFaces' }

#### bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #bounds data-toc-label='bounds' }

#### gridBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #gridBounds data-toc-label='gridBounds' }



## Source Code

See the source for [VectorCanvas.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/VectorCanvas.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
