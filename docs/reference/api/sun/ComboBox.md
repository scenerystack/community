# ComboBox

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/ComboBox.ts](https://github.com/phetsims/sun/blob/main/js/ComboBox.ts) for the most up-to-date information.

## Overview

Scenery-based combo box. Composed of a button and a popup 'list box' of items. ComboBox has no interaction of its
own, all interaction is handled by its subcomponents. The list box is displayed when the button is pressed, and
dismissed when an item is selected, the user clicks on the button, or the user clicks outside the list. The list
can be displayed either above or below the button.

The supporting types and classes are:

ComboBoxItem - items provided to ComboBox constructor
ComboBoxButton - the button
ComboBoxListBox - the list box
ComboBoxListItemNode - an item in the list box

For info on ComboBox UI design, including a11y, see https://github.com/phetsims/sun/blob/main/doc/ComboBox.md

@author Chris Malley (PixelZoom, Inc.)

## Class ComboBox {: #ComboBox }


```js
import { ComboBox } from 'scenerystack/sun';
```
### Constructor

#### new ComboBox( property : <span style="font-weight: 400;">[PhetioProperty](../axon/PhetioProperty.md)&lt;T&gt;</span>, items : <span style="font-weight: 400;">[ComboBoxItem](../sun/ComboBox.md#ComboBoxItem)&lt;T&gt;[]</span>, listParent : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[ComboBoxOptions](../sun/ComboBox.md#ComboBoxOptions)</span> ) {: #ComboBox-constructor data-toc-label='new ComboBox' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### showListBox() {: #showListBox data-toc-label='showListBox' }

Shows the list box.

#### hideListBox() {: #hideListBox data-toc-label='hideListBox' }

Hides the list box.

#### setItemVisible( value : <span style="font-weight: 400;">T</span>, visible : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setItemVisible data-toc-label='setItemVisible' }

Sets the visibility of items that correspond to a value. If the selected item has this value, it's your
responsibility to change the Property value to something else. Otherwise, the combo box button will continue
to display this value.
@param value - the value associated with the ComboBoxItem
@param visible

#### isItemVisible( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isItemVisible data-toc-label='isItemVisible' }

Is the item that corresponds to a value visible when the listbox is popped up?
@param value - the value associated with the ComboBoxItem

#### setInputEnabledProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setInputEnabledProperty data-toc-label='setInputEnabledProperty' }

### Instance Properties

#### nodes : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #nodes data-toc-label='nodes' }

(readonly)

List of nodes created from ComboBoxItems to be displayed with their corresponding value. See ComboBoxItem.createNode().

#### button : <span style="font-weight: 400;">[ComboBoxButton](../sun/ComboBoxButton.md)&lt;T&gt;</span> {: #button data-toc-label='button' }

button that shows the current selection (internal)

### Static Properties

#### ComboBoxIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #ComboBoxIO data-toc-label='ComboBoxIO' }



## Type ComboBoxAlign {: #ComboBoxAlign }


```js
import type { ComboBoxAlign } from 'scenerystack/sun';
```


"left" | "right" | "center"



## Type ComboBoxItem {: #ComboBoxItem }


```js
import type { ComboBoxItem } from 'scenerystack/sun';
```


- **value**: T
<br>  the value associated with the item
- **soundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sound that will be played when this item is selected.  If set to `null` a default sound will be used that is based
  on this item's position in the combo box list.  A value of [nullSoundPlayer](../tambo/nullSoundPlayer.md) can be used to disable.
- **accessibleName**?: [PDOMValueType](../scenery/ParallelDOM.md#PDOMValueType) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  pdom - the label for this item's associated Node in the combo box
- **comboBoxListItemNodeOptions**?: [ComboBoxListItemNodeOptions](../sun/ComboBoxListItemNode.md#ComboBoxListItemNodeOptions)
<br>  Options passed to ComboBoxListItemNode, the Node that appears in the listBox
- &amp; [GroupItemOptions](../sun/GroupItemOptions.md)




## Type ComboBoxItemNoNode {: #ComboBoxItemNoNode }


Most usages of the items should not be able to create the Node, but rather should use the corresponding `nodes` array,
hence the type name "No Node".

```js
import type { ComboBoxItemNoNode } from 'scenerystack/sun';
```


[StrictOmit](../phet-core/StrictOmit.md)&lt;[ComboBoxItem](../sun/ComboBox.md#ComboBoxItem)&lt;T&gt;, "createNode"&gt;



## Type ComboBoxListPosition {: #ComboBoxListPosition }


```js
import type { ComboBoxListPosition } from 'scenerystack/sun';
```


"above" | "below"



## Type ComboBoxOptions {: #ComboBoxOptions }


```js
import type { ComboBoxOptions } from 'scenerystack/sun';
```


- **align**?: [ComboBoxAlign](../sun/ComboBox.md#ComboBoxAlign)
- **listPosition**?: [ComboBoxListPosition](../sun/ComboBox.md#ComboBoxListPosition)
- **labelXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal space between label and combo box
- **disabledOpacity**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  opacity used to make the control look disabled, 0-1
- **cornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  applied to button, listBox, and item highlights
- **highlightFill**?: [TPaint](../scenery/TPaint.md)
<br>  highlight behind items in the list
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Margins around the edges of the button and listbox when highlight is invisible.
  Highlight margins around the items in the list are set to 1/2 of these values.
  These values must be &gt; 0.
- **yMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonFill**?: [TColor](../scenery/TColor.md)
<br>  button
- **buttonStroke**?: [TPaint](../scenery/TPaint.md)
- **buttonLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonTouchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonTouchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonMouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **buttonMouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **listFill**?: [TPaint](../scenery/TPaint.md)
<br>  list
- **listStroke**?: [TPaint](../scenery/TPaint.md)
- **listLineWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **openedSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
<br>  Sound generators for when combo box is opened and for when it is closed with no change (closing
  *with* a change is handled elsewhere).
- **closedNoChangeSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
- **buttonLabelTagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  pdom
  The tag name for the label of the ComboBox. The AccessibleNameBehavior forwards the name to the ComboBoxButton,
  so if you need a different tag name for the ComboBox, set it here. See the ACCESSIBLE_NAME_BEHAVIOR functions
  for ComboBox and ComboBoxButton.
- **comboBoxVoicingNameResponsePattern**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  Voicing
  ComboBox does not mix Voicing, so it creates custom options to pass to composed Voicing Nodes.
  The pattern for the name response string, must include `{{value}}` so that the selected value string can
  be filled in.
- **comboBoxVoicingContextResponse**?: ( () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  most context responses are dynamic to the current state of the sim, so lazily create them when needed.
- **comboBoxVoicingHintResponse**?: [SpeakableResolvedResponse](../utterance-queue/ResponsePacket.md#SpeakableResolvedResponse) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  string for the voicing response
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[TrimParallelDOMOptions](../scenery/ParallelDOM.md#TrimParallelDOMOptions)&lt;ParentOptions&gt;, "children"&gt;




## Source Code

See the source for [ComboBox.ts](https://github.com/phetsims/sun/blob/main/js/ComboBox.ts) in the [sun](https://github.com/phetsims/sun) repository.
