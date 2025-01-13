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

#### new RectangularRadioButtonGroup( property : <span style="font-weight: 400; opacity: 80%;">PhetioProperty&lt;T&gt;</span>, items : <span style="font-weight: 400; opacity: 80%;">RectangularRadioButtonGroupItem&lt;T&gt;[]</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">RectangularRadioButtonGroupOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getButtonForValue( value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">RectangularRadioButton&lt;T&gt;</span> {: #getButtonForValue data-toc-label='getButtonForValue' }

Find the RectangularRadioButton corresponding to a value. Note that in the scene graph, the button may be nested
under other layers, so use caution for coordinate transformations.
@param value
@returns the corresponding button

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }



## Source Code

See the source for [RectangularRadioButtonGroup.ts](https://github.com/phetsims/sun/blob/main/js/buttons/RectangularRadioButtonGroup.ts) in the [sun](https://github.com/phetsims/sun) repository.
