# AquaRadioButton

## Overview

AquaRadioButton is a radio button whose look is similar to macOS' Aqua theme. The button is circular and
contains a dot when selected.

@author Chris Malley (PixelZoom, Inc.)

## Class AquaRadioButton {: #AquaRadioButton }


```js
import { AquaRadioButton } from 'scenerystack/sun';
```
### Constructor

#### new AquaRadioButton( property : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;T&gt;</span>, value : <span style="font-weight: 400;">T</span>, labelNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[AquaRadioButtonOptions](../sun/AquaRadioButton.md#AquaRadioButtonOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### value : <span style="font-weight: 400;">T</span> {: #value data-toc-label='value' }

(readonly)

the value associated with this radio button

#### onInputEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)</span> {: #onInputEmitter data-toc-label='onInputEmitter' }

(readonly)

### Static Properties

#### DEFAULT_RADIUS {: #DEFAULT_RADIUS data-toc-label='DEFAULT_RADIUS' }

(readonly)



## Type AquaRadioButtonOptions {: #AquaRadioButtonOptions }


```js
import type { AquaRadioButtonOptions } from 'scenerystack/sun';
```
- **centerColor**?: [TPaint](../scenery/TPaint.md)
- **radius**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **selectedColor**?: [TPaint](../scenery/TPaint.md)
- **deselectedColor**?: [TPaint](../scenery/TPaint.md)
- **xSpacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **stroke**?: [TPaint](../scenery/TPaint.md)
- **soundPlayer**?: TSoundPlayer
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **a11yNameAttribute**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- &amp; [TrimParallelDOMOptions](../scenery/ParallelDOM.md#TrimParallelDOMOptions)&lt;ParentOptions&gt;




## Source Code

See the source for [AquaRadioButton.ts](https://github.com/phetsims/sun/blob/main/js/AquaRadioButton.ts) in the [sun](https://github.com/phetsims/sun) repository.
