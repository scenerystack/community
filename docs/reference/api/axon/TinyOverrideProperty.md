# TinyOverrideProperty

## Overview

A TinyProperty that will take the value of a target Property until it is set to a value. When that happens, it will
be its own standalone Property.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TinyOverrideProperty {: #TinyOverrideProperty }


```js
import { TinyOverrideProperty } from 'scenerystack/axon';
```
### Constructor

#### new TinyOverrideProperty( targetProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setTargetProperty( targetProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setTargetProperty data-toc-label='setTargetProperty' }

#### clearOverride() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #clearOverride data-toc-label='clearOverride' }

Remove the "overridden" nature of this Property, so that it takes on the appearance of the targetProperty

#### get() : <span style="font-weight: 400; opacity: 80%;">T</span> {: #get data-toc-label='get' }

#### set( value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #set data-toc-label='set' }

#### setPropertyValue( value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setPropertyValue data-toc-label='setPropertyValue' }

#### equalsValue( value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equalsValue data-toc-label='equalsValue' }

(protected)

We have to override here to have the getter called

#### notifyListeners( oldValue : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #notifyListeners data-toc-label='notifyListeners' }

Overridden, since we need to call our getter

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Instance Properties

#### isOverridden {: #isOverridden data-toc-label='isOverridden' }

If true, we ignore our targetProperty and just use our value. If false, we only report the value of the
targetProperty



## Source Code

See the source for [TinyOverrideProperty.ts](https://github.com/phetsims/axon/blob/main/js/TinyOverrideProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
