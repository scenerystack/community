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

#### new LevelSelectionButton( icon : <span style="font-weight: 400; opacity: 80%;">Node</span>, scoreProperty : <span style="font-weight: 400; opacity: 80%;">TProperty&lt;number&gt;</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">LevelSelectionButtonOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

### Static Methods

#### createSizedImageNode( icon : <span style="font-weight: 400; opacity: 80%;">Node</span>, size : <span style="font-weight: 400; opacity: 80%;">Dimension2</span> ) : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #createSizedImageNode data-toc-label='createSizedImageNode' }

Creates a new icon with specific dimensions. The provided icon is scaled to fit, and a background with the
specified size is added to ensure that the size of the returned Node is correct.



## Source Code

See the source for [LevelSelectionButton.ts](https://github.com/phetsims/vegas/blob/main/js/LevelSelectionButton.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
