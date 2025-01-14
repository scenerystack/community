# RectangularRadioButton

## Overview

RectangularRadioButton is a single rectangular radio button. It typically appears as part of a
RectangularRadioButtonGroup, but can be used in other context.

@author Aaron Davis (PhET Interactive Simulations)

## Class RectangularRadioButton {: #RectangularRadioButton }


```js
import { RectangularRadioButton } from 'scenerystack/sun';
```
### Constructor

#### new RectangularRadioButton( property : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;T&gt;</span>, value : <span style="font-weight: 400;">T</span>, providedOptions? : <span style="font-weight: 400;">[RectangularRadioButtonOptions](../sun/RectangularRadioButton.md#RectangularRadioButtonOptions)</span> ) {: #RectangularRadioButton-constructor data-toc-label='new RectangularRadioButton' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### fire() {: #fire data-toc-label='fire' }

fire on up if the button is enabled, public for use in the accessibility tree

### Instance Properties

#### property : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;T&gt;</span> {: #property data-toc-label='property' }

(readonly)

the Property this button changes

#### value : <span style="font-weight: 400;">T</span> {: #value data-toc-label='value' }

(readonly)

the value that is set to the Property when this button is pressed

#### interactionStateProperty : <span style="font-weight: 400;">[RadioButtonInteractionStateProperty](../sun/RadioButtonInteractionStateProperty.md)&lt;T&gt;</span> {: #interactionStateProperty data-toc-label='interactionStateProperty' }

(readonly)

### Static Properties

#### FlatAppearanceStrategy : <span style="font-weight: 400;">[TButtonAppearanceStrategy](../sun/TButtonAppearanceStrategy.md)</span> {: #FlatAppearanceStrategy data-toc-label='FlatAppearanceStrategy' }

(readonly)

FlatAppearanceStrategy is a value for RectangularRadioButton options.buttonAppearanceStrategy. It makes radio buttons
that look flat, i.e. no shading or highlighting, but that change color on mouseover, press, selected, etc.

#### ContentAppearanceStrategy : <span style="font-weight: 400;">[TContentAppearanceStrategy](../sun/TContentAppearanceStrategy.md)</span> {: #ContentAppearanceStrategy data-toc-label='ContentAppearanceStrategy' }

(readonly)

ContentAppearanceStrategy is a value for RectangularRadioButton options.contentAppearanceStrategy. It changes
their look based on the value of interactionStateProperty.



## Type RectangularRadioButtonOptions {: #RectangularRadioButtonOptions }


```js
import type { RectangularRadioButtonOptions } from 'scenerystack/sun';
```


- **soundPlayer**?: TSoundPlayer | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Sound generation - If set to null a default will be used that is based on this button's position within the radio
  button group.  Can be set to nullSoundPlayer to turn off all sound generation.
- &amp; StrictOmit&lt;[TrimParallelDOMOptions](../scenery/ParallelDOM.md#TrimParallelDOMOptions)&lt;[RectangularButtonOptions](../sun/RectangularButton.md#RectangularButtonOptions)&gt;, "enabledProperty" | "enabled"&gt;




## Source Code

See the source for [RectangularRadioButton.ts](https://github.com/phetsims/sun/blob/main/js/buttons/RectangularRadioButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
