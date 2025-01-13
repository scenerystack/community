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

#### new NumberPicker( valueProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;number&gt;</span>, rangeProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;Range&gt;</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">NumberPickerOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### setArrowsVisible( visible : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setArrowsVisible data-toc-label='setArrowsVisible' }

Sets visibility of the arrows.

### Static Methods

#### createIcon( value : <span style="font-weight: 400; opacity: 80%;">number</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">CreateIconOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #createIcon data-toc-label='createIcon' }



## Source Code

See the source for [NumberPicker.ts](https://github.com/phetsims/sun/blob/main/js/NumberPicker.ts) in the [sun](https://github.com/phetsims/sun) repository.
