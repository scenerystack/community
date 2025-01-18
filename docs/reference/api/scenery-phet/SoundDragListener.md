# SoundDragListener

## Overview

SoundDragListener extends DragListener to integrate PhET-specific sounds for grab and release.

For grab and release sounds, responsibilities include:
- provide default sound files
- create SoundClips and register them with soundManager
- dispose of SoundClips and deregister them with soundManager

@author Agustín Vallejo
@author Michael Kauzmann
@author Chris Malley (PixelZoom, Inc.)
@author Jesse Greenberg

## Class SoundDragListener {: #SoundDragListener }


```js
import { SoundDragListener } from 'scenerystack/scenery-phet';
```
### Constructor

#### new SoundDragListener( providedOptions : <span style="font-weight: 400;">[SoundDragListenerOptions](../scenery-phet/SoundDragListener.md#SoundDragListenerOptions)</span> ) {: #SoundDragListener-constructor data-toc-label='new SoundDragListener' }

### Instance Methods





## Type PressedSoundDragListener {: #PressedSoundDragListener }


Pattern followed from DragListenerOptions.

```js
import type { PressedSoundDragListener } from 'scenerystack/scenery-phet';
```


[SoundDragListener](../scenery-phet/SoundDragListener.md) &amp; [PressedDragListener](../scenery/DragListener.md#PressedDragListener)



## Type SoundDragListenerOptions {: #SoundDragListenerOptions }


```js
import type { SoundDragListenerOptions } from 'scenerystack/scenery-phet';
```


[DragListenerOptions](../scenery/DragListener.md#DragListenerOptions)&lt;Listener&gt; &amp; [RichDragListenerSoundOptions](../scenery-phet/SoundRichDragListener.md#RichDragListenerSoundOptions)



## Source Code

See the source for [SoundDragListener.ts](https://github.com/phetsims/scenery-phet/blob/main/js/SoundDragListener.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
