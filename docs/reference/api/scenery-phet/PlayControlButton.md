# PlayControlButton

## Overview

A round toggle button that displays some custom icon when playing and a triangular "Play" icon when not playing.

@author Sam Reid (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)

## Class PlayControlButton {: #PlayControlButton }


```js
import { PlayControlButton } from 'scenerystack/scenery-phet';
```
### Constructor

#### new PlayControlButton( isPlayingProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, endPlayingIcon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[PlayControlButtonOptions](../scenery-phet/PlayControlButton.md#PlayControlButtonOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Properties

#### TOGGLE_PLAY_HOTKEY_DATA : <span style="font-weight: 400;">[HotkeyData](../scenery/HotkeyData.md)</span> {: #TOGGLE_PLAY_HOTKEY_DATA data-toc-label='TOGGLE_PLAY_HOTKEY_DATA' }

(readonly)



## Type PlayControlButtonOptions {: #PlayControlButtonOptions }


```js
import type { PlayControlButtonOptions } from 'scenerystack/scenery-phet';
```
- **radius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **scaleFactorWhenNotPlaying**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **includeGlobalHotkey**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **startPlayingLabel**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType)
- **endPlayingLabel**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **valueOffSoundPlayer**?: TSoundPlayer
- **valueOnSoundPlayer**?: TSoundPlayer
- &amp; [BooleanRoundToggleButtonOptions](../sun/BooleanRoundToggleButton.md#BooleanRoundToggleButtonOptions)




## Source Code

See the source for [PlayControlButton.ts](https://github.com/phetsims/scenery-phet/blob/main/js/buttons/PlayControlButton.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
