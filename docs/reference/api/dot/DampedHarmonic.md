# DampedHarmonic

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/DampedHarmonic.ts](https://github.com/phetsims/dot/blob/main/js/DampedHarmonic.ts) for the most up-to-date information.

## Overview

Solves for a specific solution of a damped harmonic oscillator
(https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator), given the initial value and
derivative.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DampedHarmonic {: #DampedHarmonic }


```js
import { DampedHarmonic } from 'scenerystack/dot';
```
### Constructor

#### new DampedHarmonic( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, c : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, initialValue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, initialDerivative : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #DampedHarmonic-constructor data-toc-label='new DampedHarmonic' }

### Instance Methods

#### getValue( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getValue data-toc-label='getValue' }

Returns the value of x(t) determined by the differential equation and initial conditions.

#### getDerivative( t : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getDerivative data-toc-label='getDerivative' }

Returns the value of x'(t) determined by the differential equation and initial conditions.



## Source Code

See the source for [DampedHarmonic.ts](https://github.com/phetsims/dot/blob/main/js/DampedHarmonic.ts) in the [dot](https://github.com/phetsims/dot) repository.
