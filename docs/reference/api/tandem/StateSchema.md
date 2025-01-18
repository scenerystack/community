# StateSchema

## Overview

Class responsible for storing information about the schema of PhET-iO state. See IOType stateSchema option for usage
and more information.

There are two types of StateSchema:
- The first is a stateSchema "value". This is when the state of an IOType is itself a value in the state. In
effect, this just serves as boilerplate, and isn't the primary usage of stateSchema. For example, a StringIO or
NumberIO.
- The second is a "composite", where the state of an IOType is made from subcomponents, each of which have an IOType.
A composite schema was named because it is a sum of its parts. For example a BunnyIO has multiple components that
make it up (mother/father/age/etc). Check which type of StateSchema your instance is with StateSchema.isComposite().

When stored in the API, StateSchema values are stored as strings, see StateSchema.asValue, and composite state schemas
are stored as objects with values that are each IOType names.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class StateSchema {: #StateSchema }


```js
import { StateSchema } from 'scenerystack/tandem';
```
### Constructor

#### new StateSchema( providedOptions? : <span style="font-weight: 400;">StateSchemaOptions&lt;SelfStateType&gt;</span> ) {: #StateSchema-constructor data-toc-label='new StateSchema' }

### Instance Methods

#### defaultApplyState( coreObject : <span style="font-weight: 400;">T</span>, stateObject : <span style="font-weight: 400;">[CompositeStateObjectType](../tandem/StateSchema.md#CompositeStateObjectType)</span> ) {: #defaultApplyState data-toc-label='defaultApplyState' }

This method provides a default implementation for setting a stateObject onto an object from the stateSchema information.
It supports the coreObject keys as private, underscore-prefixed field, as
well as if the coreObject has an es5 setter instead of an actual field.

#### defaultToStateObject( coreObject : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">SelfStateType</span> {: #defaultToStateObject data-toc-label='defaultToStateObject' }

This method provides a default implementation for creating a stateObject from the stateSchema by accessing those
same key names on the coreObject instance. It supports those keys as private, underscore-prefixed field, as
well as if the coreObject has an es5 getter instead of an actual field.

#### isComposite() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isComposite data-toc-label='isComposite' }

True if the StateSchema is a composite schema. See the header documentation in this file for the definition
of "composite" schema.

#### checkStateObjectValid( stateObject : <span style="font-weight: 400;">SelfStateType</span>, toAssert : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, schemaKeysPresentInStateObject : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #checkStateObjectValid data-toc-label='checkStateObjectValid' }

Check if a given stateObject is as valid as can be determined by this StateSchema. Will return null if valid, but
needs more checking up and down the hierarchy.

@param stateObject - the stateObject to validate against
@param toAssert - whether to assert when invalid
@param schemaKeysPresentInStateObject - to be populated with any keys this StateSchema is responsible for.
@returns boolean if validity can be checked, null if valid, but next in the hierarchy is needed

#### getRelatedTypes() : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)[]</span> {: #getRelatedTypes data-toc-label='getRelatedTypes' }

Get a list of all IOTypes associated with this StateSchema

#### getStateSchemaAPI() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | CompositeSchemaAPI</span> {: #getStateSchemaAPI data-toc-label='getStateSchemaAPI' }

Returns a unique identified for this stateSchema, or an object of the stateSchemas for each sub-component in the composite
(phet-io internal)

### Instance Properties

#### compositeSchema : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | [CompositeSchema](../tandem/StateSchema.md#CompositeSchema)&lt;SelfStateType&gt;</span> {: #compositeSchema data-toc-label='compositeSchema' }

(readonly)

"composite" state schemas are treated differently that value state schemas

#### apiStateKeys : <span style="font-weight: 400;">[APIStateKeys](../tandem/StateSchema.md#APIStateKeys) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #apiStateKeys data-toc-label='apiStateKeys' }

(readonly)

### Static Methods

#### asValue( displayString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, validator : <span style="font-weight: 400;">[Validator](../axon/Validation.md#Validator)&lt;[IntentionalAny](../phet-core/IntentionalAny.md)&gt;</span> ) : <span style="font-weight: 400;">[StateSchema](../tandem/StateSchema.md)&lt;T, StateType&gt;</span> {: #asValue data-toc-label='asValue' }

Factory function for StateSchema instances that represent a single value of state. This is opposed to a composite
schema of sub-components.



## Type APIStateKeys {: #APIStateKeys }


```js
import type { APIStateKeys } from 'scenerystack/tandem';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]



## Type CompositeSchema {: #CompositeSchema }


This is the primary functionality of the StateSchema class. An IOType can be provided a composite schema like so:
{
  subcomponent1: StringIO;
  subcomponent2: NumberIO;
}
By providing this, you are giving the schema to allow StateSchema to serialize and deserialize itself based on the
composite schema.

```js
import type { CompositeSchema } from 'scenerystack/tandem';
```


{
  // [K in keyof SelfStateType]: [IOType](../tandem/IOType.md) | { myIOType: [IOType](../tandem/IOType.md); isAPIStateful: true };
  [K in keyof SelfStateType]: [IOType](../tandem/IOType.md)
}



## Type CompositeStateObjectType {: #CompositeStateObjectType }


The schema of the stateObject value

```js
import type { CompositeStateObjectType } from 'scenerystack/tandem';
```


Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, [IntentionalAny](../phet-core/IntentionalAny.md)&gt;



## Type StateObject {: #StateObject }


Pluck the result toStateObject types from the CompositeSchema. For instance, map a state schema like so:
{name: StringIO} =&gt; {name: string}

```js
import type { StateObject } from 'scenerystack/tandem';
```


{
  [key in keyof T]: ReturnType&lt;T[key]['toStateObject']&gt;;
}



## Source Code

See the source for [StateSchema.ts](https://github.com/phetsims/tandem/blob/main/js/types/StateSchema.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
