# ComboBoxListBox

## Overview

The popup list box for a ComboBox.

@author Chris Malley (PixelZoom, Inc.)

## Class ComboBoxListBox {: #ComboBoxListBox }


```js
import { ComboBoxListBox } from 'scenerystack/sun';
```
### Constructor

#### new ComboBoxListBox( property : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;T&gt;</span>, items : <span style="font-weight: 400;">[ComboBoxItemNoNode](../sun/ComboBox.md#ComboBoxItemNoNode)&lt;T&gt;[]</span>, nodes : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span>, hideListBoxCallback : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, focusButtonCallback : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, voiceOnSelectionNode : <span style="font-weight: 400;">[VoicingNode](../scenery/Voicing.md#VoicingNode)</span>, tandem : <span style="font-weight: 400;">[Tandem](../tandem/Tandem.md)</span>, providedOptions? : <span style="font-weight: 400;">[ComboBoxListBoxOptions](../sun/ComboBoxListBox.md#ComboBoxListBoxOptions)</span> ) {: #ComboBoxListBox-constructor data-toc-label='new ComboBoxListBox' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### setItemVisible( value : <span style="font-weight: 400;">T</span>, visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setItemVisible data-toc-label='setItemVisible' }

Sets the visibility of one or more items in the listbox that correspond to a value. Assumes that each item
in the listbox has a unique value.
@param value - the value associated with the ComboBoxItem
@param visible

#### isItemVisible( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isItemVisible data-toc-label='isItemVisible' }

Is the item that corresponds to a value visible when the listbox is popped up?
@param value - the value associated with the ComboBoxItem

#### focusListItemNode( value : <span style="font-weight: 400;">T</span> ) {: #focusListItemNode data-toc-label='focusListItemNode' }

Focuses the ComboBoxListItemNode that corresponds to a specified value. If the item for that value is not
visible, focus is placed on the first visible item.



## Type ComboBoxListBoxOptions {: #ComboBoxListBoxOptions }


```js
import type { ComboBoxListBoxOptions } from 'scenerystack/sun';
```


- **highlightFill**?: [TPaint](../scenery/TPaint.md)
<br>  fill for the highlight behind items in the list
- **comboBoxListItemNodeOptions**?: [ComboBoxListItemNodeOptions](../sun/ComboBoxListItemNode.md#ComboBoxListItemNodeOptions)
<br>  Options that apply to every ComboBoxItemNode created in the list
- **openedSoundPlayer**?: TSoundPlayer
<br>  Sound generators for when combo box is opened and when it is closed with no change. Closing *with*
  a change is covered by individual combo box items.
- **closedNoChangeSoundPlayer**?: TSoundPlayer
- &amp; [PanelOptions](../sun/Panel.md#PanelOptions)




## Source Code

See the source for [ComboBoxListBox.ts](https://github.com/phetsims/sun/blob/main/js/ComboBoxListBox.ts) in the [sun](https://github.com/phetsims/sun) repository.
