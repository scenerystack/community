# TinyProperty

## Overview

A lightweight version of Property (that satisfies some of the interface), meant for high-performance applications
where validation, phet-io support and other things are not needed.

This directly extends TinyEmitter in order to save memory.

@author Sam Reid (PhET Interactive Simulations)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TinyProperty {: #TinyProperty }


```js
import { TinyProperty } from 'scenerystack/axon';
```
### Constructor

#### new TinyProperty( value : <span style="font-weight: 400;">T</span>, onBeforeNotify? : <span style="font-weight: 400;">OptionsAlias&lt;T&gt;['onBeforeNotify'] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, hasListenerOrderDependencies? : <span style="font-weight: 400;">OptionsAlias&lt;T&gt;['hasListenerOrderDependencies'] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, reentrantNotificationStrategy? : <span style="font-weight: 400;">OptionsAlias&lt;T&gt;['reentrantNotificationStrategy'] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #TinyProperty-constructor data-toc-label='new TinyProperty' }

### Instance Methods

#### get() : <span style="font-weight: 400;">T</span> {: #get data-toc-label='get' }

Returns the value.

You can also use the es5 getter (property.value) but this means is provided for inner loops
or internal code that must be fast.

#### set( value : <span style="font-weight: 400;">T</span> ) {: #set data-toc-label='set' }

Sets the value and notifies listeners, unless deferred or disposed. You can also use the es5 getter
(property.value) but this means is provided for inner loops or internal code that must be fast. If the value
hasn't changed, this is a no-op.

#### setPropertyValue( value : <span style="font-weight: 400;">T</span> ) {: #setPropertyValue data-toc-label='setPropertyValue' }

Sets the value without notifying any listeners. This is a place to override if a subtype performs additional work
when setting the value.

#### equalsValue( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsValue data-toc-label='equalsValue' }

(protected)

Returns true if and only if the specified value equals the value of this property. This is used to determine if
a Property's value should change and if listeners should be notified. In general, this implementation should
not be overridden except to provide more correct "value"s as parameters for the areValuesEqual() function.

#### areValuesEqual( a : <span style="font-weight: 400;">T</span>, b : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #areValuesEqual data-toc-label='areValuesEqual' }

Central logic for determining value equality for Property. This determines if a value should change, and if
listeners should notify based on set() call.

Determines equality semantics for value comparison, including whether notifications are sent out when the
wrapped value changes, and whether onValue() is triggered. See Validation.equalsForValidationStrategy for details
and doc on ValueComparisonStrategy

Overriding this function is deprecated, instead provide a custom valueComparisonStrategy.

#### notifyListeners( oldValue : <span style="font-weight: 400;">T</span> ) {: #notifyListeners data-toc-label='notifyListeners' }

Directly notifies listeners of changes.

#### link( listener : <span style="font-weight: 400;">[PropertyLinkListener](../axon/TReadOnlyProperty.md#PropertyLinkListener)&lt;T&gt;</span> ) {: #link data-toc-label='link' }

Adds listener and calls it immediately. If listener is already registered, this is a no-op. The initial
notification provides the current value for newValue and null for oldValue.

#### lazyLink( listener : <span style="font-weight: 400;">[PropertyLazyLinkListener](../axon/TReadOnlyProperty.md#PropertyLazyLinkListener)&lt;T&gt;</span> ) {: #lazyLink data-toc-label='lazyLink' }

Add an listener to the TinyProperty, without calling it back right away. This is used when you need to register a
listener without an immediate callback.

#### unlink( listener : <span style="font-weight: 400;">[PropertyListener](../axon/TReadOnlyProperty.md#PropertyListener)&lt;T&gt;</span> ) {: #unlink data-toc-label='unlink' }

Removes a listener. If listener is not registered, this is a no-op.

#### unlinkAll() {: #unlinkAll data-toc-label='unlinkAll' }

Removes all listeners. If no listeners are registered, this is a no-op.

#### linkAttribute( object : <span style="font-weight: 400;">Record&lt;Attr, T&gt;</span>, attributeName : <span style="font-weight: 400;">Attr</span> ) : <span style="font-weight: 400;">( value: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> {: #linkAttribute data-toc-label='linkAttribute' }

Links an object's named attribute to this TinyProperty.  Returns a handle so it can be removed using
TinyProperty.unlink();
Example: modelVisibleProperty.linkAttribute(view, 'visible');

NOTE: Duplicated with Property.linkAttribute

#### isSettable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSettable data-toc-label='isSettable' }

Returns true if the value can be set externally, using .value= or set()

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references.



## Type TinyPropertyEmitterParameters {: #TinyPropertyEmitterParameters }


```js
import type { TinyPropertyEmitterParameters } from 'scenerystack/axon';
```


[ T, T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;T&gt; ]



## Type TinyPropertyOnBeforeNotify {: #TinyPropertyOnBeforeNotify }


```js
import type { TinyPropertyOnBeforeNotify } from 'scenerystack/axon';
```


( ...args: [TinyPropertyEmitterParameters](../axon/TinyProperty.md#TinyPropertyEmitterParameters)&lt;T&gt; ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Source Code

See the source for [TinyProperty.ts](https://github.com/phetsims/axon/blob/main/js/TinyProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
