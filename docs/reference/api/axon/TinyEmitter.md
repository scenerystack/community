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

#### new TinyEmitter( onBeforeNotify? : <span style="font-weight: 400; opacity: 80%;">TinyEmitterOptions&lt;T&gt;['onBeforeNotify'] | null</span>, hasListenerOrderDependencies? : <span style="font-weight: 400; opacity: 80%;">TinyEmitterOptions&lt;T&gt;['hasListenerOrderDependencies'] | null</span>, reentrantNotificationStrategy? : <span style="font-weight: 400; opacity: 80%;">TinyEmitterOptions&lt;T&gt;['reentrantNotificationStrategy'] | null</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Disposes an Emitter. All listeners are removed.

#### emit( ...args : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #emit data-toc-label='emit' }

Notify listeners

#### addListener( listener : <span style="font-weight: 400; opacity: 80%;">TEmitterListener&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addListener data-toc-label='addListener' }

Adds a listener which will be called during emit.

#### removeListener( listener : <span style="font-weight: 400; opacity: 80%;">TEmitterListener&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeListener data-toc-label='removeListener' }

Removes a listener

#### removeAllListeners() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeAllListeners data-toc-label='removeAllListeners' }

Removes all the listeners

#### hasListener( listener : <span style="font-weight: 400; opacity: 80%;">TEmitterListener&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasListener data-toc-label='hasListener' }

Checks whether a listener is registered with this Emitter

#### hasListeners() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasListeners data-toc-label='hasListeners' }

Returns true if there are any listeners.

#### getListenerCount() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getListenerCount data-toc-label='getListenerCount' }

Returns the number of listeners.

#### forEachListener( callback : <span style="font-weight: 400; opacity: 80%;">( listener: TEmitterListener&lt;T&gt; ) =&gt; void</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #forEachListener data-toc-label='forEachListener' }

Invokes a callback once for each listener - meant for Property's use

### Instance Properties

#### changeCount : <span style="font-weight: 400; opacity: 80%;">( count: number ) =&gt; void</span> {: #changeCount data-toc-label='changeCount' }

Not defined usually because of memory usage. If defined, this will be called when the listener count changes,
e.g. changeCount( {number} listenersAddedQuantity ), with the number being negative for listeners removed.

#### isDisposed : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isDisposed data-toc-label='isDisposed' }

Only defined when assertions are enabled - to keep track if it has been disposed or not



## Source Code

See the source for [TinyEmitter.ts](https://github.com/phetsims/axon/blob/main/js/TinyEmitter.ts) in the [axon](https://github.com/phetsims/axon) repository.
