# SoundKeyboardDragListener

## Overview

SoundKeyboardDragListener extends KeyboardDragListener to integrate PhET-specific sounds for grab and release.

For grab and release sounds, responsibilities include:
- provide default sound files
- create SoundClips and register them with soundManager
- dispose of SoundClips and deregister them with soundManager

@author Agustín Vallejo
@author Michael Kauzmann
@author Chris Malley (PixelZoom, Inc.)
@author Jesse Greenberg

## Class SoundKeyboardDragListener {: #SoundKeyboardDragListener }


```js
import { SoundKeyboardDragListener } from 'scenerystack/scenery-phet';
```
### Constructor

#### new SoundKeyboardDragListener( providedOptions : <span style="font-weight: 400;">[SoundKeyboardDragListenerOptions](../scenery-phet/SoundKeyboardDragListener.md#SoundKeyboardDragListenerOptions)</span> ) {: #SoundKeyboardDragListener-constructor data-toc-label='new SoundKeyboardDragListener' }

### Instance Methods





## Type SoundKeyboardDragListenerOptions {: #SoundKeyboardDragListenerOptions }


```js
import type { SoundKeyboardDragListenerOptions } from 'scenerystack/scenery-phet';
```


[KeyboardDragListenerOptions](../scenery/KeyboardDragListener.md#KeyboardDragListenerOptions) &amp; [RichDragListenerSoundOptions](../scenery-phet/SoundRichDragListener.md#RichDragListenerSoundOptions)



## Source Code

See the source for [SoundKeyboardDragListener.ts](https://github.com/phetsims/scenery-phet/blob/main/js/SoundKeyboardDragListener.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
