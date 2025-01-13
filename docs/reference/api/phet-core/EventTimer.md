# EventTimer

## Overview

Abstraction for timed-event series that helps with variable frame-rates. Useful for things that need to happen at a
specific rate real-time regardless of the frame-rate.

An EventTimer is created with a specific event "model" that determines when events occur, and a callback that will
be triggered for each event (with its time elapsed since it should have occurred). Thus, each callback basically
says:
- "an event happened &lt;timeElapsed&gt; ago"

To have the EventTimer step forward in time (firing callbacks for every event that would have occurred over that
time frame, if any), call step( realTimeElapsed ).

-----------------------------------------

For example, create a timer with a constant rate that will fire events every 1 time units:

var timer = new phet.phetCore.EventTimer( new phetCore.ConstantEventModel( 1 ), function( timeElapsed ) {
  console.log( 'event with timeElapsed: ' + timeElapsed );
} );

Stepping once for 1.5 time units will fire once (0.5 seconds since the "end" of the step), and will be 0.5 seconds
from the next step:

timer.step( 1.5 );
&gt; event with timeElapsed: 0.5

The 0.5 above is because after 1.5 seconds of time, the event will have happened 0.5 seconds ago:

          step 1.5
|------------------------&gt;|
|                *        |          *                     *    &lt;- constant time of 1 between each event
|                &lt;--------|
                0.5 seconds past the event now

Stepping for a longer time will result in more events:

timer.step( 6 );
&gt; event with timeElapsed: 5.5
&gt; event with timeElapsed: 4.5
&gt; event with timeElapsed: 3.5
&gt; event with timeElapsed: 2.5
&gt; event with timeElapsed: 1.5
&gt; event with timeElapsed: 0.5

      step 1.5                                  step 6                                 step 0   step 1.5
|----------------&gt;|----------------------------------------------------------------------&gt;|----------------&gt;|
|           *           *           *           *           *           *           *           *           *
|           &lt;-----|     &lt;-----------------------------------------------------------------|     &lt;-----------|
|          0.5         5.5          &lt;-----------------------------------------------------|     1           0
|           ^           ^          4.5          &lt;-----------------------------------------|              event at
|           |           |                      3.5          &lt;-----------------------------|              current
|           |           |                                  2.5          &lt;-----------------|              time
|     callback( t ) called, etc.                                       1.5          &lt;-----|
|

A step with zero time will trigger no events:

timer.step( 0 );

The timer will fire an event once it reaches the exact point in time:

timer.step( 1.5 );
&gt; event with timeElapsed: 1
&gt; event with timeElapsed: 0

NOTE:
If your timer callbacks create model objects that would also get stepped forward, make sure to step forward objects
before calling eventTimer.step(), so that objects don't get stepped twice. Usually the callback will have:
- var modelElement = new ModelElement();
- modelElement.step( callbackTimeElapsed );
And you don't want to apply step( dt ) to it directly afterwards.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class EventTimer {: #EventTimer }


```js
import { EventTimer } from 'scenerystack/phet-core';
```
### Constructor

#### new EventTimer( eventModel : <span style="font-weight: 400;">{ getPeriodBeforeNextEvent: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> }</span>, eventCallback : <span style="font-weight: 400;">( timeElapsed: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

Steps the timer forward by a certain amount of time. This may cause 0 or more events to actually occur.

#### getRatio() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getRatio data-toc-label='getRatio' }

Returns how far we are to the next event firing (where 0 is an event "just" fired, and 1 is the next event
firing).

@returns In the range [0,1). Is inclusive for 0, but exclusive for 1.



## Source Code

See the source for [EventTimer.ts](https://github.com/phetsims/phet-core/blob/main/js/EventTimer.ts) in the [phet-core](https://github.com/phetsims/phet-core) repository.
