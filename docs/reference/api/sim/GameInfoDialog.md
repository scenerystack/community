# GameInfoDialog

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/vegas/blob/main/js/GameInfoDialog.ts](https://github.com/phetsims/vegas/blob/main/js/GameInfoDialog.ts) for the most up-to-date information.

## Overview

GameInfoDialog shows descriptions for the levels of a game.  Each description is on a separate line.
If the simulation supports the gameLevels query parameter (see getGameLevelsSchema.ts) the caller
can optionally provide options.gameLevels to control which descriptions are visible.

@author Chris Malley (PixelZoom, Inc.)

## Class GameInfoDialog {: #GameInfoDialog }


```js
import { GameInfoDialog } from 'scenerystack/sim';
```
### Constructor

#### new GameInfoDialog( levelDescriptions : <span style="font-weight: 400;">( <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; )[]</span>, providedOptions? : <span style="font-weight: 400;">[GameInfoDialogOptions](../sim/GameInfoDialog.md#GameInfoDialogOptions)</span> ) {: #GameInfoDialog-constructor data-toc-label='new GameInfoDialog' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type GameInfoDialogOptions {: #GameInfoDialogOptions }


```js
import type { GameInfoDialogOptions } from 'scenerystack/sim';
```


- **gameLevels**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
<br>  Game levels whose descriptions should be visible in the dialog. Levels are numbered starting from 1.
  Set this to the value of the gameLevels query parameter, a required query parameter.
  See getGameLevelsSchema.ts and example use in WaveGameInfoDialog.
- **descriptionTextOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[RichTextOptions](../scenery/RichText.md#RichTextOptions), "tandem"&gt;
<br>  Options for the description text nodes
- **vBoxOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[VBoxOptions](../scenery/VBox.md#VBoxOptions), "children" | "maxWidth"&gt;
<br>  Options for the layout (VBox)
- **maxContentWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  constrains the width of the Dialog's content and title
- &amp; [DialogOptions](../sim/Dialog.md#DialogOptions)




## Source Code

See the source for [GameInfoDialog.ts](https://github.com/phetsims/vegas/blob/main/js/GameInfoDialog.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
