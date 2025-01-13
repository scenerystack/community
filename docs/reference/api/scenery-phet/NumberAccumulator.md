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

#### new NumberAccumulator( providedOptions? : <span style="font-weight: 400; opacity: 80%;">NumberAccumulatorOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### handleKeyPressed( keyIdentifier : <span style="font-weight: 400; opacity: 80%;">KeyIDValue</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #handleKeyPressed data-toc-label='handleKeyPressed' }

Invoked when a key is pressed and creates proposed set of keys to be passed to the validator
@param keyIdentifier - identifier for the key pressed

#### clear() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #clear data-toc-label='clear' }

clear the accumulator

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Instance Properties

#### stringProperty : <span style="font-weight: 400; opacity: 80%;">ReadOnlyProperty&lt;string&gt;</span> {: #stringProperty data-toc-label='stringProperty' }

(readonly)

string representation of the keys entered by the user

#### valueProperty : <span style="font-weight: 400; opacity: 80%;">ReadOnlyProperty&lt;number | null&gt;</span> {: #valueProperty data-toc-label='valueProperty' }

(readonly)

numerical value of the keys entered by the user



## Source Code

See the source for [NumberAccumulator.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keypad/NumberAccumulator.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
