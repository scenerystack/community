# CanvasGridLineSet

## Overview

Copy/paste of GridLineSet that renders to canvas.  Note, these 2 files should be maintained together,
to keep as similar an API as possible.

@author Sam Reid (PhET Interactive Simulations)

## Class CanvasGridLineSet {: #CanvasGridLineSet }


```js
import { CanvasGridLineSet } from 'scenerystack/bamboo';
```
### Constructor

#### new CanvasGridLineSet( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, axisOrientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[CanvasGridLineSetOptions](../bamboo/CanvasGridLineSet.md#CanvasGridLineSetOptions)</span> ) {: #CanvasGridLineSet-constructor data-toc-label='new CanvasGridLineSet' }

### Instance Methods

#### setSpacing( spacing : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setSpacing data-toc-label='setSpacing' }

#### setLineDashOffset( lineDashOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setLineDashOffset data-toc-label='setLineDashOffset' }

#### paintCanvas( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #paintCanvas data-toc-label='paintCanvas' }



## Type CanvasGridLineSetOptions {: #CanvasGridLineSetOptions }


```js
import type { CanvasGridLineSetOptions } from 'scenerystack/bamboo';
```


- **origin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **clippingType**?: [ClippingType](../bamboo/ClippingType.md)
- **stroke**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | CanvasGradient | CanvasPattern
- &amp; [PickOptional](../phet-core/PickOptional.md)&lt;[PathOptions](../scenery/Path.md#PathOptions), "lineWidth" | "lineDash" | "lineDashOffset"&gt; &amp; [CanvasPainterOptions](../bamboo/CanvasPainter.md#CanvasPainterOptions)




## Source Code

See the source for [CanvasGridLineSet.ts](https://github.com/phetsims/bamboo/blob/main/js/CanvasGridLineSet.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
