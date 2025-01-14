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

#### new CombinedRaster( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[CombinedRasterOptions](../alpenglow/CombinedRaster.md#CombinedRasterOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### addClientPartialPixel( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #addClientPartialPixel data-toc-label='addClientPartialPixel' }

#### addClientFullPixel( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #addClientFullPixel data-toc-label='addClientFullPixel' }

#### addOutputFullPixel( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #addOutputFullPixel data-toc-label='addOutputFullPixel' }

#### addClientFullRegion( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #addClientFullRegion data-toc-label='addClientFullRegion' }

#### addOutputFullRegion( color : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #addOutputFullRegion data-toc-label='addOutputFullRegion' }

#### toImageData() : <span style="font-weight: 400;">ImageData</span> {: #toImageData data-toc-label='toImageData' }

#### toCanvas() : <span style="font-weight: 400;">[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)</span> {: #toCanvas data-toc-label='toCanvas' }

#### writeToCanvas( canvas : <span style="font-weight: 400;">[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)</span>, context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #writeToCanvas data-toc-label='writeToCanvas' }

### Instance Properties

#### accumulationArray : <span style="font-weight: 400;">Float64Array</span> {: #accumulationArray data-toc-label='accumulationArray' }

(readonly)

#### imageData : <span style="font-weight: 400;">ImageData</span> {: #imageData data-toc-label='imageData' }

(readonly)

#### colorConverter : <span style="font-weight: 400;">[RasterColorConverter](../alpenglow/RasterColorConverter.md)</span> {: #colorConverter data-toc-label='colorConverter' }

(readonly)

implements this for OutputRaster



## Type CombinedRasterOptions {: #CombinedRasterOptions }


```js
import type { CombinedRasterOptions } from 'scenerystack/alpenglow';
```
- **colorSpace**?: "srgb" | "display-p3"
- **showOutOfGamut**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [CombinedRaster.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/CombinedRaster.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
