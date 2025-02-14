# Bounds3

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/Bounds3.ts](https://github.com/phetsims/dot/blob/main/js/Bounds3.ts) for the most up-to-date information.

## Overview

A 3D cuboid-shaped bounded area (bounding box).

There are a number of convenience functions to get locations and points on the Bounds. Currently we do not
store these with the Bounds3 instance, since we want to lower the memory footprint.

minX, minY, minZ, maxX, maxY, and maxZ are actually stored. We don't do x,y,z,width,height,depth because this can't properly express
semi-infinite bounds (like a half-plane), or easily handle what Bounds3.NOTHING and Bounds3.EVERYTHING do with
the constructive solid areas.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Bounds3 {: #Bounds3 }


```js
import { Bounds3 } from 'scenerystack/dot';
```
### Constructor

#### new Bounds3( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minZ : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxZ : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Bounds3-constructor data-toc-label='new Bounds3' }

### Instance Methods

#### getWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getWidth data-toc-label='getWidth' }

The width of the bounds, defined as maxX - minX.

#### getHeight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getHeight data-toc-label='getHeight' }

The height of the bounds, defined as maxY - minY.

#### getDepth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDepth data-toc-label='getDepth' }

The depth of the bounds, defined as maxZ - minZ.

#### getX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getX data-toc-label='getX' }

Alias for minX, when thinking of the bounds as an (x,y,z,width,height,depth) cuboid.

#### getY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getY data-toc-label='getY' }

Alias for minY, when thinking of the bounds as an (x,y,z,width,height,depth) cuboid.

#### getZ() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getZ data-toc-label='getZ' }

Alias for minZ, when thinking of the bounds as an (x,y,z,width,height,depth) cuboid.

#### getMinX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMinX data-toc-label='getMinX' }

Alias for minX, supporting the explicit getter function style.

#### getMinY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMinY data-toc-label='getMinY' }

Alias for minY, supporting the explicit getter function style.

#### getMinZ() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMinZ data-toc-label='getMinZ' }

Alias for minZ, supporting the explicit getter function style.

#### getMaxX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMaxX data-toc-label='getMaxX' }

Alias for maxX, supporting the explicit getter function style.

#### getMaxY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMaxY data-toc-label='getMaxY' }

Alias for maxY, supporting the explicit getter function style.

#### getMaxZ() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMaxZ data-toc-label='getMaxZ' }

Alias for maxZ, supporting the explicit getter function style.

#### getLeft() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLeft data-toc-label='getLeft' }

Alias for minX, when thinking in the UI-layout manner.

#### getTop() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getTop data-toc-label='getTop' }

Alias for minY, when thinking in the UI-layout manner.

#### getBack() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getBack data-toc-label='getBack' }

Alias for minZ, when thinking in the UI-layout manner.

#### getRight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRight data-toc-label='getRight' }

Alias for maxX, when thinking in the UI-layout manner.

#### getBottom() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getBottom data-toc-label='getBottom' }

Alias for maxY, when thinking in the UI-layout manner.

#### getFront() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getFront data-toc-label='getFront' }

Alias for maxZ, when thinking in the UI-layout manner.

#### getCenterX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCenterX data-toc-label='getCenterX' }

The horizontal (X-coordinate) center of the bounds, averaging the minX and maxX.

#### getCenterY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCenterY data-toc-label='getCenterY' }

The vertical (Y-coordinate) center of the bounds, averaging the minY and maxY.

#### getCenterZ() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCenterZ data-toc-label='getCenterZ' }

The depthwise (Z-coordinate) center of the bounds, averaging the minZ and maxZ.

#### getCenter() : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #getCenter data-toc-label='getCenter' }

The point (centerX, centerY, centerZ), in the center of the bounds.

#### isEmpty() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isEmpty data-toc-label='isEmpty' }

Whether we have negative width, height or depth. Bounds3.NOTHING is a prime example of an empty Bounds3.
Bounds with width = height = depth = 0 are considered not empty, since they include the single (0,0,0) point.

#### isFinite() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFinite data-toc-label='isFinite' }

Whether our minimums and maximums are all finite numbers. This will exclude Bounds3.NOTHING and Bounds3.EVERYTHING.

#### hasNonzeroVolume() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasNonzeroVolume data-toc-label='hasNonzeroVolume' }

Whether this bounds has a non-zero volume (non-zero positive width, height and depth).

#### isValid() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isValid data-toc-label='isValid' }

Whether this bounds has a finite and non-negative width, height and depth.

#### containsCoordinates( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsCoordinates data-toc-label='containsCoordinates' }

Whether the coordinates are contained inside the bounding box, or are on the boundary.

@param x - X coordinate of the point to check
@param y - Y coordinate of the point to check
@param z - Z coordinate of the point to check

#### containsPoint( point : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPoint data-toc-label='containsPoint' }

Whether the point is contained inside the bounding box, or is on the boundary.

#### containsBounds( bounds : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsBounds data-toc-label='containsBounds' }

Whether this bounding box completely contains the bounding box passed as a parameter. The boundary of a box is
considered to be "contained".

#### intersectsBounds( bounds : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #intersectsBounds data-toc-label='intersectsBounds' }

Whether this and another bounding box have any points of intersection (including touching boundaries).

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Debugging string for the bounds.

#### equals( other : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

Exact equality comparison between this bounds and another bounds.

#### equalsEpsilon( other : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span>, epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsEpsilon data-toc-label='equalsEpsilon' }

Approximate equality comparison between this bounds and another bounds.
@returns - Whether difference between the two bounds has no min/max with an absolute value greater than epsilon.

#### copy( bounds? : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #copy data-toc-label='copy' }

Creates a copy of this bounds, or if a bounds is passed in, set that bounds's values to ours.

This is the immutable form of the function set(), if a bounds is provided. This will return a new bounds, and
will not modify this bounds.
@param bounds - If not provided, creates a new Bounds3 with filled in values. Otherwise, fills in the
                            values of the provided bounds so that it equals this bounds.

#### union( bounds : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #union data-toc-label='union' }

The smallest bounds that contains both this bounds and the input bounds, returned as a copy.

This is the immutable form of the function includeBounds(). This will return a new bounds, and will not modify
this bounds.

#### intersection( bounds : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #intersection data-toc-label='intersection' }

The smallest bounds that is contained by both this bounds and the input bounds, returned as a copy.

This is the immutable form of the function constrainBounds(). This will return a new bounds, and will not modify
this bounds.

#### withCoordinates( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #withCoordinates data-toc-label='withCoordinates' }

The smallest bounds that contains this bounds and the point (x,y,z), returned as a copy.

This is the immutable form of the function addCoordinates(). This will return a new bounds, and will not modify
this bounds.

#### withPoint( point : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #withPoint data-toc-label='withPoint' }

The smallest bounds that contains this bounds and the input point, returned as a copy.

This is the immutable form of the function addPoint(). This will return a new bounds, and will not modify
this bounds.

#### withMinX( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #withMinX data-toc-label='withMinX' }

A copy of this bounds, with minX replaced with the input.

This is the immutable form of the function setMinX(). This will return a new bounds, and will not modify
this bounds.

#### withMinY( minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #withMinY data-toc-label='withMinY' }

A copy of this bounds, with minY replaced with the input.

This is the immutable form of the function setMinY(). This will return a new bounds, and will not modify
this bounds.

#### withMinZ( minZ : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #withMinZ data-toc-label='withMinZ' }

A copy of this bounds, with minZ replaced with the input.

This is the immutable form of the function setMinZ(). This will return a new bounds, and will not modify
this bounds.

#### withMaxX( maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #withMaxX data-toc-label='withMaxX' }

A copy of this bounds, with maxX replaced with the input.

This is the immutable form of the function setMaxX(). This will return a new bounds, and will not modify
this bounds.

#### withMaxY( maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #withMaxY data-toc-label='withMaxY' }

A copy of this bounds, with maxY replaced with the input.

This is the immutable form of the function setMaxY(). This will return a new bounds, and will not modify
this bounds.

#### withMaxZ( maxZ : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #withMaxZ data-toc-label='withMaxZ' }

A copy of this bounds, with maxZ replaced with the input.

This is the immutable form of the function setMaxZ(). This will return a new bounds, and will not modify
this bounds.

#### roundedOut() : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #roundedOut data-toc-label='roundedOut' }

A copy of this bounds, with the minimum values rounded down to the nearest integer, and the maximum values
rounded up to the nearest integer. This causes the bounds to expand as necessary so that its boundaries
are integer-aligned.

This is the immutable form of the function roundOut(). This will return a new bounds, and will not modify
this bounds.

#### roundedIn() : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #roundedIn data-toc-label='roundedIn' }

A copy of this bounds, with the minimum values rounded up to the nearest integer, and the maximum values
rounded down to the nearest integer. This causes the bounds to contract as necessary so that its boundaries
are integer-aligned.

This is the immutable form of the function roundIn(). This will return a new bounds, and will not modify
this bounds.

#### transformed( matrix : <span style="font-weight: 400;">[Matrix4](../dot/Matrix4.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #transformed data-toc-label='transformed' }

A bounding box (still axis-aligned) that contains the transformed shape of this bounds, applying the matrix as
an affine transformation.

NOTE: bounds.transformed( matrix ).transformed( inverse ) may be larger than the original box, if it includes
a rotation that isn't a multiple of $\pi/2$. This is because the returned bounds may expand in area to cover
ALL of the corners of the transformed bounding box.

This is the immutable form of the function transform(). This will return a new bounds, and will not modify
this bounds.

#### dilated( d : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #dilated data-toc-label='dilated' }

A bounding box that is expanded on all sides by the specified amount.)

This is the immutable form of the function dilate(). This will return a new bounds, and will not modify
this bounds.

#### dilatedX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #dilatedX data-toc-label='dilatedX' }

A bounding box that is expanded horizontally (on the left and right) by the specified amount.

This is the immutable form of the function dilateX(). This will return a new bounds, and will not modify
this bounds.

#### dilatedY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #dilatedY data-toc-label='dilatedY' }

A bounding box that is expanded vertically (on the top and bottom) by the specified amount.

This is the immutable form of the function dilateY(). This will return a new bounds, and will not modify
this bounds.

#### dilatedZ( z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #dilatedZ data-toc-label='dilatedZ' }

A bounding box that is expanded depth-wise (on the front and back) by the specified amount.

This is the immutable form of the function dilateZ(). This will return a new bounds, and will not modify
this bounds.

#### dilatedXYZ( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #dilatedXYZ data-toc-label='dilatedXYZ' }

A bounding box that is expanded on all sides, with different amounts of expansion along each axis.
Will be identical to the bounds returned by calling bounds.dilatedX( x ).dilatedY( y ).dilatedZ( z ).

This is the immutable form of the function dilateXYZ(). This will return a new bounds, and will not modify
this bounds.
@param x - Amount to dilate horizontally (for each side)
@param y - Amount to dilate vertically (for each side)
@param z - Amount to dilate depth-wise (for each side)

#### eroded( amount : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #eroded data-toc-label='eroded' }

A bounding box that is contracted on all sides by the specified amount.

This is the immutable form of the function erode(). This will return a new bounds, and will not modify
this bounds.

#### erodedX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #erodedX data-toc-label='erodedX' }

A bounding box that is contracted horizontally (on the left and right) by the specified amount.

This is the immutable form of the function erodeX(). This will return a new bounds, and will not modify
this bounds.

#### erodedY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #erodedY data-toc-label='erodedY' }

A bounding box that is contracted vertically (on the top and bottom) by the specified amount.

This is the immutable form of the function erodeY(). This will return a new bounds, and will not modify
this bounds.

#### erodedZ( z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #erodedZ data-toc-label='erodedZ' }

A bounding box that is contracted depth-wise (on the front and back) by the specified amount.

This is the immutable form of the function erodeZ(). This will return a new bounds, and will not modify
this bounds.

#### erodedXYZ( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #erodedXYZ data-toc-label='erodedXYZ' }

A bounding box that is contracted on all sides, with different amounts of contraction along each axis.

This is the immutable form of the function erodeXYZ(). This will return a new bounds, and will not modify
this bounds.
@param x - Amount to erode horizontally (for each side)
@param y - Amount to erode vertically (for each side)
@param z - Amount to erode depth-wise (for each side)

#### shiftedX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #shiftedX data-toc-label='shiftedX' }

Our bounds, translated horizontally by x, returned as a copy.

This is the immutable form of the function shiftX(). This will return a new bounds, and will not modify
this bounds.

#### shiftedY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #shiftedY data-toc-label='shiftedY' }

Our bounds, translated vertically by y, returned as a copy.

This is the immutable form of the function shiftY(). This will return a new bounds, and will not modify
this bounds.

#### shiftedZ( z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #shiftedZ data-toc-label='shiftedZ' }

Our bounds, translated depth-wise by z, returned as a copy.

This is the immutable form of the function shiftZ(). This will return a new bounds, and will not modify
this bounds.

#### shiftedXYZ( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #shiftedXYZ data-toc-label='shiftedXYZ' }

Our bounds, translated by (x,y,z), returned as a copy.

This is the immutable form of the function shift(). This will return a new bounds, and will not modify
this bounds.

#### shifted( v : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #shifted data-toc-label='shifted' }

Returns our bounds, translated by a vector, returned as a copy.

#### setMinMax( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minZ : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxZ : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #setMinMax data-toc-label='setMinMax' }

Sets each value for this bounds, and returns itself.

#### setMinX( minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #setMinX data-toc-label='setMinX' }

Sets the value of minX.

This is the mutable form of the function withMinX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### setMinY( minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #setMinY data-toc-label='setMinY' }

Sets the value of minY.

This is the mutable form of the function withMinY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### setMinZ( minZ : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #setMinZ data-toc-label='setMinZ' }

Sets the value of minZ.

This is the mutable form of the function withMinZ(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### setMaxX( maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #setMaxX data-toc-label='setMaxX' }

Sets the value of maxX.

This is the mutable form of the function withMaxX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### setMaxY( maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #setMaxY data-toc-label='setMaxY' }

Sets the value of maxY.

This is the mutable form of the function withMaxY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### setMaxZ( maxZ : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #setMaxZ data-toc-label='setMaxZ' }

Sets the value of maxZ.

This is the mutable form of the function withMaxZ(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### set( bounds : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #set data-toc-label='set' }

Sets the values of this bounds to be equal to the input bounds.

This is the mutable form of the function copy(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### includeBounds( bounds : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #includeBounds data-toc-label='includeBounds' }

Modifies this bounds so that it contains both its original bounds and the input bounds.

This is the mutable form of the function union(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### constrainBounds( bounds : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #constrainBounds data-toc-label='constrainBounds' }

Modifies this bounds so that it is the largest bounds contained both in its original bounds and in the input bounds.

This is the mutable form of the function intersection(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### addCoordinates( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #addCoordinates data-toc-label='addCoordinates' }

Modifies this bounds so that it contains both its original bounds and the input point (x,y,z).

This is the mutable form of the function withCoordinates(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### addPoint( point : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #addPoint data-toc-label='addPoint' }

Modifies this bounds so that it contains both its original bounds and the input point.

This is the mutable form of the function withPoint(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### roundOut() : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #roundOut data-toc-label='roundOut' }

Modifies this bounds so that its boundaries are integer-aligned, rounding the minimum boundaries down and the
maximum boundaries up (expanding as necessary).

This is the mutable form of the function roundedOut(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### roundIn() : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #roundIn data-toc-label='roundIn' }

Modifies this bounds so that its boundaries are integer-aligned, rounding the minimum boundaries up and the
maximum boundaries down (contracting as necessary).

This is the mutable form of the function roundedIn(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### transform( matrix : <span style="font-weight: 400;">[Matrix4](../dot/Matrix4.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #transform data-toc-label='transform' }

Modifies this bounds so that it would fully contain a transformed version if its previous value, applying the
matrix as an affine transformation.

NOTE: bounds.transform( matrix ).transform( inverse ) may be larger than the original box, if it includes
a rotation that isn't a multiple of $\pi/2$. This is because the bounds may expand in area to cover
ALL of the corners of the transformed bounding box.

This is the mutable form of the function transformed(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### dilate( d : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #dilate data-toc-label='dilate' }

Expands this bounds on all sides by the specified amount.

This is the mutable form of the function dilated(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### dilateX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #dilateX data-toc-label='dilateX' }

Expands this bounds horizontally (left and right) by the specified amount.

This is the mutable form of the function dilatedX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### dilateY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #dilateY data-toc-label='dilateY' }

Expands this bounds vertically (top and bottom) by the specified amount.

This is the mutable form of the function dilatedY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### dilateZ( z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #dilateZ data-toc-label='dilateZ' }

Expands this bounds depth-wise (front and back) by the specified amount.

This is the mutable form of the function dilatedZ(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### dilateXYZ( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #dilateXYZ data-toc-label='dilateXYZ' }

Expands this bounds independently along each axis. Will be equal to calling
bounds.dilateX( x ).dilateY( y ).dilateZ( z ).

This is the mutable form of the function dilatedXYZ(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### erode( d : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #erode data-toc-label='erode' }

Contracts this bounds on all sides by the specified amount.

This is the mutable form of the function eroded(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### erodeX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #erodeX data-toc-label='erodeX' }

Contracts this bounds horizontally (left and right) by the specified amount.

This is the mutable form of the function erodedX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### erodeY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #erodeY data-toc-label='erodeY' }

Contracts this bounds vertically (top and bottom) by the specified amount.

This is the mutable form of the function erodedY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### erodeZ( z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #erodeZ data-toc-label='erodeZ' }

Contracts this bounds depth-wise (front and back) by the specified amount.

This is the mutable form of the function erodedZ(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### erodeXYZ( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #erodeXYZ data-toc-label='erodeXYZ' }

Contracts this bounds independently along each axis. Will be equal to calling
bounds.erodeX( x ).erodeY( y ).erodeZ( z ).

This is the mutable form of the function erodedXYZ(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### shiftX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #shiftX data-toc-label='shiftX' }

Translates our bounds horizontally by x.

This is the mutable form of the function shiftedX(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### shiftY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #shiftY data-toc-label='shiftY' }

Translates our bounds vertically by y.

This is the mutable form of the function shiftedY(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### shiftZ( z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #shiftZ data-toc-label='shiftZ' }

Translates our bounds depth-wise by z.

This is the mutable form of the function shiftedZ(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### shiftXYZ( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #shiftXYZ data-toc-label='shiftXYZ' }

Translates our bounds by (x,y,z).

This is the mutable form of the function shifted(). This will mutate (change) this bounds, in addition to returning
this bounds itself.

#### shift( v : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #shift data-toc-label='shift' }

Translates our bounds by the given vector.

### Instance Properties

#### isBounds {: #isBounds data-toc-label='isBounds' }

(readonly)

Helps to identify the dimension of the bounds

#### dimension {: #dimension data-toc-label='dimension' }

(readonly)

### Static Methods

#### cuboid( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, depth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #cuboid data-toc-label='cuboid' }

Returns a new Bounds3 object, with the cuboid (3d rectangle) construction with x, y, z, width, height and depth.

@param x - The minimum value of X for the bounds.
@param y - The minimum value of Y for the bounds.
@param z - The minimum value of Z for the bounds.
@param width - The width (maxX - minX) of the bounds.`
@param height - The height (maxY - minY) of the bounds.
@param depth - The depth (maxZ - minZ) of the bounds.

#### point( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #point data-toc-label='point' }

Returns a new Bounds3 object that only contains the specified point (x,y,z). Useful for being dilated to form a
bounding box around a point. Note that the bounds will not be "empty" as it contains (x,y,z), but it will have
zero area.

### Static Properties

#### NOTHING : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #NOTHING data-toc-label='NOTHING' }

(readonly)

A constant Bounds3 with minimums = $\infty$, maximums = $-\infty$, so that it represents "no bounds whatsoever".

This allows us to take the union (union/includeBounds) of this and any other Bounds3 to get the other bounds back,
e.g. Bounds3.NOTHING.union( bounds ).equals( bounds ). This object naturally serves as the base case as a union of
zero bounds objects.

Additionally, intersections with NOTHING will always return a Bounds3 equivalent to NOTHING.

@constant {Bounds3} NOTHING

#### EVERYTHING : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #EVERYTHING data-toc-label='EVERYTHING' }

(readonly)

A constant Bounds3 with minimums = $-\infty$, maximums = $\infty$, so that it represents "all bounds".

This allows us to take the intersection (intersection/constrainBounds) of this and any other Bounds3 to get the
other bounds back, e.g. Bounds3.EVERYTHING.intersection( bounds ).equals( bounds ). This object naturally serves as
the base case as an intersection of zero bounds objects.

Additionally, unions with EVERYTHING will always return a Bounds3 equivalent to EVERYTHING.

@constant {Bounds3} EVERYTHING

#### Bounds3IO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #Bounds3IO data-toc-label='Bounds3IO' }

(readonly)



## Source Code

See the source for [Bounds3.ts](https://github.com/phetsims/dot/blob/main/js/Bounds3.ts) in the [dot](https://github.com/phetsims/dot) repository.
