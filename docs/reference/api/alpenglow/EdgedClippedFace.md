# EdgedClippedFace

## Overview

A ClippableFace based on a set of line segment edges, where (a) it is contained within a bounding box, and (b)
line segments going along the full border of the bounding box (from one corner to another) will be counted
separately. This helps with performance, since EdgedFace on its own would build up large counts of these edges
that "undo" each other during recursive clipping operations.

Should still represent multiple closed loops, but it is not explicit.

"implicit" edges/vertices are those defined by the clipped counts (minXCount, etc.)
"explicit" edges/vertices are those in the edges list

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class EdgedClippedFace {: #EdgedClippedFace }


```js
import { EdgedClippedFace } from 'scenerystack/alpenglow';
```
### Constructor

#### new EdgedClippedFace( edges : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span>, minXCount : <span style="font-weight: 400; opacity: 80%;">number</span>, minYCount : <span style="font-weight: 400; opacity: 80%;">number</span>, maxXCount : <span style="font-weight: 400; opacity: 80%;">number</span>, maxYCount : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### toPolygonalFace( epsilon ) : <span style="font-weight: 400; opacity: 80%;">PolygonalFace</span> {: #toPolygonalFace data-toc-label='toPolygonalFace' }

Converts the face to a polygonal face. Epsilon is used to determine whether start/end points match.

NOTE: This is likely a low-performance method, and should only be used for debugging.

#### toEdgedFace() : <span style="font-weight: 400; opacity: 80%;">EdgedFace</span> {: #toEdgedFace data-toc-label='toEdgedFace' }

Converts the face to an edged face.

#### toEdgedClippedFace( minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #toEdgedClippedFace data-toc-label='toEdgedClippedFace' }

Converts the face to a edged-clipped face (scanning the edges, to convert bounds-side edges to counts)

#### toEdgedClippedFaceWithoutCheck( minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #toEdgedClippedFaceWithoutCheck data-toc-label='toEdgedClippedFaceWithoutCheck' }

Converts the face to a edged-clipped face (without scanning the edges to see if they are bounds-side)

#### forEachImplicitEdge( callback : <span style="font-weight: 400; opacity: 80%;">( startPoint: Vector2, endPoint: Vector2 ) =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #forEachImplicitEdge data-toc-label='forEachImplicitEdge' }

#### getImplicitEdges() : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span> {: #getImplicitEdges data-toc-label='getImplicitEdges' }

#### getAllEdges() : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span> {: #getAllEdges data-toc-label='getAllEdges' }

#### getShape( epsilon ) : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #getShape data-toc-label='getShape' }

Returns a Shape for the face.

NOTE: This is likely a low-performance method, and should only be used for debugging.

#### getMinXMinY() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getMinXMinY data-toc-label='getMinXMinY' }

#### getMinXMaxY() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getMinXMaxY data-toc-label='getMinXMaxY' }

#### getMaxXMinY() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getMaxXMinY data-toc-label='getMaxXMinY' }

#### getMaxXMaxY() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getMaxXMaxY data-toc-label='getMaxXMaxY' }

#### hasMinXMinY() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasMinXMinY data-toc-label='hasMinXMinY' }

Returns whether this face has an implicit vertex at the minX-minY corner.

#### hasMinXMaxY() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasMinXMaxY data-toc-label='hasMinXMaxY' }

Returns whether this face has an implicit vertex at the minX-maxY corner.

#### hasMaxXMinY() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasMaxXMinY data-toc-label='hasMaxXMinY' }

Returns whether this face has an implicit vertex at the maxX-minY corner.

#### hasMaxXMaxY() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasMaxXMaxY data-toc-label='hasMaxXMaxY' }

Returns whether this face has an implicit vertex at the maxX-maxY corner.

#### hasMinX() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasMinX data-toc-label='hasMinX' }

Returns whether this face has an implicit vertex with minX.

#### hasMinY() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasMinY data-toc-label='hasMinY' }

Returns whether this face has an implicit vertex with minY.

#### hasMaxX() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasMaxX data-toc-label='hasMaxX' }

Returns whether this face has an implicit vertex with maxX.

#### hasMaxY() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasMaxY data-toc-label='hasMaxY' }

Returns whether this face has an implicit vertex with maxY.

#### getBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounds of the face (ignoring any "fake" edges, if the type supports them)

#### getDotRange( normal : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Range</span> {: #getDotRange data-toc-label='getDotRange' }

Returns the range of values for the dot product of the given normal with any point contained within the face
(for polygons, this is the same as the range of values for the dot product of the normal with any vertex).

#### getDistanceRangeToEdges( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Range</span> {: #getDistanceRangeToEdges data-toc-label='getDistanceRangeToEdges' }

Returns the range of distances from the given point to every point along the edges of the face.
For instance, if the face was the unit cube, the range would be 1/2 to sqrt(2), for distances to the middles of
the edges and the corners respectively.

#### getDistanceRangeToInside( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Range</span> {: #getDistanceRangeToInside data-toc-label='getDistanceRangeToInside' }

Returns the range of distances from the given point to every point inside the face. The upper bound should be
the same as getDistanceRangeToEdges, however the lower bound may be 0 if the point is inside the face.

#### getArea() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getArea data-toc-label='getArea' }

Returns the signed area of the face (positive if the vertices are in counter-clockwise order, negative if clockwise)

#### getCentroidPartial() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getCentroidPartial data-toc-label='getCentroidPartial' }

Returns the partial for the centroid computation. These should be summed up, divided by 6, and divided by the area
to give the full centroid

#### getCentroid( area : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getCentroid data-toc-label='getCentroid' }

Returns the centroid of the face (area is required for the typical integral required to evaluate)

#### getZero() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getZero data-toc-label='getZero' }

Returns the evaluation of an integral that will be zero if the boundaries of the face are correctly closed.
It is designed so that if there is a "gap" and we have open boundaries, the result will likely be non-zero.

NOTE: This is only used for debugging, so performance is not a concern.

#### getAverageDistance( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, area : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getAverageDistance data-toc-label='getAverageDistance' }

Returns the average distance from the given point to every point inside the face. The integral evaluation requires
the area (similarly to the centroid computation).

#### getAverageDistanceTransformedToOrigin( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, area : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getAverageDistanceTransformedToOrigin data-toc-label='getAverageDistanceTransformedToOrigin' }

Returns the average distance from the origin to every point inside the face transformed by the given matrix.

#### getClipped( minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #getClipped data-toc-label='getClipped' }

Returns a copy of the face that is clipped to be within the given axis-aligned bounding box.

#### getBinaryXClip( x : <span style="font-weight: 400; opacity: 80%;">number</span>, fakeCornerY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">{ minFace: EdgedClippedFace; maxFace: EdgedClippedFace }</span> {: #getBinaryXClip data-toc-label='getBinaryXClip' }

Returns two copies of the face, one that is clipped to be to the left of the given x value, and one that is
clipped to be to the right of the given x value.

The fakeCornerY is used to determine the "fake" corner that is used for unsorted-edge clipping.

#### getBinaryYClip( y : <span style="font-weight: 400; opacity: 80%;">number</span>, fakeCornerX : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">{ minFace: EdgedClippedFace; maxFace: EdgedClippedFace }</span> {: #getBinaryYClip data-toc-label='getBinaryYClip' }

Returns two copies of the face, one that is clipped to y values less than the given y value, and one that is
clipped to values greater than the given y value.

The fakeCornerX is used to determine the "fake" corner that is used for unsorted-edge clipping.

#### getBinaryLineClip( normal : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, value : <span style="font-weight: 400; opacity: 80%;">number</span>, fakeCornerPerpendicular : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">{ minFace: EdgedClippedFace; maxFace: EdgedClippedFace }</span> {: #getBinaryLineClip data-toc-label='getBinaryLineClip' }

Returns two copies of the face, one that is clipped to contain points where dot( normal, point ) &lt; value,
and one that is clipped to contain points where dot( normal, point ) &gt; value.

The fake corner perpendicular is used to determine the "fake" corner that is used for unsorted-edge clipping

#### getStripeLineClip( normal : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, values : <span style="font-weight: 400; opacity: 80%;">number[]</span>, fakeCornerPerpendicular : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace[]</span> {: #getStripeLineClip data-toc-label='getStripeLineClip' }

Returns an array of faces, clipped similarly to getBinaryLineClip, but with more than one (parallel) split line at
a time. The first face will be the one with dot( normal, point ) &lt; values[0], the second one with
values[ 0 ] &lt; dot( normal, point ) &lt; values[1], etc.

#### getBinaryCircularClip( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span>, maxAngleSplit : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">{ insideFace: EdgedClippedFace; outsideFace: EdgedClippedFace }</span> {: #getBinaryCircularClip data-toc-label='getBinaryCircularClip' }

Returns two copies of the face, one that is clipped to contain points inside the circle defined by the given
center and radius, and one that is clipped to contain points outside the circle.

NOTE: maxAngleSplit is used to determine the polygonal approximation of the circle. The returned result will not
have a chord with an angle greater than maxAngleSplit.

#### gridClipIterate( minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span>, stepX : <span style="font-weight: 400; opacity: 80%;">number</span>, stepY : <span style="font-weight: 400; opacity: 80%;">number</span>, stepWidth : <span style="font-weight: 400; opacity: 80%;">number</span>, stepHeight : <span style="font-weight: 400; opacity: 80%;">number</span>, callback : <span style="font-weight: 400; opacity: 80%;">GridClipCallback</span>, polygonCompleteCallback : <span style="font-weight: 400; opacity: 80%;">PolygonCompleteCallback</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #gridClipIterate data-toc-label='gridClipIterate' }

Given an integral bounding box and step sizes (which define the grid), this will clip the face to each cell in the
grid, calling the callback for each cell's contributing edges (in order, if we are a PolygonalFace).
polygonCompleteCallback will be called whenever a polygon is completed (if we are a polygonal type of face).

#### getBilinearFiltered( pointX : <span style="font-weight: 400; opacity: 80%;">number</span>, pointY : <span style="font-weight: 400; opacity: 80%;">number</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getBilinearFiltered data-toc-label='getBilinearFiltered' }

Returns the evaluation of the bilinear (tent) filter integrals for the given point, ASSUMING that the face
is clipped to the transformed unit square of x: [minX,minX+1], y: [minY,minY+1].

#### getMitchellNetravaliFiltered( pointX : <span style="font-weight: 400; opacity: 80%;">number</span>, pointY : <span style="font-weight: 400; opacity: 80%;">number</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getMitchellNetravaliFiltered data-toc-label='getMitchellNetravaliFiltered' }

Returns the evaluation of the Mitchell-Netravali (1/3,1/3) filter integrals for the given point, ASSUMING that the
face is clipped to the transformed unit square of x: [minX,minX+1], y: [minY,minY+1].

#### containsPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #containsPoint data-toc-label='containsPoint' }

Returns whether the face contains the given point.

#### getTransformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #getTransformed data-toc-label='getTransformed' }

Returns an affine-transformed version of the face.

#### getRounded( epsilon : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #getRounded data-toc-label='getRounded' }

Returns a rounded version of the face, where [-epsilon/2, epsilon/2] rounds to 0, etc.

#### withReversedEdges() : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #withReversedEdges data-toc-label='withReversedEdges' }

Returns a version of the face with the orientation of all of the edges swapped.

#### forEachEdge( callback : <span style="font-weight: 400; opacity: 80%;">( startPoint: Vector2, endPoint: Vector2 ) =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #forEachEdge data-toc-label='forEachEdge' }

Calls the callback with points for each edge in the face.

#### getScratchAccumulator() : <span style="font-weight: 400; opacity: 80%;">ClippableFaceAccumulator&lt;EdgedClippedFace&gt;</span> {: #getScratchAccumulator data-toc-label='getScratchAccumulator' }

Returns a singleton accumulator for this type of face. This will always return the same instance, and should ONLY
be used if there will be no reentrant or co-occurring usage of this accumulator (i.e. only use it when you can
guarantee nothing else will be clipped at the same time). If two tasks try to use this at the same time, it will
likely break.

This is a method that can be called on an unknown-type face, to reproduce the same type of face. This is
important, since we can't feed unsorted edge data directly to a PolygonalFace's accumulator, and in general this
is the safest way to get an accumulator for a face.

#### getAccumulator() : <span style="font-weight: 400; opacity: 80%;">ClippableFaceAccumulator&lt;EdgedClippedFace&gt;</span> {: #getAccumulator data-toc-label='getAccumulator' }

Returns a new accumulator for this type of face. This should be used when concurrent clipping will need to happen.

This is a method that can be called on an unknown-type face, to reproduce the same type of face. This is
important, since we can't feed unsorted edge data directly to a PolygonalFace's accumulator, and in general this
is the safest way to get an accumulator for a face.

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

Returns a debugging string.

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedEdgedClippedFace</span> {: #serialize data-toc-label='serialize' }

Returns a serialized version of the face, that should be able to be deserialized into the same type of face.
See {FaceType}.deserialize.

NOTE: If you don't know what type of face this is, use serializeClippableFace instead.

### Instance Properties

#### clippedEdgedFace : <span style="font-weight: 400; opacity: 80%;">EdgedFace</span> {: #clippedEdgedFace data-toc-label='clippedEdgedFace' }

(readonly)

### Static Methods

#### fromEdges( edges : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #fromEdges data-toc-label='fromEdges' }

#### fromEdgesWithoutCheck( edges : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #fromEdgesWithoutCheck data-toc-label='fromEdgesWithoutCheck' }

#### getScratchAccumulator() : <span style="font-weight: 400; opacity: 80%;">ClippableFaceAccumulator&lt;EdgedClippedFace&gt;</span> {: #getScratchAccumulator data-toc-label='getScratchAccumulator' }

Returns a singleton accumulator for this type of face. This will always return the same instance, and should ONLY
be used if there will be no reentrant or co-occurring usage of this accumulator (i.e. only use it when you can
guarantee nothing else will be clipped at the same time). If two tasks try to use this at the same time, it will
likely break.

This should be used directly when you know you want an EdgedClippedFace as output.

#### deserialize( serialized : <span style="font-weight: 400; opacity: 80%;">SerializedEdgedClippedFace</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #deserialize data-toc-label='deserialize' }

#### fromBounds( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #fromBounds data-toc-label='fromBounds' }

#### fromBoundsValues( minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #fromBoundsValues data-toc-label='fromBoundsValues' }



## Class EdgedClippedFaceAccumulator {: #EdgedClippedFaceAccumulator }


```js
import { EdgedClippedFaceAccumulator } from 'scenerystack/alpenglow';
```
### Instance Methods

#### addEdge( startX : <span style="font-weight: 400; opacity: 80%;">number</span>, startY : <span style="font-weight: 400; opacity: 80%;">number</span>, endX : <span style="font-weight: 400; opacity: 80%;">number</span>, endY : <span style="font-weight: 400; opacity: 80%;">number</span>, startPoint : <span style="font-weight: 400; opacity: 80%;">Vector2 | null</span>, endPoint : <span style="font-weight: 400; opacity: 80%;">Vector2 | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #EdgedClippedFaceAccumulator-addEdge data-toc-label='EdgedClippedFaceAccumulator-addEdge' }

#### markNewPolygon() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #EdgedClippedFaceAccumulator-markNewPolygon data-toc-label='EdgedClippedFaceAccumulator-markNewPolygon' }

#### setAccumulationBounds( minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #EdgedClippedFaceAccumulator-setAccumulationBounds data-toc-label='EdgedClippedFaceAccumulator-setAccumulationBounds' }

#### finalizeFace() : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace | null</span> {: #EdgedClippedFaceAccumulator-finalizeFace data-toc-label='EdgedClippedFaceAccumulator-finalizeFace' }

Will reset it to the initial state also

#### finalizeEnsureFace( minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span> {: #EdgedClippedFaceAccumulator-finalizeEnsureFace data-toc-label='EdgedClippedFaceAccumulator-finalizeEnsureFace' }

#### reset() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #EdgedClippedFaceAccumulator-reset data-toc-label='EdgedClippedFaceAccumulator-reset' }

Will reset without creating a face

### Instance Properties

#### usesEndPoint {: #EdgedClippedFaceAccumulator-usesEndPoint data-toc-label='EdgedClippedFaceAccumulator-usesEndPoint' }

(readonly)



## Source Code

See the source for [EdgedClippedFace.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/EdgedClippedFace.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
