# Arc

## Overview

A circular arc (a continuous sub-part of a circle).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Arc {: #Arc }


```js
import { Arc } from 'scenerystack/kite';
```
### Constructor

#### new Arc( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radius : <span style="font-weight: 400; opacity: 80%;">number</span>, startAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, anticlockwise : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setCenter( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setCenter data-toc-label='setCenter' }

Sets the center of the Arc.

#### getCenter() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getCenter data-toc-label='getCenter' }

Returns the center of this Arc.

#### setRadius( radius : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setRadius data-toc-label='setRadius' }

Sets the radius of the Arc.

#### getRadius() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getRadius data-toc-label='getRadius' }

Returns the radius of this Arc.

#### setStartAngle( startAngle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setStartAngle data-toc-label='setStartAngle' }

Sets the startAngle of the Arc.

#### getStartAngle() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getStartAngle data-toc-label='getStartAngle' }

Returns the startAngle of this Arc.

#### setEndAngle( endAngle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setEndAngle data-toc-label='setEndAngle' }

Sets the endAngle of the Arc.

#### getEndAngle() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getEndAngle data-toc-label='getEndAngle' }

Returns the endAngle of this Arc.

#### setAnticlockwise( anticlockwise : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setAnticlockwise data-toc-label='setAnticlockwise' }

Sets the anticlockwise of the Arc.

#### getAnticlockwise() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #getAnticlockwise data-toc-label='getAnticlockwise' }

Returns the anticlockwise of this Arc.

#### positionAt( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #positionAt data-toc-label='positionAt' }

Returns the position parametrically, with 0 &lt;= t &lt;= 1.

NOTE: positionAt( 0 ) will return the start of the segment, and positionAt( 1 ) will return the end of the
segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### tangentAt( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #tangentAt data-toc-label='tangentAt' }

Returns the non-normalized tangent (dx/dt, dy/dt) of this segment at the parametric value of t, with 0 &lt;= t &lt;= 1.

NOTE: tangentAt( 0 ) will return the tangent at the start of the segment, and tangentAt( 1 ) will return the
tangent at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### curvatureAt( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #curvatureAt data-toc-label='curvatureAt' }

Returns the signed curvature of the segment at the parametric value t, where 0 &lt;= t &lt;= 1.

The curvature will be positive for visual clockwise / mathematical counterclockwise curves, negative for opposite
curvature, and 0 for no curvature.

NOTE: curvatureAt( 0 ) will return the curvature at the start of the segment, and curvatureAt( 1 ) will return
the curvature at the end of the segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### subdivided( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Arc[]</span> {: #subdivided data-toc-label='subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. Together (in order) they should make
up the same shape as the current segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### invalidate() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #invalidate data-toc-label='invalidate' }

Clears cached information, should be called when any of the 'constructor arguments' are mutated.

#### getStart() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getStart data-toc-label='getStart' }

Gets the start position of this arc.

#### getEnd() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getEnd data-toc-label='getEnd' }

Gets the end position of this arc.

#### getStartTangent() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getStartTangent data-toc-label='getStartTangent' }

Gets the unit vector tangent to this arc at the start point.

#### getEndTangent() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getEndTangent data-toc-label='getEndTangent' }

Gets the unit vector tangent to the arc at the end point.

#### getActualEndAngle() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getActualEndAngle data-toc-label='getActualEndAngle' }

Gets the end angle in radians.

#### getIsFullPerimeter() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #getIsFullPerimeter data-toc-label='getIsFullPerimeter' }

Returns a boolean value that indicates if the arc wraps up by more than two Pi.

#### getAngleDifference() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getAngleDifference data-toc-label='getAngleDifference' }

Returns an angle difference that represents how "much" of the circle our arc covers.

The answer is always greater or equal to zero
The answer can exceed two Pi

#### getBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounds of this segment.

#### getNondegenerateSegments() : <span style="font-weight: 400; opacity: 80%;">Arc[]</span> {: #getNondegenerateSegments data-toc-label='getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### mapAngle( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #mapAngle data-toc-label='mapAngle' }

Maps a contained angle to between [startAngle,actualEndAngle), even if the end angle is lower.

#### tAtAngle( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #tAtAngle data-toc-label='tAtAngle' }

Returns the parametrized value t for a given angle. The value t should range from 0 to 1 (inclusive).

#### angleAt( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #angleAt data-toc-label='angleAt' }

Returns the angle for the parametrized t value. The t value should range from 0 to 1 (inclusive).

#### positionAtAngle( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #positionAtAngle data-toc-label='positionAtAngle' }

Returns the position of this arc at angle.

#### tangentAtAngle( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #tangentAtAngle data-toc-label='tangentAtAngle' }

Returns the normalized tangent of this arc.
The tangent points outward (inward) of this arc for clockwise (anticlockwise) direction.

#### containsAngle( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #containsAngle data-toc-label='containsAngle' }

Returns whether the given angle is contained by the arc (whether a ray from the arc's origin going in that angle
will intersect the arc).

#### getSVGPathFragment() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getSVGPathFragment data-toc-label='getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided,
so anything that calls this needs to put the M calls first

#### strokeLeft( lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Arc[]</span> {: #strokeLeft data-toc-label='strokeLeft' }

Returns an array of arcs that will draw an offset on the logical left side

#### strokeRight( lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Arc[]</span> {: #strokeRight data-toc-label='strokeRight' }

Returns an array of arcs that will draw an offset curve on the logical right side

#### getInteriorExtremaTs() : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #getInteriorExtremaTs data-toc-label='getInteriorExtremaTs' }

Returns a list of t values where dx/dt or dy/dt is 0 where 0 &lt; t &lt; 1. subdividing on these will result in monotonic segments
Does not include t=0 and t=1

#### intersection( ray : <span style="font-weight: 400; opacity: 80%;">Ray2</span> ) : <span style="font-weight: 400; opacity: 80%;">RayIntersection[]</span> {: #intersection data-toc-label='intersection' }

Hit-tests this segment with the ray. An array of all intersections of the ray with this segment will be returned.
For details, see the documentation in Segment.js

#### windingIntersection( ray : <span style="font-weight: 400; opacity: 80%;">Ray2</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #windingIntersection data-toc-label='windingIntersection' }

Returns the resultant winding number of this ray intersecting this arc.

#### writeToContext( context : <span style="font-weight: 400; opacity: 80%;">CanvasRenderingContext2D</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeToContext data-toc-label='writeToContext' }

Draws this arc to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Arc | EllipticalArc</span> {: #transformed data-toc-label='transformed' }

Returns a new copy of this arc, transformed by the given matrix.

TODO: test various transform types, especially rotations, scaling, shears, etc. https://github.com/phetsims/kite/issues/76

#### getSignedAreaFragment() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getSignedAreaFragment data-toc-label='getSignedAreaFragment' }

Returns the contribution to the signed area computed using Green's Theorem, with P=-y/2 and Q=x/2.

NOTE: This is this segment's contribution to the line integral (-y/2 dx + x/2 dy).

#### reversed() : <span style="font-weight: 400; opacity: 80%;">Arc</span> {: #reversed data-toc-label='reversed' }

Returns a reversed copy of this segment (mapping the parametrization from [0,1] =&gt; [1,0]).

#### getArcLength() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getArcLength data-toc-label='getArcLength' }

Returns the arc length of the segment.

#### toPiecewiseLinearOrArcSegments() : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #toPiecewiseLinearOrArcSegments data-toc-label='toPiecewiseLinearOrArcSegments' }

We can handle this simply by returning ourselves.

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedArc</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### getOverlaps( segment : <span style="font-weight: 400; opacity: 80%;">Segment</span>, epsilon ) : <span style="font-weight: 400; opacity: 80%;">Overlap[] | null</span> {: #getOverlaps data-toc-label='getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param segment
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)

#### getConicMatrix() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #getConicMatrix data-toc-label='getConicMatrix' }

Returns the matrix representation of the conic section of the circle.
See https://en.wikipedia.org/wiki/Matrix_representation_of_conic_sections

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedArc</span> ) : <span style="font-weight: 400; opacity: 80%;">Arc</span> {: #deserialize data-toc-label='deserialize' }

Returns an Arc from the serialized representation.

#### computeActualEndAngle( startAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, anticlockwise : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #computeActualEndAngle data-toc-label='computeActualEndAngle' }

Determines the actual end angle (compared to the start angle).

Normalizes the sign of the angles, so that the sign of ( endAngle - startAngle ) matches whether it is
anticlockwise.

#### getAngularOverlaps( startAngle1 : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle1 : <span style="font-weight: 400; opacity: 80%;">number</span>, startAngle2 : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle2 : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Overlap[]</span> {: #getAngularOverlaps data-toc-label='getAngularOverlaps' }

Determine whether two Arcs overlap over continuous sections, and if so finds the a,b pairs such that
p( t ) === q( a * t + b ).

@param startAngle1 - Start angle of arc 1
@param endAngle1 - "Actual" end angle of arc 1
@param startAngle2 - Start angle of arc 2
@param endAngle2 - "Actual" end angle of arc 2
@returns - Any overlaps (from 0 to 2)

#### getOverlaps( arc1 : <span style="font-weight: 400; opacity: 80%;">Arc</span>, arc2 : <span style="font-weight: 400; opacity: 80%;">Arc</span> ) : <span style="font-weight: 400; opacity: 80%;">Overlap[]</span> {: #getOverlaps data-toc-label='getOverlaps' }

Determine whether two Arcs overlap over continuous sections, and if so finds the a,b pairs such that
p( t ) === q( a * t + b ).

@returns - Any overlaps (from 0 to 2)

#### getCircleIntersectionPoint( center1 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radius1 : <span style="font-weight: 400; opacity: 80%;">number</span>, center2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radius2 : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span> {: #getCircleIntersectionPoint data-toc-label='getCircleIntersectionPoint' }

Returns the points of intersections between two circles.

@param center1 - Center of the first circle
@param radius1 - Radius of the first circle
@param center2 - Center of the second circle
@param radius2 - Radius of the second circle

#### intersect( a : <span style="font-weight: 400; opacity: 80%;">Arc</span>, b : <span style="font-weight: 400; opacity: 80%;">Arc</span> ) : <span style="font-weight: 400; opacity: 80%;">SegmentIntersection[]</span> {: #intersect data-toc-label='intersect' }

Returns any (finite) intersection between the two arc segments.

#### createFromPoints( startPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, middlePoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Segment</span> {: #createFromPoints data-toc-label='createFromPoints' }

Creates an Arc (or if straight enough a Line) segment that goes from the startPoint to the endPoint, touching
the middlePoint somewhere between the two.



## Source Code

See the source for [Arc.ts](https://github.com/phetsims/kite/blob/main/js/segments/Arc.ts) in the [kite](https://github.com/phetsims/kite) repository.
