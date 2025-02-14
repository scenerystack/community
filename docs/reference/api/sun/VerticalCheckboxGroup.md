# VerticalCheckboxGroup

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/sun/blob/main/js/VerticalCheckboxGroup.ts](https://github.com/phetsims/sun/blob/main/js/VerticalCheckboxGroup.ts) for the most up-to-date information.

## Overview

Convenience type for creating a group of Checkboxes with vertical orientation.

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class VerticalCheckboxGroup {: #VerticalCheckboxGroup }


```js
import { VerticalCheckboxGroup } from 'scenerystack/sun';
```
### Constructor

#### new VerticalCheckboxGroup( items : <span style="font-weight: 400;">[VerticalCheckboxGroupItem](../sun/VerticalCheckboxGroup.md#VerticalCheckboxGroupItem)[]</span>, providedOptions? : <span style="font-weight: 400;">[VerticalCheckboxGroupOptions](../sun/VerticalCheckboxGroup.md#VerticalCheckboxGroupOptions)</span> ) {: #VerticalCheckboxGroup-constructor data-toc-label='new VerticalCheckboxGroup' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }



## Type VerticalCheckboxGroupItem {: #VerticalCheckboxGroupItem }


```js
import type { VerticalCheckboxGroupItem } from 'scenerystack/sun';
```


- **property**: [PhetioProperty](../axon/PhetioProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
- **options**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[CheckboxOptions](../sun/Checkbox.md#CheckboxOptions), "tandem"&gt;
- &amp; [GroupItemOptions](../sun/GroupItemOptions.md)




## Type VerticalCheckboxGroupOptions {: #VerticalCheckboxGroupOptions }


```js
import type { VerticalCheckboxGroupOptions } from 'scenerystack/sun';
```


- **checkboxOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[CheckboxOptions](../sun/Checkbox.md#CheckboxOptions), "tandem"&gt;
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;[VBoxOptions](../scenery/VBox.md#VBoxOptions), "children"&gt;




## Source Code

See the source for [VerticalCheckboxGroup.ts](https://github.com/phetsims/sun/blob/main/js/VerticalCheckboxGroup.ts) in the [sun](https://github.com/phetsims/sun) repository.
