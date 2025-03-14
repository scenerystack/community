# CanvasLinePlot

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/bamboo/blob/main/js/CanvasLinePlot.ts](https://github.com/phetsims/bamboo/blob/main/js/CanvasLinePlot.ts) for the most up-to-date information.

## Overview

CanvasLinePlot renders a {Array.&lt;Vector2|null&gt;} dataSet on a canvas that is managed by a ChartCanvasNode.
Typically, it is preferable to use LinePlot, but this alternative is provided for cases where canvas must be
used for performance. Like LinePlot, null values are skipped, and allow you to create gaps in a plot.
@see LinePlot

@author Sam Reid (PhET Interactive Simulations)

## Class CanvasLinePlot {: #CanvasLinePlot }


```js
import { CanvasLinePlot } from 'scenerystack/bamboo';
```
### Constructor

#### new CanvasLinePlot( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, dataSet : <span style="font-weight: 400;">Array&lt;[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[CanvasLinePlotOptions](../bamboo/CanvasLinePlot.md#CanvasLinePlotOptions)</span> ) {: #CanvasLinePlot-constructor data-toc-label='new CanvasLinePlot' }

### Instance Methods

#### setStroke( stroke : <span style="font-weight: 400;">[Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setStroke data-toc-label='setStroke' }

Sets the stroke.
@param stroke - If you call setStroke, you are responsible for calling update on the associated ChartCanvasNode(s).

#### dispose() {: #dispose data-toc-label='dispose' }

#### setDataSet( dataSet : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #setDataSet data-toc-label='setDataSet' }

Sets dataSet. You are responsible for calling update on the associated ChartCanvasNode(s).

#### paintCanvas( context : <span style="font-weight: 400;">[CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)</span> ) {: #paintCanvas data-toc-label='paintCanvas' }

Intended to be called by ChartCanvasNode.

### Instance Properties

#### dataSet : <span style="font-weight: 400;">( [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[]</span> {: #dataSet data-toc-label='dataSet' }

If you change this directly, you are responsible for calling update on the corresponding ChartCanvasNode.

#### lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #lineWidth data-toc-label='lineWidth' }

If you change this directly, you are responsible for calling update on the corresponding ChartCanvasNode.

#### lineDash : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #lineDash data-toc-label='lineDash' }

If you change this directly, you are responsible for calling update on the corresponding ChartCanvasNode.



## Type CanvasLinePlotOptions {: #CanvasLinePlotOptions }


```js
import type { CanvasLinePlotOptions } from 'scenerystack/bamboo';
```


- **stroke**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **lineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lineDash**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- &amp; [CanvasPainterOptions](../bamboo/CanvasPainter.md#CanvasPainterOptions)




## Source Code

See the source for [CanvasLinePlot.ts](https://github.com/phetsims/bamboo/blob/main/js/CanvasLinePlot.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
