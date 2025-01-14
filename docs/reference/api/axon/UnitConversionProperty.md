# UnitConversionProperty

## Overview

A MappedProperty specialized for unit conversion. Just provide multiplicative factor to convert between the units,
or optionally a map/inverseMap. Additionally if there is a rangeProperty on the source, this Property will have a
mapped range.

For example:
const metersProperty = new NumberProperty( 0.5, { range: new Range( 0, 1 ) } );
const centimetersProperty = new UnitConversionProperty( metersProperty, { factor: 100 } );
centimetersProperty.value; // 50
centimetersProperty.range; // Range( 0, 100 )

// One way
metersProperty.value = 0.25
centimetersProperty.value; // 25

// Bidirectional
centimetersProperty.value = 100;
metersProperty.value; // 1

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class UnitConversionProperty {: #UnitConversionProperty }


```js
import { UnitConversionProperty } from 'scenerystack/axon';
```
### Constructor

#### new UnitConversionProperty( property : <span style="font-weight: 400;">( [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; | [TRangedProperty](../axon/TRangedProperty.md) )</span>, providedOptions : <span style="font-weight: 400;">[UnitConversionPropertyOptions](../axon/UnitConversionProperty.md#UnitConversionPropertyOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### rangeProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Range](../dot/Range.md)&gt;</span> {: #rangeProperty data-toc-label='rangeProperty' }

(readonly)



## Type UnitConversionPropertyOptions {: #UnitConversionPropertyOptions }


```js
import type { UnitConversionPropertyOptions } from 'scenerystack/axon';
```
- **factor**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [MappedPropertyOptions](../axon/MappedProperty.md#MappedPropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;




## Source Code

See the source for [UnitConversionProperty.ts](https://github.com/phetsims/axon/blob/main/js/UnitConversionProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
