# RewardDialog

## Overview

A dialog that the client displays when the user gets a specific number of stars.
See specification in https://github.com/phetsims/vegas/issues/59.

@author Andrea Lin
@author Chris Malley (PixelZoom, Inc.)

## Class RewardDialog {: #RewardDialog }


```js
import { RewardDialog } from 'scenerystack/sim';
```
### Constructor

#### new RewardDialog( score : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[RewardDialogOptions](../sim/RewardDialog.md#RewardDialogOptions)</span> ) {: #RewardDialog-constructor data-toc-label='new RewardDialog' }

### Instance Methods





## Type RewardDialogOptions {: #RewardDialogOptions }


```js
import type { RewardDialogOptions } from 'scenerystack/sim';
```


- **phetGirlScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonsFont**?: [Font](../scenery/Font.md)
- **buttonsWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonsYSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **keepGoingButtonListener**?: [PushButtonListener](../sun/PushButtonModel.md#PushButtonListener)
- **newLevelButtonListener**?: [PushButtonListener](../sun/PushButtonModel.md#PushButtonListener)
- **scoreDisplayOptions**?: [ScoreDisplayNumberAndStarOptions](../vegas/ScoreDisplayNumberAndStar.md#ScoreDisplayNumberAndStarOptions)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[DialogOptions](../sim/Dialog.md#DialogOptions), "focusOnShowNode"&gt;




## Source Code

See the source for [RewardDialog.ts](https://github.com/phetsims/vegas/blob/main/js/RewardDialog.ts) in the [vegas](https://github.com/phetsims/vegas) repository.
