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

#### new NumberProperty( value : <span style="font-weight: 400; opacity: 80%;">number</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">NumberPropertyOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### reset() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reset data-toc-label='reset' }

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### setValueAndRange( value : <span style="font-weight: 400; opacity: 80%;">number</span>, range : <span style="font-weight: 400; opacity: 80%;">Range</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setValueAndRange data-toc-label='setValueAndRange' }

An atomic setting function that will set a range and a value at the same time, to make sure that validation does
not fail after one but has been set not the other.

#### resetValueAndRange() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #resetValueAndRange data-toc-label='resetValueAndRange' }

Resets the value and range atomically.
If you use setValueAndRange, you'll likely need to use this instead of reset.

#### toStateObject() : <span style="font-weight: 400; opacity: 80%;">NumberPropertySelfState &amp; ReadOnlyPropertyState&lt;StateType&gt;</span> {: #toStateObject data-toc-label='toStateObject' }

Get parent state and append NumberProperty-specific metadata to it.

### Instance Properties

#### rangeProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;Range&gt;</span> {: #rangeProperty data-toc-label='rangeProperty' }

(readonly)

### Static Properties

#### NumberPropertyIO : <span style="font-weight: 400; opacity: 80%;">IOType</span> {: #NumberPropertyIO data-toc-label='NumberPropertyIO' }



## Source Code

See the source for [NumberProperty.ts](https://github.com/phetsims/axon/blob/main/js/NumberProperty.ts) in the [axon](https://github.com/phetsims/axon) repository.
