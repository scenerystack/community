# ComboBoxListBox

## Overview

The popup list box for a ComboBox.

@author Chris Malley (PixelZoom, Inc.)

## Class ComboBoxListBox {: #ComboBoxListBox }


```js
import { ComboBoxListBox } from 'scenerystack/sun';
```
### Constructor

#### new ComboBoxListBox( property : <span style="font-weight: 400; opacity: 80%;">TProperty&lt;T&gt;</span>, items : <span style="font-weight: 400; opacity: 80%;">ComboBoxItemNoNode&lt;T&gt;[]</span>, nodes : <span style="font-weight: 400; opacity: 80%;">Node[]</span>, hideListBoxCallback : <span style="font-weight: 400; opacity: 80%;">() =&gt; void</span>, focusButtonCallback : <span style="font-weight: 400; opacity: 80%;">() =&gt; void</span>, voiceOnSelectionNode : <span style="font-weight: 400; opacity: 80%;">VoicingNode</span>, tandem : <span style="font-weight: 400; opacity: 80%;">Tandem</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ComboBoxListBoxOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### setItemVisible( value : <span style="font-weight: 400; opacity: 80%;">T</span>, visible : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setItemVisible data-toc-label='setItemVisible' }

Sets the visibility of one or more items in the listbox that correspond to a value. Assumes that each item
in the listbox has a unique value.
@param value - the value associated with the ComboBoxItem
@param visible

#### isItemVisible( value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isItemVisible data-toc-label='isItemVisible' }

Is the item that corresponds to a value visible when the listbox is popped up?
@param value - the value associated with the ComboBoxItem

#### focusListItemNode( value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #focusListItemNode data-toc-label='focusListItemNode' }

Focuses the ComboBoxListItemNode that corresponds to a specified value. If the item for that value is not
visible, focus is placed on the first visible item.



## Source Code

See the source for [ComboBoxListBox.ts](https://github.com/phetsims/sun/blob/main/js/ComboBoxListBox.ts) in the [sun](https://github.com/phetsims/sun) repository.
