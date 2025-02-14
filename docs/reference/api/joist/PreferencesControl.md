# PreferencesControl

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesControl.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesControl.ts) for the most up-to-date information.

## Overview

A ToggleSwitch decorated with a visual label and description with layout for each. To be used in the
PreferencesDialog.

@author Jesse Greenberg (PhET Interactive Simulations)
@author Marla Schulz (PhET Interactive Simulations)

## Class PreferencesControl {: #PreferencesControl }


Layout using GridBox and layoutOptions will accomplish the following when all components are available.
[[labelNode]]         [[ToggleSwitch]]
[[descriptionNode                   ]]

```js
import { PreferencesControl } from 'scenerystack/joist';
```
### Constructor

#### new PreferencesControl( providedOptions? : <span style="font-weight: 400;">[PreferencesControlOptions](../joist/PreferencesControl.md#PreferencesControlOptions)</span> ) {: #PreferencesControl-constructor data-toc-label='new PreferencesControl' }

### Instance Methods





## Type PreferencesControlOptions {: #PreferencesControlOptions }


```js
import type { PreferencesControlOptions } from 'scenerystack/joist';
```


- **labelNode**?: [Node](../scenery/Node.md)
<br>  if provided, a label Node to the left of the toggle switch control
- **labelSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal spacing between label for the component and toggle switch IF there is no descriptionNode.
  If a descriptionNode is provided, layout of the labelNode will be relative to the description.
- **valueLabelXSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  horizontal spacing between the toggle switch and left/right value labels
- **descriptionNode**?: [Node](../scenery/Node.md)
<br>  if provided, a Node under the ToggleSwitch and label that is meant to describe the purpose of the switch
- **allowDescriptionStretch**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the description cell will stretch to a minimum content width, and the control will be pushed out to align
  with that width. This makes the control align with other controls in the dialog. Disable if you want the control
  to always be right aligned with the description.
- **ySpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  vertical spacing between ToggleSwitch and description Node
- **controlNode**?: [Node](../scenery/Node.md)
- **nestedContent**?: Array&lt;[Node](../scenery/Node.md)&gt;
- **headingControl**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [GridBoxOptions](../scenery/GridBox.md#GridBoxOptions)




## Source Code

See the source for [PreferencesControl.ts](https://github.com/phetsims/joist/blob/main/js/preferences/PreferencesControl.ts) in the [joist](https://github.com/phetsims/joist) repository.
