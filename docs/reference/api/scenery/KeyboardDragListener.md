# KeyboardDragListener

## Overview

An input listener for keyboard-based drag interactions, allowing objects to be moved using the arrow keys or
the W, A, S, D keys.

Key features:
- Supports both discrete (step-based) and continuous (speed-based) dragging modes.
- Allows restricting movement to specific axes (e.g., horizontal or vertical only) or allowing free 2D movement.
- Configurable drag speed and drag delta values, with separate configurations when the shift key is held for
  finer control.
- Optionally synchronizes with a 'positionProperty' to allow for model-view coordination with custom transformations
  if needed.
- Provides hooks for start, drag (movement), and end phases of a drag interaction through callback options.
- Includes support for drag bounds, restricting the draggable area within specified model coordinates.
- Uses stepTimer for smooth, timed updates during drag operations, especially useful in continuous 'dragSpeed'
  mode.

Usage:
Attach an instance of KeyboardDragListener to a Node via the `addInputListener` method.

Example:

  const myNode = new Node();
  const dragListener = new KeyboardDragListener( {
    dragDelta: 2,
    shiftDragDelta: 2,
    start: (event, listener) =&gt; { console.log('Drag started'); },
    drag: (event, listener) =&gt; { console.log('Dragging'); },
    end: (event, listener) =&gt; { console.log('Drag ended'); },
    positionProperty: myNode.positionProperty,
    transform: myNode.getTransform()
  } );
  myNode.addInputListener(dragListener);

@author Jesse Greenberg (PhET Interactive Simulations)
@author Michael Barlow
@author Michael Kauzmann (PhET Interactive Simulations)

## Class KeyboardDragListener {: #KeyboardDragListener }


```js
import { KeyboardDragListener } from 'scenerystack/scenery';
```
### Constructor

#### new KeyboardDragListener( providedOptions? : <span style="font-weight: 400;">[KeyboardDragListenerOptions](../scenery/KeyboardDragListener.md#KeyboardDragListenerOptions)</span> ) {: #KeyboardDragListener-constructor data-toc-label='new KeyboardDragListener' }

### Instance Methods

#### getDragBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getDragBounds data-toc-label='getDragBounds' }

Returns the drag bounds in model coordinates.

#### setTransform( transform : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Transform3](../dot/Transform3.md)&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setTransform data-toc-label='setTransform' }

Sets the drag transform of the listener.

#### getTransform() : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Transform3](../dot/Transform3.md)&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getTransform data-toc-label='getTransform' }

Returns the transform of the listener.

#### movingLeft() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #movingLeft data-toc-label='movingLeft' }

Are keys pressed that would move the target Node to the left?

#### movingRight() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #movingRight data-toc-label='movingRight' }

Are keys pressed that would move the target Node to the right?

#### movingUp() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #movingUp data-toc-label='movingUp' }

Are keys pressed that would move the target Node up?

#### movingDown() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #movingDown data-toc-label='movingDown' }

Are keys pressed that would move the target Node down?

#### getCurrentTarget() : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #getCurrentTarget data-toc-label='getCurrentTarget' }

Get the current target Node of the drag.

#### keydown( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;KeyboardEvent&gt;</span> ) {: #keydown data-toc-label='keydown' }

Scenery internal. Part of the events API. Do not call directly.

Does specific work for the keydown event. This is called during scenery event dispatch, and AFTER any global
key state updates. This is important because interruption needs to happen after hotkeyManager has fully processed
the key state. And this implementation assumes that the keydown event will happen after Hotkey updates
(see startNextKeyboardEvent).

#### mapModelPoint( modelPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #mapModelPoint data-toc-label='mapModelPoint' }

(protected)

Apply a mapping from the drag target's model position to an allowed model position.

A common example is using dragBounds, where the position of the drag target is constrained to within a bounding
box. This is done by mapping points outside the bounding box to the closest position inside the box. More
general mappings can be used.

Should be overridden (or use mapPosition) if a custom transformation is needed.

@returns - A point in the model coordinate frame

#### dispose() {: #dispose data-toc-label='dispose' }

Make eligible for garbage collection.

### Instance Properties

#### modelDelta : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelDelta data-toc-label='modelDelta' }

The vector delta in model coordinates that is used to move the object during a drag operation.

#### modelPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelPoint data-toc-label='modelPoint' }

The current drag point in the model coordinate frame.



## Type KeyboardDragListenerCallback {: #KeyboardDragListenerCallback }


```js
import type { KeyboardDragListenerCallback } from 'scenerystack/scenery';
```


[SceneryListenerCallback](../scenery/PressListener.md#SceneryListenerCallback)&lt;Listener, [KeyboardDragListenerDOMEvent](../scenery/KeyboardDragListener.md#KeyboardDragListenerDOMEvent)&gt;



## Type KeyboardDragListenerDOMEvent {: #KeyboardDragListenerDOMEvent }


```js
import type { KeyboardDragListenerDOMEvent } from 'scenerystack/scenery';
```


KeyboardEvent



## Type KeyboardDragListenerNullableCallback {: #KeyboardDragListenerNullableCallback }


```js
import type { KeyboardDragListenerNullableCallback } from 'scenerystack/scenery';
```


[SceneryListenerNullableCallback](../scenery/PressListener.md#SceneryListenerNullableCallback)&lt;Listener, [KeyboardDragListenerDOMEvent](../scenery/KeyboardDragListener.md#KeyboardDragListenerDOMEvent)&gt;



## Type KeyboardDragListenerOptions {: #KeyboardDragListenerOptions }


```js
import type { KeyboardDragListenerOptions } from 'scenerystack/scenery';
```


- **dragDelta**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  How much the position Property will change in view (parent) coordinates every moveOnHoldInterval. Object will
  move in discrete steps at this interval. If you would like smoother "animated" motion use dragSpeed
  instead. dragDelta produces a UX that is more typical for applications but dragSpeed is better for video
  game-like components. dragDelta and dragSpeed are mutually exclusive options.
- **shiftDragDelta**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  How much the PositionProperty will change in view (parent) coordinates every moveOnHoldInterval while the shift modifier
  key is pressed. Shift modifier should produce more fine-grained motion so this value needs to be less than
  dragDelta if provided. Object will move in discrete steps. If you would like smoother "animated" motion use
  dragSpeed options instead. dragDelta options produce a UX that is more typical for applications but dragSpeed
  is better for game-like components. dragDelta and dragSpeed are mutually exclusive options.
- **dragSpeed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  While a direction key is held down, the target will move by this amount in view (parent) coordinates every second.
  This is an alternative way to control motion with keyboard than dragDelta and produces smoother motion for
  the object. dragSpeed and dragDelta options are mutually exclusive. See dragDelta for more information.
- **shiftDragSpeed**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  While a direction key is held down with the shift modifier key, the target will move by this amount in parent view
  coordinates every second. Shift modifier should produce more fine-grained motion so this value needs to be less
  than dragSpeed if provided. This is an alternative way to control motion with keyboard than dragDelta and
  produces smoother motion for the object. dragSpeed and dragDelta options are mutually exclusive. See dragDelta
  for more information.
- **keyboardDragDirection**?: KeyboardDragDirection
<br>  Specifies the direction of motion for the KeyboardDragListener. By default, the position Vector2 can change in
  both directions by pressing the arrow keys. But you can constrain dragging to 1D left-right or up-down motion
  with this value.
- **moveOnHoldDelay**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Arrow keys must be pressed this long to begin movement set on moveOnHoldInterval, in ms
- **moveOnHoldInterval**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Time interval at which the object will change position while the arrow key is held down, in ms. This must be larger
  than 0 to prevent dragging that is based on how often animation-frame steps occur.
- &amp; [AllDragListenerOptions](../scenery/AllDragListenerOptions.md)&lt;Listener, [KeyboardDragListenerDOMEvent](../scenery/KeyboardDragListener.md#KeyboardDragListenerDOMEvent)&gt; &amp; Pick&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "tandem" | "phetioReadOnly"&gt; &amp; PickOptional&lt;ParentOptions, "focus" | "blur"&gt; &amp; [EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions)




## Source Code

See the source for [KeyboardDragListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/KeyboardDragListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
