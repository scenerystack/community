# SpectrumSlider

## Overview

SpectrumSlider is a slider-like control used for choosing a value that corresponds to a displayed color.
It is the base class for WavelengthSlider.

@author Chris Malley (PixelZoom, Inc.)
@author Sam Reid (PhET Interactive Simulations)

## Class SpectrumSlider {: #SpectrumSlider }


@deprecated use WavelengthNumberControl, or Slider.js with SpectrumSliderTrack and SpectrumSliderTrack,
  see https://github.com/phetsims/scenery-phet/issues/729

```js
import { SpectrumSlider } from 'scenerystack/scenery-phet';
```
### Constructor

#### new SpectrumSlider( valueProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[SpectrumSliderOptions](../scenery-phet/SpectrumSlider.md#SpectrumSliderOptions)</span> ) {: #SpectrumSlider-constructor data-toc-label='new SpectrumSlider' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type SpectrumSliderOptions {: #SpectrumSliderOptions }


```js
import type { SpectrumSliderOptions } from 'scenerystack/scenery-phet';
```


- **minValue**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The minimum value to be displayed
- **maxValue**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  The maximum value to be displayed
- **valueToString**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  Maps value to string that is optionally displayed by the slider
- **valueToColor**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; [Color](../scenery/Color.md)
<br>  Maps value to Color that is rendered in the spectrum and in the thumb
- **trackWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  track properties
- **trackHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **trackOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **trackBorderStroke**?: [TColor](../scenery/TColor.md)
- **thumbWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  thumb
- **thumbHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbTouchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbTouchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbMouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbMouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **valueFont**?: [Font](../scenery/Font.md)
<br>  value
- **valueFill**?: [TColor](../scenery/TColor.md)
- **valueVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **valueYSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tweakersVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  tweakers
- **tweakerValueDelta**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tweakersXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **maxTweakersHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tweakersTouchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tweakersTouchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tweakersMouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **tweakersMouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **cursorVisible**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  cursor, the rectangle than follows the thumb in the track
- **cursorStroke**?: [TColor](../scenery/TColor.md)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;ParentOptions, "valueProperty" | "enabledRangeProperty"&gt;




## Source Code

See the source for [SpectrumSlider.ts](https://github.com/phetsims/scenery-phet/blob/main/js/SpectrumSlider.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
