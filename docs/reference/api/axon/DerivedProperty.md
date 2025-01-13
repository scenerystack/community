# DerivedProperty

## Overview

A DerivedProperty is computed based on other Properties.  This implementation inherits from Property to (a) simplify
implementation and (b) ensure it remains consistent. Note that the setters should not be called directly, so the
setters (set, reset and es5 setter) throw an error if used directly.

@author Sam Reid (PhET Interactive Simulations)

## Class DerivedProperty {: #DerivedProperty }


T = type of the derived value
Parameters[] = types of the callback parameters, e.g. [ Vector2, number, boolean ]

```js
import { DerivedProperty } from 'scenerystack/axon';
```
### Constructor

#### new DerivedProperty( dependencies : <span style="font-weight: 400; opacity: 80%;">RP1&lt;T1&gt;</span>, derivation : <span style="font-weight: 400; opacity: 80%;">( ...params: [ T1 ] ) =&gt; T</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">DerivedPropertyOptions&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### hasDependency( dependency : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;IntentionalAny&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasDependency data-toc-label='hasDependency' }

Determines whether this DerivedProperty has a specific dependency.

#### recomputeDerivation() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #recomputeDerivation data-toc-label='recomputeDerivation' }

Allows forcing a recomputation (as a possible workaround to listener order). This works well if you have a
non-Property event that should trigger a value change for this Property.

For example:
myEmitter.addListener( () =&gt; myDerivedProperty.recomputeDerivation() );
myObservableArray.addItemAddedListener( () =&gt; myDerivedProperty.recomputeDerivation() );

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### setDeferred( isDeferred : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">( () =&gt; void ) | null</span> {: #setDeferred data-toc-label='setDeferred' }

Support deferred DerivedProperty by only calculating the derivation once when it is time to undefer it and fire
notifications. This way we don't have intermediate derivation calls during PhET-iO state setting.

### Static Methods

#### valueEquals( firstProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;unknown&gt;</span>, secondProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;unknown&gt;</span>, options? : <span style="font-weight: 400; opacity: 80%;">DerivedPropertyOptions&lt;boolean&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;boolean&gt;</span> {: #valueEquals data-toc-label='valueEquals' }

Creates a derived boolean Property whose value is true iff firstProperty's value is equal to secondProperty's
value.

#### valueNotEquals( firstProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;unknown&gt;</span>, secondProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;unknown&gt;</span>, options? : <span style="font-weight: 400; opacity: 80%;">DerivedPropertyOptions&lt;boolean&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;boolean&gt;</span> {: #valueNotEquals data-toc-label='valueNotEquals' }

Creates a derived boolean Property whose value is true iff firstProperty's value is not equal to the
secondProperty's value.

#### valueEqualsConstant( firstProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;unknown&gt;</span>, value : <span style="font-weight: 400; opacity: 80%;">unknown</span>, options? : <span style="font-weight: 400; opacity: 80%;">DerivedPropertyOptions&lt;boolean&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;boolean&gt;</span> {: #valueEqualsConstant data-toc-label='valueEqualsConstant' }

Creates a derived boolean Property whose value is true iff firstProperty's value is equal to a constant value.

#### valueNotEqualsConstant( firstProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;unknown&gt;</span>, value : <span style="font-weight: 400; opacity: 80%;">unknown</span>, options? : <span style="font-weight: 400; opacity: 80%;">DerivedPropertyOptions&lt;boolean&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;boolean&gt;</span> {: #valueNotEqualsConstant data-toc-label='valueNotEqualsConstant' }

Creates a derived boolean Property whose value is true iff firstProperty's value is not equal to a constant value.

#### and( properties : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;boolean&gt;[]</span>, options? : <span style="font-weight: 400; opacity: 80%;">PropertyOptions&lt;boolean&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">UnknownDerivedProperty&lt;boolean&gt;</span> {: #and data-toc-label='and' }

Creates a derived boolean Property whose value is true iff every input Property value is true.

#### or( properties : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;boolean&gt;[]</span>, options? : <span style="font-weight: 400; opacity: 80%;">PropertyOptions&lt;boolean&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">UnknownDerivedProperty&lt;boolean&gt;</span> {: #or data-toc-label='or' }

Creates a derived boolean Property whose value is true iff any input Property value is true.

#### multiply( properties : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;number&gt;[]</span>, options? : <span style="font-weight: 400; opacity: 80%;">PropertyOptions&lt;number&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">UnknownDerivedProperty&lt;number&gt;</span> {: #multiply data-toc-label='multiply' }

Creates a derived number Property whose value is the result of multiplying all (number) dependencies together.

#### add( properties : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;number&gt;[]</span>, options? : <span style="font-weight: 400; opacity: 80%;">PropertyOptions&lt;number&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">UnknownDerivedProperty&lt;number&gt;</span> {: #add data-toc-label='add' }

Creates a derived number Property whose value is the result of adding all (number) dependencies together.

#### not( propertyToInvert : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;boolean&gt;</span>, options? : <span style="font-weight: 400; opacity: 80%;">DerivedPropertyOptions&lt;boolean&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">DerivedProperty&lt;boolean, boolean, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown&gt;</span> {: #not data-toc-label='not' }

Creates a derived boolean Property whose value is the inverse of the provided property.

#### deriveAny( dependencies : <span style="font-weight: 400; opacity: 80%;">Array&lt;TReadOnlyProperty&lt;unknown&gt;&gt;</span>, derivation : <span style="font-weight: 400; opacity: 80%;">() =&gt; T</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">DerivedPropertyOptions&lt;T&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">UnknownDerivedProperty&lt;T&gt;</span> {: #deriveAny data-toc-label='deriveAny' }

Create a DerivedProperty from any number of dependencies.  This is parallel to Multilink.multilinkAny

### Static Properties

#### DerivedPropertyIO : <span style="font-weight: 400; opacity: 80%;">( parameterType: IOType ) =&gt; IOType</span> {: #DerivedPropertyIO data-toc-label='DerivedPropertyIO' }



## Class DerivedProperty1 {: #DerivedProperty1 }


Convenience classes for subclassing DerivedProperty

```js
import { DerivedProperty1 } from 'scenerystack/axon';
```


## Class DerivedProperty2 {: #DerivedProperty2 }


```js
import { DerivedProperty2 } from 'scenerystack/axon';
```


## Class DerivedProperty3 {: #DerivedProperty3 }


```js
import { DerivedProperty3 } from 'scenerystack/axon';
```


## Class DerivedProperty4 {: #DerivedProperty4 }


```js
import { DerivedProperty4 } from 'scenerystack/axon';
```


## Class DerivedProperty5 {: #DerivedProperty5 }


```js
import { DerivedProperty5 } from 'scenerystack/axon';
```


## Source Code

See the source for [DerivedProperty.ts](https://github.com/phetsims/axon/blob/main/js/DerivedProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
