# CircularClipping

## Overview

Clipping arbitrary (degenerate, non-convex, self-intersecting, etc.) polygons to the inside/outside of a circle.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class CircularClipping {: #CircularClipping }


```js
import { CircularClipping } from 'scenerystack/alpenglow';
```
### Static Methods

#### binaryCircularClipEdges( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxAngleSplit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, inside : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, outside : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) {: #binaryCircularClipEdges data-toc-label='binaryCircularClipEdges' }

Clips a polygon (represented by unsorted LinearEdges) by a circle. This will output both the inside and outside,
appending LinearEdges to the given arrays.

@param edges - the edges of the polygon to clip
@param center - the center of the circle
@param radius - the radius of the circle
@param maxAngleSplit - the maximum angle of a circular arc that will be converted into a linear edge
@param inside - (OUTPUT) the edges that are inside the circle (will be appended to)
@param outside - (OUTPUT) the edges that are outside the circle (will be appended to)

#### binaryCircularClipPolygon( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span>, center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxAngleSplit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, inside : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span>, outside : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> ) {: #binaryCircularClipPolygon data-toc-label='binaryCircularClipPolygon' }

Clips a polygon (represented by polygonal vertex lists) by a circle. This will output both the inside and outside,
appending vertices to the arrays

@param polygons
@param center - the center of the circle
@param radius - the radius of the circle
@param maxAngleSplit - the maximum angle of a circular arc that will be converted into a linear edge
@param inside - (OUTPUT) the polygon that is inside the circle (will be appended to)
@param outside - (OUTPUT) the polygon that is outside the circle (will be appended to)

#### binaryCircularTracingClipIterate( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span>, center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxAngleSplit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, callback : <span style="font-weight: 400;">[BinaryClipCallback](../alpenglow/BinaryClipping.md#BinaryClipCallback)</span>, polygonCompleteCallback : <span style="font-weight: 400;">[BinaryPolygonCompleteCallback](../alpenglow/BinaryClipping.md#BinaryPolygonCompleteCallback)</span> ) {: #binaryCircularTracingClipIterate data-toc-label='binaryCircularTracingClipIterate' }

Clips a polygon (represented by polygonal vertex lists) by a circle. This will output both the inside and outside,
appending vertices to the arrays.

maxAngleSplit is the maximum angle of a circular arc that will be converted into a linear edge.

TODO: test this!



## Source Code

See the source for [CircularClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/CircularClipping.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
