# VarianceNumberProperty

## Overview

A Property in which the output can be variable depending on a provided function. Statistical variation is quite
helpful in PhET sims to convey "real world" settings.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class VarianceNumberProperty {: #VarianceNumberProperty }


```js
import { VarianceNumberProperty } from 'scenerystack/axon';
```
### Constructor

#### new VarianceNumberProperty( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, computeVariance : <span style="font-weight: 400;">VarianceComputer</span>, options? : <span style="font-weight: 400;">VarianceNumberPropertyOptions</span> ) {: #VarianceNumberProperty-constructor data-toc-label='new VarianceNumberProperty' }

### Instance Methods

#### getRandomizedValue() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRandomizedValue data-toc-label='getRandomizedValue' }

### Instance Properties

#### computeVariance : <span style="font-weight: 400;">VarianceComputer | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #computeVariance data-toc-label='computeVariance' }

(readonly)



## Source Code

See the source for [VarianceNumberProperty.ts](https://github.com/phetsims/axon/blob/main/js/VarianceNumberProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
