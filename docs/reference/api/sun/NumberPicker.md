# NumberPicker

## Overview

NumberPicker is a UI component for picking a number value from a range.
This is actually a number spinner, but PhET refers to it as a 'picker', so that's what this class is named.

@author Chris Malley (PixelZoom, Inc.)

## Class NumberPicker {: #NumberPicker }


```js
import { NumberPicker } from 'scenerystack/sun';
```
### Constructor

#### new NumberPicker( valueProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, rangeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[NumberPickerOptions](../sun/NumberPicker.md#NumberPickerOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### setArrowsVisible( visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setArrowsVisible data-toc-label='setArrowsVisible' }

Sets visibility of the arrows.

### Static Methods

#### createIcon( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, providedOptions? : <span style="font-weight: 400;">CreateIconOptions</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #createIcon data-toc-label='createIcon' }



## Type NumberPickerOptions {: #NumberPickerOptions }


```js
import type { NumberPickerOptions } from 'scenerystack/sun';
```
- **color**?: [TColor](../scenery/TColor.md)
- **pressedColor**?: [TColor](../scenery/TColor.md)
- **backgroundColor**?: [TColor](../scenery/TColor.md)
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **decimalPlaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **font**?: [Font](../scenery/Font.md)
- **incrementFunction**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **decrementFunction**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **timerDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **timerInterval**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **noValueString**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **align**?: Align
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **backgroundStroke**?: [TColor](../scenery/TColor.md)
- **backgroundLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **backgroundDisabledOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowYSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowStroke**?: [TColor](../scenery/TColor.md)
- **arrowLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowDisabledOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **valueMaxWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **formatValue**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **onInput**?: ( event: [SceneryEvent](../scenery/SceneryEvent.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, oldValue: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **incrementEnabledFunction**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, range: [Range](../dot/Range.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **decrementEnabledFunction**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, range: [Range](../dot/Range.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **disabledOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **valueChangedSoundPlayer**?: TSoundPlayer
- **boundarySoundPlayer**?: TSoundPlayer
- &amp; StrictOmit&lt;ParentOptions, "valueProperty" | "enabledRangeProperty" | "pdomTimerDelay" | "pdomTimerInterval"&gt;




## Source Code

See the source for [NumberPicker.ts](https://github.com/phetsims/sun/blob/main/js/NumberPicker.ts) in the [sun](https://github.com/phetsims/sun) repository.
