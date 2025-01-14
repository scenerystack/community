# ReadingBlockUtterance

## Overview

An Utterance specifically for ReadingBlocks. When a ReadingBlock is activated, the Trail from
the event is used to determine exactly which ReadingBlock instance to highlight in the
HighlightOverlay.

@author Jesse Greenberg

## Class ReadingBlockUtterance {: #ReadingBlockUtterance }


```js
import { ReadingBlockUtterance } from 'scenerystack/scenery';
```
### Constructor

#### new ReadingBlockUtterance( focus : <span style="font-weight: 400;">[Focus](../scenery/Focus.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, options? : <span style="font-weight: 400;">[ReadingBlockUtteranceOptions](../scenery/ReadingBlockUtterance.md#ReadingBlockUtteranceOptions)</span> ) {: #ReadingBlockUtterance-constructor data-toc-label='new ReadingBlockUtterance' }

### Instance Methods



### Instance Properties

#### readingBlockFocus : <span style="font-weight: 400;">[Focus](../scenery/Focus.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #readingBlockFocus data-toc-label='readingBlockFocus' }

Can be set and change to support reusing this ReadingBlockUtterance.



## Type ReadingBlockUtteranceOptions {: #ReadingBlockUtteranceOptions }


```js
import type { ReadingBlockUtteranceOptions } from 'scenerystack/scenery';
```


UtteranceOptions



## Source Code

See the source for [ReadingBlockUtterance.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/voicing/ReadingBlockUtterance.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
