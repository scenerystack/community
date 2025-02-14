# PhetioObject

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tandem/blob/main/js/PhetioObject.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioObject.ts) for the most up-to-date information.

## Overview

Base type that provides PhET-iO features. An instrumented PhetioObject is referred to on the wrapper side/design side
as a "PhET-iO Element".  Note that sims may have hundreds or thousands of PhetioObjects, so performance and memory
considerations are important.  For this reason, initializePhetioObject is only called in PhET-iO brand, which means
many of the getters such as `phetioState` and `phetioDocumentation` will not work in other brands. We have opted
to have these getters throw assertion errors in other brands to help identify problems if these are called
unexpectedly.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Type PhetioObjectMetadataInput {: #PhetioObjectMetadataInput }


A type that is used for the structural typing when gathering metadata. We just need a "PhetioObject-like" entity
to pull the API metadata from. Thus, this is the "input" to logic that would pull the metadata keys into an object
for the PhetioAPI.

```js
import type { PhetioObjectMetadataInput } from 'scenerystack/tandem';
```


Pick&lt;[PhetioObject](../tandem/PhetioObject.md), PhetioObjectMetadataKeys&gt;



## Type PhetioObjectOptions {: #PhetioObjectOptions }


```js
import type { PhetioObjectOptions } from 'scenerystack/tandem';
```


- **tandem**?: [Tandem](../tandem/Tandem.md)
<br>  This is the only place in the project where this is allowed
- **descriptionTandem**?: [Tandem](../tandem/Tandem.md)
- **phetioType**?: [IOType](../tandem/IOType.md)
- **phetioEventType**?: [EventType](../tandem/EventType.md)
- **phetioEventMetadata**?: EventMetadata | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **tandemNameSuffix**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  The element's tandem name must have a specified suffix. This is to enforce naming conventions for PhET-iO.
  If string[] is provided, the tandem name must have a suffix that matches one of the strings in the array.
  null means that there is no constraint on tandem name. The first character is not case-sensitive, to support
  uses like 'thermometerNode' versus 'upperThermometerNode'.
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;Partial&lt;[PhetioElementMetadata](../tandem/phet-io-types.md#PhetioElementMetadata)&gt;, "phetioTypeName" | "phetioArchetypePhetioID" | "phetioIsArchetype" | "phetioEventType"&gt; &amp; [DisposableOptions](../axon/Disposable.md#DisposableOptions)




## Source Code

See the source for [PhetioObject.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioObject.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
