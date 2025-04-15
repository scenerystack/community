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
  When true, includes the PhET-iO Element in the PhET-iO state (not automatically recursive, must be specified for
  children explicitly)
- **phetioReadOnly**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When true, you can only get values from the PhET-iO Element; no setting allowed.
  This option controls how PhET-iO wrappers can interface with this PhetioObject. Predominately this occurs via
  public methods defined on this PhetioObject's phetioType, in which some method are not executable when this flag
  is true. See `ObjectIO.methods` for further documentation, especially regarding `invocableForReadOnlyElements`.
  NOTE: PhetioObjects with {phetioState: true} AND {phetioReadOnly: true} are restored during via setState.
- **phetioEventType**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  The category of event that this element emits to the PhET-iO Data Stream.
- **phetioDocumentation**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  Useful notes about a PhET-iO Element, shown in the PhET-iO Studio Wrapper. It's an html
  string, so "&lt;br&gt;" tags are required instead of "\n" characters for proper rendering in Studio. NOTE! You must
  escape any HTML characters that are not intended to be rendered as HTML, use _.escape().
- **phetioHighFrequency**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  High frequency events such as mouse moves can be omitted from data stream, see ?phetioEmitHighFrequencyEvents
  and PhetioClient.launchSimulation option
  @deprecated - see https://github.com/phetsims/phet-io/issues/1629#issuecomment-608002410
- **phetioPlayback**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When true, emits events for data streams for playback, see handlePlaybackEvent.js
  @deprecated
- **phetioFeatured**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When true, this is categorized as an important "featured" element in Studio.
  If this is a featured PhET-iO Element.
  LinkedElements have no phetioFeatured because they defer to their core element
- **phetioDynamicElement**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If this element is a "dynamic element" that can be created and destroyed throughout the lifetime of the sim (as opposed to existing forever).
  indicates that an object may or may not have been created. Applies recursively automatically
  and should only be set manually on the root dynamic element. Dynamic archetypes will have this overwritten to
  false even if explicitly provided as true, as archetypes cannot be dynamic.
- **phetioDesigned**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Marking phetioDesigned: true opts-in to API change detection tooling that can be used to catch inadvertent
  changes to a designed API.  A phetioDesigned:true PhetioObject (or any of its tandem descendants) will throw
  assertion errors on CT (or when running with ?phetioCompareAPI) when the following are true:
  (a) its package.json lists compareDesignedAPIChanges:true in the "phet-io" section
  (b) the simulation is listed in perennial/data/phet-io-api-stable
  (c) any of its metadata values deviate from the reference API
- **phetioTypeName**: [IOTypeName](../tandem/phet-io-types.md#IOTypeName)
<br>  Specific to Metadata
  The name of the PhET-iO Type
- **phetioIsArchetype**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If this element is an archetype for a dynamic element.
- **phetioArchetypePhetioID**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If an applicable dynamic element, this is the phetioID of its archetype.
- **phetioDynamicElementName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Specific to PhetioDynamicElementContainer instance, see that file for doc.




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
