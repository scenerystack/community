# PolygonMitchellNetravali

## Overview

Mitchell-Netravali filter (B=1/3, C=1/3 ) contribution given a polygon

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PolygonMitchellNetravali {: #PolygonMitchellNetravali }


```js
import { PolygonMitchellNetravali } from 'scenerystack/alpenglow';
```
### Static Methods

#### evaluateFull( pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateFull data-toc-label='evaluateFull' }

#### evaluateLinearEdges( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateLinearEdges data-toc-label='evaluateLinearEdges' }

Evaluates the contribution of the (clipped) polygon to the filter at the given point. minX/minY note the lower
coordinates of the clipped polygon unit pixel.

#### evaluatePolygons( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span>, pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluatePolygons data-toc-label='evaluatePolygons' }

Evaluates the contribution of the (clipped) polygon to the filter at the given point. minX/minY note the lower
coordinates of the clipped polygon unit pixel.

#### evaluateFilter( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateFilter data-toc-label='evaluateFilter' }

Evaluates the 1-dimensional Mitchell-Netravali filter at the given point. Outside -2&lt;=t&lt;=2, the filter will be
zero.

NOTE: It is a separable filter, so if you need the 2D equivalent, just do
evaluateFilter( x ) * evaluateFilter( y )

#### evaluate( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluate data-toc-label='evaluate' }

#### evaluateCase00( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateCase00 data-toc-label='evaluateCase00' }

#### evaluateCase10( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateCase10 data-toc-label='evaluateCase10' }

#### evaluateCase11( p0x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluateCase11 data-toc-label='evaluateCase11' }

### Static Properties

#### full00 {: #full00 data-toc-label='full00' }

Values for the three cases, if presented with a full "pixel", e.g.
PolygonMitchellNetravali.evaluateCase00( 0, 0, 1, 0 ) +
PolygonMitchellNetravali.evaluateCase00( 1, 0, 1, 1 ) +
PolygonMitchellNetravali.evaluateCase00( 1, 1, 0, 1 ) +
PolygonMitchellNetravali.evaluateCase00( 0, 1, 0, 0 )
0.2640817901234568
PolygonMitchellNetravali.evaluateCase10( 1, 0, 2, 0 ) +
PolygonMitchellNetravali.evaluateCase10( 2, 0, 2, 1 ) +
PolygonMitchellNetravali.evaluateCase10( 2, 1, 1, 1 ) +
PolygonMitchellNetravali.evaluateCase10( 1, 1, 1, 0 )
-0.007137345679012345
PolygonMitchellNetravali.evaluateCase11( 1, 1, 2, 1 ) +
PolygonMitchellNetravali.evaluateCase11( 2, 1, 2, 2 ) +
PolygonMitchellNetravali.evaluateCase11( 2, 2, 1, 2 ) +
PolygonMitchellNetravali.evaluateCase11( 1, 2, 1, 1 )
0.0001929012345679021

#### full10 {: #full10 data-toc-label='full10' }

#### full11 {: #full11 data-toc-label='full11' }



## Source Code

See the source for [PolygonMitchellNetravali.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/PolygonMitchellNetravali.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
