# CrossFadeSoundClip

## Overview

CrossFadeSoundClip is a sound generator that combines two sound clips and allows the user to set the relative mix -
aka fade - between them.  This can be useful in situations where there are a number of similar UI elements that need
to have similar but somewhat distinct interaction sounds.

This was created specifically for the needs of the "Mean: Share and Balance" simulation, and there is at least one
example of how it was intended to be used in that sim.

@author John Blanco (PhET Interactive Simulations)

## Class CrossFadeSoundClip {: #CrossFadeSoundClip }


```js
import { CrossFadeSoundClip } from 'scenerystack/tambo';
```
### Constructor

#### new CrossFadeSoundClip( audioBufferA : <span style="font-weight: 400;">[WrappedAudioBuffer](../tambo/WrappedAudioBuffer.md)</span>, audioBufferB : <span style="font-weight: 400;">[WrappedAudioBuffer](../tambo/WrappedAudioBuffer.md)</span>, providedOptions? : <span style="font-weight: 400;">CrossFadeSoundClipOptions</span> ) {: #CrossFadeSoundClip-constructor data-toc-label='new CrossFadeSoundClip' }

### Instance Methods

#### play() {: #play data-toc-label='play' }

#### stop() {: #stop data-toc-label='stop' }

#### setPlaybackRate( playbackRate : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setPlaybackRate data-toc-label='setPlaybackRate' }

### Instance Properties

#### crossFadeProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #crossFadeProperty data-toc-label='crossFadeProperty' }

(readonly)



## Source Code

See the source for [CrossFadeSoundClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/CrossFadeSoundClip.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
