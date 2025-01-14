# DampedAnimation

## Overview

WARNING: PROTOTYPE, see https://github.com/phetsims/twixt/issues/3 before using!
Not fully documented or stabilized. May be deleted.

Handles a single dimension of damped harmonic-oscillator motion (like a damped spring pulling towards the target).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DampedAnimation {: #DampedAnimation }


```js
import { DampedAnimation } from 'scenerystack/twixt';
```
### Constructor

#### new DampedAnimation( providedOptions? : <span style="font-weight: 400;">[DampedAnimationOptions](../twixt/DampedAnimation.md#DampedAnimationOptions)</span> ) {: #DampedAnimation-constructor data-toc-label='new DampedAnimation' }

### Instance Methods

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

Steps the animation forward in time.

### Instance Properties

#### valueProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #valueProperty data-toc-label='valueProperty' }

(readonly)

#### velocityProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #velocityProperty data-toc-label='velocityProperty' }

(readonly)

#### timeElapsed {: #timeElapsed data-toc-label='timeElapsed' }



## Type DampedAnimationOptions {: #DampedAnimationOptions }


```js
import type { DampedAnimationOptions } from 'scenerystack/twixt';
```


- **valueProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;
<br>  The current value/position.
- **velocityProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;
<br>  The current derivative of the value
- **damping**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Proportion of damping applied, relative to critical damping. Thus:
  - damping = 1: Critically damped (fastest approach towards the target without overshooting)
  - damping &lt; 1: Underdamped (will overshoot the target with exponentially-decaying oscillation)
  - damping &gt; 1: Overdamped (will approach with an exponential curve)
- **force**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Coefficient that determines the amount of force "pushing" towards the target (will be proportional
  to the distance from the target).
- **targetValue**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The target value that we are animating towards.




## Source Code

See the source for [DampedAnimation.ts](https://github.com/phetsims/twixt/blob/main/js/DampedAnimation.ts) in the [twixt](https://github.com/phetsims/twixt) repository.
