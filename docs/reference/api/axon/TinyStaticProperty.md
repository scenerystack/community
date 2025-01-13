# TinyStaticProperty

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

#### new TinyStaticProperty( value : <span style="font-weight: 400; opacity: 80%;">T</span>, onAccessAttempt : <span style="font-weight: 400; opacity: 80%;">() =&gt; void</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### get() : <span style="font-weight: 400; opacity: 80%;">T</span> {: #get data-toc-label='get' }

Returns the value. Overridden to support onAccessAttempt.

#### set( value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #set data-toc-label='set' }

Don't set the value of a TinyStaticProperty!

#### isSettable() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isSettable data-toc-label='isSettable' }

Returns true if the value can be set externally. Static Property values should only be mutated, not set.

#### notifyListeners( oldValue : <span style="font-weight: 400; opacity: 80%;">T | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #notifyListeners data-toc-label='notifyListeners' }

Directly notifies listeners of changes.

#### link( listener : <span style="font-weight: 400; opacity: 80%;">PropertyLinkListener&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #link data-toc-label='link' }

Adds listener and calls it immediately. If listener is already registered, this is a no-op. The initial
notification provides the current value for newValue and null for oldValue.

#### equalsValue( value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsValue data-toc-label='equalsValue' }

(protected)

Returns true if and only if the specified value equals the value of this property



## Source Code

See the source for [TinyStaticProperty.ts](https://github.com/phetsims/axon/blob/main/js/TinyStaticProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
