# DiscreteSoundGenerator

## Overview

DiscreteSoundGenerator produces sounds based on the value of a number property.  It monitors the property value and
maps it to one of a finite number of bins, and produces a discrete sound when the bin to which the value is mapped
changes.

@author John Blanco (PhET Interactive Simulations)

## Class DiscreteSoundGenerator {: #DiscreteSoundGenerator }


```js
import { DiscreteSoundGenerator } from 'scenerystack/tambo';
```
### Constructor

#### new DiscreteSoundGenerator( valueProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span>, valueRange : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, providedOptions? : <span style="font-weight: 400;">[DiscreteSoundGeneratorOptions](../tambo/DiscreteSoundGenerator.md#DiscreteSoundGeneratorOptions)</span> ) {: #DiscreteSoundGenerator-constructor data-toc-label='new DiscreteSoundGenerator' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type DiscreteSoundGeneratorOptions {: #DiscreteSoundGeneratorOptions }


```js
import type { DiscreteSoundGeneratorOptions } from 'scenerystack/tambo';
```


- **sound**?: [WrappedAudioBuffer](../tambo/WrappedAudioBuffer.md)
<br>  the sound that will be played at the discrete values
- **numBins**?: 7
<br>  number of discrete bins, crossing between them will produce a sound
- **playbackRateRange**?: [Range](../dot/Range.md)
<br>  the range over which the playback rate is varied, 1 is normal speed, 2 is double speed, et cetera
- **alwaysPlayOnChangesProperty**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | [BooleanProperty](../axon/BooleanProperty.md)
<br>  when true will cause sound to be played on any change of the value property
- **playSoundAtMin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the sound will be played when the value reaches the min.
- **playSoundAtMax**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the sound will be played when the value reaches the max.
- **outOfRangeValuesOK**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  a flag that indicates whether out of range values should be ignored
- &amp; [SoundClipOptions](../tambo/SoundClip.md#SoundClipOptions)




## Source Code

See the source for [DiscreteSoundGenerator.ts](https://github.com/phetsims/tambo/blob/main/js/sound-generators/DiscreteSoundGenerator.ts) in the [tambo](https://github.com/phetsims/tambo) repository.
