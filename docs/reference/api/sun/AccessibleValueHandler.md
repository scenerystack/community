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
- **endInput**?: ( event: [SceneryEvent](../scenery/SceneryEvent.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>
- **onInput**?: OnInputFunction
- **constrainValue**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **keyboardStep**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **shiftKeyboardStep**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **pageKeyboardStep**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **reverseAlternativeInput**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **ariaOrientation**?: [Orientation](../phet-core/Orientation.md)
- **panTargetNode**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | [Node](../scenery/Node.md)
- **roundToStepSize**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **pdomMapPDOMValue**?: ( value: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **pdomMapValue**?: ( newValue: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, previousValue: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **pdomRepeatEqualValueText**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **pdomCreateAriaValueText**?: CreateTextFunction
- **pdomCreateContextResponseAlert**?: CreateTextFunction | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **contextResponsePerValueChangeDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **contextResponseMaxDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **pdomDependencies**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;IntentionalAny&gt;[]
- **tagName**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **voicingOnEndResponseOptions**?: VoicingOnEndResponseOptions
- &amp; [VoicingOptions](../scenery/Voicing.md#VoicingOptions)




## Source Code

See the source for [AccessibleValueHandler.ts](https://github.com/phetsims/sun/blob/main/js/accessibility/AccessibleValueHandler.ts) in the [sun](https://github.com/phetsims/sun) repository.
