# ComboBoxDisplay

## Overview

ComboBoxDisplay is the lovechild of a ComboBox and a NumberDisplay. It allows the user to choose one of N dynamic
numeric values. ComboBox was designed to display static choices, so this component ensures that none of its items
grow wider/taller than their initial size.

@author Chris Malley (PixelZoom, Inc.)

## Class ComboBoxDisplay {: #ComboBoxDisplay }


```js
import { ComboBoxDisplay } from 'scenerystack/scenery-phet';
```
### Constructor

#### new ComboBoxDisplay( choiceProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;T&gt;</span>, items : <span style="font-weight: 400;">[ComboBoxDisplayItem](../scenery-phet/ComboBoxDisplay.md#ComboBoxDisplayItem)&lt;T&gt;[]</span>, listParent : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[ComboBoxDisplayOptions](../scenery-phet/ComboBoxDisplay.md#ComboBoxDisplayOptions)</span> ) {: #ComboBoxDisplay-constructor data-toc-label='new ComboBoxDisplay' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type ComboBoxDisplayItem {: #ComboBoxDisplayItem }


Describes an item in the ComboBoxDisplay

```js
import type { ComboBoxDisplayItem } from 'scenerystack/scenery-phet';
```


- **choice**: T
<br>  a value of choiceProperty that corresponds to the item
- **numberProperty**: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;
<br>  the item's numeric value
- **range**: [Range](../dot/Range.md)
<br>  the range of the item's numeric value
- **units**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>&gt;
<br>  the units used to label the item's numeric value
- **numberDisplayOptions**?: SubsetOfNumberDisplayOptions
<br>  options passed to this item's NumberDisplay, these override ComboBoxDisplayOptions.numberDisplayOptions
- **tandemName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
<br>  tandem name for the item




## Type ComboBoxDisplayOptions {: #ComboBoxDisplayOptions }


```js
import type { ComboBoxDisplayOptions } from 'scenerystack/scenery-phet';
```


- **numberDisplayOptions**?: SubsetOfNumberDisplayOptions
<br>  propagated to all NumberDisplay subcomponents, will be overridden by ComboBoxDisplayItem.numberDisplayOptions
- &amp; [ComboBoxOptions](../sun/ComboBox.md#ComboBoxOptions)




## Source Code

See the source for [ComboBoxDisplay.ts](https://github.com/phetsims/scenery-phet/blob/main/js/ComboBoxDisplay.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
