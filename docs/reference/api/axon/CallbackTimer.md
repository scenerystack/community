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

#### new CallbackTimer( options? : <span style="font-weight: 400; opacity: 80%;">CallbackTimerOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### isRunning() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isRunning data-toc-label='isRunning' }

#### start() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #start data-toc-label='start' }

#### stop( fire : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #stop data-toc-label='stop' }

Stops the timer.
@param fire - should we fire if we haven't fired already?

#### addCallback( callback : <span style="font-weight: 400; opacity: 80%;">CallbackTimerCallback</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addCallback data-toc-label='addCallback' }

#### removeCallback( callback : <span style="font-weight: 400; opacity: 80%;">CallbackTimerCallback</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeCallback data-toc-label='removeCallback' }

#### fire() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #fire data-toc-label='fire' }

Calls all callbacks. Clients are free to call this when the timer is not running.

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }



## Source Code

See the source for [CallbackTimer.ts](https://github.com/phetsims/axon/blob/main/js/CallbackTimer.ts) in the [axon](https://github.com/phetsims/axon) repository.
