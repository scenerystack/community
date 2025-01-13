# LevelSelectionButtonGroup

## Overview

LevelSelectionButtonGroup is a group of related LevelSelectionButtons, used in games.

Responsibilities include:
- Instantiation of the buttons, based on an 'items' array that describes the buttons.
- Setting an effective uniform size for the button icons.
- Layout of the buttons, see details below.
- Support for the gameLevels query parameter, via LevelSelectionButtonGroupOptions.gameLevels.

Layout:
- The default layout is a single row of buttons, customizable via LevelSelectionButtonGroupOptions.flowBoxOptions.
- To create multiple rows of buttons, see example MultiRowButtonGroup in demoLevelSelectionButtonGroup.ts.
- To create a custom layout, see example XButtonGroup in demoLevelSelectionButtonGroup.ts.

@author Chris Malley (PixelZoom, Inc.)

## Class LevelSelectionButtonGroup {: #LevelSelectionButtonGroup }


```js
import { LevelSelectionButtonGroup } from 'scenerystack/vegas';
```
### Constructor

#### new LevelSelectionButtonGroup( items : <span style="font-weight: 400; opacity: 80%;">LevelSelectionButtonGroupItem[]</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">LevelSelectionButtonGroupOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### focusLevelSelectionButton( level : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #focusLevelSelectionButton data-toc-label='focusLevelSelectionButton' }

Sets the focus to the button associated with a specified level number. If your simulation supports keyboard
traversal, you'll typically need to call this when returning to the UI that show the LevelSelectionButtonGroup,
for example, when the 'Back' or 'Start Over' button is pressed in a game.
@param level - numbered starting from 1, to comply with gameLevels query parameter



## Source Code

See the source for [LevelSelectionButtonGroup.ts](https://github.com/phetsims/vegas/blob/main/js/LevelSelectionButtonGroup.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
