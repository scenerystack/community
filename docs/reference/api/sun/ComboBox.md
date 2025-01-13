# ComboBox

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

#### new ComboBox( property : <span style="font-weight: 400;">[PhetioProperty](../axon/PhetioProperty.md)&lt;T&gt;</span>, items : <span style="font-weight: 400;">[ComboBoxItem](../sun/ComboBox.md#ComboBoxItem)&lt;T&gt;[]</span>, listParent : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[ComboBoxOptions](../sun/ComboBox.md#ComboBoxOptions)</span> ) {: #constructor data-toc-label='constructor' }

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

### Static Methods

#### getMaxItemWidthProperty( nodes : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> ) : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #getMaxItemWidthProperty data-toc-label='getMaxItemWidthProperty' }

#### getMaxItemHeightProperty( nodes : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> ) : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span> {: #getMaxItemHeightProperty data-toc-label='getMaxItemHeightProperty' }

### Static Properties

#### ComboBoxIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #ComboBoxIO data-toc-label='ComboBoxIO' }



## Source Code

See the source for [ComboBox.ts](https://github.com/phetsims/sun/blob/main/js/ComboBox.ts) in the [sun](https://github.com/phetsims/sun) repository.
