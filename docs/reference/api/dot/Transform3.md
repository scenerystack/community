# Transform3

## Overview

Forward and inverse transforms with 3x3 matrices. Methods starting with 'transform' will apply the transform from our
primary matrix, while methods starting with 'inverse' will apply the transform from the inverse of our matrix.

Generally, this means transform.inverseThing( transform.transformThing( thing ) ).equals( thing ).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Transform3 {: #Transform3 }


```js
import { Transform3 } from 'scenerystack/dot';
```
### Constructor

#### new Transform3( matrix ) {: #Transform3-constructor data-toc-label='new Transform3' }

### Instance Methods

#### setMatrix( matrix ) {: #setMatrix data-toc-label='setMatrix' }

Sets the value of the primary matrix directly from a Matrix3. Does not change the Matrix3 instance.
@public

@param {Matrix3} matrix

#### validateMatrix( matrix ) {: #validateMatrix data-toc-label='validateMatrix' }

Validates the matrix or matrix arguments, overrideable by subclasses to refine the validation.
@param {Matrix} matrix
@protected

#### invalidate() {: #invalidate data-toc-label='invalidate' }

This should be called after our internal matrix is changed. It marks the other dependent matrices as invalid,
and sends out notifications of the change.
@private

#### prepend( matrix ) {: #prepend data-toc-label='prepend' }

Modifies the primary matrix such that: this.matrix = matrix * this.matrix.
@public

@param {Matrix3} matrix

#### prependTranslation( x, y ) {: #prependTranslation data-toc-label='prependTranslation' }

Optimized prepended translation such that: this.matrix = translation( x, y ) * this.matrix.
@public

@param {number} x -  x-coordinate
@param {number} y -  y-coordinate

#### append( matrix ) {: #append data-toc-label='append' }

Modifies the primary matrix such that: this.matrix = this.matrix * matrix
@public

@param {Matrix3} matrix

#### prependTransform( transform ) {: #prependTransform data-toc-label='prependTransform' }

Like prepend(), but prepends the other transform's matrix.
@public

@param {Transform3} transform

#### appendTransform( transform ) {: #appendTransform data-toc-label='appendTransform' }

Like append(), but appends the other transform's matrix.
@public

@param {Transform3} transform

#### applyToCanvasContext( context ) {: #applyToCanvasContext data-toc-label='applyToCanvasContext' }

Sets the transform of a Canvas context to be equivalent to this transform.
@public

@param {CanvasRenderingContext2D} context

#### copy() {: #copy data-toc-label='copy' }

Creates a copy of this transform.
@public

@returns {Transform3}

#### getMatrix() {: #getMatrix data-toc-label='getMatrix' }

Returns the primary matrix of this transform.
@public

@returns {Matrix3}

#### getInverse() {: #getInverse data-toc-label='getInverse' }

Returns the inverse of the primary matrix of this transform.
@public

@returns {Matrix3}

#### getMatrixTransposed() {: #getMatrixTransposed data-toc-label='getMatrixTransposed' }

Returns the transpose of the primary matrix of this transform.
@public

@returns {Matrix3}

#### getInverseTransposed() {: #getInverseTransposed data-toc-label='getInverseTransposed' }

Returns the inverse of the transpose of matrix of this transform.
@public

@returns {Matrix3}

#### isIdentity() {: #isIdentity data-toc-label='isIdentity' }

Returns whether our primary matrix is known to be an identity matrix. If false is returned, it doesn't necessarily
mean our matrix isn't an identity matrix, just that it is unlikely in normal usage.
@public

@returns {boolean}

#### isFinite() {: #isFinite data-toc-label='isFinite' }

Returns whether any components of our primary matrix are either infinite or NaN.
@public

@returns {boolean}

#### transformPosition2( v ) {: #transformPosition2 data-toc-label='transformPosition2' }

Transforms a 2-dimensional vector like it is a point with a position (translation is applied).
@public

For an affine matrix $M$, the result is the homogeneous multiplication $M\begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$.

@param {Vector2} v
@returns {Vector2}

#### transformDelta2( v ) {: #transformDelta2 data-toc-label='transformDelta2' }

Transforms a 2-dimensional vector like position is irrelevant (translation is not applied).
@public

For an affine matrix $\begin{bmatrix} a &amp; b &amp; c \\ d &amp; e &amp; f \\ 0 &amp; 0 &amp; 1 \end{bmatrix}$,
the result is $\begin{bmatrix} a &amp; b &amp; 0 \\ d &amp; e &amp; 0 \\ 0 &amp; 0 &amp; 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$.

@param {Vector2} v
@returns {Vector2}

#### transformNormal2( v ) {: #transformNormal2 data-toc-label='transformNormal2' }

Transforms a 2-dimensional vector like it is a normal to a curve (so that the curve is transformed, and the new
normal to the curve at the transformed point is returned).
@public

For an affine matrix $\begin{bmatrix} a &amp; b &amp; c \\ d &amp; e &amp; f \\ 0 &amp; 0 &amp; 1 \end{bmatrix}$,
the result is $\begin{bmatrix} a &amp; e &amp; 0 \\ d &amp; b &amp; 0 \\ 0 &amp; 0 &amp; 1 \end{bmatrix}^{-1} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$.
This is essentially the transposed inverse with translation removed.

@param {Vector2} v
@returns {Vector2}

#### transformX( x ) {: #transformX data-toc-label='transformX' }

Returns the resulting x-coordinate of the transformation of all vectors with the initial input x-coordinate. If
this is not well-defined (the x value depends on y), an assertion is thrown (and y is assumed to be 0).
@public

@param {number} x
@returns {number}

#### transformY( y ) {: #transformY data-toc-label='transformY' }

Returns the resulting y-coordinate of the transformation of all vectors with the initial input y-coordinate. If
this is not well-defined (the y value depends on x), an assertion is thrown (and x is assumed to be 0).
@public

@param {number} y
@returns {number}

#### transformDeltaX( x ) {: #transformDeltaX data-toc-label='transformDeltaX' }

Returns the x-coordinate difference for two transformed vectors, which add the x-coordinate difference of the input
x (and same y values) beforehand.
@public

@param {number} x
@returns {number}

#### transformDeltaY( y ) {: #transformDeltaY data-toc-label='transformDeltaY' }

Returns the y-coordinate difference for two transformed vectors, which add the y-coordinate difference of the input
y (and same x values) beforehand.
@public

@param {number} y
@returns {number}

#### transformBounds2( bounds ) {: #transformBounds2 data-toc-label='transformBounds2' }

Returns bounds (axis-aligned) that contains the transformed bounds rectangle.
@public

NOTE: transform.inverseBounds2( transform.transformBounds2( bounds ) ) may be larger than the original box,
if it includes a rotation that isn't a multiple of $\pi/2$. This is because the returned bounds may expand in
area to cover ALL of the corners of the transformed bounding box.

@param {Bounds2} bounds
@returns {Bounds2}

#### transformShape( shape ) {: #transformShape data-toc-label='transformShape' }

Returns a transformed phet.kite.Shape.
@public

@param {Shape} shape
@returns {Shape}

#### transformRay2( ray ) {: #transformRay2 data-toc-label='transformRay2' }

Returns a transformed ray.
@public

@param {Ray2} ray
@returns {Ray2}

#### inversePosition2( v ) {: #inversePosition2 data-toc-label='inversePosition2' }

Transforms a 2-dimensional vector by the inverse of our transform like it is a point with a position (translation is applied).
@public

For an affine matrix $M$, the result is the homogeneous multiplication $M^{-1}\begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$.

This is the inverse of transformPosition2().

@param {Vector2} v
@returns {Vector2}

#### inverseDelta2( v ) {: #inverseDelta2 data-toc-label='inverseDelta2' }

Transforms a 2-dimensional vector by the inverse of our transform like position is irrelevant (translation is not applied).
@public

For an affine matrix $\begin{bmatrix} a &amp; b &amp; c \\ d &amp; e &amp; f \\ 0 &amp; 0 &amp; 1 \end{bmatrix}$,
the result is $\begin{bmatrix} a &amp; b &amp; 0 \\ d &amp; e &amp; 0 \\ 0 &amp; 0 &amp; 1 \end{bmatrix}^{-1} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$.

This is the inverse of transformDelta2().

@param {Vector2} v
@returns {Vector2}

#### inverseNormal2( v ) {: #inverseNormal2 data-toc-label='inverseNormal2' }

Transforms a 2-dimensional vector by the inverse of our transform like it is a normal to a curve (so that the
curve is transformed, and the new normal to the curve at the transformed point is returned).
@public

For an affine matrix $\begin{bmatrix} a &amp; b &amp; c \\ d &amp; e &amp; f \\ 0 &amp; 0 &amp; 1 \end{bmatrix}$,
the result is $\begin{bmatrix} a &amp; e &amp; 0 \\ d &amp; b &amp; 0 \\ 0 &amp; 0 &amp; 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}$.
This is essentially the transposed transform with translation removed.

This is the inverse of transformNormal2().

@param {Vector2} v
@returns {Vector2}

#### inverseX( x ) {: #inverseX data-toc-label='inverseX' }

Returns the resulting x-coordinate of the inverse transformation of all vectors with the initial input x-coordinate. If
this is not well-defined (the x value depends on y), an assertion is thrown (and y is assumed to be 0).
@public

This is the inverse of transformX().

@param {number} x
@returns {number}

#### inverseY( y ) {: #inverseY data-toc-label='inverseY' }

Returns the resulting y-coordinate of the inverse transformation of all vectors with the initial input y-coordinate. If
this is not well-defined (the y value depends on x), an assertion is thrown (and x is assumed to be 0).
@public

This is the inverse of transformY().

@param {number} y
@returns {number}

#### inverseDeltaX( x ) {: #inverseDeltaX data-toc-label='inverseDeltaX' }

Returns the x-coordinate difference for two inverse-transformed vectors, which add the x-coordinate difference of the input
x (and same y values) beforehand.
@public

This is the inverse of transformDeltaX().

@param {number} x
@returns {number}

#### inverseDeltaY( y ) {: #inverseDeltaY data-toc-label='inverseDeltaY' }

Returns the y-coordinate difference for two inverse-transformed vectors, which add the y-coordinate difference of the input
y (and same x values) beforehand.
@public

This is the inverse of transformDeltaY().

@param {number} y
@returns {number}

#### inverseBounds2( bounds ) {: #inverseBounds2 data-toc-label='inverseBounds2' }

Returns bounds (axis-aligned) that contains the inverse-transformed bounds rectangle.
@public

NOTE: transform.inverseBounds2( transform.transformBounds2( bounds ) ) may be larger than the original box,
if it includes a rotation that isn't a multiple of $\pi/2$. This is because the returned bounds may expand in
area to cover ALL of the corners of the transformed bounding box.

@param {Bounds2} bounds
@returns {Bounds2}

#### inverseShape( shape ) {: #inverseShape data-toc-label='inverseShape' }

Returns an inverse-transformed phet.kite.Shape.
@public

This is the inverse of transformShape()

@param {Shape} shape
@returns {Shape}

#### inverseRay2( ray ) {: #inverseRay2 data-toc-label='inverseRay2' }

Returns an inverse-transformed ray.
@public

This is the inverse of transformRay2()

@param {Ray2} ray
@returns {Ray2}



## Source Code

See the source for [Transform3.js](https://github.com/phetsims/dot/blob/main/js/Transform3.js) in the [dot](https://github.com/phetsims/dot) repository.
