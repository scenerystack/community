# Transform4

## Overview

Forward and inverse transforms with 4x4 matrices, allowing flexibility including affine and perspective transformations.

Methods starting with 'transform' will apply the transform from our
primary matrix, while methods starting with 'inverse' will apply the transform from the inverse of our matrix.

Generally, this means transform.inverseThing( transform.transformThing( thing ) ).equals( thing ).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Transform4 {: #Transform4 }


```js
import { Transform4 } from 'scenerystack/dot';
```
### Constructor

#### new Transform4( matrix ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setMatrix( matrix ) {: #setMatrix data-toc-label='setMatrix' }

Sets the value of the primary matrix directly from a Matrix4. Does not change the Matrix4 instance of this
Transform4.
@public

@param {Matrix4} matrix

#### invalidate() {: #invalidate data-toc-label='invalidate' }

This should be called after our internal matrix is changed. It marks the other dependent matrices as invalid,
and sends out notifications of the change.
@private

#### prepend( matrix ) {: #prepend data-toc-label='prepend' }

Modifies the primary matrix such that: this.matrix = matrix * this.matrix.
@public

@param {Matrix4} matrix

#### append( matrix ) {: #append data-toc-label='append' }

Modifies the primary matrix such that: this.matrix = this.matrix * matrix
@public

@param {Matrix4} matrix

#### prependTransform( transform ) {: #prependTransform data-toc-label='prependTransform' }

Like prepend(), but prepends the other transform's matrix.
@public

@param {Transform4} transform

#### appendTransform( transform ) {: #appendTransform data-toc-label='appendTransform' }

Like append(), but appends the other transform's matrix.
@public

@param {Transform4} transform

#### applyToCanvasContext( context ) {: #applyToCanvasContext data-toc-label='applyToCanvasContext' }

Sets the transform of a Canvas context to be equivalent to the 2D affine part of this transform.
@public

@param {CanvasRenderingContext2D} context

#### copy() {: #copy data-toc-label='copy' }

Creates a copy of this transform.
@public

@returns {Transform4}

#### getMatrix() {: #getMatrix data-toc-label='getMatrix' }

Returns the primary matrix of this transform.
@public

@returns {Matrix4}

#### getInverse() {: #getInverse data-toc-label='getInverse' }

Returns the inverse of the primary matrix of this transform.
@public

@returns {Matrix4}

#### getMatrixTransposed() {: #getMatrixTransposed data-toc-label='getMatrixTransposed' }

Returns the transpose of the primary matrix of this transform.
@public

@returns {Matrix4}

#### getInverseTransposed() {: #getInverseTransposed data-toc-label='getInverseTransposed' }

Returns the inverse of the transpose of matrix of this transform.
@public

@returns {Matrix4}

#### isIdentity() {: #isIdentity data-toc-label='isIdentity' }

Returns whether our primary matrix is known to be an identity matrix. If false is returned, it doesn't necessarily
mean our matrix isn't an identity matrix, just that it is unlikely in normal usage.
@public

@returns {boolean}

#### isFinite() {: #isFinite data-toc-label='isFinite' }

Returns whether any components of our primary matrix are either infinite or NaN.
@public

@returns {boolean}

#### transformPosition3( v ) {: #transformPosition3 data-toc-label='transformPosition3' }

Transforms a 3-dimensional vector like it is a point with a position (translation is applied).
@public

For an affine matrix $M$, the result is the homogeneous multiplication $M\begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix}$.

@param {Vector3} v
@returns {Vector3}

#### transformDelta3( v ) {: #transformDelta3 data-toc-label='transformDelta3' }

Transforms a 3-dimensional vector like position is irrelevant (translation is not applied).
@public

@param {Vector3} v
@returns {Vector3}

#### transformNormal3( v ) {: #transformNormal3 data-toc-label='transformNormal3' }

Transforms a 3-dimensional vector like it is a normal to a surface (so that the surface is transformed, and the new
normal to the surface at the transformed point is returned).
@public

@param {Vector3} v
@returns {Vector3}

#### transformDeltaX( x ) {: #transformDeltaX data-toc-label='transformDeltaX' }

Returns the x-coordinate difference for two transformed vectors, which add the x-coordinate difference of the input
x (and same y,z values) beforehand.
@public

@param {number} x
@returns {number}

#### transformDeltaY( y ) {: #transformDeltaY data-toc-label='transformDeltaY' }

Returns the y-coordinate difference for two transformed vectors, which add the y-coordinate difference of the input
y (and same x,z values) beforehand.
@public

@param {number} y
@returns {number}

#### transformDeltaZ( z ) {: #transformDeltaZ data-toc-label='transformDeltaZ' }

Returns the z-coordinate difference for two transformed vectors, which add the z-coordinate difference of the input
z (and same x,y values) beforehand.
@public

@param {number} z
@returns {number}

#### transformRay( ray ) {: #transformRay data-toc-label='transformRay' }

Returns a transformed ray.
@public

@param {Ray3} ray
@returns {Ray3}

#### inversePosition3( v ) {: #inversePosition3 data-toc-label='inversePosition3' }

Transforms a 3-dimensional vector by the inverse of our transform like it is a point with a position (translation is applied).
@public

For an affine matrix $M$, the result is the homogeneous multiplication $M^{-1}\begin{bmatrix} x \\ y \\ z \\ 1 \end{bmatrix}$.

This is the inverse of transformPosition3().

@param {Vector3} v
@returns {Vector3}

#### inverseDelta3( v ) {: #inverseDelta3 data-toc-label='inverseDelta3' }

Transforms a 3-dimensional vector by the inverse of our transform like position is irrelevant (translation is not applied).
@public

This is the inverse of transformDelta3().

@param {Vector3} v
@returns {Vector3}

#### inverseNormal3( v ) {: #inverseNormal3 data-toc-label='inverseNormal3' }

Transforms a 3-dimensional vector by the inverse of our transform like it is a normal to a curve (so that the
curve is transformed, and the new normal to the curve at the transformed point is returned).
@public

This is the inverse of transformNormal3().

@param {Vector3} v
@returns {Vector3}

#### inverseDeltaX( x ) {: #inverseDeltaX data-toc-label='inverseDeltaX' }

Returns the x-coordinate difference for two inverse-transformed vectors, which add the x-coordinate difference of the input
x (and same y,z values) beforehand.
@public

This is the inverse of transformDeltaX().

@param {number} x
@returns {number}

#### inverseDeltaY( y ) {: #inverseDeltaY data-toc-label='inverseDeltaY' }

Returns the y-coordinate difference for two inverse-transformed vectors, which add the y-coordinate difference of the input
y (and same x,z values) beforehand.
@public

This is the inverse of transformDeltaY().

@param {number} y
@returns {number}

#### inverseDeltaZ( z ) {: #inverseDeltaZ data-toc-label='inverseDeltaZ' }

Returns the z-coordinate difference for two inverse-transformed vectors, which add the z-coordinate difference of the input
z (and same x,y values) beforehand.
@public

This is the inverse of transformDeltaZ().

@param {number} z
@returns {number}

#### inverseRay( ray ) {: #inverseRay data-toc-label='inverseRay' }

Returns an inverse-transformed ray.
@public

This is the inverse of transformRay()

@param {Ray3} ray
@returns {Ray3}



## Source Code

See the source for [Transform4.js](https://github.com/phetsims/dot/blob/main/js/Transform4.js) in the [dot](https://github.com/phetsims/dot) repository.
