# AllDragListenerOptions

## Overview

Options used by many drag listeners in scenery. At this time, that includes DragListener and KeyboardDragListener.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Michael Kauzmann (PhET Interactive Simulations)
@author Jesse Greenberg (PhET Interactive Simulations)

## Type AllDragListenerOptions {: #AllDragListenerOptions }


```js
import type { AllDragListenerOptions } from 'scenerystack/scenery';
```


- **start**?: [SceneryListenerCallback](../scenery/PressListener.md#SceneryListenerCallback)&lt;Listener, DOMEvent&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **drag**?: [SceneryListenerCallback](../scenery/PressListener.md#SceneryListenerCallback)&lt;Listener, DOMEvent&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **end**?: [SceneryListenerNullableCallback](../scenery/PressListener.md#SceneryListenerNullableCallback)&lt;Listener, DOMEvent&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **positionProperty**?: Pick&lt;[TProperty](../axon/TProperty.md)&lt;[Vector2](../dot/Vector2.md)&gt;, "value"&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **transform**?: [Transform3](../dot/Transform3.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Transform3](../dot/Transform3.md)&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **dragBoundsProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **mapPosition**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | MapPosition
- **translateNode**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>




## Source Code

See the source for [AllDragListenerOptions.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/AllDragListenerOptions.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
