# SoundClipChord

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundClipChord.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundClipChord.ts) for the most up-to-date information.

## Overview

SoundClipChord plays a chord built from the given sound.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class SoundClipChord {: #SoundClipChord }


```js
import { SoundClipChord } from 'scenerystack/tambo';
```
### Constructor

#### new SoundClipChord( sound : <span style="font-weight: 400;">[WrappedAudioBuffer](../tambo/WrappedAudioBuffer.md)</span>, providedOptions? : <span style="font-weight: 400;">[SoundClipChordOptions](../tambo/SoundClipChord.md#SoundClipChordOptions)</span> ) {: #SoundClipChord-constructor data-toc-label='new SoundClipChord' }

### Instance Methods

#### play() {: #play data-toc-label='play' }

Play the chord.

#### stop() {: #stop data-toc-label='stop' }

Stop the chord if it's playing.  This is mostly here to complete the TSoundPlayer interface.

#### dispose() {: #dispose data-toc-label='dispose' }

Release any memory references in order to avoid memory leaks.

### Instance Properties

#### isPlayingProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isPlayingProperty data-toc-label='isPlayingProperty' }

(readonly)

flag indicating whether this is currently playing



## Type SoundClipChordOptions {: #SoundClipChordOptions }


```js
import type { SoundClipChordOptions } from 'scenerystack/tambo';
```


- **soundClipOptions**?: [SoundClipOptions](../tambo/SoundClip.md#SoundClipOptions) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  options passed along to each SoundClip used in the chord
- **arpeggiate**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When true, the chord will play with a delay between each note, starting with the first note in chordPlaybackRates
  and ending with the last.
- **arpeggiateTime**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  in seconds, the total time that it will take the chord to arpeggiate
- **chordPlaybackRates**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
<br>  playback rates for the notes in the chord
- &amp; [SoundGeneratorOptions](../tambo/SoundGenerator.md#SoundGeneratorOptions)




## Source Code

See the source for [SoundClipChord.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundClipChord.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
