# LinearEquationPlot

## Overview

LinearEquationPlot plots a straight line, described by y = mx + b.
This was created for the Google Group discussion in
https://groups.google.com/g/developing-interactive-simulations-in-html5/c/k9P78WZivJ4.

@author Chris Malley (PixelZoom, Inc.)

## Class LinearEquationPlot {: #LinearEquationPlot }


```js
import { LinearEquationPlot } from 'scenerystack/bamboo';
```
### Constructor

#### new LinearEquationPlot( chartTransform : <span style="font-weight: 400;">[ChartTransform](../bamboo/ChartTransform.md)</span>, m : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[LinearEquationPlotOptions](../bamboo/LinearEquationPlot.md#LinearEquationPlotOptions)</span> ) {: #LinearEquationPlot-constructor data-toc-label='new LinearEquationPlot' }

### Instance Methods

#### setSlope( m : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setSlope data-toc-label='setSlope' }

Sets the slope and redraws the plot

#### setYIntercept( b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setYIntercept data-toc-label='setYIntercept' }

Sets the y-intercept and redraws the plot.

#### solve( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #solve data-toc-label='solve' }

Solves for y.

#### dispose() {: #dispose data-toc-label='dispose' }



## Type LinearEquationPlotOptions {: #LinearEquationPlotOptions }


```js
import type { LinearEquationPlotOptions } from 'scenerystack/bamboo';
```


[LineOptions](../scenery/Line.md#LineOptions)



## Source Code

See the source for [LinearEquationPlot.ts](https://github.com/phetsims/bamboo/blob/main/js/LinearEquationPlot.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
