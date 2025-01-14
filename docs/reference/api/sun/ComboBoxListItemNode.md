# ComboBoxListItemNode

## Overview

Node for an item in a combo box list.
Responsible for highlighting itself when the pointer is over it.
Typically instantiated by ComboBox, not by client code.

@author Chris Malley (PixelZoom, Inc.)

## Class ComboBoxListItemNode {: #ComboBoxListItemNode }


```js
import { ComboBoxListItemNode } from 'scenerystack/sun';
```
### Constructor

#### new ComboBoxListItemNode( item : <span style="font-weight: 400;">[ComboBoxItemNoNode](../sun/ComboBox.md#ComboBoxItemNoNode)&lt;T&gt;</span>, node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, highlightWidthProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, highlightHeightProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ComboBoxListItemNodeOptions](../sun/ComboBoxListItemNode.md#ComboBoxListItemNodeOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### supplyOpenResponseOnNextFocus() {: #supplyOpenResponseOnNextFocus data-toc-label='supplyOpenResponseOnNextFocus' }

Ask for the voicing response for opening the ComboBox upon next focus, but only for the very next focus event.

#### dispose() {: #dispose data-toc-label='dispose' }

Free memory references to avoid leaks.

### Instance Properties

#### item : <span style="font-weight: 400;">[ComboBoxItemNoNode](../sun/ComboBox.md#ComboBoxItemNoNode)&lt;T&gt;</span> {: #item data-toc-label='item' }

(readonly)



## Type ComboBoxListItemNodeOptions {: #ComboBoxListItemNodeOptions }


```js
import type { ComboBoxListItemNodeOptions } from 'scenerystack/sun';
```
- **align**?: "left" | "right" | "center"
- **xMargin**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **highlightFill**?: [TPaint](../scenery/TPaint.md)
- **highlightCornerRadius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **comboBoxVoicingNameResponsePattern**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- &amp; StrictOmit&lt;ParentOptions, "children" | "innerContent"&gt;




## Source Code

See the source for [ComboBoxListItemNode.ts](https://github.com/phetsims/sun/blob/main/js/ComboBoxListItemNode.ts) in the [sun](https://github.com/phetsims/sun) repository.
