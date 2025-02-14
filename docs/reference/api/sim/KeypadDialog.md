# KeypadDialog

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/keypad/KeypadDialog.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keypad/KeypadDialog.ts) for the most up-to-date information.

## Overview

KeypadDialog is a Dialog sub-type that handles the creation and management of a Keypad.

The KeypadDialog is shown when requested through the beginEdit() method, which occurs when the user presses on a
BallValuesPanelNumberDisplay, to allow the user to manipulate a Ball Property. Edits must be within a specified
range. There will be a 'Enter' button to allow the user to submit a edit, and edits are canceled if the user hides
the Dialog.

KeypadDialog is created at the start of the sim and is never disposed, so no dispose method is necessary and
internal links are left as-is.

@author Brandon Li

## Class KeypadDialog {: #KeypadDialog }


```js
import { KeypadDialog } from 'scenerystack/sim';
```
### Constructor

#### new KeypadDialog( providedOptions? : <span style="font-weight: 400;">[KeypadDialogOptions](../sim/KeypadDialog.md#KeypadDialogOptions)</span> ) {: #KeypadDialog-constructor data-toc-label='new KeypadDialog' }

### Instance Methods

#### beginEdit( editValue : <span style="font-weight: 400;">( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, valueRange : <span style="font-weight: 400;">[Range](../dot/Range.md)</span>, patternStringProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;</span>, editFinishedCallback : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #beginEdit data-toc-label='beginEdit' }

Begins an edit by showing the KeypadDialog. Called when the user presses on a BallValuesPanelNumberDisplay to allow
the user to manipulate a Ball.

@param editValue - the function called when a edit in-range successfully occurs.
@param valueRange - the Range that the user can edit the valueProperty
@param patternStringProperty - the template string that formats the text on the rangeText.
@param editFinishedCallback - callback when edit is entered or canceled.

#### hide() {: #hide data-toc-label='hide' }

Hides the dialog. Overridden to also call the editFinishedCallback function when edits are canceled.

#### dispose() {: #dispose data-toc-label='dispose' }



## Type KeypadDialogOptions {: #KeypadDialogOptions }


```js
import type { KeypadDialogOptions } from 'scenerystack/sim';
```


- **font**?: [Font](../scenery/Font.md)
<br>  Font used for all Text instances within the Dialog.
- **valueBoxWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Width of the value field, height determined by valueFont.
- **valueYMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Vertical margin inside the value box.
- **contentSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Vertical spacing between the content of the KeypadDialog.
- **useRichTextRange**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the range Text will be created as a RichText
- **keypadLayout**?: [KeypadLayout](../scenery-phet/Keypad.md#KeypadLayout)
- **keypadOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[KeypadOptions](../scenery-phet/Keypad.md#KeypadOptions), "tandem"&gt;
- **enterButtonOptions**?: [RectangularPushButtonOptions](../sun/RectangularPushButton.md#RectangularPushButtonOptions)
- **keypadDefaultTextColor**?: [TColor](../scenery/TColor.md)
- **keypadErrorTextColor**?: [TColor](../scenery/TColor.md)
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[DialogOptions](../sim/Dialog.md#DialogOptions), "focusOnShowNode"&gt;




## Source Code

See the source for [KeypadDialog.ts](https://github.com/phetsims/scenery-phet/blob/main/js/keypad/KeypadDialog.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
