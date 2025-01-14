# Checkbox

## Overview

Checkbox is a typical checkbox UI component.

@author Chris Malley (PixelZoom, Inc.)

## Class Checkbox {: #Checkbox }


```js
import { Checkbox } from 'scenerystack/sun';
```
### Constructor

#### new Checkbox( property : <span style="font-weight: 400;">[PhetioProperty](../axon/PhetioProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, content : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[CheckboxOptions](../sun/Checkbox.md#CheckboxOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setInputEnabledProperty( newTarget : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setInputEnabledProperty data-toc-label='setInputEnabledProperty' }

The inputEnabledProperty for Checkbox is internally controlled by factors such as the displayOnlyProperty
and the enabledProperty.

#### dispose() {: #dispose data-toc-label='dispose' }

#### setCheckboxColorBackground( value : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setCheckboxColorBackground data-toc-label='setCheckboxColorBackground' }

Sets the background color of the checkbox.

#### getCheckboxColorBackground() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getCheckboxColorBackground data-toc-label='getCheckboxColorBackground' }

Gets the background color of the checkbox.

#### setCheckboxColor( value : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> ) {: #setCheckboxColor data-toc-label='setCheckboxColor' }

Sets the color of the checkbox.

#### getCheckboxColor() : <span style="font-weight: 400;">[TPaint](../scenery/TPaint.md)</span> {: #getCheckboxColor data-toc-label='getCheckboxColor' }

Gets the color of the checkbox.

#### setMouseArea( area : <span style="font-weight: 400;">[Shape](../kite/Shape.md) | [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setMouseArea data-toc-label='setMouseArea' }

#### setTouchArea( area : <span style="font-weight: 400;">[Shape](../kite/Shape.md) | [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setTouchArea data-toc-label='setTouchArea' }



## Type CheckboxOptions {: #CheckboxOptions }


```js
import type { CheckboxOptions } from 'scenerystack/sun';
```


- **spacing**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **boxWidth**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **checkboxColor**?: [TPaint](../scenery/TPaint.md)
- **checkboxColorBackground**?: [TPaint](../scenery/TPaint.md)
- **touchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **checkedSoundPlayer**?: TSoundPlayer
- **uncheckedSoundPlayer**?: TSoundPlayer
- **checkedContextResponse**?: TAlertable
- **uncheckedContextResponse**?: TAlertable
- **voiceNameResponseOnSelection**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **voicingCheckedObjectResponse**?: TAlertable
- **voicingUncheckedObjectResponse**?: TAlertable
- **phetioDisplayOnlyPropertyInstrumented**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; StrictOmit&lt;ParentOptions, "children" | "mouseArea" | "touchArea" | "tagName"&gt;




## Source Code

See the source for [Checkbox.ts](https://github.com/phetsims/sun/blob/main/js/Checkbox.ts) in the [sun](https://github.com/phetsims/sun) repository.
