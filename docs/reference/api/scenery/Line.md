# Line

## Overview

Displays a (stroked) line. Inherits Path, and allows for optimized drawing and improved parameter handling.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Line {: #Line }


```js
import { Line } from 'scenerystack/scenery';
```
### Constructor

#### new Line( options? : <span style="font-weight: 400;">[LineOptions](../scenery/Line.md#LineOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setLine( x1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, x2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setLine data-toc-label='setLine' }

Set all of the line's x and y values.

@param x1 - the start x coordinate
@param y1 - the start y coordinate
@param x2 - the end x coordinate
@param y2 - the end y coordinate

#### setPoint1( p1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPoint1 data-toc-label='setPoint1' }

Set the line's first point's x and y values

#### setPoint1( x1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPoint1 data-toc-label='setPoint1' }

#### setPoint1( x1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [Vector2](../dot/Vector2.md)</span>, y1? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPoint1 data-toc-label='setPoint1' }

#### setPoint2( p1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPoint2 data-toc-label='setPoint2' }

Set the line's second point's x and y values

#### setPoint2( x2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPoint2 data-toc-label='setPoint2' }

#### setPoint2( x2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [Vector2](../dot/Vector2.md)</span>, y2? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setPoint2 data-toc-label='setPoint2' }

#### setX1( x1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setX1 data-toc-label='setX1' }

Sets the x coordinate of the first point of the line.

#### getX1() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getX1 data-toc-label='getX1' }

Returns the x coordinate of the first point of the line.

#### setY1( y1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setY1 data-toc-label='setY1' }

Sets the y coordinate of the first point of the line.

#### getY1() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getY1 data-toc-label='getY1' }

Returns the y coordinate of the first point of the line.

#### setX2( x2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setX2 data-toc-label='setX2' }

Sets the x coordinate of the second point of the line.

#### getX2() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getX2 data-toc-label='getX2' }

Returns the x coordinate of the second point of the line.

#### setY2( y2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setY2 data-toc-label='setY2' }

Sets the y coordinate of the second point of the line.

#### getY2() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getY2 data-toc-label='getY2' }

Returns the y coordinate of the second point of the line.

#### containsPointSelf( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPointSelf data-toc-label='containsPointSelf' }

Computes whether the provided point is "inside" (contained) in this Line's self content, or "outside".

Since an unstroked Line contains no area, we can quickly shortcut this operation.

@param point - Considered to be in the local coordinate frame

#### canvasPaintSelf( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #canvasPaintSelf data-toc-label='canvasPaintSelf' }

(protected)

Draws the current Node's self representation, assuming the wrapper's Canvas context is already in the local
coordinate frame of this node.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### computeShapeBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #computeShapeBounds data-toc-label='computeShapeBounds' }

Computes the bounds of the Line, including any applied stroke. Overridden for efficiency.

#### createSVGDrawable( renderer : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, instance : <span style="font-weight: 400;">[Instance](../scenery/Instance.md)</span> ) : <span style="font-weight: 400;">[SVGSelfDrawable](../scenery/SVGSelfDrawable.md)</span> {: #createSVGDrawable data-toc-label='createSVGDrawable' }

Creates a SVG drawable for this Line.

@param renderer - In the bitmask format specified by Renderer, which may contain additional bit flags.
@param instance - Instance object that will be associated with the drawable

#### createCanvasDrawable( renderer : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, instance : <span style="font-weight: 400;">[Instance](../scenery/Instance.md)</span> ) : <span style="font-weight: 400;">[CanvasSelfDrawable](../scenery/CanvasSelfDrawable.md)</span> {: #createCanvasDrawable data-toc-label='createCanvasDrawable' }

Creates a Canvas drawable for this Line.

@param renderer - In the bitmask format specified by Renderer, which may contain additional bit flags.
@param instance - Instance object that will be associated with the drawable

#### setShape( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setShape data-toc-label='setShape' }

It is impossible to set another shape on this Path subtype, as its effective shape is determined by other
parameters.

Throws an error if it is not null.

#### getShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getShape data-toc-label='getShape' }

Returns an immutable copy of this Path subtype's representation.

NOTE: This is created lazily, so don't call it if you don't have to!

#### hasShape() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasShape data-toc-label='hasShape' }

Returns whether this Path has an associated Shape (instead of no shape, represented by null)

#### setShapeProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Shape](../kite/Shape.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setShapeProperty data-toc-label='setShapeProperty' }

#### mutate( options? : <span style="font-weight: 400;">[LineOptions](../scenery/Line.md#LineOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }



## Type LineOptions {: #LineOptions }


```js
import type { LineOptions } from 'scenerystack/scenery';
```
- **p1**?: [Vector2](../dot/Vector2.md)
- **p2**?: [Vector2](../dot/Vector2.md)
- **x1**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **y1**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **x2**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **y2**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; StrictOmit&lt;[PathOptions](../scenery/Path.md#PathOptions), "shape" | "shapeProperty"&gt;




## Source Code

See the source for [Line.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Line.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
