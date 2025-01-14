# ScoreDisplayStars

## Overview

Display a score as '* * * *', where '*' are stars, which may be fully or partially filled in.
See specification in https://github.com/phetsims/vegas/issues/59.

@author John Blanco
@author Sam Reid (PhET Interactive Simulations)
@author Andrea Lin

## Class ScoreDisplayStars {: #ScoreDisplayStars }


```js
import { ScoreDisplayStars } from 'scenerystack/vegas';
```
### Constructor

#### new ScoreDisplayStars( scoreProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ScoreDisplayStarsOptions](../vegas/ScoreDisplayStars.md#ScoreDisplayStarsOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type ScoreDisplayStarsOptions {: #ScoreDisplayStarsOptions }


```js
import type { ScoreDisplayStarsOptions } from 'scenerystack/vegas';
```


- **numberOfStars**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **perfectScore**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **starNodeOptions**?: [StarNodeOptions](../scenery-phet/StarNode.md#StarNodeOptions)
- &amp; StrictOmit&lt;[HBoxOptions](../scenery/HBox.md#HBoxOptions), "children"&gt;




## Source Code

See the source for [ScoreDisplayStars.ts](https://github.com/phetsims/vegas/blob/main/js/ScoreDisplayStars.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
