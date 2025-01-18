# UpDownArrowPlot

## Overview

Shows a plot with arrows for numerical data (where the x-value of the bar is a number).

@author Jesse Greenberg (PhET Interactive Simulations)

## Class UpDownArrowPlot {: #UpDownArrowPlot }


```js
import { UpDownArrowPlot } from 'scenerystack/bamboo';
```
### Constructor

#### new UpDownArrowPlot( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, dataSet : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, providedOptions? : <span style="font-weight: 400;">[UpDownArrowPlotOptions](../bamboo/UpDownArrowPlot.md#UpDownArrowPlotOptions)</span> ) {: #UpDownArrowPlot-constructor data-toc-label='new UpDownArrowPlot' }

### Instance Methods

#### setDataSet( dataSet : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #setDataSet data-toc-label='setDataSet' }

Sets the dataSet and redraws the plot.

#### update() {: #update data-toc-label='update' }

Redraw the plot. Called automatically if you update the dataSet with setDataSet(). But you can call this
yourself if you want to set the dataSet directly and then update later (presumably for performance).

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### dataSet : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #dataSet data-toc-label='dataSet' }

if you change this directly, you are responsible for calling update



## Type UpDownArrowPlotOptions {: #UpDownArrowPlotOptions }


```js
import type { UpDownArrowPlotOptions } from 'scenerystack/bamboo';
```


- **arrowNodeOptions**?: [ArrowNodeOptions](../scenery-phet/ArrowNode.md#ArrowNodeOptions)
- **pointToPaintableFields**?: ( point: [Vector2](../dot/Vector2.md) ) =&gt; [PaintableOptions](../scenery/Paintable.md#PaintableOptions)
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [UpDownArrowPlot.ts](https://github.com/phetsims/bamboo/blob/main/js/UpDownArrowPlot.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
