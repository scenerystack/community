# AmplitudeModulator

## Overview

AmplitudeModulator instances can be used to create low-frequency amplitude oscillation effects on a loop, oscillator,
or other steady sound source.  It is not a sound generator itself, and is instead intended to be used as a component
within a sound generator.

@author John Blanco (PhET Interactive Simulations)

## Class AmplitudeModulator {: #AmplitudeModulator }


```js
import { AmplitudeModulator } from 'scenerystack/tambo';
```
### Constructor

#### new AmplitudeModulator( providedOptions? : <span style="font-weight: 400;">[AmplitudeModulatorOptions](../tambo/AmplitudeModulator.md#AmplitudeModulatorOptions)</span> ) {: #AmplitudeModulator-constructor data-toc-label='new AmplitudeModulator' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

Clean up memory references to avoid memory leaks.

#### getConnectionPoint() : <span style="font-weight: 400;">GainNode</span> {: #getConnectionPoint data-toc-label='getConnectionPoint' }

Get the gain node to which connections should occur.

#### connect( destination : <span style="font-weight: 400;">AudioNode | AudioParam</span> ) {: #connect data-toc-label='connect' }

Connect the output of this modulator to a destination.

### Instance Properties

#### frequencyProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #frequencyProperty data-toc-label='frequencyProperty' }

(readonly)

frequency of the oscillation, generally pretty low, like 1 to 20 or so

#### depthProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span> {: #depthProperty data-toc-label='depthProperty' }

(readonly)

depth of modulation, 0 for none, 1 for full modulation

#### waveformProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;OscillatorType&gt;</span> {: #waveformProperty data-toc-label='waveformProperty' }

(readonly)

Web Audio oscillator type

#### myEnabledProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #myEnabledProperty data-toc-label='myEnabledProperty' }

(readonly)



## Type AmplitudeModulatorOptions {: #AmplitudeModulatorOptions }


```js
import type { AmplitudeModulatorOptions } from 'scenerystack/tambo';
```


- **frequencyProperty**?: [NumberProperty](../axon/NumberProperty.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  controls the frequency of modulation, created if not supplied
- **depthProperty**?: [NumberProperty](../axon/NumberProperty.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  controls the depth of modulation, 0 means no modulation, 1 is the max, created if not supplied
- **waveformProperty**?: [Property](../axon/Property.md)&lt;OscillatorType&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Controls the type of waveform being used for the modulation, see the documentation for Web Audio OscillatorNode for
  the available types.  Created if not supplied.
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions), "enabledProperty"&gt;




## Source Code

See the source for [AmplitudeModulator.ts](https://github.com/phetsims/tambo/blob/main/js/AmplitudeModulator.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
