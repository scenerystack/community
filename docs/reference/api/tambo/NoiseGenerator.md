# NoiseGenerator

## Overview

white noise generator with optional low- and high-pass filters

@author John Blanco

## Class NoiseGenerator {: #NoiseGenerator }


```js
import { NoiseGenerator } from 'scenerystack/tambo';
```
### Constructor

#### new NoiseGenerator( providedOptions? : <span style="font-weight: 400;">[NoiseGeneratorOptions](../tambo/NoiseGenerator.md#NoiseGeneratorOptions)</span> ) {: #NoiseGenerator-constructor data-toc-label='new NoiseGenerator' }

### Instance Methods

#### start( delay ) {: #start data-toc-label='start' }

Start the noise source.
@param [delay] - optional delay for when to start the noise source, in seconds

#### stop( time ) {: #stop data-toc-label='stop' }

Stop the noise source.
@param [time] - optional audio context time at which this should be stopped

#### setLfoFrequency( frequency : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setLfoFrequency data-toc-label='setLfoFrequency' }

Set the frequency of the low frequency amplitude modulator (LFO).

#### setLfoDepth( depth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setLfoDepth data-toc-label='setLfoDepth' }

Set the depth of the LFO modulator.
@param depth - depth value from 0 (no modulation) to 1 (max modulation)

#### setLfoEnabled( enabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setLfoEnabled data-toc-label='setLfoEnabled' }

Turn the low frequency amplitude modulation on/off.

#### setBandpassFilterCenterFrequency( frequency : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, timeConstant ) {: #setBandpassFilterCenterFrequency data-toc-label='setBandpassFilterCenterFrequency' }

set the Q value for the band pass filter, assumes that noise generator was created with this filter enabled



## Type NoiseGeneratorOptions {: #NoiseGeneratorOptions }


```js
import type { NoiseGeneratorOptions } from 'scenerystack/tambo';
```


- **noiseType**?: "pink" | "white" | "brown"
- **lowPassCutoffFrequency**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  low pass value in Hz, null (or any falsey value including zero) means no low pass filter is added
- **highPassCutoffFrequency**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  high pass value in Hz, null (or any falsey value including zero) means no high pass filter is added
- **centerFrequency**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  center frequency for band pass filter value in Hz, null (or any falsey value including zero) means no band pass
  filter is added
- **qFactor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Q factor, aka quality factor, for bandpass filter if present, see Web Audio BiquadFilterNode for more information
- **lfoInitiallyEnabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  parameters that control the behavior of the low frequency oscillator (LFO), which does amplitude modulation on
  the noise
- **lfoInitialFrequency**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lfoInitialDepth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lfoType**?: OscillatorType
- &amp; [SoundGeneratorOptions](../tambo/SoundGenerator.md#SoundGeneratorOptions)




## Source Code

See the source for [NoiseGenerator.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/NoiseGenerator.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
