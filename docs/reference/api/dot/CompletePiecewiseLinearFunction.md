# CompletePiecewiseLinearFunction

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/CompletePiecewiseLinearFunction.ts](https://github.com/phetsims/dot/blob/main/js/CompletePiecewiseLinearFunction.ts) for the most up-to-date information.

## Overview

Describes a 1d complete (fully defined for any number) function, where values are extrapolated given the final end
points.

E.g. if the points (0,0) and (1,1) are provided, it represents the function f(x) = x for ALL values, especially
values outside of the range [0,1]. For example, f(6) = 6.

If a single point is provided, it represents a constant function.


@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class CompletePiecewiseLinearFunction {: #CompletePiecewiseLinearFunction }


```js
import { CompletePiecewiseLinearFunction } from 'scenerystack/dot';
```
### Constructor

#### new CompletePiecewiseLinearFunction( points : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #CompletePiecewiseLinearFunction-constructor data-toc-label='new CompletePiecewiseLinearFunction' }

### Instance Methods

#### findMatchingPair( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[ [Vector2](../dot/Vector2.md), [Vector2](../dot/Vector2.md) ]</span> {: #findMatchingPair data-toc-label='findMatchingPair' }

Returns the pair of points that the x value is defined by.

NOTE: x may NOT be contained in these points, if it's either less than or greater than any points in the points
list.

#### evaluate( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluate data-toc-label='evaluate' }

Evaluates the function at the given x value, e.g. returns f(x).

#### plus( linearFunction : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> ) : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #plus data-toc-label='plus' }

Returns a CompletePiecewiseLinearFunction that's the result of adding the two functions.

#### minus( linearFunction : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> ) : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #minus data-toc-label='minus' }

Returns a CompletePiecewiseLinearFunction that's the result of subtracting the two functions.

#### min( linearFunction : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> ) : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #min data-toc-label='min' }

Returns a CompletePiecewiseLinearFunction that's the result of taking the minimum of the two functions

#### max( linearFunction : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> ) : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #max data-toc-label='max' }

Returns a CompletePiecewiseLinearFunction that's the result of taking the maximum of the two functions

#### withXValues( xValues : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #withXValues data-toc-label='withXValues' }

Allows redefining or clamping/truncating the function by only representing it from the given x values

#### inverted() : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #inverted data-toc-label='inverted' }

Returns an inverted form of the function (assuming it is monotonically increasing or monotonically decreasing)

### Instance Properties

#### points : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #points data-toc-label='points' }

### Static Methods

#### sum( ...functions : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)[]</span> ) : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #sum data-toc-label='sum' }

#### min( ...functions : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)[]</span> ) : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #min data-toc-label='min' }

#### max( ...functions : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)[]</span> ) : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #max data-toc-label='max' }

#### constant( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #constant data-toc-label='constant' }

#### linear( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[CompletePiecewiseLinearFunction](../dot/CompletePiecewiseLinearFunction.md)</span> {: #linear data-toc-label='linear' }

Represents the function ax+b



## Source Code

See the source for [CompletePiecewiseLinearFunction.ts](https://github.com/phetsims/dot/blob/main/js/CompletePiecewiseLinearFunction.ts) in the [dot](https://github.com/phetsims/dot) repository.
