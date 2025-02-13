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

#### new Animation( providedConfig : <span style="font-weight: 400;">[AnimationOptions](../twixt/Animation.md#AnimationOptions)&lt;SelfType, SelfObjectType, TargetTypes, TargetObjectTypes&gt;</span> ) {: #Animation-constructor data-toc-label='new Animation' }

### Instance Methods

#### start( dt? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #start data-toc-label='start' }

Starts the animation (or if it has a delay, sets the animation to start after that delay).

@param [dt] - If provided, step this far into the animation initially.  Used for chaining animations.

#### stop() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #stop data-toc-label='stop' }

Stops the animation (or if waiting for the delay, will not "start" the animation).

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #step data-toc-label='step' }

Steps the animation forward by a certain amount of time.

@param dt - In seconds

#### then( animation : <span style="font-weight: 400;">[Animation](../twixt/Animation.md)</span> ) : <span style="font-weight: 400;">[Animation](../twixt/Animation.md)</span> {: #then data-toc-label='then' }

After this animation is complete, the given animation will be started.

@returns - Returns the passed-in animation so things can be chained nicely.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### runningProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #runningProperty data-toc-label='runningProperty' }

(readonly)

True while the animation is being stepped through (both the delay portion AND the actual animation portion).

#### animatingProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #animatingProperty data-toc-label='animatingProperty' }

(readonly)

True while the animation is actually changing the value (false while waiting for the delay, or while the animation
is not running at all).

#### startEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #startEmitter data-toc-label='startEmitter' }

(readonly)

Fired when the animation is "started" (i.e. when start() is called and the delay, if one is there, starts).

#### beginEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #beginEmitter data-toc-label='beginEmitter' }

(readonly)

Fired when the actual animation of the value begins (i.e. when the delay finishes and the actual animation begins).

#### finishEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #finishEmitter data-toc-label='finishEmitter' }

(readonly)

Fired when the animation finishes naturally (was not abnormally stopped). A {number} is provided as a single
argument to the emit callback, and represents how much "extra" time occurred after the end of the animation. For
example, if you have a 1-second animation and stepped it by 3 seconds, this finished emitter would be called with
2 seconds.

#### stopEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #stopEmitter data-toc-label='stopEmitter' }

(readonly)

Fired when the animation is manually stopped (with stop()). Does NOT fire when it finishes normally.

#### endedEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #endedEmitter data-toc-label='endedEmitter' }

(readonly)

Fired when the animation ends, regardless of whether it fully finished, or was stopped prematurely.

#### updateEmitter : <span style="font-weight: 400;">[Emitter](../axon/Emitter.md)</span> {: #updateEmitter data-toc-label='updateEmitter' }

(readonly)

Fired when (just after) the animation has changed animated values/targets.



## Type AnimationOptions {: #AnimationOptions }


IMPORTANT: See AnimationTarget's config documentation, as those config can be passed in either here, or in
the targets array.

```js
import type { AnimationOptions } from 'scenerystack/twixt';
```


- **targets**?: { [K in keyof TargetTypes]: [AnimationTargetOptions](../twixt/AnimationTarget.md#AnimationTargetOptions)&lt;TargetTypes[K], TargetObjectTypes[K]&gt; } | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Can be provided instead of setValue/property/object, and it contains an array of config-style objects that allows
  animating multiple different things at the same time. See AnimationTarget for details about all of the supported
  config.
  NOTE: speed, if provided, should be only specified on exactly one of the targets' config if multiple targets
  are specified.
- **duration**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, the animation's length will be this value (in seconds). If omitted, one of the targets' `speed` option
  should be set (the length of the animation will be based on that).
- **delay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The amount of time (in seconds) between when the animation is "started" and when the actual animation of the value
  begins. Negative delays are not supported.
- **stepEmitter**?: [TReadOnlyEmitter](../axon/TEmitter.md#TReadOnlyEmitter)&lt;[ <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ]&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  One of the following config:
  The Emitter (which provides a dt {number} value on emit) which drives the animation, or null if the client
  will drive the animation by calling `step(dt)` manually.  Defaults to the axon stepTimer which runs automatically
  as part of the Sim time step.
  TODO #3: {ScreenView} - animates only when the ScreenView is the active one.
  TODO #3: {Node} - animates only when the node's trail is visible on a Display
- &amp; [AnimationTargetOptions](../twixt/AnimationTarget.md#AnimationTargetOptions)&lt;SelfType, SelfObjectType&gt; &amp; [DisposableOptions](../axon/Disposable.md#DisposableOptions)




## Source Code

See the source for [Animation.ts](https://github.com/phetsims/twixt/blob/main/js/Animation.ts) in the [twixt](https://github.com/phetsims/twixt) repository.
