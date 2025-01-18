# ValueChangeSoundPlayer

## Overview

ValueChangeSoundPlayer plays sounds based on changes to a numerical value.  It was initially created for supporting
sound generation in PhET's Slider class and variations thereof, but it may have other applications.

This class does not extend SoundGenerator and is not itself added to the sound manager.  It is instead a player of
a set of sounds, each of which should be registered with the sound manager elsewhere.

Because the sounds should only be produced when users directly change a value, and not in side-effect-ish situations
(such as a reset), this class does not monitor a Property.  Instead, it provides methods that can be used to evaluate
changes in a value and potentially play sounds (or not, if the change doesn't warrant sound generation), and it is
the client's responsibility to know the situations in which these methods should be called.  Often these methods will
be called in drag handlers and other code that handles user input.

@author John Blanco (PhET Interactive Simulations)

## Class ValueChangeSoundPlayer {: #ValueChangeSoundPlayer }


```js
import { ValueChangeSoundPlayer } from 'scenerystack/tambo';
```
### Constructor

#### new ValueChangeSoundPlayer( valueRange : <span style="font-weight: 400;">[Range](../dot/Range.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ValueChangeSoundPlayerOptions](../tambo/ValueChangeSoundPlayer.md#ValueChangeSoundPlayerOptions)</span> ) {: #ValueChangeSoundPlayer-constructor data-toc-label='new ValueChangeSoundPlayer' }

### Instance Methods

#### playSoundIfThresholdReached( newValue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, oldValue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #playSoundIfThresholdReached data-toc-label='playSoundIfThresholdReached' }

Check if the new value has reached or crossed a threshold and, if so, play the appropriate sound.  If no threshold
has been reached or crossed and the new value is not at the min or max, no sound will be played.

#### playSoundForValueChange( newValue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, oldValue : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #playSoundForValueChange data-toc-label='playSoundForValueChange' }

Play the appropriate sound for the change in value indicated by the provided new and old values.  This will almost
always play a sound, but there are some exceptions.  See the code and comments for details.

### Static Properties

#### NO_SOUND : <span style="font-weight: 400;">[ValueChangeSoundPlayer](../tambo/ValueChangeSoundPlayer.md)</span> {: #NO_SOUND data-toc-label='NO_SOUND' }

(readonly)

A static instance that makes no sound.  This is generally used as an option value to turn off sound generation.

#### USE_MIDDLE_SOUND : <span style="font-weight: 400;">[TSoundPlayer](../tambo/TSoundPlayer.md)</span> {: #USE_MIDDLE_SOUND data-toc-label='USE_MIDDLE_SOUND' }

(readonly)

A static TSoundPlayer instance that is intended to be used as a flag for the min and max sound players to
indicate that the middle sound player should be used.



## Type ValueChangeSoundPlayerOptions {: #ValueChangeSoundPlayerOptions }


```js
import type { ValueChangeSoundPlayerOptions } from 'scenerystack/tambo';
```


- **middleMovingUpSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md) | [SoundClip](../tambo/SoundClip.md)
<br>  The sound player for movement in the middle of the range in the up direction.
- **middleMovingDownSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md) | [SoundClip](../tambo/SoundClip.md)
<br>  The sound player for movement in the middle of the range in the down direction.
- **middleMovingUpPlaybackRateMapper**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Functions that, if provided, will alter the playback rates of the middle sounds based on the provided value.
- **middleMovingDownPlaybackRateMapper**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numberOfMiddleThresholds**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  The number of thresholds that, when reached or crossed, will cause a sound to be played when checking value changes
  against thresholds.  In other words, this is the number of thresholds that exist between the min and max values.
  This assumes symmetric spacing of the thresholds, and is not compatible with explicitly setting of the 'delta'
  value.
- **interThresholdDelta**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  The delta value between thresholds that are used to determine when sounds are played.  This is an alternative way
  to specify the thresholds and should only be used when numberOfMiddleThresholds can't, which is generally when a
  very specific delta is required and having perfectly even thresholds isn't completely desirable.  Note that this
  approach will often lead to a situation where the distance between the last threshold and the end of the range
  isn't the same as the distance between all the other thresholds.  This was initially added to support
  NumberControl, see https://github.com/phetsims/sun/issues/697.  This is incompatible with specifying
  numberOfMiddleThresholds.
- **constrainValue**?: ( n: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  This function is used to constrain the values used for thresholds and value comparisons.  Without this, there can
  sometimes be cases where slight value differences, such as those caused by floating point inaccuracies, can cause
  sounds not to be generated when they should.  Use _.identity for a "no-op" if no constraint is needed.  This is
  used for multiple values, but is called "constrainValue" rather than "constrainValues" to match the pre-existing
  option name in the Slider class.  See https://github.com/phetsims/sun/issues/697#issuecomment-1066850181.
- **minSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
<br>  The sound player that is used to indicate the minimum value.
- **maxSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
<br>  The sound player that is used to indicate the maximum value.
- **minimumInterMiddleSoundTime**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The minimum amount of time that must pass after a middle sound is played before another can be played.  This is
  helpful when a lot of value changes can occur rapidly and thus create an overwhelming amount of sound.
- &amp; [DisposableOptions](../axon/Disposable.md#DisposableOptions)




## Source Code

See the source for [ValueChangeSoundPlayer.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/ValueChangeSoundPlayer.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
