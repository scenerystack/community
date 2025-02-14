# HotkeyData

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/input/HotkeyData.ts](https://github.com/phetsims/scenery/blob/main/js/input/HotkeyData.ts) for the most up-to-date information.

## Overview

Data pertaining to a hotkey, including keystrokes and associated metadata for documentation and the keyboard help
dialog.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class HotkeyData {: #HotkeyData }


```js
import { HotkeyData } from 'scenerystack/scenery';
```
### Constructor

#### new HotkeyData( providedOptions : <span style="font-weight: 400;">[HotkeyDataOptions](../scenery/HotkeyData.md#HotkeyDataOptions)</span> ) {: #HotkeyData-constructor data-toc-label='new HotkeyData' }

### Instance Methods

#### hasKeyStroke( keyStroke : <span style="font-weight: 400;">[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasKeyStroke data-toc-label='hasKeyStroke' }

Returns true if any of the keyStringProperties of this HotkeyData have the given keyStroke.

#### serialize() : <span style="font-weight: 400;">SerializedHotkeyData</span> {: #serialize data-toc-label='serialize' }

Serialization for usage with binder (generated documentation).

#### dispose() {: #dispose data-toc-label='dispose' }

Dispose of owned Properties to prevent memory leaks.

### Instance Properties

#### keyStringProperties : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)&gt;[]</span> {: #keyStringProperties data-toc-label='keyStringProperties' }

(readonly)

#### keyboardHelpDialogLabelStringProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #keyboardHelpDialogLabelStringProperty data-toc-label='keyboardHelpDialogLabelStringProperty' }

(readonly)

#### keyboardHelpDialogPDOMLabelStringProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #keyboardHelpDialogPDOMLabelStringProperty data-toc-label='keyboardHelpDialogPDOMLabelStringProperty' }

(readonly)

#### keyDescriptorsProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[KeyDescriptor](../scenery/KeyDescriptor.md)[]&gt;</span> {: #keyDescriptorsProperty data-toc-label='keyDescriptorsProperty' }

(readonly)

KeyDescriptors derived from keyStringProperties.

### Static Methods

#### combineKeyStringProperties( hotkeyDataArray : <span style="font-weight: 400;">[HotkeyData](../scenery/HotkeyData.md)[]</span> ) : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)&gt;[]</span> {: #combineKeyStringProperties data-toc-label='combineKeyStringProperties' }

Combine the keyStringProperties of an array of HotkeyData into a single array. Useful if you want to combine
multiple HotkeyData for a single KeyboardListener.

#### anyHaveKeyStroke( hotkeyDataArray : <span style="font-weight: 400;">[HotkeyData](../scenery/HotkeyData.md)[]</span>, keyStroke : <span style="font-weight: 400;">[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #anyHaveKeyStroke data-toc-label='anyHaveKeyStroke' }

Returns true if any of the HotkeyData in the array have the given keyStroke.



## Type HotkeyDataOptions {: #HotkeyDataOptions }


```js
import type { HotkeyDataOptions } from 'scenerystack/scenery';
```


- **keyStringProperties**: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[OneKeyStroke](../scenery/KeyDescriptor.md#OneKeyStroke)&gt;[]
<br>  The list of keystrokes that will trigger the hotkey. Wrapping in a Property allows for i18n in the future.
- **keyboardHelpDialogLabelStringProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  The visual label for this Hotkey in the Keyboard Help dialog. This will also be used as the label in
  generated documentation, unless binderName is provided.
- **keyboardHelpDialogPDOMLabelStringProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  The PDOM label and description for this Hotkey in the Keyboard Help dialog.
- **repoName**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  Data for binder (generated documentation).
- **global**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **binderName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>




## Source Code

See the source for [HotkeyData.ts](https://github.com/phetsims/scenery/blob/main/js/input/HotkeyData.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
