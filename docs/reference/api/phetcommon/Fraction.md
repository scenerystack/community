# Fraction

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/phetcommon/blob/main/js/model/Fraction.ts](https://github.com/phetsims/phetcommon/blob/main/js/model/Fraction.ts) for the most up-to-date information.

## Overview

A fraction and associated operations.

NOTE: The common version of this class in the PhET Java code base has a number of additional methods.  These methods
should be ported into this file as needed.  Please see edu.colorado.phet.fractions.common.math.Fraction.java in the
PhET Java code base.

@author John Blanco
@author Chris Malley (PixelZoom, Inc.)
@author Sam Reid (PhET Interactive Simulations)

## Class Fraction {: #Fraction }


```js
import { Fraction } from 'scenerystack/phetcommon';
```
### Constructor

#### new Fraction( numerator : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, denominator : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Fraction-constructor data-toc-label='new Fraction' }

### Instance Methods

#### getValue() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getValue data-toc-label='getValue' }

Computes the numeric value of the fraction.
Floating-point error is not an issue as long as numerator and denominator are integers &lt; 2^53.

#### isInteger() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isInteger data-toc-label='isInteger' }

Does this fraction reduce to an integer value?

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

#### copy() : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #copy data-toc-label='copy' }

#### reduce() : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #reduce data-toc-label='reduce' }

Reduces this fraction, modifies the numerator and denominator.

#### reduced() : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #reduced data-toc-label='reduced' }

Creates a reduced instance of this fraction.

#### isReduced() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isReduced data-toc-label='isReduced' }

Is this fraction reduced?

#### equals( fraction : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

Returns whether the two fractions are equal (not whether their reduced values are equal).

#### isLessThan( fraction : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isLessThan data-toc-label='isLessThan' }

Returns whether this fraction has a value that is less than the provided fraction.

#### abs() : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #abs data-toc-label='abs' }

Returns the absolute value of this fraction.

#### set( value : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #set data-toc-label='set' }

Sets the value of this fraction to the provided fraction.

#### setToSum( numerator1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, denominator1 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, numerator2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, denominator2 : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #setToSum data-toc-label='setToSum' }

Sets the value of this fraction to the sum of the two fractions:
numerator1 / denominator1 + numerator2 / denominator2

#### add( value : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #add data-toc-label='add' }

Adds the provided fraction into this fraction (mutates this fraction). The result is NOT reduced,
and has a denominator that is the least-common multiple of the 2 denominators.

#### plus( value : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #plus data-toc-label='plus' }

Adds a fraction to this fraction to create a new fraction.
The result is not reduced, and has a denominator that is the least-common multiple of the 2 denominators.

#### subtract( value : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #subtract data-toc-label='subtract' }

Subtracts the provided fraction from this fraction (mutates this fraction). The result is NOT reduced,
and has a denominator that is the least-common multiple of the 2 denominators.

#### minus( value : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #minus data-toc-label='minus' }

Subtracts a fraction from this fraction to create a new fraction.
The result is not reduced, and has a denominator that is the least-common multiple of the 2 denominators.

#### multiply( value : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #multiply data-toc-label='multiply' }

Multiplies the provided fraction and this fraction, setting the result into this fraction (mutates).
The value is not reduced.

#### times( value : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #times data-toc-label='times' }

Multiplies this fraction by another fraction to create a new fraction.
The result is not reduced.

#### divide( value : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #divide data-toc-label='divide' }

Divides this fraction by the provided fraction, setting the result into this fraction (mutates).
The value is not reduced.

#### divided( value : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #divided data-toc-label='divided' }

Divides this fraction by another fraction to create a new fraction.
The result is not reduced.

#### plusInteger( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #plusInteger data-toc-label='plusInteger' }

Convenience method.
Adds an integer value to this fraction to create a new fraction.
The result is not reduced, and the denominator is the same as the denominator of this fraction.

#### minusInteger( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #minusInteger data-toc-label='minusInteger' }

Convenience method.
Subtracts an integer value from this fraction to create a new fraction.
The result is not reduced, and the denominator is the same as the denominator of this fraction.

#### timesInteger( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #timesInteger data-toc-label='timesInteger' }

Convenience method.
Multiplies this fraction by an integer to create a new fraction.
The result is not reduced, and the denominator is the same as the denominator of this fraction.

#### dividedInteger( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #dividedInteger data-toc-label='dividedInteger' }

Convenience method.
Divides this fraction by an integer to create a new fraction.
This operation affects the value and sign of the denominator only, and the result is not reduced.
Careful! Division by zero is allowed here.

#### toStateObject() : <span style="font-weight: 400;">[FractionStateObject](../phetcommon/Fraction.md#FractionStateObject)</span> {: #toStateObject data-toc-label='toStateObject' }

Serializes this Fraction instance.

### Static Methods

#### fromInteger( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #fromInteger data-toc-label='fromInteger' }

Convenience method for constructing a fraction from an integer.

#### fromDecimal( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #fromDecimal data-toc-label='fromDecimal' }

Convert a number into a Fraction

#### fromStateObject( stateObject : <span style="font-weight: 400;">[FractionStateObject](../phetcommon/Fraction.md#FractionStateObject)</span> ) : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #fromStateObject data-toc-label='fromStateObject' }

Deserializes a Fraction from PhET-iO state.

### Static Properties

#### ZERO : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #ZERO data-toc-label='ZERO' }

(readonly)

#### ONE : <span style="font-weight: 400;">[Fraction](../phetcommon/Fraction.md)</span> {: #ONE data-toc-label='ONE' }

(readonly)

#### FractionIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #FractionIO data-toc-label='FractionIO' }

(readonly)

IOType for Fraction.



## Type FractionStateObject {: #FractionStateObject }


```js
import type { FractionStateObject } from 'scenerystack/phetcommon';
```


- **numerator**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **denominator**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [Fraction.ts](https://github.com/phetsims/phetcommon/blob/main/js/model/Fraction.ts) in the [phetcommon](https://github.com/phetsims/phetcommon) repository.
