# SoundClipPlayer

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundClipPlayer.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundClipPlayer.ts) for the most up-to-date information.

## Overview

SoundClipPlayer is a limited and automatically registered sound clip.  It is intended to be used for sounds that
can be shared in multiple places within a simulation so that separate instances of sound clips don't need to be
created and registered in as many places.  See resetAllSoundPlayer for an example.

This type wraps the sound clip and only supports the play and stop methods so that attributes such as output level
and playback rate can't be easily altered.  A method is supported for retrieving the sound clip itself in case
additional information about or manipulation of the sound clip is necessary.

If you're familiar with PhET graphics rendering library "scenery", this class is intended to support a feature that
is similar to the DAG (directed acyclic graph) feature in that library.  As with that feature, SoundClipPlayer can
get a little weird if not used as intended.

@author John Blanco (PhET Interactive Simulations)

## Class SoundClipPlayer {: #SoundClipPlayer }


```js
import { SoundClipPlayer } from 'scenerystack/tambo';
```
### Constructor

#### new SoundClipPlayer( wrappedAudioBuffer : <span style="font-weight: 400;">[WrappedAudioBuffer](../tambo/WrappedAudioBuffer.md)</span>, providedOptions? : <span style="font-weight: 400;">[SoundClipPlayerOptions](../tambo/SoundClipPlayer.md#SoundClipPlayerOptions)</span> ) {: #SoundClipPlayer-constructor data-toc-label='new SoundClipPlayer' }

### Instance Methods

#### play() {: #play data-toc-label='play' }

Play the sound clip.

#### stop() {: #stop data-toc-label='stop' }

Stop the sound clip.  Does nothing if the sound clip is not playing.



## Type SoundClipPlayerOptions {: #SoundClipPlayerOptions }


```js
import type { SoundClipPlayerOptions } from 'scenerystack/tambo';
```


- **soundClipOptions**?: [SoundClipOptions](../tambo/SoundClip.md#SoundClipOptions)
- **soundManagerOptions**?: [SoundGeneratorAddOptions](../tambo/soundManager.md#SoundGeneratorAddOptions)




## Source Code

See the source for [SoundClipPlayer.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundClipPlayer.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
