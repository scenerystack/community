# NumberAccumulator

## Overview

A key accumulator that collects user input for integer and floating point values, intended for use in conjunction
with the common-code keypad.

@author Aadish Gupta
@author John Blanco
@author Chris Malley (PixelZoom, Inc.)

## Class NumberAccumulator {: #NumberAccumulator }


```js
import { NumberAccumulator } from 'scenerystack/scenery-phet';
```
### Constructor

#### new NumberAccumulator( providedOptions? : <span style="font-weight: 400;">[NumberAccumulatorOptions](../scenery-phet/NumberAccumulator.md#NumberAccumulatorOptions)</span> ) {: #NumberAccumulator-constructor data-toc-label='new NumberAccumulator' }

### Instance Methods

#### handleKeyPressed( keyIdentifier : <span style="font-weight: 400;">[KeyIDValue](../scenery-phet/KeyID.md#KeyIDValue)</span> ) {: #handleKeyPressed data-toc-label='handleKeyPressed' }

Invoked when a key is pressed and creates proposed set of keys to be passed to the validator
@param keyIdentifier - identifier for the key pressed

#### clear() {: #clear data-toc-label='clear' }

clear the accumulator

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### stringProperty : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span> {: #stringProperty data-toc-label='stringProperty' }

(readonly)

string representation of the keys entered by the user

#### valueProperty : <span style="font-weight: 400;">[ReadOnlyProperty](../axon/ReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #valueProperty data-toc-label='valueProperty' }

(readonly)

numerical value of the keys entered by the user



## Type NumberAccumulatorOptions {: #NumberAccumulatorOptions }


```js
import type { NumberAccumulatorOptions } from 'scenerystack/scenery-phet';
```


- **maxDigitsRightOfMantissa**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxDigits**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; Pick&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "tandem" | "tandemNameSuffix"&gt;




## Source Code

See the source for [NumberAccumulator.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keypad/NumberAccumulator.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
