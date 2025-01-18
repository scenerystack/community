# WavelengthNumberControl

## Overview

NumberControl that shows a spectrum of colors for selecting a wavelength.

@author Sam Reid (PhET Interactive Simulations)

## Class WavelengthNumberControl {: #WavelengthNumberControl }


@param wavelengthProperty - wavelength, in nm
@param [options]
@constructor

```js
import { WavelengthNumberControl } from 'scenerystack/scenery-phet';
```
### Constructor

#### new WavelengthNumberControl( wavelengthProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[WavelengthNumberControlOptions](../scenery-phet/WavelengthNumberControl.md#WavelengthNumberControlOptions)</span> ) {: #WavelengthNumberControl-constructor data-toc-label='new WavelengthNumberControl' }

### Instance Methods





## Type WavelengthNumberControlOptions {: #WavelengthNumberControlOptions }


```js
import type { WavelengthNumberControlOptions } from 'scenerystack/scenery-phet';
```


- **title**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
- **range**?: [Range](../dot/Range.md)
- **spectrumSliderTrackOptions**?: [SpectrumSliderTrackOptions](../scenery-phet/SpectrumSliderTrack.md#SpectrumSliderTrackOptions)
- **spectrumSliderThumbOptions**?: [SpectrumSliderThumbOptions](../scenery-phet/SpectrumSliderThumb.md#SpectrumSliderThumbOptions)
- &amp; [NestedStrictOmit](../phet-core/NestedStrictOmit.md)&lt;[NumberControlOptions](../scenery-phet/NumberControl.md#NumberControlOptions), "sliderOptions", "trackNode" | "thumbNode"&gt;




## Source Code

See the source for [WavelengthNumberControl.ts](https://github.com/phetsims/scenery-phet/blob/main/js/WavelengthNumberControl.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
