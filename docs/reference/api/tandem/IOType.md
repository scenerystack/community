# IOType

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/types/IOType.ts](https://github.com/phetsims/tandem/blob/main/js/types/IOType.ts) for the most up-to-date information.

## Overview

IOTypes form a synthetic type system used to describe PhET-iO Elements. A PhET-iO Element is an instrumented PhetioObject
that is interoperable from the "wrapper" frame (outside the sim frame). An IOType includes documentation, methods,
names, serialization, etc.

@author Sam Reid (PhET Interactive Simulations)

## Class IOType {: #IOType }


StateType is the whole thing, SelfStateType is just at this level

```js
import { IOType } from 'scenerystack/tandem';
```
### Constructor

#### new IOType( typeName : <span style="font-weight: 400;">[IOTypeName](../tandem/phet-io-types.md#IOTypeName)</span>, providedOptions : <span style="font-weight: 400;">IOTypeOptions&lt;T, StateType, SelfStateType&gt;</span> ) {: #IOType-constructor data-toc-label='new IOType' }

### Instance Methods

#### toStateObject( coreObject : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">StateType</span> {: #toStateObject data-toc-label='toStateObject' }

#### fromStateObject( stateObject : <span style="font-weight: 400;">StateType</span> ) : <span style="font-weight: 400;">T</span> {: #fromStateObject data-toc-label='fromStateObject' }

#### applyState( coreObject : <span style="font-weight: 400;">T</span>, stateObject : <span style="font-weight: 400;">StateType</span> ) {: #applyState data-toc-label='applyState' }

#### stateObjectToCreateElementArguments( stateObject : <span style="font-weight: 400;">StateType</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>[]</span> {: #stateObjectToCreateElementArguments data-toc-label='stateObjectToCreateElementArguments' }

#### extends( type : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #extends data-toc-label='extends' }

Returns true if this IOType is a subtype of the passed-in type (or if they are the same).

#### getAllMetadataDefaults() : <span style="font-weight: 400;">Partial&lt;[PhetioElementMetadata](../tandem/phet-io-types.md#PhetioElementMetadata)&gt;</span> {: #getAllMetadataDefaults data-toc-label='getAllMetadataDefaults' }

Return all the metadata defaults (for the entire IOType hierarchy)

#### getAllDataDefaults() : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> {: #getAllDataDefaults data-toc-label='getAllDataDefaults' }

Return all the data defaults (for the entire IOType hierarchy)

#### getAllAPIStateKeys() : <span style="font-weight: 400;">[APIStateKeys](../tandem/StateSchema.md#APIStateKeys)</span> {: #getAllAPIStateKeys data-toc-label='getAllAPIStateKeys' }

Return all the apiStateKeys (for the entire IOType hierarchy) in one array.

#### toStateObjectForAPI( coreObject : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">StateType</span> {: #toStateObjectForAPI data-toc-label='toStateObjectForAPI' }

Get the state object for a PhET-iO Element, but only the entries that should be tracked by the PhET-iO API. See
StateSchema.apiStateKeys for details. This implementation sets a global to make sure that nested state also only
selects the apiStateKeys for api tracking (PropertyIO&lt;RangeIO&gt; could have validValues of PointIO that shouldn't
include non-tracked values of PointIO, if there are any).

#### isStateObjectValid( stateObject : <span style="font-weight: 400;">StateType</span>, toAssert, schemaKeysPresentInStateObject : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isStateObjectValid data-toc-label='isStateObjectValid' }

@param stateObject - the stateObject to validate against
@param toAssert=false - whether to assert when invalid
@param schemaKeysPresentInStateObject=[]
@returns if the stateObject is valid or not.

#### validateStateObject( stateObject : <span style="font-weight: 400;">StateType</span> ) {: #validateStateObject data-toc-label='validateStateObject' }

Assert if the provided stateObject is not valid to this IOType's stateSchema

#### toString() : <span style="font-weight: 400;">[IOTypeName](../tandem/phet-io-types.md#IOTypeName)</span> {: #toString data-toc-label='toString' }

#### getAPI() : <span style="font-weight: 400;">[PhetioType](../tandem/phet-io-types.md#PhetioType)</span> {: #getAPI data-toc-label='getAPI' }

Return an object that indicates the API type, including documentation, methods &amp; signatures, supertypes, etc.
The object is intended for serialization via JSON.stringify().

This function could be static, but that doesn't work well with the singleton pattern, so keep in on the prototype.

### Instance Properties

#### supertype : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #supertype data-toc-label='supertype' }

(readonly)

See documentation in options type declaration

#### documentation : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #documentation data-toc-label='documentation' }

(readonly)

#### methods : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, [IOTypeMethod](../tandem/IOType.md#IOTypeMethod)&gt;</span> {: #methods data-toc-label='methods' }

(readonly)

#### events : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> {: #events data-toc-label='events' }

(readonly)

#### metadataDefaults : <span style="font-weight: 400;">Partial&lt;[PhetioElementMetadata](../tandem/phet-io-types.md#PhetioElementMetadata)&gt;</span> {: #metadataDefaults data-toc-label='metadataDefaults' }

(readonly)

#### dataDefaults : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> {: #dataDefaults data-toc-label='dataDefaults' }

(readonly)

#### methodOrder : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> {: #methodOrder data-toc-label='methodOrder' }

(readonly)

#### parameterTypes : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)[]</span> {: #parameterTypes data-toc-label='parameterTypes' }

(readonly)

#### fromStateObjectOption : <span style="font-weight: 400;">( ( state: StateType ) =&gt; T ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #fromStateObjectOption data-toc-label='fromStateObjectOption' }

(readonly)

#### stateObjectToCreateElementArgumentsOption : <span style="font-weight: 400;">( ( s: StateType ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>[] ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #stateObjectToCreateElementArgumentsOption data-toc-label='stateObjectToCreateElementArgumentsOption' }

(readonly)

TODO: instead of unknown this is the second parameter type for PhetioDynamicElementContainer. How? https://github.com/phetsims/tandem/issues/261

#### addChildElement : <span style="font-weight: 400;">AddChildElement</span> {: #addChildElement data-toc-label='addChildElement' }

(readonly)

#### validator : <span style="font-weight: 400;">[Validator](../axon/Validation.md#Validator)&lt;T&gt;</span> {: #validator data-toc-label='validator' }

(readonly)

#### defaultDeserializationMethod : <span style="font-weight: 400;">DeserializationType</span> {: #defaultDeserializationMethod data-toc-label='defaultDeserializationMethod' }

(readonly)

#### isFunctionType : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFunctionType data-toc-label='isFunctionType' }

(readonly)

#### stateSchema : <span style="font-weight: 400;">[StateSchema](../tandem/StateSchema.md)&lt;T, SelfStateType&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #stateSchema data-toc-label='stateSchema' }

(readonly)

The StateSchema (type) that the option is made into. The option is more flexible than the class.

### Static Properties

#### ObjectIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #ObjectIO data-toc-label='ObjectIO' }

The base IOType for the entire hierarchy.



## Type IOTypeMethod {: #IOTypeMethod }


```js
import type { IOTypeMethod } from 'scenerystack/tandem';
```


- **returnType**: [IOType](../tandem/IOType.md)
- **parameterTypes**: [IOType](../tandem/IOType.md)[]
- **implementation**: ( ...args: [IntentionalAny](../phet-core/IntentionalAny.md)[] ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>
<br>  the function to execute when this method is called. This function's parameters will be based on `parameterTypes`,
  and should return the type specified by `returnType`
- **documentation**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **invocableForReadOnlyElements**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  by default, all methods are invocable for all elements. However, for some read-only elements, certain methods
  should not be invocable. In that case, they are marked as invocableForReadOnlyElements: false.




## Source Code

See the source for [IOType.ts](https://github.com/phetsims/tandem/blob/main/js/types/IOType.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
