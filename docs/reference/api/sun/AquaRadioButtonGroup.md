# AquaRadioButtonGroup

## Overview

AquaRadioButtonGroup creates a group of AquaRadioButtons and manages their layout.

@author Sam Reid (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class AquaRadioButtonGroup {: #AquaRadioButtonGroup }


```js
import { AquaRadioButtonGroup } from 'scenerystack/sun';
```
### Constructor

#### new AquaRadioButtonGroup( property : <span style="font-weight: 400;">[PhetioProperty](../axon/PhetioProperty.md)&lt;T&gt;</span>, items : <span style="font-weight: 400;">[AquaRadioButtonGroupItem](../sun/AquaRadioButtonGroup.md#AquaRadioButtonGroupItem)&lt;T&gt;[]</span>, providedOptions? : <span style="font-weight: 400;">[AquaRadioButtonGroupOptions](../sun/AquaRadioButtonGroup.md#AquaRadioButtonGroupOptions)</span> ) {: #AquaRadioButtonGroup-constructor data-toc-label='new AquaRadioButtonGroup' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### getButton( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">[AquaRadioButton](../sun/AquaRadioButton.md)&lt;T&gt;</span> {: #getButton data-toc-label='getButton' }

Gets the radio button that corresponds to the specified value.

### Instance Properties

#### onInputEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #onInputEmitter data-toc-label='onInputEmitter' }

(readonly)



## Type AquaRadioButtonGroupItem {: #AquaRadioButtonGroupItem }


```js
import type { AquaRadioButtonGroupItem } from 'scenerystack/sun';
```


- **value**: T
- **options**?: StrictOmit&lt;[AquaRadioButtonOptions](../sun/AquaRadioButton.md#AquaRadioButtonOptions), "tandem"&gt;
- &amp; [GroupItemOptions](../sun/GroupItemOptions.md)




## Type AquaRadioButtonGroupOptions {: #AquaRadioButtonGroupOptions }


```js
import type { AquaRadioButtonGroupOptions } from 'scenerystack/sun';
```


- **radioButtonOptions**?: StrictOmit&lt;[AquaRadioButtonOptions](../sun/AquaRadioButton.md#AquaRadioButtonOptions), "soundPlayer" | "tandem"&gt;
<br>  options propagated to AquaRadioButton instances
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Dilation of pointer areas for each radio button.
  X dilation is ignored for orientation === 'horizontal'.
  Y dilation is ignored for orientation === 'vertical'.
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- &amp; StrictOmit&lt;TrimmedParentOptions, "children"&gt;




## Source Code

See the source for [AquaRadioButtonGroup.ts](https://github.com/phetsims/sun/blob/main/js/AquaRadioButtonGroup.ts) in the [sun](https://github.com/phetsims/sun) repository.
