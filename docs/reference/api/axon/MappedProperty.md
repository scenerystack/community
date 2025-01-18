# MappedProperty

## Overview

Similar to DerivedProperty, but restricted to one Property and provides value-mapped and bidirectional support.
It's basically a DynamicProperty where you don't need to wrap it in an additional Property, and is typed a bit easier

For example:

const stringProperty = new Property&lt;string&gt;( 'hello' );
const lengthProperty = new MappedProperty( stringProperty, {
  map: ( str: string ) =&gt; str.length
} );
lengthProperty.value; // 5
stringProperty.value = 'hi';
lengthProperty.value; // 2

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class MappedProperty {: #MappedProperty }


```js
import { MappedProperty } from 'scenerystack/axon';
```
### Constructor

#### new MappedProperty( property : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;InputValueType&gt;</span>, providedOptions? : <span style="font-weight: 400;">[MappedPropertyOptions](../axon/MappedProperty.md#MappedPropertyOptions)&lt;ThisValueType, InputValueType&gt;</span> ) {: #MappedProperty-constructor data-toc-label='new MappedProperty' }

### Instance Methods





## Type MappedPropertyOptions {: #MappedPropertyOptions }


```js
import type { MappedPropertyOptions } from 'scenerystack/axon';
```


- **bidirectional**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If set to true then changes to this Property (if valuePropertyProperty.value is non-null at the time) will also be
  made to valuePropertyProperty.value.
- **map**?: ( ( inputValue: InputValueType ) =&gt; ThisValueType ) | [KeysMatching](../phet-core/KeysMatching.md)&lt;InputValueType, ThisValueType&gt;
<br>  Maps our input Property value to/from this Property's value. See top-level documentation for usage.
  If it's a string, it will grab that named property out (e.g. it's like passing u =&gt; u[ derive ])
- **inverseMap**?: ( ( thisValue: ThisValueType ) =&gt; InputValueType ) | [KeysMatching](../phet-core/KeysMatching.md)&lt;ThisValueType, InputValueType&gt;
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[DynamicPropertyOptions](../axon/DynamicProperty.md#DynamicPropertyOptions)&lt;ThisValueType, InputValueType, [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;InputValueType&gt;&gt;, "defaultValue" | "derive"&gt;




## Source Code

See the source for [MappedProperty.ts](https://github.com/phetsims/axon/blob/main/js/MappedProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
