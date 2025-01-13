# TinyForwardingProperty

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

#### new TinyForwardingProperty( value : <span style="font-weight: 400; opacity: 80%;">ValueType</span>, targetPropertyInstrumented, onBeforeNotify? : <span style="font-weight: 400; opacity: 80%;">TinyPropertyOnBeforeNotify&lt;ValueType&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setValueOrTargetProperty( node : <span style="font-weight: 400; opacity: 80%;">NodeParam</span>, tandemName : <span style="font-weight: 400; opacity: 80%;">string | null</span>, newValueOrTargetProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;ValueType&gt; | ValueType</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setValueOrTargetProperty data-toc-label='setValueOrTargetProperty' }

API support for setting a Property|ValueType onto the forwarding Property

#### setTargetProperty( newTargetProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;ValueType&gt; | null</span>, node : <span style="font-weight: 400; opacity: 80%;">NodeParam</span>, tandemName : <span style="font-weight: 400; opacity: 80%;">string | null</span> ) : <span style="font-weight: 400; opacity: 80%;">NodeParam</span> {: #setTargetProperty data-toc-label='setTargetProperty' }

Sets (or unsets if `null` is provided) the Property that we use for forwarding changes.

@param newTargetProperty - null to "unset" forwarding.
@param node - (For phet-io support only):
              The container of TinyForwardingProperty which supports updateLinkedElementForProperty()
@param tandemName - null if the Property does not support PhET-iO instrumentation
@returns the passed in Node, for chaining.

#### set( value : <span style="font-weight: 400; opacity: 80%;">ValueType</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set data-toc-label='set' }

Sets the value and notifies listeners, unless deferred or disposed. You can also use the es5 getter
(property.value) but this means is provided for inner loops or internal code that must be fast. If the value
hasn't changed, this is a no-op.

#### setTargetPropertyInstrumented( targetPropertyInstrumented : <span style="font-weight: 400; opacity: 80%;">boolean</span>, node : <span style="font-weight: 400; opacity: 80%;">NodeType</span> ) : <span style="font-weight: 400; opacity: 80%;">NodeType</span> {: #setTargetPropertyInstrumented data-toc-label='setTargetPropertyInstrumented' }

Use this to automatically create a forwarded, PhET-iO instrumented Property owned by this TinyForwardingProperty.

#### getTargetPropertyInstrumented() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #getTargetPropertyInstrumented data-toc-label='getTargetPropertyInstrumented' }

#### initializePhetio( node : <span style="font-weight: 400; opacity: 80%;">NodeLike</span>, tandemName : <span style="font-weight: 400; opacity: 80%;">string</span>, createProperty : <span style="font-weight: 400; opacity: 80%;">() =&gt; TProperty&lt;ValueType&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #initializePhetio data-toc-label='initializePhetio' }

@param node - the parent container that supports updateLinkedElementForProperty()
@param tandemName
@param createProperty - creates an "owned" Property

#### getTargetProperty() : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;ValueType&gt; | null</span> {: #getTargetProperty data-toc-label='getTargetProperty' }

Get the target property, if any. Use sparingly! Internal use only.

#### isSettable() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isSettable data-toc-label='isSettable' }

A TinyForwardingProperty is settable if the target property is settable.

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Instance Properties

#### forwardingListener : <span style="font-weight: 400; opacity: 80%;">PropertyLazyLinkListener&lt;ValueType&gt;</span> {: #forwardingListener data-toc-label='forwardingListener' }

(protected)

Set lazily in setTargetProperty()



## Source Code

See the source for [TinyForwardingProperty.ts](https://github.com/phetsims/axon/blob/main/js/TinyForwardingProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
