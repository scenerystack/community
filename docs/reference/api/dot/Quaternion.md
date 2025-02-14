# Quaternion

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/Quaternion.js](https://github.com/phetsims/dot/blob/main/js/Quaternion.js) for the most up-to-date information.

## Overview

Quaternion, see http://en.wikipedia.org/wiki/Quaternion

TODO #96 convert from JME-style parametrization into classical mathematical description?

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Quaternion {: #Quaternion }


```js
import { Quaternion } from 'scenerystack/dot';
```
### Constructor

#### new Quaternion( x, y, z, w ) {: #Quaternion-constructor data-toc-label='new Quaternion' }

### Instance Methods

#### setXYZW( x, y, z, w ) {: #setXYZW data-toc-label='setXYZW' }

Sets the x,y,z,w values of the quaternion
@public

@param {number} x
@param {number} y
@param {number} z
@param {number} w

#### plus( quat ) {: #plus data-toc-label='plus' }

Addition of this quaternion and another quaternion, returning a copy.
@public

@param {Quaternion} quat
@returns {Quaternion}

#### timesScalar( s ) {: #timesScalar data-toc-label='timesScalar' }

Multiplication of this quaternion by a scalar, returning a copy.
@public

@param {number} s
@returns {Quaternion}

#### timesQuaternion( quat ) {: #timesQuaternion data-toc-label='timesQuaternion' }

Multiplication of this quaternion by another quaternion, returning a copy.
Multiplication is also known at the Hamilton Product (an extension of the cross product for vectors)
The product of two rotation quaternions will be equivalent to a rotation by the first quaternion followed by the second quaternion rotation,
@public

@param {Quaternion} quat
@returns {Quaternion}

#### timesVector3( v ) {: #timesVector3 data-toc-label='timesVector3' }

Multiply this quaternion by a vector v, returning a new vector3
When a versor, a rotation quaternion, and a vector which lies in the plane of the versor are multiplied, the result is a new vector of the same length but turned by the angle of the versor.
@public

@param {Vector3} v
@returns {Vector3}

#### getMagnitude() {: #getMagnitude data-toc-label='getMagnitude' }

The magnitude of this quaternion, i.e. $\sqrt{x^2+y^2+v^2+w^2}$,  returns a non negative number
@public

@returns {number}

#### getMagnitudeSquared() {: #getMagnitudeSquared data-toc-label='getMagnitudeSquared' }

The square of the magnitude of this quaternion, returns a non negative number
@public

@returns {number}

#### normalized() {: #normalized data-toc-label='normalized' }

Normalizes this quaternion (rescales to where the magnitude is 1), returning a new quaternion
@public

@returns {Quaternion}

#### negated() {: #negated data-toc-label='negated' }

Returns a new quaternion pointing in the opposite direction of this quaternion
@public

@returns {Quaternion}

#### toRotationMatrix() {: #toRotationMatrix data-toc-label='toRotationMatrix' }

Convert a quaternion to a rotation matrix
This quaternion does not need to be of magnitude 1
@public

@returns {Matrix3}

### Static Methods

#### fromEulerAngles( yaw, roll, pitch ) {: #fromEulerAngles data-toc-label='fromEulerAngles' }

Function returns a quaternion given euler angles
@public

@param {number} yaw - rotation about the z-axis
@param {number} roll - rotation about the  x-axis
@param {number} pitch - rotation about the y-axis
@returns {Quaternion}

#### fromRotationMatrix( matrix ) {: #fromRotationMatrix data-toc-label='fromRotationMatrix' }

Convert a rotation matrix to a quaternion,
returning a new Quaternion (of magnitude one)
@public

@param {Matrix3} matrix
@returns {Quaternion}

#### getRotationQuaternion( a, b ) {: #getRotationQuaternion data-toc-label='getRotationQuaternion' }

Find a quaternion that transforms a unit vector A into a unit vector B. There
are technically multiple solutions, so this only picks one.
@public

@param {Vector3} a - Unit vector A
@param {Vector3} b - Unit vector B
@returns {Quaternion} A quaternion s.t. Q * A = B

#### slerp( a, b, t ) {: #slerp data-toc-label='slerp' }

spherical linear interpolation - blending two quaternions with a scalar parameter (ranging from 0 to 1).
@public
@param {Quaternion} a
@param {Quaternion} b
@param {number} t - amount of change , between 0 and 1 - 0 is at a, 1 is at b
@returns {Quaternion}



## Source Code

See the source for [Quaternion.js](https://github.com/phetsims/dot/blob/main/js/Quaternion.js) in the [dot](https://github.com/phetsims/dot) repository.
