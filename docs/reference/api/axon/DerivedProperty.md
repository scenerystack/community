# DerivedProperty

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/axon/blob/main/js/DerivedProperty.ts](https://github.com/phetsims/axon/blob/main/js/DerivedProperty.ts) for the most up-to-date information.

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

#### new DerivedProperty( dependencies : <span style="font-weight: 400;">[RP1](../axon/Multilink.md#RP1)&lt;T1&gt;</span>, derivation : <span style="font-weight: 400;">( ...params: [ T1 ] ) =&gt; T</span>, providedOptions? : <span style="font-weight: 400;">[DerivedPropertyOptions](../axon/DerivedProperty.md#DerivedPropertyOptions)&lt;T&gt;</span> ) {: #DerivedProperty-constructor data-toc-label='new DerivedProperty' }

### Instance Methods

#### hasDependency( dependency : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[IntentionalAny](../phet-core/IntentionalAny.md)&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasDependency data-toc-label='hasDependency' }

Determines whether this DerivedProperty has a specific dependency.

#### recomputeDerivation() {: #recomputeDerivation data-toc-label='recomputeDerivation' }

Allows forcing a recomputation (as a possible workaround to listener order). This works well if you have a
non-Property event that should trigger a value change for this Property.

For example:
myEmitter.addListener( () =&gt; myDerivedProperty.recomputeDerivation() );
myObservableArray.addItemAddedListener( () =&gt; myDerivedProperty.recomputeDerivation() );

#### dispose() {: #dispose data-toc-label='dispose' }

#### setDeferred( isDeferred : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #setDeferred data-toc-label='setDeferred' }

Support deferred DerivedProperty by only calculating the derivation once when it is time to undefer it and fire
notifications. This way we don't have intermediate derivation calls during PhET-iO state setting.

### Static Methods

#### valueEquals( firstProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span>, secondProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span>, options? : <span style="font-weight: 400;">[DerivedPropertyOptions](../axon/DerivedProperty.md#DerivedPropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> ) : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #valueEquals data-toc-label='valueEquals' }

Creates a derived boolean Property whose value is true iff firstProperty's value is equal to secondProperty's
value.

#### valueNotEquals( firstProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span>, secondProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span>, options? : <span style="font-weight: 400;">[DerivedPropertyOptions](../axon/DerivedProperty.md#DerivedPropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> ) : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #valueNotEquals data-toc-label='valueNotEquals' }

Creates a derived boolean Property whose value is true iff firstProperty's value is not equal to the
secondProperty's value.

#### valueEqualsConstant( firstProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span>, options? : <span style="font-weight: 400;">[DerivedPropertyOptions](../axon/DerivedProperty.md#DerivedPropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> ) : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #valueEqualsConstant data-toc-label='valueEqualsConstant' }

Creates a derived boolean Property whose value is true iff firstProperty's value is equal to a constant value.

#### valueNotEqualsConstant( firstProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span>, value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span></span>, options? : <span style="font-weight: 400;">[DerivedPropertyOptions](../axon/DerivedProperty.md#DerivedPropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> ) : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #valueNotEqualsConstant data-toc-label='valueNotEqualsConstant' }

Creates a derived boolean Property whose value is true iff firstProperty's value is not equal to a constant value.

#### and( properties : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]</span>, options? : <span style="font-weight: 400;">[PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> ) : <span style="font-weight: 400;">[UnknownDerivedProperty](../axon/DerivedProperty.md#UnknownDerivedProperty)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #and data-toc-label='and' }

Creates a derived boolean Property whose value is true iff every input Property value is true.

#### or( properties : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;[]</span>, options? : <span style="font-weight: 400;">[PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> ) : <span style="font-weight: 400;">[UnknownDerivedProperty](../axon/DerivedProperty.md#UnknownDerivedProperty)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #or data-toc-label='or' }

Creates a derived boolean Property whose value is true iff any input Property value is true.

#### multiply( properties : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;[]</span>, options? : <span style="font-weight: 400;">[PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> ) : <span style="font-weight: 400;">[UnknownDerivedProperty](../axon/DerivedProperty.md#UnknownDerivedProperty)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #multiply data-toc-label='multiply' }

Creates a derived number Property whose value is the result of multiplying all (number) dependencies together.

#### add( properties : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;[]</span>, options? : <span style="font-weight: 400;">[PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> ) : <span style="font-weight: 400;">[UnknownDerivedProperty](../axon/DerivedProperty.md#UnknownDerivedProperty)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #add data-toc-label='add' }

Creates a derived number Property whose value is the result of adding all (number) dependencies together.

#### not( propertyToInvert : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, options? : <span style="font-weight: 400;">[DerivedPropertyOptions](../axon/DerivedProperty.md#DerivedPropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> ) : <span style="font-weight: 400;">[DerivedProperty](../axon/DerivedProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> {: #not data-toc-label='not' }

Creates a derived boolean Property whose value is the inverse of the provided property.

#### deriveAny( dependencies : <span style="font-weight: 400;">Array&lt;[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;&gt;</span>, derivation : <span style="font-weight: 400;">() =&gt; T</span>, providedOptions? : <span style="font-weight: 400;">[DerivedPropertyOptions](../axon/DerivedProperty.md#DerivedPropertyOptions)&lt;T&gt;</span> ) : <span style="font-weight: 400;">[UnknownDerivedProperty](../axon/DerivedProperty.md#UnknownDerivedProperty)&lt;T&gt;</span> {: #deriveAny data-toc-label='deriveAny' }

Create a DerivedProperty from any number of dependencies.  This is parallel to Multilink.multilinkAny

### Static Properties

#### DerivedPropertyIO : <span style="font-weight: 400;">( parameterType: [IOType](../tandem/IOType.md) ) =&gt; [IOType](../tandem/IOType.md)</span> {: #DerivedPropertyIO data-toc-label='DerivedPropertyIO' }



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


## Type DerivedPropertyOptions {: #DerivedPropertyOptions }


```js
import type { DerivedPropertyOptions } from 'scenerystack/axon';
```


- **phetioLinkDependencies**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When true, if this DerivedProperty is PhET-iO instrument, add a LinkedElement for each PhET-iO instrumented dependency.
- &amp; [PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;T&gt;




## Type UnknownDerivedProperty {: #UnknownDerivedProperty }


Convenience type for a Derived property that has a known return type but unknown dependency types.

```js
import type { UnknownDerivedProperty } from 'scenerystack/axon';
```


[DerivedProperty](../axon/DerivedProperty.md)&lt;T, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;



## Source Code

See the source for [DerivedProperty.ts](https://github.com/phetsims/axon/blob/main/js/DerivedProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
