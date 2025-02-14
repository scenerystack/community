# ContinuousPropertySoundClip

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/sound-generators/ContinuousPropertySoundClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/ContinuousPropertySoundClip.ts) for the most up-to-date information.

## Overview

ContinuousPropertySoundClip is a sound generator that alters the playback rate of a sound clip based on the
value of a continuous numerical Property.  It is specifically designed to work with sound clips and does not support
other types of sound production, such as oscillators.  It is implemented such that the sound fades in when changes
occur in the Property's value and fades out when the value doesn't change for some (configurable) amount of time.
This was generalized from GRAVITY_FORCE_LAB_BASICS/ForceSoundGenerator, see
https://github.com/phetsims/tambo/issues/76.

@author John Blanco (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class ContinuousPropertySoundClip {: #ContinuousPropertySoundClip }


```js
import { ContinuousPropertySoundClip } from 'scenerystack/tambo';
```
### Constructor

#### new ContinuousPropertySoundClip( property : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, range : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, sound : <span style="font-weight: 400;">[WrappedAudioBuffer](../tambo/WrappedAudioBuffer.md)</span>, providedOptions? : <span style="font-weight: 400;">[ContinuousPropertySoundClipOptions](../tambo/ContinuousPropertySoundClip.md#ContinuousPropertySoundClipOptions)</span> ) {: #ContinuousPropertySoundClip-constructor data-toc-label='new ContinuousPropertySoundClip' }

### Instance Methods

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

Step this sound generator, used for fading out the sound in the absence of change.
@param dt - change in time (i.e. delta time) in seconds

#### reset() {: #reset data-toc-label='reset' }

stop any in-progress sound generation



## Type ContinuousPropertySoundClipOptions {: #ContinuousPropertySoundClipOptions }


```js
import type { ContinuousPropertySoundClipOptions } from 'scenerystack/tambo';
```


- **fadeStartDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  time to wait before starting fade out if no activity, in seconds
- **fadeTime**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  duration of fade out, in seconds
- **delayBeforeStop**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  amount of time in seconds from full fade to stop of sound, done to avoid sonic glitches
- **playbackRateRange**?: [Range](../dot/Range.md)
<br>  This option defines the range of playback rates used when mapping the provided Property value to a pitch.  A value
  of 1 indicates the nominal playback rate, 0.5 is half speed (an octave lower), 2 is double speed (an octave
  higher).  So, a range of 1 to 2 would go from the nominal playback rate of the sound to one octave higher.  Values
  of 0 or less are invalid.
- **normalizationMappingExponent**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The exponent used when mapping a normalized value to a playback rate.  See code for exactly how this is used, but
  the basic idea is that a value of 1 (the default) should be used for a linear mapping across the range, a value
  above 1 for smaller changes at the lower portion of the range and greater changes towards the top, and a value
  below 1 for greater changes in the lower portion of the range and smaller changes towards the top.
- **stopOnDisabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, we will stop() when the sound is disabled. The stop uses the DEFAULT_LINEAR_GAIN_CHANGE_TIME as its delay
  to match the fullyEnabledProperty link logic in SoundGenerator.
- **stepEmitter**?: [TReadOnlyEmitter](../axon/TEmitter.md#TReadOnlyEmitter)&lt;[ <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ]&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  An emitter that can be provided to step the time-driven behavior of this sound generator.  By default, this uses
  the globally available stepTimer instance.  If set to null, nothing will be hooked up, and it will be up to the
  client to step the instance directly.
- &amp; [SoundClipOptions](../tambo/SoundClip.md#SoundClipOptions)




## Source Code

See the source for [ContinuousPropertySoundClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/ContinuousPropertySoundClip.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
