# Emitter

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/axon/blob/main/js/Emitter.ts](https://github.com/phetsims/axon/blob/main/js/Emitter.ts) for the most up-to-date information.

## Overview

Event &amp; listener abstraction for a single "event" type. The type provides extra functionality beyond just notifying
listeners. It adds PhET-iO instrumentation capabilities as well as validation. For the lightest-weight, fastest
solution with the smallest memory footprint, see [TinyEmitter](../axon/TinyEmitter.md).

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class Emitter {: #Emitter }


```js
import { Emitter } from 'scenerystack/axon';
```
### Constructor

#### new Emitter( providedOptions? : <span style="font-weight: 400;">[EmitterOptions](../axon/Emitter.md#EmitterOptions)</span> ) {: #Emitter-constructor data-toc-label='new Emitter' }

### Instance Methods

#### emit( ...args : <span style="font-weight: 400;">T</span> ) {: #emit data-toc-label='emit' }

Emit to notify listeners

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes an Emitter. All listeners are removed.

#### addListener( listener : <span style="font-weight: 400;">[TEmitterListener](../axon/TEmitter.md#TEmitterListener)&lt;T&gt;</span>, options? : <span style="font-weight: 400;">[DisposerOptions](../axon/Disposable.md#DisposerOptions)</span> ) {: #addListener data-toc-label='addListener' }

Adds a listener which will be called during emit.

#### removeListener( listener : <span style="font-weight: 400;">[TEmitterListener](../axon/TEmitter.md#TEmitterListener)&lt;T&gt;</span> ) {: #removeListener data-toc-label='removeListener' }

Removes a listener

#### removeAllListeners() {: #removeAllListeners data-toc-label='removeAllListeners' }

Removes all the listeners

#### hasListener( listener : <span style="font-weight: 400;">[TEmitterListener](../axon/TEmitter.md#TEmitterListener)&lt;T&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasListener data-toc-label='hasListener' }

Checks whether a listener is registered with this Emitter

#### hasListeners() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasListeners data-toc-label='hasListeners' }

Returns true if there are any listeners.

#### getListenerCount() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getListenerCount data-toc-label='getListenerCount' }

Returns the number of listeners.

#### debug( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[TEmitterListener](../axon/TEmitter.md#TEmitterListener)&lt;T&gt;</span> {: #debug data-toc-label='debug' }

Convenience function for debugging a Property's value. It prints the new value on registration and when changed.
@param name - debug name to be printed on the console
@returns - the handle to the listener added in case it needs to be removed later

### Static Properties

#### EmitterIO {: #EmitterIO data-toc-label='EmitterIO' }

(readonly)

PhET-iO Type for Emitter.

Providing validators to instrumented Emitters:
Instrumented Emitters should have their `validators` for each argument passed via EmitterIO (the phetioType).
To provide validators, there are two methods. First, by default each IOType has its own
validator that will be used. So specifying an argument object like `{ type: NumberIO }` will automatically use
`NumberIO.validator` as the validator. This can be overridden with the `validator` key (second option), like
{ type: NumberIO, validator: { isValidValue: v=&gt; typeof v === 'number' &amp;&amp;  v &lt; 5 } }`
NOTE: currently the implementation is either/or, if a validator is provided via the `validator` key, the validator
from the `type` will be ignored.
see https://github.com/phetsims/axon/issues/204 for more details.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)
@author Andrew Adare (PhET Interactive Simulations)



## Type EmitterOptions {: #EmitterOptions }


```js
import type { EmitterOptions } from 'scenerystack/axon';
```


Pick&lt;[TinyEmitterOptions](../axon/TinyEmitter.md#TinyEmitterOptions), "reentrantNotificationStrategy"&gt; &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[PhetioDataHandlerOptions](../tandem/PhetioDataHandler.md#PhetioDataHandlerOptions), "phetioOuterType"&gt;



## Source Code

See the source for [Emitter.ts](https://github.com/phetsims/axon/blob/main/js/Emitter.ts) in the [axon](https://github.com/phetsims/axon) repository.
