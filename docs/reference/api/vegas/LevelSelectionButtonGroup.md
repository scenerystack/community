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

#### new LevelSelectionButtonGroup( items : <span style="font-weight: 400;">[LevelSelectionButtonGroupItem](../vegas/LevelSelectionButtonGroup.md#LevelSelectionButtonGroupItem)[]</span>, providedOptions? : <span style="font-weight: 400;">[LevelSelectionButtonGroupOptions](../vegas/LevelSelectionButtonGroup.md#LevelSelectionButtonGroupOptions)</span> ) {: #LevelSelectionButtonGroup-constructor data-toc-label='new LevelSelectionButtonGroup' }

### Instance Methods

#### focusLevelSelectionButton( level : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #focusLevelSelectionButton data-toc-label='focusLevelSelectionButton' }

Sets the focus to the button associated with a specified level number. If your simulation supports keyboard
traversal, you'll typically need to call this when returning to the UI that show the LevelSelectionButtonGroup,
for example, when the 'Back' or 'Start Over' button is pressed in a game.
@param level - numbered starting from 1, to comply with gameLevels query parameter



## Type LevelSelectionButtonGroupItem {: #LevelSelectionButtonGroupItem }


Describes one LevelSelectionButton

```js
import type { LevelSelectionButtonGroupItem } from 'scenerystack/vegas';
```


- **icon**: [Node](../scenery/Node.md)
<br>  The icon displayed on the button
- **scoreProperty**: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;
<br>  The score displayed on the button
- **tandemName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  Name used when creating the button's tandem, defaults to `level${N}Button`
- **options**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[LevelSelectionButtonOptions](../vegas/LevelSelectionButton.md#LevelSelectionButtonOptions), "tandem" | "buttonHeight" | "buttonWidth"&gt;
<br>  Options for the button. These will override LevelSelectionButtonGroupOptions.levelSelectionButtonOptions.
  Setting tandem is the responsibility of the group, so it is omitted here.




## Type LevelSelectionButtonGroupOptions {: #LevelSelectionButtonGroupOptions }


```js
import type { LevelSelectionButtonGroupOptions } from 'scenerystack/vegas';
```


- **levelSelectionButtonOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[LevelSelectionButtonOptions](../vegas/LevelSelectionButton.md#LevelSelectionButtonOptions), "tandem" | "buttonHeight" | "buttonWidth"&gt;
<br>  Options for all LevelSelectionButton instances in the group.
  These can be overridden for specific button(s) via LevelSelectionButtonGroupItem.options.
- **flowBoxOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[FlowBoxOptions](../scenery/FlowBox.md#FlowBoxOptions), "children"&gt;
<br>  Options for the default layout, which is a FlowBox. Ignored if createLayoutNode is provided.
- **createLayoutNode**?: ( buttons: [LevelSelectionButton](../vegas/LevelSelectionButton.md)[] ) =&gt; [LayoutNode](../scenery/LayoutNode.md)&lt;[NodeLayoutConstraint](../scenery/NodeLayoutConstraint.md)&gt;
<br>  Creates the Node that handles layout of the buttons.
  Use this option if you have a custom layout that cannot be achieved using the default FlowBox.
- **gameLevels**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
<br>  Game levels whose buttons should be visible. Levels are numbered starting from 1.
  Set this to the value of the gameLevels query parameter, a required query parameter.
  See getGameLevelsSchema.ts and example use in FMWQueryParameters.
- **groupButtonHeight**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **groupButtonWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "children"&gt; &amp; [PickRequired](../phet-core/PickRequired.md)&lt;[NodeOptions](../scenery/Node.md#NodeOptions), "tandem"&gt;




## Source Code

See the source for [LevelSelectionButtonGroup.ts](https://github.com/phetsims/vegas/blob/main/js/LevelSelectionButtonGroup.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
