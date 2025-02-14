# OscillatorSoundGenerator

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/sound-generators/OscillatorSoundGenerator.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/OscillatorSoundGenerator.ts) for the most up-to-date information.

## Overview

OscillatorSoundGenerator is a Web Audio oscillator node wrapped in a sound generator so that it can be easily be used
in PhET sims.

@author John Blanco (PhET Interactive Simulations)

## Class OscillatorSoundGenerator {: #OscillatorSoundGenerator }


```js
import { OscillatorSoundGenerator } from 'scenerystack/tambo';
```
### Constructor

#### new OscillatorSoundGenerator( providedOptions? : <span style="font-weight: 400;">[OscillatorSoundGeneratorOptions](../tambo/OscillatorSoundGenerator.md#OscillatorSoundGeneratorOptions)</span> ) {: #OscillatorSoundGenerator-constructor data-toc-label='new OscillatorSoundGenerator' }

### Instance Methods

#### play() {: #play data-toc-label='play' }

Starts the oscillator. The name 'play' is used because this is commonly used in the tambo library for sound
generators. If the oscillator is already playing, this has no effect.

#### stop() {: #stop data-toc-label='stop' }

Stops the oscillator. If the oscillator isn't playing, this has no effect.

#### setWaveformType( waveformType : <span style="font-weight: 400;">OscillatorType</span> ) {: #setWaveformType data-toc-label='setWaveformType' }

Sets the waveform type.



## Type OscillatorSoundGeneratorOptions {: #OscillatorSoundGeneratorOptions }


```js
import type { OscillatorSoundGeneratorOptions } from 'scenerystack/tambo';
```


- **initialFrequency**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  initial frequency in Hz, can be changed later
- **initialWaveformType**?: OscillatorType
<br>  initial waveform type, can be changed later
- &amp; [SoundGeneratorOptions](../tambo/SoundGenerator.md#SoundGeneratorOptions)




## Source Code

See the source for [OscillatorSoundGenerator.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/OscillatorSoundGenerator.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
