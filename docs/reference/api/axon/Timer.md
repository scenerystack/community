# Timer

## Overview

Timer so that other modules can run timing related code through the simulation's requestAnimationFrame. Use its
Emitter interface for adding/removing listeners.

@author Sam Reid (PhET Interactive Simulations)

## Class Timer {: #Timer }


```js
import { Timer } from 'scenerystack/axon';
```
### Instance Methods

#### setTimeout( listener : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, timeout : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[TimerListener](../axon/Timer.md#TimerListener)</span> {: #setTimeout data-toc-label='setTimeout' }

Adds a listener to be called back once after the specified time in milliseconds
@param listener - called with no arguments
@param timeout in milliseconds
@returns an internally-wrapped listener which can be removed with clearTimeout

#### clearTimeout( listener : <span style="font-weight: 400;">[TimerListener](../axon/Timer.md#TimerListener)</span> ) {: #clearTimeout data-toc-label='clearTimeout' }

Clear a scheduled timeout. If there was no timeout, nothing is done.

#### setInterval( listener : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, interval : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[TimerListener](../axon/Timer.md#TimerListener)</span> {: #setInterval data-toc-label='setInterval' }

Adds a listener to be called at specified intervals (in milliseconds)
@param listener - called with no arguments
@param interval - in milliseconds
@returns an internally-wrapped listener which can be removed with clearInterval

#### clearInterval( listener : <span style="font-weight: 400;">[TimerListener](../axon/Timer.md#TimerListener)</span> ) {: #clearInterval data-toc-label='clearInterval' }

Clear a scheduled interval. If there was no interval, nothing is done.

#### runOnNextTick( listener : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #runOnNextTick data-toc-label='runOnNextTick' }

Run a callback on the next frame. This method is largely for clarity.



## Type TimerListener {: #TimerListener }


```js
import type { TimerListener } from 'scenerystack/axon';
```


( dt: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Source Code

See the source for [Timer.ts](https://github.com/phetsims/axon/blob/main/js/Timer.ts) in the [axon](https://github.com/phetsims/axon) repository.
