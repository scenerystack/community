# ScoreDisplayNumberAndStar

## Overview

Display a score as 'N *', where N is a number and '*' is a star.
If N is 0, it is hidden and the star is grayed out.
See specification in https://github.com/phetsims/vegas/issues/59.

@author Andrea Lin

## Class ScoreDisplayNumberAndStar {: #ScoreDisplayNumberAndStar }


```js
import { ScoreDisplayNumberAndStar } from 'scenerystack/vegas';
```
### Constructor

#### new ScoreDisplayNumberAndStar( scoreProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ScoreDisplayNumberAndStarOptions](../vegas/ScoreDisplayNumberAndStar.md#ScoreDisplayNumberAndStarOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type ScoreDisplayNumberAndStarOptions {: #ScoreDisplayNumberAndStarOptions }


```js
import type { ScoreDisplayNumberAndStarOptions } from 'scenerystack/vegas';
```
- **font**?: [Font](../scenery/Font.md)
- **textFill**?: [TColor](../scenery/TColor.md)
- **scoreDecimalPlaces**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **starNodeOptions**?: [StarNodeOptions](../scenery-phet/StarNode.md#StarNodeOptions)
- &amp; StrictOmit&lt;[HBoxOptions](../scenery/HBox.md#HBoxOptions), "children"&gt;




## Source Code

See the source for [ScoreDisplayNumberAndStar.ts](https://github.com/phetsims/vegas/blob/main/js/ScoreDisplayNumberAndStar.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
