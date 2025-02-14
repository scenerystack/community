# TinyStaticProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/axon/blob/main/js/TinyStaticProperty.ts](https://github.com/phetsims/axon/blob/main/js/TinyStaticProperty.ts) for the most up-to-date information.

## Overview

An observable stub which satisfies some of the Property interface, which can store a (static/constant) value
and also notify listeners when that value has mutated. The actual value reference does not change, however it can
itself be mutated.

@author Sam Reid (PhET Interactive Simulations)
@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TinyStaticProperty {: #TinyStaticProperty }


```js
import { TinyStaticProperty } from 'scenerystack/axon';
```
### Constructor

#### new TinyStaticProperty( value : <span style="font-weight: 400;">T</span>, onAccessAttempt : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #TinyStaticProperty-constructor data-toc-label='new TinyStaticProperty' }

### Instance Methods

#### get() : <span style="font-weight: 400;">T</span> {: #get data-toc-label='get' }

Returns the value. Overridden to support onAccessAttempt.

#### set( value : <span style="font-weight: 400;">T</span> ) {: #set data-toc-label='set' }

Don't set the value of a TinyStaticProperty!

#### isSettable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSettable data-toc-label='isSettable' }

Returns true if the value can be set externally. Static Property values should only be mutated, not set.

#### notifyListeners( oldValue : <span style="font-weight: 400;">T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #notifyListeners data-toc-label='notifyListeners' }

Directly notifies listeners of changes.

#### link( listener : <span style="font-weight: 400;">[PropertyLinkListener](../axon/TReadOnlyProperty.md#PropertyLinkListener)&lt;T&gt;</span> ) {: #link data-toc-label='link' }

Adds listener and calls it immediately. If listener is already registered, this is a no-op. The initial
notification provides the current value for newValue and null for oldValue.

#### equalsValue( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsValue data-toc-label='equalsValue' }

(protected)

Returns true if and only if the specified value equals the value of this property



## Source Code

See the source for [TinyStaticProperty.ts](https://github.com/phetsims/axon/blob/main/js/TinyStaticProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
