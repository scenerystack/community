# Subpath

## Overview

A Canvas-style stateful (mutable) subpath, which tracks segments in addition to the points.

See http://www.w3.org/TR/2dcontext/#concept-path
for the path / subpath Canvas concept.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Subpath {: #Subpath }


```js
import { Subpath } from 'scenerystack/kite';
```
### Constructor

#### new Subpath( segments? : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span>, points? : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, closed? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

Returns the bounds of this subpath. It is the bounding-box union of the bounds of each segment contained.

#### getArcLength( distanceEpsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, curveEpsilon? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxLevels? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getArcLength data-toc-label='getArcLength' }

Returns the (sometimes approximate) arc length of the subpath.

#### copy() : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)</span> {: #copy data-toc-label='copy' }

Returns an immutable copy of this subpath

#### invalidatePoints() {: #invalidatePoints data-toc-label='invalidatePoints' }

Invalidates all segments (then ourself), since some points in segments may have been changed.

#### addPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #addPoint data-toc-label='addPoint' }

Adds a point to this subpath

#### addSegment( segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #addSegment data-toc-label='addSegment' }

Adds a segment to this subpath

#### addClosingSegment() {: #addClosingSegment data-toc-label='addClosingSegment' }

Adds a line segment from the start to end (if non-zero length) and marks the subpath as closed.
NOTE: normally you just want to mark the subpath as closed, and not generate the closing segment this way?

#### close() {: #close data-toc-label='close' }

Sets this subpath to be a closed path

#### getLength() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLength data-toc-label='getLength' }

Returns the numbers of points in this subpath

TODO: This is a confusing name! It should be getNumPoints() or something https://github.com/phetsims/kite/issues/76

#### getFirstPoint() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getFirstPoint data-toc-label='getFirstPoint' }

Returns the first point of this subpath

#### getLastPoint() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLastPoint data-toc-label='getLastPoint' }

Returns the last point of this subpath

#### getFirstSegment() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> {: #getFirstSegment data-toc-label='getFirstSegment' }

Returns the first segment of this subpath

#### getLastSegment() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> {: #getLastSegment data-toc-label='getLastSegment' }

Returns the last segment of this subpath

#### getFillSegments() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #getFillSegments data-toc-label='getFillSegments' }

Returns segments that include the "filled" area, which may include an extra closing segment if necessary.

#### isDrawable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDrawable data-toc-label='isDrawable' }

Determines if this subpath is drawable, i.e. if it contains asny segments

#### isClosed() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isClosed data-toc-label='isClosed' }

Determines if this subpath is a closed path, i.e. if the flag is set to closed

#### hasClosingSegment() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasClosingSegment data-toc-label='hasClosingSegment' }

Determines if this subpath is a closed path, i.e. if it has a closed segment

#### getClosingSegment() : <span style="font-weight: 400;">[Line](../scenery/Line.md)</span> {: #getClosingSegment data-toc-label='getClosingSegment' }

Returns a line that would close this subpath

#### getClosestPoints( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[ClosestToPointResult](../kite/Segment.md#ClosestToPointResult)[]</span> {: #getClosestPoints data-toc-label='getClosestPoints' }

Returns an array of potential closest points on the subpath to the given point.

#### writeToContext( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #writeToContext data-toc-label='writeToContext' }

Draws the segment to the 2D Canvas context, assuming the context's current location is already at the start point

#### toPiecewiseLinear( options : <span style="font-weight: 400;">[PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions)</span> ) : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)</span> {: #toPiecewiseLinear data-toc-label='toPiecewiseLinear' }

Converts this subpath to a new subpath made of many line segments (approximating the current subpath)

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)</span> {: #transformed data-toc-label='transformed' }

Returns a copy of this Subpath transformed with the given matrix.

#### nonlinearTransformed( options : <span style="font-weight: 400;">[PiecewiseLinearOptions](../kite/Segment.md#PiecewiseLinearOptions)</span> ) : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)</span> {: #nonlinearTransformed data-toc-label='nonlinearTransformed' }

Converts this subpath to a new subpath made of many line segments (approximating the current subpath) with the
transformation applied.

#### getBoundsWithTransform( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBoundsWithTransform data-toc-label='getBoundsWithTransform' }

Returns the bounds of this subpath when transform by a matrix.

#### offset( distance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)</span> {: #offset data-toc-label='offset' }

Returns a subpath that is offset from this subpath by a distance

TODO: Resolve the bug with the inside-line-join overlap. We have the intersection handling now (potentially) https://github.com/phetsims/kite/issues/76

#### stroked( lineStyles : <span style="font-weight: 400;">[LineStyles](../kite/LineStyles.md)</span> ) : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)[]</span> {: #stroked data-toc-label='stroked' }

Returns an array of subpaths (one if open, two if closed) that represent a stroked copy of this subpath.

#### dashed( lineDash : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, lineDashOffset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, distanceEpsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, curveEpsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)[]</span> {: #dashed data-toc-label='dashed' }

Returns a copy of this subpath with the dash "holes" removed (has many subpaths usually).

@param lineDash
@param lineDashOffset
@param distanceEpsilon - controls level of subdivision by attempting to ensure a maximum (squared) deviation from the curve
@param curveEpsilon - controls level of subdivision by attempting to ensure a maximum curvature change between segments

#### serialize() : <span style="font-weight: 400;">SerializedSubpath</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

### Instance Properties

#### segments : <span style="font-weight: 400;">[Segment](../kite/Segment.md)[]</span> {: #segments data-toc-label='segments' }

#### points : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #points data-toc-label='points' }

#### closed : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #closed data-toc-label='closed' }

#### invalidatedEmitter : <span style="font-weight: 400;">[TinyEmitter](../axon/TinyEmitter.md)</span> {: #invalidatedEmitter data-toc-label='invalidatedEmitter' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">SerializedSubpath</span> ) : <span style="font-weight: 400;">[Subpath](../kite/Subpath.md)</span> {: #deserialize data-toc-label='deserialize' }

Returns a Subpath from the serialized representation.



## Source Code

See the source for [Subpath.ts](https://github.com/phetsims/kite/blob/main/js/util/Subpath.ts) in the [kite](https://github.com/phetsims/kite) repository.
