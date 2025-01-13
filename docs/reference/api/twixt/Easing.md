# Easing

## Overview

An Easing represents a function from the range [0,1] =&gt; [0,1] where f(0)=0 and f(1)=1. It is helpful for animation,
to give a more 'natural' feeling.

Contains an implementation of generalized polynomial easing functions (where the 'in' version simply takes the input
to a specific power, and other functions are generalized). These should be equivalent to the polynomial tweens that
TWEEN.js uses, where t is The linear ratio [0,1] of the animation.

TODO #23 create unit tests

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Easing {: #Easing }


```js
import { Easing } from 'scenerystack/twixt';
```
### Constructor

#### new Easing( value : <span style="font-weight: 400; opacity: 80%;">NumberFunction</span>, derivative : <span style="font-weight: 400; opacity: 80%;">NumberFunction</span>, secondDerivative : <span style="font-weight: 400; opacity: 80%;">NumberFunction</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods



### Static Methods

#### polynomialEaseInValue( n : <span style="font-weight: 400; opacity: 80%;">number</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #polynomialEaseInValue data-toc-label='polynomialEaseInValue' }

The "polynomial ease in" function.

@param n - The degree of the polynomial (does not have to be an integer!)
@param t - The linear ratio [0,1] of the animation

#### polynomialEaseOutValue( n : <span style="font-weight: 400; opacity: 80%;">number</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #polynomialEaseOutValue data-toc-label='polynomialEaseOutValue' }

The "polynomial ease out" function.

@param n - The degree of the polynomial (does not have to be an integer!)
@param t - The linear ratio [0,1] of the animation

#### polynomialEaseInOutValue( n : <span style="font-weight: 400; opacity: 80%;">number</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #polynomialEaseInOutValue data-toc-label='polynomialEaseInOutValue' }

The "polynomial ease in-out" function.

@param n - The degree of the polynomial (does not have to be an integer!)
@param t - The linear ratio [0,1] of the animation

#### polynomialEaseInDerivative( n : <span style="font-weight: 400; opacity: 80%;">number</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #polynomialEaseInDerivative data-toc-label='polynomialEaseInDerivative' }

The derivative of the "polynomial ease in" function.

@param n - The degree of the polynomial (does not have to be an integer!)
@param t - The linear ratio [0,1] of the animation

#### polynomialEaseOutDerivative( n : <span style="font-weight: 400; opacity: 80%;">number</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #polynomialEaseOutDerivative data-toc-label='polynomialEaseOutDerivative' }

The derivative of the "polynomial ease out" function.

@param n - The degree of the polynomial (does not have to be an integer!)
@param t - The linear ratio [0,1] of the animation

#### polynomialEaseInOutDerivative( n : <span style="font-weight: 400; opacity: 80%;">number</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #polynomialEaseInOutDerivative data-toc-label='polynomialEaseInOutDerivative' }

The derivative of the "polynomial ease in-out" function.

@param n - The degree of the polynomial (does not have to be an integer!)
@param t - The linear ratio [0,1] of the animation

#### polynomialEaseInSecondDerivative( n : <span style="font-weight: 400; opacity: 80%;">number</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #polynomialEaseInSecondDerivative data-toc-label='polynomialEaseInSecondDerivative' }

The second derivative of the "polynomial ease in" function.

@param n - The degree of the polynomial (does not have to be an integer!)
@param t - The linear ratio [0,1] of the animation

#### polynomialEaseOutSecondDerivative( n : <span style="font-weight: 400; opacity: 80%;">number</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #polynomialEaseOutSecondDerivative data-toc-label='polynomialEaseOutSecondDerivative' }

The second derivative of the "polynomial ease out" function.

@param n - The degree of the polynomial (does not have to be an integer!)
@param t - The linear ratio [0,1] of the animation

#### polynomialEaseInOutSecondDerivative( n : <span style="font-weight: 400; opacity: 80%;">number</span>, t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #polynomialEaseInOutSecondDerivative data-toc-label='polynomialEaseInOutSecondDerivative' }

The second derivative of the "polynomial ease in-out" function.

@param n - The degree of the polynomial (does not have to be an integer!)
@param t - The linear ratio [0,1] of the animation

#### polynomialEaseIn( n : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Easing</span> {: #polynomialEaseIn data-toc-label='polynomialEaseIn' }

Creates a polynomial "in" easing (smooth start)

@param n - The degree of the polynomial (does not have to be an integer!)

#### polynomialEaseOut( n : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Easing</span> {: #polynomialEaseOut data-toc-label='polynomialEaseOut' }

Creates a polynomial "out" easing (smooth end)

@param n - The degree of the polynomial (does not have to be an integer!)

#### polynomialEaseInOut( n : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Easing</span> {: #polynomialEaseInOut data-toc-label='polynomialEaseInOut' }

Creates a polynomial "in-out" easing (smooth start and end)

@param n - The degree of the polynomial (does not have to be an integer!)

### Static Properties

#### LINEAR {: #LINEAR data-toc-label='LINEAR' }

(readonly)

The identity easing

#### QUADRATIC_IN {: #QUADRATIC_IN data-toc-label='QUADRATIC_IN' }

(readonly)

Quadratic-derived easings (t^2)

#### QUADRATIC_OUT {: #QUADRATIC_OUT data-toc-label='QUADRATIC_OUT' }

(readonly)

#### QUADRATIC_IN_OUT {: #QUADRATIC_IN_OUT data-toc-label='QUADRATIC_IN_OUT' }

(readonly)

#### CUBIC_IN {: #CUBIC_IN data-toc-label='CUBIC_IN' }

(readonly)

Cubic-derived easings (t^3)

#### CUBIC_OUT {: #CUBIC_OUT data-toc-label='CUBIC_OUT' }

(readonly)

#### CUBIC_IN_OUT {: #CUBIC_IN_OUT data-toc-label='CUBIC_IN_OUT' }

(readonly)

#### QUARTIC_IN {: #QUARTIC_IN data-toc-label='QUARTIC_IN' }

(readonly)

Quartic-derived easings (t^4)

#### QUARTIC_OUT {: #QUARTIC_OUT data-toc-label='QUARTIC_OUT' }

(readonly)

#### QUARTIC_IN_OUT {: #QUARTIC_IN_OUT data-toc-label='QUARTIC_IN_OUT' }

(readonly)

#### QUINTIC_IN {: #QUINTIC_IN data-toc-label='QUINTIC_IN' }

(readonly)

Quintic-derived easings (t^5)

#### QUINTIC_OUT {: #QUINTIC_OUT data-toc-label='QUINTIC_OUT' }

(readonly)

#### QUINTIC_IN_OUT {: #QUINTIC_IN_OUT data-toc-label='QUINTIC_IN_OUT' }

(readonly)



## Source Code

See the source for [Easing.ts](https://github.com/phetsims/twixt/blob/main/js/Easing.ts) in the [twixt](https://github.com/phetsims/twixt) repository.
