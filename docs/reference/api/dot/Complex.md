# Complex

## Overview

A complex number with mutable and immutable methods.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Chris Malley (PixelZoom, Inc.)
@author Matt Pennington (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class Complex {: #Complex }


```js
import { Complex } from 'scenerystack/dot';
```
### Constructor

#### new Complex( real : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, imaginary : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Complex-constructor data-toc-label='new Complex' }

### Instance Methods

#### copy( complex? : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #copy data-toc-label='copy' }

Creates a copy of this complex, or if a complex is passed in, set that complex's values to ours.

This is the immutable form of the function set(), if a complex is provided. This will return a new complex, and
will not modify this complex.

@param [complex] - If not provided, creates a new Complex with filled in values. Otherwise, fills
                             in the values of the provided complex so that it equals this complex.

#### phase() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #phase data-toc-label='phase' }

The phase / argument of the complex number.

#### getMagnitude() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMagnitude data-toc-label='getMagnitude' }

The magnitude (Euclidean/L2 Norm) of this complex number, i.e. $\sqrt{a^2+b^2}$.

#### getMagnitudeSquared() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getMagnitudeSquared data-toc-label='getMagnitudeSquared' }

The squared magnitude (square of the Euclidean/L2 Norm) of this complex, i.e. $a^2+b^2$.

#### getArgument() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getArgument data-toc-label='getArgument' }

Returns the argument of this complex number (immutable)

#### equals( other : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

Exact equality comparison between this Complex and another Complex.

@returns Whether the two complex numbers have equal components

#### equalsEpsilon( other : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span>, epsilon ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsEpsilon data-toc-label='equalsEpsilon' }

Approximate equality comparison between this Complex and another Complex.

@returns - Whether difference between the two complex numbers has no component with an absolute value
           greater than epsilon.

#### plus( c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #plus data-toc-label='plus' }

Addition of this Complex and another Complex, returning a copy.

This is the immutable form of the function add(). This will return a new Complex, and will not modify
this Complex.

#### minus( c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #minus data-toc-label='minus' }

Subtraction of this Complex by another Complex c, returning a copy.

This is the immutable form of the function subtract(). This will return a new Complex, and will not modify
this Complex.

#### times( c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #times data-toc-label='times' }

Complex multiplication.
Immutable version of multiply

#### dividedBy( c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #dividedBy data-toc-label='dividedBy' }

Complex division.
Immutable version of divide

#### negated() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #negated data-toc-label='negated' }

Complex negation
Immutable version of negate

#### sqrtOf() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #sqrtOf data-toc-label='sqrtOf' }

Square root.
Immutable form of sqrt.


#### powerByReal( realPower : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #powerByReal data-toc-label='powerByReal' }

Returns the power of this complex number by a real number.

#### sinOf() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #sinOf data-toc-label='sinOf' }

Sine.
Immutable form of sin.


#### cosOf() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #cosOf data-toc-label='cosOf' }

Cosine.
Immutable form of cos.


#### squared() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #squared data-toc-label='squared' }

Returns the square of this complex number and does not modify it.
This is the immutable version of square.


#### conjugated() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #conjugated data-toc-label='conjugated' }

Complex conjugate.
Immutable form of conjugate


#### exponentiated() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #exponentiated data-toc-label='exponentiated' }

Takes e to the power of this complex number. $e^{a+bi}=e^a\cos b + i\sin b$.
This is the immutable form of exponentiate.


#### setRealImaginary( real : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, imaginary : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #setRealImaginary data-toc-label='setRealImaginary' }

Sets all components of this complex, returning this


#### setReal( real : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #setReal data-toc-label='setReal' }

Sets the real component of this complex, returning this

#### setImaginary( imaginary : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #setImaginary data-toc-label='setImaginary' }

Sets the imaginary component of this complex, returning this

#### set( c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #set data-toc-label='set' }

Sets the components of this complex to be a copy of the parameter

This is the mutable form of the function copy(). This will mutate (change) this complex, in addition to returning
this complex itself.

#### setPolar( magnitude : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, phase : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #setPolar data-toc-label='setPolar' }

Sets this Complex's value to be the a,b values matching the given magnitude and phase (in radians), changing
this Complex, and returning itself.

@param magnitude
@param phase - In radians

#### add( c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #add data-toc-label='add' }

Addition of this Complex and another Complex, returning a copy.

This is the mutable form of the function plus(). This will modify and return this.

#### subtract( c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #subtract data-toc-label='subtract' }

Subtraction of another Complex from this Complex, returning a copy.

This is the mutable form of the function minus(). This will modify and return this.

#### multiply( c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #multiply data-toc-label='multiply' }

Mutable Complex multiplication.

#### divide( c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #divide data-toc-label='divide' }

Mutable Complex division. The immutable form is dividedBy.

#### negate() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #negate data-toc-label='negate' }

Mutable Complex negation


#### exponentiate() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #exponentiate data-toc-label='exponentiate' }

Sets this Complex to e to the power of this complex number. $e^{a+bi}=e^a\cos b + i\sin b$.
This is the mutable version of exponentiated


#### square() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #square data-toc-label='square' }

Squares this complex number.
This is the mutable version of squared.


#### sqrt() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #sqrt data-toc-label='sqrt' }

Square root.
Mutable form of sqrtOf.


#### sin() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #sin data-toc-label='sin' }

Sine.
Mutable form of sinOf.


#### cos() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #cos data-toc-label='cos' }

Cosine.
Mutable form of cosOf.


#### conjugate() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #conjugate data-toc-label='conjugate' }

Complex conjugate.
Mutable form of conjugated


#### getCubeRoots() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)[]</span> {: #getCubeRoots data-toc-label='getCubeRoots' }

Returns the cube roots of this complex number.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Debugging string for the complex number (provides real and imaginary parts).

### Instance Properties

#### real : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #real data-toc-label='real' }

The real part. For a complex number $a+bi$, this is $a$.

#### imaginary : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #imaginary data-toc-label='imaginary' }

The imaginary part. For a complex number $a+bi$, this is $b$.

### Static Methods

#### real( real : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #real data-toc-label='real' }

Constructs a complex number from just the real part (assuming the imaginary part is 0).

#### imaginary( imaginary : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #imaginary data-toc-label='imaginary' }

Constructs a complex number from just the imaginary part (assuming the real part is 0).

#### createPolar( magnitude : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, phase : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #createPolar data-toc-label='createPolar' }

Constructs a complex number from the polar form. For a magnitude $r$ and phase $\varphi$, this will be
$\cos\varphi+i r\sin\varphi$.

#### solveLinearRoots( a : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span>, b : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #solveLinearRoots data-toc-label='solveLinearRoots' }

Returns an array of the roots of the quadratic equation $ax + b=0$, or null if every value is a solution.

@returns The roots of the equation, or null if all values are roots.

#### solveQuadraticRoots( a : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span>, b : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span>, c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #solveQuadraticRoots data-toc-label='solveQuadraticRoots' }

Returns an array of the roots of the quadratic equation $ax^2 + bx + c=0$, or null if every value is a
solution.

@returns The roots of the equation, or null if all values are roots (if multiplicity&gt;1, returns multiple copies)

#### solveCubicRoots( a : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span>, b : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span>, c : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span>, d : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #solveCubicRoots data-toc-label='solveCubicRoots' }

Returns an array of the roots of the cubic equation $ax^3 + bx^2 + cx + d=0$, or null if every value is a
solution.

@returns The roots of the equation, or null if all values are roots (if multiplicity&gt;1, returns multiple copies)

### Static Properties

#### ZERO : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #ZERO data-toc-label='ZERO' }

(readonly)

Immutable constant $0$.
@constant

#### ONE : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #ONE data-toc-label='ONE' }

(readonly)

Immutable constant $1$.
@constant

#### I : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #I data-toc-label='I' }

(readonly)

Immutable constant $i$, the imaginary unit.
@constant



## Source Code

See the source for [Complex.ts](https://github.com/phetsims/dot/blob/main/js/Complex.ts) in the [dot](https://github.com/phetsims/dot) repository.
