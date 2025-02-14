# SoundClip

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundClip.ts) for the most up-to-date information.

## Overview

A sound generator that plays pre-recorded sounds, either as a one-shot or as a loop.

@author John Blanco (PhET Interactive Simulations)

## Class SoundClip {: #SoundClip }


```js
import { SoundClip } from 'scenerystack/tambo';
```
### Constructor

#### new SoundClip( wrappedAudioBuffer : <span style="font-weight: 400;">[WrappedAudioBuffer](../tambo/WrappedAudioBuffer.md)</span>, providedOptions? : <span style="font-weight: 400;">[SoundClipOptions](../tambo/SoundClip.md#SoundClipOptions)</span> ) {: #SoundClip-constructor data-toc-label='new SoundClip' }

### Instance Methods

#### play( delay ) {: #play data-toc-label='play' }

Start playing the sound.

#### stop( delay : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #stop data-toc-label='stop' }

Stop playing the sound.

Note: Doing rapid stops and starts of a loop using this method can cause sound glitches.  If you have a need to
do that, use volume fades combined with zero delay stops.

@param [delay] - The amount of time to wait before stopping, generally used to prevent sudden stops, which can
cause audible clicks.  If greater than zero, which it is by default, this method will try to fade out the sound
fully prior to stopping the audio playback.

#### setPlaybackRate( playbackRate : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, timeConstant : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setPlaybackRate data-toc-label='setPlaybackRate' }

Set the playback rate.  Based on the way this SoundClip was created, this may or may not affect in-progress sounds.

#### getPlaybackRate() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getPlaybackRate data-toc-label='getPlaybackRate' }

Get the current playback rate.  Note that it is possible that there are audio buffers that are playing that are not
playing at the returned rate if the rate was recently changed.

#### getNumberOfPlayingInstances() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getNumberOfPlayingInstances data-toc-label='getNumberOfPlayingInstances' }

Get the number of instances of the audio buffer that are currently playing.  This can be greater than one because
SoundClip supports multiple buffers playing at the same time.  This method is generally used to limit the number
of instances that are playing at the same time.

### Instance Properties

#### loop : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #loop data-toc-label='loop' }

(readonly)

flag that controls whether this is a one-shot or loop sound

#### initiateWhenDisabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #initiateWhenDisabled data-toc-label='initiateWhenDisabled' }

Controls whether this clip can be initiated when it is disabled, see description in options type definition above.
This is part of the API and can be changed if needed, though such a need is generally quite rare.

#### isPlayingProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isPlayingProperty data-toc-label='isPlayingProperty' }

(readonly)

indicates whether the sound is being played



## Type SoundClipOptions {: #SoundClipOptions }


```js
import type { SoundClipOptions } from 'scenerystack/tambo';
```


- **loop**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  controls whether this sound will wrap around and start over when done or just be played once
- **trimSilence**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  controls whether the silence at the beginning and (in the case of loops) the end is omitted when sound is played
- **initialPlaybackRate**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Initial playback rate for this clip.  This value is a multiplier, so 1 is the nominal playback rate, 0.5 is half
  speed (or an octave lower in musical terms) and a value of 2 is twice normal speed (or an octave higher in musical
  terms).  The playback rate can be changed after construction via the API.
- **initiateWhenDisabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Controls whether sound generation can be initiated when this sound generator is disabled.  This is useful for a
  one-shot sound that is long, so if the user does something that generally would cause a sound, but sound is
  disabled, but then they immediately re-enable sound, the "tail" of this sound would be heard.  This option is
  ignored for loops, since loops always allow initiation when disabled.
- **rateChangesAffectPlayingSounds**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Controls whether changes to the playback rate via the API causes changes to the sounds that are already being
  played as opposed to only sounds that are started after the playback rate is changed.  This is relevant for both
  loops and one-shot sounds, since a one-shot sound (especially one that is fairly long) could be in the process of
  playing when a playback rate change occurs.
- &amp; [SoundGeneratorOptions](../tambo/SoundGenerator.md#SoundGeneratorOptions)




## Source Code

See the source for [SoundClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundClip.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
