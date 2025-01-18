# WrappedAudioBuffer

## Overview

WrappedAudioBuffer is an object that contains a Web Audio AudioBuffer and a TinyProperty that indicates whether the
audio buffer has been decoded.  This is *only* intended for usage during the loading process, not during run time,
which is why it isn't namespaced.  This is part of the mechanism in PhET sims through which sounds are imported using
the standard JavaScript 'import' statement.

@author John Blanco (PhET Interactive Simulations)

## Class WrappedAudioBuffer {: #WrappedAudioBuffer }


```js
import { WrappedAudioBuffer } from 'scenerystack/tambo';
```
### Constructor

#### new WrappedAudioBuffer() {: #WrappedAudioBuffer-constructor data-toc-label='new WrappedAudioBuffer' }

### Instance Methods



### Instance Properties

#### audioBufferProperty : <span style="font-weight: 400;">[TinyProperty](../axon/TinyProperty.md)&lt;AudioBuffer | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #audioBufferProperty data-toc-label='audioBufferProperty' }

(readonly)

This TinyProperty is set to null during construction.  Later, when audio data is loaded and decoded, the client
should set this to the resultant AudioBuffer.  Once this is set to an AudioBuffer, it should not be set again.



## Source Code

See the source for [WrappedAudioBuffer.ts](https://github.com/phetsims/tambo/blob/main/js/WrappedAudioBuffer.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
