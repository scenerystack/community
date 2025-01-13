# TinyEmitter

## Overview

Lightweight event &amp; listener abstraction for a single event type.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class TinyEmitter {: #TinyEmitter }


```js
import { TinyEmitter } from 'scenerystack/axon';
```
### Constructor

#### new TinyEmitter( onBeforeNotify? : <span style="font-weight: 400;">TinyEmitterOptions&lt;T&gt;['onBeforeNotify'] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, hasListenerOrderDependencies? : <span style="font-weight: 400;">TinyEmitterOptions&lt;T&gt;['hasListenerOrderDependencies'] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, reentrantNotificationStrategy? : <span style="font-weight: 400;">TinyEmitterOptions&lt;T&gt;['reentrantNotificationStrategy'] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes an Emitter. All listeners are removed.

#### emit( ...args : <span style="font-weight: 400;">T</span> ) {: #emit data-toc-label='emit' }

Notify listeners

#### addListener( listener : <span style="font-weight: 400;">[TEmitterListener](../axon/TEmitter.md#TEmitterListener)&lt;T&gt;</span> ) {: #addListener data-toc-label='addListener' }

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

#### forEachListener( callback : <span style="font-weight: 400;">( listener: [TEmitterListener](../axon/TEmitter.md#TEmitterListener)&lt;T&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #forEachListener data-toc-label='forEachListener' }

Invokes a callback once for each listener - meant for Property's use

### Instance Properties

#### changeCount : <span style="font-weight: 400;">( count: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> {: #changeCount data-toc-label='changeCount' }

Not defined usually because of memory usage. If defined, this will be called when the listener count changes,
e.g. changeCount( {number} listenersAddedQuantity ), with the number being negative for listeners removed.

#### isDisposed : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDisposed data-toc-label='isDisposed' }

Only defined when assertions are enabled - to keep track if it has been disposed or not



## Source Code

See the source for [TinyEmitter.ts](https://github.com/phetsims/axon/blob/main/js/TinyEmitter.ts) in the [axon](https://github.com/phetsims/axon) repository.
