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

#### new VectorCanvas( width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span>, colorSpace : <span style="font-weight: 400; opacity: 80%;">'srgb' | 'display-p3'</span>, polygonFiltering : <span style="font-weight: 400; opacity: 80%;">PolygonFilterType</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### fillColor( renderPath : <span style="font-weight: 400; opacity: 80%;">RenderPath</span>, color : <span style="font-weight: 400; opacity: 80%;">Vector4</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #fillColor data-toc-label='fillColor' }

Assumes sRGB? We'll do srgb-linear blending to mimic for now?

#### fillLinearGradient( renderPath : <span style="font-weight: 400; opacity: 80%;">RenderPath</span>, start : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, end : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, stops : <span style="font-weight: 400; opacity: 80%;">{ ratio: number; color: Vector4 }[]</span>, extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderLinearGradientAccuracy</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #fillLinearGradient data-toc-label='fillLinearGradient' }

#### fillRadialGradient( renderPath : <span style="font-weight: 400; opacity: 80%;">RenderPath</span>, transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, start : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, startRadius : <span style="font-weight: 400; opacity: 80%;">number</span>, end : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endRadius : <span style="font-weight: 400; opacity: 80%;">number</span>, stops : <span style="font-weight: 400; opacity: 80%;">{ ratio: number; color: Vector4 }[]</span>, extend : <span style="font-weight: 400; opacity: 80%;">RenderExtend</span>, accuracy : <span style="font-weight: 400; opacity: 80%;">RenderRadialGradientAccuracy</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #fillRadialGradient data-toc-label='fillRadialGradient' }

#### copy() : <span style="font-weight: 400; opacity: 80%;">VectorCanvas</span> {: #copy data-toc-label='copy' }

#### updateWidthHeight( width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #updateWidthHeight data-toc-label='updateWidthHeight' }

#### getImageData( options? : <span style="font-weight: 400; opacity: 80%;">CombinedRasterOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">ImageData</span> {: #getImageData data-toc-label='getImageData' }

#### getCanvas( options? : <span style="font-weight: 400; opacity: 80%;">CombinedRasterOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">HTMLCanvasElement</span> {: #getCanvas data-toc-label='getCanvas' }

### Instance Properties

#### renderableFaces : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #renderableFaces data-toc-label='renderableFaces' }

#### bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #bounds data-toc-label='bounds' }

#### gridBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #gridBounds data-toc-label='gridBounds' }



## Source Code

See the source for [VectorCanvas.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/VectorCanvas.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
