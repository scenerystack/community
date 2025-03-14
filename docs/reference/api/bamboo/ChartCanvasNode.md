# ChartCanvasNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/bamboo/blob/main/js/ChartCanvasNode.ts](https://github.com/phetsims/bamboo/blob/main/js/ChartCanvasNode.ts) for the most up-to-date information.

## Overview

ChartCanvasNode renders to a canvas. It is usually preferable to use the other scenery Node-based
renderers, but this one can be necessary for performance-critical charts.

@author Sam Reid (PhET Interactive Simulations)

## Class ChartCanvasNode {: #ChartCanvasNode }


```js
import { ChartCanvasNode } from 'scenerystack/bamboo';
```
### Constructor

#### new ChartCanvasNode( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, painters : <span style="font-weight: 400;">[CanvasPainter](../bamboo/CanvasPainter.md)[]</span>, providedOptions? : <span style="font-weight: 400;">[StrictOmit](../phet-core/StrictOmit.md)&lt;[CanvasNodeOptions](../scenery/CanvasNode.md#CanvasNodeOptions), 'canvasBounds'&gt;</span> ) {: #ChartCanvasNode-constructor data-toc-label='new ChartCanvasNode' }

### Instance Methods

#### setPainters( painters : <span style="font-weight: 400;">[CanvasPainter](../bamboo/CanvasPainter.md)[]</span> ) {: #setPainters data-toc-label='setPainters' }

Sets the painters and redraws the chart.

#### update() {: #update data-toc-label='update' }

#### paintCanvas( context : <span style="font-weight: 400;">[CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)</span> ) {: #paintCanvas data-toc-label='paintCanvas' }

Used to redraw the CanvasNode. Use CanvasNode.invalidatePaint to signify that it is time to redraw the canvas.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### painters : <span style="font-weight: 400;">[CanvasPainter](../bamboo/CanvasPainter.md)[]</span> {: #painters data-toc-label='painters' }

if you change this directly, you are responsible for calling update



## Type ChartCanvasNodeOptions {: #ChartCanvasNodeOptions }


```js
import type { ChartCanvasNodeOptions } from 'scenerystack/bamboo';
```


[CanvasNodeOptions](../scenery/CanvasNode.md#CanvasNodeOptions)



## Source Code

See the source for [ChartCanvasNode.ts](https://github.com/phetsims/bamboo/blob/main/js/ChartCanvasNode.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
