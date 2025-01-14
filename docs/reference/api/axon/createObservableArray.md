# createObservableArray

## Overview

createObservableArray conforms to the Proxy interface, which is polluted with `any` types.  Therefore we disable
this rule for this file.
/* eslint-disable @typescript-eslint/no-explicit-any */
Creates an object that has the same API as an Array, but also supports notifications and PhET-iO. When an item
is added or removed, the lengthProperty changes before elementAddedEmitter or elementRemovedEmitter emit.

@author Sam Reid (PhET Interactive Simulations)

## Type ObservableArrayOptions {: #ObservableArrayOptions }


```js
import type { ObservableArrayOptions } from 'scenerystack/axon';
```


- **length**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **elements**?: T[]
- **hasListenerOrderDependencies**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **elementAddedEmitterOptions**?: StrictOmit&lt;[EmitterOptions](../axon/Emitter.md#EmitterOptions), "[tandem](../tandem/tandem.md)" | "parameters" | "phetioReadOnly"&gt;
- **elementRemovedEmitterOptions**?: StrictOmit&lt;[EmitterOptions](../axon/Emitter.md#EmitterOptions), "[tandem](../tandem/tandem.md)" | "parameters" | "phetioReadOnly"&gt;
- **lengthPropertyOptions**?: StrictOmit&lt;[NumberPropertyOptions](../axon/NumberProperty.md#NumberPropertyOptions), "[tandem](../tandem/tandem.md)" | "numberType" | "phetioReadOnly"&gt;
- &amp; [PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions)




## Source Code

See the source for [createObservableArray.ts](https://github.com/phetsims/axon/blob/main/js/createObservableArray.ts) in the [axon](https://github.com/phetsims/axon) repository.
