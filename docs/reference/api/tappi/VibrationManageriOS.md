# VibrationManageriOS

## Overview

A class that controls vibrations when running the sim in a native iOS App. It sends messages form the simulation
WebView to its containing native swift application. This is the only way to request vibration on that platform
since Web vibration is not supported in Safari.

This is a prototype, and this strategy has since been abandoned. We have since moved on to explore vibration
in Android devices, where tablets have vibration support. There we can use the web vibration API and also
use native android vibration for more sophisticated things like vibration intensity.
@author Jesse Greenberg (PhET Interactive Simulations)

## Class VibrationManageriOS {: #VibrationManageriOS }


@deprecated - This strategy is being abandoned for an android specific solution.

```js
import { VibrationManageriOS } from 'scenerystack/tappi';
```
### Constructor

#### new VibrationManageriOS() {: #VibrationManageriOS-constructor data-toc-label='new VibrationManageriOS' }

### Instance Methods

#### vibrate( seconds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #vibrate data-toc-label='vibrate' }

Start a timed vibration for the provided time in seconds.

#### vibrateForever() {: #vibrateForever data-toc-label='vibrateForever' }

Start a vibration that will continue forever.

#### vibrateContinuous( providedOptions? : <span style="font-weight: 400;">VibrateOptions</span> ) {: #vibrateContinuous data-toc-label='vibrateContinuous' }

Request a continuous vibration with provided parameters. This should replace all other functions in the future.

#### vibrateTransient( providedOptions? : <span style="font-weight: 400;">VibrateOptions</span> ) {: #vibrateTransient data-toc-label='vibrateTransient' }

Request a transient vibration. A transient vibration is a single pulse at a particular time without any duration.
It is used typically for basic UI components to indicate successful activation or change. Use vibrateContinuous for
longer and more complicated vibrations.

#### vibrateAtFrequency( seconds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, frequency : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #vibrateAtFrequency data-toc-label='vibrateAtFrequency' }

Start a vibration for the provided duration, with a provided frequency.

#### vibrateAtFrequencyForever( frequency : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, intensity? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #vibrateAtFrequencyForever data-toc-label='vibrateAtFrequencyForever' }

Vibrate at the desired frequency.
@param frequency
@param [intensity] - from 0 to 1

#### vibrateWithCustomPattern( vibrationPattern : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, seconds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, loopForever : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #vibrateWithCustomPattern data-toc-label='vibrateWithCustomPattern' }

Request a vibration with a custom pattern that loops forever.
@param vibrationPattern - alternating values where even indexes are "on" time, odd indices are "off"
@param seconds - time in seconds, how long to run the vibration
@param loopForever - should this loop forever?

#### vibrateWithCustomPatternDuration( vibrationPattern : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span>, seconds : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #vibrateWithCustomPatternDuration data-toc-label='vibrateWithCustomPatternDuration' }

Vibrate with a custom pattern for the provided duration.
@param vibrationPattern - alternative values where even indexes are "on" time and odd indexes are "off"
@param seconds

#### vibrateWithCustomPatternForever( vibrationPattern : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> ) {: #vibrateWithCustomPatternForever data-toc-label='vibrateWithCustomPatternForever' }

Vibrate with a custom pattern forever.
@param vibrationPattern - alternating values of "on" and "off" time in seconds, starting with "on" time.

#### setVibrationIntensity( intensity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setVibrationIntensity data-toc-label='setVibrationIntensity' }

Sets the intensity of the current vibration. No effect if there is no active vibration.
@param intensity - from 0 to 1

#### setVibrationSharpness( sharpness : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setVibrationSharpness data-toc-label='setVibrationSharpness' }

Sets the sharpness for the current vibration. No effect if there is no active vibration.
@param sharpness - from 0 to 1

#### stop() {: #stop data-toc-label='stop' }

Stop any active vibration immediately.

#### saveTestEvents( dataString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #saveTestEvents data-toc-label='saveTestEvents' }

Saves the provided data string to the containing Swift app. Data string is generated by VibrationTestEventRecorder.
@param dataString - the string to save

#### debug( debugString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #debug data-toc-label='debug' }

Send a debug message to the containing app that will be printed in the debugging tools.



## Source Code

See the source for [VibrationManageriOS.ts](https://github.com/phetsims/tappi/blob/main/js/VibrationManageriOS.ts) in the [tappi](https://github.com/phetsims/tappi) repository.
