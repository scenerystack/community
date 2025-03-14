# CanvasPainter

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/bamboo/blob/main/js/CanvasPainter.ts](https://github.com/phetsims/bamboo/blob/main/js/CanvasPainter.ts) for the most up-to-date information.

## Overview

CanvasPainter is the abstract base class for bamboo components that use the Canvas API. Typically this would
render something, but some implementations may just change the context state (such as transform or stroke).

@author Sam Reid (PhET Interactive Simulations)

## Class CanvasPainter {: #CanvasPainter }


```js
import { CanvasPainter } from 'scenerystack/bamboo';
```
### Constructor

#### new CanvasPainter( providedOptions? : <span style="font-weight: 400;">[CanvasPainterOptions](../bamboo/CanvasPainter.md#CanvasPainterOptions)</span> ) {: #CanvasPainter-constructor data-toc-label='new CanvasPainter' }

### Instance Methods

#### paintCanvas( context : <span style="font-weight: 400;">[CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)</span> ) {: #paintCanvas data-toc-label='paintCanvas' }

override to paint or change the canvas context state.  Only called if this.visible is true

### Instance Properties

#### visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #visible data-toc-label='visible' }

if changed, you should probably invalidate the parent ChartCanvasNode

#### isDisposed : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDisposed data-toc-label='isDisposed' }

(protected)



## Type CanvasPainterOptions {: #CanvasPainterOptions }


```js
import type { CanvasPainterOptions } from 'scenerystack/bamboo';
```


- **visible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [CanvasPainter.ts](https://github.com/phetsims/bamboo/blob/main/js/CanvasPainter.ts) in the [bamboo](https://github.com/phetsims/bamboo) repository.
