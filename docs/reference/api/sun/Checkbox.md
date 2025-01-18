# Checkbox

## Overview

Checkbox is a typical checkbox UI component.

@author Chris Malley (PixelZoom, Inc.)

## Class Checkbox {: #Checkbox }


```js
import { Checkbox } from 'scenerystack/sun';
```
### Constructor

#### new Checkbox( property : <span style="font-weight: 400;">[PhetioProperty](../axon/PhetioProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span>, content : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[CheckboxOptions](../sun/Checkbox.md#CheckboxOptions)</span> ) {: #Checkbox-constructor data-toc-label='new Checkbox' }

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
<br>  pointer areas
- **touchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **mouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **checkedSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
<br>  sounds
- **uncheckedSoundPlayer**?: [TSoundPlayer](../tambo/TSoundPlayer.md)
- **checkedContextResponse**?: [TAlertable](../utterance-queue/Utterance.md#TAlertable)
<br>  Utterances to be spoken with a screen reader after the checkbox is pressed. Also used for the voicingContextResponse.
- **uncheckedContextResponse**?: [TAlertable](../utterance-queue/Utterance.md#TAlertable)
- **voiceNameResponseOnSelection**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  By default voice the name response on checkbox change (with the context response), but optionally turn it off here.
- **voicingCheckedObjectResponse**?: [TAlertable](../utterance-queue/Utterance.md#TAlertable)
<br>  Output describing the state of the Checkbox after it is pressed using the Voicing feature. Like "Checked" or
  "Locked". Not usually needed, default is null.
- **voicingUncheckedObjectResponse**?: [TAlertable](../utterance-queue/Utterance.md#TAlertable)
- **phetioDisplayOnlyPropertyInstrumented**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  whether the displayOnlyProperty for this checkbox is instrumented for PhET-iO
- &amp; [StrictOmit](../phet-core/StrictOmit.md)&lt;ParentOptions, "children" | "mouseArea" | "touchArea" | "tagName"&gt;




## Source Code

See the source for [Checkbox.ts](https://github.com/phetsims/sun/blob/main/js/Checkbox.ts) in the [sun](https://github.com/phetsims/sun) repository.
