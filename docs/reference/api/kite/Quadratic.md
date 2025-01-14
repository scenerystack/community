# Quadratic

## Overview

Quadratic Bezier segment

Good reference: http://cagd.cs.byu.edu/~557/text/ch2.pdf

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Quadratic {: #Quadratic }


```js
import { Quadratic } from 'scenerystack/kite';
```
### Constructor

#### new Quadratic( start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, control : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setStart( start : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setStart data-toc-label='setStart' }

Sets the start point of the Quadratic.

#### getStart() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getStart data-toc-label='getStart' }

Returns the start of this Quadratic.

#### setControl( control : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setControl data-toc-label='setControl' }

Sets the control point of the Quadratic.

#### getControl() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getControl data-toc-label='getControl' }

Returns the control point of this Quadratic.

#### setEnd( end : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setEnd data-toc-label='setEnd' }

Sets the end point of the Quadratic.

#### getEnd() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getEnd data-toc-label='getEnd' }

Returns the end of this Quadratic.

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

#### subdivided( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)[]</span> {: #subdivided data-toc-label='subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. Together (in order) they should make
up the same shape as the current segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### invalidate() {: #invalidate data-toc-label='invalidate' }

Clears cached information, should be called when any of the 'constructor arguments' are mutated.

#### getStartTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getStartTangent data-toc-label='getStartTangent' }

Returns the tangent vector (normalized) to the segment at the start, pointing in the direction of motion (from start to end)

#### getEndTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getEndTangent data-toc-label='getEndTangent' }

Returns the tangent vector (normalized) to the segment at the end, pointing in the direction of motion (from start to end)

#### getTCriticalX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getTCriticalX data-toc-label='getTCriticalX' }

#### getTCriticalY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getTCriticalY data-toc-label='getTCriticalY' }

#### getNondegenerateSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #getNondegenerateSegments data-toc-label='getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounds of this segment.

#### offsetTo( r : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, reverse : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)[]</span> {: #offsetTo data-toc-label='offsetTo' }

Returns an array of quadratic that are offset to this quadratic by a distance r

@param r - distance
@param reverse

#### degreeElevated() : <span style="font-weight: 400;">[Cubic](../kite/Cubic.md)</span> {: #degreeElevated data-toc-label='degreeElevated' }

Elevation of this quadratic Bezier curve to a cubic Bezier curve

#### approximateOffset( r : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)</span> {: #approximateOffset data-toc-label='approximateOffset' }

@param r - distance

#### getSVGPathFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getSVGPathFragment data-toc-label='getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided, so anything that calls this needs to put the M calls first

#### strokeLeft( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)[]</span> {: #strokeLeft data-toc-label='strokeLeft' }

Returns an array of lines that will draw an offset curve on the logical left side

#### strokeRight( lineWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)[]</span> {: #strokeRight data-toc-label='strokeRight' }

Returns an array of lines that will draw an offset curve on the logical right side

#### getInteriorExtremaTs() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #getInteriorExtremaTs data-toc-label='getInteriorExtremaTs' }

#### intersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[RayIntersection](../kite/RayIntersection.md)[]</span> {: #intersection data-toc-label='intersection' }

Hit-tests this segment with the ray. An array of all intersections of the ray with this segment will be returned.
For details, see the documentation in Segment.js

#### windingIntersection( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #windingIntersection data-toc-label='windingIntersection' }

Returns the winding number for intersection with a ray

#### writeToContext( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #writeToContext data-toc-label='writeToContext' }

Draws the segment to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)</span> {: #transformed data-toc-label='transformed' }

Returns a new quadratic that represents this quadratic after transformation by the matrix

#### getSignedAreaFragment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getSignedAreaFragment data-toc-label='getSignedAreaFragment' }

Returns the contribution to the signed area computed using Green's Theorem, with P=-y/2 and Q=x/2.

NOTE: This is this segment's contribution to the line integral (-y/2 dx + x/2 dy).

#### reparameterized( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)</span> {: #reparameterized data-toc-label='reparameterized' }

Given the current curve parameterized by t, will return a curve parameterized by x where t = a * x + b

#### reversed() : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)</span> {: #reversed data-toc-label='reversed' }

Returns a reversed copy of this segment (mapping the parametrization from [0,1] =&gt; [1,0]).

#### serialize() : <span style="font-weight: 400;">[SerializedQuadratic](../kite/Quadratic.md#SerializedQuadratic)</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### getOverlaps( segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getOverlaps data-toc-label='getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param segment
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more in one component.
@returns - The solution, if there is one (and only one)

### Instance Properties

#### degree : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #degree data-toc-label='degree' }

Degree of the polynomial (quadratic)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedQuadratic](../kite/Quadratic.md#SerializedQuadratic)</span> ) : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)</span> {: #deserialize data-toc-label='deserialize' }

Returns a Quadratic from the serialized representation.

#### extremaT( start : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, control : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, end : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #extremaT data-toc-label='extremaT' }

One-dimensional solution to extrema

#### getOverlaps( quadratic1 : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)</span>, quadratic2 : <span style="font-weight: 400;">[Quadratic](../kite/Quadratic.md)</span>, epsilon ) : <span style="font-weight: 400;">[Overlap](../kite/Overlap.md)[]</span> {: #getOverlaps data-toc-label='getOverlaps' }

Determine whether two Quadratics overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

NOTE: for this particular function, we assume we're not degenerate. Things may work if we can be degree-reduced
to a quadratic, but generally that shouldn't be done.

@param quadratic1
@param quadratic2
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)



## Type SerializedQuadratic {: #SerializedQuadratic }


```js
import type { SerializedQuadratic } from 'scenerystack/kite';
```
- **type**: "[Quadratic](../kite/Quadratic.md)"
- **startX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **startY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **controlX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **controlY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endX**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **endY**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [Quadratic.ts](https://github.com/phetsims/kite/blob/main/js/segments/Quadratic.ts) in the [kite](https://github.com/phetsims/kite) repository.
