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

#### new ComboBoxListItemNode( item : <span style="font-weight: 400; opacity: 80%;">ComboBoxItemNoNode&lt;T&gt;</span>, node : <span style="font-weight: 400; opacity: 80%;">Node</span>, highlightWidthProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;number&gt;</span>, highlightHeightProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;number&gt;</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">ComboBoxListItemNodeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### supplyOpenResponseOnNextFocus() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #supplyOpenResponseOnNextFocus data-toc-label='supplyOpenResponseOnNextFocus' }

Ask for the voicing response for opening the ComboBox upon next focus, but only for the very next focus event.

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

Free memory references to avoid leaks.

### Instance Properties

#### item : <span style="font-weight: 400; opacity: 80%;">ComboBoxItemNoNode&lt;T&gt;</span> {: #item data-toc-label='item' }

(readonly)



## Source Code

See the source for [ComboBoxListItemNode.ts](https://github.com/phetsims/sun/blob/main/js/ComboBoxListItemNode.ts) in the [sun](https://github.com/phetsims/sun) repository.
