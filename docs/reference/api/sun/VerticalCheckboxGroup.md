# VerticalCheckboxGroup

## Overview

Convenience type for creating a group of Checkboxes with vertical orientation.

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class VerticalCheckboxGroup {: #VerticalCheckboxGroup }


```js
import { VerticalCheckboxGroup } from 'scenerystack/sun';
```
### Constructor

#### new VerticalCheckboxGroup( items : <span style="font-weight: 400;">[VerticalCheckboxGroupItem](../sun/VerticalCheckboxGroup.md#VerticalCheckboxGroupItem)[]</span>, providedOptions? : <span style="font-weight: 400;">[VerticalCheckboxGroupOptions](../sun/VerticalCheckboxGroup.md#VerticalCheckboxGroupOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type VerticalCheckboxGroupItem {: #VerticalCheckboxGroupItem }


```js
import type { VerticalCheckboxGroupItem } from 'scenerystack/sun';
```


- **property**: [PhetioProperty](../axon/PhetioProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
- **options**?: StrictOmit&lt;[CheckboxOptions](../sun/Checkbox.md#CheckboxOptions), "[tandem](../tandem/tandem.md)"&gt;
- &amp; [GroupItemOptions](../sun/GroupItemOptions.md)




## Type VerticalCheckboxGroupOptions {: #VerticalCheckboxGroupOptions }


```js
import type { VerticalCheckboxGroupOptions } from 'scenerystack/sun';
```


- **checkboxOptions**?: StrictOmit&lt;[CheckboxOptions](../sun/Checkbox.md#CheckboxOptions), "[tandem](../tandem/tandem.md)"&gt;
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; StrictOmit&lt;[VBoxOptions](../scenery/VBox.md#VBoxOptions), "children"&gt;




## Source Code

See the source for [VerticalCheckboxGroup.ts](https://github.com/phetsims/sun/blob/main/js/VerticalCheckboxGroup.ts) in the [sun](https://github.com/phetsims/sun) repository.
