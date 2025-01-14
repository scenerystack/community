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

#### new NumberSpinner( numberProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, rangeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[NumberSpinnerOptions](../sun/NumberSpinner.md#NumberSpinnerOptions)</span> ) {: #NumberSpinner-constructor data-toc-label='new NumberSpinner' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type NumberSpinnerOptions {: #NumberSpinnerOptions }


```js
import type { NumberSpinnerOptions } from 'scenerystack/sun';
```


- **arrowsPosition**?: NumberSpinnerArrowsPosition
<br>  where to place the arrow buttons
- **arrowsScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  By default, arrows are scaled to fit dimensions of value background. This is an additional scale factor.
- **arrowButtonFill**?: [TColor](../scenery/TColor.md)
- **arrowButtonStroke**?: [TColor](../scenery/TColor.md)
- **arrowButtonLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowsSoundPlayer**?: TSoundPlayer
- **incrementFunction**?: ( ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> )
<br>  Function called when the increment button is pressed. Defaults to adding options.deltaValue.
- **decrementFunction**?: ( ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> )
<br>  Function called when the decrement button is pressed. Defaults to subtracting options.deltaValue.
- **deltaValue**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  may be ignored if incrementFunction and decrementFunction are provided
- **xSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **numberDisplayOptions**?: [NumberDisplayOptions](../scenery-phet/NumberDisplay.md#NumberDisplayOptions)
<br>  NumberDisplay options
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  arrow button pointer areas
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; StrictOmit&lt;ParentOptions, "children" | "valueProperty" | "enabledRangeProperty" | "keyboardStep" | "shiftKeyboardStep" | "pageKeyboardStep" | "onInput"&gt;




## Source Code

See the source for [NumberSpinner.ts](https://github.com/phetsims/sun/blob/main/js/NumberSpinner.ts) in the [sun](https://github.com/phetsims/sun) repository.
