# SoundRichDragListener

## Overview

A RichDragListener that supports sounds for grab and release.

@author Jesse Greenberg

## Class SoundRichDragListener {: #SoundRichDragListener }


```js
import { SoundRichDragListener } from 'scenerystack/scenery-phet';
```
### Constructor

#### new SoundRichDragListener( providedOptions? : <span style="font-weight: 400;">[SoundRichDragListenerOptions](../scenery-phet/SoundRichDragListener.md#SoundRichDragListenerOptions)</span> ) {: #SoundRichDragListener-constructor data-toc-label='new SoundRichDragListener' }

### Instance Methods



### Static Methods

#### linkToDragEvents( dragListener : <span style="font-weight: 400;">[DragListener](../scenery/DragListener.md) | [KeyboardDragListener](../scenery/KeyboardDragListener.md)</span>, grabSound : <span style="font-weight: 400;">[TSoundPlayer](../tambo/TSoundPlayer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span></span>, releaseSound : <span style="font-weight: 400;">[TSoundPlayer](../tambo/TSoundPlayer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">undefined</span></span> ) {: #linkToDragEvents data-toc-label='linkToDragEvents' }

Plays the sounds when the drag listener is pressed or released.

### Static Properties

#### DEFAULT_SOUND_OPTIONS {: #DEFAULT_SOUND_OPTIONS data-toc-label='DEFAULT_SOUND_OPTIONS' }

(readonly)



## Type RichDragListenerSoundOptions {: #RichDragListenerSoundOptions }


Options for drag listeners that are specific to sound.

```js
import type { RichDragListenerSoundOptions } from 'scenerystack/scenery-phet';
```


- **grabSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Grab and release sounds. `null` means no sound.
- **releaseSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




## Type SoundRichDragListenerOptions {: #SoundRichDragListenerOptions }


```js
import type { SoundRichDragListenerOptions } from 'scenerystack/scenery-phet';
```


- **keyboardDragListenerSoundOptions**?: [RichDragListenerSoundOptions](../scenery-phet/SoundRichDragListener.md#RichDragListenerSoundOptions)
<br>  Sound players that only apply to the keyboard drag listener.
- **dragListenerSoundOptions**?: [RichDragListenerSoundOptions](../scenery-phet/SoundRichDragListener.md#RichDragListenerSoundOptions)
<br>  Sound players that only apply to the drag listener.
- &amp; [RichDragListenerOptions](../scenery/RichDragListener.md#RichDragListenerOptions) &amp; [RichDragListenerSoundOptions](../scenery-phet/SoundRichDragListener.md#RichDragListenerSoundOptions)




## Source Code

See the source for [SoundRichDragListener.ts](https://github.com/phetsims/scenery-phet/blob/main/js/SoundRichDragListener.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
