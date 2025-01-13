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



## Source Code

See the source for [NumberPicker.ts](https://github.com/phetsims/sun/blob/main/js/NumberPicker.ts) in the [sun](https://github.com/phetsims/sun) repository.
