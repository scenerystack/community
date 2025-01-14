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

#### new ToggleSwitch( property : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;T&gt;</span>, leftValue : <span style="font-weight: 400;">T</span>, rightValue : <span style="font-weight: 400;">T</span>, providedOptions? : <span style="font-weight: 400;">[ToggleSwitchOptions](../sun/ToggleSwitch.md#ToggleSwitchOptions)</span> ) {: #constructor data-toc-label='constructor' }

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
- **toggleWhileDragging**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **dragThreshold**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **toggleThreshold**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbFill**?: [TPaint](../scenery/TPaint.md)
- **thumbStroke**?: [TPaint](../scenery/TPaint.md)
- **thumbTouchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbTouchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbMouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbMouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **trackFillLeft**?: [TPaint](../scenery/TPaint.md)
- **trackFillRight**?: [TPaint](../scenery/TPaint.md)
- **trackStroke**?: [TPaint](../scenery/TPaint.md)
- **switchToLeftSoundPlayer**?: TSoundPlayer
- **switchToRightSoundPlayer**?: TSoundPlayer
- **leftValueContextResponse**?: TAlertable
- **rightValueContextResponse**?: TAlertable
- **accessibleSwitch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [TrimParallelDOMOptions](../scenery/ParallelDOM.md#TrimParallelDOMOptions)&lt;ParentOptions&gt;




## Source Code

See the source for [ToggleSwitch.ts](https://github.com/phetsims/sun/blob/main/js/ToggleSwitch.ts) in the [sun](https://github.com/phetsims/sun) repository.
