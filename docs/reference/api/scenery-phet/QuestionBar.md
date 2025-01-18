# QuestionBar

## Overview

In every screen, the question bar at the top provides a framing question and context.

@author Chris Klusendorf (PhET Interactive Simulations)
@author Sam Reid (PhET Interactive Simulations)

## Class QuestionBar {: #QuestionBar }


```js
import { QuestionBar } from 'scenerystack/scenery-phet';
```
### Constructor

#### new QuestionBar( layoutBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span>, visibleBoundsProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span>, providedOptions : <span style="font-weight: 400;">[QuestionBarOptions](../scenery-phet/QuestionBar.md#QuestionBarOptions)</span> ) {: #QuestionBar-constructor data-toc-label='new QuestionBar' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type QuestionBarOptions {: #QuestionBarOptions }


```js
import type { QuestionBarOptions } from 'scenerystack/scenery-phet';
```


- **questionString**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
- **textOptions**?: [TextOptions](../scenery/Text.md#TextOptions)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[StatusBarOptions](../scenery-phet/StatusBar.md#StatusBarOptions), "floatToTop"&gt;




## Source Code

See the source for [QuestionBar.ts](https://github.com/phetsims/scenery-phet/blob/main/js/QuestionBar.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
