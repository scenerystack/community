# Cubic

## Overview

Cubic Bezier segment.

See http://www.cis.usouthal.edu/~hain/general/Publications/Bezier/BezierFlattening.pdf for info

Good reference: http://cagd.cs.byu.edu/~557/text/ch2.pdf

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Cubic {: #Cubic }


```js
import { Cubic } from 'scenerystack/kite';
```
### Constructor

#### new Cubic( start : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, control1 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, control2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, end : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setStart( start : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setStart data-toc-label='setStart' }

Sets the start point of the Cubic.

#### getStart() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getStart data-toc-label='getStart' }

Returns the start of this Cubic.

#### setControl1( control1 : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setControl1 data-toc-label='setControl1' }

Sets the first control point of the Cubic.

#### getControl1() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getControl1 data-toc-label='getControl1' }

Returns the first control point of this Cubic.

#### setControl2( control2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setControl2 data-toc-label='setControl2' }

Sets the second control point of the Cubic.

#### getControl2() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getControl2 data-toc-label='getControl2' }

Returns the second control point of this Cubic.

#### setEnd( end : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setEnd data-toc-label='setEnd' }

Sets the end point of the Cubic.

#### getEnd() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getEnd data-toc-label='getEnd' }

Returns the end of this Cubic.

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

#### subdivided( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Cubic[]</span> {: #subdivided data-toc-label='subdivided' }

Returns an array with up to 2 sub-segments, split at the parametric t value. Together (in order) they should make
up the same shape as the current segment.

This method is part of the Segment API. See Segment.js's constructor for more API documentation.

#### invalidate() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #invalidate data-toc-label='invalidate' }

Clears cached information, should be called when any of the 'constructor arguments' are mutated.

#### getStartTangent() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getStartTangent data-toc-label='getStartTangent' }

Gets the start position of this cubic polynomial.

#### getEndTangent() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getEndTangent data-toc-label='getEndTangent' }

Gets the end position of this cubic polynomial.

#### getR() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getR data-toc-label='getR' }

TODO: documentation https://github.com/phetsims/kite/issues/76

#### getS() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getS data-toc-label='getS' }

TODO: documentation https://github.com/phetsims/kite/issues/76

#### getTCusp() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getTCusp data-toc-label='getTCusp' }

Returns the parametric t value for the possible cusp location. A cusp may or may not exist at that point.

#### getTDeterminant() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getTDeterminant data-toc-label='getTDeterminant' }

Returns the determinant value for the cusp, which indicates the presence (or lack of presence) of a cusp.

#### getTInflection1() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getTInflection1 data-toc-label='getTInflection1' }

Returns the parametric t value for the potential location of the first possible inflection point.

#### getTInflection2() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getTInflection2 data-toc-label='getTInflection2' }

Returns the parametric t value for the potential location of the second possible inflection point.

#### getQuadratics() : <span style="font-weight: 400; opacity: 80%;">Quadratic[] | null</span> {: #getQuadratics data-toc-label='getQuadratics' }

If there is a cusp, this cubic will consist of one or two quadratic segments, typically "start =&gt; cusp" and
"cusp =&gt; end".

#### getXExtremaT() : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #getXExtremaT data-toc-label='getXExtremaT' }

Returns a list of parametric t values where x-extrema exist, i.e. where dx/dt==0. These are candidate locations
on the cubic for "maximum X" and "minimum X", and are needed for bounds computations.

#### getYExtremaT() : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #getYExtremaT data-toc-label='getYExtremaT' }

Returns a list of parametric t values where y-extrema exist, i.e. where dy/dt==0. These are candidate locations
on the cubic for "maximum Y" and "minimum Y", and are needed for bounds computations.

#### getBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounds of this segment.

#### getNondegenerateSegments() : <span style="font-weight: 400; opacity: 80%;">Segment[]</span> {: #getNondegenerateSegments data-toc-label='getNondegenerateSegments' }

Returns a list of non-degenerate segments that are equivalent to this segment. Generally gets rid (or simplifies)
invalid or repeated segments.

#### hasCusp() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasCusp data-toc-label='hasCusp' }

Returns whether this cubic has a cusp.

#### toRS( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #toRS data-toc-label='toRS' }

#### offsetTo( r : <span style="font-weight: 400; opacity: 80%;">number</span>, reverse : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">Line[]</span> {: #offsetTo data-toc-label='offsetTo' }

#### getSVGPathFragment() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getSVGPathFragment data-toc-label='getSVGPathFragment' }

Returns a string containing the SVG path. assumes that the start point is already provided, so anything that calls this needs to put
the M calls first

#### strokeLeft( lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Line[]</span> {: #strokeLeft data-toc-label='strokeLeft' }

Returns an array of lines that will draw an offset curve on the logical left side

#### strokeRight( lineWidth : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Line[]</span> {: #strokeRight data-toc-label='strokeRight' }

Returns an array of lines that will draw an offset curve on the logical right side

#### getInteriorExtremaTs() : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #getInteriorExtremaTs data-toc-label='getInteriorExtremaTs' }

Returns a list of t values where dx/dt or dy/dt is 0 where 0 &lt; t &lt; 1. subdividing on these will result in monotonic segments
The list does not include t=0 and t=1

#### intersection( ray : <span style="font-weight: 400; opacity: 80%;">Ray2</span> ) : <span style="font-weight: 400; opacity: 80%;">RayIntersection[]</span> {: #intersection data-toc-label='intersection' }

Hit-tests this segment with the ray. An array of all intersections of the ray with this segment will be returned.
For details, see the documentation in Segment.js

#### windingIntersection( ray : <span style="font-weight: 400; opacity: 80%;">Ray2</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #windingIntersection data-toc-label='windingIntersection' }

Returns the winding number for intersection with a ray

#### writeToContext( context : <span style="font-weight: 400; opacity: 80%;">CanvasRenderingContext2D</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #writeToContext data-toc-label='writeToContext' }

Draws the segment to the 2D Canvas context, assuming the context's current location is already at the start point

#### transformed( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Cubic</span> {: #transformed data-toc-label='transformed' }

Returns a new cubic that represents this cubic after transformation by the matrix

#### degreeReduced( epsilon : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Quadratic | null</span> {: #degreeReduced data-toc-label='degreeReduced' }

Returns a degree-reduced quadratic Bezier if possible, otherwise it returns null

#### getSignedAreaFragment() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getSignedAreaFragment data-toc-label='getSignedAreaFragment' }

Returns the contribution to the signed area computed using Green's Theorem, with P=-y/2 and Q=x/2.

NOTE: This is this segment's contribution to the line integral (-y/2 dx + x/2 dy).

#### reversed() : <span style="font-weight: 400; opacity: 80%;">Cubic</span> {: #reversed data-toc-label='reversed' }

Returns a reversed copy of this segment (mapping the parametrization from [0,1] =&gt; [1,0]).

#### getSelfIntersection() : <span style="font-weight: 400; opacity: 80%;">SegmentIntersection | null</span> {: #getSelfIntersection data-toc-label='getSelfIntersection' }

If it exists, returns the point where the cubic curve self-intersects.

@returns - Null if there is no intersection

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedCubic</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### getOverlaps( segment : <span style="font-weight: 400; opacity: 80%;">Segment</span>, epsilon ) : <span style="font-weight: 400; opacity: 80%;">Overlap[] | null</span> {: #getOverlaps data-toc-label='getOverlaps' }

Determine whether two lines overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

@param segment
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                            in one component.
@returns - The solution, if there is one (and only one)

### Instance Properties

#### degree : <span style="font-weight: 400; opacity: 80%;">number</span> {: #degree data-toc-label='degree' }

Degree of this polynomial (cubic)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedCubic</span> ) : <span style="font-weight: 400; opacity: 80%;">Cubic</span> {: #deserialize data-toc-label='deserialize' }

Returns a Cubic from the serialized representation.

#### extremaT( v0 : <span style="font-weight: 400; opacity: 80%;">number</span>, v1 : <span style="font-weight: 400; opacity: 80%;">number</span>, v2 : <span style="font-weight: 400; opacity: 80%;">number</span>, v3 : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #extremaT data-toc-label='extremaT' }

Finds what t values the cubic extrema are at (if any). This is just the 1-dimensional case, used for multiple purposes

#### getOverlaps( cubic1 : <span style="font-weight: 400; opacity: 80%;">Cubic</span>, cubic2 : <span style="font-weight: 400; opacity: 80%;">Cubic</span>, epsilon ) : <span style="font-weight: 400; opacity: 80%;">Overlap[]</span> {: #getOverlaps data-toc-label='getOverlaps' }

Determine whether two Cubics overlap over a continuous section, and if so finds the a,b pair such that
p( t ) === q( a * t + b ).

NOTE: for this particular function, we assume we're not degenerate. Things may work if we can be degree-reduced
to a quadratic, but generally that shouldn't be done.

@param cubic1
@param cubic2
@param [epsilon] - Will return overlaps only if no two corresponding points differ by this amount or more
                   in one component.
@returns - The solution, if there is one (and only one)



## Source Code

See the source for [Cubic.ts](https://github.com/phetsims/kite/blob/main/js/segments/Cubic.ts) in the [kite](https://github.com/phetsims/kite) repository.
