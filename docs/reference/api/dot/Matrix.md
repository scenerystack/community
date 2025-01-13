# Matrix

## Overview

Arbitrary-dimensional matrix, based on Jama (http://math.nist.gov/javanumerics/jama/)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Matrix {: #Matrix }


```js
import { Matrix } from 'scenerystack/dot';
```
### Constructor

#### new Matrix( m, n, filler, fast ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### copy() {: #copy data-toc-label='copy' }

@public

@returns {Matrix}

#### getArray() {: #getArray data-toc-label='getArray' }

@public

@returns {Array.&lt;number&gt;}

#### getArrayCopy() {: #getArrayCopy data-toc-label='getArrayCopy' }

@public

@returns {Array.&lt;number&gt;}

#### getRowDimension() {: #getRowDimension data-toc-label='getRowDimension' }

@public

@returns {number}

#### getColumnDimension() {: #getColumnDimension data-toc-label='getColumnDimension' }

@public

@returns {number}

#### index( i, j ) {: #index data-toc-label='index' }

TODO: inline this places if we aren't using an inlining compiler! (check performance) https://github.com/phetsims/dot/issues/96
@public

@param {number} i
@param {number} j
@returns {number}

#### get( i, j ) {: #get data-toc-label='get' }

Get the matrix element (i,j) with the convention that row and column indices start at zero
@public

@param {number} i - row index
@param {number} j - column index
@returns {number}

#### set( i, j, s ) {: #set data-toc-label='set' }

Set the matrix element (i,j) to a value s with the convention that row and column indices start at zero
@public

@param {number} i - row index
@param {number} j - column index
@param {number} s - value of the matrix element

#### getMatrix( i0, i1, j0, j1 ) {: #getMatrix data-toc-label='getMatrix' }

@public

@param {number} i0
@param {number} i1
@param {number} j0
@param {number} j1
@returns {Matrix}

#### getArrayRowMatrix( r, j0, j1 ) {: #getArrayRowMatrix data-toc-label='getArrayRowMatrix' }

@public

@param {Array.&lt;number&gt;} r
@param {number} j0
@param {number} j1
@returns {Matrix}

#### transpose( result ) {: #transpose data-toc-label='transpose' }

@public

@param {Matrix} [result] - allow passing in a pre-constructed matrix
@returns {Matrix}

#### norm1() {: #norm1 data-toc-label='norm1' }

@public

@returns {number}

#### norm2() {: #norm2 data-toc-label='norm2' }

@public

@returns {number}

#### normInf() {: #normInf data-toc-label='normInf' }

@public

@returns {number}

#### normF() {: #normF data-toc-label='normF' }

@public

@returns {number}

#### uminus() {: #uminus data-toc-label='uminus' }

@public

@returns {Matrix}

#### plus( matrix ) {: #plus data-toc-label='plus' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### plusEquals( matrix ) {: #plusEquals data-toc-label='plusEquals' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### blendEquals( matrix, ratio ) {: #blendEquals data-toc-label='blendEquals' }

A linear interpolation between this Matrix (ratio=0) and another Matrix (ratio=1).
@public

@param {Matrix} matrix
@param {number} ratio - Not necessarily constrained in [0, 1]
@returns {Matrix}

#### minus( matrix ) {: #minus data-toc-label='minus' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### minusEquals( matrix ) {: #minusEquals data-toc-label='minusEquals' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### arrayTimes( matrix ) {: #arrayTimes data-toc-label='arrayTimes' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### arrayTimesEquals( matrix ) {: #arrayTimesEquals data-toc-label='arrayTimesEquals' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### arrayRightDivide( matrix ) {: #arrayRightDivide data-toc-label='arrayRightDivide' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### arrayRightDivideEquals( matrix ) {: #arrayRightDivideEquals data-toc-label='arrayRightDivideEquals' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### arrayLeftDivide( matrix ) {: #arrayLeftDivide data-toc-label='arrayLeftDivide' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### arrayLeftDivideEquals( matrix ) {: #arrayLeftDivideEquals data-toc-label='arrayLeftDivideEquals' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### times( matrixOrScalar ) {: #times data-toc-label='times' }

@public

@param {Matrix|number} matrixOrScalar
@returns {Matrix}

#### timesEquals( s ) {: #timesEquals data-toc-label='timesEquals' }

@public

@param {number} s
@returns {Matrix}

#### solve( matrix ) {: #solve data-toc-label='solve' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### solveTranspose( matrix ) {: #solveTranspose data-toc-label='solveTranspose' }

@public

@param {Matrix} matrix
@returns {Matrix}

#### inverse() {: #inverse data-toc-label='inverse' }

@public

@returns {Matrix}

#### det() {: #det data-toc-label='det' }

@public

@returns {number}

#### rank() {: #rank data-toc-label='rank' }

@public

@returns {number}

#### cond() {: #cond data-toc-label='cond' }

@public

@returns {number}

#### trace() {: #trace data-toc-label='trace' }

@public

@returns {number}

#### checkMatrixDimensions( matrix ) {: #checkMatrixDimensions data-toc-label='checkMatrixDimensions' }

@public

@param {Matrix} matrix

#### toString() {: #toString data-toc-label='toString' }

Returns a string form of this object
@public

@returns {string}

#### extractVector2( column ) {: #extractVector2 data-toc-label='extractVector2' }

Returns a vector that is contained in the specified column
@public

@param {number} column
@returns {Vector2}

#### extractVector3( column ) {: #extractVector3 data-toc-label='extractVector3' }

Returns a vector that is contained in the specified column
@public

@param {number} column
@returns {Vector3}

#### extractVector4( column ) {: #extractVector4 data-toc-label='extractVector4' }

Returns a vector that is contained in the specified column
@public

@param {number} column
@returns {Vector4}

#### setVectors3( vectors ) {: #setVectors3 data-toc-label='setVectors3' }

Sets the current matrix to the values of the listed column vectors (Vector3).
@public

@param {Array.&lt;Vector3&gt;} vectors
@returns {Matrix}

### Static Methods

#### hypot( a, b ) {: #hypot data-toc-label='hypot' }

sqrt(a^2 + b^2) without under/overflow.
@public

@param {number} a
@param {number} b
@returns {number}

#### identity( m, n ) {: #identity data-toc-label='identity' }

Sets this matrix to the identity.
@public

@param {number} m
@param {number} n
@returns {Matrix}

#### diagonalMatrix( diagonalValues ) {: #diagonalMatrix data-toc-label='diagonalMatrix' }

Returns a square diagonal matrix, whose entries along the diagonal are specified by the passed-in array, and the
other entries are 0.
@public

@param {Array.&lt;number&gt;} diagonalValues
@returns {Matrix}

#### rowVector2( vector ) {: #rowVector2 data-toc-label='rowVector2' }

@public

@param {Vector2} vector
@returns {Matrix}

#### rowVector3( vector ) {: #rowVector3 data-toc-label='rowVector3' }

@public

@param {Vector3} vector
@returns {Matrix}

#### rowVector4( vector ) {: #rowVector4 data-toc-label='rowVector4' }

@public

@param {Vector4} vector
@returns {Matrix}

#### rowVector( vector ) {: #rowVector data-toc-label='rowVector' }

@public

@param {Vector2|Vector3|Vector4} vector
@returns {Matrix}

#### columnVector2( vector ) {: #columnVector2 data-toc-label='columnVector2' }

@public

@param {Vector2} vector
@returns {Matrix}

#### columnVector3( vector ) {: #columnVector3 data-toc-label='columnVector3' }

@public

@param {Vector3} vector
@returns {Matrix}

#### columnVector4( vector ) {: #columnVector4 data-toc-label='columnVector4' }

@public

@param {Vector4} vector
@returns {Matrix}

#### columnVector( vector ) {: #columnVector data-toc-label='columnVector' }

@public

@param {Vector2|Vector3|Vector4} vector
@returns {Matrix}

#### fromVectors2( vectors ) {: #fromVectors2 data-toc-label='fromVectors2' }

Create a Matrix where each column is a vector
@public

@param {Array.&lt;Vector2&gt;} vectors

#### fromVectors3( vectors ) {: #fromVectors3 data-toc-label='fromVectors3' }

Create a Matrix where each column is a vector
@public

@param {Array.&lt;Vector3&gt;} vectors

#### fromVectors4( vectors ) {: #fromVectors4 data-toc-label='fromVectors4' }

Create a Matrix where each column is a vector
@public

@param {Array.&lt;Vector4&gt;} vectors



## Class EigenvalueDecomposition {: #EigenvalueDecomposition }


Eigensystem decomposition, based on Jama (http://math.nist.gov/javanumerics/jama/)

Eigenvalues and eigenvectors of a real matrix.
&lt;P&gt;
If A is symmetric, then A = V*D*V' where the eigenvalue matrix D is
diagonal and the eigenvector matrix V is orthogonal.
I.e. A = V.times(D.times(V.transpose())) and
V.times(V.transpose()) equals the identity matrix.
&lt;P&gt;
If A is not symmetric, then the eigenvalue matrix D is block diagonal
with the real eigenvalues in 1-by-1 blocks and any complex eigenvalues,
lambda + i*mu, in 2-by-2 blocks, [lambda, mu; -mu, lambda].  The
columns of V represent the eigenvectors in the sense that A*V = V*D,
i.e. A.times(V) equals V.times(D).  The matrix V may be badly
conditioned, or even singular, so the validity of the equation
A = V*D*inverse(V) depends upon V.cond().

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { EigenvalueDecomposition } from 'scenerystack/dot';
```
### Constructor

#### new EigenvalueDecomposition( matrix ) {: #EigenvalueDecomposition-constructor data-toc-label='EigenvalueDecomposition-constructor' }

### Instance Methods

#### getV() {: #EigenvalueDecomposition-getV data-toc-label='EigenvalueDecomposition-getV' }

Returns a square array of all eigenvectors arranged in a columnar format
@public
@returns {ArrayType.&lt;number&gt;} - a n*n matrix

#### getRealEigenvalues() {: #EigenvalueDecomposition-getRealEigenvalues data-toc-label='EigenvalueDecomposition-getRealEigenvalues' }

Returns an array that contains the real part of the eigenvalues
@public
@returns {ArrayType.&lt;number&gt;} - a one dimensional array

#### getImagEigenvalues() {: #EigenvalueDecomposition-getImagEigenvalues data-toc-label='EigenvalueDecomposition-getImagEigenvalues' }

Returns an array that contains the imaginary parts of the eigenvalues
@public
@returns {ArrayType.&lt;number&gt;} - a one dimensional array

#### getD() {: #EigenvalueDecomposition-getD data-toc-label='EigenvalueDecomposition-getD' }

Return the block diagonal eigenvalue matrix
@public
@returns {Matrix} - a n * n matrix

#### tred2() {: #EigenvalueDecomposition-tred2 data-toc-label='EigenvalueDecomposition-tred2' }

Symmetric Householder reduction to tridiagonal form.
@private

#### tql2() {: #EigenvalueDecomposition-tql2 data-toc-label='EigenvalueDecomposition-tql2' }

Symmetric tridiagonal QL algorithm.
@private

#### orthes() {: #EigenvalueDecomposition-orthes data-toc-label='EigenvalueDecomposition-orthes' }

 Nonsymmetric reduction to Hessenberg form.
 @private

#### cdiv( xr, xi, yr, yi ) {: #EigenvalueDecomposition-cdiv data-toc-label='EigenvalueDecomposition-cdiv' }

Complex scalar division.
@private

@param {*} xr
@param {*} xi
@param {*} yr
@param {*} yi

#### hqr2() {: #EigenvalueDecomposition-hqr2 data-toc-label='EigenvalueDecomposition-hqr2' }

This methods finds the eigenvalues and eigenvectors
of a real upper hessenberg matrix by the QR algorithm

Nonsymmetric reduction from Hessenberg to real Schur form.
https://en.wikipedia.org/wiki/QR_algorithm

@private



## Class LUDecomposition {: #LUDecomposition }


LU decomposition, based on Jama (http://math.nist.gov/javanumerics/jama/).  Please note the arbitrary-precision
copy LUDecompositionDecimal which should be maintained with this file.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { LUDecomposition } from 'scenerystack/dot';
```
### Constructor

#### new LUDecomposition( matrix ) {: #LUDecomposition-constructor data-toc-label='LUDecomposition-constructor' }

### Instance Methods

#### isNonsingular() {: #LUDecomposition-isNonsingular data-toc-label='LUDecomposition-isNonsingular' }

@public

@returns {boolean}

#### getL() {: #LUDecomposition-getL data-toc-label='LUDecomposition-getL' }

@public

@returns {Matrix}

#### getU() {: #LUDecomposition-getU data-toc-label='LUDecomposition-getU' }

@public

@returns {Matrix}

#### getPivot() {: #LUDecomposition-getPivot data-toc-label='LUDecomposition-getPivot' }

@public

@returns {Uint32Array}

#### getDoublePivot() {: #LUDecomposition-getDoublePivot data-toc-label='LUDecomposition-getDoublePivot' }

@public

@returns {Float64Array}

#### det() {: #LUDecomposition-det data-toc-label='LUDecomposition-det' }

@public

@returns {number}

#### solve( matrix ) {: #LUDecomposition-solve data-toc-label='LUDecomposition-solve' }

@public

@param {Matrix} matrix
@returns {Matrix}



## Class QRDecomposition {: #QRDecomposition }


QR decomposition, based on Jama (http://math.nist.gov/javanumerics/jama/)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { QRDecomposition } from 'scenerystack/dot';
```
### Constructor

#### new QRDecomposition( matrix ) {: #QRDecomposition-constructor data-toc-label='QRDecomposition-constructor' }

### Instance Methods

#### isFullRank() {: #QRDecomposition-isFullRank data-toc-label='QRDecomposition-isFullRank' }

@public

@returns {boolean}

#### getH() {: #QRDecomposition-getH data-toc-label='QRDecomposition-getH' }

@public

@returns {Matrix}

#### getR() {: #QRDecomposition-getR data-toc-label='QRDecomposition-getR' }

@public

@returns {Matrix}

#### getQ() {: #QRDecomposition-getQ data-toc-label='QRDecomposition-getQ' }

@public

@returns {Matrix}

#### solve( matrix ) {: #QRDecomposition-solve data-toc-label='QRDecomposition-solve' }

@public

@param {Matrix} matrix
@returns {Matrix}



## Class SingularValueDecomposition {: #SingularValueDecomposition }


SVD decomposition, based on Jama (http://math.nist.gov/javanumerics/jama/)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

```js
import { SingularValueDecomposition } from 'scenerystack/dot';
```
### Constructor

#### new SingularValueDecomposition( matrix ) {: #SingularValueDecomposition-constructor data-toc-label='SingularValueDecomposition-constructor' }

### Instance Methods

#### getU() {: #SingularValueDecomposition-getU data-toc-label='SingularValueDecomposition-getU' }

@public

@returns {Matrix}

#### getV() {: #SingularValueDecomposition-getV data-toc-label='SingularValueDecomposition-getV' }

@public

@returns {Matrix}

#### getSingularValues() {: #SingularValueDecomposition-getSingularValues data-toc-label='SingularValueDecomposition-getSingularValues' }

@public

@returns {Array.&lt;number&gt;}

#### getS() {: #SingularValueDecomposition-getS data-toc-label='SingularValueDecomposition-getS' }

@public

@returns {Matrix}

#### norm2() {: #SingularValueDecomposition-norm2 data-toc-label='SingularValueDecomposition-norm2' }

@public

@returns {number}

#### cond() {: #SingularValueDecomposition-cond data-toc-label='SingularValueDecomposition-cond' }

@public

@returns {number}

#### rank() {: #SingularValueDecomposition-rank data-toc-label='SingularValueDecomposition-rank' }

@public

@returns {number}

### Static Methods

#### pseudoinverse( matrix ) {: #SingularValueDecomposition-pseudoinverse data-toc-label='SingularValueDecomposition-pseudoinverse' }

Constructs the Moore-Penrose pseudoinverse of the specified matrix, using the SVD construction.
@public

See https://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_pseudoinverse for details. Helpful for
linear least-squares regression.

@param {Matrix} matrix, m x n
@returns {Matrix} - n x m



## Source Code

See the source for [Matrix.js](https://github.com/phetsims/dot/blob/main/js/Matrix.js) in the [dot](https://github.com/phetsims/dot) repository.
