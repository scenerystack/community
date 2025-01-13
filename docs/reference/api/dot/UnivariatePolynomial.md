# UnivariatePolynomial

## Overview

Handles a univariate polynomial (a polynomial with one variable), like 2x^2 + 6x + 4.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class UnivariatePolynomial {: #UnivariatePolynomial }


```js
import { UnivariatePolynomial } from 'scenerystack/dot';
```
### Constructor

#### new UnivariatePolynomial( coefficients : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### plus( polynomial : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> ) : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> {: #plus data-toc-label='plus' }

#### minus( polynomial : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> ) : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> {: #minus data-toc-label='minus' }

#### times( polynomial : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> ) : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> {: #times data-toc-label='times' }

#### dividedBy( polynomial : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> ) : <span style="font-weight: 400;">{ quotient: [UnivariatePolynomial](../dot/UnivariatePolynomial.md); remainder: [UnivariatePolynomial](../dot/UnivariatePolynomial.md) }</span> {: #dividedBy data-toc-label='dividedBy' }

#### gcd( polynomial : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> ) : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> {: #gcd data-toc-label='gcd' }

#### equals( polynomial : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

#### getCoefficient( degree : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCoefficient data-toc-label='getCoefficient' }

#### isZero() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isZero data-toc-label='isZero' }

#### getMonicPolynomial() : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> {: #getMonicPolynomial data-toc-label='getMonicPolynomial' }

#### evaluate( x : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #evaluate data-toc-label='evaluate' }

#### evaluateComplex( x : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> ) : <span style="font-weight: 400;">[Complex](../dot/Complex.md)</span> {: #evaluateComplex data-toc-label='evaluateComplex' }

#### getRoots() : <span style="font-weight: 400;">[Complex](../dot/Complex.md)[]</span> {: #getRoots data-toc-label='getRoots' }

### Instance Properties

#### coefficients : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #coefficients data-toc-label='coefficients' }

(readonly)

### Static Methods

#### singleCoefficient( coefficient : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, degree : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> {: #singleCoefficient data-toc-label='singleCoefficient' }

### Static Properties

#### ZERO : <span style="font-weight: 400;">[UnivariatePolynomial](../dot/UnivariatePolynomial.md)</span> {: #ZERO data-toc-label='ZERO' }

(readonly)



## Source Code

See the source for [UnivariatePolynomial.ts](https://github.com/phetsims/dot/blob/main/js/UnivariatePolynomial.ts) in the [dot](https://github.com/phetsims/dot) repository.
