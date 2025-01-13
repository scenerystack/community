# ComboBoxButton

## Overview

The button on a combo box box.  Displays the current selection on the button.
Typically instantiated by ComboBox, not by client code.

@author Chris Malley (PixelZoom, Inc.)

## Class ComboBoxButton {: #ComboBoxButton }


```js
import { ComboBoxButton } from 'scenerystack/sun';
```
### Constructor

#### new ComboBoxButton( property : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;T&gt;</span>, items : <span style="font-weight: 400;">[ComboBoxItemNoNode](../sun/ComboBox.md#ComboBoxItemNoNode)&lt;T&gt;[]</span>, nodes : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span>, providedOptions? : <span style="font-weight: 400;">[ComboBoxButtonOptions](../sun/ComboBoxButton.md#ComboBoxButtonOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setDisplayOnly( displayOnly : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setDisplayOnly data-toc-label='setDisplayOnly' }

Sets the button to look like a value display instead of a combo box button.
See https://github.com/phetsims/sun/issues/451

#### blockNextVoicingFocusListener() {: #blockNextVoicingFocusListener data-toc-label='blockNextVoicingFocusListener' }

Call to block voicing from occurring upon this button's next focus event.
For use by ComboBox.

#### dispose() {: #dispose data-toc-label='dispose' }



## Source Code

See the source for [ComboBoxButton.ts](https://github.com/phetsims/sun/blob/main/js/ComboBoxButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
