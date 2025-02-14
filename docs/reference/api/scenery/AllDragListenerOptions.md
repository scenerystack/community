# AllDragListenerOptions

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/listeners/AllDragListenerOptions.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/AllDragListenerOptions.ts) for the most up-to-date information.

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
<br>  Called when the drag is started.
- **drag**?: [SceneryListenerCallback](../scenery/PressListener.md#SceneryListenerCallback)&lt;Listener, DOMEvent&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Called when this listener is dragged.
- **end**?: [SceneryListenerNullableCallback](../scenery/PressListener.md#SceneryListenerNullableCallback)&lt;Listener, DOMEvent&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Called when the drag is ended.
  NOTE: This will also be called if the drag is ended due to being interrupted or canceled.
- **positionProperty**?: Pick&lt;[TProperty](../axon/TProperty.md)&lt;[Vector2](../dot/Vector2.md)&gt;, "value"&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, it will be synchronized with the drag position in the model coordinate frame. The optional transform
  is applied.
- **transform**?: [Transform3](../dot/Transform3.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Transform3](../dot/Transform3.md)&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, this will be used to convert between the parent (view) and model coordinate frames. Most useful
  when you also provide a positionProperty.
- **dragBoundsProperty**?: [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, the model position will be constrained to these bounds.
- **mapPosition**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> | MapPosition
<br>  If provided, this allows custom mapping from the desired position (i.e. where the pointer is, or where the
  KeyboardDragListener will set the position) to the actual position that will be used.
- **translateNode**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, the target Node will be translated during the drag operation.




## Source Code

See the source for [AllDragListenerOptions.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/AllDragListenerOptions.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
