# BigRational

## Overview

Contains an import-style snippet of shader code, with dependencies on other snippets.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BigRational {: #BigRational }


```js
import { BigRational } from 'scenerystack/alpenglow';
```
### Constructor

#### new BigRational( numerator : <span style="font-weight: 400; opacity: 80%;">bigint | number</span>, denominator : <span style="font-weight: 400; opacity: 80%;">bigint | number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### copy() : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #copy data-toc-label='copy' }

#### plus( rational : <span style="font-weight: 400; opacity: 80%;">BigRational</span> ) : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #plus data-toc-label='plus' }

lazy implementation NOT meant to be in JS due to excess reduction

#### minus( rational : <span style="font-weight: 400; opacity: 80%;">BigRational</span> ) : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #minus data-toc-label='minus' }

lazy implementation NOT meant to be in JS due to excess reduction

#### times( rational : <span style="font-weight: 400; opacity: 80%;">BigRational</span> ) : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #times data-toc-label='times' }

lazy implementation NOT meant to be in JS due to excess reduction

#### dividedBy( rational : <span style="font-weight: 400; opacity: 80%;">BigRational</span> ) : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #dividedBy data-toc-label='dividedBy' }

lazy implementation NOT meant to be in JS due to excess reduction

#### reduce() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reduce data-toc-label='reduce' }

#### reduced() : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #reduced data-toc-label='reduced' }

#### isZero() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isZero data-toc-label='isZero' }

#### isNegative() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isNegative data-toc-label='isNegative' }

#### isPositive() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isPositive data-toc-label='isPositive' }

#### ratioTest() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #ratioTest data-toc-label='ratioTest' }

#### equalsCrossMul( other : <span style="font-weight: 400; opacity: 80%;">BigRational</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsCrossMul data-toc-label='equalsCrossMul' }

#### compareCrossMul( other : <span style="font-weight: 400; opacity: 80%;">BigRational</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #compareCrossMul data-toc-label='compareCrossMul' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">BigRational</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equals data-toc-label='equals' }

NOT for WGSL, slow

#### toFloat( precision ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #toFloat data-toc-label='toFloat' }

TODO: better way to do this?

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

### Instance Properties

#### numerator : <span style="font-weight: 400; opacity: 80%;">bigint</span> {: #numerator data-toc-label='numerator' }

#### denominator : <span style="font-weight: 400; opacity: 80%;">bigint</span> {: #denominator data-toc-label='denominator' }

### Static Methods

#### whole( numerator : <span style="font-weight: 400; opacity: 80%;">number | bigint</span> ) : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #whole data-toc-label='whole' }

#### inverse( numerator : <span style="font-weight: 400; opacity: 80%;">number | bigint</span> ) : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #inverse data-toc-label='inverse' }

#### gcdBigInt( a : <span style="font-weight: 400; opacity: 80%;">bigint</span>, b : <span style="font-weight: 400; opacity: 80%;">bigint</span> ) : <span style="font-weight: 400; opacity: 80%;">bigint</span> {: #gcdBigInt data-toc-label='gcdBigInt' }

### Static Properties

#### ZERO : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #ZERO data-toc-label='ZERO' }

(readonly)

#### ONE : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #ONE data-toc-label='ONE' }

(readonly)



## Source Code

See the source for [BigRational.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/BigRational.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
