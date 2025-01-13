# Matrix3

## Overview

3-dimensional Matrix

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Matrix3 {: #Matrix3 }


```js
import { Matrix3 } from 'scenerystack/dot';
```
### Constructor

#### new Matrix3() {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #initialize data-toc-label='initialize' }

#### m00() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #m00 data-toc-label='m00' }

Convenience getter for the individual 0,0 entry of the matrix.

#### m01() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #m01 data-toc-label='m01' }

Convenience getter for the individual 0,1 entry of the matrix.

#### m02() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #m02 data-toc-label='m02' }

Convenience getter for the individual 0,2 entry of the matrix.

#### m10() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #m10 data-toc-label='m10' }

Convenience getter for the individual 1,0 entry of the matrix.

#### m11() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #m11 data-toc-label='m11' }

Convenience getter for the individual 1,1 entry of the matrix.

#### m12() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #m12 data-toc-label='m12' }

Convenience getter for the individual 1,2 entry of the matrix.

#### m20() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #m20 data-toc-label='m20' }

Convenience getter for the individual 2,0 entry of the matrix.

#### m21() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #m21 data-toc-label='m21' }

Convenience getter for the individual 2,1 entry of the matrix.

#### m22() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #m22 data-toc-label='m22' }

Convenience getter for the individual 2,2 entry of the matrix.

#### isIdentity() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isIdentity data-toc-label='isIdentity' }

Returns whether this matrix is an identity matrix.

#### isFastIdentity() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isFastIdentity data-toc-label='isFastIdentity' }

Returns whether this matrix is likely to be an identity matrix (returning false means "inconclusive, may be
identity or not"), but true is guaranteed to be an identity matrix.

#### isTranslation() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isTranslation data-toc-label='isTranslation' }

Returns whether this matrix is a translation matrix.
By this we mean it has no shear, rotation, or scaling
It may be a translation of zero.

#### isAffine() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isAffine data-toc-label='isAffine' }

Returns whether this matrix is an affine matrix (e.g. no shear).

#### isAligned() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isAligned data-toc-label='isAligned' }

Returns whether it's an affine matrix where the components of transforms are independent, i.e. constructed from
arbitrary component scaling and translation.

#### isAxisAligned() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isAxisAligned data-toc-label='isAxisAligned' }

Returns if it's an affine matrix where the components of transforms are independent, but may be switched (unlike isAligned)

i.e. the 2x2 rotational sub-matrix is of one of the two forms:
A 0  or  0  A
0 B      B  0
This means that moving a transformed point by (x,0) or (0,y) will result in a motion along one of the axes.

#### isFinite() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isFinite data-toc-label='isFinite' }

Returns whether every single entry in this matrix is a finite number (non-NaN, non-infinite).

#### getDeterminant() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getDeterminant data-toc-label='getDeterminant' }

Returns the determinant of this matrix.

#### getTranslation() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getTranslation data-toc-label='getTranslation' }

Returns the 2D translation, assuming multiplication with a homogeneous vector

#### getScaleVector() : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #getScaleVector data-toc-label='getScaleVector' }

Returns a vector that is equivalent to ( T(1,0).magnitude(), T(0,1).magnitude() ) where T is a relative transform

#### getSignedScale() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getSignedScale data-toc-label='getSignedScale' }

Returns the total "amount" of scaled area in this matrix (which will be negative if it flips the coordinate system).
For instance, Matrix3.scaling( 2 ) will return 4, since it scales the area by 4.

#### getRotation() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getRotation data-toc-label='getRotation' }

Returns the angle in radians for the 2d rotation from this matrix, between pi, -pi

#### toMatrix4() : <span style="font-weight: 400; opacity: 80%;">Matrix4</span> {: #toMatrix4 data-toc-label='toMatrix4' }

Returns an identity-padded copy of this matrix with an increased dimension.

#### toAffineMatrix4() : <span style="font-weight: 400; opacity: 80%;">Matrix4</span> {: #toAffineMatrix4 data-toc-label='toAffineMatrix4' }

Returns an identity-padded copy of this matrix with an increased dimension, treating this matrix's affine
components only.

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

Returns a string form of this object

#### toSVGMatrix() : <span style="font-weight: 400; opacity: 80%;">SVGMatrix</span> {: #toSVGMatrix data-toc-label='toSVGMatrix' }

Creates an SVG form of this matrix, for high-performance processing in SVG output.

#### getCSSTransform() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getCSSTransform data-toc-label='getCSSTransform' }

Returns the CSS form (simplified if possible) for this transformation matrix.

#### getSVGTransform() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getSVGTransform data-toc-label='getSVGTransform' }

Returns the CSS-like SVG matrix form for this transformation matrix.

#### getCSSTransformStyles() : <span style="font-weight: 400; opacity: 80%;">Record&lt;string, string&gt;</span> {: #getCSSTransformStyles data-toc-label='getCSSTransformStyles' }

Returns a parameter object suitable for use with jQuery's .css()

#### equals( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equals data-toc-label='equals' }

Returns exact equality with another matrix

#### equalsEpsilon( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, epsilon : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsEpsilon data-toc-label='equalsEpsilon' }

Returns equality within a margin of error with another matrix

#### copy() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #copy data-toc-label='copy' }

Returns a copy of this matrix

#### plus( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #plus data-toc-label='plus' }

Returns a new matrix, defined by this matrix plus the provided matrix

#### minus( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #minus data-toc-label='minus' }

Returns a new matrix, defined by this matrix plus the provided matrix

#### transposed() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #transposed data-toc-label='transposed' }

Returns a transposed copy of this matrix

#### negated() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #negated data-toc-label='negated' }

Returns a negated copy of this matrix

#### inverted() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #inverted data-toc-label='inverted' }

Returns an inverted copy of this matrix

#### timesMatrix( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #timesMatrix data-toc-label='timesMatrix' }

Returns a matrix, defined by the multiplication of this * matrix.

@param matrix
@returns - NOTE: this may be the same matrix!

#### timesVector2( vector2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #timesVector2 data-toc-label='timesVector2' }

Returns the multiplication of this matrix times the provided vector (treating this matrix as homogeneous, so that
it is the technical multiplication of (x,y,1)).

#### timesVector3( vector3 : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #timesVector3 data-toc-label='timesVector3' }

Returns the multiplication of this matrix times the provided vector

#### timesTransposeVector2( vector2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #timesTransposeVector2 data-toc-label='timesTransposeVector2' }

Returns the multiplication of the transpose of this matrix times the provided vector (assuming the 2x2 quadrant)

#### timesRelativeVector2( vector2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #timesRelativeVector2 data-toc-label='timesRelativeVector2' }

TODO: this operation seems to not work for transformDelta2, should be vetted https://github.com/phetsims/dot/issues/96

#### rowMajor( v00 : <span style="font-weight: 400; opacity: 80%;">number</span>, v01 : <span style="font-weight: 400; opacity: 80%;">number</span>, v02 : <span style="font-weight: 400; opacity: 80%;">number</span>, v10 : <span style="font-weight: 400; opacity: 80%;">number</span>, v11 : <span style="font-weight: 400; opacity: 80%;">number</span>, v12 : <span style="font-weight: 400; opacity: 80%;">number</span>, v20 : <span style="font-weight: 400; opacity: 80%;">number</span>, v21 : <span style="font-weight: 400; opacity: 80%;">number</span>, v22 : <span style="font-weight: 400; opacity: 80%;">number</span>, type? : <span style="font-weight: 400; opacity: 80%;">Matrix3Type</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #rowMajor data-toc-label='rowMajor' }

Sets the entire state of the matrix, in row-major order.

NOTE: Every mutable method goes through rowMajor

#### set( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set data-toc-label='set' }

Sets this matrix to be a copy of another matrix.

#### setArray( array : <span style="font-weight: 400; opacity: 80%;">number[] | Float32Array | Float64Array</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setArray data-toc-label='setArray' }

Sets this matrix to be a copy of the column-major data stored in an array (e.g. WebGL).

#### set00( value : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set00 data-toc-label='set00' }

Sets the individual 0,0 component of this matrix.

#### set01( value : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set01 data-toc-label='set01' }

Sets the individual 0,1 component of this matrix.

#### set02( value : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set02 data-toc-label='set02' }

Sets the individual 0,2 component of this matrix.

#### set10( value : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set10 data-toc-label='set10' }

Sets the individual 1,0 component of this matrix.

#### set11( value : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set11 data-toc-label='set11' }

Sets the individual 1,1 component of this matrix.

#### set12( value : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set12 data-toc-label='set12' }

Sets the individual 1,2 component of this matrix.

#### set20( value : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set20 data-toc-label='set20' }

Sets the individual 2,0 component of this matrix.

#### set21( value : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set21 data-toc-label='set21' }

Sets the individual 2,1 component of this matrix.

#### set22( value : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set22 data-toc-label='set22' }

Sets the individual 2,2 component of this matrix.

#### makeImmutable() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #makeImmutable data-toc-label='makeImmutable' }

Makes this matrix effectively immutable to the normal methods (except direct setters?)

#### columnMajor( v00 : <span style="font-weight: 400; opacity: 80%;">number</span>, v10 : <span style="font-weight: 400; opacity: 80%;">number</span>, v20 : <span style="font-weight: 400; opacity: 80%;">number</span>, v01 : <span style="font-weight: 400; opacity: 80%;">number</span>, v11 : <span style="font-weight: 400; opacity: 80%;">number</span>, v21 : <span style="font-weight: 400; opacity: 80%;">number</span>, v02 : <span style="font-weight: 400; opacity: 80%;">number</span>, v12 : <span style="font-weight: 400; opacity: 80%;">number</span>, v22 : <span style="font-weight: 400; opacity: 80%;">number</span>, type : <span style="font-weight: 400; opacity: 80%;">Matrix3Type</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #columnMajor data-toc-label='columnMajor' }

Sets the entire state of the matrix, in column-major order.

#### add( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #add data-toc-label='add' }

Sets this matrix to itself plus the given matrix.

#### subtract( m : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #subtract data-toc-label='subtract' }

Sets this matrix to itself minus the given matrix.

#### transpose() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #transpose data-toc-label='transpose' }

Sets this matrix to its own transpose.

#### negate() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #negate data-toc-label='negate' }

Sets this matrix to its own negation.

#### invert() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #invert data-toc-label='invert' }

Sets this matrix to its own inverse.

#### multiplyMatrix( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #multiplyMatrix data-toc-label='multiplyMatrix' }

Sets this matrix to the value of itself times the provided matrix

#### prependTranslation( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #prependTranslation data-toc-label='prependTranslation' }

Mutates this matrix, equivalent to (translation * this).

#### setToIdentity() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToIdentity data-toc-label='setToIdentity' }

Sets this matrix to the 3x3 identity matrix.

#### setToTranslation( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToTranslation data-toc-label='setToTranslation' }

Sets this matrix to the affine translation matrix.

#### setToScale( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToScale data-toc-label='setToScale' }

Sets this matrix to the affine scaling matrix.

#### setToAffine( m00 : <span style="font-weight: 400; opacity: 80%;">number</span>, m01 : <span style="font-weight: 400; opacity: 80%;">number</span>, m02 : <span style="font-weight: 400; opacity: 80%;">number</span>, m10 : <span style="font-weight: 400; opacity: 80%;">number</span>, m11 : <span style="font-weight: 400; opacity: 80%;">number</span>, m12 : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToAffine data-toc-label='setToAffine' }

Sets this matrix to an affine matrix with the specified row-major values.

#### setToRotationAxisAngle( axis : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToRotationAxisAngle data-toc-label='setToRotationAxisAngle' }

Sets the matrix to a rotation defined by a rotation of the specified angle around the given unit axis.

@param axis - normalized
@param angle - in radians

#### setToRotationX( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToRotationX data-toc-label='setToRotationX' }

Sets this matrix to a rotation around the x axis (in the yz plane).

@param angle - in radians

#### setToRotationY( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToRotationY data-toc-label='setToRotationY' }

Sets this matrix to a rotation around the y axis (in the xz plane).

@param angle - in radians

#### setToRotationZ( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToRotationZ data-toc-label='setToRotationZ' }

Sets this matrix to a rotation around the z axis (in the xy plane).

@param angle - in radians

#### setToTranslationRotation( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToTranslationRotation data-toc-label='setToTranslationRotation' }

Sets this matrix to the combined translation+rotation (where the rotation logically would happen first, THEN it
would be translated).

@param x
@param y
@param angle - in radians

#### setToTranslationRotationPoint( translation : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToTranslationRotationPoint data-toc-label='setToTranslationRotationPoint' }

Sets this matrix to the combined translation+rotation (where the rotation logically would happen first, THEN it
would be translated).

@param translation
@param angle - in radians

#### setToScaleTranslationRotation( scale : <span style="font-weight: 400; opacity: 80%;">number</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToScaleTranslationRotation data-toc-label='setToScaleTranslationRotation' }

Sets this matrix to the combined scale+translation+rotation.

The order of operations is scale, then rotate, then translate.

@param x
@param y
@param angle - in radians

#### setToScaleTranslationRotationPoint( scale : <span style="font-weight: 400; opacity: 80%;">number</span>, translation : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToScaleTranslationRotationPoint data-toc-label='setToScaleTranslationRotationPoint' }

Sets this matrix to the combined translation+rotation (where the rotation logically would happen first, THEN it
would be translated).

@param translation
@param angle - in radians

#### setToSVGMatrix( svgMatrix : <span style="font-weight: 400; opacity: 80%;">SVGMatrix</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setToSVGMatrix data-toc-label='setToSVGMatrix' }

Sets this matrix to the values contained in an SVGMatrix.

#### setRotationAToB( a : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, b : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setRotationAToB data-toc-label='setRotationAToB' }

Sets this matrix to a rotation matrix that rotates A to B (Vector3 instances), by rotating about the axis
A.cross( B ) -- Shortest path. ideally should be unit vectors.

#### multiplyVector2( vector2 : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #multiplyVector2 data-toc-label='multiplyVector2' }

Sets the vector to the result of (matrix * vector), as a homogeneous multiplication.

@returns - The vector that was mutated

#### multiplyVector3( vector3 : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector3</span> {: #multiplyVector3 data-toc-label='multiplyVector3' }

Sets the vector to the result of (matrix * vector).

@returns - The vector that was mutated

#### multiplyTransposeVector2( v : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #multiplyTransposeVector2 data-toc-label='multiplyTransposeVector2' }

Sets the vector to the result of (transpose(matrix) * vector), ignoring the translation parameters.

@returns - The vector that was mutated

#### multiplyRelativeVector2( v : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #multiplyRelativeVector2 data-toc-label='multiplyRelativeVector2' }

Sets the vector to the result of (matrix * vector - matrix * zero). Since this is a homogeneous operation, it is
equivalent to the multiplication of (x,y,0).

@returns - The vector that was mutated

#### canvasSetTransform( context : <span style="font-weight: 400; opacity: 80%;">CanvasRenderingContext2D</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #canvasSetTransform data-toc-label='canvasSetTransform' }

Sets the transform of a Canvas 2D rendering context to the affine part of this matrix

#### canvasAppendTransform( context : <span style="font-weight: 400; opacity: 80%;">CanvasRenderingContext2D</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #canvasAppendTransform data-toc-label='canvasAppendTransform' }

Appends to the affine part of this matrix to the Canvas 2D rendering context

#### copyToArray( array : <span style="font-weight: 400; opacity: 80%;">number[] | Float32Array | Float64Array</span> ) : <span style="font-weight: 400; opacity: 80%;">number[] | Float32Array | Float64Array</span> {: #copyToArray data-toc-label='copyToArray' }

Copies the entries of this matrix over to an arbitrary array (typed or normal).

#### freeToPool() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### entries : <span style="font-weight: 400; opacity: 80%;">NineNumbers</span> {: #entries data-toc-label='entries' }

Entries stored in column-major format

#### type : <span style="font-weight: 400; opacity: 80%;">Matrix3Type</span> {: #type data-toc-label='type' }

### Static Methods

#### identity() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #identity data-toc-label='identity' }

Returns an identity matrix.

#### translation( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #translation data-toc-label='translation' }

Returns a translation matrix.

#### translationFromVector( vector : <span style="font-weight: 400; opacity: 80%;">Vector2 | Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #translationFromVector data-toc-label='translationFromVector' }

Returns a translation matrix computed from a vector.

#### scaling( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #scaling data-toc-label='scaling' }

Returns a matrix that scales things in each dimension.

#### scale( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #scale data-toc-label='scale' }

Returns a matrix that scales things in each dimension.

#### affine( m00 : <span style="font-weight: 400; opacity: 80%;">number</span>, m01 : <span style="font-weight: 400; opacity: 80%;">number</span>, m02 : <span style="font-weight: 400; opacity: 80%;">number</span>, m10 : <span style="font-weight: 400; opacity: 80%;">number</span>, m11 : <span style="font-weight: 400; opacity: 80%;">number</span>, m12 : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #affine data-toc-label='affine' }

Returns an affine matrix with the given parameters.

#### rowMajor( v00 : <span style="font-weight: 400; opacity: 80%;">number</span>, v01 : <span style="font-weight: 400; opacity: 80%;">number</span>, v02 : <span style="font-weight: 400; opacity: 80%;">number</span>, v10 : <span style="font-weight: 400; opacity: 80%;">number</span>, v11 : <span style="font-weight: 400; opacity: 80%;">number</span>, v12 : <span style="font-weight: 400; opacity: 80%;">number</span>, v20 : <span style="font-weight: 400; opacity: 80%;">number</span>, v21 : <span style="font-weight: 400; opacity: 80%;">number</span>, v22 : <span style="font-weight: 400; opacity: 80%;">number</span>, type? : <span style="font-weight: 400; opacity: 80%;">Matrix3Type</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #rowMajor data-toc-label='rowMajor' }

Creates a new matrix with all entries determined in row-major order.

#### rotationAxisAngle( axis : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #rotationAxisAngle data-toc-label='rotationAxisAngle' }

Returns a matrix rotation defined by a rotation of the specified angle around the given unit axis.

@param axis - normalized
@param angle - in radians

#### rotationX( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #rotationX data-toc-label='rotationX' }

Returns a matrix that rotates around the x axis (in the yz plane).

@param angle - in radians

#### rotationY( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #rotationY data-toc-label='rotationY' }

Returns a matrix that rotates around the y axis (in the xz plane).

@param angle - in radians

#### rotationZ( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #rotationZ data-toc-label='rotationZ' }

Returns a matrix that rotates around the z axis (in the xy plane).

@param angle - in radians

#### translationRotation( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #translationRotation data-toc-label='translationRotation' }

Returns a combined 2d translation + rotation (with the rotation effectively applied first).

@param angle - in radians

#### rotation2( angle : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #rotation2 data-toc-label='rotation2' }

Standard 2d rotation matrix for a given angle.

@param angle - in radians

#### rotationAround( angle : <span style="font-weight: 400; opacity: 80%;">number</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #rotationAround data-toc-label='rotationAround' }

Returns a matrix which will be a 2d rotation around a given x,y point.

@param angle - in radians
@param x
@param y

#### rotationAroundPoint( angle : <span style="font-weight: 400; opacity: 80%;">number</span>, point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #rotationAroundPoint data-toc-label='rotationAroundPoint' }

Returns a matrix which will be a 2d rotation around a given 2d point.

@param angle - in radians
@param point

#### fromSVGMatrix( svgMatrix : <span style="font-weight: 400; opacity: 80%;">SVGMatrix</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #fromSVGMatrix data-toc-label='fromSVGMatrix' }

Returns a matrix equivalent to a given SVGMatrix.

#### rotateAToB( a : <span style="font-weight: 400; opacity: 80%;">Vector3</span>, b : <span style="font-weight: 400; opacity: 80%;">Vector3</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #rotateAToB data-toc-label='rotateAToB' }

Returns a rotation matrix that rotates A to B, by rotating about the axis A.cross( B ) -- Shortest path. ideally
should be unit vectors.

#### translationTimesMatrix( x : <span style="font-weight: 400; opacity: 80%;">number</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #translationTimesMatrix data-toc-label='translationTimesMatrix' }

Shortcut for translation times a matrix (without allocating a translation matrix), see scenery#119

#### toStateObject( matrix3 : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3StateObject</span> {: #toStateObject data-toc-label='toStateObject' }

Serialize to an Object that can be handled by PhET-iO

#### fromStateObject( stateObject : <span style="font-weight: 400; opacity: 80%;">Matrix3StateObject</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #fromStateObject data-toc-label='fromStateObject' }

Convert back from a serialized Object to a Matrix3

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

(readonly)

#### IDENTITY : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #IDENTITY data-toc-label='IDENTITY' }

#### X_REFLECTION : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #X_REFLECTION data-toc-label='X_REFLECTION' }

#### Y_REFLECTION : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #Y_REFLECTION data-toc-label='Y_REFLECTION' }

#### Matrix3IO : <span style="font-weight: 400; opacity: 80%;">IOType</span> {: #Matrix3IO data-toc-label='Matrix3IO' }



## Class Matrix3Type {: #Matrix3Type }


```js
import { Matrix3Type } from 'scenerystack/dot';
```
### Static Properties

#### OTHER : <span style="font-weight: 400; opacity: 80%;">Matrix3Type</span> {: #Matrix3Type-OTHER data-toc-label='Matrix3Type-OTHER' }

(readonly)

#### IDENTITY : <span style="font-weight: 400; opacity: 80%;">Matrix3Type</span> {: #Matrix3Type-IDENTITY data-toc-label='Matrix3Type-IDENTITY' }

(readonly)

#### TRANSLATION_2D : <span style="font-weight: 400; opacity: 80%;">Matrix3Type</span> {: #Matrix3Type-TRANSLATION_2D data-toc-label='Matrix3Type-TRANSLATION_2D' }

(readonly)

#### SCALING : <span style="font-weight: 400; opacity: 80%;">Matrix3Type</span> {: #Matrix3Type-SCALING data-toc-label='Matrix3Type-SCALING' }

(readonly)

#### AFFINE : <span style="font-weight: 400; opacity: 80%;">Matrix3Type</span> {: #Matrix3Type-AFFINE data-toc-label='Matrix3Type-AFFINE' }

(readonly)

#### enumeration : <span style="font-weight: 400; opacity: 80%;">Enumeration</span> {: #Matrix3Type-enumeration data-toc-label='Matrix3Type-enumeration' }

(readonly)



## Source Code

See the source for [Matrix3.ts](https://github.com/phetsims/dot/blob/main/js/Matrix3.ts) in the [dot](https://github.com/phetsims/dot) repository.
