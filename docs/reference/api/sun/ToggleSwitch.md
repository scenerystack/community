# ToggleSwitch

## Overview

ToggleSwitch is a switch for toggling between 2 values, similar to iOS' UISwitch, used in iOS `'Settings' app.

Interaction behavior is as follows:
Drag the thumb to change the value, or click anywhere to toggle the value.
If you click without dragging, it's a toggle.
If you drag but don't cross the midpoint of the track, then it's a toggle.
If you drag past the midpoint of the track, releasing the thumb snaps to whichever end the thumb is closest to.
If you drag the thumb far enough to the side (outside of the switch), it will immediately toggle the model behavior.

@author Chris Malley (PixelZoom, Inc.)
@author Jonathan Olson (PhET Interactive Simulations)

## Class ToggleSwitch {: #ToggleSwitch }


```js
import { ToggleSwitch } from 'scenerystack/sun';
```
### Constructor

#### new ToggleSwitch( property : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;T&gt;</span>, leftValue : <span style="font-weight: 400;">T</span>, rightValue : <span style="font-weight: 400;">T</span>, providedOptions? : <span style="font-weight: 400;">[ToggleSwitchOptions](../sun/ToggleSwitch.md#ToggleSwitchOptions)</span> ) {: #ToggleSwitch-constructor data-toc-label='new ToggleSwitch' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### switchToLeftSoundPlayer : <span style="font-weight: 400;">TSoundPlayer</span> {: #switchToLeftSoundPlayer data-toc-label='switchToLeftSoundPlayer' }

(readonly)

#### switchToRightSoundPlayer : <span style="font-weight: 400;">TSoundPlayer</span> {: #switchToRightSoundPlayer data-toc-label='switchToRightSoundPlayer' }

(readonly)

#### onInputEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #onInputEmitter data-toc-label='onInputEmitter' }

(readonly)

Emits on input that results in a change to the Property value, after the Property has changed.



## Type ToggleSwitchOptions {: #ToggleSwitchOptions }


```js
import type { ToggleSwitchOptions } from 'scenerystack/sun';
```


- **size**?: [Dimension2](../dot/Dimension2.md)
<br>  if you want the thumb to be a circle, use width that is 2x height
- **toggleWhileDragging**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  controls the behavior of when model value changes occur during dragging (if any)
  null: triggers model changes when thumb is dragged far enough to the side, similar to iOS
  true: triggers model changes whenever the thumb crosses sides
  false: only trigger model changes until release
- **dragThreshold**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  number of view-space units the drag needs to cover to be considered a "drag" instead of a "click/tap"
- **toggleThreshold**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  number of thumb-widths outside the normal range past where the model value will change
- **thumbFill**?: [TPaint](../scenery/TPaint.md)
<br>  thumb
- **thumbStroke**?: [TPaint](../scenery/TPaint.md)
- **thumbTouchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbTouchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbMouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbMouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **trackFillLeft**?: [TPaint](../scenery/TPaint.md)
<br>  track
- **trackFillRight**?: [TPaint](../scenery/TPaint.md)
- **trackStroke**?: [TPaint](../scenery/TPaint.md)
- **switchToLeftSoundPlayer**?: TSoundPlayer
<br>  sound
- **switchToRightSoundPlayer**?: TSoundPlayer
- **leftValueContextResponse**?: TAlertable
<br>  If provided, these responses will be spoken to describe the change in context for both Voicing
  and Interactive Description features when value changes to either left or right value.
- **rightValueContextResponse**?: TAlertable
- **accessibleSwitch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  pdom - If true, aria attributes are added to this Node to indicate that it is a switch.
  Aria switches do not work well when selecting between non-boolean values, so you can disable this if needed.
- &amp; [TrimParallelDOMOptions](../scenery/ParallelDOM.md#TrimParallelDOMOptions)&lt;ParentOptions&gt;




## Source Code

See the source for [ToggleSwitch.ts](https://github.com/phetsims/sun/blob/main/js/ToggleSwitch.ts) in the [sun](https://github.com/phetsims/sun) repository.
