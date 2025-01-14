# ScoreDisplayLabeledNumber

## Overview

Display a score as 'Score: N', where N is a number.
See specification in https://github.com/phetsims/vegas/issues/59.

@author Andrea Lin

## Class ScoreDisplayLabeledNumber {: #ScoreDisplayLabeledNumber }


```js
import { ScoreDisplayLabeledNumber } from 'scenerystack/vegas';
```
### Constructor

#### new ScoreDisplayLabeledNumber( scoreProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ScoreDisplayLabeledNumberOptions](../vegas/ScoreDisplayLabeledNumber.md#ScoreDisplayLabeledNumberOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type ScoreDisplayLabeledNumberOptions {: #ScoreDisplayLabeledNumberOptions }


```js
import type { ScoreDisplayLabeledNumberOptions } from 'scenerystack/vegas';
```
- **font**?: [Font](../scenery/Font.md)
- **textFill**?: [TColor](../scenery/TColor.md)
- **scoreDecimalPlaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; StrictOmit&lt;[HBoxOptions](../scenery/HBox.md#HBoxOptions), "children"&gt;




## Source Code

See the source for [ScoreDisplayLabeledNumber.ts](https://github.com/phetsims/vegas/blob/main/js/ScoreDisplayLabeledNumber.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
