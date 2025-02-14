# CompositeSoundClip

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/sound-generators/CompositeSoundClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/CompositeSoundClip.ts) for the most up-to-date information.

## Overview

A sound generator that is composed of multiple SoundClips that are all started and stopped at the same time.
Basically, this is a container to create and control multiple SoundClip instances as one.

@author Michael Kauzmann (PhET Interactive Simulations)

## Class CompositeSoundClip {: #CompositeSoundClip }


```js
import { CompositeSoundClip } from 'scenerystack/tambo';
```
### Constructor

#### new CompositeSoundClip( soundsAndOptionsTuples : <span style="font-weight: 400;">[SoundAndOptions](../tambo/CompositeSoundClip.md#SoundAndOptions)[]</span>, options? : <span style="font-weight: 400;">[CompositeSoundClipOptions](../tambo/CompositeSoundClip.md#CompositeSoundClipOptions)</span> ) {: #CompositeSoundClip-constructor data-toc-label='new CompositeSoundClip' }

### Instance Methods

#### play() {: #play data-toc-label='play' }

#### stop() {: #stop data-toc-label='stop' }

#### connect( destination : <span style="font-weight: 400;">AudioParam | AudioNode</span> ) {: #connect data-toc-label='connect' }

#### dispose() {: #dispose data-toc-label='dispose' }

#### setOutputLevel( outputLevel : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, timeConstant : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setOutputLevel data-toc-label='setOutputLevel' }



## Type CompositeSoundClipOptions {: #CompositeSoundClipOptions }


```js
import type { CompositeSoundClipOptions } from 'scenerystack/tambo';
```


[SoundGeneratorOptions](../tambo/SoundGenerator.md#SoundGeneratorOptions)



## Type SoundAndOptions {: #SoundAndOptions }


```js
import type { SoundAndOptions } from 'scenerystack/tambo';
```


- **sound**: [WrappedAudioBuffer](../tambo/WrappedAudioBuffer.md)
- **options**?: [SoundClipOptions](../tambo/SoundClip.md#SoundClipOptions)




## Source Code

See the source for [CompositeSoundClip.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/CompositeSoundClip.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
