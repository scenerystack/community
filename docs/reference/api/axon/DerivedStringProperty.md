# DerivedStringProperty

## Overview

DerivedStringProperty is typically used for strings that are derived from LocalizedStringProperty
(translatable strings, generated from the {{REPO}}-strings_en.json file via 'grunt modulify') and/or other instances
of DerivedStringProperty. Using this class ensures that code follows PhET-iO instrumentation standards,
and makes occurrences of this type of string Property easier to identify.

Responsibilities include:
 - ensures that the derivation returns a string
 - adds proper PhET-iO metadata, with defaults that have been specified by PhET-iO design, which can be
   overridden where appropriate (e.g. phetioFeatured) and are not part of the public API where they should
   not be overridable (e.g. phetioValueType)

Note that you can also use DerivedStringProperty for model/logic strings that are not translated. But you'll
need to consider whether you want to override the default of phetioFeatured: true, which was chosen as the default
for translated strings.

See https://github.com/phetsims/phet-io/issues/1943

@author Chris Malley (PixelZoom, Inc.)

## Class DerivedStringProperty {: #DerivedStringProperty }


```js
import { DerivedStringProperty } from 'scenerystack/axon';
```
### Constructor

#### new DerivedStringProperty( dependencies : <span style="font-weight: 400;">Dependencies&lt;T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15&gt;</span>, derivation : <span style="font-weight: 400;">( ...params: [ T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15 ] ) =&gt; T</span>, providedOptions? : <span style="font-weight: 400;">[DerivedStringPropertyOptions](../axon/DerivedStringProperty.md#DerivedStringPropertyOptions)&lt;T&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods





## Type DerivedStringPropertyOptions {: #DerivedStringPropertyOptions }


```js
import type { DerivedStringPropertyOptions } from 'scenerystack/axon';
```


StrictOmit&lt;SuperOptions&lt;T&gt;, "phetioValueType"&gt; &amp; [DerivedPropertyOptions](../axon/DerivedProperty.md#DerivedPropertyOptions)&lt;T&gt;



## Source Code

See the source for [DerivedStringProperty.ts](https://github.com/phetsims/axon/blob/main/js/DerivedStringProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
