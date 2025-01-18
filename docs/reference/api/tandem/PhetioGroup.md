# PhetioGroup

## Overview

Provides a placeholder in the static API for where dynamic elements may be created.  Checks that elements of the group
match the approved schema.

In general when creating an element, any extra wiring or listeners should not be added. These side effects are a code
smell in the `createElement` parameter. Instead attach a listener for when elements are created, and wire up listeners
there. Further documentation about using PhetioGroup can be found at
https://github.com/phetsims/phet-io/blob/main/doc/phet-io-instrumentation-technical-guide.md#dynamically-created-phet-io-elements

@author Michael Kauzmann (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)
@author Chris Klusendorf (PhET Interactive Simulations)

## Class PhetioGroup {: #PhetioGroup }


```js
import { PhetioGroup } from 'scenerystack/tandem';
```
### Constructor

#### new PhetioGroup( createElement : <span style="font-weight: 400;">( t: [Tandem](../tandem/Tandem.md), ...p: P ) =&gt; T</span>, defaultArguments : <span style="font-weight: 400;">P | ( () =&gt; P )</span>, providedOptions? : <span style="font-weight: 400;">[PhetioGroupOptions](../tandem/PhetioGroup.md#PhetioGroupOptions)</span> ) {: #PhetioGroup-constructor data-toc-label='new PhetioGroup' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### disposeElement( element : <span style="font-weight: 400;">T</span> ) {: #disposeElement data-toc-label='disposeElement' }

Remove an element from this Group, unregistering it from PhET-iO and disposing it.
The order is guaranteed to be:
1. remove from internal array
2. update countProperty
3. element.dispose
4. fire elementDisposedEmitter

@param element

#### getArray() : <span style="font-weight: 400;">T[]</span> {: #getArray data-toc-label='getArray' }

Gets a reference to the underlying array. DO NOT create/dispose elements while iterating, or otherwise modify
the array.  If you need to modify the array, use getArrayCopy.

#### getArrayCopy() : <span style="font-weight: 400;">T[]</span> {: #getArrayCopy data-toc-label='getArrayCopy' }

Gets a copy of the underlying array. Use this method if you need to create/dispose elements while iterating,
or otherwise modify the group's array.

#### getElement( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">T</span> {: #getElement data-toc-label='getElement' }

Returns the element at the specified index

#### getLastElement() : <span style="font-weight: 400;">T</span> {: #getLastElement data-toc-label='getLastElement' }

#### filter( predicate : <span style="font-weight: 400;">( t: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">T[]</span> {: #filter data-toc-label='filter' }

Returns an array with elements that pass the filter predicate.

#### includes( element : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #includes data-toc-label='includes' }

Does the group include the specified element?

#### indexOf( element : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #indexOf data-toc-label='indexOf' }

Gets the index of the specified element in the underlying array.

#### forEach( action : <span style="font-weight: 400;">( t: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #forEach data-toc-label='forEach' }

Runs the function on each element of the group.

#### find( predicate : <span style="font-weight: 400;">( t: T ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">T | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span></span> {: #find data-toc-label='find' }

Use the predicate to find the first matching occurrence in the array.

#### map( f : <span style="font-weight: 400;">( t: T ) =&gt; U</span> ) : <span style="font-weight: 400;">U[]</span> {: #map data-toc-label='map' }

Returns an array with every element mapped to a new one.

#### clear( providedOptions? : <span style="font-weight: 400;">PhetioGroupClearOptions</span> ) {: #clear data-toc-label='clear' }

Remove and dispose all registered group elements

#### createCorrespondingGroupElement( tandemName : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, ...argsForCreateFunction : <span style="font-weight: 400;">P</span> ) : <span style="font-weight: 400;">T</span> {: #createCorrespondingGroupElement data-toc-label='createCorrespondingGroupElement' }

When creating a view element that corresponds to a specific model element, we match the tandem name index suffix
so that electron_0 corresponds to electronNode_0 and so on.
@param tandemName - the tandem name of the model element
@param argsForCreateFunction - args to be passed to the create function, specified there are in the IOType
                                     `stateObjectToCreateElementArguments` method

#### createNextElement( ...argsForCreateFunction : <span style="font-weight: 400;">P</span> ) : <span style="font-weight: 400;">T</span> {: #createNextElement data-toc-label='createNextElement' }

Creates the next group element.
@param argsForCreateFunction - args to be passed to the create function, specified there are in the IOType
                                     `stateObjectToCreateElementArguments` method

#### createIndexedElement( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, argsForCreateFunction : <span style="font-weight: 400;">P</span>, fromStateSetting ) : <span style="font-weight: 400;">T</span> {: #createIndexedElement data-toc-label='createIndexedElement' }

Primarily for internal use, clients should usually use createNextElement.
The order is guaranteed to be:
1. instantiate element
2. add to internal array
3. update countProperty
4. fire elementCreatedEmitter

@param index - the number of the individual element
@param argsForCreateFunction
@param [fromStateSetting] - Used for validation during state setting.
(PhetioGroupIO)

### Instance Properties

#### countProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #countProperty data-toc-label='countProperty' }

(readonly)

### Static Properties

#### PhetioGroupIO {: #PhetioGroupIO data-toc-label='PhetioGroupIO' }

Parametric IOType constructor.  Given an element type, this function returns a PhetioGroup IOType.



## Type PhetioGroupOptions {: #PhetioGroupOptions }


```js
import type { PhetioGroupOptions } from 'scenerystack/tandem';
```


- **groupElementStartingIndex**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  What the tandem name index count should start at, default to 0
- &amp; [PhetioDynamicElementContainerOptions](../tandem/PhetioDynamicElementContainer.md#PhetioDynamicElementContainerOptions)




## Source Code

See the source for [PhetioGroup.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioGroup.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
