# NumberProperty

## Overview

Property whose value must be a number.

@author Chris Malley (PixelZoom, Inc.)
@author Sam Reid (PhET Interactive Simulations)

## Class NumberProperty {: #NumberProperty }


```js
import { NumberProperty } from 'scenerystack/axon';
```
### Constructor

#### new NumberProperty( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">[NumberPropertyOptions](../axon/NumberProperty.md#NumberPropertyOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### reset() {: #reset data-toc-label='reset' }

#### dispose() {: #dispose data-toc-label='dispose' }

#### setValueAndRange( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span> ) {: #setValueAndRange data-toc-label='setValueAndRange' }

An atomic setting function that will set a range and a value at the same time, to make sure that validation does
not fail after one but has been set not the other.

#### resetValueAndRange() {: #resetValueAndRange data-toc-label='resetValueAndRange' }

Resets the value and range atomically.
If you use setValueAndRange, you'll likely need to use this instead of reset.

#### toStateObject() : <span style="font-weight: 400;">NumberPropertySelfState &amp; [ReadOnlyPropertyState](../axon/ReadOnlyProperty.md#ReadOnlyPropertyState)&lt;StateType&gt;</span> {: #toStateObject data-toc-label='toStateObject' }

Get parent state and append NumberProperty-specific metadata to it.

### Instance Properties

#### rangeProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;[Range](../dot/Range.md)&gt;</span> {: #rangeProperty data-toc-label='rangeProperty' }

(readonly)

### Static Properties

#### NumberPropertyIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #NumberPropertyIO data-toc-label='NumberPropertyIO' }



## Type NumberPropertyOptions {: #NumberPropertyOptions }


```js
import type { NumberPropertyOptions } from 'scenerystack/axon';
```
- **numberType**?: NumberType
- **range**?: [Range](../dot/Range.md) | [Property](../axon/Property.md)&lt;[Range](../dot/Range.md)&gt;
- **rangePropertyOptions**?: [PropertyOptions](../axon/Property.md#PropertyOptions)&lt;[Range](../dot/Range.md)&gt;
- &amp; StrictOmit&lt;[PropertyOptions](../axon/Property.md#PropertyOptions)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;, "phetioValueType" | "valueType"&gt;




## Type NumberPropertyState {: #NumberPropertyState }


```js
import type { NumberPropertyState } from 'scenerystack/axon';
```
- **numberType**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **range**: [RangeStateObject](../dot/Range.md#RangeStateObject)
- **rangePhetioID**: PhetioID | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [ReadOnlyPropertyState](../axon/ReadOnlyProperty.md#ReadOnlyPropertyState)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;




## Source Code

See the source for [NumberProperty.ts](https://github.com/phetsims/axon/blob/main/js/NumberProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
