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

#### new RectangularRadioButtonGroup( property : <span style="font-weight: 400;">[PhetioProperty](../axon/PhetioProperty.md)&lt;T&gt;</span>, items : <span style="font-weight: 400;">RectangularRadioButtonGroupItem&lt;T&gt;[]</span>, providedOptions? : <span style="font-weight: 400;">[RectangularRadioButtonGroupOptions](../sun/RectangularRadioButtonGroup.md#RectangularRadioButtonGroupOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getButtonForValue( value : <span style="font-weight: 400;">T</span> ) : <span style="font-weight: 400;">[RectangularRadioButton](../sun/RectangularRadioButton.md)&lt;T&gt;</span> {: #getButtonForValue data-toc-label='getButtonForValue' }

Find the RectangularRadioButton corresponding to a value. Note that in the scene graph, the button may be nested
under other layers, so use caution for coordinate transformations.
@param value
@returns the corresponding button

#### dispose() {: #dispose data-toc-label='dispose' }



## Type RectangularRadioButtonGroupOptions {: #RectangularRadioButtonGroupOptions }


```js
import type { RectangularRadioButtonGroupOptions } from 'scenerystack/sun';
```


- **soundPlayers**?: TSoundPlayer[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **labelAlign**?: RectangularRadioButtonLabelAlign
- **labelSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **radioButtonOptions**?: StrictOmit&lt;[RectangularRadioButtonOptions](../sun/RectangularRadioButton.md#RectangularRadioButtonOptions), "soundPlayer" | "touchAreaXDilation" | "touchAreaYDilation" | "mouseAreaXDilation" | "mouseAreaYDilation"&gt;
- &amp; StrictOmit&lt;TrimmedParentOptions, "children"&gt;




## Source Code

See the source for [RectangularRadioButtonGroup.ts](https://github.com/phetsims/sun/blob/main/js/buttons/RectangularRadioButtonGroup.ts) in the [sun](https://github.com/phetsims/sun) repository.
