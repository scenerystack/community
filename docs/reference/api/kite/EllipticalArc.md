# EllipticalArc

## Overview

An elliptical arc (a continuous sub-part of an ellipse).

Additional helpful notes:
- http://www.w3.org/TR/SVG/implnote.html#PathElementImplementationNotes
- http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-ellipse
  (note: context.ellipse was removed from the Canvas spec)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class EllipticalArc {: #EllipticalArc }


```js
import { EllipticalArc } from 'scenerystack/kite';
```
### Constructor

#### new EllipticalArc( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span>, startAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, endAngle : <span style="font-weight: 400; opacity: 80%;">number</span>, anticlockwise : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setCenter( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setCenter data-toc-label='setCenter' }

Sets the center of the EllipticalArc.

#### getCenter() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getCenter data-toc-label='getCenter' }

Returns the center of this EllipticalArc.

#### setRadiusX( radiusX : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setRadiusX data-toc-label='setRadiusX' }

Sets the semi-major radius of the EllipticalArc.

#### getRadiusX() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getRadiusX data-toc-label='getRadiusX' }

Returns the semi-major radius of this EllipticalArc.

#### setRadiusY( radiusY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setRadiusY data-toc-label='setRadiusY' }

Sets the semi-minor radius of the EllipticalArc.

#### getRadiusY() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getRadiusY data-toc-label='getRadiusY' }

Returns the semi-minor radius of this EllipticalArc.

#### setRotation( rotation : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setRotation data-toc-label='setRotation' }

Sets the rotation of the EllipticalArc.

#### getRotation() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getRotation data-toc-label='getRotation' }

Returns the rotation of this EllipticalArc.

#### setStartAngle( startAngle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setStartAngle data-toc-label='setStartAngle' }

Sets the startAngle of the EllipticalArc.

#### getStartAngle() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getStartAngle data-toc-label='getStartAngle' }

Returns the startAngle of this EllipticalArc.

#### setEndAngle( endAngle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setEndAngle data-toc-label='setEndAngle' }

Sets the endAngle of the EllipticalArc.

#### getEndAngle() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getEndAngle data-toc-label='getEndAngle' }

Returns the endAngle of this EllipticalArc.

#### setAnticlockwise( anticlockwise : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setAnticlockwise data-toc-label='setAnticlockwise' }

Sets the anticlockwise of the EllipticalArc.

#### getAnticlockwise() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #getAnticlockwise data-toc-label='getAnticlockwise' }

Returns the anticlockwise of this EllipticalArc.

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

#### subdivided( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">EllipticalArc[]</span> {: #subdivided data-toc-label='subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. Together (in order) they should make
up the same shape as the current segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### invalidate() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #invalidate data-toc-label='invalidate' }

Clears cached information, should be called when any of the 'constructor arguments' are mutated.

#### getUnitTransform() : <span style="font-weight: 400; opacity: 80%;">Transform3</span> {: #getUnitTransform data-toc-label='getUnitTransform' }

Computes a transform that maps a unit circle into this ellipse's location.

Helpful, since we can get the parametric position of our unit circle (at t), and then transform it with this
transform to get the ellipse's parametric position (at t).

#### getStart() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getStart data-toc-label='getStart' }

Gets the start point of this ellipticalArc

#### getEnd() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getEnd data-toc-label='getEnd' }

Gets the end point of this ellipticalArc

#### getStartTangent() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getStartTangent data-toc-label='getStartTangent' }

Gets the tangent vector (normalized) to this ellipticalArc at the start, pointing in the direction of motion (from start to end)

#### getEndTangent() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getEndTangent data-toc-label='getEndTangent' }

Gets the tangent vector (normalized) to this ellipticalArc at the end point, pointing in the direction of motion (from start to end)

#### getActualEndAngle() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getActualEndAngle data-toc-label='getActualEndAngle' }

Gets the end angle in radians

#### getIsFullPerimeter() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #getIsFullPerimeter data-toc-label='getIsFullPerimeter' }

Returns a boolean value that indicates if the arc wraps up by more than two Pi

#### getAngleDifference() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getAngleDifference data-toc-label='getAngleDifference' }

Returns an angle difference that represents how "much" of the circle our arc covers

The answer is always greater or equal to zero
The answer can exceed two Pi

#### getUnitArcSegment() : <span style="font-weight: 400; opacity: 80%;">Arc</span> {: #getUnitArcSegment data-toc-label='getUnitArcSegment' }

A unit arg segment that we can map to our ellipse. useful for hit testing and such.

#### getBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounds of this segment.

#### getNondegenerateSegments() : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #getNondegenerateSegments data-toc-label='getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### mapAngle( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #mapAngle data-toc-label='mapAngle' }

Maps a contained angle to between [startAngle,actualEndAngle), even if the end angle is lower.

TODO: remove duplication with Arc https://github.com/phetsims/kite/issues/76

#### tAtAngle( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #tAtAngle data-toc-label='tAtAngle' }

Returns the parametrized value t for a given angle. The value t should range from 0 to 1 (inclusive).

TODO: remove duplication with Arc https://github.com/phetsims/kite/issues/76

#### angleAt( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #angleAt data-toc-label='angleAt' }

Returns the angle for the parametrized t value. The t value should range from 0 to 1 (inclusive).

#### positionAtAngle( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #positionAtAngle data-toc-label='positionAtAngle' }

Returns the position of this arc at angle.

#### tangentAtAngle( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #tangentAtAngle data-toc-label='tangentAtAngle' }

Returns the normalized tangent of this arc.
The tangent points outward (inward) of this arc for clockwise (anticlockwise) direction.

#### offsetTo( r : <span style="font-weight: 400; opacity: 80%;">number</span>, reverse : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">Line[]</span> {: #offsetTo data-toc-label='offsetTo' }

Returns an array of straight lines that will draw an offset on the logical left (right) side for reverse false (true)
It discretizes the elliptical arc in 32 segments and returns an offset curve as a list of lineTos/

@param r - distance
@param reverse

#### getSVGPathFragment() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getSVGPathFragment data-toc-label='getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided,
so anything that calls this needs to put the M calls first.

#### strokeLeft( lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Line[]</span> {: #strokeLeft data-toc-label='strokeLeft' }

Returns an array of straight lines  that will draw an offset on the logical left side.

#### strokeRight( lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Line[]</span> {: #strokeRight data-toc-label='strokeRight' }

Returns an array of straight lines that will draw an offset curve on the logical right side.

#### getInteriorExtremaTs() : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #getInteriorExtremaTs data-toc-label='getInteriorExtremaTs' }

Returns a list of t values where dx/dt or dy/dt is 0 where 0 &lt; t &lt; 1. subdividing on these will result in monotonic segments
Does not include t=0 and t=1.

#### intersection( ray : <span style="font-weight: 400; opacity: 80%;">Ray2</span> ) : <span style="font-weight: 400; opacity: 80%;">RayIntersection[]</span> {: #intersection data-toc-label='intersection' }

Hit-tests this segment with the ray. An array of all intersections of the ray with this segment will be returned.
For details, see the documentation in Segment.js

#### windingIntersection( ray : <span style="font-weight: 400; opacity: 80%;">Ray2</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #windingIntersection data-toc-label='windingIntersection' }

Returns the resultant winding number of this ray intersecting this arc.

#### writeToContext( context : <span style="font-weight: 400; opacity: 80%;">CanvasRenderingContext2D</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeToContext data-toc-label='writeToContext' }

Draws this arc to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">EllipticalArc</span> {: #transformed data-toc-label='transformed' }

Returns this elliptical arc transformed by a matrix

#### getSignedAreaFragment() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getSignedAreaFragment data-toc-label='getSignedAreaFragment' }

Returns the contribution to the signed area computed using Green's Theorem, with P=-y/2 and Q=x/2.

NOTE: This is this segment's contribution to the line integral (-y/2 dx + x/2 dy).

#### reversed() : <span style="font-weight: 400; opacity: 80%;">EllipticalArc</span> {: #reversed data-toc-label='reversed' }

Returns a reversed copy of this segment (mapping the parametrization from [0,1] =&gt; [1,0]).

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedEllipticalArc</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### getOverlaps( segment : <span style="font-weight: 400; opacity: 80%;">Segment</span>, epsilon ) : <span style="font-weight: 400; opacity: 80%;">Overlap[] | null</span> {: #getOverlaps data-toc-label='getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param segment
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)

#### getConicMatrix() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #getConicMatrix data-toc-label='getConicMatrix' }

Returns the matrix representation of the conic section of the ellipse.
See https://en.wikipedia.org/wiki/Matrix_representation_of_conic_sections

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedEllipticalArc</span> ) : <span style="font-weight: 400; opacity: 80%;">EllipticalArc</span> {: #deserialize data-toc-label='deserialize' }

Returns an EllipticalArc from the serialized representation.

#### getOverlapType( a : <span style="font-weight: 400; opacity: 80%;">EllipticalArc</span>, b : <span style="font-weight: 400; opacity: 80%;">EllipticalArc</span>, epsilon ) : <span style="font-weight: 400; opacity: 80%;">EllipticalArcOverlapType</span> {: #getOverlapType data-toc-label='getOverlapType' }

Returns what type of overlap is possible based on the center/radii/rotation. We ignore the start/end angles and
anticlockwise information, and determine if the FULL ellipses overlap.

#### getOverlaps( a : <span style="font-weight: 400; opacity: 80%;">EllipticalArc</span>, b : <span style="font-weight: 400; opacity: 80%;">EllipticalArc</span> ) : <span style="font-weight: 400; opacity: 80%;">Overlap[]</span> {: #getOverlaps data-toc-label='getOverlaps' }

Determine whether two elliptical arcs overlap over continuous sections, and if so finds the a,b pairs such that
p( t ) === q( a * t + b ).

@returns - Any overlaps (from 0 to 2)

#### intersect( a : <span style="font-weight: 400; opacity: 80%;">EllipticalArc</span>, b : <span style="font-weight: 400; opacity: 80%;">EllipticalArc</span>, epsilon ) : <span style="font-weight: 400; opacity: 80%;">SegmentIntersection[]</span> {: #intersect data-toc-label='intersect' }

Returns any (finite) intersection between the two elliptical arc segments.

#### computeUnitMatrix( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #computeUnitMatrix data-toc-label='computeUnitMatrix' }

Matrix that transforms the unit circle into our ellipse

#### computeUnitTransform( center : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, radiusX : <span style="font-weight: 400; opacity: 80%;">number</span>, radiusY : <span style="font-weight: 400; opacity: 80%;">number</span>, rotation : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Transform3</span> {: #computeUnitTransform data-toc-label='computeUnitTransform' }

Transforms the unit circle into our ellipse.

adapted from http://www.w3.org/TR/SVG/implnote.html#PathElementImplementationNotes



## Source Code

See the source for [EllipticalArc.ts](https://github.com/phetsims/kite/blob/main/js/segments/EllipticalArc.ts) in the [kite](https://github.com/phetsims/kite) repository.
