# PiecewiseLinearFunction

## Overview

Evaluates points on a piecewise linear function.

@author Sam Reid (PhET Interactive Simulations)

## Class PiecewiseLinearFunction {: #PiecewiseLinearFunction }


```js
import { PiecewiseLinearFunction } from 'scenerystack/dot';
```
### Constructor

#### new PiecewiseLinearFunction( array : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) {: #PiecewiseLinearFunction-constructor data-toc-label='new PiecewiseLinearFunction' }

### Instance Methods

#### evaluate( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluate data-toc-label='evaluate' }

### Static Methods

#### evaluate( array : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluate data-toc-label='evaluate' }

This algorithm generates no garbage
@param array - in the form x0,y0, x1,y1, x2,y2, etc.  Points do not have to be ordered from low to high x
                        - points cannot have a different y value for the same x value (not checked)
@param x



## Source Code

See the source for [PiecewiseLinearFunction.ts](https://github.com/phetsims/dot/blob/main/js/PiecewiseLinearFunction.ts) in the [dot](https://github.com/phetsims/dot) repository.
