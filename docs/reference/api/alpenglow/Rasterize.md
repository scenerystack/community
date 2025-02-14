# Rasterize

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/raster/Rasterize.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/Rasterize.ts) for the most up-to-date information.

## Overview

Test rasterization

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type RasterizationOptions {: #RasterizationOptions }


```js
import type { RasterizationOptions } from 'scenerystack/alpenglow';
```


- **outputRasterOffset**?: [Vector2](../dot/Vector2.md)
<br>  We'll write our results into the output raster at this x,y offset. NOTE: This is not needed when tiling, if we are
  rendering a region that goes from x:(100,200), by default we will output into the raster at x:(100,200). This
  should be used if we want to e.g. render a region that goes from x:(100,200) into the raster at x:(0,100).
- **tileSize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Tiling is splitting our processing into (tileSize x tileSize) chunks BEFORE sending our processing to the CAG.
  Each tile will get CAG'ed separately, and then we'll combine the results. This is useful for large images, where
  it can reduce the edge-intersection costs. In addition, it will likely be helpful for parallelization.
- **polygonFiltering**?: [PolygonFilterType](../alpenglow/PolygonFilterType.md)
<br>  TODO: doc
- **polygonFilterWindowMultiplier**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  We'll expand the filter self by this multiplier. If it is not 1, it will potentially drop performance
  significantly (we won't be able to grid-clip to do it efficiently, and it might cover significantly more area).
- **edgeIntersectionSortMethod**?: "none" | "center-size" | "min-max" | "min-max-size" | "center-min-max" | "random"
<br>  TODO: consistent naming conventions
- **edgeIntersectionMethod**?: "quadratic" | "boundsTree" | "arrayBoundsTree"
- **renderableFaceType**?: "polygonal" | "edged" | "edgedClipped"
- **renderableFaceMethod**?: "simple" | "fullyCombined" | "simplifyingCombined" | "traced"
<br>  - 'simple' will simply pass through the edges to the renderable faces
  - 'fullyCombined' will combine ALL faces with equivalent RenderPrograms into one.
  - 'simplifyingCombined' will (a) only combine compatible faces if they touch, and (b) will remove edges between
     compatible faces.
  - 'traced' will function similarly to simplifyingCombined, but will trace out the resulting polygonal faces.
- **splitPrograms**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **executionMethod**?: RenderExecutionMethod
- **log**?: [RasterLog](../alpenglow/RasterLog.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




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



## Source Code

See the source for [Rasterize.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/Rasterize.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
