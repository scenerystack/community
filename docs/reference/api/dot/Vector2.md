# Vector2

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/Vector2.ts](https://github.com/phetsims/dot/blob/main/js/Vector2.ts) for the most up-to-date information.

## Overview

Basic 2-dimensional vector, represented as (x,y).  Values can be numeric, or NaN or infinite.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Vector2 {: #Vector2 }


```js
import { Vector2 } from 'scenerystack/dot';
```
### Constructor

#### new Vector2( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Vector2-constructor data-toc-label='new Vector2' }

### Instance Methods

#### getMagnitude() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMagnitude data-toc-label='getMagnitude' }

The magnitude (Euclidean/L2 Norm) of this vector, i.e. $\sqrt{x^2+y^2}$.

#### getMagnitudeSquared() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMagnitudeSquared data-toc-label='getMagnitudeSquared' }

The squared magnitude (square of the Euclidean/L2 Norm) of this vector, i.e. $x^2+y^2$.

#### distance( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distance data-toc-label='distance' }

The Euclidean distance between this vector (treated as a point) and another point.

#### distanceXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distanceXY data-toc-label='distanceXY' }

The Euclidean distance between this vector (treated as a point) and another point (x,y).

#### distanceSquared( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distanceSquared data-toc-label='distanceSquared' }

The squared Euclidean distance between this vector (treated as a point) and another point.

#### distanceSquaredXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distanceSquaredXY data-toc-label='distanceSquaredXY' }

The squared Euclidean distance between this vector (treated as a point) and another point with coordinates (x,y).

#### dot( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #dot data-toc-label='dot' }

The dot-product (Euclidean inner product) between this vector and another vector v.

#### dotXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #dotXY data-toc-label='dotXY' }

The dot-product (Euclidean inner product) between this vector and another vector (x,y).

#### getAngle() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getAngle data-toc-label='getAngle' }

The angle $\theta$ of this vector, such that this vector is equal to

$$
u = \begin{bmatrix} r\cos\theta \\ r\sin\theta \end{bmatrix}
$$

for the magnitude $r \ge 0$ of the vector, with $\theta\in(-\pi,\pi]$

#### angleBetween( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #angleBetween data-toc-label='angleBetween' }

The angle between this vector and another vector, in the range $\theta\in[0, \pi]$.

Equal to $\theta = \cos^{-1}( \hat{u} \cdot \hat{v} )$ where $\hat{u}$ is this vector (normalized) and $\hat{v}$
is the input vector (normalized).

#### equals( other : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

Exact equality comparison between this vector and another vector.

@returns - Whether the two vectors have equal components

#### equalsEpsilon( other : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsEpsilon data-toc-label='equalsEpsilon' }

Approximate equality comparison between this vector and another vector.

@returns - Whether difference between the two vectors has no component with an absolute value greater than epsilon.

#### isFinite() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFinite data-toc-label='isFinite' }

Returns false if either component is NaN, infinity, or -infinity. Otherwise returns true.

#### copy( vector? : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #copy data-toc-label='copy' }

Creates a copy of this vector, or if a vector is passed in, set that vector's values to ours.

This is the immutable form of the function set(), if a vector is provided. This will return a new vector, and
will not modify this vector.

@param [vector] - If not provided, creates a new Vector2 with filled in values. Otherwise, fills in the
                  values of the provided vector so that it equals this vector.

#### crossScalar( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #crossScalar data-toc-label='crossScalar' }

The scalar value of the z-component of the equivalent 3-dimensional cross product:

$$
f( u, v ) = \left( \begin{bmatrix} u_x \\ u_y \\ 0 \end{bmatrix} \times \begin{bmatrix} v_x \\ v_y \\ 0 \end{bmatrix} \right)_z = u_x v_y - u_y v_x
$$

#### normalized() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #normalized data-toc-label='normalized' }

Normalized (re-scaled) copy of this vector such that its magnitude is 1. If its initial magnitude is zero, an
error is thrown.

This is the immutable form of the function normalize(). This will return a new vector, and will not modify this
vector.

#### roundedSymmetric() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #roundedSymmetric data-toc-label='roundedSymmetric' }

Returns a copy of this vector with each component rounded by roundSymmetric.

This is the immutable form of the function roundSymmetric(). This will return a new vector, and will not modify
this vector.

#### withMagnitude( magnitude : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #withMagnitude data-toc-label='withMagnitude' }

Re-scaled copy of this vector such that it has the desired magnitude. If its initial magnitude is zero, an error
is thrown. If the passed-in magnitude is negative, the direction of the resulting vector will be reversed.

This is the immutable form of the function setMagnitude(). This will return a new vector, and will not modify
this vector.

#### timesScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #timesScalar data-toc-label='timesScalar' }

Copy of this vector, scaled by the desired scalar value.

This is the immutable form of the function multiplyScalar(). This will return a new vector, and will not modify
this vector.

#### times( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #times data-toc-label='times' }

Same as timesScalar.

This is the immutable form of the function multiply(). This will return a new vector, and will not modify
this vector.

#### componentTimes( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #componentTimes data-toc-label='componentTimes' }

Copy of this vector, multiplied component-wise by the passed-in vector v.

This is the immutable form of the function componentMultiply(). This will return a new vector, and will not modify
this vector.

#### plus( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #plus data-toc-label='plus' }

Addition of this vector and another vector, returning a copy.

This is the immutable form of the function add(). This will return a new vector, and will not modify
this vector.

#### plusXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #plusXY data-toc-label='plusXY' }

Addition of this vector and another vector (x,y), returning a copy.

This is the immutable form of the function addXY(). This will return a new vector, and will not modify
this vector.

#### plusScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #plusScalar data-toc-label='plusScalar' }

Addition of this vector with a scalar (adds the scalar to every component), returning a copy.

This is the immutable form of the function addScalar(). This will return a new vector, and will not modify
this vector.

#### minus( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #minus data-toc-label='minus' }

Subtraction of this vector by another vector v, returning a copy.

This is the immutable form of the function subtract(). This will return a new vector, and will not modify
this vector.

#### minusXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #minusXY data-toc-label='minusXY' }

Subtraction of this vector by another vector (x,y), returning a copy.

This is the immutable form of the function subtractXY(). This will return a new vector, and will not modify
this vector.

#### minusScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #minusScalar data-toc-label='minusScalar' }

Subtraction of this vector by a scalar (subtracts the scalar from every component), returning a copy.

This is the immutable form of the function subtractScalar(). This will return a new vector, and will not modify
this vector.

#### dividedScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #dividedScalar data-toc-label='dividedScalar' }

Division of this vector by a scalar (divides every component by the scalar), returning a copy.

This is the immutable form of the function divideScalar(). This will return a new vector, and will not modify
this vector.

#### negated() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #negated data-toc-label='negated' }

Negated copy of this vector (multiplies every component by -1).

This is the immutable form of the function negate(). This will return a new vector, and will not modify
this vector.

#### getPerpendicular() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getPerpendicular data-toc-label='getPerpendicular' }

Rotated by -pi/2 (perpendicular to this vector), returned as a copy.

#### rotated( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #rotated data-toc-label='rotated' }

Rotated by an arbitrary angle, in radians. Returned as a copy.

This is the immutable form of the function rotate(). This will return a new vector, and will not modify
this vector.

@param angle - In radians

#### rotateAboutXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #rotateAboutXY data-toc-label='rotateAboutXY' }

Mutable method that rotates this vector about an x,y point.

@param x - origin of rotation in x
@param y - origin of rotation in y
@param angle - radians to rotate
@returns this for chaining

#### rotateAboutPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #rotateAboutPoint data-toc-label='rotateAboutPoint' }

Same as rotateAboutXY but with a point argument.

#### rotatedAboutXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #rotatedAboutXY data-toc-label='rotatedAboutXY' }

Immutable method that returns a new Vector2 that is rotated about the given point.

@param x - origin for rotation in x
@param y - origin for rotation in y
@param angle - radians to rotate

#### rotatedAboutPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #rotatedAboutPoint data-toc-label='rotatedAboutPoint' }

Immutable method that returns a new Vector2 rotated about the given point.

#### blend( vector : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #blend data-toc-label='blend' }

A linear interpolation between this vector (ratio=0) and another vector (ratio=1).

@param vector
@param ratio - Not necessarily constrained in [0, 1]

#### average( vector : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #average data-toc-label='average' }

The average (midpoint) between this vector and another vector.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Debugging string for the vector.

#### setXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #setXY data-toc-label='setXY' }

Sets all of the components of this vector, returning this.

#### setX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #setX data-toc-label='setX' }

Sets the x-component of this vector, returning this.

#### setY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #setY data-toc-label='setY' }

Sets the y-component of this vector, returning this.

#### set( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #set data-toc-label='set' }

Sets this vector to be a copy of another vector.

This is the mutable form of the function copy(). This will mutate (change) this vector, in addition to returning
this vector itself.

#### setMagnitude( magnitude : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #setMagnitude data-toc-label='setMagnitude' }

Sets the magnitude of this vector. If the passed-in magnitude is negative, this flips the vector and sets its
magnitude to abs( magnitude ).

This is the mutable form of the function withMagnitude(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### add( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #add data-toc-label='add' }

Adds another vector to this vector, changing this vector.

This is the mutable form of the function plus(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### addXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #addXY data-toc-label='addXY' }

Adds another vector (x,y) to this vector, changing this vector.

This is the mutable form of the function plusXY(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### addScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #addScalar data-toc-label='addScalar' }

Adds a scalar to this vector (added to every component), changing this vector.

This is the mutable form of the function plusScalar(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### subtract( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #subtract data-toc-label='subtract' }

Subtracts this vector by another vector, changing this vector.

This is the mutable form of the function minus(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### subtractXY( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #subtractXY data-toc-label='subtractXY' }

Subtracts this vector by another vector (x,y), changing this vector.

This is the mutable form of the function minusXY(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### subtractScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #subtractScalar data-toc-label='subtractScalar' }

Subtracts this vector by a scalar (subtracts each component by the scalar), changing this vector.

This is the mutable form of the function minusScalar(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### multiplyScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #multiplyScalar data-toc-label='multiplyScalar' }

Multiplies this vector by a scalar (multiplies each component by the scalar), changing this vector.

This is the mutable form of the function timesScalar(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### multiply( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #multiply data-toc-label='multiply' }

Multiplies this vector by a scalar (multiplies each component by the scalar), changing this vector.
Same as multiplyScalar.

This is the mutable form of the function times(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### componentMultiply( v : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #componentMultiply data-toc-label='componentMultiply' }

Multiplies this vector by another vector component-wise, changing this vector.

This is the mutable form of the function componentTimes(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### divideScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #divideScalar data-toc-label='divideScalar' }

Divides this vector by a scalar (divides each component by the scalar), changing this vector.

This is the mutable form of the function dividedScalar(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### negate() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #negate data-toc-label='negate' }

Negates this vector (multiplies each component by -1), changing this vector.

This is the mutable form of the function negated(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### normalize() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #normalize data-toc-label='normalize' }

Normalizes this vector (rescales to where the magnitude is 1), changing this vector.

This is the mutable form of the function normalized(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### roundSymmetric() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #roundSymmetric data-toc-label='roundSymmetric' }

Rounds each component of this vector with roundSymmetric.

This is the mutable form of the function roundedSymmetric(). This will mutate (change) this vector, in addition
to returning the vector itself.

#### rotate( angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #rotate data-toc-label='rotate' }

Rotates this vector by the angle (in radians), changing this vector.

This is the mutable form of the function rotated(). This will mutate (change) this vector, in addition to
returning this vector itself.

@param angle - In radians

#### setPolar( magnitude : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #setPolar data-toc-label='setPolar' }

Sets this vector's value to be the x,y values matching the given magnitude and angle (in radians), changing
this vector, and returning itself.

@param magnitude
@param angle - In radians

#### toStateObject() : <span style="font-weight: 400;">[Vector2StateObject](../dot/Vector2.md#Vector2StateObject)</span> {: #toStateObject data-toc-label='toStateObject' }

Returns a duck-typed object meant for use with tandem/phet-io serialization. Although this is redundant with
stateSchema, it is a nice feature of such a heavily-used type to be able to call toStateObject directly on the type.

@returns - see stateSchema for schema

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #x data-toc-label='x' }

The X coordinate of the vector.

#### y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #y data-toc-label='y' }

The Y coordinate of the vector.

#### isVector2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isVector2 data-toc-label='isVector2' }

#### dimension : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #dimension data-toc-label='dimension' }

### Static Methods

#### average( vectors : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #average data-toc-label='average' }

Take a component-based mean of all vectors provided.

#### createPolar( magnitude : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, angle : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #createPolar data-toc-label='createPolar' }

Returns a Vector2 with the specified magnitude $r$ and angle $\theta$ (in radians), with the formula:

$$
f( r, \theta ) = \begin{bmatrix} r\cos\theta \\ r\sin\theta \end{bmatrix}
$$

#### fromStateObject( stateObject : <span style="font-weight: 400;">[Vector2StateObject](../dot/Vector2.md#Vector2StateObject)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #fromStateObject data-toc-label='fromStateObject' }

Constructs a Vector2 from a duck-typed object, for use with tandem/phet-io deserialization.

#### from( vector2Like : <span style="font-weight: 400;">PartialVector2State</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #from data-toc-label='from' }

Constructs a Vector2 from any object as best as it can, if a component of the v2 is not provided, it will default to 0.

#### getAngleBetweenVectors( startVector : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endVector : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getAngleBetweenVectors data-toc-label='getAngleBetweenVectors' }

Allocation-free implementation that gets the angle between two vectors

@returns the angle between the vectors

#### getDistanceBetweenVectors( startVector : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endVector : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDistanceBetweenVectors data-toc-label='getDistanceBetweenVectors' }

Allocation-free way to get the distance between vectors.

@returns the angle between the vectors

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)

#### ZERO : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #ZERO data-toc-label='ZERO' }

ImmutableVector2 zero vector: $\begin{bmatrix} 0\\0 \end{bmatrix}$

#### X_UNIT : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #X_UNIT data-toc-label='X_UNIT' }

ImmutableVector2 vector: $\begin{bmatrix} 1\\0 \end{bmatrix}$

#### Y_UNIT : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #Y_UNIT data-toc-label='Y_UNIT' }

ImmutableVector2 vector: $\begin{bmatrix} 0\\1 \end{bmatrix}$

#### Vector2IO : <span style="font-weight: 400;">[AnyIOType](../tandem/IOType.md#AnyIOType)</span> {: #Vector2IO data-toc-label='Vector2IO' }



## Type Vector2StateObject {: #Vector2StateObject }


```js
import type { Vector2StateObject } from 'scenerystack/dot';
```


[StateObject](../tandem/StateSchema.md#StateObject)&lt;typeof STATE_SCHEMA&gt;



## Source Code

See the source for [Vector2.ts](https://github.com/phetsims/dot/blob/main/js/Vector2.ts) in the [dot](https://github.com/phetsims/dot) repository.
