# KiteLine

## Overview

A line segment (all points directly between the start and end point)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class KiteLine {: #KiteLine }


```js
import { KiteLine } from 'scenerystack/kite';
```
### Constructor

#### new KiteLine( start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setStart( start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setStart data-toc-label='setStart' }

Sets the start point of the Line.

#### getStart() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getStart data-toc-label='getStart' }

Returns the start of this Line.

#### setEnd( end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setEnd data-toc-label='setEnd' }

Sets the end point of the Line.

#### getEnd() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getEnd data-toc-label='getEnd' }

Returns the end of this Line.

#### positionAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #positionAt data-toc-label='positionAt' }

Returns the position parametrically, with 0 &lt;= t &lt;= 1.

NOTE: positionAt( 0 ) will return the start of the segment, and positionAt( 1 ) will return the end of the
segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### tangentAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #tangentAt data-toc-label='tangentAt' }

Returns the non-normalized tangent (dx/dt, dy/dt) of this segment at the parametric value of t, with 0 &lt;= t &lt;= 1.

NOTE: tangentAt( 0 ) will return the tangent at the start of the segment, and tangentAt( 1 ) will return the
tangent at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### curvatureAt( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #curvatureAt data-toc-label='curvatureAt' }

Returns the signed curvature of the segment at the parametric value t, where 0 &lt;= t &lt;= 1.

The curvature will be positive for visual clockwise / mathematical counterclockwise curves, negative for opposite
curvature, and 0 for no curvature.

NOTE: curvatureAt( 0 ) will return the curvature at the start of the segment, and curvatureAt( 1 ) will return
the curvature at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### subdivided( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #subdivided data-toc-label='subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. Together (in order) they should make
up the same shape as the current segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### invalidate() {: #invalidate data-toc-label='invalidate' }

Clears cached information, should be called when any of the 'constructor arguments' are mutated.

#### getStartTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getStartTangent data-toc-label='getStartTangent' }

Returns a normalized unit vector that is tangent to this line (at the starting point)
the unit vectors points toward the end points.

#### getEndTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getEndTangent data-toc-label='getEndTangent' }

Returns the normalized unit vector that is tangent to this line
same as getStartTangent, since this is a straight line

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounds of this segment.

#### getBoundsWithTransform( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBoundsWithTransform data-toc-label='getBoundsWithTransform' }

Returns the bounding box for this transformed Line

#### getNondegenerateSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #getNondegenerateSegments data-toc-label='getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### getSVGPathFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getSVGPathFragment data-toc-label='getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided,
so anything that calls this needs to put the M calls first

#### strokeLeft( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #strokeLeft data-toc-label='strokeLeft' }

Returns an array of Line that will draw an offset curve on the logical left side

#### strokeRight( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)[]</span> {: #strokeRight data-toc-label='strokeRight' }

Returns an array of Line that will draw an offset curve on the logical right side

#### getInteriorExtremaTs() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #getInteriorExtremaTs data-toc-label='getInteriorExtremaTs' }

In general, this method returns a list of t values where dx/dt or dy/dt is 0 where 0 &lt; t &lt; 1. subdividing on these will result in monotonic segments
Since lines are already monotone, it returns an empty array.

#### intersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[RayIntersection](../kite/RayIntersection.md)[]</span> {: #intersection data-toc-label='intersection' }

Hit-tests this segment with the ray. An array of all intersections of the ray with this segment will be returned.
For details, see the documentation in Segment.js

#### windingIntersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #windingIntersection data-toc-label='windingIntersection' }

Returns the resultant winding number of a ray intersecting this line.

#### writeToContext( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #writeToContext data-toc-label='writeToContext' }

Draws this line to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> {: #transformed data-toc-label='transformed' }

Returns a new Line that represents this line after transformation by the matrix

#### explicitClosestToPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[ClosestToPointResult](../kite/Segment.md#ClosestToPointResult)[]</span> {: #explicitClosestToPoint data-toc-label='explicitClosestToPoint' }

Returns an object that gives information about the closest point (on a line segment) to the point argument

#### getSignedAreaFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSignedAreaFragment data-toc-label='getSignedAreaFragment' }

Returns the contribution to the signed area computed using Green's Theorem, with P=-y/2 and Q=x/2.

NOTE: This is this segment's contribution to the line integral (-y/2 dx + x/2 dy).

#### reparameterized( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> {: #reparameterized data-toc-label='reparameterized' }

Given the current curve parameterized by t, will return a curve parameterized by x where t = a * x + b

#### reversed() : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> {: #reversed data-toc-label='reversed' }

Returns a reversed copy of this segment (mapping the parametrization from [0,1] =&gt; [1,0]).

#### polarToCartesian( options : <span style="font-weight: 400;">[PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions)</span> ) : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #polarToCartesian data-toc-label='polarToCartesian' }

Convert a line in the $(theta,r)$ plane of the form $(\theta_1,r_1)$ to $(\theta_2,r_2)$ and
converts to the cartesian coordinate system

E.g. a polar line (0,1) to (2 Pi,1) would be mapped to a circle of radius 1

#### getArcLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getArcLength data-toc-label='getArcLength' }

Returns the arc length of the segment.

#### toPiecewiseLinearOrArcSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #toPiecewiseLinearOrArcSegments data-toc-label='toPiecewiseLinearOrArcSegments' }

We can handle this simply by returning ourselves.

#### serialize() : <span style="font-weight: 400;">[SerializedLine](../kite/KiteLine.md#SerializedLine)</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### getOverlaps( segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getOverlaps data-toc-label='getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param segment
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)

#### getClosestPoints( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[ClosestToPointResult](../kite/Segment.md#ClosestToPointResult)[]</span> {: #getClosestPoints data-toc-label='getClosestPoints' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedLine](../kite/KiteLine.md#SerializedLine)</span> ) : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> {: #deserialize data-toc-label='deserialize' }

Returns a Line from the serialized representation.

#### getOverlaps( line1 : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span>, line2 : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[]</span> {: #getOverlaps data-toc-label='getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param line1
@param line2
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)

#### intersect( a : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span>, b : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> ) : <span style="font-weight: 400;">[SegmentIntersection](../kite/SegmentIntersection.md)[]</span> {: #intersect data-toc-label='intersect' }

Returns any (finite) intersection between the two line segments.

#### intersectOther( line : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span>, other : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> ) : <span style="font-weight: 400;">[SegmentIntersection](../kite/SegmentIntersection.md)[]</span> {: #intersectOther data-toc-label='intersectOther' }

Returns any intersections between a line segment and another type of segment.

This should be more optimized than the general intersection routine of arbitrary segments.



## Type SerializedLine {: #SerializedLine }


```js
import type { SerializedLine } from 'scenerystack/kite';
```
- **type**: "[Line](../scenery/Line.md)"
- **startX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **startY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [Line.ts](https://github.com/phetsims/kite/blob/main/js/segments/Line.ts) in the [kite](https://github.com/phetsims/kite) repository.
