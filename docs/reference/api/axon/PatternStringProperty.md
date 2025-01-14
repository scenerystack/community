# PatternStringProperty

## Overview

A DerivedProperty that applies a string pattern (like StringUtils.fillIn). It has options for mapping values,
either with decimalPlaces or an arbitrary function so that there is just one Property set up for disposal.

PatternStringPropertyTests.ts has many examples that may be useful!

Basic usage can involve values as Properties or directly as values (both work):

| const patternStringProperty = new TinyProperty( '{{valueA}} + {{valueB}}' );
| const property = new PatternStringProperty( patternStringProperty, {
|   valueA: 5,
|   valueB: new TinyProperty( 7 )
| } );
| property.value; // '5 + 7'

Did your string use StringUtils.format? formatNames can be used to be compatible:

| const property = new PatternStringProperty( new TinyProperty( '{0} + {1}' ), {
|   valueA: 5,
|   valueB: new TinyProperty( 7 )
| }, {
|   formatNames: [ 'valueA', 'valueB' ]
| } );
| property.value; // '5 + 7'

Want to apply unit conversions or other formulas? Use maps

| const gramsProperty = new TinyProperty( 2000 );
| new PatternStringProperty( new TinyProperty( '{{kilograms}} kg' ), {
|   kilograms: gramsProperty
| }, {
|   maps: {
|     kilograms: ( grams: number ) =&gt; grams / 1000
|   }
| } );
| property.value; // '2 kg'

Using a numeric value, and want to show a certain number of decimal places? Use decimalPlaces!

| const gramsProperty = new TinyProperty( 2143 );
| new PatternStringProperty( new TinyProperty( '{{kilograms}} kg' ), {
|   kilograms: gramsProperty
| }, {
|   maps: {
|     kilograms: ( grams: number ) =&gt; grams / 1000
|   },
|   decimalPlaces: 2
| } );
| property.value; // '2.14 kg'

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PatternStringProperty {: #PatternStringProperty }


```js
import { PatternStringProperty } from 'scenerystack/axon';
```
### Constructor

#### new PatternStringProperty( patternProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, values : <span style="font-weight: 400;">Values</span>, providedOptions? : <span style="font-weight: 400;">[PatternStringPropertyOptions](../axon/PatternStringProperty.md#PatternStringPropertyOptions)&lt;Values&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods





## Type PatternStringPropertyOptions {: #PatternStringPropertyOptions }


```js
import type { PatternStringPropertyOptions } from 'scenerystack/axon';
```


- **decimalPlaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | Record&lt;keyof Values, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **formatNames**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>[]
- &amp; ( KeysNotMatching&lt;Values, StringNumberOrProperty&gt; extends <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">never</span> ? {
    // Maps the input <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>/numeric values (depending on the [Property](../axon/Property.md) type) to a <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> or <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>. Decimal places will be
    // applied after <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span> step (if it returns a <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>).
    //
    // For example:
    // | const stringProperty = new [TinyProperty](../axon/TinyProperty.md)( '{{grams}} grams' );
    // | const kilogramsProperty = new [TinyProperty](../axon/TinyProperty.md)( 5.12 );
    // | new [PatternStringProperty](../axon/PatternStringProperty.md)( stringProperty, { preposition: kilogramsProperty }, {
    // |   maps: { preposition: kilograms =&gt; kilograms / 1000 }
    // | } );
    maps?: MapsType&lt;Values&gt;;
  } : {
      // Make <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span> [required](../phet-core/required.md) if someone's passing in something that is of a non-<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>/<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> type
      maps: MapsType&lt;Values&gt;;
    } ) &amp; [DerivedStringPropertyOptions](../axon/DerivedStringProperty.md#DerivedStringPropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;




## Source Code

See the source for [PatternStringProperty.ts](https://github.com/phetsims/axon/blob/main/js/PatternStringProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
