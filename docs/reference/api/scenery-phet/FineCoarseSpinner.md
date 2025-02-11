# FineCoarseSpinner

## Overview

A type of spinner UI component that supports 'fine' and 'coarse' changes to a numeric value.

  &lt;  &lt;&lt;  [ value ]  &gt;&gt;  &gt;

@author Chris Malley (PixelZoom, Inc.)

## Class FineCoarseSpinner {: #FineCoarseSpinner }


```js
import { FineCoarseSpinner } from 'scenerystack/scenery-phet';
```
### Constructor

#### new FineCoarseSpinner( numberProperty : <span style="font-weight: 400;">[NumberProperty](../axon/NumberProperty.md)</span>, providedOptions? : <span style="font-weight: 400;">[FineCoarseSpinnerOptions](../scenery-phet/FineCoarseSpinner.md#FineCoarseSpinnerOptions)</span> ) {: #FineCoarseSpinner-constructor data-toc-label='new FineCoarseSpinner' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type FineCoarseSpinnerOptions {: #FineCoarseSpinnerOptions }


```js
import type { FineCoarseSpinnerOptions } from 'scenerystack/scenery-phet';
```


- **deltaFine**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **deltaCoarse**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **spacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **arrowsSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
- **numberDisplayOptions**?: [NumberDisplayOptions](../scenery-phet/NumberDisplay.md#NumberDisplayOptions)
- **arrowButtonOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[ArrowButtonOptions](../sun/ArrowButton.md#ArrowButtonOptions), "numberOfArrows" | "tandem" | "focusable" | "soundPlayer"&gt;
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;ParentOptions, "children" | "valueProperty" | "enabledRangeProperty" | "keyboardStep" | "shiftKeyboardStep" | "pageKeyboardStep" | "onInput"&gt;




## Source Code

See the source for [FineCoarseSpinner.ts](https://github.com/phetsims/scenery-phet/blob/main/js/FineCoarseSpinner.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
