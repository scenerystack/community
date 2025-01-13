# DampedHarmonic

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

#### new DampedHarmonic( a : <span style="font-weight: 400; opacity: 80%;">number</span>, b : <span style="font-weight: 400; opacity: 80%;">number</span>, c : <span style="font-weight: 400; opacity: 80%;">number</span>, initialValue : <span style="font-weight: 400; opacity: 80%;">number</span>, initialDerivative : <span style="font-weight: 400; opacity: 80%;">number</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getValue( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getValue data-toc-label='getValue' }

Returns the value of x(t) determined by the differential equation and initial conditions.

#### getDerivative( t : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getDerivative data-toc-label='getDerivative' }

Returns the value of x'(t) determined by the differential equation and initial conditions.



## Source Code

See the source for [DampedHarmonic.ts](https://github.com/phetsims/dot/blob/main/js/DampedHarmonic.ts) in the [dot](https://github.com/phetsims/dot) repository.
