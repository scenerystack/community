# Segment

## Overview

A segment represents a specific curve with a start and end.

Each segment is treated parametrically, where t=0 is the start of the segment, and t=1 is the end. Values of t
between those represent points along the segment.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
/* global paper */

## Class Segment {: #Segment }


```js
import { Segment } from 'scenerystack/kite';
```
### Constructor

#### new Segment() {: #constructor data-toc-label='constructor' }

### Instance Methods

#### positionAt( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #positionAt data-toc-label='positionAt' }

Returns the position parametrically, with 0 &lt;= t &lt;= 1. NOTE that this function doesn't keep a constant magnitude
tangent.

#### tangentAt( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #tangentAt data-toc-label='tangentAt' }

Returns the non-normalized tangent (dx/dt, dy/dt) of this segment at the parametric value of t, with 0 &lt;= t &lt;= 1.

#### curvatureAt( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #curvatureAt data-toc-label='curvatureAt' }

Returns the signed curvature (positive for visual clockwise - mathematical counterclockwise)

#### subdivided( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #subdivided data-toc-label='subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. The segments together should make the
same shape as the original segment.

#### getSVGPathFragment() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getSVGPathFragment data-toc-label='getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided, so anything that calls
this needs to put the M calls first

#### strokeLeft( lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #strokeLeft data-toc-label='strokeLeft' }

Returns an array of segments that will draw an offset curve on the logical left side

#### strokeRight( lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #strokeRight data-toc-label='strokeRight' }

Returns an array of segments that will draw an offset curve on the logical right side

#### windingIntersection( ray : <span style="font-weight: 400; opacity: 80%;">Ray2</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #windingIntersection data-toc-label='windingIntersection' }

Returns the winding number for intersection with a ray

#### getInteriorExtremaTs() : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #getInteriorExtremaTs data-toc-label='getInteriorExtremaTs' }

Returns a list of t values where dx/dt or dy/dt is 0 where 0 &lt; t &lt; 1. subdividing on these will result in monotonic
segments

#### intersection( ray : <span style="font-weight: 400; opacity: 80%;">Ray2</span> ) : <span style="font-weight: 400; opacity: 80%;">RayIntersection[]</span> {: #intersection data-toc-label='intersection' }

Returns a list of intersections between the segment and the ray.

#### getBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBounds data-toc-label='getBounds' }

Returns a {Bounds2} representing the bounding box for the segment.

#### getSignedAreaFragment() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getSignedAreaFragment data-toc-label='getSignedAreaFragment' }

Returns signed area contribution for this segment using Green's Theorem

#### getNondegenerateSegments() : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #getNondegenerateSegments data-toc-label='getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### writeToContext( context : <span style="font-weight: 400; opacity: 80%;">CanvasRenderingContext2D</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeToContext data-toc-label='writeToContext' }

Draws the segment to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment</span> {: #transformed data-toc-label='transformed' }

Returns a new segment that represents this segment after transformation by the matrix

#### invalidate() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #invalidate data-toc-label='invalidate' }

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedSegment</span> {: #serialize data-toc-label='serialize' }

#### areStrokedBoundsDilated() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #areStrokedBoundsDilated data-toc-label='areStrokedBoundsDilated' }

Will return true if the start/end tangents are purely vertical or horizontal. If all of the segments of a shape
have this property, then the only line joins will be a multiple of pi/2 (90 degrees), and so all of the types of
line joins will have the same bounds. This means that the stroked bounds will just be a pure dilation of the
regular bounds, by lineWidth / 2.

#### getBoundsWithTransform( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBoundsWithTransform data-toc-label='getBoundsWithTransform' }

TODO: override everywhere so this isn't necessary (it's not particularly efficient!) https://github.com/phetsims/kite/issues/76

#### slice( t0 : <span style="font-weight: 400; opacity: 80%;">number</span>, t1 : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment</span> {: #slice data-toc-label='slice' }

Extracts a slice of a segment, based on the parametric value.

Given that this segment is represented by the interval [0,1]

#### subdivisions( tList : <span style="font-weight: 400; opacity: 80%;">number[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #subdivisions data-toc-label='subdivisions' }

@param tList - list of sorted t values from 0 &lt;= t &lt;= 1

#### subdividedIntoMonotone() : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #subdividedIntoMonotone data-toc-label='subdividedIntoMonotone' }

Return an array of segments from breaking this segment into monotone pieces

#### isSufficientlyFlat( distanceEpsilon : <span style="font-weight: 400; opacity: 80%;">number</span>, curveEpsilon : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isSufficientlyFlat data-toc-label='isSufficientlyFlat' }

Determines if the segment is sufficiently flat (given certain epsilon values)

@param distanceEpsilon - controls level of subdivision by attempting to ensure a maximum (squared)
                         deviation from the curve
@param curveEpsilon - controls level of subdivision by attempting to ensure a maximum curvature change
                      between segments

#### getArcLength( distanceEpsilon? : <span style="font-weight: 400; opacity: 80%;">number</span>, curveEpsilon? : <span style="font-weight: 400; opacity: 80%;">number</span>, maxLevels? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getArcLength data-toc-label='getArcLength' }

Returns the (sometimes approximate) arc length of the segment.

#### getDashValues( lineDash : <span style="font-weight: 400; opacity: 80%;">number[]</span>, lineDashOffset : <span style="font-weight: 400; opacity: 80%;">number</span>, distanceEpsilon : <span style="font-weight: 400; opacity: 80%;">number</span>, curveEpsilon : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">DashValues</span> {: #getDashValues data-toc-label='getDashValues' }

Returns information about the line dash parametric offsets for a given segment.

As always, this is fairly approximate depending on the type of segment.

@param lineDash
@param lineDashOffset
@param distanceEpsilon - controls level of subdivision by attempting to ensure a maximum (squared)
                         deviation from the curve
@param curveEpsilon - controls level of subdivision by attempting to ensure a maximum curvature change
                      between segments

#### toPiecewiseLinearSegments( options : <span style="font-weight: 400; opacity: 80%;">PiecewiseLinearOptions</span>, minLevels? : <span style="font-weight: 400; opacity: 80%;">number</span>, maxLevels? : <span style="font-weight: 400; opacity: 80%;">number</span>, segments? : <span style="font-weight: 400; opacity: 80%;">Line[]</span>, start? : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, end? : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Line[]</span> {: #toPiecewiseLinearSegments data-toc-label='toPiecewiseLinearSegments' }


@param [options]
@param [minLevels] -   how many levels to force subdivisions
@param [maxLevels] -   prevent subdivision past this level
@param [segments]
@param [start]
@param [end]

#### toPiecewiseLinearOrArcSegments( providedOptions : <span style="font-weight: 400; opacity: 80%;">PiecewiseLinearOrArcOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #toPiecewiseLinearOrArcSegments data-toc-label='toPiecewiseLinearOrArcSegments' }

Returns a list of Line and/or Arc segments that approximates this segment.

#### toShape() : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #toShape data-toc-label='toShape' }

Returns a Shape containing just this one segment.

#### getClosestPoints( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">ClosestToPointResult[]</span> {: #getClosestPoints data-toc-label='getClosestPoints' }

### Instance Properties

#### invalidationEmitter : <span style="font-weight: 400; opacity: 80%;">TEmitter</span> {: #invalidationEmitter data-toc-label='invalidationEmitter' }

### Static Methods

#### closestToPoint( segments : <span style="font-weight: 400; opacity: 80%;">Segment[]</span>, point : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, threshold : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">ClosestToPointResult[]</span> {: #closestToPoint data-toc-label='closestToPoint' }

List of results (since there can be duplicates), threshold is used for subdivision,
where it will exit if all of the segments are shorter than the threshold

TODO: solve segments to determine this analytically! https://github.com/phetsims/kite/issues/76

#### polynomialGetOverlapCubic( p0s : <span style="font-weight: 400; opacity: 80%;">number</span>, p1s : <span style="font-weight: 400; opacity: 80%;">number</span>, p2s : <span style="font-weight: 400; opacity: 80%;">number</span>, p3s : <span style="font-weight: 400; opacity: 80%;">number</span>, q0s : <span style="font-weight: 400; opacity: 80%;">number</span>, q1s : <span style="font-weight: 400; opacity: 80%;">number</span>, q2s : <span style="font-weight: 400; opacity: 80%;">number</span>, q3s : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">PossibleSimpleOverlap</span> {: #polynomialGetOverlapCubic data-toc-label='polynomialGetOverlapCubic' }

Given the cubic-premultiplied values for two cubic bezier curves, determines (if available) a specified (a,b) pair
such that p( t ) === q( a * t + b ).

Given a 1-dimensional cubic bezier determined by the control points p0, p1, p2 and p3, compute:

[ p0s ]    [  1   0   0   0 ]   [ p0 ]
[ p1s ] == [ -3   3   0   0 ] * [ p1 ]
[ p2s ] == [  3  -6   3   0 ] * [ p2 ]
[ p3s ]    [ -1   3  -3   1 ]   [ p3 ]

see Cubic.getOverlaps for more information.

#### polynomialGetOverlapQuadratic( p0s : <span style="font-weight: 400; opacity: 80%;">number</span>, p1s : <span style="font-weight: 400; opacity: 80%;">number</span>, p2s : <span style="font-weight: 400; opacity: 80%;">number</span>, q0s : <span style="font-weight: 400; opacity: 80%;">number</span>, q1s : <span style="font-weight: 400; opacity: 80%;">number</span>, q2s : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">PossibleSimpleOverlap</span> {: #polynomialGetOverlapQuadratic data-toc-label='polynomialGetOverlapQuadratic' }

Given the quadratic-premultiplied values for two quadratic bezier curves, determines (if available) a specified (a,b) pair
such that p( t ) === q( a * t + b ).

Given a 1-dimensional quadratic bezier determined by the control points p0, p1, p2, compute:

[ p0s ]    [  1   0   0 ]   [ p0 ]
[ p1s ] == [ -2   2   0 ] * [ p1 ]
[ p2s ]    [  2  -2   3 ] * [ p2 ]

see Quadratic.getOverlaps for more information.

#### polynomialGetOverlapLinear( p0s : <span style="font-weight: 400; opacity: 80%;">number</span>, p1s : <span style="font-weight: 400; opacity: 80%;">number</span>, q0s : <span style="font-weight: 400; opacity: 80%;">number</span>, q1s : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">PossibleSimpleOverlap</span> {: #polynomialGetOverlapLinear data-toc-label='polynomialGetOverlapLinear' }

Given the linear-premultiplied values for two lines, determines (if available) a specified (a,b) pair
such that p( t ) === q( a * t + b ).

Given a line determined by the control points p0, p1, compute:

[ p0s ] == [  1   0 ] * [ p0 ]
[ p1s ] == [ -1   1 ] * [ p1 ]

see Quadratic/Cubic.getOverlaps for more information.

#### intersect( a : <span style="font-weight: 400; opacity: 80%;">Segment</span>, b : <span style="font-weight: 400; opacity: 80%;">Segment</span> ) : <span style="font-weight: 400; opacity: 80%;">SegmentIntersection[]</span> {: #intersect data-toc-label='intersect' }

Returns all the distinct (non-endpoint, non-finite) intersections between the two segments.

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedSegment</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment</span> {: #deserialize data-toc-label='deserialize' }

Returns a Segment from the serialized representation.

#### isSufficientlyFlat( distanceEpsilon : <span style="font-weight: 400; opacity: 80%;">number</span>, curveEpsilon : <span style="font-weight: 400; opacity: 80%;">number</span>, start : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, middle : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, end : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isSufficientlyFlat data-toc-label='isSufficientlyFlat' }

Determines if the start/middle/end points are representative of a sufficiently flat segment
(given certain epsilon values)

@param start
@param middle
@param end
@param distanceEpsilon - controls level of subdivision by attempting to ensure a maximum (squared)
                         deviation from the curve
@param curveEpsilon - controls level of subdivision by attempting to ensure a maximum curvature change
                      between segments

#### filterClosestToPointResult( results : <span style="font-weight: 400; opacity: 80%;">ClosestToPointResult[]</span> ) : <span style="font-weight: 400; opacity: 80%;">ClosestToPointResult[]</span> {: #filterClosestToPointResult data-toc-label='filterClosestToPointResult' }



## Source Code

See the source for [Segment.ts](https://github.com/phetsims/kite/blob/main/js/segments/Segment.ts) in the [kite](https://github.com/phetsims/kite) repository.
