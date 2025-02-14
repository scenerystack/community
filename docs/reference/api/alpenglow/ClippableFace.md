# ClippableFace

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/cag/ClippableFace.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/ClippableFace.ts) for the most up-to-date information.

## Overview

An interface for clippable/subdivide-able faces, with defined bounds and area.

NOTE: "fake" corners are needed for some clipping operations (notably the binary line clipping operations, without
bounds). These are corners that are not actually part of the face, but are used when we don't have access to the
entire polygon, and need to output edges which will match up with other results. In these cases, we might generate
edges that go OUTSIDE of the resulting bounds, so if we need to access bounds of the ClippableFace, we'll need to
ignore these "fake" corners.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type BinaryClipCallback {: #BinaryClipCallback }


```js
import type { BinaryClipCallback } from 'scenerystack/alpenglow';
```


(
  isMinFace: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>,
  startX: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  startY: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  endX: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  endY: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  startPoint: [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>,
  endPoint: [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Class BinaryClipping {: #BinaryClipping }


Clipping arbitrary (degenerate, non-convex, self-intersecting, etc.) polygons based on binary criteria (e.g.
left/right, inside/outside).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { BinaryClipping } from 'scenerystack/alpenglow';
```
### Static Methods

#### binaryXClipEdge( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, maxLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) {: #BinaryClipping-binaryXClipEdge data-toc-label='BinaryClipping-binaryXClipEdge' }

#### binaryYClipEdge( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, maxLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) {: #BinaryClipping-binaryYClipEdge data-toc-label='BinaryClipping-binaryYClipEdge' }

#### binaryLineClipEdge( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, maxLinearEdges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) {: #BinaryClipping-binaryLineClipEdge data-toc-label='BinaryClipping-binaryLineClipEdge' }

line where dot( normal, point ) - value = 0. "min" side is dot-products &lt; value, "max" side is dot-products &gt; value

#### binaryXClipPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, maxPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #BinaryClipping-binaryXClipPolygon data-toc-label='BinaryClipping-binaryXClipPolygon' }

#### binaryYClipPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, maxPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #BinaryClipping-binaryYClipPolygon data-toc-label='BinaryClipping-binaryYClipPolygon' }

#### binaryLineClipPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, maxPolygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) {: #BinaryClipping-binaryLineClipPolygon data-toc-label='BinaryClipping-binaryLineClipPolygon' }

line where dot( normal, point ) - value = 0. "min" side is dot-products &lt; value, "max" side is dot-products &gt; value

#### binaryXClipEdgedClipped( face : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span>, x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace); maxFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace) }</span> {: #BinaryClipping-binaryXClipEdgedClipped data-toc-label='BinaryClipping-binaryXClipEdgedClipped' }

#### binaryYClipEdgedClipped( face : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace); maxFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace) }</span> {: #BinaryClipping-binaryYClipEdgedClipped data-toc-label='BinaryClipping-binaryYClipEdgedClipped' }



## Type BinaryPolygonCompleteCallback {: #BinaryPolygonCompleteCallback }


```js
import type { BinaryPolygonCompleteCallback } from 'scenerystack/alpenglow';
```


(
  isMinFace: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Class CircularClipping {: #CircularClipping }


Clipping arbitrary (degenerate, non-convex, self-intersecting, etc.) polygons to the inside/outside of a circle.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { CircularClipping } from 'scenerystack/alpenglow';
```
### Static Methods

#### binaryCircularClipEdges( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxAngleSplit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, inside : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, outside : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) {: #CircularClipping-binaryCircularClipEdges data-toc-label='CircularClipping-binaryCircularClipEdges' }

Clips a polygon (represented by unsorted LinearEdges) by a circle. This will output both the inside and outside,
appending LinearEdges to the given arrays.

@param edges - the edges of the polygon to clip
@param center - the center of the circle
@param radius - the radius of the circle
@param maxAngleSplit - the maximum angle of a circular arc that will be converted into a linear edge
@param inside - (OUTPUT) the edges that are inside the circle (will be appended to)
@param outside - (OUTPUT) the edges that are outside the circle (will be appended to)

#### binaryCircularClipPolygon( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span>, center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxAngleSplit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, inside : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span>, outside : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> ) {: #CircularClipping-binaryCircularClipPolygon data-toc-label='CircularClipping-binaryCircularClipPolygon' }

Clips a polygon (represented by polygonal vertex lists) by a circle. This will output both the inside and outside,
appending vertices to the arrays

@param polygons
@param center - the center of the circle
@param radius - the radius of the circle
@param maxAngleSplit - the maximum angle of a circular arc that will be converted into a linear edge
@param inside - (OUTPUT) the polygon that is inside the circle (will be appended to)
@param outside - (OUTPUT) the polygon that is outside the circle (will be appended to)

#### binaryCircularTracingClipIterate( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span>, center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxAngleSplit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, callback : <span style="font-weight: 400;">[BinaryClipCallback](../alpenglow/ClippableFace.md#BinaryClipCallback)</span>, polygonCompleteCallback : <span style="font-weight: 400;">[BinaryPolygonCompleteCallback](../alpenglow/ClippableFace.md#BinaryPolygonCompleteCallback)</span> ) {: #CircularClipping-binaryCircularTracingClipIterate data-toc-label='CircularClipping-binaryCircularTracingClipIterate' }

Clips a polygon (represented by polygonal vertex lists) by a circle. This will output both the inside and outside,
appending vertices to the arrays.

maxAngleSplit is the maximum angle of a circular arc that will be converted into a linear edge.

TODO: test this!



## Type ClippableFace {: #ClippableFace }


TODO: assertions that all types of ClippableFace give the same results for the same methods

```js
import type { ClippableFace } from 'scenerystack/alpenglow';
```






## Type ClippableFaceAccumulator {: #ClippableFaceAccumulator }


This is a type meant for building a ClippableFace (of a specific type) by adding edges, and (optionally) marking
where we have finished one polygon, and are now going to add edges for another polygon.

When you are done adding edges, use finalizeFace() to get the resulting ClippableFace. If there is no data that gives
a non-zero area face, it will return null. This will also reset the internal state, so it can be used to create a
fresh new face.

```js
import type { ClippableFaceAccumulator } from 'scenerystack/alpenglow';
```


- **usesEndPoint**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  A performance marker, such that if this is false, the user can provide arbitrary data to endX/endY/endPoint and
  it won't matter. This is primarily for polygonal data, where we don't want to require computing the end-data
  since it will only use the start point of each edge.




## Class EdgedClippedFace {: #EdgedClippedFace }


A ClippableFace based on a set of line segment edges, where (a) it is contained within a bounding box, and (b)
line segments going along the full border of the bounding box (from one corner to another) will be counted
separately. This helps with performance, since EdgedFace on its own would build up large counts of these edges
that "undo" each other during recursive clipping operations.

Should still represent multiple closed loops, but it is not explicit.

"implicit" edges/vertices are those defined by the clipped counts (minXCount, etc.)
"explicit" edges/vertices are those in the edges list

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { EdgedClippedFace } from 'scenerystack/alpenglow';
```
### Constructor

#### new EdgedClippedFace( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minXCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minYCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxXCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxYCount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #EdgedClippedFace-EdgedClippedFace-constructor data-toc-label='new EdgedClippedFace-EdgedClippedFace' }

### Instance Methods

#### toPolygonalFace( epsilon ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)</span> {: #EdgedClippedFace-toPolygonalFace data-toc-label='EdgedClippedFace-toPolygonalFace' }

Converts the face to a polygonal face. Epsilon is used to determine whether start/end points match.

NOTE: This is likely a low-performance method, and should only be used for debugging.

#### toEdgedFace() : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #EdgedClippedFace-toEdgedFace data-toc-label='EdgedClippedFace-toEdgedFace' }

Converts the face to an edged face.

#### toEdgedClippedFace( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-toEdgedClippedFace data-toc-label='EdgedClippedFace-toEdgedClippedFace' }

Converts the face to a edged-clipped face (scanning the edges, to convert bounds-side edges to counts)

#### toEdgedClippedFaceWithoutCheck( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-toEdgedClippedFaceWithoutCheck data-toc-label='EdgedClippedFace-toEdgedClippedFaceWithoutCheck' }

Converts the face to a edged-clipped face (without scanning the edges to see if they are bounds-side)

#### forEachImplicitEdge( callback : <span style="font-weight: 400;">( startPoint: [Vector2](../dot/Vector2.md), endPoint: [Vector2](../dot/Vector2.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #EdgedClippedFace-forEachImplicitEdge data-toc-label='EdgedClippedFace-forEachImplicitEdge' }

#### getImplicitEdges() : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> {: #EdgedClippedFace-getImplicitEdges data-toc-label='EdgedClippedFace-getImplicitEdges' }

#### getAllEdges() : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> {: #EdgedClippedFace-getAllEdges data-toc-label='EdgedClippedFace-getAllEdges' }

#### getShape( epsilon ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #EdgedClippedFace-getShape data-toc-label='EdgedClippedFace-getShape' }

Returns a Shape for the face.

NOTE: This is likely a low-performance method, and should only be used for debugging.

#### getMinXMinY() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EdgedClippedFace-getMinXMinY data-toc-label='EdgedClippedFace-getMinXMinY' }

#### getMinXMaxY() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EdgedClippedFace-getMinXMaxY data-toc-label='EdgedClippedFace-getMinXMaxY' }

#### getMaxXMinY() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EdgedClippedFace-getMaxXMinY data-toc-label='EdgedClippedFace-getMaxXMinY' }

#### getMaxXMaxY() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EdgedClippedFace-getMaxXMaxY data-toc-label='EdgedClippedFace-getMaxXMaxY' }

#### hasMinXMinY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EdgedClippedFace-hasMinXMinY data-toc-label='EdgedClippedFace-hasMinXMinY' }

Returns whether this face has an implicit vertex at the minX-minY corner.

#### hasMinXMaxY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EdgedClippedFace-hasMinXMaxY data-toc-label='EdgedClippedFace-hasMinXMaxY' }

Returns whether this face has an implicit vertex at the minX-maxY corner.

#### hasMaxXMinY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EdgedClippedFace-hasMaxXMinY data-toc-label='EdgedClippedFace-hasMaxXMinY' }

Returns whether this face has an implicit vertex at the maxX-minY corner.

#### hasMaxXMaxY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EdgedClippedFace-hasMaxXMaxY data-toc-label='EdgedClippedFace-hasMaxXMaxY' }

Returns whether this face has an implicit vertex at the maxX-maxY corner.

#### hasMinX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EdgedClippedFace-hasMinX data-toc-label='EdgedClippedFace-hasMinX' }

Returns whether this face has an implicit vertex with minX.

#### hasMinY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EdgedClippedFace-hasMinY data-toc-label='EdgedClippedFace-hasMinY' }

Returns whether this face has an implicit vertex with minY.

#### hasMaxX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EdgedClippedFace-hasMaxX data-toc-label='EdgedClippedFace-hasMaxX' }

Returns whether this face has an implicit vertex with maxX.

#### hasMaxY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EdgedClippedFace-hasMaxY data-toc-label='EdgedClippedFace-hasMaxY' }

Returns whether this face has an implicit vertex with maxY.

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #EdgedClippedFace-getBounds data-toc-label='EdgedClippedFace-getBounds' }

Returns the bounds of the face (ignoring any "fake" edges, if the type supports them)

#### getDotRange( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #EdgedClippedFace-getDotRange data-toc-label='EdgedClippedFace-getDotRange' }

Returns the range of values for the dot product of the given normal with any point contained within the face
(for polygons, this is the same as the range of values for the dot product of the normal with any vertex).

#### getDistanceRangeToEdges( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #EdgedClippedFace-getDistanceRangeToEdges data-toc-label='EdgedClippedFace-getDistanceRangeToEdges' }

Returns the range of distances from the given point to every point along the edges of the face.
For instance, if the face was the unit cube, the range would be 1/2 to sqrt(2), for distances to the middles of
the edges and the corners respectively.

#### getDistanceRangeToInside( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #EdgedClippedFace-getDistanceRangeToInside data-toc-label='EdgedClippedFace-getDistanceRangeToInside' }

Returns the range of distances from the given point to every point inside the face. The upper bound should be
the same as getDistanceRangeToEdges, however the lower bound may be 0 if the point is inside the face.

#### getArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedClippedFace-getArea data-toc-label='EdgedClippedFace-getArea' }

Returns the signed area of the face (positive if the vertices are in counter-clockwise order, negative if clockwise)

#### getCentroidPartial() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EdgedClippedFace-getCentroidPartial data-toc-label='EdgedClippedFace-getCentroidPartial' }

Returns the partial for the centroid computation. These should be summed up, divided by 6, and divided by the area
to give the full centroid

#### getCentroid( area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EdgedClippedFace-getCentroid data-toc-label='EdgedClippedFace-getCentroid' }

Returns the centroid of the face (area is required for the typical integral required to evaluate)

#### getZero() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedClippedFace-getZero data-toc-label='EdgedClippedFace-getZero' }

Returns the evaluation of an integral that will be zero if the boundaries of the face are correctly closed.
It is designed so that if there is a "gap" and we have open boundaries, the result will likely be non-zero.

NOTE: This is only used for debugging, so performance is not a concern.

#### getAverageDistance( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedClippedFace-getAverageDistance data-toc-label='EdgedClippedFace-getAverageDistance' }

Returns the average distance from the given point to every point inside the face. The integral evaluation requires
the area (similarly to the centroid computation).

#### getAverageDistanceTransformedToOrigin( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedClippedFace-getAverageDistanceTransformedToOrigin data-toc-label='EdgedClippedFace-getAverageDistanceTransformedToOrigin' }

Returns the average distance from the origin to every point inside the face transformed by the given matrix.

#### getClipped( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-getClipped data-toc-label='EdgedClippedFace-getClipped' }

Returns a copy of the face that is clipped to be within the given axis-aligned bounding box.

#### getBinaryXClip( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace); maxFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace) }</span> {: #EdgedClippedFace-getBinaryXClip data-toc-label='EdgedClippedFace-getBinaryXClip' }

Returns two copies of the face, one that is clipped to be to the left of the given x value, and one that is
clipped to be to the right of the given x value.

The fakeCornerY is used to determine the "fake" corner that is used for unsorted-edge clipping.

#### getBinaryYClip( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace); maxFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace) }</span> {: #EdgedClippedFace-getBinaryYClip data-toc-label='EdgedClippedFace-getBinaryYClip' }

Returns two copies of the face, one that is clipped to y values less than the given y value, and one that is
clipped to values greater than the given y value.

The fakeCornerX is used to determine the "fake" corner that is used for unsorted-edge clipping.

#### getBinaryLineClip( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace); maxFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace) }</span> {: #EdgedClippedFace-getBinaryLineClip data-toc-label='EdgedClippedFace-getBinaryLineClip' }

Returns two copies of the face, one that is clipped to contain points where dot( normal, point ) &lt; value,
and one that is clipped to contain points where dot( normal, point ) &gt; value.

The fake corner perpendicular is used to determine the "fake" corner that is used for unsorted-edge clipping

#### getStripeLineClip( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, values : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)[]</span> {: #EdgedClippedFace-getStripeLineClip data-toc-label='EdgedClippedFace-getStripeLineClip' }

Returns an array of faces, clipped similarly to getBinaryLineClip, but with more than one (parallel) split line at
a time. The first face will be the one with dot( normal, point ) &lt; values[0], the second one with
values[ 0 ] &lt; dot( normal, point ) &lt; values[1], etc.

#### getBinaryCircularClip( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxAngleSplit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ insideFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace); outsideFace: [EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace) }</span> {: #EdgedClippedFace-getBinaryCircularClip data-toc-label='EdgedClippedFace-getBinaryCircularClip' }

Returns two copies of the face, one that is clipped to contain points inside the circle defined by the given
center and radius, and one that is clipped to contain points outside the circle.

NOTE: maxAngleSplit is used to determine the polygonal approximation of the circle. The returned result will not
have a chord with an angle greater than maxAngleSplit.

#### gridClipIterate( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, callback : <span style="font-weight: 400;">[GridClipCallback](../alpenglow/GridClipping.md#GridClipCallback)</span>, polygonCompleteCallback : <span style="font-weight: 400;">[PolygonCompleteCallback](../alpenglow/ClippableFace.md#PolygonCompleteCallback)</span> ) {: #EdgedClippedFace-gridClipIterate data-toc-label='EdgedClippedFace-gridClipIterate' }

Given an integral bounding box and step sizes (which define the grid), this will clip the face to each cell in the
grid, calling the callback for each cell's contributing edges (in order, if we are a PolygonalFace).
polygonCompleteCallback will be called whenever a polygon is completed (if we are a polygonal type of face).

#### getBilinearFiltered( pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedClippedFace-getBilinearFiltered data-toc-label='EdgedClippedFace-getBilinearFiltered' }

Returns the evaluation of the bilinear (tent) filter integrals for the given point, ASSUMING that the face
is clipped to the transformed unit square of x: [minX,minX+1], y: [minY,minY+1].

#### getMitchellNetravaliFiltered( pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedClippedFace-getMitchellNetravaliFiltered data-toc-label='EdgedClippedFace-getMitchellNetravaliFiltered' }

Returns the evaluation of the Mitchell-Netravali (1/3,1/3) filter integrals for the given point, ASSUMING that the
face is clipped to the transformed unit square of x: [minX,minX+1], y: [minY,minY+1].

#### containsPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EdgedClippedFace-containsPoint data-toc-label='EdgedClippedFace-containsPoint' }

Returns whether the face contains the given point.

#### getTransformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-getTransformed data-toc-label='EdgedClippedFace-getTransformed' }

Returns an affine-transformed version of the face.

#### getRounded( epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-getRounded data-toc-label='EdgedClippedFace-getRounded' }

Returns a rounded version of the face, where [-epsilon/2, epsilon/2] rounds to 0, etc.

#### withReversedEdges() : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-withReversedEdges data-toc-label='EdgedClippedFace-withReversedEdges' }

Returns a version of the face with the orientation of all of the edges swapped.

#### forEachEdge( callback : <span style="font-weight: 400;">( startPoint: [Vector2](../dot/Vector2.md), endPoint: [Vector2](../dot/Vector2.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #EdgedClippedFace-forEachEdge data-toc-label='EdgedClippedFace-forEachEdge' }

Calls the callback with points for each edge in the face.

#### getScratchAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)&gt;</span> {: #EdgedClippedFace-getScratchAccumulator data-toc-label='EdgedClippedFace-getScratchAccumulator' }

Returns a singleton accumulator for this type of face. This will always return the same instance, and should ONLY
be used if there will be no reentrant or co-occurring usage of this accumulator (i.e. only use it when you can
guarantee nothing else will be clipped at the same time). If two tasks try to use this at the same time, it will
likely break.

This is a method that can be called on an unknown-type face, to reproduce the same type of face. This is
important, since we can't feed unsorted edge data directly to a PolygonalFace's accumulator, and in general this
is the safest way to get an accumulator for a face.

#### getAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)&gt;</span> {: #EdgedClippedFace-getAccumulator data-toc-label='EdgedClippedFace-getAccumulator' }

Returns a new accumulator for this type of face. This should be used when concurrent clipping will need to happen.

This is a method that can be called on an unknown-type face, to reproduce the same type of face. This is
important, since we can't feed unsorted edge data directly to a PolygonalFace's accumulator, and in general this
is the safest way to get an accumulator for a face.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #EdgedClippedFace-toString data-toc-label='EdgedClippedFace-toString' }

Returns a debugging string.

#### serialize() : <span style="font-weight: 400;">[SerializedEdgedClippedFace](../alpenglow/ClippableFace.md#SerializedEdgedClippedFace)</span> {: #EdgedClippedFace-serialize data-toc-label='EdgedClippedFace-serialize' }

Returns a serialized version of the face, that should be able to be deserialized into the same type of face.
See {FaceType}.deserialize.

NOTE: If you don't know what type of face this is, use serializeClippableFace instead.

### Instance Properties

#### clippedEdgedFace : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #EdgedClippedFace-clippedEdgedFace data-toc-label='EdgedClippedFace-clippedEdgedFace' }

(readonly)

### Static Methods

#### fromEdges( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-fromEdges data-toc-label='EdgedClippedFace-fromEdges' }

#### fromEdgesWithoutCheck( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-fromEdgesWithoutCheck data-toc-label='EdgedClippedFace-fromEdgesWithoutCheck' }

#### getScratchAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)&gt;</span> {: #EdgedClippedFace-getScratchAccumulator data-toc-label='EdgedClippedFace-getScratchAccumulator' }

Returns a singleton accumulator for this type of face. This will always return the same instance, and should ONLY
be used if there will be no reentrant or co-occurring usage of this accumulator (i.e. only use it when you can
guarantee nothing else will be clipped at the same time). If two tasks try to use this at the same time, it will
likely break.

This should be used directly when you know you want an EdgedClippedFace as output.

#### deserialize( serialized : <span style="font-weight: 400;">[SerializedEdgedClippedFace](../alpenglow/ClippableFace.md#SerializedEdgedClippedFace)</span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-deserialize data-toc-label='EdgedClippedFace-deserialize' }

#### fromBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-fromBounds data-toc-label='EdgedClippedFace-fromBounds' }

#### fromBoundsValues( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFace-fromBoundsValues data-toc-label='EdgedClippedFace-fromBoundsValues' }



## Class EdgedClippedFaceAccumulator {: #EdgedClippedFaceAccumulator }


```js
import { EdgedClippedFaceAccumulator } from 'scenerystack/alpenglow';
```
### Instance Methods

#### addEdge( startX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #EdgedClippedFaceAccumulator-addEdge data-toc-label='EdgedClippedFaceAccumulator-addEdge' }

#### markNewPolygon() {: #EdgedClippedFaceAccumulator-markNewPolygon data-toc-label='EdgedClippedFaceAccumulator-markNewPolygon' }

#### setAccumulationBounds( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #EdgedClippedFaceAccumulator-setAccumulationBounds data-toc-label='EdgedClippedFaceAccumulator-setAccumulationBounds' }

#### finalizeFace() : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #EdgedClippedFaceAccumulator-finalizeFace data-toc-label='EdgedClippedFaceAccumulator-finalizeFace' }

Will reset it to the initial state also

#### finalizeEnsureFace( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedClippedFaceAccumulator-finalizeEnsureFace data-toc-label='EdgedClippedFaceAccumulator-finalizeEnsureFace' }

#### reset() {: #EdgedClippedFaceAccumulator-reset data-toc-label='EdgedClippedFaceAccumulator-reset' }

Will reset without creating a face

### Instance Properties

#### usesEndPoint {: #EdgedClippedFaceAccumulator-usesEndPoint data-toc-label='EdgedClippedFaceAccumulator-usesEndPoint' }

(readonly)



## Class EdgedFace {: #EdgedFace }


A ClippableFace based on a set of line segment edges. Should still represent multiple closed loops, but it is not
explicit.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { EdgedFace } from 'scenerystack/alpenglow';
```
### Constructor

#### new EdgedFace( edges : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span>, skipValidation ) {: #EdgedFace-EdgedFace-constructor data-toc-label='new EdgedFace-EdgedFace' }

### Instance Methods

#### toPolygonalFace( epsilon ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)</span> {: #EdgedFace-toPolygonalFace data-toc-label='EdgedFace-toPolygonalFace' }

Converts the face to a polygonal face. Epsilon is used to determine whether start/end points match.

NOTE: This is likely a low-performance method, and should only be used for debugging.

#### toEdgedFace() : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #EdgedFace-toEdgedFace data-toc-label='EdgedFace-toEdgedFace' }

Converts the face to an edged face.

#### toEdgedClippedFace( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedFace-toEdgedClippedFace data-toc-label='EdgedFace-toEdgedClippedFace' }

Converts the face to a edged-clipped face (scanning the edges, to convert bounds-side edges to counts)

#### toEdgedClippedFaceWithoutCheck( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #EdgedFace-toEdgedClippedFaceWithoutCheck data-toc-label='EdgedFace-toEdgedClippedFaceWithoutCheck' }

Converts the face to a edged-clipped face (without scanning the edges to see if they are bounds-side)

#### getShape( epsilon ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #EdgedFace-getShape data-toc-label='EdgedFace-getShape' }

Returns a Shape for the face.

NOTE: This is likely a low-performance method, and should only be used for debugging.

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #EdgedFace-getBounds data-toc-label='EdgedFace-getBounds' }

Returns the bounds of the face (ignoring any "fake" edges, if the type supports them)

#### getDotRange( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #EdgedFace-getDotRange data-toc-label='EdgedFace-getDotRange' }

Returns the range of values for the dot product of the given normal with any point contained within the face
(for polygons, this is the same as the range of values for the dot product of the normal with any vertex).

#### getDistanceRangeToEdges( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #EdgedFace-getDistanceRangeToEdges data-toc-label='EdgedFace-getDistanceRangeToEdges' }

Returns the range of distances from the given point to every point along the edges of the face.
For instance, if the face was the unit cube, the range would be 1/2 to sqrt(2), for distances to the middles of
the edges and the corners respectively.

#### getDistanceRangeToInside( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #EdgedFace-getDistanceRangeToInside data-toc-label='EdgedFace-getDistanceRangeToInside' }

Returns the range of distances from the given point to every point inside the face. The upper bound should be
the same as getDistanceRangeToEdges, however the lower bound may be 0 if the point is inside the face.

#### getArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedFace-getArea data-toc-label='EdgedFace-getArea' }

Returns the signed area of the face (positive if the vertices are in counter-clockwise order, negative if clockwise)

#### getCentroidPartial() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EdgedFace-getCentroidPartial data-toc-label='EdgedFace-getCentroidPartial' }

Returns the partial for the centroid computation. These should be summed up, divided by 6, and divided by the area
to give the full centroid

#### getCentroid( area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EdgedFace-getCentroid data-toc-label='EdgedFace-getCentroid' }

Returns the centroid of the face (area is required for the typical integral required to evaluate)

#### getZero() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedFace-getZero data-toc-label='EdgedFace-getZero' }

Returns the evaluation of an integral that will be zero if the boundaries of the face are correctly closed.
It is designed so that if there is a "gap" and we have open boundaries, the result will likely be non-zero.

NOTE: This is only used for debugging, so performance is not a concern.

#### getAverageDistance( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedFace-getAverageDistance data-toc-label='EdgedFace-getAverageDistance' }

Returns the average distance from the given point to every point inside the face. The integral evaluation requires
the area (similarly to the centroid computation).

#### getAverageDistanceTransformedToOrigin( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedFace-getAverageDistanceTransformedToOrigin data-toc-label='EdgedFace-getAverageDistanceTransformedToOrigin' }

Returns the average distance from the origin to every point inside the face transformed by the given matrix.

#### getClipped( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #EdgedFace-getClipped data-toc-label='EdgedFace-getClipped' }

Returns a copy of the face that is clipped to be within the given axis-aligned bounding box.

#### getBinaryXClip( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [EdgedFace](../alpenglow/ClippableFace.md#EdgedFace); maxFace: [EdgedFace](../alpenglow/ClippableFace.md#EdgedFace) }</span> {: #EdgedFace-getBinaryXClip data-toc-label='EdgedFace-getBinaryXClip' }

Returns two copies of the face, one that is clipped to be to the left of the given x value, and one that is
clipped to be to the right of the given x value.

The fakeCornerY is used to determine the "fake" corner that is used for unsorted-edge clipping.

#### getBinaryYClip( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [EdgedFace](../alpenglow/ClippableFace.md#EdgedFace); maxFace: [EdgedFace](../alpenglow/ClippableFace.md#EdgedFace) }</span> {: #EdgedFace-getBinaryYClip data-toc-label='EdgedFace-getBinaryYClip' }

Returns two copies of the face, one that is clipped to y values less than the given y value, and one that is
clipped to values greater than the given y value.

The fakeCornerX is used to determine the "fake" corner that is used for unsorted-edge clipping.

#### getBinaryLineClip( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [EdgedFace](../alpenglow/ClippableFace.md#EdgedFace); maxFace: [EdgedFace](../alpenglow/ClippableFace.md#EdgedFace) }</span> {: #EdgedFace-getBinaryLineClip data-toc-label='EdgedFace-getBinaryLineClip' }

Returns two copies of the face, one that is clipped to contain points where dot( normal, point ) &lt; value,
and one that is clipped to contain points where dot( normal, point ) &gt; value.

The fake corner perpendicular is used to determine the "fake" corner that is used for unsorted-edge clipping

#### getStripeLineClip( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, values : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)[]</span> {: #EdgedFace-getStripeLineClip data-toc-label='EdgedFace-getStripeLineClip' }

Returns an array of faces, clipped similarly to getBinaryLineClip, but with more than one (parallel) split line at
a time. The first face will be the one with dot( normal, point ) &lt; values[0], the second one with
values[ 0 ] &lt; dot( normal, point ) &lt; values[1], etc.

#### getBinaryCircularClip( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxAngleSplit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ insideFace: [EdgedFace](../alpenglow/ClippableFace.md#EdgedFace); outsideFace: [EdgedFace](../alpenglow/ClippableFace.md#EdgedFace) }</span> {: #EdgedFace-getBinaryCircularClip data-toc-label='EdgedFace-getBinaryCircularClip' }

Returns two copies of the face, one that is clipped to contain points inside the circle defined by the given
center and radius, and one that is clipped to contain points outside the circle.

NOTE: maxAngleSplit is used to determine the polygonal approximation of the circle. The returned result will not
have a chord with an angle greater than maxAngleSplit.

#### gridClipIterate( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, callback : <span style="font-weight: 400;">[GridClipCallback](../alpenglow/GridClipping.md#GridClipCallback)</span>, polygonCompleteCallback : <span style="font-weight: 400;">[PolygonCompleteCallback](../alpenglow/ClippableFace.md#PolygonCompleteCallback)</span> ) {: #EdgedFace-gridClipIterate data-toc-label='EdgedFace-gridClipIterate' }

Given an integral bounding box and step sizes (which define the grid), this will clip the face to each cell in the
grid, calling the callback for each cell's contributing edges (in order, if we are a PolygonalFace).
polygonCompleteCallback will be called whenever a polygon is completed (if we are a polygonal type of face).

#### getBilinearFiltered( pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedFace-getBilinearFiltered data-toc-label='EdgedFace-getBilinearFiltered' }

Returns the evaluation of the bilinear (tent) filter integrals for the given point, ASSUMING that the face
is clipped to the transformed unit square of x: [minX,minX+1], y: [minY,minY+1].

#### getMitchellNetravaliFiltered( pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EdgedFace-getMitchellNetravaliFiltered data-toc-label='EdgedFace-getMitchellNetravaliFiltered' }

Returns the evaluation of the Mitchell-Netravali (1/3,1/3) filter integrals for the given point, ASSUMING that the
face is clipped to the transformed unit square of x: [minX,minX+1], y: [minY,minY+1].

#### containsPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EdgedFace-containsPoint data-toc-label='EdgedFace-containsPoint' }

Returns whether the face contains the given point.

#### getTransformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #EdgedFace-getTransformed data-toc-label='EdgedFace-getTransformed' }

Returns an affine-transformed version of the face.

#### getRounded( epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #EdgedFace-getRounded data-toc-label='EdgedFace-getRounded' }

Returns a rounded version of the face, where [-epsilon/2, epsilon/2] rounds to 0, etc.

#### withReversedEdges() : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #EdgedFace-withReversedEdges data-toc-label='EdgedFace-withReversedEdges' }

Returns a version of the face with the orientation of all of the edges swapped.

#### forEachEdge( callback : <span style="font-weight: 400;">( startPoint: [Vector2](../dot/Vector2.md), endPoint: [Vector2](../dot/Vector2.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #EdgedFace-forEachEdge data-toc-label='EdgedFace-forEachEdge' }

Calls the callback with points for each edge in the face.

#### getScratchAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)&gt;</span> {: #EdgedFace-getScratchAccumulator data-toc-label='EdgedFace-getScratchAccumulator' }

Returns a singleton accumulator for this type of face. This will always return the same instance, and should ONLY
be used if there will be no reentrant or co-occurring usage of this accumulator (i.e. only use it when you can
guarantee nothing else will be clipped at the same time). If two tasks try to use this at the same time, it will
likely break.

This is a method that can be called on an unknown-type face, to reproduce the same type of face. This is
important, since we can't feed unsorted edge data directly to a PolygonalFace's accumulator, and in general this
is the safest way to get an accumulator for a face.

#### getAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)&gt;</span> {: #EdgedFace-getAccumulator data-toc-label='EdgedFace-getAccumulator' }

Returns a new accumulator for this type of face. This should be used when concurrent clipping will need to happen.

This is a method that can be called on an unknown-type face, to reproduce the same type of face. This is
important, since we can't feed unsorted edge data directly to a PolygonalFace's accumulator, and in general this
is the safest way to get an accumulator for a face.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #EdgedFace-toString data-toc-label='EdgedFace-toString' }

Returns a debugging string.

#### serialize() : <span style="font-weight: 400;">[SerializedEdgedFace](../alpenglow/ClippableFace.md#SerializedEdgedFace)</span> {: #EdgedFace-serialize data-toc-label='EdgedFace-serialize' }

Returns a serialized version of the face, that should be able to be deserialized into the same type of face.
See {FaceType}.deserialize.

NOTE: If you don't know what type of face this is, use serializeClippableFace instead.

### Static Methods

#### getScratchAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)&gt;</span> {: #EdgedFace-getScratchAccumulator data-toc-label='EdgedFace-getScratchAccumulator' }

Returns a singleton accumulator for this type of face. This will always return the same instance, and should ONLY
be used if there will be no reentrant or co-occurring usage of this accumulator (i.e. only use it when you can
guarantee nothing else will be clipped at the same time). If two tasks try to use this at the same time, it will
likely break.

This should be used directly when you know you want an EdgedFace as output.

#### deserialize( serialized : <span style="font-weight: 400;">[SerializedEdgedFace](../alpenglow/ClippableFace.md#SerializedEdgedFace)</span> ) : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #EdgedFace-deserialize data-toc-label='EdgedFace-deserialize' }

#### fromBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #EdgedFace-fromBounds data-toc-label='EdgedFace-fromBounds' }

#### fromBoundsValues( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #EdgedFace-fromBoundsValues data-toc-label='EdgedFace-fromBoundsValues' }



## Class EdgedFaceAccumulator {: #EdgedFaceAccumulator }


```js
import { EdgedFaceAccumulator } from 'scenerystack/alpenglow';
```
### Instance Methods

#### addEdge( startX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #EdgedFaceAccumulator-addEdge data-toc-label='EdgedFaceAccumulator-addEdge' }

#### markNewPolygon() {: #EdgedFaceAccumulator-markNewPolygon data-toc-label='EdgedFaceAccumulator-markNewPolygon' }

#### setAccumulationBounds( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #EdgedFaceAccumulator-setAccumulationBounds data-toc-label='EdgedFaceAccumulator-setAccumulationBounds' }

#### finalizeFace() : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #EdgedFaceAccumulator-finalizeFace data-toc-label='EdgedFaceAccumulator-finalizeFace' }

Will reset it to the initial state also

#### reset() {: #EdgedFaceAccumulator-reset data-toc-label='EdgedFaceAccumulator-reset' }

Will reset without creating a face

### Instance Properties

#### usesEndPoint {: #EdgedFaceAccumulator-usesEndPoint data-toc-label='EdgedFaceAccumulator-usesEndPoint' }

(readonly)



## Class PolygonalFace {: #PolygonalFace }


A ClippableFace from a set of polygons (each one is a closed loop of Vector2s)

Relies on the main boundary being positive-oriented, and the holes being negative-oriented and non-overlapping

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { PolygonalFace } from 'scenerystack/alpenglow';
```
### Constructor

#### new PolygonalFace( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> ) {: #PolygonalFace-PolygonalFace-constructor data-toc-label='new PolygonalFace-PolygonalFace' }

### Instance Methods

#### toEdgedFace() : <span style="font-weight: 400;">[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)</span> {: #PolygonalFace-toEdgedFace data-toc-label='PolygonalFace-toEdgedFace' }

Converts the face to an edged face.

#### toPolygonalFace( epsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)</span> {: #PolygonalFace-toPolygonalFace data-toc-label='PolygonalFace-toPolygonalFace' }

Converts the face to a polygonal face.

#### toEdgedClippedFace( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #PolygonalFace-toEdgedClippedFace data-toc-label='PolygonalFace-toEdgedClippedFace' }

Converts the face to a edged-clipped face (scanning the edges, to convert bounds-side edges to counts)

#### toEdgedClippedFaceWithoutCheck( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/ClippableFace.md#EdgedClippedFace)</span> {: #PolygonalFace-toEdgedClippedFaceWithoutCheck data-toc-label='PolygonalFace-toEdgedClippedFaceWithoutCheck' }

Converts the face to a edged-clipped face (without scanning the edges to see if they are bounds-side)

#### getShape( epsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #PolygonalFace-getShape data-toc-label='PolygonalFace-getShape' }

Returns a Shape for the face.

NOTE: This is likely a low-performance method, and should only be used for debugging.

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #PolygonalFace-getBounds data-toc-label='PolygonalFace-getBounds' }

Returns the bounds of the face (ignoring any "fake" edges, if the type supports them)

#### getDotRange( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #PolygonalFace-getDotRange data-toc-label='PolygonalFace-getDotRange' }

Returns the range of values for the dot product of the given normal with any point contained within the face
(for polygons, this is the same as the range of values for the dot product of the normal with any vertex).

#### getDistanceRangeToEdges( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #PolygonalFace-getDistanceRangeToEdges data-toc-label='PolygonalFace-getDistanceRangeToEdges' }

Returns the range of distances from the given point to every point along the edges of the face.
For instance, if the face was the unit cube, the range would be 1/2 to sqrt(2), for distances to the middles of
the edges and the corners respectively.

#### getDistanceRangeToInside( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #PolygonalFace-getDistanceRangeToInside data-toc-label='PolygonalFace-getDistanceRangeToInside' }

Returns the range of distances from the given point to every point inside the face. The upper bound should be
the same as getDistanceRangeToEdges, however the lower bound may be 0 if the point is inside the face.

#### getArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #PolygonalFace-getArea data-toc-label='PolygonalFace-getArea' }

Returns the signed area of the face (positive if the vertices are in counter-clockwise order, negative if clockwise)

#### getCentroidPartial() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #PolygonalFace-getCentroidPartial data-toc-label='PolygonalFace-getCentroidPartial' }

Returns the partial for the centroid computation. These should be summed up, divided by 6, and divided by the area
to give the full centroid

#### getCentroid( area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #PolygonalFace-getCentroid data-toc-label='PolygonalFace-getCentroid' }

Returns the centroid of the face (area is required for the typical integral required to evaluate)

#### getZero() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #PolygonalFace-getZero data-toc-label='PolygonalFace-getZero' }

Returns the evaluation of an integral that will be zero if the boundaries of the face are correctly closed.
It is designed so that if there is a "gap" and we have open boundaries, the result will likely be non-zero.

NOTE: This is only used for debugging, so performance is not a concern.

#### getAverageDistance( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #PolygonalFace-getAverageDistance data-toc-label='PolygonalFace-getAverageDistance' }

Returns the average distance from the given point to every point inside the face. The integral evaluation requires
the area (similarly to the centroid computation).

#### getAverageDistanceTransformedToOrigin( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #PolygonalFace-getAverageDistanceTransformedToOrigin data-toc-label='PolygonalFace-getAverageDistanceTransformedToOrigin' }

Returns the average distance from the origin to every point inside the face transformed by the given matrix.

#### getClipped( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)</span> {: #PolygonalFace-getClipped data-toc-label='PolygonalFace-getClipped' }

Returns a copy of the face that is clipped to be within the given axis-aligned bounding box.

#### getBinaryXClip( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace); maxFace: [PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace) }</span> {: #PolygonalFace-getBinaryXClip data-toc-label='PolygonalFace-getBinaryXClip' }

Returns two copies of the face, one that is clipped to be to the left of the given x value, and one that is
clipped to be to the right of the given x value.

The fakeCornerY is used to determine the "fake" corner that is used for unsorted-edge clipping.

#### getBinaryYClip( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace); maxFace: [PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace) }</span> {: #PolygonalFace-getBinaryYClip data-toc-label='PolygonalFace-getBinaryYClip' }

Returns two copies of the face, one that is clipped to y values less than the given y value, and one that is
clipped to values greater than the given y value.

The fakeCornerX is used to determine the "fake" corner that is used for unsorted-edge clipping.

#### getBinaryLineClip( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace); maxFace: [PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace) }</span> {: #PolygonalFace-getBinaryLineClip data-toc-label='PolygonalFace-getBinaryLineClip' }

Returns two copies of the face, one that is clipped to contain points where dot( normal, point ) &lt; value,
and one that is clipped to contain points where dot( normal, point ) &gt; value.

The fake corner perpendicular is used to determine the "fake" corner that is used for unsorted-edge clipping

#### getStripeLineClip( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, values : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)[]</span> {: #PolygonalFace-getStripeLineClip data-toc-label='PolygonalFace-getStripeLineClip' }

Returns an array of faces, clipped similarly to getBinaryLineClip, but with more than one (parallel) split line at
a time. The first face will be the one with dot( normal, point ) &lt; values[0], the second one with
values[ 0 ] &lt; dot( normal, point ) &lt; values[1], etc.

#### getBinaryCircularClip( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxAngleSplit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ insideFace: [PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace); outsideFace: [PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace) }</span> {: #PolygonalFace-getBinaryCircularClip data-toc-label='PolygonalFace-getBinaryCircularClip' }

Returns two copies of the face, one that is clipped to contain points inside the circle defined by the given
center and radius, and one that is clipped to contain points outside the circle.

NOTE: maxAngleSplit is used to determine the polygonal approximation of the circle. The returned result will not
have a chord with an angle greater than maxAngleSplit.

#### gridClipIterate( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, callback : <span style="font-weight: 400;">[GridClipCallback](../alpenglow/GridClipping.md#GridClipCallback)</span>, polygonCompleteCallback : <span style="font-weight: 400;">[PolygonCompleteCallback](../alpenglow/ClippableFace.md#PolygonCompleteCallback)</span> ) {: #PolygonalFace-gridClipIterate data-toc-label='PolygonalFace-gridClipIterate' }

Given an integral bounding box and step sizes (which define the grid), this will clip the face to each cell in the
grid, calling the callback for each cell's contributing edges (in order, if we are a PolygonalFace).
polygonCompleteCallback will be called whenever a polygon is completed (if we are a polygonal type of face).

#### getBilinearFiltered( pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #PolygonalFace-getBilinearFiltered data-toc-label='PolygonalFace-getBilinearFiltered' }

Returns the evaluation of the bilinear (tent) filter integrals for the given point, ASSUMING that the face
is clipped to the transformed unit square of x: [minX,minX+1], y: [minY,minY+1].

#### getMitchellNetravaliFiltered( pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #PolygonalFace-getMitchellNetravaliFiltered data-toc-label='PolygonalFace-getMitchellNetravaliFiltered' }

Returns the evaluation of the Mitchell-Netravali (1/3,1/3) filter integrals for the given point, ASSUMING that the
face is clipped to the transformed unit square of x: [minX,minX+1], y: [minY,minY+1].

#### containsPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #PolygonalFace-containsPoint data-toc-label='PolygonalFace-containsPoint' }

Returns whether the face contains the given point.

#### getTransformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)</span> {: #PolygonalFace-getTransformed data-toc-label='PolygonalFace-getTransformed' }

Returns an affine-transformed version of the face.

#### getRounded( epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)</span> {: #PolygonalFace-getRounded data-toc-label='PolygonalFace-getRounded' }

Returns a rounded version of the face, where [-epsilon/2, epsilon/2] rounds to 0, etc.

#### withReversedEdges() : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)</span> {: #PolygonalFace-withReversedEdges data-toc-label='PolygonalFace-withReversedEdges' }

Returns a version of the face with the orientation of all of the edges swapped.

#### forEachEdge( callback : <span style="font-weight: 400;">( startPoint: [Vector2](../dot/Vector2.md), endPoint: [Vector2](../dot/Vector2.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #PolygonalFace-forEachEdge data-toc-label='PolygonalFace-forEachEdge' }

Calls the callback with points for each edge in the face.

#### getScratchAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)&gt;</span> {: #PolygonalFace-getScratchAccumulator data-toc-label='PolygonalFace-getScratchAccumulator' }

Returns a singleton accumulator for this type of face. This will always return the same instance, and should ONLY
be used if there will be no reentrant or co-occurring usage of this accumulator (i.e. only use it when you can
guarantee nothing else will be clipped at the same time). If two tasks try to use this at the same time, it will
likely break.

This is a method that can be called on an unknown-type face, to reproduce the same type of face. This is
important, since we can't feed unsorted edge data directly to a PolygonalFace's accumulator, and in general this
is the safest way to get an accumulator for a face.

#### getAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)&gt;</span> {: #PolygonalFace-getAccumulator data-toc-label='PolygonalFace-getAccumulator' }

Returns a new accumulator for this type of face. This should be used when concurrent clipping will need to happen.

This is a method that can be called on an unknown-type face, to reproduce the same type of face. This is
important, since we can't feed unsorted edge data directly to a PolygonalFace's accumulator, and in general this
is the safest way to get an accumulator for a face.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #PolygonalFace-toString data-toc-label='PolygonalFace-toString' }

Returns a debugging string.

#### serialize() : <span style="font-weight: 400;">[SerializedPolygonalFace](../alpenglow/ClippableFace.md#SerializedPolygonalFace)</span> {: #PolygonalFace-serialize data-toc-label='PolygonalFace-serialize' }

Returns a serialized version of the face, that should be able to be deserialized into the same type of face.
See {FaceType}.deserialize.

NOTE: If you don't know what type of face this is, use serializeClippableFace instead.

### Static Methods

#### getScratchAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)&gt;</span> {: #PolygonalFace-getScratchAccumulator data-toc-label='PolygonalFace-getScratchAccumulator' }

Returns a singleton accumulator for this type of face. This will always return the same instance, and should ONLY
be used if there will be no reentrant or co-occurring usage of this accumulator (i.e. only use it when you can
guarantee nothing else will be clipped at the same time). If two tasks try to use this at the same time, it will
likely break.

This should be used directly when you know you want a PolygonalFace as output. NOTE: edges SHOULD be ordered such
that the endPoint of the last edge is the same as the startPoint of the first edge, UNLESS a loop has been closed
and a polygon has been marked.

#### deserialize( serialized : <span style="font-weight: 400;">[SerializedPolygonalFace](../alpenglow/ClippableFace.md#SerializedPolygonalFace)</span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)</span> {: #PolygonalFace-deserialize data-toc-label='PolygonalFace-deserialize' }

#### fromBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)</span> {: #PolygonalFace-fromBounds data-toc-label='PolygonalFace-fromBounds' }

#### fromBoundsValues( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)</span> {: #PolygonalFace-fromBoundsValues data-toc-label='PolygonalFace-fromBoundsValues' }



## Class PolygonalFaceAccumulator {: #PolygonalFaceAccumulator }


```js
import { PolygonalFaceAccumulator } from 'scenerystack/alpenglow';
```
### Instance Methods

#### addEdge( startX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #PolygonalFaceAccumulator-addEdge data-toc-label='PolygonalFaceAccumulator-addEdge' }

#### markNewPolygon() {: #PolygonalFaceAccumulator-markNewPolygon data-toc-label='PolygonalFaceAccumulator-markNewPolygon' }

#### setAccumulationBounds( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #PolygonalFaceAccumulator-setAccumulationBounds data-toc-label='PolygonalFaceAccumulator-setAccumulationBounds' }

#### finalizeFace() : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #PolygonalFaceAccumulator-finalizeFace data-toc-label='PolygonalFaceAccumulator-finalizeFace' }

Will reset it to the initial state also

#### reset() {: #PolygonalFaceAccumulator-reset data-toc-label='PolygonalFaceAccumulator-reset' }

Will reset without creating a face

### Instance Properties

#### usesEndPoint {: #PolygonalFaceAccumulator-usesEndPoint data-toc-label='PolygonalFaceAccumulator-usesEndPoint' }

(readonly)



## Type PolygonCompleteCallback {: #PolygonCompleteCallback }


```js
import type { PolygonCompleteCallback } from 'scenerystack/alpenglow';
```


() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type SerializedClippableFace {: #SerializedClippableFace }


```js
import type { SerializedClippableFace } from 'scenerystack/alpenglow';
```


{ type: "[PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace)"; face: [SerializedPolygonalFace](../alpenglow/ClippableFace.md#SerializedPolygonalFace) } | { type: "[EdgedFace](../alpenglow/ClippableFace.md#EdgedFace)"; face: [SerializedEdgedFace](../alpenglow/ClippableFace.md#SerializedEdgedFace) }



## Type SerializedEdgedClippedFace {: #SerializedEdgedClippedFace }


```js
import type { SerializedEdgedClippedFace } from 'scenerystack/alpenglow';
```


- **edges**: [SerializedLinearEdge](../alpenglow/LinearEdge.md#SerializedLinearEdge)[]
- **minX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minXCount**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minYCount**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxXCount**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxYCount**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Type SerializedEdgedFace {: #SerializedEdgedFace }


```js
import type { SerializedEdgedFace } from 'scenerystack/alpenglow';
```


- **edges**: [SerializedLinearEdge](../alpenglow/LinearEdge.md#SerializedLinearEdge)[]




## Type SerializedPolygonalFace {: #SerializedPolygonalFace }


```js
import type { SerializedPolygonalFace } from 'scenerystack/alpenglow';
```


- **polygons**: { x: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; y: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> }[][]




## Source Code

See the source for [ClippableFace.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/ClippableFace.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
