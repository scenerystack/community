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

#### new Segment() {: #Segment-constructor data-toc-label='new Segment' }

### Instance Methods

#### positionAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #positionAt data-toc-label='positionAt' }

Returns the position parametrically, with 0 &lt;= t &lt;= 1. NOTE that this function doesn't keep a constant magnitude
tangent.

#### tangentAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #tangentAt data-toc-label='tangentAt' }

Returns the non-normalized tangent (dx/dt, dy/dt) of this segment at the parametric value of t, with 0 &lt;= t &lt;= 1.

#### curvatureAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #curvatureAt data-toc-label='curvatureAt' }

Returns the signed curvature (positive for visual clockwise - mathematical counterclockwise)

#### subdivided( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #subdivided data-toc-label='subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. The segments together should make the
same shape as the original segment.

#### getSVGPathFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getSVGPathFragment data-toc-label='getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided, so anything that calls
this needs to put the M calls first

#### strokeLeft( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #strokeLeft data-toc-label='strokeLeft' }

Returns an array of segments that will draw an offset curve on the logical left side

#### strokeRight( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #strokeRight data-toc-label='strokeRight' }

Returns an array of segments that will draw an offset curve on the logical right side

#### windingIntersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #windingIntersection data-toc-label='windingIntersection' }

Returns the winding number for intersection with a ray

#### getInteriorExtremaTs() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #getInteriorExtremaTs data-toc-label='getInteriorExtremaTs' }

Returns a list of t values where dx/dt or dy/dt is 0 where 0 &lt; t &lt; 1. subdividing on these will result in monotonic
segments

#### intersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[RayIntersection](../kite/RayIntersection.md)[]</span> {: #intersection data-toc-label='intersection' }

Returns a list of intersections between the segment and the ray.

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

Returns a {Bounds2} representing the bounding box for the segment.

#### getSignedAreaFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSignedAreaFragment data-toc-label='getSignedAreaFragment' }

Returns signed area contribution for this segment using Green's Theorem

#### getNondegenerateSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #getNondegenerateSegments data-toc-label='getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### getOverlaps( segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, epsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getOverlaps data-toc-label='getOverlaps' }

#### writeToContext( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #writeToContext data-toc-label='writeToContext' }

Draws the segment to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> {: #transformed data-toc-label='transformed' }

Returns a new segment that represents this segment after transformation by the matrix

#### reversed() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> {: #reversed data-toc-label='reversed' }

#### invalidate() {: #invalidate data-toc-label='invalidate' }

#### serialize() : <span style="font-weight: 400;">[SerializedSegment](../kite/Segment.md#SerializedSegment)</span> {: #serialize data-toc-label='serialize' }

#### areStrokedBoundsDilated() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #areStrokedBoundsDilated data-toc-label='areStrokedBoundsDilated' }

Will return true if the start/end tangents are purely vertical or horizontal. If all of the segments of a shape
have this property, then the only line joins will be a multiple of pi/2 (90 degrees), and so all of the types of
line joins will have the same bounds. This means that the stroked bounds will just be a pure dilation of the
regular bounds, by lineWidth / 2.

#### getBoundsWithTransform( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBoundsWithTransform data-toc-label='getBoundsWithTransform' }

TODO: override everywhere so this isn't necessary (it's not particularly efficient!) https://github.com/phetsims/kite/issues/76

#### slice( t0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, t1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> {: #slice data-toc-label='slice' }

Extracts a slice of a segment, based on the parametric value.

Given that this segment is represented by the interval [0,1]

#### subdivisions( tList : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #subdivisions data-toc-label='subdivisions' }

@param tList - list of sorted t values from 0 &lt;= t &lt;= 1

#### subdividedIntoMonotone() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #subdividedIntoMonotone data-toc-label='subdividedIntoMonotone' }

Return an array of segments from breaking this segment into monotone pieces

#### isSufficientlyFlat( distanceEpsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, curveEpsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSufficientlyFlat data-toc-label='isSufficientlyFlat' }

Determines if the segment is sufficiently flat (given certain epsilon values)

@param distanceEpsilon - controls level of subdivision by attempting to ensure a maximum (squared)
                         deviation from the curve
@param curveEpsilon - controls level of subdivision by attempting to ensure a maximum curvature change
                      between segments

#### getArcLength( distanceEpsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, curveEpsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxLevels? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getArcLength data-toc-label='getArcLength' }

Returns the (sometimes approximate) arc length of the segment.

#### getDashValues( lineDash : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, lineDashOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, distanceEpsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, curveEpsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[DashValues](../kite/Segment.md#DashValues)</span> {: #getDashValues data-toc-label='getDashValues' }

Returns information about the line dash parametric offsets for a given segment.

As always, this is fairly approximate depending on the type of segment.

@param lineDash
@param lineDashOffset
@param distanceEpsilon - controls level of subdivision by attempting to ensure a maximum (squared)
                         deviation from the curve
@param curveEpsilon - controls level of subdivision by attempting to ensure a maximum curvature change
                      between segments

#### toPiecewiseLinearSegments( options : <span style="font-weight: 400;">[PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions)</span>, minLevels? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxLevels? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, segments? : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span>, start? : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end? : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #toPiecewiseLinearSegments data-toc-label='toPiecewiseLinearSegments' }


@param [options]
@param [minLevels] -   how many levels to force subdivisions
@param [maxLevels] -   prevent subdivision past this level
@param [segments]
@param [start]
@param [end]

#### toPiecewiseLinearOrArcSegments( providedOptions : <span style="font-weight: 400;">PiecewiseLinearOrArcOptions</span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #toPiecewiseLinearOrArcSegments data-toc-label='toPiecewiseLinearOrArcSegments' }

Returns a list of Line and/or Arc segments that approximates this segment.

#### getClosestPoints( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[ClosestToPointResult](../kite/Segment.md#ClosestToPointResult)[]</span> {: #getClosestPoints data-toc-label='getClosestPoints' }

### Instance Properties

#### invalidationEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #invalidationEmitter data-toc-label='invalidationEmitter' }

### Static Methods

#### closestToPoint( segments : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, threshold : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[ClosestToPointResult](../kite/Segment.md#ClosestToPointResult)[]</span> {: #closestToPoint data-toc-label='closestToPoint' }

List of results (since there can be duplicates), threshold is used for subdivision,
where it will exit if all of the segments are shorter than the threshold

TODO: solve segments to determine this analytically! https://github.com/phetsims/kite/issues/76

#### polynomialGetOverlapCubic( p0s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p2s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p3s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, q0s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, q1s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, q2s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, q3s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">PossibleSimpleOverlap</span> {: #polynomialGetOverlapCubic data-toc-label='polynomialGetOverlapCubic' }

Given the cubic-premultiplied values for two cubic bezier curves, determines (if available) a specified (a,b) pair
such that p( t ) === q( a * t + b ).

Given a 1-dimensional cubic bezier determined by the control points p0, p1, p2 and p3, compute:

[ p0s ]    [  1   0   0   0 ]   [ p0 ]
[ p1s ] == [ -3   3   0   0 ] * [ p1 ]
[ p2s ] == [  3  -6   3   0 ] * [ p2 ]
[ p3s ]    [ -1   3  -3   1 ]   [ p3 ]

see Cubic.getOverlaps for more information.

#### polynomialGetOverlapQuadratic( p0s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p2s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, q0s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, q1s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, q2s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">PossibleSimpleOverlap</span> {: #polynomialGetOverlapQuadratic data-toc-label='polynomialGetOverlapQuadratic' }

Given the quadratic-premultiplied values for two quadratic bezier curves, determines (if available) a specified (a,b) pair
such that p( t ) === q( a * t + b ).

Given a 1-dimensional quadratic bezier determined by the control points p0, p1, p2, compute:

[ p0s ]    [  1   0   0 ]   [ p0 ]
[ p1s ] == [ -2   2   0 ] * [ p1 ]
[ p2s ]    [  2  -2   3 ] * [ p2 ]

see Quadratic.getOverlaps for more information.

#### polynomialGetOverlapLinear( p0s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p1s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, q0s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, q1s : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">PossibleSimpleOverlap</span> {: #polynomialGetOverlapLinear data-toc-label='polynomialGetOverlapLinear' }

Given the linear-premultiplied values for two lines, determines (if available) a specified (a,b) pair
such that p( t ) === q( a * t + b ).

Given a line determined by the control points p0, p1, compute:

[ p0s ] == [  1   0 ] * [ p0 ]
[ p1s ] == [ -1   1 ] * [ p1 ]

see Quadratic/Cubic.getOverlaps for more information.

#### intersect( a : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, b : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> ) : <span style="font-weight: 400;">[SegmentIntersection](../kite/SegmentIntersection.md)[]</span> {: #intersect data-toc-label='intersect' }

Returns all the distinct (non-endpoint, non-finite) intersections between the two segments.

#### deserialize( obj : <span style="font-weight: 400;">[SerializedSegment](../kite/Segment.md#SerializedSegment)</span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> {: #deserialize data-toc-label='deserialize' }

Returns a Segment from the serialized representation.

#### isSufficientlyFlat( distanceEpsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, curveEpsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, middle : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSufficientlyFlat data-toc-label='isSufficientlyFlat' }

Determines if the start/middle/end points are representative of a sufficiently flat segment
(given certain epsilon values)

@param start
@param middle
@param end
@param distanceEpsilon - controls level of subdivision by attempting to ensure a maximum (squared)
                         deviation from the curve
@param curveEpsilon - controls level of subdivision by attempting to ensure a maximum curvature change
                      between segments

#### filterClosestToPointResult( results : <span style="font-weight: 400;">[ClosestToPointResult](../kite/Segment.md#ClosestToPointResult)[]</span> ) : <span style="font-weight: 400;">[ClosestToPointResult](../kite/Segment.md#ClosestToPointResult)[]</span> {: #filterClosestToPointResult data-toc-label='filterClosestToPointResult' }



## Class Arc {: #Arc }


A circular arc (a continuous sub-part of a circle).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { Arc } from 'scenerystack/kite';
```
### Constructor

#### new Arc( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, anticlockwise : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #Arc-Arc-constructor data-toc-label='new Arc-Arc' }

### Instance Methods

#### setCenter( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Arc-setCenter data-toc-label='Arc-setCenter' }

Sets the center of the Arc.

#### getCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Arc-getCenter data-toc-label='Arc-getCenter' }

Returns the center of this Arc.

#### setRadius( radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Arc-setRadius data-toc-label='Arc-setRadius' }

Sets the radius of the Arc.

#### getRadius() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-getRadius data-toc-label='Arc-getRadius' }

Returns the radius of this Arc.

#### setStartAngle( startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Arc-setStartAngle data-toc-label='Arc-setStartAngle' }

Sets the startAngle of the Arc.

#### getStartAngle() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-getStartAngle data-toc-label='Arc-getStartAngle' }

Returns the startAngle of this Arc.

#### setEndAngle( endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Arc-setEndAngle data-toc-label='Arc-setEndAngle' }

Sets the endAngle of the Arc.

#### getEndAngle() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-getEndAngle data-toc-label='Arc-getEndAngle' }

Returns the endAngle of this Arc.

#### setAnticlockwise( anticlockwise : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Arc-setAnticlockwise data-toc-label='Arc-setAnticlockwise' }

Sets the anticlockwise of the Arc.

#### getAnticlockwise() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #Arc-getAnticlockwise data-toc-label='Arc-getAnticlockwise' }

Returns the anticlockwise of this Arc.

#### positionAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Arc-positionAt data-toc-label='Arc-positionAt' }

Returns the position parametrically, with 0 &lt;= t &lt;= 1.

NOTE: positionAt( 0 ) will return the start of the segment, and positionAt( 1 ) will return the end of the
segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### tangentAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Arc-tangentAt data-toc-label='Arc-tangentAt' }

Returns the non-normalized tangent (dx/dt, dy/dt) of this segment at the parametric value of t, with 0 &lt;= t &lt;= 1.

NOTE: tangentAt( 0 ) will return the tangent at the start of the segment, and tangentAt( 1 ) will return the
tangent at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### curvatureAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-curvatureAt data-toc-label='Arc-curvatureAt' }

Returns the signed curvature of the segment at the parametric value t, where 0 &lt;= t &lt;= 1.

The curvature will be positive for visual clockwise / mathematical counterclockwise curves, negative for opposite
curvature, and 0 for no curvature.

NOTE: curvatureAt( 0 ) will return the curvature at the start of the segment, and curvatureAt( 1 ) will return
the curvature at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### subdivided( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)[]</span> {: #Arc-subdivided data-toc-label='Arc-subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. Together (in order) they should make
up the same shape as the current segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### invalidate() {: #Arc-invalidate data-toc-label='Arc-invalidate' }

Clears cached information, should be called when any of the 'constructor arguments' are mutated.

#### getStart() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Arc-getStart data-toc-label='Arc-getStart' }

Gets the start position of this arc.

#### getEnd() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Arc-getEnd data-toc-label='Arc-getEnd' }

Gets the end position of this arc.

#### getStartTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Arc-getStartTangent data-toc-label='Arc-getStartTangent' }

Gets the unit vector tangent to this arc at the start point.

#### getEndTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Arc-getEndTangent data-toc-label='Arc-getEndTangent' }

Gets the unit vector tangent to the arc at the end point.

#### getActualEndAngle() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-getActualEndAngle data-toc-label='Arc-getActualEndAngle' }

Gets the end angle in radians.

#### getIsFullPerimeter() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #Arc-getIsFullPerimeter data-toc-label='Arc-getIsFullPerimeter' }

Returns a boolean value that indicates if the arc wraps up by more than two Pi.

#### getAngleDifference() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-getAngleDifference data-toc-label='Arc-getAngleDifference' }

Returns an angle difference that represents how "much" of the circle our arc covers.

The answer is always greater or equal to zero
The answer can exceed two Pi

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #Arc-getBounds data-toc-label='Arc-getBounds' }

Returns the bounds of this segment.

#### getNondegenerateSegments() : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)[]</span> {: #Arc-getNondegenerateSegments data-toc-label='Arc-getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### mapAngle( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-mapAngle data-toc-label='Arc-mapAngle' }

Maps a contained angle to between [startAngle,actualEndAngle), even if the end angle is lower.

#### tAtAngle( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-tAtAngle data-toc-label='Arc-tAtAngle' }

Returns the parametrized value t for a given angle. The value t should range from 0 to 1 (inclusive).

#### angleAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-angleAt data-toc-label='Arc-angleAt' }

Returns the angle for the parametrized t value. The t value should range from 0 to 1 (inclusive).

#### positionAtAngle( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Arc-positionAtAngle data-toc-label='Arc-positionAtAngle' }

Returns the position of this arc at angle.

#### tangentAtAngle( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Arc-tangentAtAngle data-toc-label='Arc-tangentAtAngle' }

Returns the normalized tangent of this arc.
The tangent points outward (inward) of this arc for clockwise (anticlockwise) direction.

#### containsAngle( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #Arc-containsAngle data-toc-label='Arc-containsAngle' }

Returns whether the given angle is contained by the arc (whether a ray from the arc's origin going in that angle
will intersect the arc).

#### getSVGPathFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #Arc-getSVGPathFragment data-toc-label='Arc-getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided,
so anything that calls this needs to put the M calls first

#### strokeLeft( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)[]</span> {: #Arc-strokeLeft data-toc-label='Arc-strokeLeft' }

Returns an array of arcs that will draw an offset on the logical left side

#### strokeRight( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)[]</span> {: #Arc-strokeRight data-toc-label='Arc-strokeRight' }

Returns an array of arcs that will draw an offset curve on the logical right side

#### getInteriorExtremaTs() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #Arc-getInteriorExtremaTs data-toc-label='Arc-getInteriorExtremaTs' }

Returns a list of t values where dx/dt or dy/dt is 0 where 0 &lt; t &lt; 1. subdividing on these will result in monotonic segments
Does not include t=0 and t=1

#### intersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[RayIntersection](../kite/RayIntersection.md)[]</span> {: #Arc-intersection data-toc-label='Arc-intersection' }

Hit-tests this segment with the ray. An array of all intersections of the ray with this segment will be returned.
For details, see the documentation in Segment.js

#### windingIntersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-windingIntersection data-toc-label='Arc-windingIntersection' }

Returns the resultant winding number of this ray intersecting this arc.

#### writeToContext( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #Arc-writeToContext data-toc-label='Arc-writeToContext' }

Draws this arc to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc) | [EllipticalArc](../kite/Segment.md#EllipticalArc)</span> {: #Arc-transformed data-toc-label='Arc-transformed' }

Returns a new copy of this arc, transformed by the given matrix.

TODO: test various transform types, especially rotations, scaling, shears, etc. https://github.com/phetsims/kite/issues/76

#### getSignedAreaFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-getSignedAreaFragment data-toc-label='Arc-getSignedAreaFragment' }

Returns the contribution to the signed area computed using Green's Theorem, with P=-y/2 and Q=x/2.

NOTE: This is this segment's contribution to the line integral (-y/2 dx + x/2 dy).

#### reversed() : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)</span> {: #Arc-reversed data-toc-label='Arc-reversed' }

Returns a reversed copy of this segment (mapping the parametrization from [0,1] =&gt; [1,0]).

#### getArcLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-getArcLength data-toc-label='Arc-getArcLength' }

Returns the arc length of the segment.

#### toPiecewiseLinearOrArcSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #Arc-toPiecewiseLinearOrArcSegments data-toc-label='Arc-toPiecewiseLinearOrArcSegments' }

We can handle this simply by returning ourselves.

#### serialize() : <span style="font-weight: 400;">[SerializedArc](../kite/Segment.md#SerializedArc)</span> {: #Arc-serialize data-toc-label='Arc-serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### getOverlaps( segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #Arc-getOverlaps data-toc-label='Arc-getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param segment
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)

#### getConicMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #Arc-getConicMatrix data-toc-label='Arc-getConicMatrix' }

Returns the matrix representation of the conic section of the circle.
See https://en.wikipedia.org/wiki/Matrix_representation_of_conic_sections

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedArc](../kite/Segment.md#SerializedArc)</span> ) : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)</span> {: #Arc-deserialize data-toc-label='Arc-deserialize' }

Returns an Arc from the serialized representation.

#### computeActualEndAngle( startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, anticlockwise : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Arc-computeActualEndAngle data-toc-label='Arc-computeActualEndAngle' }

Determines the actual end angle (compared to the start angle).

Normalizes the sign of the angles, so that the sign of ( endAngle - startAngle ) matches whether it is
anticlockwise.

#### getAngularOverlaps( startAngle1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startAngle2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[]</span> {: #Arc-getAngularOverlaps data-toc-label='Arc-getAngularOverlaps' }

Determine whether two Arcs overlap over continuous sections, and if so finds the a,b pairs such that
p( t ) === q( a * t + b ).

@param startAngle1 - Start angle of arc 1
@param endAngle1 - "Actual" end angle of arc 1
@param startAngle2 - Start angle of arc 2
@param endAngle2 - "Actual" end angle of arc 2
@returns - Any overlaps (from 0 to 2)

#### getOverlaps( arc1 : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)</span>, arc2 : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)</span> ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[]</span> {: #Arc-getOverlaps data-toc-label='Arc-getOverlaps' }

Determine whether two Arcs overlap over continuous sections, and if so finds the a,b pairs such that
p( t ) === q( a * t + b ).

@returns - Any overlaps (from 0 to 2)

#### getCircleIntersectionPoint( center1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, center2 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radius2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #Arc-getCircleIntersectionPoint data-toc-label='Arc-getCircleIntersectionPoint' }

Returns the points of intersections between two circles.

@param center1 - Center of the first circle
@param radius1 - Radius of the first circle
@param center2 - Center of the second circle
@param radius2 - Radius of the second circle

#### intersect( a : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)</span>, b : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)</span> ) : <span style="font-weight: 400;">[SegmentIntersection](../kite/SegmentIntersection.md)[]</span> {: #Arc-intersect data-toc-label='Arc-intersect' }

Returns any (finite) intersection between the two arc segments.

#### createFromPoints( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, middlePoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> {: #Arc-createFromPoints data-toc-label='Arc-createFromPoints' }

Creates an Arc (or if straight enough a Line) segment that goes from the startPoint to the endPoint, touching
the middlePoint somewhere between the two.



## Type ClosestToPointResult {: #ClosestToPointResult }


```js
import type { ClosestToPointResult } from 'scenerystack/kite';
```


- **segment**: [Segment](../kite/Segment.md)
- **t**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **closestPoint**: [Vector2](../dot/Vector2.md)
- **distanceSquared**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Class Cubic {: #Cubic }


Cubic Bezier segment.

See http://www.cis.usouthal.edu/~hain/general/Publications/Bezier/BezierFlattening.pdf for info

Good reference: http://cagd.cs.byu.edu/~557/text/ch2.pdf

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { Cubic } from 'scenerystack/kite';
```
### Constructor

#### new Cubic( start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, control1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, control2 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #Cubic-Cubic-constructor data-toc-label='new Cubic-Cubic' }

### Instance Methods

#### setStart( start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Cubic-setStart data-toc-label='Cubic-setStart' }

Sets the start point of the Cubic.

#### getStart() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-getStart data-toc-label='Cubic-getStart' }

Returns the start of this Cubic.

#### setControl1( control1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Cubic-setControl1 data-toc-label='Cubic-setControl1' }

Sets the first control point of the Cubic.

#### getControl1() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-getControl1 data-toc-label='Cubic-getControl1' }

Returns the first control point of this Cubic.

#### setControl2( control2 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Cubic-setControl2 data-toc-label='Cubic-setControl2' }

Sets the second control point of the Cubic.

#### getControl2() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-getControl2 data-toc-label='Cubic-getControl2' }

Returns the second control point of this Cubic.

#### setEnd( end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Cubic-setEnd data-toc-label='Cubic-setEnd' }

Sets the end point of the Cubic.

#### getEnd() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-getEnd data-toc-label='Cubic-getEnd' }

Returns the end of this Cubic.

#### positionAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-positionAt data-toc-label='Cubic-positionAt' }

Returns the position parametrically, with 0 &lt;= t &lt;= 1.

NOTE: positionAt( 0 ) will return the start of the segment, and positionAt( 1 ) will return the end of the
segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### tangentAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-tangentAt data-toc-label='Cubic-tangentAt' }

Returns the non-normalized tangent (dx/dt, dy/dt) of this segment at the parametric value of t, with 0 &lt;= t &lt;= 1.

NOTE: tangentAt( 0 ) will return the tangent at the start of the segment, and tangentAt( 1 ) will return the
tangent at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### curvatureAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Cubic-curvatureAt data-toc-label='Cubic-curvatureAt' }

Returns the signed curvature of the segment at the parametric value t, where 0 &lt;= t &lt;= 1.

The curvature will be positive for visual clockwise / mathematical counterclockwise curves, negative for opposite
curvature, and 0 for no curvature.

NOTE: curvatureAt( 0 ) will return the curvature at the start of the segment, and curvatureAt( 1 ) will return
the curvature at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### subdivided( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Cubic](../kite/Segment.md#Cubic)[]</span> {: #Cubic-subdivided data-toc-label='Cubic-subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. Together (in order) they should make
up the same shape as the current segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### invalidate() {: #Cubic-invalidate data-toc-label='Cubic-invalidate' }

Clears cached information, should be called when any of the 'constructor arguments' are mutated.

#### getStartTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-getStartTangent data-toc-label='Cubic-getStartTangent' }

Gets the start position of this cubic polynomial.

#### getEndTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-getEndTangent data-toc-label='Cubic-getEndTangent' }

Gets the end position of this cubic polynomial.

#### getR() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-getR data-toc-label='Cubic-getR' }

TODO: documentation https://github.com/phetsims/kite/issues/76

#### getS() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-getS data-toc-label='Cubic-getS' }

TODO: documentation https://github.com/phetsims/kite/issues/76

#### getTCusp() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Cubic-getTCusp data-toc-label='Cubic-getTCusp' }

Returns the parametric t value for the possible cusp location. A cusp may or may not exist at that point.

#### getTDeterminant() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Cubic-getTDeterminant data-toc-label='Cubic-getTDeterminant' }

Returns the determinant value for the cusp, which indicates the presence (or lack of presence) of a cusp.

#### getTInflection1() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Cubic-getTInflection1 data-toc-label='Cubic-getTInflection1' }

Returns the parametric t value for the potential location of the first possible inflection point.

#### getTInflection2() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Cubic-getTInflection2 data-toc-label='Cubic-getTInflection2' }

Returns the parametric t value for the potential location of the second possible inflection point.

#### getQuadratics() : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #Cubic-getQuadratics data-toc-label='Cubic-getQuadratics' }

If there is a cusp, this cubic will consist of one or two quadratic segments, typically "start =&gt; cusp" and
"cusp =&gt; end".

#### getXExtremaT() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #Cubic-getXExtremaT data-toc-label='Cubic-getXExtremaT' }

Returns a list of parametric t values where x-extrema exist, i.e. where dx/dt==0. These are candidate locations
on the cubic for "maximum X" and "minimum X", and are needed for bounds computations.

#### getYExtremaT() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #Cubic-getYExtremaT data-toc-label='Cubic-getYExtremaT' }

Returns a list of parametric t values where y-extrema exist, i.e. where dy/dt==0. These are candidate locations
on the cubic for "maximum Y" and "minimum Y", and are needed for bounds computations.

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #Cubic-getBounds data-toc-label='Cubic-getBounds' }

Returns the bounds of this segment.

#### getNondegenerateSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #Cubic-getNondegenerateSegments data-toc-label='Cubic-getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### hasCusp() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #Cubic-hasCusp data-toc-label='Cubic-hasCusp' }

Returns whether this cubic has a cusp.

#### toRS( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Cubic-toRS data-toc-label='Cubic-toRS' }

#### offsetTo( r : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, reverse : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #Cubic-offsetTo data-toc-label='Cubic-offsetTo' }

#### getSVGPathFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #Cubic-getSVGPathFragment data-toc-label='Cubic-getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided, so anything that calls this needs to put
the M calls first

#### strokeLeft( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #Cubic-strokeLeft data-toc-label='Cubic-strokeLeft' }

Returns an array of lines that will draw an offset curve on the logical left side

#### strokeRight( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #Cubic-strokeRight data-toc-label='Cubic-strokeRight' }

Returns an array of lines that will draw an offset curve on the logical right side

#### getInteriorExtremaTs() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #Cubic-getInteriorExtremaTs data-toc-label='Cubic-getInteriorExtremaTs' }

Returns a list of t values where dx/dt or dy/dt is 0 where 0 &lt; t &lt; 1. subdividing on these will result in monotonic segments
The list does not include t=0 and t=1

#### intersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[RayIntersection](../kite/RayIntersection.md)[]</span> {: #Cubic-intersection data-toc-label='Cubic-intersection' }

Hit-tests this segment with the ray. An array of all intersections of the ray with this segment will be returned.
For details, see the documentation in Segment.js

#### windingIntersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Cubic-windingIntersection data-toc-label='Cubic-windingIntersection' }

Returns the winding number for intersection with a ray

#### writeToContext( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #Cubic-writeToContext data-toc-label='Cubic-writeToContext' }

Draws the segment to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Cubic](../kite/Segment.md#Cubic)</span> {: #Cubic-transformed data-toc-label='Cubic-transformed' }

Returns a new cubic that represents this cubic after transformation by the matrix

#### degreeReduced( epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #Cubic-degreeReduced data-toc-label='Cubic-degreeReduced' }

Returns a degree-reduced quadratic Bezier if possible, otherwise it returns null

#### getSignedAreaFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Cubic-getSignedAreaFragment data-toc-label='Cubic-getSignedAreaFragment' }

Returns the contribution to the signed area computed using Green's Theorem, with P=-y/2 and Q=x/2.

NOTE: This is this segment's contribution to the line integral (-y/2 dx + x/2 dy).

#### reversed() : <span style="font-weight: 400;">[Cubic](../kite/Segment.md#Cubic)</span> {: #Cubic-reversed data-toc-label='Cubic-reversed' }

Returns a reversed copy of this segment (mapping the parametrization from [0,1] =&gt; [1,0]).

#### getSelfIntersection() : <span style="font-weight: 400;">[SegmentIntersection](../kite/SegmentIntersection.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #Cubic-getSelfIntersection data-toc-label='Cubic-getSelfIntersection' }

If it exists, returns the point where the cubic curve self-intersects.

@returns - Null if there is no intersection

#### serialize() : <span style="font-weight: 400;">[SerializedCubic](../kite/Segment.md#SerializedCubic)</span> {: #Cubic-serialize data-toc-label='Cubic-serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### getOverlaps( segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #Cubic-getOverlaps data-toc-label='Cubic-getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param segment
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)

### Instance Properties

#### degree : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Cubic-degree data-toc-label='Cubic-degree' }

Degree of this polynomial (cubic)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedCubic](../kite/Segment.md#SerializedCubic)</span> ) : <span style="font-weight: 400;">[Cubic](../kite/Segment.md#Cubic)</span> {: #Cubic-deserialize data-toc-label='Cubic-deserialize' }

Returns a Cubic from the serialized representation.

#### extremaT( v0 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, v1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, v2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, v3 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #Cubic-extremaT data-toc-label='Cubic-extremaT' }

Finds what t values the cubic extrema are at (if any). This is just the 1-dimensional case, used for multiple purposes

#### getOverlaps( cubic1 : <span style="font-weight: 400;">[Cubic](../kite/Segment.md#Cubic)</span>, cubic2 : <span style="font-weight: 400;">[Cubic](../kite/Segment.md#Cubic)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[]</span> {: #Cubic-getOverlaps data-toc-label='Cubic-getOverlaps' }

Determine whether two Cubics overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

NOTE: for this particular function, we assume we're not degenerate. Things may work if we can be degree-reduced
to a quadratic, but generally that shouldn't be done.

@param cubic1
@param cubic2
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                   in one component.
@returns - The solution, if there is one (and only one)



## Type DashValues {: #DashValues }


```js
import type { DashValues } from 'scenerystack/kite';
```


- **values**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
<br>  Parametric (t) values for where dash boundaries exist
- **arcLength**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Total arc length for this segment
- **initiallyInside**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether the start of the segment is inside a dash (instead of a gap)




## Class EllipticalArc {: #EllipticalArc }


An elliptical arc (a continuous sub-part of an ellipse).

Additional helpful notes:
- http://www.w3.org/TR/SVG/implnote.html#PathElementImplementationNotes
- http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-ellipse
  (note: context.ellipse was removed from the Canvas spec)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { EllipticalArc } from 'scenerystack/kite';
```
### Constructor

#### new EllipticalArc( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, anticlockwise : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #EllipticalArc-EllipticalArc-constructor data-toc-label='new EllipticalArc-EllipticalArc' }

### Instance Methods

#### setCenter( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #EllipticalArc-setCenter data-toc-label='EllipticalArc-setCenter' }

Sets the center of the EllipticalArc.

#### getCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EllipticalArc-getCenter data-toc-label='EllipticalArc-getCenter' }

Returns the center of this EllipticalArc.

#### setRadiusX( radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #EllipticalArc-setRadiusX data-toc-label='EllipticalArc-setRadiusX' }

Sets the semi-major radius of the EllipticalArc.

#### getRadiusX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-getRadiusX data-toc-label='EllipticalArc-getRadiusX' }

Returns the semi-major radius of this EllipticalArc.

#### setRadiusY( radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #EllipticalArc-setRadiusY data-toc-label='EllipticalArc-setRadiusY' }

Sets the semi-minor radius of the EllipticalArc.

#### getRadiusY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-getRadiusY data-toc-label='EllipticalArc-getRadiusY' }

Returns the semi-minor radius of this EllipticalArc.

#### setRotation( rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #EllipticalArc-setRotation data-toc-label='EllipticalArc-setRotation' }

Sets the rotation of the EllipticalArc.

#### getRotation() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-getRotation data-toc-label='EllipticalArc-getRotation' }

Returns the rotation of this EllipticalArc.

#### setStartAngle( startAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #EllipticalArc-setStartAngle data-toc-label='EllipticalArc-setStartAngle' }

Sets the startAngle of the EllipticalArc.

#### getStartAngle() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-getStartAngle data-toc-label='EllipticalArc-getStartAngle' }

Returns the startAngle of this EllipticalArc.

#### setEndAngle( endAngle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #EllipticalArc-setEndAngle data-toc-label='EllipticalArc-setEndAngle' }

Sets the endAngle of the EllipticalArc.

#### getEndAngle() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-getEndAngle data-toc-label='EllipticalArc-getEndAngle' }

Returns the endAngle of this EllipticalArc.

#### setAnticlockwise( anticlockwise : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #EllipticalArc-setAnticlockwise data-toc-label='EllipticalArc-setAnticlockwise' }

Sets the anticlockwise of the EllipticalArc.

#### getAnticlockwise() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EllipticalArc-getAnticlockwise data-toc-label='EllipticalArc-getAnticlockwise' }

Returns the anticlockwise of this EllipticalArc.

#### positionAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EllipticalArc-positionAt data-toc-label='EllipticalArc-positionAt' }

Returns the position parametrically, with 0 &lt;= t &lt;= 1.

NOTE: positionAt( 0 ) will return the start of the segment, and positionAt( 1 ) will return the end of the
segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### tangentAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EllipticalArc-tangentAt data-toc-label='EllipticalArc-tangentAt' }

Returns the non-normalized tangent (dx/dt, dy/dt) of this segment at the parametric value of t, with 0 &lt;= t &lt;= 1.

NOTE: tangentAt( 0 ) will return the tangent at the start of the segment, and tangentAt( 1 ) will return the
tangent at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### curvatureAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-curvatureAt data-toc-label='EllipticalArc-curvatureAt' }

Returns the signed curvature of the segment at the parametric value t, where 0 &lt;= t &lt;= 1.

The curvature will be positive for visual clockwise / mathematical counterclockwise curves, negative for opposite
curvature, and 0 for no curvature.

NOTE: curvatureAt( 0 ) will return the curvature at the start of the segment, and curvatureAt( 1 ) will return
the curvature at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### subdivided( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[EllipticalArc](../kite/Segment.md#EllipticalArc)[]</span> {: #EllipticalArc-subdivided data-toc-label='EllipticalArc-subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. Together (in order) they should make
up the same shape as the current segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### invalidate() {: #EllipticalArc-invalidate data-toc-label='EllipticalArc-invalidate' }

Clears cached information, should be called when any of the 'constructor arguments' are mutated.

#### getUnitTransform() : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md)</span> {: #EllipticalArc-getUnitTransform data-toc-label='EllipticalArc-getUnitTransform' }

Computes a transform that maps a unit circle into this ellipse's location.

Helpful, since we can get the parametric position of our unit circle (at t), and then transform it with this
transform to get the ellipse's parametric position (at t).

#### getStart() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EllipticalArc-getStart data-toc-label='EllipticalArc-getStart' }

Gets the start point of this ellipticalArc

#### getEnd() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EllipticalArc-getEnd data-toc-label='EllipticalArc-getEnd' }

Gets the end point of this ellipticalArc

#### getStartTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EllipticalArc-getStartTangent data-toc-label='EllipticalArc-getStartTangent' }

Gets the tangent vector (normalized) to this ellipticalArc at the start, pointing in the direction of motion (from start to end)

#### getEndTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EllipticalArc-getEndTangent data-toc-label='EllipticalArc-getEndTangent' }

Gets the tangent vector (normalized) to this ellipticalArc at the end point, pointing in the direction of motion (from start to end)

#### getActualEndAngle() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-getActualEndAngle data-toc-label='EllipticalArc-getActualEndAngle' }

Gets the end angle in radians

#### getIsFullPerimeter() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #EllipticalArc-getIsFullPerimeter data-toc-label='EllipticalArc-getIsFullPerimeter' }

Returns a boolean value that indicates if the arc wraps up by more than two Pi

#### getAngleDifference() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-getAngleDifference data-toc-label='EllipticalArc-getAngleDifference' }

Returns an angle difference that represents how "much" of the circle our arc covers

The answer is always greater or equal to zero
The answer can exceed two Pi

#### getUnitArcSegment() : <span style="font-weight: 400;">[Arc](../kite/Segment.md#Arc)</span> {: #EllipticalArc-getUnitArcSegment data-toc-label='EllipticalArc-getUnitArcSegment' }

A unit arg segment that we can map to our ellipse. useful for hit testing and such.

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #EllipticalArc-getBounds data-toc-label='EllipticalArc-getBounds' }

Returns the bounds of this segment.

#### getNondegenerateSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #EllipticalArc-getNondegenerateSegments data-toc-label='EllipticalArc-getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### mapAngle( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-mapAngle data-toc-label='EllipticalArc-mapAngle' }

Maps a contained angle to between [startAngle,actualEndAngle), even if the end angle is lower.

TODO: remove duplication with Arc https://github.com/phetsims/kite/issues/76

#### tAtAngle( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-tAtAngle data-toc-label='EllipticalArc-tAtAngle' }

Returns the parametrized value t for a given angle. The value t should range from 0 to 1 (inclusive).

TODO: remove duplication with Arc https://github.com/phetsims/kite/issues/76

#### angleAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-angleAt data-toc-label='EllipticalArc-angleAt' }

Returns the angle for the parametrized t value. The t value should range from 0 to 1 (inclusive).

#### positionAtAngle( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EllipticalArc-positionAtAngle data-toc-label='EllipticalArc-positionAtAngle' }

Returns the position of this arc at angle.

#### tangentAtAngle( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #EllipticalArc-tangentAtAngle data-toc-label='EllipticalArc-tangentAtAngle' }

Returns the normalized tangent of this arc.
The tangent points outward (inward) of this arc for clockwise (anticlockwise) direction.

#### offsetTo( r : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, reverse : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #EllipticalArc-offsetTo data-toc-label='EllipticalArc-offsetTo' }

Returns an array of straight lines that will draw an offset on the logical left (right) side for reverse false (true)
It discretizes the elliptical arc in 32 segments and returns an offset curve as a list of lineTos/

@param r - distance
@param reverse

#### getSVGPathFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #EllipticalArc-getSVGPathFragment data-toc-label='EllipticalArc-getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided,
so anything that calls this needs to put the M calls first.

#### strokeLeft( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #EllipticalArc-strokeLeft data-toc-label='EllipticalArc-strokeLeft' }

Returns an array of straight lines  that will draw an offset on the logical left side.

#### strokeRight( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #EllipticalArc-strokeRight data-toc-label='EllipticalArc-strokeRight' }

Returns an array of straight lines that will draw an offset curve on the logical right side.

#### getInteriorExtremaTs() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #EllipticalArc-getInteriorExtremaTs data-toc-label='EllipticalArc-getInteriorExtremaTs' }

Returns a list of t values where dx/dt or dy/dt is 0 where 0 &lt; t &lt; 1. subdividing on these will result in monotonic segments
Does not include t=0 and t=1.

#### intersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[RayIntersection](../kite/RayIntersection.md)[]</span> {: #EllipticalArc-intersection data-toc-label='EllipticalArc-intersection' }

Hit-tests this segment with the ray. An array of all intersections of the ray with this segment will be returned.
For details, see the documentation in Segment.js

#### windingIntersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-windingIntersection data-toc-label='EllipticalArc-windingIntersection' }

Returns the resultant winding number of this ray intersecting this arc.

#### writeToContext( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #EllipticalArc-writeToContext data-toc-label='EllipticalArc-writeToContext' }

Draws this arc to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[EllipticalArc](../kite/Segment.md#EllipticalArc)</span> {: #EllipticalArc-transformed data-toc-label='EllipticalArc-transformed' }

Returns this elliptical arc transformed by a matrix

#### getSignedAreaFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #EllipticalArc-getSignedAreaFragment data-toc-label='EllipticalArc-getSignedAreaFragment' }

Returns the contribution to the signed area computed using Green's Theorem, with P=-y/2 and Q=x/2.

NOTE: This is this segment's contribution to the line integral (-y/2 dx + x/2 dy).

#### reversed() : <span style="font-weight: 400;">[EllipticalArc](../kite/Segment.md#EllipticalArc)</span> {: #EllipticalArc-reversed data-toc-label='EllipticalArc-reversed' }

Returns a reversed copy of this segment (mapping the parametrization from [0,1] =&gt; [1,0]).

#### serialize() : <span style="font-weight: 400;">[SerializedEllipticalArc](../kite/Segment.md#SerializedEllipticalArc)</span> {: #EllipticalArc-serialize data-toc-label='EllipticalArc-serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### getOverlaps( segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #EllipticalArc-getOverlaps data-toc-label='EllipticalArc-getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param segment
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)

#### getConicMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #EllipticalArc-getConicMatrix data-toc-label='EllipticalArc-getConicMatrix' }

Returns the matrix representation of the conic section of the ellipse.
See https://en.wikipedia.org/wiki/Matrix_representation_of_conic_sections

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedEllipticalArc](../kite/Segment.md#SerializedEllipticalArc)</span> ) : <span style="font-weight: 400;">[EllipticalArc](../kite/Segment.md#EllipticalArc)</span> {: #EllipticalArc-deserialize data-toc-label='EllipticalArc-deserialize' }

Returns an EllipticalArc from the serialized representation.

#### getOverlapType( a : <span style="font-weight: 400;">[EllipticalArc](../kite/Segment.md#EllipticalArc)</span>, b : <span style="font-weight: 400;">[EllipticalArc](../kite/Segment.md#EllipticalArc)</span>, epsilon ) : <span style="font-weight: 400;">[EllipticalArcOverlapType](../kite/Segment.md#EllipticalArcOverlapType)</span> {: #EllipticalArc-getOverlapType data-toc-label='EllipticalArc-getOverlapType' }

Returns what type of overlap is possible based on the center/radii/rotation. We ignore the start/end angles and
anticlockwise information, and determine if the FULL ellipses overlap.

#### getOverlaps( a : <span style="font-weight: 400;">[EllipticalArc](../kite/Segment.md#EllipticalArc)</span>, b : <span style="font-weight: 400;">[EllipticalArc](../kite/Segment.md#EllipticalArc)</span> ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[]</span> {: #EllipticalArc-getOverlaps data-toc-label='EllipticalArc-getOverlaps' }

Determine whether two elliptical arcs overlap over continuous sections, and if so finds the a,b pairs such that
p( t ) === q( a * t + b ).

@returns - Any overlaps (from 0 to 2)

#### intersect( a : <span style="font-weight: 400;">[EllipticalArc](../kite/Segment.md#EllipticalArc)</span>, b : <span style="font-weight: 400;">[EllipticalArc](../kite/Segment.md#EllipticalArc)</span>, epsilon ) : <span style="font-weight: 400;">[SegmentIntersection](../kite/SegmentIntersection.md)[]</span> {: #EllipticalArc-intersect data-toc-label='EllipticalArc-intersect' }

Returns any (finite) intersection between the two elliptical arc segments.

#### computeUnitMatrix( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #EllipticalArc-computeUnitMatrix data-toc-label='EllipticalArc-computeUnitMatrix' }

Matrix that transforms the unit circle into our ellipse

#### computeUnitTransform( center : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, radiusX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, radiusY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, rotation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md)</span> {: #EllipticalArc-computeUnitTransform data-toc-label='EllipticalArc-computeUnitTransform' }

Transforms the unit circle into our ellipse.

adapted from http://www.w3.org/TR/SVG/implnote.html#PathElementImplementationNotes



## Class EllipticalArcOverlapType {: #EllipticalArcOverlapType }


```js
import { EllipticalArcOverlapType } from 'scenerystack/kite';
```
### Static Properties

#### MATCHING_OVERLAP : <span style="font-weight: 400;">[EllipticalArcOverlapType](../kite/Segment.md#EllipticalArcOverlapType)</span> {: #EllipticalArcOverlapType-MATCHING_OVERLAP data-toc-label='EllipticalArcOverlapType-MATCHING_OVERLAP' }

(readonly)

radiusX of one equals radiusX of the other, with equivalent centers and rotations to work

#### OPPOSITE_OVERLAP : <span style="font-weight: 400;">[EllipticalArcOverlapType](../kite/Segment.md#EllipticalArcOverlapType)</span> {: #EllipticalArcOverlapType-OPPOSITE_OVERLAP data-toc-label='EllipticalArcOverlapType-OPPOSITE_OVERLAP' }

(readonly)

radiusX of one equals radiusY of the other, with equivalent centers and rotations to work

#### NONE : <span style="font-weight: 400;">[EllipticalArcOverlapType](../kite/Segment.md#EllipticalArcOverlapType)</span> {: #EllipticalArcOverlapType-NONE data-toc-label='EllipticalArcOverlapType-NONE' }

(readonly)

no overlap

#### enumeration : <span style="font-weight: 400;">[Enumeration](../phet-core/Enumeration.md)</span> {: #EllipticalArcOverlapType-enumeration data-toc-label='EllipticalArcOverlapType-enumeration' }

(readonly)



## Class KiteLine {: #KiteLine }


A line segment (all points directly between the start and end point)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { KiteLine } from 'scenerystack/kite';
```
### Constructor

#### new KiteLine( start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #KiteLine-KiteLine-constructor data-toc-label='new KiteLine-KiteLine' }

### Instance Methods

#### setStart( start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #KiteLine-setStart data-toc-label='KiteLine-setStart' }

Sets the start point of the Line.

#### getStart() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #KiteLine-getStart data-toc-label='KiteLine-getStart' }

Returns the start of this Line.

#### setEnd( end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #KiteLine-setEnd data-toc-label='KiteLine-setEnd' }

Sets the end point of the Line.

#### getEnd() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #KiteLine-getEnd data-toc-label='KiteLine-getEnd' }

Returns the end of this Line.

#### positionAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #KiteLine-positionAt data-toc-label='KiteLine-positionAt' }

Returns the position parametrically, with 0 &lt;= t &lt;= 1.

NOTE: positionAt( 0 ) will return the start of the segment, and positionAt( 1 ) will return the end of the
segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### tangentAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #KiteLine-tangentAt data-toc-label='KiteLine-tangentAt' }

Returns the non-normalized tangent (dx/dt, dy/dt) of this segment at the parametric value of t, with 0 &lt;= t &lt;= 1.

NOTE: tangentAt( 0 ) will return the tangent at the start of the segment, and tangentAt( 1 ) will return the
tangent at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### curvatureAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #KiteLine-curvatureAt data-toc-label='KiteLine-curvatureAt' }

Returns the signed curvature of the segment at the parametric value t, where 0 &lt;= t &lt;= 1.

The curvature will be positive for visual clockwise / mathematical counterclockwise curves, negative for opposite
curvature, and 0 for no curvature.

NOTE: curvatureAt( 0 ) will return the curvature at the start of the segment, and curvatureAt( 1 ) will return
the curvature at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### subdivided( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #KiteLine-subdivided data-toc-label='KiteLine-subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. Together (in order) they should make
up the same shape as the current segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### invalidate() {: #KiteLine-invalidate data-toc-label='KiteLine-invalidate' }

Clears cached information, should be called when any of the 'constructor arguments' are mutated.

#### getStartTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #KiteLine-getStartTangent data-toc-label='KiteLine-getStartTangent' }

Returns a normalized unit vector that is tangent to this line (at the starting point)
the unit vectors points toward the end points.

#### getEndTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #KiteLine-getEndTangent data-toc-label='KiteLine-getEndTangent' }

Returns the normalized unit vector that is tangent to this line
same as getStartTangent, since this is a straight line

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #KiteLine-getBounds data-toc-label='KiteLine-getBounds' }

Returns the bounds of this segment.

#### getBoundsWithTransform( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #KiteLine-getBoundsWithTransform data-toc-label='KiteLine-getBoundsWithTransform' }

Returns the bounding box for this transformed Line

#### getNondegenerateSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #KiteLine-getNondegenerateSegments data-toc-label='KiteLine-getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### getSVGPathFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #KiteLine-getSVGPathFragment data-toc-label='KiteLine-getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided,
so anything that calls this needs to put the M calls first

#### strokeLeft( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #KiteLine-strokeLeft data-toc-label='KiteLine-strokeLeft' }

Returns an array of Line that will draw an offset curve on the logical left side

#### strokeRight( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #KiteLine-strokeRight data-toc-label='KiteLine-strokeRight' }

Returns an array of Line that will draw an offset curve on the logical right side

#### getInteriorExtremaTs() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #KiteLine-getInteriorExtremaTs data-toc-label='KiteLine-getInteriorExtremaTs' }

In general, this method returns a list of t values where dx/dt or dy/dt is 0 where 0 &lt; t &lt; 1. subdividing on these will result in monotonic segments
Since lines are already monotone, it returns an empty array.

#### intersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[RayIntersection](../kite/RayIntersection.md)[]</span> {: #KiteLine-intersection data-toc-label='KiteLine-intersection' }

Hit-tests this segment with the ray. An array of all intersections of the ray with this segment will be returned.
For details, see the documentation in Segment.js

#### windingIntersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #KiteLine-windingIntersection data-toc-label='KiteLine-windingIntersection' }

Returns the resultant winding number of a ray intersecting this line.

#### writeToContext( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #KiteLine-writeToContext data-toc-label='KiteLine-writeToContext' }

Draws this line to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> {: #KiteLine-transformed data-toc-label='KiteLine-transformed' }

Returns a new Line that represents this line after transformation by the matrix

#### explicitClosestToPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[ClosestToPointResult](../kite/Segment.md#ClosestToPointResult)[]</span> {: #KiteLine-explicitClosestToPoint data-toc-label='KiteLine-explicitClosestToPoint' }

Returns an object that gives information about the closest point (on a line segment) to the point argument

#### getSignedAreaFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #KiteLine-getSignedAreaFragment data-toc-label='KiteLine-getSignedAreaFragment' }

Returns the contribution to the signed area computed using Green's Theorem, with P=-y/2 and Q=x/2.

NOTE: This is this segment's contribution to the line integral (-y/2 dx + x/2 dy).

#### reparameterized( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> {: #KiteLine-reparameterized data-toc-label='KiteLine-reparameterized' }

Given the current curve parameterized by t, will return a curve parameterized by x where t = a * x + b

#### reversed() : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> {: #KiteLine-reversed data-toc-label='KiteLine-reversed' }

Returns a reversed copy of this segment (mapping the parametrization from [0,1] =&gt; [1,0]).

#### polarToCartesian( options : <span style="font-weight: 400;">[PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions)</span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #KiteLine-polarToCartesian data-toc-label='KiteLine-polarToCartesian' }

Convert a line in the $(theta,r)$ plane of the form $(\theta_1,r_1)$ to $(\theta_2,r_2)$ and
converts to the cartesian coordinate system

E.g. a polar line (0,1) to (2 Pi,1) would be mapped to a circle of radius 1

#### getArcLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #KiteLine-getArcLength data-toc-label='KiteLine-getArcLength' }

Returns the arc length of the segment.

#### toPiecewiseLinearOrArcSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #KiteLine-toPiecewiseLinearOrArcSegments data-toc-label='KiteLine-toPiecewiseLinearOrArcSegments' }

We can handle this simply by returning ourselves.

#### serialize() : <span style="font-weight: 400;">[SerializedLine](../kite/Segment.md#SerializedLine)</span> {: #KiteLine-serialize data-toc-label='KiteLine-serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### getOverlaps( segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #KiteLine-getOverlaps data-toc-label='KiteLine-getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param segment
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)

#### getClosestPoints( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[ClosestToPointResult](../kite/Segment.md#ClosestToPointResult)[]</span> {: #KiteLine-getClosestPoints data-toc-label='KiteLine-getClosestPoints' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedLine](../kite/Segment.md#SerializedLine)</span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> {: #KiteLine-deserialize data-toc-label='KiteLine-deserialize' }

Returns a Line from the serialized representation.

#### getOverlaps( line1 : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span>, line2 : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[]</span> {: #KiteLine-getOverlaps data-toc-label='KiteLine-getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param line1
@param line2
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)

#### intersect( a : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span>, b : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> ) : <span style="font-weight: 400;">[SegmentIntersection](../kite/SegmentIntersection.md)[]</span> {: #KiteLine-intersect data-toc-label='KiteLine-intersect' }

Returns any (finite) intersection between the two line segments.

#### intersectOther( line : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span>, other : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> ) : <span style="font-weight: 400;">[SegmentIntersection](../kite/SegmentIntersection.md)[]</span> {: #KiteLine-intersectOther data-toc-label='KiteLine-intersectOther' }

Returns any intersections between a line segment and another type of segment.

This should be more optimized than the general intersection routine of arbitrary segments.



## Type PiecewiseLinearOptions {: #PiecewiseLinearOptions }


```js
import type { PiecewiseLinearOptions } from 'scenerystack/kite';
```


- **minLevels**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  how many levels to force subdivisions
- **maxLevels**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  prevent subdivision past this level
- **distanceEpsilon**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  controls level of subdivision by attempting to ensure a maximum (squared) deviation from the curve
- **curveEpsilon**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  controls level of subdivision by attempting to ensure a maximum curvature change between segments
- **pointMap**?: ( v: [Vector2](../dot/Vector2.md) ) =&gt; [Vector2](../dot/Vector2.md)
<br>  represents a (usually non-linear) transformation applied
- **methodName**?: [KeysMatching](../phet-core/KeysMatching.md)&lt;[Segment](../kite/Segment.md), ( options: [PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions) ) =&gt; [Segment](../kite/Segment.md)[]&gt; | [KeysMatching](../phet-core/KeysMatching.md)&lt;[Arc](../kite/Segment.md#Arc), ( options: [PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions) ) =&gt; [Segment](../kite/Segment.md)[]&gt; | [KeysMatching](../phet-core/KeysMatching.md)&lt;[Cubic](../kite/Segment.md#Cubic), ( options: [PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions) ) =&gt; [Segment](../kite/Segment.md)[]&gt; | [KeysMatching](../phet-core/KeysMatching.md)&lt;[EllipticalArc](../kite/Segment.md#EllipticalArc), ( options: [PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions) ) =&gt; [Segment](../kite/Segment.md)[]&gt; | [KeysMatching](../phet-core/KeysMatching.md)&lt;[Line](../scenery/Line.md), ( options: [PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions) ) =&gt; [Segment](../kite/Segment.md)[]&gt; | [KeysMatching](../phet-core/KeysMatching.md)&lt;[Quadratic](../kite/Segment.md#Quadratic), ( options: [PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions) ) =&gt; [Segment](../kite/Segment.md)[]&gt;
<br>  if the method name is found on the segment, it is called with the expected signature
  function( options ) : Array[Segment] instead of using our brute-force logic




## Class Quadratic {: #Quadratic }


Quadratic Bezier segment

Good reference: http://cagd.cs.byu.edu/~557/text/ch2.pdf

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { Quadratic } from 'scenerystack/kite';
```
### Constructor

#### new Quadratic( start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, control : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #Quadratic-Quadratic-constructor data-toc-label='new Quadratic-Quadratic' }

### Instance Methods

#### setStart( start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Quadratic-setStart data-toc-label='Quadratic-setStart' }

Sets the start point of the Quadratic.

#### getStart() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Quadratic-getStart data-toc-label='Quadratic-getStart' }

Returns the start of this Quadratic.

#### setControl( control : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Quadratic-setControl data-toc-label='Quadratic-setControl' }

Sets the control point of the Quadratic.

#### getControl() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Quadratic-getControl data-toc-label='Quadratic-getControl' }

Returns the control point of this Quadratic.

#### setEnd( end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #Quadratic-setEnd data-toc-label='Quadratic-setEnd' }

Sets the end point of the Quadratic.

#### getEnd() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Quadratic-getEnd data-toc-label='Quadratic-getEnd' }

Returns the end of this Quadratic.

#### positionAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Quadratic-positionAt data-toc-label='Quadratic-positionAt' }

Returns the position parametrically, with 0 &lt;= t &lt;= 1.

NOTE: positionAt( 0 ) will return the start of the segment, and positionAt( 1 ) will return the end of the
segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### tangentAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Quadratic-tangentAt data-toc-label='Quadratic-tangentAt' }

Returns the non-normalized tangent (dx/dt, dy/dt) of this segment at the parametric value of t, with 0 &lt;= t &lt;= 1.

NOTE: tangentAt( 0 ) will return the tangent at the start of the segment, and tangentAt( 1 ) will return the
tangent at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### curvatureAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Quadratic-curvatureAt data-toc-label='Quadratic-curvatureAt' }

Returns the signed curvature of the segment at the parametric value t, where 0 &lt;= t &lt;= 1.

The curvature will be positive for visual clockwise / mathematical counterclockwise curves, negative for opposite
curvature, and 0 for no curvature.

NOTE: curvatureAt( 0 ) will return the curvature at the start of the segment, and curvatureAt( 1 ) will return
the curvature at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### subdivided( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)[]</span> {: #Quadratic-subdivided data-toc-label='Quadratic-subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. Together (in order) they should make
up the same shape as the current segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### invalidate() {: #Quadratic-invalidate data-toc-label='Quadratic-invalidate' }

Clears cached information, should be called when any of the 'constructor arguments' are mutated.

#### getStartTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Quadratic-getStartTangent data-toc-label='Quadratic-getStartTangent' }

Returns the tangent vector (normalized) to the segment at the start, pointing in the direction of motion (from start to end)

#### getEndTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Quadratic-getEndTangent data-toc-label='Quadratic-getEndTangent' }

Returns the tangent vector (normalized) to the segment at the end, pointing in the direction of motion (from start to end)

#### getTCriticalX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Quadratic-getTCriticalX data-toc-label='Quadratic-getTCriticalX' }

#### getTCriticalY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Quadratic-getTCriticalY data-toc-label='Quadratic-getTCriticalY' }

#### getNondegenerateSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #Quadratic-getNondegenerateSegments data-toc-label='Quadratic-getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #Quadratic-getBounds data-toc-label='Quadratic-getBounds' }

Returns the bounds of this segment.

#### offsetTo( r : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, reverse : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)[]</span> {: #Quadratic-offsetTo data-toc-label='Quadratic-offsetTo' }

Returns an array of quadratic that are offset to this quadratic by a distance r

@param r - distance
@param reverse

#### degreeElevated() : <span style="font-weight: 400;">[Cubic](../kite/Segment.md#Cubic)</span> {: #Quadratic-degreeElevated data-toc-label='Quadratic-degreeElevated' }

Elevation of this quadratic Bezier curve to a cubic Bezier curve

#### approximateOffset( r : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)</span> {: #Quadratic-approximateOffset data-toc-label='Quadratic-approximateOffset' }

@param r - distance

#### getSVGPathFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #Quadratic-getSVGPathFragment data-toc-label='Quadratic-getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided, so anything that calls this needs to put the M calls first

#### strokeLeft( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)[]</span> {: #Quadratic-strokeLeft data-toc-label='Quadratic-strokeLeft' }

Returns an array of lines that will draw an offset curve on the logical left side

#### strokeRight( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)[]</span> {: #Quadratic-strokeRight data-toc-label='Quadratic-strokeRight' }

Returns an array of lines that will draw an offset curve on the logical right side

#### getInteriorExtremaTs() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #Quadratic-getInteriorExtremaTs data-toc-label='Quadratic-getInteriorExtremaTs' }

#### intersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[RayIntersection](../kite/RayIntersection.md)[]</span> {: #Quadratic-intersection data-toc-label='Quadratic-intersection' }

Hit-tests this segment with the ray. An array of all intersections of the ray with this segment will be returned.
For details, see the documentation in Segment.js

#### windingIntersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Quadratic-windingIntersection data-toc-label='Quadratic-windingIntersection' }

Returns the winding number for intersection with a ray

#### writeToContext( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #Quadratic-writeToContext data-toc-label='Quadratic-writeToContext' }

Draws the segment to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)</span> {: #Quadratic-transformed data-toc-label='Quadratic-transformed' }

Returns a new quadratic that represents this quadratic after transformation by the matrix

#### getSignedAreaFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Quadratic-getSignedAreaFragment data-toc-label='Quadratic-getSignedAreaFragment' }

Returns the contribution to the signed area computed using Green's Theorem, with P=-y/2 and Q=x/2.

NOTE: This is this segment's contribution to the line integral (-y/2 dx + x/2 dy).

#### reparameterized( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)</span> {: #Quadratic-reparameterized data-toc-label='Quadratic-reparameterized' }

Given the current curve parameterized by t, will return a curve parameterized by x where t = a * x + b

#### reversed() : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)</span> {: #Quadratic-reversed data-toc-label='Quadratic-reversed' }

Returns a reversed copy of this segment (mapping the parametrization from [0,1] =&gt; [1,0]).

#### serialize() : <span style="font-weight: 400;">[SerializedQuadratic](../kite/Segment.md#SerializedQuadratic)</span> {: #Quadratic-serialize data-toc-label='Quadratic-serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### getOverlaps( segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #Quadratic-getOverlaps data-toc-label='Quadratic-getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param segment
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more in one component.
@returns - The solution, if there is one (and only one)

### Instance Properties

#### degree : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Quadratic-degree data-toc-label='Quadratic-degree' }

Degree of the polynomial (quadratic)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedQuadratic](../kite/Segment.md#SerializedQuadratic)</span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)</span> {: #Quadratic-deserialize data-toc-label='Quadratic-deserialize' }

Returns a Quadratic from the serialized representation.

#### extremaT( start : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, control : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, end : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #Quadratic-extremaT data-toc-label='Quadratic-extremaT' }

One-dimensional solution to extrema

#### getOverlaps( quadratic1 : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)</span>, quadratic2 : <span style="font-weight: 400;">[Quadratic](../kite/Segment.md#Quadratic)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[]</span> {: #Quadratic-getOverlaps data-toc-label='Quadratic-getOverlaps' }

Determine whether two Quadratics overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

NOTE: for this particular function, we assume we're not degenerate. Things may work if we can be degree-reduced
to a quadratic, but generally that shouldn't be done.

@param quadratic1
@param quadratic2
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)



## Type SerializedArc {: #SerializedArc }


```js
import type { SerializedArc } from 'scenerystack/kite';
```


- **type**: "[Arc](../kite/Segment.md#Arc)"
- **centerX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **centerY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **radius**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **startAngle**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endAngle**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **anticlockwise**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Type SerializedCubic {: #SerializedCubic }


```js
import type { SerializedCubic } from 'scenerystack/kite';
```


- **type**: "[Cubic](../kite/Segment.md#Cubic)"
- **startX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **startY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **control1X**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **control1Y**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **control2X**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **control2Y**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Type SerializedEllipticalArc {: #SerializedEllipticalArc }


```js
import type { SerializedEllipticalArc } from 'scenerystack/kite';
```


- **type**: "[EllipticalArc](../kite/Segment.md#EllipticalArc)"
- **centerX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **centerY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **radiusX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **radiusY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **rotation**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **startAngle**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endAngle**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **anticlockwise**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Type SerializedLine {: #SerializedLine }


```js
import type { SerializedLine } from 'scenerystack/kite';
```


- **type**: "[Line](../scenery/Line.md)"
- **startX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **startY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Type SerializedQuadratic {: #SerializedQuadratic }


```js
import type { SerializedQuadratic } from 'scenerystack/kite';
```


- **type**: "[Quadratic](../kite/Segment.md#Quadratic)"
- **startX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **startY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **controlX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **controlY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Type SerializedSegment {: #SerializedSegment }


```js
import type { SerializedSegment } from 'scenerystack/kite';
```


[SerializedArc](../kite/Segment.md#SerializedArc) | [SerializedCubic](../kite/Segment.md#SerializedCubic) | [SerializedEllipticalArc](../kite/Segment.md#SerializedEllipticalArc) | [SerializedLine](../kite/Segment.md#SerializedLine) | [SerializedQuadratic](../kite/Segment.md#SerializedQuadratic)



## Source Code

See the source for [Segment.ts](https://github.com/phetsims/kite/blob/main/js/segments/Segment.ts) in the [kite](https://github.com/phetsims/kite) repository.
