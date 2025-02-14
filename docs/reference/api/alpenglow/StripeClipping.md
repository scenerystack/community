# StripeClipping

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/clip/StripeClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/StripeClipping.ts) for the most up-to-date information.

## Overview

Clipping arbitrary (degenerate, non-convex, self-intersecting, etc.) polygons to stripes (clipped between a series
of parallel lines).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class StripeClipping {: #StripeClipping }


```js
import { StripeClipping } from 'scenerystack/alpenglow';
```
### Static Methods

#### binaryStripeClipEdge( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, values : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, clippedEdgeCollection : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[][]</span> ) {: #binaryStripeClipEdge data-toc-label='binaryStripeClipEdge' }

line where dot( normal, point ) - value = 0. "min" side is dot-products &lt; value, "max" side is dot-products &gt; value

#### binaryStripeClipPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, values : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> {: #binaryStripeClipPolygon data-toc-label='binaryStripeClipPolygon' }

line where dot( normal, point ) - value = 0. "min" side is dot-products &lt; value, "max" side is dot-products &gt; value



## Source Code

See the source for [StripeClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/StripeClipping.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
