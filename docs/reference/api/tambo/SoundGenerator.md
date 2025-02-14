# SoundGenerator

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundGenerator.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundGenerator.ts) for the most up-to-date information.

## Overview

SoundGenerator is an abstract base class for Web-Audio-based sound-producing elements that work in conjunction with
the soundManager to produces sounds.

@author John Blanco (PhET Interactive Simulations)

## Class SoundGenerator {: #SoundGenerator }


```js
import { SoundGenerator } from 'scenerystack/tambo';
```
### Constructor

#### new SoundGenerator( providedOptions? : <span style="font-weight: 400;">[SoundGeneratorOptions](../tambo/SoundGenerator.md#SoundGeneratorOptions)</span> ) {: #SoundGenerator-constructor data-toc-label='new SoundGenerator' }

### Instance Methods

#### connect( audioParam : <span style="font-weight: 400;">AudioParam | AudioNode</span> ) {: #connect data-toc-label='connect' }

Connect the sound generator to an audio parameter.

#### disconnect( audioParam : <span style="font-weight: 400;">AudioParam | AudioNode</span> ) {: #disconnect data-toc-label='disconnect' }

Disconnect the sound generator from an audio parameter.

#### isConnectedTo( audioParam : <span style="font-weight: 400;">AudioParam | AudioNode</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isConnectedTo data-toc-label='isConnectedTo' }

Test if this sound generator is connected to the provided audio param.

#### setOutputLevel( outputLevel : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, timeConstant : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setOutputLevel data-toc-label='setOutputLevel' }

Sets the output level of the sound generator.

@param outputLevel - generally between 0 and 1, but can be larger than 1 if necessary to amplify a small signal,
  and can be negative to invert the phase.
@param [timeConstant] - time constant for output level change, longer values mean slower transitions, in seconds.
  Note that timeConstant is NOT a fade time. It's an exponential approach to the target output level, and the argument to
  setTargetAtTime, documented at https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setTargetAtTime#timeconstant
  The document has this suggestion for choosing the value for timeConstant: "Depending on your use case, getting
  95% toward the target value may already be enough; in that case, you could set timeConstant to one third of the
  desired duration."

#### getOutputLevel() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getOutputLevel data-toc-label='getOutputLevel' }

Get the current output level setting.  Note that if the sound generator is disabled, this could return a non-zero
value but the sound generator won't produce audible sound.

### Instance Properties

#### audioContext : <span style="font-weight: 400;">AudioContext</span> {: #audioContext data-toc-label='audioContext' }

(protected)

#### fullyEnabledProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #fullyEnabledProperty data-toc-label='fullyEnabledProperty' }

(readonly)

A Property that tracks whether this sound generator is fully enabled, meaning that all the enable control
Properties are in a state indicating that sound can be produced.  This should only be updated in the listener
function defined below, nowhere else.

#### mainGainNode : <span style="font-weight: 400;">GainNode</span> {: #mainGainNode data-toc-label='mainGainNode' }

(protected)

main gain control that will be used to control the volume of the sound

#### soundSourceDestination : <span style="font-weight: 400;">AudioNode</span> {: #soundSourceDestination data-toc-label='soundSourceDestination' }

(protected)

The audio node to which the sound sources will connect, analogous to AudioContext.destination.  If no additional
audio nodes were provided upon construction, this will be the main gain node.



## Type SoundGeneratorOptions {: #SoundGeneratorOptions }


```js
import type { SoundGeneratorOptions } from 'scenerystack/tambo';
```


- **initialOutputLevel**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Initial value for the output level.  Generally, this should always be between 0 and 1, but values greater than 1
  may be needed in some rare cases in order to create enough output to be audible.
- **audioContext**?: AudioContext
<br>  By default, the shared audio context is used so that this sound can be registered with the sonification manager,
  but this can be overridden if desired.  In general, overriding will only be done for testing.
- **connectImmediately**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  This flag controls whether the output of this sound generator is immediately connected to the audio context
  destination.  This is useful for testing, but should not be set to true if this sound generator is being used
  in conjunction with the sound manager.
- **additionalAudioNodes**?: AudioNode[]
<br>  Audio nodes that will be connected in the specified order between the bufferSource and localGainNode, used to
  insert things like filters, compressors, etc.
- **sonificationLevel**?: [SoundLevelEnum](../tambo/SoundLevelEnum.md)
<br>  The "level" for which this sound should be played, either BASIC or EXTRA.
- **associatedViewNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  The associated view node is a Scenery node that, if provided, must be visible in the display for the sound
  generator to be enabled.  This is generally used only for sounds that can play for long durations, such as a
  looping sound clip, that should be stopped when the associated visual representation is hidden.
- **enabledDuringReset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Controls whether sound should be generated during a reset.  Generally the default value should be used, which is
  `false`, meaning that sound is not produced during a reset.  There are some cases where this is turned on, such as
  for the sound produced by the Reset All button.
- **enabledDuringPhetioStateSetting**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Controls whether sounds should be generated when phet-io state is being set.  In almost all cases, this should not
  be overridden and the default behavior should be used, which is to prevent all sound production during the setting
  of phet-io state.
- &amp; [EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions)




## Source Code

See the source for [SoundGenerator.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/SoundGenerator.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
