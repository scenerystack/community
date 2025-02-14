# AreaPlot

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/bamboo/blob/main/js/AreaPlot.ts](https://github.com/phetsims/bamboo/blob/main/js/AreaPlot.ts) for the most up-to-date information.

## Overview

AreaPlot is a plot that combines a line plot and a bar plot. An area plot is distinguished from a line plot by
the addition of shading between lines and a baseline, like in a bar plot.

Null values are skipped and allow you to create separate shaded regions.

@author Martin Veillette

## Class AreaPlot {: #AreaPlot }


```js
import { AreaPlot } from 'scenerystack/bamboo';
```
### Constructor

#### new AreaPlot( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, dataSet : <span style="font-weight: 400;">[AreaChartDataSet](../bamboo/AreaPlot.md#AreaChartDataSet)</span>, providedOptions? : <span style="font-weight: 400;">[AreaChartOptions](../bamboo/AreaPlot.md#AreaChartOptions)</span> ) {: #AreaPlot-constructor data-toc-label='new AreaPlot' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### update() {: #update data-toc-label='update' }

Recomputes the rendered shape.

#### setDataSet( dataSet : <span style="font-weight: 400;">[AreaChartDataSet](../bamboo/AreaPlot.md#AreaChartDataSet)</span> ) {: #setDataSet data-toc-label='setDataSet' }

Sets the dataSet and redraws the plot. If instead the dataSet array is mutated, it is the client's responsibility
to call `update` or make sure `update` is called elsewhere (say, if the chart scrolls in that frame).

#### setBaseline( baseline : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setBaseline data-toc-label='setBaseline' }

Sets the baseline value for the area plot.

### Instance Properties

#### dataSet : <span style="font-weight: 400;">[AreaChartDataSet](../bamboo/AreaPlot.md#AreaChartDataSet)</span> {: #dataSet data-toc-label='dataSet' }

if you change this directly, you are responsible for calling update

#### baseline : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #baseline data-toc-label='baseline' }

a y-value that serves as foundation for the area plot.



## Type AreaChartDataSet {: #AreaChartDataSet }


```js
import type { AreaChartDataSet } from 'scenerystack/bamboo';
```


( [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[]



## Type AreaChartOptions {: #AreaChartOptions }


```js
import type { AreaChartOptions } from 'scenerystack/bamboo';
```


- **baseline**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [PathOptions](../scenery/Path.md#PathOptions)




## Source Code

See the source for [AreaPlot.ts](https://github.com/phetsims/bamboo/blob/main/js/AreaPlot.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
