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

#### new PatternStringProperty( patternProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;string&gt;</span>, values : <span style="font-weight: 400; opacity: 80%;">Values</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">PatternStringPropertyOptions&lt;Values&gt;</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods





## Source Code

See the source for [PatternStringProperty.ts](https://github.com/phetsims/axon/blob/main/js/PatternStringProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
