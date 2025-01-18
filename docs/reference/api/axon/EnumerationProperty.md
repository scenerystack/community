# EnumerationProperty

## Overview

Property support for rich enumeration types.

@author Sam Reid (PhET Interactive Simulations)

## Class EnumerationProperty {: #EnumerationProperty }


```js
import { EnumerationProperty } from 'scenerystack/axon';
```
### Constructor

#### new EnumerationProperty( value : <span style="font-weight: 400;">T</span>, providedOptions? : <span style="font-weight: 400;">[EnumerationPropertyOptions](../axon/EnumerationProperty.md#EnumerationPropertyOptions)&lt;T&gt;</span> ) {: #EnumerationProperty-constructor data-toc-label='new EnumerationProperty' }

### Instance Methods





## Type EnumerationPropertyOptions {: #EnumerationPropertyOptions }


```js
import type { EnumerationPropertyOptions } from 'scenerystack/axon';
```


- **enumeration**?: [Enumeration](../phet-core/Enumeration.md)&lt;T&gt;
<br>  By default, this will be taken from the initial value, but if subtyping enumerations, you must provide this
  manually to make sure it is set to the correct, subtype value, see https://github.com/phetsims/phet-core/issues/102
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[PropertyOptions](../axon/ReadOnlyProperty.md#PropertyOptions)&lt;T&gt;, "phetioValueType"&gt;




## Source Code

See the source for [EnumerationProperty.ts](https://github.com/phetsims/axon/blob/main/js/EnumerationProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
