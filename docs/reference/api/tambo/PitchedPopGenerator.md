# PitchedPopGenerator

## Overview

sound generator that produces a popping sound with controllable pitch

@author John Blanco (PhET Interactive Simulations)
@author Michael Kauzmann (PhET Interactive Simulations)

## Class PitchedPopGenerator {: #PitchedPopGenerator }


```js
import { PitchedPopGenerator } from 'scenerystack/tambo';
```
### Constructor

#### new PitchedPopGenerator( providedOptions? : <span style="font-weight: 400;">[PitchedPopGeneratorOptions](../tambo/PitchedPopGenerator.md#PitchedPopGeneratorOptions)</span> ) {: #PitchedPopGenerator-constructor data-toc-label='new PitchedPopGenerator' }

### Instance Methods

#### playPop( relativePitch : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, duration ) {: #playPop data-toc-label='playPop' }

Play the pop sound.
relativePitch - a value from 0 to 1 indicating the proportionate frequency to play within the pitch range
   [duration] - the duration of the pop sound to be played, in seconds



## Type PitchedPopGeneratorOptions {: #PitchedPopGeneratorOptions }


```js
import type { PitchedPopGeneratorOptions } from 'scenerystack/tambo';
```


- **pitchRange**?: [Range](../dot/Range.md)
<br>  the range of pitches that will be produced, in Hz
- **numPopGenerators**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  the number of pop generators to create and pool, use more if generating lots of pops close together, less if not
- &amp; [SoundGeneratorOptions](../tambo/SoundGenerator.md#SoundGeneratorOptions)




## Source Code

See the source for [PitchedPopGenerator.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/PitchedPopGenerator.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
