# ReadOnlyProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/axon/blob/main/js/ReadOnlyProperty.ts](https://github.com/phetsims/axon/blob/main/js/ReadOnlyProperty.ts) for the most up-to-date information.

## Overview

An observable property which notifies listeners when the value changes.

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class ReadOnlyProperty {: #ReadOnlyProperty }


Base class for Property, DerivedProperty, DynamicProperty.  Set methods are protected/not part of the public
interface.  Initial value and resetting is not defined here.

```js
import { ReadOnlyProperty } from 'scenerystack/axon';
```
### Constructor

#### new ReadOnlyProperty( value : <span style="font-weight: 400;">T</span>, providedOptions? : <span style="font-weight: 400;">[PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;T&gt;</span> ) {: #ReadOnlyProperty-constructor data-toc-label='new ReadOnlyProperty' }

### Instance Methods

#### isSettable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSettable data-toc-label='isSettable' }

Returns true if the value can be set externally, using .value= or set()

#### get() : <span style="font-weight: 400;">T</span> {: #get data-toc-label='get' }

Gets the value.
You can also use the es5 getter (property.value) but this means is provided for inner loops
or internal code that must be fast.

#### set( value : <span style="font-weight: 400;">T</span> ) {: #set data-toc-label='set' }

(protected)

Sets the value and notifies listeners, unless deferred or disposed. You can also use the es5 getter
(property.value) but this means is provided for inner loops or internal code that must be fast. If the value
hasn't changed, this is a no-op.

NOTE: For PhET-iO instrumented Properties that are phetioState: true, the value is only
set by the PhetioStateEngine and cannot be modified by other code while isSettingPhetioStateProperty === true.

#### unguardedSet( value : <span style="font-weight: 400;">T</span> ) {: #unguardedSet data-toc-label='unguardedSet' }

(protected)

For usage by the IOType during PhET-iO state setting.

#### setPropertyValue( value : <span style="font-weight: 400;">T</span> ) {: #setPropertyValue data-toc-label='setPropertyValue' }

(protected)

Sets the value without notifying any listeners. This is a place to override if a subtype performs additional work
when setting the value.

#### equalsValue( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsValue data-toc-label='equalsValue' }

(protected)

Returns true if and only if the specified value equals the value of this property

#### areValuesEqual( a : <span style="font-weight: 400;">T</span>, b : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #areValuesEqual data-toc-label='areValuesEqual' }

Determine if the two values are equal, see TinyProperty.areValuesEqual().

#### notifyListenersStatic() {: #notifyListenersStatic data-toc-label='notifyListenersStatic' }

Use this method when mutating a value (not replacing with a new instance) and you want to send notifications about the change.
This is different from the normal axon strategy, but may be necessary to prevent memory allocations.
This method is unsafe for removing listeners because it assumes the listener list not modified, to save another allocation
Only provides the new reference as a callback (no oldValue)
See https://github.com/phetsims/axon/issues/6

#### setDeferred( isDeferred : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #setDeferred data-toc-label='setDeferred' }

When deferred, set values do not take effect or send out notifications.  After defer ends, the Property takes
its deferred value (if any), and a follow-up action (return value) can be invoked to send out notifications
once other Properties have also taken their deferred values.

@param isDeferred - whether the Property should be deferred or not
@returns - function to notify listeners after calling setDeferred(false),
         - null if isDeferred is true, or if the value is unchanged since calling setDeferred(true)

#### addPhetioStateDependencies( dependencies : <span style="font-weight: 400;">Array&lt;[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[IntentionalAny](../phet-core/IntentionalAny.md)&gt;&gt;</span> ) {: #addPhetioStateDependencies data-toc-label='addPhetioStateDependencies' }

This function registers an order dependency between this Property and another. Basically this says that when
setting PhET-iO state, each dependency must take its final value before this Property fires its notifications.
See propertyStateHandlerSingleton.registerPhetioOrderDependency and https://github.com/phetsims/axon/issues/276 for more info.

#### link( listener : <span style="font-weight: 400;">[PropertyLinkListener](../axon/TReadOnlyProperty.md#PropertyLinkListener)&lt;T&gt;</span>, options? : <span style="font-weight: 400;">ReadOnlyPropertyLinkOptions</span> ) {: #link data-toc-label='link' }

Adds listener and calls it immediately. If listener is already registered, this is a no-op. The initial
notification provides the current value for newValue and null for oldValue.

@param listener - a function that takes a new value, old value, and this Property as arguments
@param [options]

#### lazyLink( listener : <span style="font-weight: 400;">[PropertyLazyLinkListener](../axon/TReadOnlyProperty.md#PropertyLazyLinkListener)&lt;T&gt;</span>, options? : <span style="font-weight: 400;">ReadOnlyPropertyLinkOptions</span> ) {: #lazyLink data-toc-label='lazyLink' }

Add a listener to the Property, without calling it back right away. This is used when you need to register a
listener without an immediate callback.

#### unlink( listener : <span style="font-weight: 400;">[PropertyListener](../axon/TReadOnlyProperty.md#PropertyListener)&lt;T&gt;</span> ) {: #unlink data-toc-label='unlink' }

Removes a listener. If listener is not registered, this is a no-op.

#### unlinkAll() {: #unlinkAll data-toc-label='unlinkAll' }

Removes all listeners. If no listeners are registered, this is a no-op.

#### linkAttribute( object : <span style="font-weight: 400;">[IntentionalAny](../phet-core/IntentionalAny.md)</span>, attributeName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">( value: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> {: #linkAttribute data-toc-label='linkAttribute' }

Links an object's named attribute to this property.  Returns a handle so it can be removed using Property.unlink();
Example: modelVisibleProperty.linkAttribute(view,'visible');

NOTE: Duplicated with TinyProperty.linkAttribute

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Provide toString for console debugging, see http://stackoverflow.com/questions/2485632/valueof-vs-tostring-in-javascript

#### debug( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">( value: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> {: #debug data-toc-label='debug' }

Convenience function for debugging a Property's value. It prints the new value on registration and when changed.
@param name - debug name to be printed on the console
@returns - the handle to the linked listener in case it needs to be removed later

#### isValueValid( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isValueValid data-toc-label='isValueValid' }

#### getValidationError( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getValidationError data-toc-label='getValidationError' }

#### dispose() {: #dispose data-toc-label='dispose' }

Ensures that the Property is eligible for GC

#### hasListener( listener : <span style="font-weight: 400;">[PropertyLinkListener](../axon/TReadOnlyProperty.md#PropertyLinkListener)&lt;T&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasListener data-toc-label='hasListener' }

Checks whether a listener is registered with this Property

#### forEachListener( callback : <span style="font-weight: 400;">( value: ( ...args: [ T, T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, [TinyProperty](../axon/TinyProperty.md)&lt;T&gt; | [ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;T&gt; ] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #forEachListener data-toc-label='forEachListener' }

Invokes a callback once for each listener
@param callback - takes the listener as an argument

#### hasListeners() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasListeners data-toc-label='hasListeners' }

Returns true if there are any listeners.

#### toStateObject() : <span style="font-weight: 400;">[ReadOnlyPropertyState](../axon/ReadOnlyProperty.md#ReadOnlyPropertyState)&lt;StateType&gt;</span> {: #toStateObject data-toc-label='toStateObject' }

(protected)

Implementation of serialization for PhET-iO support. Override this function to customize how this state
behaves (but be careful!).

This function is parameterized to support subtyping. That said, it is a bit useless, since we don't want to
parameterize ReadOnlyProperty in general to the IOType's state type, so please bear with us.

#### applyState( stateObject : <span style="font-weight: 400;">[ReadOnlyPropertyState](../axon/ReadOnlyProperty.md#ReadOnlyPropertyState)&lt;StateType&gt;</span> ) {: #applyState data-toc-label='applyState' }

(protected)

Implementation of serialization for PhET-iO support. Override this function to customize how this state
behaves (but be careful!).

#### getPhetioMouseHitTarget( fromLinking ) : <span style="font-weight: 400;">[PhetioObject](../tandem/PhetioObject.md) | 'phetioNotSelectable'</span> {: #getPhetioMouseHitTarget data-toc-label='getPhetioMouseHitTarget' }

Support treating ourselves as an autoselectable entity for the "strings" selection mode.

### Instance Properties

#### units : <span style="font-weight: 400;">[Units](../axon/units.md#Units) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #units data-toc-label='units' }

(readonly)

(phet-io) Units, if any.  See units.js for valid values

#### validValues : <span style="font-weight: 400;">readonly T[]</span> {: #validValues data-toc-label='validValues' }

(readonly)

#### isDeferred : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isDeferred data-toc-label='isDeferred' }

while deferred, new values neither take effect nor send notifications.  When isDeferred changes from
true to false, the final deferred value becomes the Property value.  An action is created which can be invoked to
send notifications.

#### deferredValue : <span style="font-weight: 400;">T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #deferredValue data-toc-label='deferredValue' }

(protected)

the value that this Property will take after no longer deferred

#### hasDeferredValue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasDeferredValue data-toc-label='hasDeferredValue' }

(protected)

whether a deferred value has been set

#### valueValidator : <span style="font-weight: 400;">[Validator](../axon/Validation.md#Validator)&lt;T&gt;</span> {: #valueValidator data-toc-label='valueValidator' }

(protected, readonly)

#### phetioValueType : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)&lt;T, [IntentionalAny](../phet-core/IntentionalAny.md)&gt;</span> {: #phetioValueType data-toc-label='phetioValueType' }

(protected, readonly)

The IOType for the values this Property supports.

### Static Methods

#### PropertyIO( parameterType : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)&lt;ParameterType, ParameterStateType&gt;</span> ) : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)&lt;[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;ParameterType&gt;, [ReadOnlyPropertyState](../axon/ReadOnlyProperty.md#ReadOnlyPropertyState)&lt;ParameterStateType&gt;&gt;</span> {: #PropertyIO data-toc-label='PropertyIO' }

An observable Property that triggers notifications when the value changes.
This caching implementation should be kept in sync with the other parametric IOType caching implementations.

### Static Properties

#### CHANGED_EVENT_NAME {: #CHANGED_EVENT_NAME data-toc-label='CHANGED_EVENT_NAME' }

(readonly)



## Type LinkOptions {: #LinkOptions }


```js
import type { LinkOptions } from 'scenerystack/axon';
```


- **phetioDependencies**?: Array&lt;[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;&gt;




## Type PropertyOptions {: #PropertyOptions }


Options that can be passed in

```js
import type { PropertyOptions } from 'scenerystack/axon';
```


- **units**?: [Units](../axon/units.md#Units) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  units for the value, see units.js. Should prefer abbreviated units, see https://github.com/phetsims/phet-io/issues/530
- **reentrant**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether reentrant calls to 'set' are allowed.
  Use this to detect or prevent update cycles. Update cycles may be due to floating point error,
  faulty logic, etc. This may be of particular interest for PhET-iO instrumentation, where such
  cycles may pollute the data stream. See https://github.com/phetsims/axon/issues/179
- **phetioValueType**?: [AnyIOType](../tandem/IOType.md#AnyIOType)
<br>  The IOType for the values this Property supports. At this level, it doesn't matter what the state type is, so
  it defaults to IntentionalAny.
- **phetioOuterType**?: ( parameterType: [AnyIOType](../tandem/IOType.md#AnyIOType) ) =&gt; [AnyIOType](../tandem/IOType.md#AnyIOType)
<br>  The IOType function that returns a parameterized IOType based on the valueType. There is a general default, but
  subtypes can implement their own, more specific IOType.
- **hasListenerOrderDependencies**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If specified as true, this flag will ensure that listener order never changes (like via ?listenerOrder=random)
- &amp; Pick&lt;[TinyEmitterOptions](../axon/TinyEmitter.md#TinyEmitterOptions), "reentrantNotificationStrategy"&gt; &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;ParentOptions&lt;T&gt;, "phetioType"&gt;




## Type ReadOnlyPropertyState {: #ReadOnlyPropertyState }


```js
import type { ReadOnlyPropertyState } from 'scenerystack/axon';
```


- **value**: StateType
- **validValues**: StateType[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Only include validValues if specified, so they only show up in PhET-iO Studio when supplied.
- **units**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




## Source Code

See the source for [ReadOnlyProperty.ts](https://github.com/phetsims/axon/blob/main/js/ReadOnlyProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
