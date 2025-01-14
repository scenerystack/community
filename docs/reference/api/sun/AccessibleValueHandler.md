# AccessibleValueHandler

## Overview

A trait for subtypes of Node. Meant for Nodes with a value that "run" on a NumberProperty and handles formatting,
mapping, and aria-valuetext updating in the PDOM.

Also implements the listeners that respond to accessible input, such as keydown, keyup, input, and change
events, which may come from a keyboard or other assistive device. Use getAccessibleValueHandlerInputListener() to get
these listeners to add to your Node with addInputListener().

Browsers have limitations for the interaction of a slider when the range is not evenly divisible by the step size.
Rather than allow the browser to natively change the valueProperty with an input event, this trait implements a
totally custom interaction keeping the general slider behavior the same.

@author Michael Kauzmann (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)

## Type AccessibleValueHandlerOptions {: #AccessibleValueHandlerOptions }


```js
import type { AccessibleValueHandlerOptions } from 'scenerystack/sun';
```


- **valueProperty**: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;
- **enabledRangeProperty**: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;
- **startInput**?: ( event: [SceneryEvent](../scenery/SceneryEvent.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  called when input begins from user interaction
- **endInput**?: ( event: [SceneryEvent](../scenery/SceneryEvent.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
<br>  called when input ends from user interaction
- **onInput**?: OnInputFunction
<br>  Called every input event (like drag), after the valueProperty has been updated. The oldValue is available in the
  callback so that you can determine if/how the value changed.
- **constrainValue**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Constrains the value, returning a new value for the valueProperty instead. Called before the valueProperty is set.
  Subtypes can use this for other forms of input as well.
  For keyboard input, this is only called when the shift key is NOT down because it is often the case that
  shiftKeyboardStep is a smaller step size then what is allowed by constrainValue.
- **keyboardStep**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  delta for the valueProperty for each press of the arrow keys
- **shiftKeyboardStep**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  delta for the valueProperty for each press of the arrow keys while the shift modifier is down
- **pageKeyboardStep**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  delta for the valueProperty for each press of "Page Up" and "Page Down"
- **reverseAlternativeInput**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, alternative input will be 'reversed' so that keys that normally increase the value will decrease it,
  and vice versa. This is useful for cases where the valueProperty has an inverted behavior from typical slider
  input. For example, a knob that moves to the left to increase the valueProperty.
- **ariaOrientation**?: [Orientation](../phet-core/Orientation.md)
<br>  specify orientation, read by assistive technology
- **panTargetNode**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | [Node](../scenery/Node.md)
<br>  Upon accessible input, we will try to keep this Node in view of the animatedPanZoomSingleton.
  If null, 'this' is used (the Node mixing AccessibleValueHandler)
- **roundToStepSize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When setting the Property value from the PDOM input, this option controls whether or not to
  round the value to a multiple of the keyboardStep. This will only round the value on normal key presses,
  rounding will not occur on large jumps like page up/page down/home/end.
  see https://github.com/phetsims/gravity-force-lab-basics/issues/72
- **pdomMapPDOMValue**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Map the valueProperty value to another number that will be read by assistive devices on
  valueProperty changes from the PDOM values. This is used to set the values for aria-valuetext and the on
  change alert, as well as the following attributes on the PDOM input:
     value
     aria-valuenow
     min
     max
     step
  
  For this reason, it is important that the mapped "min" would not be bigger than the mapped "max" from the
  enabledRangeProperty.
  
  This map is used to control attributes in the PDOM (not the valueProperty).
- **pdomMapValue**?: ( newValue: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, previousValue: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Called before constraining and setting the Property. This is useful in rare cases where the value being set
  by AccessibleValueHandler may change based on outside logic. This is for mapping value changes from input listeners
  assigned in this type (keyboard/alt-input) to a new value before the value is set.
  
  This map is used to control the actual valueProperty.
- **pdomRepeatEqualValueText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the aria-valuetext will be spoken every value change, even if the aria-valuetext doesn't
  actually change. By default, screen readers won't speak aria-valuetext if it remains the same for
  multiple values.
- **pdomCreateAriaValueText**?: CreateTextFunction
<br>  aria-valuetext creation function, called when the valueProperty changes.
  This string is read by AT every time the slider value changes. This is often called the "object response"
  for this interaction.
- **pdomCreateContextResponseAlert**?: CreateTextFunction | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Create content for an alert that will be sent to the utteranceQueue when the user finishes interacting
  with the input. Is not generated every change, but on every "drag" interaction, this is called with
  endInput. With a keyboard, this will be called even with no value change (on the key up event ending the
  interaction), On a touch system like iOS with Voice Over however, input and change events will only fire
  when there is a Property value change, so "edge" alerts will not fire, see https://github.com/phetsims/gravity-force-lab-basics/issues/185.
  This alert is often called the "context response" because it is timed to only alert after an interaction
  end, instead of each time the value changes.
  
  If function returns null, then no alert will be sent to utteranceQueue for alerting.
  
  This function can also support a `reset` function on it, to be called when the AccessibleValueHandler is reset
- **contextResponsePerValueChangeDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  This coefficient is multiplied by the number of times the value has been changed without the context response
  alerting. This number is meant to give the screen reader enough chance to finish reading the aria-valuetext,
  which could take longer the more time the value changes. We want to give enough time for VO to read
  aria-valuetext but don't want to have too much silence before the alert is spoken.
- **contextResponseMaxDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  in ms, When the valueProperty changes repeatedly, what is the maximum time to set the
  alertStableDelay for the context response to. This value should be small enough that it feels like you are
  aiting for this alert after an interaction. This should be altered depending on how quickly you expect the
  value to change. We want to give enough time for VO to read aria-valuetext but don't want to have too much
  silence before the alert is spoken.
- **pdomDependencies**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;IntentionalAny&gt;[]
<br>  List the dependencies this Node's PDOM descriptions have. This should not include the valueProperty, but
  should list any Properties whose change should trigger a description update for this Node.
- **tagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Only provide tagName to AccessibleValueHandler to remove it from the PDOM, otherwise, AccessibleValueHandler
  sets its own tagName.
- **voicingOnEndResponseOptions**?: VoicingOnEndResponseOptions
<br>  Customizations for the voicingOnEndResponse function, which is used to voice content at the end
  of an interaction.
- &amp; [VoicingOptions](../scenery/Voicing.md#VoicingOptions)




## Source Code

See the source for [AccessibleValueHandler.ts](https://github.com/phetsims/sun/blob/main/js/accessibility/AccessibleValueHandler.ts) in the [sun](https://github.com/phetsims/sun) repository.
