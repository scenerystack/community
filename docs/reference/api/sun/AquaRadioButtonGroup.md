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

#### new AquaRadioButtonGroup( property : <span style="font-weight: 400; opacity: 80%;">PhetioProperty&lt;T&gt;</span>, items : <span style="font-weight: 400; opacity: 80%;">AquaRadioButtonGroupItem&lt;T&gt;[]</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">AquaRadioButtonGroupOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### getButton( value : <span style="font-weight: 400; opacity: 80%;">T</span> ) : <span style="font-weight: 400; opacity: 80%;">AquaRadioButton&lt;T&gt;</span> {: #getButton data-toc-label='getButton' }

Gets the radio button that corresponds to the specified value.

### Instance Properties

#### onInputEmitter : <span style="font-weight: 400; opacity: 80%;">TEmitter</span> {: #onInputEmitter data-toc-label='onInputEmitter' }

(readonly)



## Source Code

See the source for [AquaRadioButtonGroup.ts](https://github.com/phetsims/sun/blob/main/js/AquaRadioButtonGroup.ts) in the [sun](https://github.com/phetsims/sun) repository.
