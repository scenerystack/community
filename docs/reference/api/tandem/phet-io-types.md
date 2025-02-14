# phet-io-types

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/phet-io-types.ts](https://github.com/phetsims/tandem/blob/main/js/phet-io-types.ts) for the most up-to-date information.

## Overview

General TypeScript types that apply to PhET-iO features and architecture.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Type AbstractPhetioAPI {: #AbstractPhetioAPI }


Abstraction for flattened or treelike PhetioAPI

```js
import type { AbstractPhetioAPI } from 'scenerystack/tandem';
```


- **version**: [PhetioAPIVersion](../tandem/phet-io-types.md#PhetioAPIVersion)
- **phetioFullAPI**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **sim**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **phetioTypes**: [PhetioTypes](../tandem/phet-io-types.md#PhetioTypes)




## Type CompositeStateSchemaAPI {: #CompositeStateSchemaAPI }


```js
import type { CompositeStateSchemaAPI } from 'scenerystack/tandem';
```


Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, [IOTypeName](../tandem/phet-io-types.md#IOTypeName)&gt;



## Type FlattenedAPIPhetioElements {: #FlattenedAPIPhetioElements }


The PhET-iO API as it is easiest to use in code. This takes PhetioAPI type (nested elements) and "expands" (flattens)
each out so that the keys are phetioIDs.

```js
import type { FlattenedAPIPhetioElements } from 'scenerystack/tandem';
```


Record&lt;[PhetioID](../tandem/phet-io-types.md#PhetioID), [PhetioElement](../tandem/phet-io-types.md#PhetioElement)&gt;



## Type FullPhetioState {: #FullPhetioState }


```js
import type { FullPhetioState } from 'scenerystack/tandem';
```


Record&lt;[PhetioID](../tandem/phet-io-types.md#PhetioID), [PhetioElementState](../tandem/phet-io-types.md#PhetioElementState) | "DELETED"&gt;



## Type IOTypeName {: #IOTypeName }


```js
import type { IOTypeName } from 'scenerystack/tandem';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>



## Type Method {: #Method }


```js
import type { Method } from 'scenerystack/tandem';
```


- **returnType**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **parameterTypes**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]
- **documentation**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **invocableForReadOnlyElements**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Type Methods {: #Methods }


```js
import type { Methods } from 'scenerystack/tandem';
```


Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, [Method](../tandem/phet-io-types.md#Method)&gt;



## Type PhetioAPI {: #PhetioAPI }


The PhET-iO API json structure as it appears in the api files. This nests PhET-iO Elements like the Studio tree, in
part to save space in the file.

```js
import type { PhetioAPI } from 'scenerystack/tandem';
```


[AbstractPhetioAPI](../tandem/phet-io-types.md#AbstractPhetioAPI) &amp; { phetioElements: [PhetioElements](../tandem/phet-io-types.md#PhetioElements) }



## Type PhetioAPIVersion {: #PhetioAPIVersion }


```js
import type { PhetioAPIVersion } from 'scenerystack/tandem';
```


- **major**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **minor**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Type PhetioElement {: #PhetioElement }


```js
import type { PhetioElement } from 'scenerystack/tandem';
```


- **_metadata**: [PhetioElementMetadata](../tandem/phet-io-types.md#PhetioElementMetadata)
- **_data**?: [PhetioElementData](../tandem/phet-io-types.md#PhetioElementData)




## Type PhetioElementData {: #PhetioElementData }


```js
import type { PhetioElementData } from 'scenerystack/tandem';
```


- **initialState**: [PhetioElementState](../tandem/phet-io-types.md#PhetioElementState)




## Type PhetioElementMetadata {: #PhetioElementMetadata }


```js
import type { PhetioElementMetadata } from 'scenerystack/tandem';
```


- **phetioState**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Used in PhetioObjectOptions
- **phetioReadOnly**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **phetioEventType**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **phetioDocumentation**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **phetioHighFrequency**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **phetioPlayback**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **phetioFeatured**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **phetioDynamicElement**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **phetioDesigned**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **phetioTypeName**: [IOTypeName](../tandem/phet-io-types.md#IOTypeName)
<br>  Specific to Metadata
- **phetioIsArchetype**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **phetioArchetypePhetioID**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **phetioDynamicElementName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  For PhetioDynamicElementContainer.




## Type PhetioElementMetadataValue {: #PhetioElementMetadataValue }


```js
import type { PhetioElementMetadataValue } from 'scenerystack/tandem';
```


[PhetioElementMetadata](../tandem/phet-io-types.md#PhetioElementMetadata)[keyof [PhetioElementMetadata](../tandem/phet-io-types.md#PhetioElementMetadata)]



## Type PhetioElements {: #PhetioElements }


In tree structure

```js
import type { PhetioElements } from 'scenerystack/tandem';
```


- &amp; [PhetioElement](../tandem/phet-io-types.md#PhetioElement)




## Type PhetioElementState {: #PhetioElementState }


The "top level" state associated with a phetioID in state. This is NOT and never should be a "substate" or nested.
value within a top-level state.

```js
import type { PhetioElementState } from 'scenerystack/tandem';
```


Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, [IntentionalAny](../phet-core/IntentionalAny.md)&gt;



## Type PhetioID {: #PhetioID }


```js
import type { PhetioID } from 'scenerystack/tandem';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>



## Type PhetioOverrides {: #PhetioOverrides }


```js
import type { PhetioOverrides } from 'scenerystack/tandem';
```


Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, Partial&lt;[PhetioElementMetadata](../tandem/phet-io-types.md#PhetioElementMetadata)&gt;&gt;



## Type PhetioState {: #PhetioState }


```js
import type { PhetioState } from 'scenerystack/tandem';
```


Record&lt;[PhetioID](../tandem/phet-io-types.md#PhetioID), [PhetioElementState](../tandem/phet-io-types.md#PhetioElementState)&gt;



## Type PhetioType {: #PhetioType }


The API schema, for the actual class on the sim side see IOType.ts

```js
import type { PhetioType } from 'scenerystack/tandem';
```


- **methods**: [Methods](../tandem/phet-io-types.md#Methods)
- **supertype**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **typeName**: [IOTypeName](../tandem/phet-io-types.md#IOTypeName)
- **documentation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **events**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]
- **metadataDefaults**?: Partial&lt;[PhetioElementMetadata](../tandem/phet-io-types.md#PhetioElementMetadata)&gt;
- **dataDefaults**?: Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;
- **methodOrder**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]
- **stateSchema**?: [StateSchemaAPI](../tandem/phet-io-types.md#StateSchemaAPI)
- **apiStateKeys**?: ( keyof [CompositeStateSchemaAPI](../tandem/phet-io-types.md#CompositeStateSchemaAPI) )[]
- **parameterTypes**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]




## Type PhetioTypes {: #PhetioTypes }


```js
import type { PhetioTypes } from 'scenerystack/tandem';
```


Record&lt;[IOTypeName](../tandem/phet-io-types.md#IOTypeName), [PhetioType](../tandem/phet-io-types.md#PhetioType)&gt;



## Type StateSchemaAPI {: #StateSchemaAPI }


```js
import type { StateSchemaAPI } from 'scenerystack/tandem';
```


<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [CompositeStateSchemaAPI](../tandem/phet-io-types.md#CompositeStateSchemaAPI)



## Source Code

See the source for [phet-io-types.ts](https://github.com/phetsims/tandem/blob/main/js/phet-io-types.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
