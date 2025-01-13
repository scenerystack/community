# UnivariatePolynomial

## Overview

Handles a univariate polynomial (a polynomial with one variable), like 2x^2 + 6x + 4.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class UnivariatePolynomial {: #UnivariatePolynomial }


```js
import { UnivariatePolynomial } from 'scenerystack/dot';
```
### Constructor

#### new UnivariatePolynomial( coefficients : <span style="font-weight: 400; opacity: 80%;">number[]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### plus( polynomial : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> ) : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> {: #plus data-toc-label='plus' }

#### minus( polynomial : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> ) : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> {: #minus data-toc-label='minus' }

#### times( polynomial : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> ) : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> {: #times data-toc-label='times' }

#### dividedBy( polynomial : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> ) : <span style="font-weight: 400; opacity: 80%;">{ quotient: UnivariatePolynomial; remainder: UnivariatePolynomial }</span> {: #dividedBy data-toc-label='dividedBy' }

#### gcd( polynomial : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> ) : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> {: #gcd data-toc-label='gcd' }

#### equals( polynomial : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equals data-toc-label='equals' }

#### getCoefficient( degree : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getCoefficient data-toc-label='getCoefficient' }

#### isZero() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isZero data-toc-label='isZero' }

#### getMonicPolynomial() : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> {: #getMonicPolynomial data-toc-label='getMonicPolynomial' }

#### evaluate( x : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #evaluate data-toc-label='evaluate' }

#### evaluateComplex( x : <span style="font-weight: 400; opacity: 80%;">Complex</span> ) : <span style="font-weight: 400; opacity: 80%;">Complex</span> {: #evaluateComplex data-toc-label='evaluateComplex' }

#### getRoots() : <span style="font-weight: 400; opacity: 80%;">Complex[]</span> {: #getRoots data-toc-label='getRoots' }

### Instance Properties

#### coefficients : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #coefficients data-toc-label='coefficients' }

(readonly)

### Static Methods

#### singleCoefficient( coefficient : <span style="font-weight: 400; opacity: 80%;">number</span>, degree : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> {: #singleCoefficient data-toc-label='singleCoefficient' }

### Static Properties

#### ZERO : <span style="font-weight: 400; opacity: 80%;">UnivariatePolynomial</span> {: #ZERO data-toc-label='ZERO' }

(readonly)



## Source Code

See the source for [UnivariatePolynomial.ts](https://github.com/phetsims/dot/blob/main/js/UnivariatePolynomial.ts) in the [dot](https://github.com/phetsims/dot) repository.
