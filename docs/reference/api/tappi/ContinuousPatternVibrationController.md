# ContinuousPatternVibrationController

## Overview

Controls and supports continuous vibration patterns and smooth transition from pattern to pattern.
Instead of requesting a new vibration pattern immediately, this controller waits until
the end of an "active" vibration pattern. The result is that the user cannot feel the change in
pattern as we smoothly transition, which is what would happen if we requested a new pattern
while in the middle of an 'on' phase of the current pattern.

And so this class as both an "active" pattern, which is currently running and a "pending" pattern,
which will become the "active" pattern as soon as the previous "active" pattern finishes.

NOTE: Instead of waiting until the end of a pattern to request a new one, it may be useful
to request a new pattern at the end of an 'off' portion of the current pattern. May be
important for long patterns where we want to transition to new pattern quickly but don't want to
wait until the old one finishes.

@author Jesse Greenberg

## Class ContinuousPatternVibrationController {: #ContinuousPatternVibrationController }


```js
import { ContinuousPatternVibrationController } from 'scenerystack/tappi';
```
### Constructor

#### new ContinuousPatternVibrationController( vibrationManageriOS : <span style="font-weight: 400;">[VibrationManageriOS](../tappi/VibrationManageriOS.md)</span>, providedOptions : <span style="font-weight: 400;">[ContinuousPatternVibrationControllerOptions](../tappi/ContinuousPatternVibrationController.md#ContinuousPatternVibrationControllerOptions)</span> ) {: #ContinuousPatternVibrationController-constructor data-toc-label='new ContinuousPatternVibrationController' }

### Instance Methods

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

Step forward in time, updates patterns.

#### setNewActivePattern( pattern : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) {: #setNewActivePattern data-toc-label='setNewActivePattern' }

Transition from the previous pattern to the next pattern, which will start to play when start() is called.

#### setPattern( pattern : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) {: #setPattern data-toc-label='setPattern' }

Set the new pattern for the controller. If we are running, this will be the pending pattern
which we will request at the end of the current pattern to avoid stutter during rapid changes.
If a pattern is not running, this will be set as the active pattern right away, and can begin
ass soon as start() is called.

#### setIntensity( intensity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setIntensity data-toc-label='setIntensity' }

Set the intensity for the vibration pattern, for both the active and pending patterns.

#### setSharpness( sharpness : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setSharpness data-toc-label='setSharpness' }

Set the sharpness for the vibration pattern, for both the active and pending patterns.

#### setRepeat( repeat : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setRepeat data-toc-label='setRepeat' }

Set whether or not the active pattern will repeat.

#### start() {: #start data-toc-label='start' }

Start vibrating with the active pattern. Calling this will reset where we are in the active vibration pattern.

#### stop() {: #stop data-toc-label='stop' }

Stop all vibration and play of the active pattern if we are running.

#### resetPattern() {: #resetPattern data-toc-label='resetPattern' }

Reset the active pattern, and where we are in its playthrough.



## Type ContinuousPatternVibrationControllerOptions {: #ContinuousPatternVibrationControllerOptions }


```js
import type { ContinuousPatternVibrationControllerOptions } from 'scenerystack/tappi';
```


- **repeat**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Should the active pattern loop?
- **sharpness**?: 1
- **intensity**?: 1
- **activePattern**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
<br>  Initial pattern for the vibration controller, a sequence of on/off intervals in seconds - won't start vibrating
  until calling start().




## Source Code

See the source for [ContinuousPatternVibrationController.ts](https://github.com/phetsims/tappi/blob/main/js/ContinuousPatternVibrationController.ts) in the [tappi](https://github.com/phetsims/tappi) repository.
