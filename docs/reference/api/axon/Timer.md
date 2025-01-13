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

#### setTimeout( listener : <span style="font-weight: 400; opacity: 80%;">() =&gt; void</span>, timeout : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">TimerListener</span> {: #setTimeout data-toc-label='setTimeout' }

Adds a listener to be called back once after the specified time in milliseconds
@param listener - called with no arguments
@param timeout in milliseconds
@returns an internally-wrapped listener which can be removed with clearTimeout

#### clearTimeout( listener : <span style="font-weight: 400; opacity: 80%;">TimerListener</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #clearTimeout data-toc-label='clearTimeout' }

Clear a scheduled timeout. If there was no timeout, nothing is done.

#### setInterval( listener : <span style="font-weight: 400; opacity: 80%;">() =&gt; void</span>, interval : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">TimerListener</span> {: #setInterval data-toc-label='setInterval' }

Adds a listener to be called at specified intervals (in milliseconds)
@param listener - called with no arguments
@param interval - in milliseconds
@returns an internally-wrapped listener which can be removed with clearInterval

#### clearInterval( listener : <span style="font-weight: 400; opacity: 80%;">TimerListener</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #clearInterval data-toc-label='clearInterval' }

Clear a scheduled interval. If there was no interval, nothing is done.

#### runOnNextTick( listener : <span style="font-weight: 400; opacity: 80%;">() =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #runOnNextTick data-toc-label='runOnNextTick' }

Run a callback on the next frame. This method is largely for clarity.



## Source Code

See the source for [Timer.ts](https://github.com/phetsims/axon/blob/main/js/Timer.ts) in the [axon](https://github.com/phetsims/axon) repository.
