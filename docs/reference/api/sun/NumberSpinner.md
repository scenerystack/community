# NumberSpinner

## Overview

Spinner for numbers.

@author Chris Malley (PixelZoom, Inc.)
@author Andrea Lin (PhET Interactive Simulations)

## Class NumberSpinner {: #NumberSpinner }


```js
import { NumberSpinner } from 'scenerystack/sun';
```
### Constructor

#### new NumberSpinner( numberProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, rangeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[NumberSpinnerOptions](../sun/NumberSpinner.md#NumberSpinnerOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type NumberSpinnerOptions {: #NumberSpinnerOptions }


```js
import type { NumberSpinnerOptions } from 'scenerystack/sun';
```


- **arrowsPosition**?: NumberSpinnerArrowsPosition
- **arrowsScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **arrowButtonFill**?: [TColor](../scenery/TColor.md)
- **arrowButtonStroke**?: [TColor](../scenery/TColor.md)
- **arrowButtonLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowsSoundPlayer**?: TSoundPlayer
- **incrementFunction**?: ( ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> )
- **decrementFunction**?: ( ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> )
- **deltaValue**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **xSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numberDisplayOptions**?: [NumberDisplayOptions](../scenery-phet/NumberDisplay.md#NumberDisplayOptions)
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; StrictOmit&lt;ParentOptions, "children" | "valueProperty" | "enabledRangeProperty" | "keyboardStep" | "shiftKeyboardStep" | "pageKeyboardStep" | "onInput"&gt;




## Source Code

See the source for [NumberSpinner.ts](https://github.com/phetsims/sun/blob/main/js/NumberSpinner.ts) in the [sun](https://github.com/phetsims/sun) repository.
