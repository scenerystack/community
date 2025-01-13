# Matrix4

## Overview

4-dimensional Matrix

TODO: consider adding affine flag if it will help performance (a la Matrix3) https://github.com/phetsims/dot/issues/96
TODO: get rotation angles

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
/* eslint-disable phet/bad-sim-text */

## Class Matrix4 {: #Matrix4 }


```js
import { Matrix4 } from 'scenerystack/dot';
```
### Constructor

#### new Matrix4( v00, v01, v02, v03, v10, v11, v12, v13, v20, v21, v22, v23, v30, v31, v32, v33, type ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### rowMajor( v00, v01, v02, v03, v10, v11, v12, v13, v20, v21, v22, v23, v30, v31, v32, v33, type ) {: #rowMajor data-toc-label='rowMajor' }

Sets all entries of the matrix in row-major order.
@public

@param {number} v00
@param {number} v01
@param {number} v02
@param {number} v03
@param {number} v10
@param {number} v11
@param {number} v12
@param {number} v13
@param {number} v20
@param {number} v21
@param {number} v22
@param {number} v23
@param {number} v30
@param {number} v31
@param {number} v32
@param {number} v33
@param {Matrix4.Types|undefined} [type]
@returns {Matrix4} - Self reference

#### columnMajor( v00, v10, v20, v30, v01, v11, v21, v31, v02, v12, v22, v32, v03, v13, v23, v33, type ) {: #columnMajor data-toc-label='columnMajor' }

Sets all entries of the matrix in column-major order.
@public

@param {*} v00
@param {*} v10
@param {*} v20
@param {*} v30
@param {*} v01
@param {*} v11
@param {*} v21
@param {*} v31
@param {*} v02
@param {*} v12
@param {*} v22
@param {*} v32
@param {*} v03
@param {*} v13
@param {*} v23
@param {*} v33
@param {Matrix4.Types|undefined} [type]
@returns {Matrix4} - Self reference

#### set( matrix ) {: #set data-toc-label='set' }

Sets this matrix to the value of the passed-in matrix.
@public

@param {Matrix4} matrix
@returns {Matrix4} - Self reference

#### m00() {: #m00 data-toc-label='m00' }

Returns the 0,0 entry of this matrix.
@public

@returns {number}

#### m01() {: #m01 data-toc-label='m01' }

Returns the 0,1 entry of this matrix.
@public

@returns {number}

#### m02() {: #m02 data-toc-label='m02' }

Returns the 0,2 entry of this matrix.
@public

@returns {number}

#### m03() {: #m03 data-toc-label='m03' }

Returns the 0,3 entry of this matrix.
@public

@returns {number}

#### m10() {: #m10 data-toc-label='m10' }

Returns the 1,0 entry of this matrix.
@public

@returns {number}

#### m11() {: #m11 data-toc-label='m11' }

Returns the 1,1 entry of this matrix.
@public

@returns {number}

#### m12() {: #m12 data-toc-label='m12' }

Returns the 1,2 entry of this matrix.
@public

@returns {number}

#### m13() {: #m13 data-toc-label='m13' }

Returns the 1,3 entry of this matrix.
@public

@returns {number}

#### m20() {: #m20 data-toc-label='m20' }

Returns the 2,0 entry of this matrix.
@public

@returns {number}

#### m21() {: #m21 data-toc-label='m21' }

Returns the 2,1 entry of this matrix.
@public

@returns {number}

#### m22() {: #m22 data-toc-label='m22' }

Returns the 2,2 entry of this matrix.
@public

@returns {number}

#### m23() {: #m23 data-toc-label='m23' }

Returns the 2,3 entry of this matrix.
@public

@returns {number}

#### m30() {: #m30 data-toc-label='m30' }

Returns the 3,0 entry of this matrix.
@public

@returns {number}

#### m31() {: #m31 data-toc-label='m31' }

Returns the 3,1 entry of this matrix.
@public

@returns {number}

#### m32() {: #m32 data-toc-label='m32' }

Returns the 3,2 entry of this matrix.
@public

@returns {number}

#### m33() {: #m33 data-toc-label='m33' }

Returns the 3,3 entry of this matrix.
@public

@returns {number}

#### isIdentity() {: #isIdentity data-toc-label='isIdentity' }

Returns whether this matrix is an identity matrix.
@public

@returns {boolean}

#### isFinite() {: #isFinite data-toc-label='isFinite' }

Returns whether all of this matrix's entries are finite (non-infinite and non-NaN).
@public

@returns {boolean}

#### getTranslation() {: #getTranslation data-toc-label='getTranslation' }

Returns the 3D translation, assuming multiplication with a homogeneous vector.
@public

@returns {Vector3}

#### getScaleVector() {: #getScaleVector data-toc-label='getScaleVector' }

Returns a vector that is equivalent to ( T(1,0,0).magnitude, T(0,1,0).magnitude, T(0,0,1).magnitude )
where T is a relative transform.
@public

@returns {Vector3}

#### getCSSTransform() {: #getCSSTransform data-toc-label='getCSSTransform' }

Returns the CSS transform string for the associated homogeneous 3d transformation.
@public

@returns {string}

#### equals( matrix ) {: #equals data-toc-label='equals' }

Returns exact equality with another matrix
@public

@param {Matrix4} matrix
@returns {boolean}

#### equalsEpsilon( matrix, epsilon ) {: #equalsEpsilon data-toc-label='equalsEpsilon' }

Returns equality within a margin of error with another matrix
@public

@param {Matrix4} matrix
@param {number} epsilon
@returns {boolean}

#### copy() {: #copy data-toc-label='copy' }

Returns a copy of this matrix
@public

@returns {Matrix4}

#### plus( matrix ) {: #plus data-toc-label='plus' }

Returns a new matrix, defined by this matrix plus the provided matrix
@public

@param {Matrix4} matrix
@returns {Matrix4}

#### minus( matrix ) {: #minus data-toc-label='minus' }

Returns a new matrix, defined by this matrix plus the provided matrix
@public

@param {Matrix4} matrix
@returns {Matrix4}

#### transposed() {: #transposed data-toc-label='transposed' }

Returns a transposed copy of this matrix
@public

@returns {Matrix4}

#### negated() {: #negated data-toc-label='negated' }

Returns a negated copy of this matrix
@public

@returns {Matrix3}

#### inverted() {: #inverted data-toc-label='inverted' }

Returns an inverted copy of this matrix
@public

@returns {Matrix3}

#### timesMatrix( matrix ) {: #timesMatrix data-toc-label='timesMatrix' }

Returns a matrix, defined by the multiplication of this * matrix.
@public

@param {Matrix4} matrix
@returns {Matrix4} - NOTE: this may be the same matrix!

#### timesVector4( vector4 ) {: #timesVector4 data-toc-label='timesVector4' }

Returns the multiplication of this matrix times the provided vector
@public

@param {Vector4} vector4
@returns {Vector4}

#### timesVector3( vector3 ) {: #timesVector3 data-toc-label='timesVector3' }

Returns the multiplication of this matrix times the provided vector (treating this matrix as homogeneous, so that
it is the technical multiplication of (x,y,z,1)).
@public

@param {Vector3} vector3
@returns {Vector3}

#### timesTransposeVector4( vector4 ) {: #timesTransposeVector4 data-toc-label='timesTransposeVector4' }

Returns the multiplication of this matrix's transpose times the provided vector
@public

@param {Vector4} vector4
@returns {Vector4}

#### timesTransposeVector3( vector3 ) {: #timesTransposeVector3 data-toc-label='timesTransposeVector3' }

Returns the multiplication of this matrix's transpose times the provided vector (homogeneous).
@public

@param {Vector3} vector3
@returns {Vector3}

#### timesRelativeVector3( vector3 ) {: #timesRelativeVector3 data-toc-label='timesRelativeVector3' }

Equivalent to the multiplication of (x,y,z,0), ignoring the homogeneous part.
@public

@param {Vector3} vector3
@returns {Vector3}

#### getDeterminant() {: #getDeterminant data-toc-label='getDeterminant' }

Returns the determinant of this matrix.
@public

@returns {number}

#### toString() {: #toString data-toc-label='toString' }

Returns a string form of this object
@public

@returns {string}

#### makeImmutable() {: #makeImmutable data-toc-label='makeImmutable' }

Makes this matrix effectively immutable to the normal methods (except direct setters?)
@public

@returns {Matrix3} - Self reference

#### copyToArray( array ) {: #copyToArray data-toc-label='copyToArray' }

Copies the entries of this matrix over to an arbitrary array (typed or normal).
@public

@param {Array|Float32Array|Float64Array} array
@returns {Array|Float32Array|Float64Array} - Returned for chaining

### Static Methods

#### identity() {: #identity data-toc-label='identity' }

Returns an identity matrix.
@public

@returns {Matrix4}

#### translation( x, y, z ) {: #translation data-toc-label='translation' }

Returns a translation matrix.
@public

@param {number} x
@param {number} y
@param {number} z
@returns {Matrix4}

#### translationFromVector( vector ) {: #translationFromVector data-toc-label='translationFromVector' }

Returns a translation matrix computed from a vector.
@public

@param {Vector3|Vector4} vector
@returns {Matrix4}

#### scaling( x, y, z ) {: #scaling data-toc-label='scaling' }

Returns a matrix that scales things in each dimension.
@public

@param {number} x
@param {number} y
@param {number} z
@returns {Matrix4}

#### rotationAxisAngle( axis, angle ) {: #rotationAxisAngle data-toc-label='rotationAxisAngle' }

Returns a homogeneous matrix rotation defined by a rotation of the specified angle around the given unit axis.
@public

@param {Vector3} axis - normalized
@param {number} angle - in radians
@returns {Matrix4}

#### rotationX( angle ) {: #rotationX data-toc-label='rotationX' }

Returns a rotation matrix in the yz plane.
@public

@param {number} angle - in radians
@returns {Matrix4}

#### rotationY( angle ) {: #rotationY data-toc-label='rotationY' }

Returns a rotation matrix in the xz plane.
@public

@param {number} angle - in radians
@returns {Matrix4}

#### rotationZ( angle ) {: #rotationZ data-toc-label='rotationZ' }

Returns a rotation matrix in the xy plane.
@public

@param {number} angle - in radians
@returns {Matrix4}

#### gluPerspective( fovYRadians, aspect, zNear, zFar ) {: #gluPerspective data-toc-label='gluPerspective' }

Returns the specific perspective matrix needed for certain WebGL contexts.
@public

@param {number} fovYRadians
@param {number} aspect - aspect === width / height
@param {number} zNear
@param {number} zFar
@returns {Matrix4}



## Source Code

See the source for [Matrix4.js](https://github.com/phetsims/dot/blob/main/js/Matrix4.js) in the [dot](https://github.com/phetsims/dot) repository.
