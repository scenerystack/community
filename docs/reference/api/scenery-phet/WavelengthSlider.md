# WavelengthSlider

## Overview

Slider that shows a spectrum of colors for selecting a wavelength.

@author Chris Malley (PixelZoom, Inc.)
@author Sam Reid (PhET Interactive Simulations)

## Class WavelengthSlider {: #WavelengthSlider }


@deprecated use WavelengthNumberControl, or Slider.js with SpectrumSliderTrack and SpectrumSliderTrack,
  see https://github.com/phetsims/scenery-phet/issues/729

```js
import { WavelengthSlider } from 'scenerystack/scenery-phet';
```
### Constructor

#### new WavelengthSlider( wavelengthProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[WavelengthSliderOptions](../scenery-phet/WavelengthSlider.md#WavelengthSliderOptions)</span> ) {: #WavelengthSlider-constructor data-toc-label='new WavelengthSlider' }

### Instance Methods





## Type WavelengthSliderOptions {: #WavelengthSliderOptions }


```js
import type { WavelengthSliderOptions } from 'scenerystack/scenery-phet';
```


- **minWavelength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxWavelength**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[SpectrumSliderOptions](../scenery-phet/SpectrumSlider.md#SpectrumSliderOptions), "minValue" | "maxValue"&gt;




## Source Code

See the source for [WavelengthSlider.ts](https://github.com/phetsims/scenery-phet/blob/main/js/WavelengthSlider.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
