# ComboBoxButton

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/ComboBoxButton.ts](https://github.com/phetsims/sun/blob/main/js/ComboBoxButton.ts) for the most up-to-date information.

## Overview

The button on a combo box box.  Displays the current selection on the button.
Typically instantiated by ComboBox, not by client code.

@author Chris Malley (PixelZoom, Inc.)

## Class ComboBoxButton {: #ComboBoxButton }


```js
import { ComboBoxButton } from 'scenerystack/sun';
```
### Constructor

#### new ComboBoxButton( property : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;T&gt;</span>, items : <span style="font-weight: 400;">[ComboBoxItemNoNode](../sun/ComboBox.md#ComboBoxItemNoNode)&lt;T&gt;[]</span>, nodes : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span>, providedOptions? : <span style="font-weight: 400;">[ComboBoxButtonOptions](../sun/ComboBoxButton.md#ComboBoxButtonOptions)</span> ) {: #ComboBoxButton-constructor data-toc-label='new ComboBoxButton' }

### Instance Methods

#### setDisplayOnly( displayOnly : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setDisplayOnly data-toc-label='setDisplayOnly' }

Sets the button to look like a value display instead of a combo box button.
See https://github.com/phetsims/sun/issues/451

#### blockNextVoicingFocusListener() {: #blockNextVoicingFocusListener data-toc-label='blockNextVoicingFocusListener' }

Call to block voicing from occurring upon this button's next focus event.
For use by ComboBox.

#### dispose() {: #dispose data-toc-label='dispose' }



## Type ComboBoxButtonAlign {: #ComboBoxButtonAlign }


```js
import type { ComboBoxButtonAlign } from 'scenerystack/sun';
```


"left" | "center" | "right"



## Type ComboBoxButtonArrowDirection {: #ComboBoxButtonArrowDirection }


```js
import type { ComboBoxButtonArrowDirection } from 'scenerystack/sun';
```


"up" | "down"



## Type ComboBoxButtonOptions {: #ComboBoxButtonOptions }


```js
import type { ComboBoxButtonOptions } from 'scenerystack/sun';
```


- **align**?: [ComboBoxButtonAlign](../sun/ComboBoxButton.md#ComboBoxButtonAlign)
- **arrowDirection**?: [ComboBoxButtonArrowDirection](../sun/ComboBoxButton.md#ComboBoxButtonArrowDirection)
- **arrowFill**?: [TPaint](../scenery/TPaint.md)
- **comboBoxVoicingNameResponsePattern**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  The pattern for the voicingNameResponse, with "{{value}}" provided to be filled in with
  ComboBoxItem.a11yName.
- **localPreferredWidthProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- **localMinimumWidthProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[RectangularPushButtonOptions](../sun/RectangularPushButton.md#RectangularPushButtonOptions), "children" | "ariaLabelledbyAssociations"&gt;




## Source Code

See the source for [ComboBoxButton.ts](https://github.com/phetsims/sun/blob/main/js/ComboBoxButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
