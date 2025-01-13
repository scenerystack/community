# Animation

## Overview

An easing-based controllable animation.

We use some terminology to describe points and regions in time for an animation:

            starts                            begins                                finishes
              |             delay               |             animation                |
time--&gt;       |           (waiting)             |     (animated values changing)       |
---------------------------------------------------------------------------------------------------------------------
              |------------------------------running-----------------------------------|
                                                |-------------animating----------------|

TODO #3: pause/cancel (and stop-&gt;cancel renaming)
TODO #3: function for blending with angular/rotational values
TODO #3: consider keyframed animation helper?
TODO #3: Hooks for attaching/detaching stepping via screens/nodes
TODO #3: Add documentation examples (contingent on how screen/node hooks work)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Animation {: #Animation }


```js
import { Animation } from 'scenerystack/twixt';
```
### Constructor

#### new Animation( providedConfig : <span style="font-weight: 400; opacity: 80%;">AnimationOptions&lt;SelfType, SelfObjectType, TargetTypes, TargetObjectTypes&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### start( dt? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #start data-toc-label='start' }

Starts the animation (or if it has a delay, sets the animation to start after that delay).

@param [dt] - If provided, step this far into the animation initially.  Used for chaining animations.

#### stop() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #stop data-toc-label='stop' }

Stops the animation (or if waiting for the delay, will not "start" the animation).

#### step( dt : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #step data-toc-label='step' }

Steps the animation forward by a certain amount of time.

@param dt - In seconds

#### then( animation : <span style="font-weight: 400; opacity: 80%;">Animation</span> ) : <span style="font-weight: 400; opacity: 80%;">Animation</span> {: #then data-toc-label='then' }

After this animation is complete, the given animation will be started.

@returns - Returns the passed-in animation so things can be chained nicely.

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Instance Properties

#### runningProperty : <span style="font-weight: 400; opacity: 80%;">BooleanProperty</span> {: #runningProperty data-toc-label='runningProperty' }

(readonly)

True while the animation is being stepped through (both the delay portion AND the actual animation portion).

#### animatingProperty : <span style="font-weight: 400; opacity: 80%;">BooleanProperty</span> {: #animatingProperty data-toc-label='animatingProperty' }

(readonly)

True while the animation is actually changing the value (false while waiting for the delay, or while the animation
is not running at all).

#### startEmitter : <span style="font-weight: 400; opacity: 80%;">Emitter</span> {: #startEmitter data-toc-label='startEmitter' }

(readonly)

Fired when the animation is "started" (i.e. when start() is called and the delay, if one is there, starts).

#### beginEmitter : <span style="font-weight: 400; opacity: 80%;">Emitter</span> {: #beginEmitter data-toc-label='beginEmitter' }

(readonly)

Fired when the actual animation of the value begins (i.e. when the delay finishes and the actual animation begins).

#### finishEmitter : <span style="font-weight: 400; opacity: 80%;">Emitter</span> {: #finishEmitter data-toc-label='finishEmitter' }

(readonly)

Fired when the animation finishes naturally (was not abnormally stopped). A {number} is provided as a single
argument to the emit callback, and represents how much "extra" time occurred after the end of the animation. For
example, if you have a 1-second animation and stepped it by 3 seconds, this finished emitter would be called with
2 seconds.

#### stopEmitter : <span style="font-weight: 400; opacity: 80%;">Emitter</span> {: #stopEmitter data-toc-label='stopEmitter' }

(readonly)

Fired when the animation is manually stopped (with stop()). Does NOT fire when it finishes normally.

#### endedEmitter : <span style="font-weight: 400; opacity: 80%;">Emitter</span> {: #endedEmitter data-toc-label='endedEmitter' }

(readonly)

Fired when the animation ends, regardless of whether it fully finished, or was stopped prematurely.

#### updateEmitter : <span style="font-weight: 400; opacity: 80%;">Emitter</span> {: #updateEmitter data-toc-label='updateEmitter' }

(readonly)

Fired when (just after) the animation has changed animated values/targets.



## Source Code

See the source for [Animation.ts](https://github.com/phetsims/twixt/blob/main/js/Animation.ts) in the [twixt](https://github.com/phetsims/twixt) repository.
