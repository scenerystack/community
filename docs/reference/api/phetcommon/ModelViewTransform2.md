# ModelViewTransform2

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phetcommon/blob/main/js/view/ModelViewTransform2.ts](https://github.com/phetsims/phetcommon/blob/main/js/view/ModelViewTransform2.ts) for the most up-to-date information.

## Overview

Transform between model and view coordinate frames, and provides convenience methods beyond phet.dot.Transform3

Requires that the transform is "aligned", i.e., it can be built only from component-wise translation and scaling.
Equivalently, the output x coordinate should not depend on the input y, and the output y shouldn't depend on the
input x.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)

## Class ModelViewTransform2 {: #ModelViewTransform2 }


```js
import { ModelViewTransform2 } from 'scenerystack/phetcommon';
```
### Instance Methods

#### modelToViewPosition( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelToViewPosition data-toc-label='modelToViewPosition' }

-------------------------------------------------------------------------------------------------------------
 convenience model =&gt; view
-------------------------------------------------------------------------------------------------------------

#### modelToViewXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelToViewXY data-toc-label='modelToViewXY' }

#### modelToViewX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToViewX data-toc-label='modelToViewX' }

#### modelToViewY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToViewY data-toc-label='modelToViewY' }

#### modelToViewDelta( vector : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelToViewDelta data-toc-label='modelToViewDelta' }

#### modelToViewNormal( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelToViewNormal data-toc-label='modelToViewNormal' }

#### modelToViewDeltaX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToViewDeltaX data-toc-label='modelToViewDeltaX' }

#### modelToViewDeltaY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #modelToViewDeltaY data-toc-label='modelToViewDeltaY' }

#### modelToViewBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #modelToViewBounds data-toc-label='modelToViewBounds' }

#### modelToViewShape( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #modelToViewShape data-toc-label='modelToViewShape' }

#### modelToViewRay( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> {: #modelToViewRay data-toc-label='modelToViewRay' }

#### viewToModelPosition( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #viewToModelPosition data-toc-label='viewToModelPosition' }

-------------------------------------------------------------------------------------------------------------
 convenience view =&gt; model
-------------------------------------------------------------------------------------------------------------

#### viewToModelXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #viewToModelXY data-toc-label='viewToModelXY' }

#### viewToModelX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewToModelX data-toc-label='viewToModelX' }

#### viewToModelY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewToModelY data-toc-label='viewToModelY' }

#### viewToModelDelta( vector : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #viewToModelDelta data-toc-label='viewToModelDelta' }

#### viewToModelDeltaXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #viewToModelDeltaXY data-toc-label='viewToModelDeltaXY' }

#### viewToModelNormal( normal : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #viewToModelNormal data-toc-label='viewToModelNormal' }

#### viewToModelDeltaX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewToModelDeltaX data-toc-label='viewToModelDeltaX' }

#### viewToModelDeltaY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #viewToModelDeltaY data-toc-label='viewToModelDeltaY' }

#### viewToModelBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #viewToModelBounds data-toc-label='viewToModelBounds' }

#### viewToModelShape( shape : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> ) : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #viewToModelShape data-toc-label='viewToModelShape' }

#### viewToModelRay( ray : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> ) : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> {: #viewToModelRay data-toc-label='viewToModelRay' }

#### validateMatrix( matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #validateMatrix data-toc-label='validateMatrix' }

(protected)

#### setToRectangleMapping( modelBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, viewBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setToRectangleMapping data-toc-label='setToRectangleMapping' }

See ModelViewTransform2.createRectangleMapping

#### setToRectangleInvertedYMapping( modelBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, viewBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setToRectangleInvertedYMapping data-toc-label='setToRectangleInvertedYMapping' }

See ModelViewTransform2.createRectangleInvertedYMapping

### Static Methods

#### createIdentity() : <span style="font-weight: 400;">[ModelViewTransform2](../phetcommon/ModelViewTransform2.md)</span> {: #createIdentity data-toc-label='createIdentity' }

Creates a ModelViewTransform2 that uses the identity transform (i.e. model coordinates are the same as view coordinates)

#### createOffsetScaleMapping( offset : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, scale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[ModelViewTransform2](../phetcommon/ModelViewTransform2.md)</span> {: #createOffsetScaleMapping data-toc-label='createOffsetScaleMapping' }

Creates a ModelViewTransform2 that has the specified scale and offset such that
view = model * scale + offset

@param offset - the offset in view coordinates
@param scale - the scale to map model to view

#### createOffsetXYScaleMapping( offset : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, xScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, yScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[ModelViewTransform2](../phetcommon/ModelViewTransform2.md)</span> {: #createOffsetXYScaleMapping data-toc-label='createOffsetXYScaleMapping' }

Creates a shearless ModelViewTransform2 that has the specified scale and offset such that
view.x = model.x * xScale + offset.x
view.y = model.y * yScale + offset.y

@param offset - the offset in view coordinates
@param xScale - the scale to map model to view in the x-dimension
@param yScale - the scale to map model to view in the y-dimension

#### createSinglePointXYScaleMapping( modelPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, viewPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, xScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, yScale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[ModelViewTransform2](../phetcommon/ModelViewTransform2.md)</span> {: #createSinglePointXYScaleMapping data-toc-label='createSinglePointXYScaleMapping' }

Creates a shearless ModelViewTransform2 that maps the specified model point to the specified view point,
with the given x and y scales.

@param modelPoint - the reference point in the model which maps to the specified view point
@param viewPoint - the reference point in the view
@param xScale - the amount to scale in the x direction
@param yScale - the amount to scale in the y direction

#### createSinglePointScaleMapping( modelPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, viewPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, scale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[ModelViewTransform2](../phetcommon/ModelViewTransform2.md)</span> {: #createSinglePointScaleMapping data-toc-label='createSinglePointScaleMapping' }

Creates a shearless ModelViewTransform2 that maps the specified model point to the specified view point,
with the given scale factor for both x and y dimensions.

@param modelPoint - the reference point in the model which maps to the specified view point
@param viewPoint - the reference point in the view
@param scale - the amount to scale in the x and y directions

#### createSinglePointScaleInvertedYMapping( modelPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, viewPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, scale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[ModelViewTransform2](../phetcommon/ModelViewTransform2.md)</span> {: #createSinglePointScaleInvertedYMapping data-toc-label='createSinglePointScaleInvertedYMapping' }

Creates a shearless ModelViewTransform2 that maps the specified model point to the specified view point,
with the given scale factor for both x and y dimensions, but inverting the y axis so that +y in the model
corresponds to -y in the view. Inverting the y axis is commonly necessary since +y is usually up in textbooks
and -y is down in pixel coordinates.

@param modelPoint - the reference point in the model which maps to the specified view point
@param viewPoint - the reference point in the view
@param scale - the amount to scale in the x and y directions

#### createRectangleMapping( modelBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, viewBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[ModelViewTransform2](../phetcommon/ModelViewTransform2.md)</span> {: #createRectangleMapping data-toc-label='createRectangleMapping' }

Creates a shearless ModelViewTransform2 that maps the specified rectangle in the model to the specified rectangle
in the view, so that any point x% of the way across and y% down in the model rectangle will be mapped to the
corresponding point x% across and y% down in the view rectangle. Linear extrapolation is performed outside of
the rectangle bounds.

@param modelBounds - the reference rectangle in the model, must have area &gt; 0
@param viewBounds - the reference rectangle in the view, must have area &gt; 0

#### createRectangleInvertedYMapping( modelBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, viewBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[ModelViewTransform2](../phetcommon/ModelViewTransform2.md)</span> {: #createRectangleInvertedYMapping data-toc-label='createRectangleInvertedYMapping' }

Creates a shearless ModelViewTransform2 that maps the specified rectangle in the model to the specified rectangle
in the view, so that any point x% of the way across and y% down in the model rectangle will be mapped to the
corresponding point x% across and (100-y)% down in the view rectangle. Linear extrapolation is performed outside
of the rectangle bounds. Inverting the y axis is commonly necessary since +y is usually up in textbooks and -y
is down in pixel coordinates.

@param modelBounds - the reference rectangle in the model, must have area &gt; 0
@param viewBounds - the reference rectangle in the view, must have area &gt; 0



## Source Code

See the source for [ModelViewTransform2.ts](https://github.com/phetsims/phetcommon/blob/main/js/view/ModelViewTransform2.ts) in the [phetcommon](https://github.com/phetsims/phetcommon) repository.
