# MultiClip

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/sound-generators/MultiClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/MultiClip.ts) for the most up-to-date information.

## Overview

MultiClip is a sound generator that plays one-shot sounds from a set of pre-recorded files that are provided upon
construction. This is often used as a base class for a sound generator when a finite set of sounds clips need to be
played in response to different values of a model parameter.

Individual gain controls are not provided for the different sound clips in this class, there is just a single gain
node for the sound generator as a whole.  The intent here is that this saves resources by not creating unneeded gain
nodes.  If such fine-grained control is needed, a similar type could be created using multiple instances of the
SoundClip class.

This class only supports clips that are played as one shots, i.e. it does not include support for looping.

@author John Blanco (PhET Interactive Simulations)

## Class MultiClip {: #MultiClip }


```js
import { MultiClip } from 'scenerystack/tambo';
```
### Constructor

#### new MultiClip( valueToWrappedAudioBufferMap : <span style="font-weight: 400;">Map&lt;T, [WrappedAudioBuffer](../tambo/WrappedAudioBuffer.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[MultiClipOptions](../tambo/MultiClip.md#MultiClipOptions)</span> ) {: #MultiClip-constructor data-toc-label='new MultiClip' }

### Instance Methods

#### playAssociatedSound( value : <span style="font-weight: 400;">T</span>, delay ) {: #playAssociatedSound data-toc-label='playAssociatedSound' }

play the sound associated with the provided value

#### setPlaybackRate( playbackRate : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setPlaybackRate data-toc-label='setPlaybackRate' }

Change the speed that the sound playback occurs. Note, this does not affect playing sounds, but will only affect
subsequent plays of sounds.
@param playbackRate - desired playback speed, 1 = normal speed

#### stopAll() {: #stopAll data-toc-label='stopAll' }

Stop playing any sounds that are currently in progress.



## Type MultiClipOptions {: #MultiClipOptions }


```js
import type { MultiClipOptions } from 'scenerystack/tambo';
```


- **initialPlaybackRate**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [SoundGeneratorOptions](../tambo/SoundGenerator.md#SoundGeneratorOptions)




## Source Code

See the source for [MultiClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/MultiClip.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
