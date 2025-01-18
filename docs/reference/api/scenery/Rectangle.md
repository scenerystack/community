# Rectangle

## Overview

A rectangular node that inherits Path, and allows for optimized drawing and improved rectangle handling.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Rectangle {: #Rectangle }


```js
import { Rectangle } from 'scenerystack/scenery';
```
### Constructor

#### new Rectangle( options? : <span style="font-weight: 400;">[RectangleOptions](../scenery/Rectangle.md#RectangleOptions)</span> ) {: #Rectangle-constructor data-toc-label='new Rectangle' }

### Instance Methods

#### setRect( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cornerXRadius? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cornerYRadius? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRect data-toc-label='setRect' }

Sets all of the shape-determining parameters for the rectangle.

@param x - The x-position of the left side of the rectangle.
@param y - The y-position of the top side of the rectangle.
@param width - The width of the rectangle.
@param height - The height of the rectangle.
@param [cornerXRadius] - The horizontal radius of curved corners (0 for sharp corners)
@param [cornerYRadius] - The vertical radius of curved corners (0 for sharp corners)

#### setRectX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRectX data-toc-label='setRectX' }

Sets the x coordinate of the left side of this rectangle (in the local coordinate frame).

#### getRectX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRectX data-toc-label='getRectX' }

Returns the x coordinate of the left side of this rectangle (in the local coordinate frame).

#### setRectY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRectY data-toc-label='setRectY' }

Sets the y coordinate of the top side of this rectangle (in the local coordinate frame).

#### getRectY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRectY data-toc-label='getRectY' }

Returns the y coordinate of the top side of this rectangle (in the local coordinate frame).

#### setRectWidth( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRectWidth data-toc-label='setRectWidth' }

Sets the width of the rectangle (in the local coordinate frame).

#### getRectWidth() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRectWidth data-toc-label='getRectWidth' }

Returns the width of the rectangle (in the local coordinate frame).

#### setRectHeight( height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRectHeight data-toc-label='setRectHeight' }

Sets the height of the rectangle (in the local coordinate frame).

#### getRectHeight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRectHeight data-toc-label='getRectHeight' }

Returns the height of the rectangle (in the local coordinate frame).

#### setCornerXRadius( radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCornerXRadius data-toc-label='setCornerXRadius' }

Sets the horizontal corner radius of the rectangle (in the local coordinate frame).

If the cornerXRadius and cornerYRadius are the same, the corners will be rounded circular arcs with that radius
(or a smaller radius if the rectangle is too small).

If the cornerXRadius and cornerYRadius are different, the corners will be elliptical arcs, and the horizontal
radius will be equal to cornerXRadius (or a smaller radius if the rectangle is too small).

#### getCornerXRadius() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCornerXRadius data-toc-label='getCornerXRadius' }

Returns the horizontal corner radius of the rectangle (in the local coordinate frame).

#### setCornerYRadius( radius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCornerYRadius data-toc-label='setCornerYRadius' }

Sets the vertical corner radius of the rectangle (in the local coordinate frame).

If the cornerXRadius and cornerYRadius are the same, the corners will be rounded circular arcs with that radius
(or a smaller radius if the rectangle is too small).

If the cornerXRadius and cornerYRadius are different, the corners will be elliptical arcs, and the vertical
radius will be equal to cornerYRadius (or a smaller radius if the rectangle is too small).

#### getCornerYRadius() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCornerYRadius data-toc-label='getCornerYRadius' }

Returns the vertical corner radius of the rectangle (in the local coordinate frame).

#### setRectBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRectBounds data-toc-label='setRectBounds' }

Sets the Rectangle's x/y/width/height from the Bounds2 passed in.

#### getRectBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getRectBounds data-toc-label='getRectBounds' }

Returns a new Bounds2 generated from this Rectangle's x/y/width/height.

#### setRectSize( size : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRectSize data-toc-label='setRectSize' }

Sets the Rectangle's width/height from the Dimension2 size passed in.

#### getRectSize() : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #getRectSize data-toc-label='getRectSize' }

Returns a new Dimension2 generated from this Rectangle's width/height.

#### setRectWidthFromRight( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRectWidthFromRight data-toc-label='setRectWidthFromRight' }

Sets the width of the rectangle while keeping its right edge (x + width) in the same position

#### setRectHeightFromBottom( height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setRectHeightFromBottom data-toc-label='setRectHeightFromBottom' }

Sets the height of the rectangle while keeping its bottom edge (y + height) in the same position

#### isRounded() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isRounded data-toc-label='isRounded' }

Returns whether this rectangle has any rounding applied at its corners. If either the x or y corner radius is 0,
then there is no rounding applied.

#### computeShapeBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #computeShapeBounds data-toc-label='computeShapeBounds' }

Computes the bounds of the Rectangle, including any applied stroke. Overridden for efficiency.

#### invalidateRectangle() {: #invalidateRectangle data-toc-label='invalidateRectangle' }

(protected)

Notifies that the rectangle has changed, and invalidates path information and our cached shape.

#### invalidateStroke() {: #invalidateStroke data-toc-label='invalidateStroke' }

We need to detect stroke changes, since our preferred size computations depend on it.

#### containsPointSelf( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPointSelf data-toc-label='containsPointSelf' }

Computes whether the provided point is "inside" (contained) in this Rectangle's self content, or "outside".

Handles axis-aligned optionally-rounded rectangles, although can only do optimized computation if it isn't
rounded. If it IS rounded, we check if a corner computation is needed (usually isn't), and only need to check
one corner for that test.

@param point - Considered to be in the local coordinate frame

#### intersectsBoundsSelf( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #intersectsBoundsSelf data-toc-label='intersectsBoundsSelf' }

Returns whether this Rectangle's selfBounds is intersected by the specified bounds.

@param bounds - Bounds to test, assumed to be in the local coordinate frame.

#### canvasPaintSelf( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #canvasPaintSelf data-toc-label='canvasPaintSelf' }

(protected)

Draws the current Node's self representation, assuming the wrapper's Canvas context is already in the local
coordinate frame of this node.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### setShape( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setShape data-toc-label='setShape' }

It is impossible to set another shape on this Path subtype, as its effective shape is determined by other
parameters.

@param shape - Throws an error if it is not null.

#### getShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getShape data-toc-label='getShape' }

Returns an immutable copy of this Path subtype's representation.

NOTE: This is created lazily, so don't call it if you don't have to!

#### hasShape() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasShape data-toc-label='hasShape' }

Returns whether this Path has an associated Shape (instead of no shape, represented by null)

#### setShapeProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setShapeProperty data-toc-label='setShapeProperty' }

#### setCornerRadius( cornerRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCornerRadius data-toc-label='setCornerRadius' }

Sets both of the corner radii to the same value, so that the rounded corners will be circular arcs.

#### getCornerRadius() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCornerRadius data-toc-label='getCornerRadius' }

Returns the corner radius if both the horizontal and vertical corner radii are the same.

NOTE: If there are different horizontal and vertical corner radii, this will fail an assertion and return the horizontal radius.

#### mutate( options? : <span style="font-weight: 400;">[RectangleOptions](../scenery/Rectangle.md#RectangleOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }

### Static Methods

#### intersects( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, arcWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, arcHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #intersects data-toc-label='intersects' }

Returns whether a point is within a rounded rectangle.

@param x - X value of the left side of the rectangle
@param y - Y value of the top side of the rectangle
@param width - Width of the rectangle
@param height - Height of the rectangle
@param arcWidth - Horizontal corner radius of the rectangle
@param arcHeight - Vertical corner radius of the rectangle
@param point - The point that may or may not be in the rounded rectangle

#### rect( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, options? : <span style="font-weight: 400;">[RectangleOptions](../scenery/Rectangle.md#RectangleOptions)</span> ) : <span style="font-weight: 400;">[Rectangle](../scenery/Rectangle.md)</span> {: #rect data-toc-label='rect' }

Creates a rectangle with the specified x/y/width/height.

See Rectangle's constructor for detailed parameter information.

#### roundedRect( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cornerXRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cornerYRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, options? : <span style="font-weight: 400;">[RectangleOptions](../scenery/Rectangle.md#RectangleOptions)</span> ) : <span style="font-weight: 400;">[Rectangle](../scenery/Rectangle.md)</span> {: #roundedRect data-toc-label='roundedRect' }

Creates a rounded rectangle with the specified x/y/width/height/cornerXRadius/cornerYRadius.

See Rectangle's constructor for detailed parameter information.

#### bounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, options? : <span style="font-weight: 400;">[RectangleOptions](../scenery/Rectangle.md#RectangleOptions)</span> ) : <span style="font-weight: 400;">[Rectangle](../scenery/Rectangle.md)</span> {: #bounds data-toc-label='bounds' }

Creates a rectangle x/y/width/height matching the specified bounds.

See Rectangle's constructor for detailed parameter information.

#### roundedBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, cornerXRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, cornerYRadius : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, options? : <span style="font-weight: 400;">[RectangleOptions](../scenery/Rectangle.md#RectangleOptions)</span> ) : <span style="font-weight: 400;">[Rectangle](../scenery/Rectangle.md)</span> {: #roundedBounds data-toc-label='roundedBounds' }

Creates a rounded rectangle x/y/width/height matching the specified bounds (Rectangle.bounds, but with additional
cornerXRadius and cornerYRadius).

See Rectangle's constructor for detailed parameter information.

#### dimension( dimension : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span>, options? : <span style="font-weight: 400;">[RectangleOptions](../scenery/Rectangle.md#RectangleOptions)</span> ) : <span style="font-weight: 400;">[Rectangle](../scenery/Rectangle.md)</span> {: #dimension data-toc-label='dimension' }

Creates a rectangle with top/left of (0,0) with the specified {Dimension2}'s width and height.

See Rectangle's constructor for detailed parameter information.



## Type RectangleOptions {: #RectangleOptions }


```js
import type { RectangleOptions } from 'scenerystack/scenery';
```


- **rectBounds**?: [Bounds2](../dot/Bounds2.md)
- **rectSize**?: [Dimension2](../dot/Dimension2.md)
- **rectX**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **rectY**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **rectWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **rectHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerXRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cornerYRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;ParentOptions, "shape" | "shapeProperty"&gt;




## Source Code

See the source for [Rectangle.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Rectangle.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
