# Bounds2

## Overview

A 2D rectangle-shaped bounded area (bounding box).

There are a number of convenience functions to get positions and points on the Bounds. Currently we do not
store these with the Bounds2 instance, since we want to lower the memory footprint.

minX, minY, maxX, and maxY are actually stored. We don't do x,y,width,height because this can't properly express
semi-infinite bounds (like a half-plane), or easily handle what Bounds2.NOTHING and Bounds2.EVERYTHING do with
the constructive solid areas.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Bounds2 {: #Bounds2 }


```js
import { Bounds2 } from 'scenerystack/dot';
```
### Constructor

#### new Bounds2( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Bounds2-constructor data-toc-label='new Bounds2' }

### Instance Methods

#### getWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getWidth data-toc-label='getWidth' }

The width of the bounds, defined as maxX - minX.

#### getHeight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getHeight data-toc-label='getHeight' }

The height of the bounds, defined as maxY - minY.

#### getX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getX data-toc-label='getX' }

Alias for minX, when thinking of the bounds as an (x,y,width,height) rectangle.

#### getY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getY data-toc-label='getY' }

Alias for minY, when thinking of the bounds as an (x,y,width,height) rectangle.

#### getMinX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMinX data-toc-label='getMinX' }

Alias for minX, supporting the explicit getter function style.

#### getMinY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMinY data-toc-label='getMinY' }

Alias for minY, supporting the explicit getter function style.

#### getMaxX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMaxX data-toc-label='getMaxX' }

Alias for maxX, supporting the explicit getter function style.

#### getMaxY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMaxY data-toc-label='getMaxY' }

Alias for maxY, supporting the explicit getter function style.

#### getLeft() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLeft data-toc-label='getLeft' }

Alias for minX, when thinking in the UI-layout manner.

#### getTop() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getTop data-toc-label='getTop' }

Alias for minY, when thinking in the UI-layout manner.

#### getRight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRight data-toc-label='getRight' }

Alias for maxX, when thinking in the UI-layout manner.

#### getBottom() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getBottom data-toc-label='getBottom' }

Alias for maxY, when thinking in the UI-layout manner.

#### getCenterX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCenterX data-toc-label='getCenterX' }

The horizontal (X-coordinate) center of the bounds, averaging the minX and maxX.

#### getCenterY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCenterY data-toc-label='getCenterY' }

The vertical (Y-coordinate) center of the bounds, averaging the minY and maxY.

#### getLeftTop() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLeftTop data-toc-label='getLeftTop' }

The point (minX, minY), in the UI-coordinate upper-left.

#### getCenterTop() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getCenterTop data-toc-label='getCenterTop' }

The point (centerX, minY), in the UI-coordinate upper-center.

#### getRightTop() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getRightTop data-toc-label='getRightTop' }

The point (right, minY), in the UI-coordinate upper-right.

#### getLeftCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLeftCenter data-toc-label='getLeftCenter' }

The point (left, centerY), in the UI-coordinate center-left.

#### getCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getCenter data-toc-label='getCenter' }

The point (centerX, centerY), in the center of the bounds.

#### getRightCenter() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getRightCenter data-toc-label='getRightCenter' }

The point (maxX, centerY), in the UI-coordinate center-right

#### getLeftBottom() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLeftBottom data-toc-label='getLeftBottom' }

The point (minX, maxY), in the UI-coordinate lower-left

#### getCenterBottom() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getCenterBottom data-toc-label='getCenterBottom' }

The point (centerX, maxY), in the UI-coordinate lower-center

#### getRightBottom() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getRightBottom data-toc-label='getRightBottom' }

The point (maxX, maxY), in the UI-coordinate lower-right

#### isEmpty() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isEmpty data-toc-label='isEmpty' }

Whether we have negative width or height. Bounds2.NOTHING is a prime example of an empty Bounds2.
Bounds with width = height = 0 are considered not empty, since they include the single (0,0) point.

#### isFinite() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFinite data-toc-label='isFinite' }

Whether our minimums and maximums are all finite numbers. This will exclude Bounds2.NOTHING and Bounds2.EVERYTHING.

#### hasNonzeroArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasNonzeroArea data-toc-label='hasNonzeroArea' }

Whether this bounds has a non-zero area (non-zero positive width and height).

#### isValid() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isValid data-toc-label='isValid' }

Whether this bounds has a finite and non-negative width and height.

#### closestPointTo( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #closestPointTo data-toc-label='closestPointTo' }

If the point is inside the bounds, the point will be returned. Otherwise, this will return a new point
on the edge of the bounds that is the closest to the provided point.

#### closestBoundaryPointTo( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #closestBoundaryPointTo data-toc-label='closestBoundaryPointTo' }

Find the point on the boundary of the Bounds2 that is closest to the provided point.

#### getConstrainedPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getConstrainedPoint data-toc-label='getConstrainedPoint' }

Give a point outside of this Bounds2, constrain it to a point on the boundary of this Bounds2.

#### containsCoordinates( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsCoordinates data-toc-label='containsCoordinates' }

Whether the coordinates are contained inside the bounding box, or are on the boundary.

@param x - X coordinate of the point to check
@param y - Y coordinate of the point to check

#### containsPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPoint data-toc-label='containsPoint' }

Whether the point is contained inside the bounding box, or is on the boundary.

#### containsBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsBounds data-toc-label='containsBounds' }

Whether this bounding box completely contains the bounding box passed as a parameter. The boundary of a box is
considered to be "contained".

#### intersectsBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #intersectsBounds data-toc-label='intersectsBounds' }

Whether this and another bounding box have any points of intersection (including touching boundaries).

#### minimumDistanceToPointSquared( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #minimumDistanceToPointSquared data-toc-label='minimumDistanceToPointSquared' }

The squared distance from the input point to the point closest to it inside the bounding box.

#### maximumDistanceToPointSquared( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #maximumDistanceToPointSquared data-toc-label='maximumDistanceToPointSquared' }

The squared distance from the input point to the point furthest from it inside the bounding box.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Debugging string for the bounds.

#### equals( other : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

Exact equality comparison between this bounds and another bounds.

@returns - Whether the two bounds are equal

#### equalsEpsilon( other : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsEpsilon data-toc-label='equalsEpsilon' }

Approximate equality comparison between this bounds and another bounds.

@returns - Whether difference between the two bounds has no min/max with an absolute value greater
           than epsilon.

#### copy( bounds? : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #copy data-toc-label='copy' }

Creates a copy of this bounds, or if a bounds is passed in, set that bounds's values to ours.

This is the immutable form of the function set(), if a bounds is provided. This will return a new bounds, and
will not modify this bounds.

@param [bounds] - If not provided, creates a new Bounds2 with filled in values. Otherwise, fills in the
                  values of the provided bounds so that it equals this bounds.

#### union( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #union data-toc-label='union' }

The smallest bounds that contains both this bounds and the input bounds, returned as a copy.

This is the immutable form of the function includeBounds(). This will return a new bounds, and will not modify
this bounds.

#### intersection( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #intersection data-toc-label='intersection' }

The smallest bounds that is contained by both this bounds and the input bounds, returned as a copy.

This is the immutable form of the function constrainBounds(). This will return a new bounds, and will not modify
this bounds.

#### withCoordinates( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #withCoordinates data-toc-label='withCoordinates' }

The smallest bounds that contains this bounds and the point (x,y), returned as a copy.

This is the immutable form of the function addCoordinates(). This will return a new bounds, and will not modify
this bounds.

#### withPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #withPoint data-toc-label='withPoint' }

The smallest bounds that contains this bounds and the input point, returned as a copy.

This is the immutable form of the function addPoint(). This will return a new bounds, and will not modify
this bounds.

#### withX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #withX data-toc-label='withX' }

Returns the smallest bounds that contains both this bounds and the x value provided.

This is the immutable form of the function addX(). This will return a new bounds, and will not modify
this bounds.

#### withY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #withY data-toc-label='withY' }

Returns the smallest bounds that contains both this bounds and the y value provided.

This is the immutable form of the function addY(). This will return a new bounds, and will not modify
this bounds.

#### withMinX( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #withMinX data-toc-label='withMinX' }

A copy of this bounds, with minX replaced with the input.

This is the immutable form of the function setMinX(). This will return a new bounds, and will not modify
this bounds.

#### withMinY( minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #withMinY data-toc-label='withMinY' }

A copy of this bounds, with minY replaced with the input.

This is the immutable form of the function setMinY(). This will return a new bounds, and will not modify
this bounds.

#### withMaxX( maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #withMaxX data-toc-label='withMaxX' }

A copy of this bounds, with maxX replaced with the input.

This is the immutable form of the function setMaxX(). This will return a new bounds, and will not modify
this bounds.

#### withMaxY( maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #withMaxY data-toc-label='withMaxY' }

A copy of this bounds, with maxY replaced with the input.

This is the immutable form of the function setMaxY(). This will return a new bounds, and will not modify
this bounds.

#### roundedOut() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #roundedOut data-toc-label='roundedOut' }

A copy of this bounds, with the minimum values rounded down to the nearest integer, and the maximum values
rounded up to the nearest integer. This causes the bounds to expand as necessary so that its boundaries
are integer-aligned.

This is the immutable form of the function roundOut(). This will return a new bounds, and will not modify
this bounds.

#### roundedIn() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #roundedIn data-toc-label='roundedIn' }

A copy of this bounds, with the minimum values rounded up to the nearest integer, and the maximum values
rounded down to the nearest integer. This causes the bounds to contract as necessary so that its boundaries
are integer-aligned.

This is the immutable form of the function roundIn(). This will return a new bounds, and will not modify
this bounds.

#### transformed( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #transformed data-toc-label='transformed' }

A bounding box (still axis-aligned) that contains the transformed shape of this bounds, applying the matrix as
an affine transformation.

NOTE: bounds.transformed( matrix ).transformed( inverse ) may be larger than the original box, if it includes
a rotation that isn't a multiple of $\pi/2$. This is because the returned bounds may expand in area to cover
ALL of the corners of the transformed bounding box.

This is the immutable form of the function transform(). This will return a new bounds, and will not modify
this bounds.

#### dilated( d : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #dilated data-toc-label='dilated' }

A bounding box that is expanded on all sides by the specified amount.)

This is the immutable form of the function dilate(). This will return a new bounds, and will not modify
this bounds.

#### dilatedX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #dilatedX data-toc-label='dilatedX' }

A bounding box that is expanded horizontally (on the left and right) by the specified amount.

This is the immutable form of the function dilateX(). This will return a new bounds, and will not modify
this bounds.

#### dilatedY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #dilatedY data-toc-label='dilatedY' }

A bounding box that is expanded vertically (on the top and bottom) by the specified amount.

This is the immutable form of the function dilateY(). This will return a new bounds, and will not modify
this bounds.

#### dilatedXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #dilatedXY data-toc-label='dilatedXY' }

A bounding box that is expanded on all sides, with different amounts of expansion horizontally and vertically.
Will be identical to the bounds returned by calling bounds.dilatedX( x ).dilatedY( y ).

This is the immutable form of the function dilateXY(). This will return a new bounds, and will not modify
this bounds.

@param x - Amount to dilate horizontally (for each side)
@param y - Amount to dilate vertically (for each side)

#### eroded( amount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #eroded data-toc-label='eroded' }

A bounding box that is contracted on all sides by the specified amount.

This is the immutable form of the function erode(). This will return a new bounds, and will not modify
this bounds.

#### erodedX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #erodedX data-toc-label='erodedX' }

A bounding box that is contracted horizontally (on the left and right) by the specified amount.

This is the immutable form of the function erodeX(). This will return a new bounds, and will not modify
this bounds.

#### erodedY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #erodedY data-toc-label='erodedY' }

A bounding box that is contracted vertically (on the top and bottom) by the specified amount.

This is the immutable form of the function erodeY(). This will return a new bounds, and will not modify
this bounds.

#### erodedXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #erodedXY data-toc-label='erodedXY' }

A bounding box that is contracted on all sides, with different amounts of contraction horizontally and vertically.

This is the immutable form of the function erodeXY(). This will return a new bounds, and will not modify
this bounds.

@param x - Amount to erode horizontally (for each side)
@param y - Amount to erode vertically (for each side)

#### withOffsets( left : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, top : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, right : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, bottom : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #withOffsets data-toc-label='withOffsets' }

A bounding box that is expanded by a specific amount on all sides (or if some offsets are negative, will contract
those sides).

This is the immutable form of the function offset(). This will return a new bounds, and will not modify
this bounds.

@param left - Amount to expand to the left (subtracts from minX)
@param top - Amount to expand to the top (subtracts from minY)
@param right - Amount to expand to the right (adds to maxX)
@param bottom - Amount to expand to the bottom (adds to maxY)

#### shiftedX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #shiftedX data-toc-label='shiftedX' }

Our bounds, translated horizontally by x, returned as a copy.

This is the immutable form of the function shiftX(). This will return a new bounds, and will not modify
this bounds.

#### shiftedY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #shiftedY data-toc-label='shiftedY' }

Our bounds, translated vertically by y, returned as a copy.

This is the immutable form of the function shiftY(). This will return a new bounds, and will not modify
this bounds.

#### shiftedXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #shiftedXY data-toc-label='shiftedXY' }

Our bounds, translated by (x,y), returned as a copy.

This is the immutable form of the function shift(). This will return a new bounds, and will not modify
this bounds.

#### shifted( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #shifted data-toc-label='shifted' }

Returns our bounds, translated by a vector, returned as a copy.

#### blend( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #blend data-toc-label='blend' }

Returns an interpolated value of this bounds and the argument.

@param bounds
@param ratio - 0 will result in a copy of `this`, 1 will result in bounds, and in-between controls the
                        amount of each.

#### setMinMax( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #setMinMax data-toc-label='setMinMax' }

Sets each value for this bounds, and returns itself.

#### setMinX( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #setMinX data-toc-label='setMinX' }

Sets the value of minX.

This is the mutable form of the function withMinX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### setMinY( minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #setMinY data-toc-label='setMinY' }

Sets the value of minY.

This is the mutable form of the function withMinY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### setMaxX( maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #setMaxX data-toc-label='setMaxX' }

Sets the value of maxX.

This is the mutable form of the function withMaxX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### setMaxY( maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #setMaxY data-toc-label='setMaxY' }

Sets the value of maxY.

This is the mutable form of the function withMaxY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### set( bounds : <span style="font-weight: 400;">Bounds2Like</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #set data-toc-label='set' }

Sets the values of this bounds to be equal to the input bounds.

This is the mutable form of the function copy(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### includeBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #includeBounds data-toc-label='includeBounds' }

Modifies this bounds so that it contains both its original bounds and the input bounds.

This is the mutable form of the function union(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### constrainBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #constrainBounds data-toc-label='constrainBounds' }

Modifies this bounds so that it is the largest bounds contained both in its original bounds and in the input bounds.

This is the mutable form of the function intersection(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### addCoordinates( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #addCoordinates data-toc-label='addCoordinates' }

Modifies this bounds so that it contains both its original bounds and the input point (x,y).

This is the mutable form of the function withCoordinates(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### addPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #addPoint data-toc-label='addPoint' }

Modifies this bounds so that it contains both its original bounds and the input point.

This is the mutable form of the function withPoint(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### addX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #addX data-toc-label='addX' }

Modifies this bounds so that it is guaranteed to include the given x value (if it didn't already). If the x value
was already contained, nothing will be done.

This is the mutable form of the function withX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### addY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #addY data-toc-label='addY' }

Modifies this bounds so that it is guaranteed to include the given y value (if it didn't already). If the y value
was already contained, nothing will be done.

This is the mutable form of the function withY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### roundOut() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #roundOut data-toc-label='roundOut' }

Modifies this bounds so that its boundaries are integer-aligned, rounding the minimum boundaries down and the
maximum boundaries up (expanding as necessary).

This is the mutable form of the function roundedOut(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### roundIn() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #roundIn data-toc-label='roundIn' }

Modifies this bounds so that its boundaries are integer-aligned, rounding the minimum boundaries up and the
maximum boundaries down (contracting as necessary).

This is the mutable form of the function roundedIn(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### transform( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #transform data-toc-label='transform' }

Modifies this bounds so that it would fully contain a transformed version if its previous value, applying the
matrix as an affine transformation.

NOTE: bounds.transform( matrix ).transform( inverse ) may be larger than the original box, if it includes
a rotation that isn't a multiple of $\pi/2$. This is because the bounds may expand in area to cover
ALL of the corners of the transformed bounding box.

This is the mutable form of the function transformed(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### dilate( d : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #dilate data-toc-label='dilate' }

Expands this bounds on all sides by the specified amount.

This is the mutable form of the function dilated(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### dilateX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #dilateX data-toc-label='dilateX' }

Expands this bounds horizontally (left and right) by the specified amount.

This is the mutable form of the function dilatedX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### dilateY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #dilateY data-toc-label='dilateY' }

Expands this bounds vertically (top and bottom) by the specified amount.

This is the mutable form of the function dilatedY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### dilateXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #dilateXY data-toc-label='dilateXY' }

Expands this bounds independently in the horizontal and vertical directions. Will be equal to calling
bounds.dilateX( x ).dilateY( y ).

This is the mutable form of the function dilatedXY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### erode( d : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #erode data-toc-label='erode' }

Contracts this bounds on all sides by the specified amount.

This is the mutable form of the function eroded(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### erodeX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #erodeX data-toc-label='erodeX' }

Contracts this bounds horizontally (left and right) by the specified amount.

This is the mutable form of the function erodedX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### erodeY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #erodeY data-toc-label='erodeY' }

Contracts this bounds vertically (top and bottom) by the specified amount.

This is the mutable form of the function erodedY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### erodeXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #erodeXY data-toc-label='erodeXY' }

Contracts this bounds independently in the horizontal and vertical directions. Will be equal to calling
bounds.erodeX( x ).erodeY( y ).

This is the mutable form of the function erodedXY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### offset( left : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, top : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, right : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, bottom : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #offset data-toc-label='offset' }

Expands this bounds independently for each side (or if some offsets are negative, will contract those sides).

This is the mutable form of the function withOffsets(). This will mutate (change) this bounds, in addition to
returning this bounds itself.

@param left - Amount to expand to the left (subtracts from minX)
@param top - Amount to expand to the top (subtracts from minY)
@param right - Amount to expand to the right (adds to maxX)
@param bottom - Amount to expand to the bottom (adds to maxY)

#### shiftX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #shiftX data-toc-label='shiftX' }

Translates our bounds horizontally by x.

This is the mutable form of the function shiftedX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### shiftY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #shiftY data-toc-label='shiftY' }

Translates our bounds vertically by y.

This is the mutable form of the function shiftedY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### shiftXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #shiftXY data-toc-label='shiftXY' }

Translates our bounds by (x,y).

This is the mutable form of the function shifted(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### shift( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #shift data-toc-label='shift' }

Translates our bounds by the given vector.

#### getXRange() : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getXRange data-toc-label='getXRange' }

Returns the range of the x-values of this bounds.

#### setXRange( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #setXRange data-toc-label='setXRange' }

Sets the x-range of this bounds.

#### getYRange() : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> {: #getYRange data-toc-label='getYRange' }

Returns the range of the y-values of this bounds.

#### setYRange( range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #setYRange data-toc-label='setYRange' }

Sets the y-range of this bounds.

#### getClosestPoint( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, result? : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getClosestPoint data-toc-label='getClosestPoint' }

Find a point in the bounds closest to the specified point.

@param x - X coordinate of the point to test.
@param y - Y coordinate of the point to test.
@param [result] - Vector2 that can store the return value to avoid allocations.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #minX data-toc-label='minX' }

The minimum X coordinate of the bounds.

#### minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #minY data-toc-label='minY' }

The minimum Y coordinate of the bounds.

#### maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #maxX data-toc-label='maxX' }

The maximum X coordinate of the bounds.

#### maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #maxY data-toc-label='maxY' }

The maximum Y coordinate of the bounds.

#### isBounds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isBounds data-toc-label='isBounds' }

Helps to identify the dimension of the bounds

#### dimension : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #dimension data-toc-label='dimension' }

### Static Methods

#### create( bounds : <span style="font-weight: 400;">Bounds2Like</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #create data-toc-label='create' }

Static factory method

#### rect( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #rect data-toc-label='rect' }

Returns a new Bounds2 object, with the familiar rectangle construction with x, y, width, and height.

@param x - The minimum value of X for the bounds.
@param y - The minimum value of Y for the bounds.
@param width - The width (maxX - minX) of the bounds.
@param height - The height (maxY - minY) of the bounds.

#### oriented( orientation : <span style="font-weight: 400;">[Orientation](../phet-core/Orientation.md)</span>, minPrimary : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minSecondary : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxPrimary : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxSecondary : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #oriented data-toc-label='oriented' }

Returns a new Bounds2 object with a given orientation (min/max specified for both the given (primary) orientation,
and also the secondary orientation).

#### point( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #point data-toc-label='point' }

Returns a new Bounds2 object that only contains the specified point (x,y). Useful for being dilated to form a
bounding box around a point. Note that the bounds will not be "empty" as it contains (x,y), but it will have
zero area. The x and y coordinates can be specified by numbers or with at Vector2

@param x
@param y

#### point( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #point data-toc-label='point' }

#### point( x : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #point data-toc-label='point' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)

#### NOTHING : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #NOTHING data-toc-label='NOTHING' }

(readonly)

A constant Bounds2 with minimums = $\infty$, maximums = $-\infty$, so that it represents "no bounds whatsoever".

This allows us to take the union (union/includeBounds) of this and any other Bounds2 to get the other bounds back,
e.g. Bounds2.NOTHING.union( bounds ).equals( bounds ). This object naturally serves as the base case as a union of
zero bounds objects.

Additionally, intersections with NOTHING will always return a Bounds2 equivalent to NOTHING.

#### EVERYTHING : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #EVERYTHING data-toc-label='EVERYTHING' }

(readonly)

A constant Bounds2 with minimums = $-\infty$, maximums = $\infty$, so that it represents "all bounds".

This allows us to take the intersection (intersection/constrainBounds) of this and any other Bounds2 to get the
other bounds back, e.g. Bounds2.EVERYTHING.intersection( bounds ).equals( bounds ). This object naturally serves as
the base case as an intersection of zero bounds objects.

Additionally, unions with EVERYTHING will always return a Bounds2 equivalent to EVERYTHING.

#### Bounds2IO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #Bounds2IO data-toc-label='Bounds2IO' }

(readonly)



## Type Bounds2StateObject {: #Bounds2StateObject }


For PhET-iO serialization

```js
import type { Bounds2StateObject } from 'scenerystack/dot';
```


- **minX**: [InfiniteNumberStateObject](../tandem/InfiniteNumberIO.md#InfiniteNumberStateObject)
- **minY**: [InfiniteNumberStateObject](../tandem/InfiniteNumberIO.md#InfiniteNumberStateObject)
- **maxX**: [InfiniteNumberStateObject](../tandem/InfiniteNumberIO.md#InfiniteNumberStateObject)
- **maxY**: [InfiniteNumberStateObject](../tandem/InfiniteNumberIO.md#InfiniteNumberStateObject)




## Source Code

See the source for [Bounds2.ts](https://github.com/phetsims/dot/blob/main/js/Bounds2.ts) in the [dot](https://github.com/phetsims/dot) repository.
