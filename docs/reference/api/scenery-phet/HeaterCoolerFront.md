# HeaterCoolerFront

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/HeaterCoolerFront.ts](https://github.com/phetsims/scenery-phet/blob/main/js/HeaterCoolerFront.ts) for the most up-to-date information.

## Overview

Front of the HeaterCoolerNode.  It is independent from the HeaterCoolerBack so that one can easily layer objects
inside of the HeaterCoolerNode.  The HeaterCoolerFront contains the heater body, labels, and control slider.

@author Siddhartha Chinthapally (Actual Concepts) on 20-11-2014.
@author Jesse Greenberg


## Class HeaterCoolerFront {: #HeaterCoolerFront }


```js
import { HeaterCoolerFront } from 'scenerystack/scenery-phet';
```
### Constructor

#### new HeaterCoolerFront( heatCoolAmountProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span>, providedOptions? : <span style="font-weight: 400;">[HeaterCoolerFrontOptions](../scenery-phet/HeaterCoolerFront.md#HeaterCoolerFrontOptions)</span> ) {: #HeaterCoolerFront-constructor data-toc-label='new HeaterCoolerFront' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### slider : <span style="font-weight: 400;">[VSlider](../sun/VSlider.md)</span> {: #slider data-toc-label='slider' }

(readonly)

please use judiciously, see https://github.com/phetsims/scenery-phet/issues/442

### Static Properties

#### SET_TO_ZERO_HOTKEY_DATA : <span style="font-weight: 400;">[HotkeyData](../scenery/HotkeyData.md)</span> {: #SET_TO_ZERO_HOTKEY_DATA data-toc-label='SET_TO_ZERO_HOTKEY_DATA' }

(readonly)



## Type HeaterCoolerFrontOptions {: #HeaterCoolerFrontOptions }


```js
import type { HeaterCoolerFrontOptions } from 'scenerystack/scenery-phet';
```


- **baseColor**?: [Color](../scenery/Color.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **width**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **heatEnabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **coolEnabled**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **snapToZero**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **snapToZeroThreshold**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  the percentage of the slider's minimum and maximum range at which the slider should snap to zero when
  released. Note that it's only used when this.snapToZeroProperty is false and when both heating and cooling
  are enabled. A value of 1 is the same as snapToZero: true, and a value of 0 removes snapping entirely.
  Default value empirically determined, see https://github.com/phetsims/scenery-phet/issues/568
- **heatString**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
<br>  slider label options
- **coolString**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
- **labelFont**?: [Font](../scenery/Font.md)
- **labelMaxWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbSize**?: [Dimension2](../dot/Dimension2.md)
<br>  slider options
- **thumbTouchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbTouchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbMouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbMouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **thumbFill**?: [TColor](../scenery/TColor.md)
- **thumbFillHighlighted**?: [TColor](../scenery/TColor.md)
- **heaterCoolerBack**?: [HeaterCoolerBack](../scenery-phet/HeaterCoolerBack.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  links the NodeIO Properties of the provided HeaterCoolerBack to this HeaterCoolerFront
- **sliderOptions**?: [SliderOptions](../sun/Slider.md#SliderOptions)
- **snapToZeroPropertyOptions**?: [BooleanPropertyOptions](../axon/BooleanProperty.md#BooleanPropertyOptions)
<br>  Passed to snapToZeroProperty
- **phetioInstrument**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  HeaterCoolerFront is sometimes instrumented as a parent component, and is sometimes a sub-compoent to
  HeaterCoolerNode.js. This option provides the ability to limit the number of intermediate Nodes in the
  instrumented tree. This doesn't affect the instrumentation of sub-components like the slider.
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [HeaterCoolerFront.ts](https://github.com/phetsims/scenery-phet/blob/main/js/HeaterCoolerFront.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
