# LinePlot

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/bamboo/blob/main/js/LinePlot.ts](https://github.com/phetsims/bamboo/blob/main/js/LinePlot.ts) for the most up-to-date information.

## Overview

LinePlot renders a {Array.&lt;Vector2|null&gt;} dataSet by connecting the points with line segments.

Null values are skipped and allow you to create gaps in a plot. Examples:
dataset [ (0,0), (0,1), (0,2), (0,3) ] =&gt; 3 lines segments, connecting consecutive points
dataset [ (0,0), (0,1), null, (0,2), (0,3) ] =&gt; 2 lines segments, connecting the first 2 and last 2 points

@author Sam Reid (PhET Interactive Simulations)

## Class LinePlot {: #LinePlot }


```js
import { LinePlot } from 'scenerystack/bamboo';
```
### Constructor

#### new LinePlot( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, dataSet : <span style="font-weight: 400;">( [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[]</span>, providedOptions? : <span style="font-weight: 400;">[LinePlotOptions](../bamboo/LinePlot.md#LinePlotOptions)</span> ) {: #LinePlot-constructor data-toc-label='new LinePlot' }

### Instance Methods

#### setDataSet( dataSet : <span style="font-weight: 400;">( [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[]</span> ) {: #setDataSet data-toc-label='setDataSet' }

Sets the dataSet and redraws the plot. If instead the dataSet array is mutated, it is the client's responsibility
to call `update` or make sure `update` is called elsewhere (say, if the chart scrolls in that frame).

#### update() {: #update data-toc-label='update' }

Recomputes the rendered shape.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### dataSet : <span style="font-weight: 400;">( [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> )[]</span> {: #dataSet data-toc-label='dataSet' }

if you change this directly, you are responsible for calling update



## Type LinePlotOptions {: #LinePlotOptions }


```js
import type { LinePlotOptions } from 'scenerystack/bamboo';
```


[PathOptions](../scenery/Path.md#PathOptions)



## Source Code

See the source for [LinePlot.ts](https://github.com/phetsims/bamboo/blob/main/js/LinePlot.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
