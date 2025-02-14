# TinyEmitter

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/axon/blob/main/js/TinyEmitter.ts](https://github.com/phetsims/axon/blob/main/js/TinyEmitter.ts) for the most up-to-date information.

## Overview

Lightweight event &amp; listener abstraction for a single event type.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class TinyEmitter {: #TinyEmitter }


```js
import { TinyEmitter } from 'scenerystack/axon';
```
### Constructor

#### new TinyEmitter( onBeforeNotify? : <span style="font-weight: 400;">[TinyEmitterOptions](../axon/TinyEmitter.md#TinyEmitterOptions)&lt;T&gt;['onBeforeNotify'] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, hasListenerOrderDependencies? : <span style="font-weight: 400;">[TinyEmitterOptions](../axon/TinyEmitter.md#TinyEmitterOptions)&lt;T&gt;['hasListenerOrderDependencies'] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, reentrantNotificationStrategy? : <span style="font-weight: 400;">[TinyEmitterOptions](../axon/TinyEmitter.md#TinyEmitterOptions)&lt;T&gt;['reentrantNotificationStrategy'] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #TinyEmitter-constructor data-toc-label='new TinyEmitter' }

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



## Type ReentrantNotificationStrategy {: #ReentrantNotificationStrategy }


How to handle the notification of listeners in reentrant emit() cases. There are two possibilities:
'stack': Each new reentrant call to emit (from a listener), takes precedent. This behaves like a "depth first"
       algorithm because it will not finish calling all listeners from the original call until nested emit() calls
       notify fully. Notify listeners from the emit call with "stack-like" behavior. We also sometimes call this
       "depth-first" notification. This algorithm will prioritize the most recent emit call's listeners, such that
       reentrant emits will cause a full recursive call to emit() to complete before continuing to notify the
       rest of the listeners from the original call.
       Note: This was the only method of notifying listeners on emit before 2/2024.

'queue': Each new reentrant call to emit queues those listeners to run once the current notifications are done
       firing. Here a recursive (reentrant) emit is basically a noop, because the original call will continue
       looping through listeners from each new emit() call until there are no more. See notifyAsQueue().
       Notify listeners from the emit call with "queue-like" behavior (FIFO). We also sometimes call this "breadth-first"
       notification. In this function, listeners for an earlier emit call will be called before any newer emit call that
       may occur inside of listeners (in a reentrant case).

       This is a better strategy in cases where order may matter, for example:
       const emitter = new TinyEmitter&lt;[ number ]&gt;(  null, null, 'queue' );
       emitter.addListener( number =&gt; {
         if ( number &lt; 10 ) {
           emitter.emit( number + 1 );
           console.log( number );
         }
       } );
       emitter.emit( 1 );
       -&gt; 1,2,3,4,5,6,7,8,9

       Whereas stack-based notification would yield the oppose order: 9-&gt;1, since the most recently called emit
       would be the very first one notified.

       Note, this algorithm does involve queueing a reentrant emit() calls' listeners for later notification. So in
       effect, reentrant emit() calls are no-ops. This could potentially lead some awkward or confusing cases. As a
       result it is recommended to use this predominantly with Properties, in which their stateful value makes more
       sense to notify changes on in order (preserving the correct oldValue through all notifications).

```js
import type { ReentrantNotificationStrategy } from 'scenerystack/axon';
```


"queue" | "stack"



## Type TinyEmitterOptions {: #TinyEmitterOptions }


While TinyEmitter doesn't use this in an optionize call, it is nice to be able to reuse the types of these options.

```js
import type { TinyEmitterOptions } from 'scenerystack/axon';
```


- **onBeforeNotify**?: [TEmitterListener](../axon/TEmitter.md#TEmitterListener)&lt;T&gt;
- **hasListenerOrderDependencies**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **reentrantNotificationStrategy**?: [ReentrantNotificationStrategy](../axon/TinyEmitter.md#ReentrantNotificationStrategy)




## Source Code

See the source for [TinyEmitter.ts](https://github.com/phetsims/axon/blob/main/js/TinyEmitter.ts) in the [axon](https://github.com/phetsims/axon) repository.
