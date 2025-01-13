# Circle

## Overview

A circular node that inherits Path, and allows for optimized drawing and improved parameter handling.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Circle {: #Circle }


```js
import { Circle } from 'scenerystack/scenery';
```
### Constructor

#### new Circle( options? : <span style="font-weight: 400; opacity: 80%;">CircleOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### intersectsBoundsSelf( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #intersectsBoundsSelf data-toc-label='intersectsBoundsSelf' }

Returns whether this Circle's selfBounds is intersected by the specified bounds.

@param bounds - Bounds to test, assumed to be in the local coordinate frame.

#### canvasPaintSelf( wrapper : <span style="font-weight: 400; opacity: 80%;">CanvasContextWrapper</span>, matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #canvasPaintSelf data-toc-label='canvasPaintSelf' }

(protected)

Draws the current Node's self representation, assuming the wrapper's Canvas context is already in the local
coordinate frame of this node.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### setRadius( radius : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setRadius data-toc-label='setRadius' }

Sets the radius of the circle.

#### getRadius() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getRadius data-toc-label='getRadius' }

Returns the radius of the circle.

#### computeShapeBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #computeShapeBounds data-toc-label='computeShapeBounds' }

Computes the bounds of the Circle, including any applied stroke. Overridden for efficiency.

#### containsPointSelf( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #containsPointSelf data-toc-label='containsPointSelf' }

Computes whether the provided point is "inside" (contained) in this Circle's self content, or "outside".

Exists to optimize hit detection, as it's quick to compute for circles.

@param point - Considered to be in the local coordinate frame

#### setShape( shape : <span style="font-weight: 400; opacity: 80%;">Shape | null</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setShape data-toc-label='setShape' }

It is impossible to set another shape on this Path subtype, as its effective shape is determined by other
parameters.

@param shape - Throws an error if it is not null.

#### getShape() : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #getShape data-toc-label='getShape' }

Returns an immutable copy of this Path subtype's representation.

NOTE: This is created lazily, so don't call it if you don't have to!

#### hasShape() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasShape data-toc-label='hasShape' }

Returns whether this Path has an associated Shape (instead of no shape, represented by null)

#### setShapeProperty( newTarget : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;Shape | string | null&gt; | null</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setShapeProperty data-toc-label='setShapeProperty' }

#### mutate( options? : <span style="font-weight: 400; opacity: 80%;">CircleOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #mutate data-toc-label='mutate' }



## Source Code

See the source for [Circle.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Circle.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
