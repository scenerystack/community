# Vector4

## Overview

Basic 4-dimensional vector, represented as (x,y).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Vector4 {: #Vector4 }


```js
import { Vector4 } from 'scenerystack/dot';
```
### Constructor

#### new Vector4( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getMagnitude() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMagnitude data-toc-label='getMagnitude' }

The magnitude (Euclidean/L2 Norm) of this vector, i.e. $\sqrt{x^2+y^2+z^2+w^2}$.

#### getMagnitudeSquared() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMagnitudeSquared data-toc-label='getMagnitudeSquared' }

The squared magnitude (square of the Euclidean/L2 Norm) of this vector, i.e. $x^2+y^2+z^2+w^2$.

#### distance( point : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distance data-toc-label='distance' }

The Euclidean distance between this vector (treated as a point) and another point.

#### distanceXYZW( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distanceXYZW data-toc-label='distanceXYZW' }

The Euclidean distance between this vector (treated as a point) and another point (x,y,z,w).

#### distanceSquared( point : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distanceSquared data-toc-label='distanceSquared' }

The squared Euclidean distance between this vector (treated as a point) and another point.

#### distanceSquaredXYZW( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #distanceSquaredXYZW data-toc-label='distanceSquaredXYZW' }

The squared Euclidean distance between this vector (treated as a point) and another point (x,y,z,w).

#### dot( v : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #dot data-toc-label='dot' }

The dot-product (Euclidean inner product) between this vector and another vector v.

#### dotXYZW( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #dotXYZW data-toc-label='dotXYZW' }

The dot-product (Euclidean inner product) between this vector and another vector (x,y,z,w).

#### angleBetween( v : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #angleBetween data-toc-label='angleBetween' }

The angle between this vector and another vector, in the range $\theta\in[0, \pi]$.

Equal to $\theta = \cos^{-1}( \hat{u} \cdot \hat{v} )$ where $\hat{u}$ is this vector (normalized) and $\hat{v}$
is the input vector (normalized).

#### equals( other : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

Exact equality comparison between this vector and another vector.

@param other
@returns - Whether the two vectors have equal components

#### equalsEpsilon( other : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, epsilon : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsEpsilon data-toc-label='equalsEpsilon' }

Approximate equality comparison between this vector and another vector.

@returns - Whether difference between the two vectors has no component with an absolute value greater
                     than epsilon.

#### isFinite() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFinite data-toc-label='isFinite' }

Returns false if any component is NaN, infinity, or -infinity. Otherwise returns true.

#### copy( vector? : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #copy data-toc-label='copy' }

Creates a copy of this vector, or if a vector is passed in, set that vector's values to ours.

This is the immutable form of the function set(), if a vector is provided. This will return a new vector, and
will not modify this vector.

@param  [vector] - If not provided, creates a v4 with filled in values. Otherwise, fills in the
                   values of the provided vector so that it equals this vector.

#### normalized() : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #normalized data-toc-label='normalized' }

Normalized (re-scaled) copy of this vector such that its magnitude is 1. If its initial magnitude is zero, an
error is thrown.

This is the immutable form of the function normalize(). This will return a new vector, and will not modify this
vector.

#### roundedSymmetric() : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #roundedSymmetric data-toc-label='roundedSymmetric' }

Returns a copy of this vector with each component rounded by Utils.roundSymmetric.

This is the immutable form of the function roundSymmetric(). This will return a new vector, and will not modify
this vector.

#### withMagnitude( magnitude : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #withMagnitude data-toc-label='withMagnitude' }

Re-scaled copy of this vector such that it has the desired magnitude. If its initial magnitude is zero, an error
is thrown. If the passed-in magnitude is negative, the direction of the resulting vector will be reversed.

This is the immutable form of the function setMagnitude(). This will return a new vector, and will not modify
this vector.


#### timesScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #timesScalar data-toc-label='timesScalar' }

Copy of this vector, scaled by the desired scalar value.

This is the immutable form of the function multiplyScalar(). This will return a new vector, and will not modify
this vector.

#### times( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #times data-toc-label='times' }

Same as timesScalar.

This is the immutable form of the function multiply(). This will return a new vector, and will not modify
this vector.

#### componentTimes( v : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #componentTimes data-toc-label='componentTimes' }

Copy of this vector, multiplied component-wise by the passed-in vector v.

This is the immutable form of the function componentMultiply(). This will return a new vector, and will not modify
this vector.

#### plus( v : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #plus data-toc-label='plus' }

Addition of this vector and another vector, returning a copy.

This is the immutable form of the function add(). This will return a new vector, and will not modify
this vector.

#### plusXYZW( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #plusXYZW data-toc-label='plusXYZW' }

Addition of this vector and another vector (x,y,z,w), returning a copy.

This is the immutable form of the function addXYZW(). This will return a new vector, and will not modify
this vector.

#### plusScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #plusScalar data-toc-label='plusScalar' }

Addition of this vector with a scalar (adds the scalar to every component), returning a copy.

This is the immutable form of the function addScalar(). This will return a new vector, and will not modify
this vector.

#### minus( v : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #minus data-toc-label='minus' }

Subtraction of this vector by another vector v, returning a copy.

This is the immutable form of the function subtract(). This will return a new vector, and will not modify
this vector.

#### minusXYZW( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #minusXYZW data-toc-label='minusXYZW' }

Subtraction of this vector by another vector (x,y,z,w), returning a copy.

This is the immutable form of the function subtractXYZW(). This will return a new vector, and will not modify
this vector.

#### minusScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #minusScalar data-toc-label='minusScalar' }

Subtraction of this vector by a scalar (subtracts the scalar from every component), returning a copy.

This is the immutable form of the function subtractScalar(). This will return a new vector, and will not modify
this vector.

#### dividedScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #dividedScalar data-toc-label='dividedScalar' }

Division of this vector by a scalar (divides every component by the scalar), returning a copy.

This is the immutable form of the function divideScalar(). This will return a new vector, and will not modify
this vector.

#### negated() : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #negated data-toc-label='negated' }

Negated copy of this vector (multiplies every component by -1).

This is the immutable form of the function negate(). This will return a new vector, and will not modify
this vector.


#### blend( vector : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span>, ratio : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #blend data-toc-label='blend' }

A linear interpolation between this vector (ratio=0) and another vector (ratio=1).

@param vector
@param ratio - Not necessarily constrained in [0, 1]

#### average( vector : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #average data-toc-label='average' }

The average (midpoint) between this vector and another vector.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Debugging string for the vector.

#### toVector3() : <span style="font-weight: 400;">[Vector3](../dot/Vector3.md)</span> {: #toVector3 data-toc-label='toVector3' }

Converts this to a 3-dimensional vector, discarding the w-component.

#### setXYZW( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #setXYZW data-toc-label='setXYZW' }

Sets all of the components of this vector, returning this.

#### setX( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #setX data-toc-label='setX' }

Sets the x-component of this vector, returning this.

#### setY( y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #setY data-toc-label='setY' }

Sets the y-component of this vector, returning this.

#### setZ( z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #setZ data-toc-label='setZ' }

Sets the z-component of this vector, returning this.

#### setW( w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #setW data-toc-label='setW' }

Sets the w-component of this vector, returning this.

#### set( v : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #set data-toc-label='set' }

Sets this vector to be a copy of another vector.

This is the mutable form of the function copy(). This will mutate (change) this vector, in addition to returning
this vector itself.

#### setMagnitude( magnitude : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #setMagnitude data-toc-label='setMagnitude' }

Sets the magnitude of this vector. If the passed-in magnitude is negative, this flips the vector and sets its
magnitude to abs( magnitude ).

This is the mutable form of the function withMagnitude(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### add( v : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #add data-toc-label='add' }

Adds another vector to this vector, changing this vector.

This is the mutable form of the function plus(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### addXYZW( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #addXYZW data-toc-label='addXYZW' }

Adds another vector (x,y,z,w) to this vector, changing this vector.

This is the mutable form of the function plusXYZW(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### addScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #addScalar data-toc-label='addScalar' }

Adds a scalar to this vector (added to every component), changing this vector.

This is the mutable form of the function plusScalar(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### subtract( v : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #subtract data-toc-label='subtract' }

Subtracts this vector by another vector, changing this vector.

This is the mutable form of the function minus(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### subtractXYZW( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #subtractXYZW data-toc-label='subtractXYZW' }

Subtracts this vector by another vector (x,y,z,w), changing this vector.

This is the mutable form of the function minusXYZW(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### subtractScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #subtractScalar data-toc-label='subtractScalar' }

Subtracts this vector by a scalar (subtracts each component by the scalar), changing this vector.

This is the mutable form of the function minusScalar(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### multiplyScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #multiplyScalar data-toc-label='multiplyScalar' }

Multiplies this vector by a scalar (multiplies each component by the scalar), changing this vector.

This is the mutable form of the function timesScalar(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### multiply( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #multiply data-toc-label='multiply' }

Multiplies this vector by a scalar (multiplies each component by the scalar), changing this vector.
Same as multiplyScalar.

This is the mutable form of the function times(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### componentMultiply( v : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #componentMultiply data-toc-label='componentMultiply' }

Multiplies this vector by another vector component-wise, changing this vector.

This is the mutable form of the function componentTimes(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### divideScalar( scalar : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #divideScalar data-toc-label='divideScalar' }

Divides this vector by a scalar (divides each component by the scalar), changing this vector.

This is the mutable form of the function dividedScalar(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### negate() : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #negate data-toc-label='negate' }

Negates this vector (multiplies each component by -1), changing this vector.

This is the mutable form of the function negated(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### normalize() : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #normalize data-toc-label='normalize' }

Normalizes this vector (rescales to where the magnitude is 1), changing this vector.

This is the mutable form of the function normalized(). This will mutate (change) this vector, in addition to
returning this vector itself.

#### roundSymmetric() : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #roundSymmetric data-toc-label='roundSymmetric' }

Rounds each component of this vector with Utils.roundSymmetric.

This is the mutable form of the function roundedSymmetric(). This will mutate (change) this vector, in addition
to returning the vector itself.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #x data-toc-label='x' }

The X coordinate of the vector.

#### y : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #y data-toc-label='y' }

The Y coordinate of the vector.

#### z : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #z data-toc-label='z' }

The Z coordinate of the vector.

#### w : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #w data-toc-label='w' }

The W coordinate of the vector.

#### isVector4 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isVector4 data-toc-label='isVector4' }

#### dimension : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #dimension data-toc-label='dimension' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)

#### ZERO : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #ZERO data-toc-label='ZERO' }

#### X_UNIT : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #X_UNIT data-toc-label='X_UNIT' }

#### Y_UNIT : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #Y_UNIT data-toc-label='Y_UNIT' }

#### Z_UNIT : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #Z_UNIT data-toc-label='Z_UNIT' }

#### W_UNIT : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #W_UNIT data-toc-label='W_UNIT' }



## Source Code

See the source for [Vector4.ts](https://github.com/phetsims/dot/blob/main/js/Vector4.ts) in the [dot](https://github.com/phetsims/dot) repository.
