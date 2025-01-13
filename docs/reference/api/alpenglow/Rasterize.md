# Rasterize

## Overview

Test rasterization

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Rasterize {: #Rasterize }


```js
import { Rasterize } from 'scenerystack/alpenglow';
```
### Static Methods

#### rasterizeAccumulate( outputRaster : <span style="font-weight: 400; opacity: 80%;">OutputRaster</span>, renderableFaces : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span>, bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, contributionBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, outputRasterOffset : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, polygonFiltering : <span style="font-weight: 400; opacity: 80%;">PolygonFilterType</span>, polygonFilterWindowMultiplier : <span style="font-weight: 400; opacity: 80%;">number</span>, executionMethod : <span style="font-weight: 400; opacity: 80%;">RenderExecutionMethod</span>, log : <span style="font-weight: 400; opacity: 80%;">RasterLog | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #rasterizeAccumulate data-toc-label='rasterizeAccumulate' }

#### markStart( name : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #markStart data-toc-label='markStart' }

#### markEnd( name : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #markEnd data-toc-label='markEnd' }

#### partitionRenderableFaces( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">RasterizationOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #partitionRenderableFaces data-toc-label='partitionRenderableFaces' }

#### rasterize( renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span>, outputRaster : <span style="font-weight: 400; opacity: 80%;">OutputRaster</span>, bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">RasterizationOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #rasterize data-toc-label='rasterize' }

#### imageDataToCanvas( imageData : <span style="font-weight: 400; opacity: 80%;">ImageData</span> ) : <span style="font-weight: 400; opacity: 80%;">HTMLCanvasElement</span> {: #imageDataToCanvas data-toc-label='imageDataToCanvas' }

#### writeImageDataToCanvas( imageData : <span style="font-weight: 400; opacity: 80%;">ImageData</span>, canvas : <span style="font-weight: 400; opacity: 80%;">HTMLCanvasElement</span>, context : <span style="font-weight: 400; opacity: 80%;">CanvasRenderingContext2D</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeImageDataToCanvas data-toc-label='writeImageDataToCanvas' }



## Source Code

See the source for [Rasterize.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/Rasterize.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
