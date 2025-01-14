# CallbackTimer

## Overview

CallbackTimer is a timer that calls a set of registered callbacks.
It utilizes AXON/stepTimer, but provides a higher level of abstraction, hiding the details of managing stepTimer.

@author Chris Malley (PixelZoom, Inc.)

## Class CallbackTimer {: #CallbackTimer }


```js
import { CallbackTimer } from 'scenerystack/axon';
```
### Constructor

#### new CallbackTimer( options? : <span style="font-weight: 400;">[CallbackTimerOptions](../axon/CallbackTimer.md#CallbackTimerOptions)</span> ) {: #CallbackTimer-constructor data-toc-label='new CallbackTimer' }

### Instance Methods

#### isRunning() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isRunning data-toc-label='isRunning' }

#### start() {: #start data-toc-label='start' }

#### stop( fire : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #stop data-toc-label='stop' }

Stops the timer.
@param fire - should we fire if we haven't fired already?

#### addCallback( callback : <span style="font-weight: 400;">[CallbackTimerCallback](../axon/CallbackTimer.md#CallbackTimerCallback)</span> ) {: #addCallback data-toc-label='addCallback' }

#### removeCallback( callback : <span style="font-weight: 400;">[CallbackTimerCallback](../axon/CallbackTimer.md#CallbackTimerCallback)</span> ) {: #removeCallback data-toc-label='removeCallback' }

#### fire() {: #fire data-toc-label='fire' }

Calls all callbacks. Clients are free to call this when the timer is not running.

#### dispose() {: #dispose data-toc-label='dispose' }



## Type CallbackTimerCallback {: #CallbackTimerCallback }


```js
import type { CallbackTimerCallback } from 'scenerystack/axon';
```


() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type CallbackTimerOptions {: #CallbackTimerOptions }


```js
import type { CallbackTimerOptions } from 'scenerystack/axon';
```


- **callback**?: [CallbackTimerCallback](../axon/CallbackTimer.md#CallbackTimerCallback)
<br>  convenience for adding 1 callback
- **delay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  start to fire continuously after pressing for this long, in ms
- **interval**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  fire continuously at this interval, in ms




## Source Code

See the source for [CallbackTimer.ts](https://github.com/phetsims/axon/blob/main/js/CallbackTimer.ts) in the [axon](https://github.com/phetsims/axon) repository.
