# PolygonalFace

## Overview

A ClippableFace from a set of polygons (each one is a closed loop of Vector2s)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PolygonalFace {: #PolygonalFace }


Relies on the main boundary being positive-oriented, and the holes being negative-oriented and non-overlapping

```js
import { PolygonalFace } from 'scenerystack/alpenglow';
```
### Constructor

#### new PolygonalFace( polygons : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> ) {: #PolygonalFace-constructor data-toc-label='new PolygonalFace' }

### Instance Methods

#### toEdgedFace() : <span style="font-weight: 400;">[EdgedFace](../alpenglow/EdgedFace.md)</span> {: #toEdgedFace data-toc-label='toEdgedFace' }

Converts the face to an edged face.

#### toPolygonalFace( epsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/PolygonalFace.md)</span> {: #toPolygonalFace data-toc-label='toPolygonalFace' }

Converts the face to a polygonal face.

#### toEdgedClippedFace( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/EdgedClippedFace.md)</span> {: #toEdgedClippedFace data-toc-label='toEdgedClippedFace' }

Converts the face to a edged-clipped face (scanning the edges, to convert bounds-side edges to counts)

#### toEdgedClippedFaceWithoutCheck( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EdgedClippedFace](../alpenglow/EdgedClippedFace.md)</span> {: #toEdgedClippedFaceWithoutCheck data-toc-label='toEdgedClippedFaceWithoutCheck' }

Converts the face to a edged-clipped face (without scanning the edges to see if they are bounds-side)

#### getShape( epsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getShape data-toc-label='getShape' }

Returns a Shape for the face.

NOTE: This is likely a low-performance method, and should only be used for debugging.

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounds of the face (ignoring any "fake" edges, if the type supports them)

#### getDotRange( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getDotRange data-toc-label='getDotRange' }

Returns the range of values for the dot product of the given normal with any point contained within the face
(for polygons, this is the same as the range of values for the dot product of the normal with any vertex).

#### getDistanceRangeToEdges( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getDistanceRangeToEdges data-toc-label='getDistanceRangeToEdges' }

Returns the range of distances from the given point to every point along the edges of the face.
For instance, if the face was the unit cube, the range would be 1/2 to sqrt(2), for distances to the middles of
the edges and the corners respectively.

#### getDistanceRangeToInside( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getDistanceRangeToInside data-toc-label='getDistanceRangeToInside' }

Returns the range of distances from the given point to every point inside the face. The upper bound should be
the same as getDistanceRangeToEdges, however the lower bound may be 0 if the point is inside the face.

#### getArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getArea data-toc-label='getArea' }

Returns the signed area of the face (positive if the vertices are in counter-clockwise order, negative if clockwise)

#### getCentroidPartial() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getCentroidPartial data-toc-label='getCentroidPartial' }

Returns the partial for the centroid computation. These should be summed up, divided by 6, and divided by the area
to give the full centroid

#### getCentroid( area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getCentroid data-toc-label='getCentroid' }

Returns the centroid of the face (area is required for the typical integral required to evaluate)

#### getZero() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getZero data-toc-label='getZero' }

Returns the evaluation of an integral that will be zero if the boundaries of the face are correctly closed.
It is designed so that if there is a "gap" and we have open boundaries, the result will likely be non-zero.

NOTE: This is only used for debugging, so performance is not a concern.

#### getAverageDistance( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getAverageDistance data-toc-label='getAverageDistance' }

Returns the average distance from the given point to every point inside the face. The integral evaluation requires
the area (similarly to the centroid computation).

#### getAverageDistanceTransformedToOrigin( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getAverageDistanceTransformedToOrigin data-toc-label='getAverageDistanceTransformedToOrigin' }

Returns the average distance from the origin to every point inside the face transformed by the given matrix.

#### getClipped( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/PolygonalFace.md)</span> {: #getClipped data-toc-label='getClipped' }

Returns a copy of the face that is clipped to be within the given axis-aligned bounding box.

#### getBinaryXClip( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [PolygonalFace](../alpenglow/PolygonalFace.md); maxFace: [PolygonalFace](../alpenglow/PolygonalFace.md) }</span> {: #getBinaryXClip data-toc-label='getBinaryXClip' }

Returns two copies of the face, one that is clipped to be to the left of the given x value, and one that is
clipped to be to the right of the given x value.

The fakeCornerY is used to determine the "fake" corner that is used for unsorted-edge clipping.

#### getBinaryYClip( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [PolygonalFace](../alpenglow/PolygonalFace.md); maxFace: [PolygonalFace](../alpenglow/PolygonalFace.md) }</span> {: #getBinaryYClip data-toc-label='getBinaryYClip' }

Returns two copies of the face, one that is clipped to y values less than the given y value, and one that is
clipped to values greater than the given y value.

The fakeCornerX is used to determine the "fake" corner that is used for unsorted-edge clipping.

#### getBinaryLineClip( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ minFace: [PolygonalFace](../alpenglow/PolygonalFace.md); maxFace: [PolygonalFace](../alpenglow/PolygonalFace.md) }</span> {: #getBinaryLineClip data-toc-label='getBinaryLineClip' }

Returns two copies of the face, one that is clipped to contain points where dot( normal, point ) &lt; value,
and one that is clipped to contain points where dot( normal, point ) &gt; value.

The fake corner perpendicular is used to determine the "fake" corner that is used for unsorted-edge clipping

#### getStripeLineClip( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, values : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, fakeCornerPerpendicular : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/PolygonalFace.md)[]</span> {: #getStripeLineClip data-toc-label='getStripeLineClip' }

Returns an array of faces, clipped similarly to getBinaryLineClip, but with more than one (parallel) split line at
a time. The first face will be the one with dot( normal, point ) &lt; values[0], the second one with
values[ 0 ] &lt; dot( normal, point ) &lt; values[1], etc.

#### getBinaryCircularClip( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxAngleSplit : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">{ insideFace: [PolygonalFace](../alpenglow/PolygonalFace.md); outsideFace: [PolygonalFace](../alpenglow/PolygonalFace.md) }</span> {: #getBinaryCircularClip data-toc-label='getBinaryCircularClip' }

Returns two copies of the face, one that is clipped to contain points inside the circle defined by the given
center and radius, and one that is clipped to contain points outside the circle.

NOTE: maxAngleSplit is used to determine the polygonal approximation of the circle. The returned result will not
have a chord with an angle greater than maxAngleSplit.

#### gridClipIterate( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, callback : <span style="font-weight: 400;">[GridClipCallback](../alpenglow/GridClipping.md#GridClipCallback)</span>, polygonCompleteCallback : <span style="font-weight: 400;">[PolygonCompleteCallback](../alpenglow/BinaryClipping.md#PolygonCompleteCallback)</span> ) {: #gridClipIterate data-toc-label='gridClipIterate' }

Given an integral bounding box and step sizes (which define the grid), this will clip the face to each cell in the
grid, calling the callback for each cell's contributing edges (in order, if we are a PolygonalFace).
polygonCompleteCallback will be called whenever a polygon is completed (if we are a polygonal type of face).

#### getBilinearFiltered( pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getBilinearFiltered data-toc-label='getBilinearFiltered' }

Returns the evaluation of the bilinear (tent) filter integrals for the given point, ASSUMING that the face
is clipped to the transformed unit square of x: [minX,minX+1], y: [minY,minY+1].

#### getMitchellNetravaliFiltered( pointX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, pointY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMitchellNetravaliFiltered data-toc-label='getMitchellNetravaliFiltered' }

Returns the evaluation of the Mitchell-Netravali (1/3,1/3) filter integrals for the given point, ASSUMING that the
face is clipped to the transformed unit square of x: [minX,minX+1], y: [minY,minY+1].

#### containsPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPoint data-toc-label='containsPoint' }

Returns whether the face contains the given point.

#### getTransformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/PolygonalFace.md)</span> {: #getTransformed data-toc-label='getTransformed' }

Returns an affine-transformed version of the face.

#### getRounded( epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/PolygonalFace.md)</span> {: #getRounded data-toc-label='getRounded' }

Returns a rounded version of the face, where [-epsilon/2, epsilon/2] rounds to 0, etc.

#### withReversedEdges() : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/PolygonalFace.md)</span> {: #withReversedEdges data-toc-label='withReversedEdges' }

Returns a version of the face with the orientation of all of the edges swapped.

#### forEachEdge( callback : <span style="font-weight: 400;">( startPoint: [Vector2](../dot/Vector2.md), endPoint: [Vector2](../dot/Vector2.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #forEachEdge data-toc-label='forEachEdge' }

Calls the callback with points for each edge in the face.

#### getScratchAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[PolygonalFace](../alpenglow/PolygonalFace.md)&gt;</span> {: #getScratchAccumulator data-toc-label='getScratchAccumulator' }

Returns a singleton accumulator for this type of face. This will always return the same instance, and should ONLY
be used if there will be no reentrant or co-occurring usage of this accumulator (i.e. only use it when you can
guarantee nothing else will be clipped at the same time). If two tasks try to use this at the same time, it will
likely break.

This is a method that can be called on an unknown-type face, to reproduce the same type of face. This is
important, since we can't feed unsorted edge data directly to a PolygonalFace's accumulator, and in general this
is the safest way to get an accumulator for a face.

#### getAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[PolygonalFace](../alpenglow/PolygonalFace.md)&gt;</span> {: #getAccumulator data-toc-label='getAccumulator' }

Returns a new accumulator for this type of face. This should be used when concurrent clipping will need to happen.

This is a method that can be called on an unknown-type face, to reproduce the same type of face. This is
important, since we can't feed unsorted edge data directly to a PolygonalFace's accumulator, and in general this
is the safest way to get an accumulator for a face.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns a debugging string.

#### serialize() : <span style="font-weight: 400;">[SerializedPolygonalFace](../alpenglow/PolygonalFace.md#SerializedPolygonalFace)</span> {: #serialize data-toc-label='serialize' }

Returns a serialized version of the face, that should be able to be deserialized into the same type of face.
See {FaceType}.deserialize.

NOTE: If you don't know what type of face this is, use serializeClippableFace instead.

### Static Methods

#### getScratchAccumulator() : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)&lt;[PolygonalFace](../alpenglow/PolygonalFace.md)&gt;</span> {: #getScratchAccumulator data-toc-label='getScratchAccumulator' }

Returns a singleton accumulator for this type of face. This will always return the same instance, and should ONLY
be used if there will be no reentrant or co-occurring usage of this accumulator (i.e. only use it when you can
guarantee nothing else will be clipped at the same time). If two tasks try to use this at the same time, it will
likely break.

This should be used directly when you know you want a PolygonalFace as output. NOTE: edges SHOULD be ordered such
that the endPoint of the last edge is the same as the startPoint of the first edge, UNLESS a loop has been closed
and a polygon has been marked.

#### deserialize( serialized : <span style="font-weight: 400;">[SerializedPolygonalFace](../alpenglow/PolygonalFace.md#SerializedPolygonalFace)</span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/PolygonalFace.md)</span> {: #deserialize data-toc-label='deserialize' }

#### fromBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/PolygonalFace.md)</span> {: #fromBounds data-toc-label='fromBounds' }

#### fromBoundsValues( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/PolygonalFace.md)</span> {: #fromBoundsValues data-toc-label='fromBoundsValues' }



## Class PolygonalFaceAccumulator {: #PolygonalFaceAccumulator }


```js
import { PolygonalFaceAccumulator } from 'scenerystack/alpenglow';
```
### Instance Methods

#### addEdge( startX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #PolygonalFaceAccumulator-addEdge data-toc-label='PolygonalFaceAccumulator-addEdge' }

#### markNewPolygon() {: #PolygonalFaceAccumulator-markNewPolygon data-toc-label='PolygonalFaceAccumulator-markNewPolygon' }

#### setAccumulationBounds( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #PolygonalFaceAccumulator-setAccumulationBounds data-toc-label='PolygonalFaceAccumulator-setAccumulationBounds' }

#### finalizeFace() : <span style="font-weight: 400;">[PolygonalFace](../alpenglow/PolygonalFace.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #PolygonalFaceAccumulator-finalizeFace data-toc-label='PolygonalFaceAccumulator-finalizeFace' }

Will reset it to the initial state also

#### reset() {: #PolygonalFaceAccumulator-reset data-toc-label='PolygonalFaceAccumulator-reset' }

Will reset without creating a face

### Instance Properties

#### usesEndPoint {: #PolygonalFaceAccumulator-usesEndPoint data-toc-label='PolygonalFaceAccumulator-usesEndPoint' }

(readonly)



## Type SerializedPolygonalFace {: #SerializedPolygonalFace }


```js
import type { SerializedPolygonalFace } from 'scenerystack/alpenglow';
```


- **polygons**: { x: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; y: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> }[][]




## Source Code

See the source for [PolygonalFace.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/PolygonalFace.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
