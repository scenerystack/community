# Rasterize

## Overview

Test rasterization

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Rasterize {: #Rasterize }


```js
import { Rasterize } from 'scenerystack/alpenglow';
```
### Static Methods

#### rasterizeAccumulate( outputRaster : <span style="font-weight: 400;">[OutputRaster](../alpenglow/OutputRaster.md)</span>, renderableFaces : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)[]</span>, bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, contributionBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, outputRasterOffset : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, polygonFiltering : <span style="font-weight: 400;">[PolygonFilterType](../alpenglow/PolygonFilterType.md)</span>, polygonFilterWindowMultiplier : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, executionMethod : <span style="font-weight: 400;">RenderExecutionMethod</span>, log : <span style="font-weight: 400;">[RasterLog](../alpenglow/RasterLog.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #rasterizeAccumulate data-toc-label='rasterizeAccumulate' }

#### markStart( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #markStart data-toc-label='markStart' }

#### markEnd( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #markEnd data-toc-label='markEnd' }

#### partitionRenderableFaces( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, providedOptions? : <span style="font-weight: 400;">[RasterizationOptions](../alpenglow/Rasterize.md#RasterizationOptions)</span> ) : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)[]</span> {: #partitionRenderableFaces data-toc-label='partitionRenderableFaces' }

#### rasterize( renderProgram : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span>, outputRaster : <span style="font-weight: 400;">[OutputRaster](../alpenglow/OutputRaster.md)</span>, bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, providedOptions? : <span style="font-weight: 400;">[RasterizationOptions](../alpenglow/Rasterize.md#RasterizationOptions)</span> ) {: #rasterize data-toc-label='rasterize' }

#### imageDataToCanvas( imageData : <span style="font-weight: 400;">ImageData</span> ) : <span style="font-weight: 400;">[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)</span> {: #imageDataToCanvas data-toc-label='imageDataToCanvas' }

#### writeImageDataToCanvas( imageData : <span style="font-weight: 400;">ImageData</span>, canvas : <span style="font-weight: 400;">[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)</span>, context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #writeImageDataToCanvas data-toc-label='writeImageDataToCanvas' }



## Type RasterizationOptions {: #RasterizationOptions }


```js
import type { RasterizationOptions } from 'scenerystack/alpenglow';
```
- **outputRasterOffset**?: [Vector2](../dot/Vector2.md)
- **tileSize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **polygonFiltering**?: [PolygonFilterType](../alpenglow/PolygonFilterType.md)
- **polygonFilterWindowMultiplier**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **edgeIntersectionSortMethod**?: "none" | "center-size" | "min-max" | "min-max-size" | "center-min-max" | "random"
- **edgeIntersectionMethod**?: "quadratic" | "boundsTree" | "arrayBoundsTree"
- **renderableFaceType**?: "polygonal" | "edged" | "edgedClipped"
- **renderableFaceMethod**?: "simple" | "fullyCombined" | "simplifyingCombined" | "traced"
- **splitPrograms**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **executionMethod**?: RenderExecutionMethod
- **log**?: [RasterLog](../alpenglow/RasterLog.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




## Source Code

See the source for [Rasterize.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/Rasterize.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
