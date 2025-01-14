# LevelSelectionButton

## Overview

LevelSelectionButton is a push button for selecting a game level. It is typically created by LevelSelectionButtonGroup.
The original specification was done in https://github.com/phetsims/vegas/issues/59, but there have been numerous
changes since then.

Note that LevelSelectionButton originally supported an optional 'best time' display. That display was intentionally
removed from LevelSelectionButton, and from the level-selection user-interface in general, as the result of
a design meeting on 10/15/2023. See https://github.com/phetsims/vegas/issues/120#issuecomment-1858310218.

@author John Blanco
@author Chris Malley (PixelZoom, Inc.)
@author Andrea Lin

## Class LevelSelectionButton {: #LevelSelectionButton }


```js
import { LevelSelectionButton } from 'scenerystack/vegas';
```
### Constructor

#### new LevelSelectionButton( icon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, scoreProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[LevelSelectionButtonOptions](../vegas/LevelSelectionButton.md#LevelSelectionButtonOptions)</span> ) {: #LevelSelectionButton-constructor data-toc-label='new LevelSelectionButton' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Static Methods

#### createSizedImageNode( icon : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, size : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #createSizedImageNode data-toc-label='createSizedImageNode' }

Creates a new icon with specific dimensions. The provided icon is scaled to fit, and a background with the
specified size is added to ensure that the size of the returned Node is correct.



## Type LevelSelectionButtonOptions {: #LevelSelectionButtonOptions }


```js
import type { LevelSelectionButtonOptions } from 'scenerystack/vegas';
```


- **buttonWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **createScoreDisplay**?: ( scoreProperty: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; ) =&gt; [Node](../scenery/Node.md)
- **scoreDisplayProportion**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **scoreDisplayMinXMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **scoreDisplayMinYMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **iconToScoreDisplayYSpace**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **soundPlayerIndex**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; StrictOmit&lt;[RectangularPushButtonOptions](../sun/RectangularPushButton.md#RectangularPushButtonOptions), "content"&gt;




## Source Code

See the source for [LevelSelectionButton.ts](https://github.com/phetsims/vegas/blob/main/js/LevelSelectionButton.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
