# PhetioObject

## Overview

Base type that provides PhET-iO features. An instrumented PhetioObject is referred to on the wrapper side/design side
as a "PhET-iO Element".  Note that sims may have hundreds or thousands of PhetioObjects, so performance and memory
considerations are important.  For this reason, initializePhetioObject is only called in PhET-iO brand, which means
many of the getters such as `phetioState` and `phetioDocumentation` will not work in other brands. We have opted
to have these getters throw assertion errors in other brands to help identify problems if these are called
unexpectedly.

@author Sam Reid (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Type PhetioObjectOptions {: #PhetioObjectOptions }


```js
import type { PhetioObjectOptions } from 'scenerystack/tandem';
```


- **tandem**?: [Tandem](../tandem/Tandem.md)
- **descriptionTandem**?: [Tandem](../tandem/Tandem.md)
- **phetioType**?: [IOType](../tandem/IOType.md)
- **phetioEventType**?: [EventType](../tandem/EventType.md)
- **phetioEventMetadata**?: EventMetadata | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **tandemNameSuffix**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; StrictOmit&lt;Partial&lt;PhetioElementMetadata&gt;, "phetioTypeName" | "phetioArchetypePhetioID" | "phetioIsArchetype" | "phetioEventType"&gt; &amp; [DisposableOptions](../axon/Disposable.md#DisposableOptions)




## Source Code

See the source for [PhetioObject.ts](https://github.com/phetsims/tandem/blob/main/js/PhetioObject.ts) in the [tandem](https://github.com/phetsims/tandem) repository.
