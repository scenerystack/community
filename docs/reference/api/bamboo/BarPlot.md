# BarPlot

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/bamboo/blob/main/js/BarPlot.ts](https://github.com/phetsims/bamboo/blob/main/js/BarPlot.ts) for the most up-to-date information.

## Overview

Shows bars for numerical data (where the x-value of the bar is a number). Does not support categorical data.

@author Sam Reid (PhET Interactive Simulations)

## Class BarPlot {: #BarPlot }


```js
import { BarPlot } from 'scenerystack/bamboo';
```
### Constructor

#### new BarPlot( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, dataSet : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, providedOptions? : <span style="font-weight: 400;">[BarPlotOptions](../bamboo/BarPlot.md#BarPlotOptions)</span> ) {: #BarPlot-constructor data-toc-label='new BarPlot' }

### Instance Methods

#### setDataSet( dataSet : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #setDataSet data-toc-label='setDataSet' }

Sets the dataSet and redraws the plot. If instead the dataSet array is mutated, it is the client's responsibility
to call `update` or make sure `update` is called elsewhere (say, if the chart scrolls in that frame).

#### update() {: #update data-toc-label='update' }

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### dataSet : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #dataSet data-toc-label='dataSet' }

if you change this directly, you are responsible for calling update

#### barWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #barWidth data-toc-label='barWidth' }

#### rectangles : <span style="font-weight: 400;">[Rectangle](../scenery/Rectangle.md)[]</span> {: #rectangles data-toc-label='rectangles' }



## Type BarPlotOptions {: #BarPlotOptions }


```js
import type { BarPlotOptions } from 'scenerystack/bamboo';
```


- **barWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  width in view coordinates of each bar in the plot
- **barTailValue**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **pointToPaintableFields**?: ( point: [Vector2](../dot/Vector2.md) ) =&gt; [PaintableOptions](../scenery/Paintable.md#PaintableOptions)
<br>  maps a point to a containing Paintable options
  NOTE: cannot use the "Options" suffix because merge will try to merge that as nested options.
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [BarPlot.ts](https://github.com/phetsims/bamboo/blob/main/js/BarPlot.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
