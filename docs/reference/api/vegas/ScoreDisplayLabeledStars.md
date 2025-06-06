# ScoreDisplayLabeledStars

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/vegas/blob/main/js/ScoreDisplayLabeledStars.ts](https://github.com/phetsims/vegas/blob/main/js/ScoreDisplayLabeledStars.ts) for the most up-to-date information.

## Overview

Display a score as 'Score: * * * *', where '*' are stars, which may be fully or partially filled in.
See specification in https://github.com/phetsims/vegas/issues/59.

@author Chris Malley (PixelZoom, Inc.)

## Class ScoreDisplayLabeledStars {: #ScoreDisplayLabeledStars }


```js
import { ScoreDisplayLabeledStars } from 'scenerystack/vegas';
```
### Constructor

#### new ScoreDisplayLabeledStars( scoreProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ScoreDisplayLabeledStarsOptions](../vegas/ScoreDisplayLabeledStars.md#ScoreDisplayLabeledStarsOptions)</span> ) {: #ScoreDisplayLabeledStars-constructor data-toc-label='new ScoreDisplayLabeledStars' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type ScoreDisplayLabeledStarsOptions {: #ScoreDisplayLabeledStarsOptions }


```js
import type { ScoreDisplayLabeledStarsOptions } from 'scenerystack/vegas';
```


- **font**?: [Font](../scenery/Font.md)
- **textFill**?: [TColor](../scenery/TColor.md)
- **spacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [ScoreDisplayStarsOptions](../vegas/ScoreDisplayStars.md#ScoreDisplayStarsOptions) &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[HBoxOptions](../scenery/HBox.md#HBoxOptions), "children"&gt;




## Source Code

See the source for [ScoreDisplayLabeledStars.ts](https://github.com/phetsims/vegas/blob/main/js/ScoreDisplayLabeledStars.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
