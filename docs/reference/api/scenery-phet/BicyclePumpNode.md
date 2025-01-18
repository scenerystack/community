# BicyclePumpNode

## Overview

This is a graphical representation of a bicycle pump. A user can move the handle up and down.

@author John Blanco
@author Siddhartha Chinthapally (Actual Concepts)
@author Chris Klusendorf (PhET Interactive Simulations)
@author Saurabh Totey

## Class BicyclePumpNode {: #BicyclePumpNode }


```js
import { BicyclePumpNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new BicyclePumpNode( numberProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt;</span>, rangeProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Range](../dot/Range.md)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[BicyclePumpNodeOptions](../scenery-phet/BicyclePumpNode.md#BicyclePumpNodeOptions)</span> ) {: #BicyclePumpNode-constructor data-toc-label='new BicyclePumpNode' }

### Instance Methods

#### reset() {: #reset data-toc-label='reset' }

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### nodeEnabledProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #nodeEnabledProperty data-toc-label='nodeEnabledProperty' }

(readonly)

#### hoseAttachmentOffset : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #hoseAttachmentOffset data-toc-label='hoseAttachmentOffset' }

(readonly)



## Type BicyclePumpNodeOptions {: #BicyclePumpNodeOptions }


```js
import type { BicyclePumpNodeOptions } from 'scenerystack/scenery-phet';
```


- **width**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **height**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **handleFill**?: [TColor](../scenery/TColor.md)
<br>  various colors used by the pump
- **shaftFill**?: [TColor](../scenery/TColor.md)
- **bodyFill**?: [TColor](../scenery/TColor.md)
- **bodyTopFill**?: [TColor](../scenery/TColor.md)
- **indicatorBackgroundFill**?: [TColor](../scenery/TColor.md)
- **indicatorRemainingFill**?: [TColor](../scenery/TColor.md)
- **hoseFill**?: [TColor](../scenery/TColor.md)
- **baseFill**?: [TColor](../scenery/TColor.md)
- **hoseCurviness**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  greater value = curvy hose, smaller value = straighter hose
- **hoseAttachmentOffset**?: [Vector2](../dot/Vector2.md)
<br>  where the hose will attach externally relative to the origin of the pump
- **nodeEnabledProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Determines whether the pump will interactive. If the pump's range changes, the pumps
  indicator will update regardless of enabledProperty. If null, this Property will be created.
- **injectionEnabledProperty**?: [TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;
<br>  {BooleanProperty} - determines whether the pump is able to inject particles when the pump is still interactive.
  This is needed for when a user is pumping in particles too quickly for a model to handle (so the injection
  needs throttling), but the pump should not become non-interactive as a result,
  see https://github.com/phetsims/states-of-matter/issues/276
- **handleTouchAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  pointer areas
- **handleTouchAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **handleMouseAreaXDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **handleMouseAreaYDilation**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **dragListenerOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[SoundDragListenerOptions](../scenery-phet/SoundDragListener.md#SoundDragListenerOptions), "drag" | "tandem"&gt;
<br>  Options passed to the drag listeners.
- **keyboardDragListenerOptions**?: [StrictOmit](../phet-core/StrictOmit.md)&lt;[SoundKeyboardDragListenerOptions](../scenery-phet/SoundKeyboardDragListener.md#SoundKeyboardDragListenerOptions), "drag" | "keyboardDragDirection" | "tandem"&gt;
- **handleCursor**?: "ns-resize"
<br>  cursor for the pump handle when it's enabled
- **numberOfParticlesPerPumpAction**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Number of particles released by the pump during one pumping action.
- **addParticlesOneAtATime**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If false, particles are added as a batch at the end of each pumping motion.
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [BicyclePumpNode.ts](https://github.com/phetsims/scenery-phet/blob/main/js/BicyclePumpNode.ts) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
