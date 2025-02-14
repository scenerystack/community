# TinyForwardingProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/axon/blob/main/js/TinyForwardingProperty.ts](https://github.com/phetsims/axon/blob/main/js/TinyForwardingProperty.ts) for the most up-to-date information.

## Overview

A lightweight version of Property (that satisfies some of the interface), meant for high-performance applications
where validation, phet-io support and other things are not needed. This includes additional logic for conditionally
forwarding to/from another Property.

Please note that TinyForwardingProperty exclusively supports settable Properties
via its TypeScript implementation. If you want to use a read-only Property as the target, please type cast as settable
and use runtime assertions to ensure that the target (or this forwarding Property) are not set. See examples like
Node.setVisibleProperty.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TinyForwardingProperty {: #TinyForwardingProperty }


```js
import { TinyForwardingProperty } from 'scenerystack/axon';
```
### Constructor

#### new TinyForwardingProperty( value : <span style="font-weight: 400;">ValueType</span>, targetPropertyInstrumented, onBeforeNotify? : <span style="font-weight: 400;">[TinyPropertyOnBeforeNotify](../axon/TinyProperty.md#TinyPropertyOnBeforeNotify)&lt;ValueType&gt;</span> ) {: #TinyForwardingProperty-constructor data-toc-label='new TinyForwardingProperty' }

### Instance Methods

#### setValueOrTargetProperty( node : <span style="font-weight: 400;">NodeParam</span>, tandemName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, newValueOrTargetProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;ValueType&gt; | ValueType</span> ) {: #setValueOrTargetProperty data-toc-label='setValueOrTargetProperty' }

API support for setting a Property|ValueType onto the forwarding Property

#### setTargetProperty( newTargetProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;ValueType&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, node : <span style="font-weight: 400;">NodeParam</span>, tandemName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;">NodeParam</span> {: #setTargetProperty data-toc-label='setTargetProperty' }

Sets (or unsets if `null` is provided) the Property that we use for forwarding changes.

@param newTargetProperty - null to "unset" forwarding.
@param node - (For phet-io support only):
              The container of TinyForwardingProperty which supports updateLinkedElementForProperty()
@param tandemName - null if the Property does not support PhET-iO instrumentation
@returns the passed in Node, for chaining.

#### set( value : <span style="font-weight: 400;">ValueType</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #set data-toc-label='set' }

Sets the value and notifies listeners, unless deferred or disposed. You can also use the es5 getter
(property.value) but this means is provided for inner loops or internal code that must be fast. If the value
hasn't changed, this is a no-op.

#### setTargetPropertyInstrumented( targetPropertyInstrumented : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, node : <span style="font-weight: 400;">NodeType</span> ) : <span style="font-weight: 400;">NodeType</span> {: #setTargetPropertyInstrumented data-toc-label='setTargetPropertyInstrumented' }

Use this to automatically create a forwarded, PhET-iO instrumented Property owned by this TinyForwardingProperty.

#### getTargetPropertyInstrumented() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #getTargetPropertyInstrumented data-toc-label='getTargetPropertyInstrumented' }

#### initializePhetio( node : <span style="font-weight: 400;">NodeLike</span>, tandemName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, createProperty : <span style="font-weight: 400;">() =&gt; [TProperty](../axon/TProperty.md)&lt;ValueType&gt;</span> ) {: #initializePhetio data-toc-label='initializePhetio' }

@param node - the parent container that supports updateLinkedElementForProperty()
@param tandemName
@param createProperty - creates an "owned" Property

#### getTargetProperty() : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;ValueType&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getTargetProperty data-toc-label='getTargetProperty' }

Get the target property, if any. Use sparingly! Internal use only.

#### isSettable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSettable data-toc-label='isSettable' }

A TinyForwardingProperty is settable if the target property is settable.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### forwardingListener : <span style="font-weight: 400;">[PropertyLazyLinkListener](../axon/TReadOnlyProperty.md#PropertyLazyLinkListener)&lt;ValueType&gt;</span> {: #forwardingListener data-toc-label='forwardingListener' }

(protected)

Set lazily in setTargetProperty()



## Source Code

See the source for [TinyForwardingProperty.ts](https://github.com/phetsims/axon/blob/main/js/TinyForwardingProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
