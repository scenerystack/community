# BigRational

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/cag/BigRational.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/BigRational.ts) for the most up-to-date information.

## Overview

Contains an import-style snippet of shader code, with dependencies on other snippets.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BigRational {: #BigRational }


```js
import { BigRational } from 'scenerystack/alpenglow';
```
### Constructor

#### new BigRational( numerator : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, denominator : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #BigRational-constructor data-toc-label='new BigRational' }

### Instance Methods

#### copy() : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #copy data-toc-label='copy' }

#### plus( rational : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> ) : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #plus data-toc-label='plus' }

lazy implementation NOT meant to be in JS due to excess reduction

#### minus( rational : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> ) : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #minus data-toc-label='minus' }

lazy implementation NOT meant to be in JS due to excess reduction

#### times( rational : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> ) : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #times data-toc-label='times' }

lazy implementation NOT meant to be in JS due to excess reduction

#### dividedBy( rational : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> ) : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #dividedBy data-toc-label='dividedBy' }

lazy implementation NOT meant to be in JS due to excess reduction

#### reduce() {: #reduce data-toc-label='reduce' }

#### reduced() : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #reduced data-toc-label='reduced' }

#### isZero() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isZero data-toc-label='isZero' }

#### isNegative() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isNegative data-toc-label='isNegative' }

#### isPositive() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPositive data-toc-label='isPositive' }

#### ratioTest() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #ratioTest data-toc-label='ratioTest' }

#### equalsCrossMul( other : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsCrossMul data-toc-label='equalsCrossMul' }

#### compareCrossMul( other : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #compareCrossMul data-toc-label='compareCrossMul' }

#### equals( other : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

NOT for WGSL, slow

#### toFloat( precision ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #toFloat data-toc-label='toFloat' }

TODO: better way to do this?

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

### Instance Properties

#### numerator : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span></span> {: #numerator data-toc-label='numerator' }

#### denominator : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span></span> {: #denominator data-toc-label='denominator' }

### Static Methods

#### whole( numerator : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span></span> ) : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #whole data-toc-label='whole' }

#### inverse( numerator : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span></span> ) : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #inverse data-toc-label='inverse' }

#### gcdBigInt( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span></span> {: #gcdBigInt data-toc-label='gcdBigInt' }

### Static Properties

#### ZERO : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #ZERO data-toc-label='ZERO' }

(readonly)

#### ONE : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #ONE data-toc-label='ONE' }

(readonly)



## Source Code

See the source for [BigRational.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/BigRational.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
