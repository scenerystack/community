# ScatterPlot

## Overview

Renders a dataset of Vector2[] using circles.

@author Sam Reid (PhET Interactive Simulations)

## Class ScatterPlot {: #ScatterPlot }


```js
import { ScatterPlot } from 'scenerystack/bamboo';
```
### Constructor

#### new ScatterPlot( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, dataSet : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, providedOptions? : <span style="font-weight: 400;">[ScatterPlotOptions](../bamboo/ScatterPlot.md#ScatterPlotOptions)</span> ) {: #ScatterPlot-constructor data-toc-label='new ScatterPlot' }

### Instance Methods

#### setDataSet( dataSet : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #setDataSet data-toc-label='setDataSet' }

Sets the dataSet and redraws the plot. If instead the dataSet array is mutated, it is the client's responsibility
to call `update` or make sure `update` is called elsewhere (say, if the chart scrolls in that frame).

#### update() {: #update data-toc-label='update' }

Recomputes the rendered shape.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### dataSet : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #dataSet data-toc-label='dataSet' }

if you change this directly, you are responsible for calling update



## Type ScatterPlotOptions {: #ScatterPlotOptions }


TODO https://github.com/phetsims/bamboo/issues/63 If 'fill' and 'stroke' are different, overlapping points will not look correct.

```js
import type { ScatterPlotOptions } from 'scenerystack/bamboo';
```


- **radius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [PathOptions](../scenery/Path.md#PathOptions)




## Source Code

See the source for [ScatterPlot.ts](https://github.com/phetsims/bamboo/blob/main/js/ScatterPlot.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
