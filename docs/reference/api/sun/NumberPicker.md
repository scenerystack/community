# NumberPicker

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/NumberPicker.ts](https://github.com/phetsims/sun/blob/main/js/NumberPicker.ts) for the most up-to-date information.

## Overview

NumberPicker is a UI component for picking a number value from a range.
This is actually a number spinner, but PhET refers to it as a 'picker', so that's what this class is named.

@author Chris Malley (PixelZoom, Inc.)

## Class NumberPicker {: #NumberPicker }


```js
import { NumberPicker } from 'scenerystack/sun';
```
### Constructor

#### new NumberPicker( valueProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, rangeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[NumberPickerOptions](../sun/NumberPicker.md#NumberPickerOptions)</span> ) {: #NumberPicker-constructor data-toc-label='new NumberPicker' }

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
<br>  Converts a value to a string to be displayed in a Text node. NOTE: If this function can give different strings
  to the same value depending on external state, it is recommended to rebuild the NumberPicker when that state
  changes (as it uses formatValue over the initial range to determine the bounds that labels can take).
- **onInput**?: ( event: [SceneryEvent](../scenery/SceneryEvent.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, oldValue: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  Listener that is called when the NumberPicker has input on it due to user interaction.
- **incrementEnabledFunction**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, range: [Range](../dot/Range.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Determines when the increment arrow is enabled.
- **decrementEnabledFunction**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, range: [Range](../dot/Range.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Determines when the decrement arrow is enabled.
- **disabledOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Opacity used to indicate disabled, [0,1] exclusive
- **valueChangedSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
<br>  Sound generators for when the NumberPicker's value changes, and when it hits range extremities.
  Use nullSoundPlayer to disable.
- **boundarySoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;ParentOptions, "valueProperty" | "enabledRangeProperty" | "pdomTimerDelay" | "pdomTimerInterval"&gt;




## Source Code

See the source for [NumberPicker.ts](https://github.com/phetsims/sun/blob/main/js/NumberPicker.ts) in the [sun](https://github.com/phetsims/sun) repository.
