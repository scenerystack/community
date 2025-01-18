# RectangularRadioButtonGroup

## Overview

RectangularRadioButtonGroup is a group of rectangular radio buttons, in either horizontal or vertical orientation.
See sun.ButtonsScreenView for example usage.

@author Aaron Davis (PhET Interactive Simulations)
@author Chris Malley (PixelZoom, Inc.)

## Class RectangularRadioButtonGroup {: #RectangularRadioButtonGroup }


```js
import { RectangularRadioButtonGroup } from 'scenerystack/sun';
```
### Constructor

#### new RectangularRadioButtonGroup( property : <span style="font-weight: 400;">[PhetioProperty](../axon/PhetioProperty.md)&lt;T&gt;</span>, items : <span style="font-weight: 400;">[RectangularRadioButtonGroupItem](../sun/RectangularRadioButtonGroup.md#RectangularRadioButtonGroupItem)&lt;T&gt;[]</span>, providedOptions? : <span style="font-weight: 400;">[RectangularRadioButtonGroupOptions](../sun/RectangularRadioButtonGroup.md#RectangularRadioButtonGroupOptions)</span> ) {: #RectangularRadioButtonGroup-constructor data-toc-label='new RectangularRadioButtonGroup' }

### Instance Methods

#### getButtonForValue( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">[RectangularRadioButton](../sun/RectangularRadioButton.md)&lt;T&gt;</span> {: #getButtonForValue data-toc-label='getButtonForValue' }

Find the RectangularRadioButton corresponding to a value. Note that in the scene graph, the button may be nested
under other layers, so use caution for coordinate transformations.
@param value
@returns the corresponding button

#### dispose() {: #dispose data-toc-label='dispose' }



## Type RectangularRadioButtonGroupItem {: #RectangularRadioButtonGroupItem }


Describes one radio button

```js
import type { RectangularRadioButtonGroupItem } from 'scenerystack/sun';
```


- **value**: T
- **label**?: [Node](../scenery/Node.md)
- **phetioDocumentation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>
- **options**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[RectangularRadioButtonOptions](../sun/RectangularRadioButton.md#RectangularRadioButtonOptions), "tandem"&gt;
- &amp; [GroupItemOptions](../sun/GroupItemOptions.md)




## Type RectangularRadioButtonGroupOptions {: #RectangularRadioButtonGroupOptions }


```js
import type { RectangularRadioButtonGroupOptions } from 'scenerystack/sun';
```


- **soundPlayers**?: [TSoundPlayer](../tambo/TSoundPlayer.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sound generation for the radio buttons.
  null means to use the defaults. Otherwise, there must be one for each button.
- **labelAlign**?: [RectangularRadioButtonLabelAlign](../sun/RectangularRadioButtonGroup.md#RectangularRadioButtonLabelAlign)
<br>  Determines where the optional label appears, relative to the button
- **labelSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Spacing between the optional label and the button
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Applied to each button, or each button + optional label.
  This is not handled via radioButtonOptions because we may have an optional label in addition to the button.
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **radioButtonOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[RectangularRadioButtonOptions](../sun/RectangularRadioButton.md#RectangularRadioButtonOptions), "soundPlayer" | "touchAreaXDilation" | "touchAreaYDilation" | "mouseAreaXDilation" | "mouseAreaYDilation"&gt;
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;TrimmedParentOptions, "children"&gt;




## Type RectangularRadioButtonLabelAlign {: #RectangularRadioButtonLabelAlign }


Where the optional label appears, relative to the radio button

```js
import type { RectangularRadioButtonLabelAlign } from 'scenerystack/sun';
```


"top" | "bottom" | "left" | "right"



## Source Code

See the source for [RectangularRadioButtonGroup.ts](https://github.com/phetsims/sun/blob/main/js/buttons/RectangularRadioButtonGroup.ts) in the [sun](https://github.com/phetsims/sun) repository.
