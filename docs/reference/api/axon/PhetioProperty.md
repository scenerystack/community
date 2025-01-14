# PhetioProperty

## Overview

@author Michael Kauzmann (PhET Interactive Simulations)

## Type PhetioProperty {: #PhetioProperty }


When calling PhetioObject.addLinkedElement, the parameter must be a PhetioObject, so this type alias covers that ground
and helps with cases like LocalizedStringProperty (and DynamicProperty in general) which satisfies the TProperty
interface and is a PhetioObject. It is best to try to use the ReadOnlyProperty class hierarchy first, and this Type
Alias can help cover cases where that doesn't work, see https://github.com/phetsims/tandem/issues/299

```js
import type { PhetioProperty } from 'scenerystack/axon';
```
[TProperty](../axon/TProperty.md)&lt;T&gt; &amp; [PhetioObject](../tandem/PhetioObject.md)



## Source Code

See the source for [PhetioProperty.ts](https://github.com/phetsims/axon/blob/main/js/PhetioProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
