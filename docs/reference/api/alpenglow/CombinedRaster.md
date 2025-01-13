# CombinedRaster

## Overview

An OutputRaster that tries to efficiently write straight to ImageData when possible, and otherwise accumulates.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class CombinedRaster {: #CombinedRaster }


TODO: consider implementing a raster that JUST uses ImageData, and does NOT do linear (proper) blending

```js
import { CombinedRaster } from 'scenerystack/alpenglow';
```
### Constructor

#### new CombinedRaster( width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">CombinedRasterOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### addClientPartialPixel( color : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addClientPartialPixel data-toc-label='addClientPartialPixel' }

#### addClientFullPixel( color : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addClientFullPixel data-toc-label='addClientFullPixel' }

#### addOutputFullPixel( color : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addOutputFullPixel data-toc-label='addOutputFullPixel' }

#### addClientFullRegion( color : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addClientFullRegion data-toc-label='addClientFullRegion' }

#### addOutputFullRegion( color : <span style="font-weight: 400; opacity: 80%;">Vector4</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addOutputFullRegion data-toc-label='addOutputFullRegion' }

#### toImageData() : <span style="font-weight: 400; opacity: 80%;">ImageData</span> {: #toImageData data-toc-label='toImageData' }

#### toCanvas() : <span style="font-weight: 400; opacity: 80%;">HTMLCanvasElement</span> {: #toCanvas data-toc-label='toCanvas' }

#### writeToCanvas( canvas : <span style="font-weight: 400; opacity: 80%;">HTMLCanvasElement</span>, context : <span style="font-weight: 400; opacity: 80%;">CanvasRenderingContext2D</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeToCanvas data-toc-label='writeToCanvas' }

### Instance Properties

#### accumulationArray : <span style="font-weight: 400; opacity: 80%;">Float64Array</span> {: #accumulationArray data-toc-label='accumulationArray' }

(readonly)

#### imageData : <span style="font-weight: 400; opacity: 80%;">ImageData</span> {: #imageData data-toc-label='imageData' }

(readonly)

#### colorConverter : <span style="font-weight: 400; opacity: 80%;">RasterColorConverter</span> {: #colorConverter data-toc-label='colorConverter' }

(readonly)

implements this for OutputRaster



## Source Code

See the source for [CombinedRaster.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/CombinedRaster.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
