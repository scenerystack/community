# PressListener

## Overview

Listens to presses (down events), attaching a listener to the pointer when one occurs, so that a release (up/cancel
or interruption) can be recorded.

This is the base type for both DragListener and FireListener, which contains the shared logic that would be needed
by both.

PressListener is fine to use directly, particularly when drag-coordinate information is needed (e.g. DragListener),
or if the interaction is more complicated than a simple button fire (e.g. FireListener).

For example usage, see scenery/examples/input.html. Additionally, a typical "simple" PressListener direct usage
would be something like:

  someNode.addInputListener( new PressListener( {
    press: () =&gt; { ... },
    release: () =&gt; { ... }
  } ) );

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PressListener {: #PressListener }


```js
import { PressListener } from 'scenerystack/scenery';
```
### Constructor

#### new PressListener( providedOptions? : <span style="font-weight: 400;">[PressListenerOptions](../scenery/PressListener.md#PressListenerOptions)</span> ) {: #PressListener-constructor data-toc-label='new PressListener' }

### Instance Methods

#### getCurrentTarget() : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #getCurrentTarget data-toc-label='getCurrentTarget' }

The main node that this listener is responsible for dragging.

#### canPress( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #canPress data-toc-label='canPress' }

Returns whether a press can be started with a particular event.

#### canClick() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #canClick data-toc-label='canClick' }

Returns whether this PressListener can be clicked from keyboard input. This copies part of canPress, but
we didn't want to use canClick in canPress because canClick could be overridden in subtypes.

#### press( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span>, targetNode? : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, callback? : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #press data-toc-label='press' }

Moves the listener to the 'pressed' state if possible (attaches listeners and initializes press-related
properties).

This can be overridden (with super-calls) when custom press behavior is needed for a type.

This can be called by outside clients in order to try to begin a process (generally on an already-pressed
pointer), and is useful if a 'drag' needs to change between listeners. Use canPress( event ) to determine if
a press can be started (if needed beforehand).

@param event
@param [targetNode] - If provided, will take the place of the targetNode for this call. Useful for
                             forwarded presses.
@param [callback] - to be run at the end of the function, but only on success
@returns success - Returns whether the press was actually started

#### release( event? : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span>, callback? : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #release data-toc-label='release' }

Releases a pressed listener.

This can be overridden (with super-calls) when custom release behavior is needed for a type.

This can be called from the outside to release the press without the pointer having actually fired any 'up'
events. If the cancel/interrupt behavior is more preferable, call interrupt() on this listener instead.

@param [event] - scenery event if there was one. We can't guarantee an event, in part to support interrupting.
@param [callback] - called at the end of the release

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Interrupts the listener, releasing it (canceling behavior).

This effectively releases/ends the press, and sets the `interrupted` flag to true while firing these events
so that code can determine whether a release/end happened naturally, or was canceled in some way.

This can be called manually, but can also be called through node.interruptSubtreeInput().

#### clearOverPointers() {: #clearOverPointers data-toc-label='clearOverPointers' }

This should be called when the listened "Node" is effectively removed from the scene graph AND
expected to be placed back in such that it could potentially get multiple "enter" events, see
https://github.com/phetsims/scenery/issues/1021

This will clear the list of pointers considered "over" the Node, so that when it is placed back in, the state
will be correct, and another "enter" event will not be missing an "exit".

#### step() {: #step data-toc-label='step' }

If collapseDragEvents is set to true, this step() should be called every frame so that the collapsed drag
can be fired.

#### setCreatePanTargetBounds( createDragPanTargetBounds : <span style="font-weight: 400;">( () =&gt; [Bounds2](../dot/Bounds2.md) ) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setCreatePanTargetBounds data-toc-label='setCreatePanTargetBounds' }

Set the callback that will create a Bounds2 in the global coordinate frame for the AnimatedPanZoomListener to
keep in view during a drag operation. During drag input the AnimatedPanZoomListener will pan the screen to
try and keep the returned Bounds2 visible. By default, the AnimatedPanZoomListener will try to keep the target of
the drag in view but that may not always work if the target is not associated with the translated Node, the target
is not defined, or the target has bounds that do not accurately surround the graphic you want to keep in view.

#### setCreatePanTargetBoundsFromTrail( trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) {: #setCreatePanTargetBoundsFromTrail data-toc-label='setCreatePanTargetBoundsFromTrail' }

A convenient way to create and set the callback that will return a Bounds2 in the global coordinate frame for the
AnimatedPanZoomListener to keep in view during a drag operation. The AnimatedPanZoomListener will try to keep the
bounds of the last Node of the provided trail visible by panning the screen during a drag operation. See
setCreatePanTargetBounds() for more documentation.

#### onEnabledPropertyChange( enabled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #onEnabledPropertyChange data-toc-label='onEnabledPropertyChange' }

(protected)

Fired when the enabledProperty changes

#### click( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;MouseEvent&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, callback? : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #click data-toc-label='click' }

Click listener, called when this is treated as an accessible input listener.
In general not needed to be public, but just used in edge cases to get proper click logic for pdom.

Handle the click event from DOM for PDOM. Clicks by calling press and release immediately.
When assistive technology is used, the browser may not receive 'keydown' or 'keyup' events on input elements, but
only a single 'click' event. We need to toggle the pressed state from the single 'click' event.

This will fire listeners immediately, but adds a delay for the pdomClickingProperty so that you can make a
button look pressed from a single DOM click event. For example usage, see sun/ButtonModel.looksPressedProperty.

@param event
@param [callback] optionally called immediately after press, but only on successful click
@returns success - Returns whether the press was actually started

#### blur() {: #blur data-toc-label='blur' }

Blur listener, called when this is treated as an accessible input listener.
@pdom

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes the listener, releasing references. It should not be used after this.

### Instance Properties

#### overPointers : <span style="font-weight: 400;">[ObservableArray](../axon/createObservableArray.md#ObservableArray)&lt;[Pointer](../scenery/Pointer.md)&gt;</span> {: #overPointers data-toc-label='overPointers' }

(readonly)

Contains all pointers that are over our button. Tracked by adding with 'enter' events and removing with 'exit'
events.

#### isPressedProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isPressedProperty data-toc-label='isPressedProperty' }

(readonly)

(read-only) - Tracks whether this listener is "pressed" or not.

#### isOverProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isOverProperty data-toc-label='isOverProperty' }

(readonly)

(read-only) - It will be set to true when at least one pointer is over the listener.
This is not effected by PDOM focus.

#### looksOverProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #looksOverProperty data-toc-label='looksOverProperty' }

(readonly)

(read-only) - True when either isOverProperty is true, or when focused and the
related Display is showing its focusHighlights, see this.validateOver() for details.

#### isHoveringProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isHoveringProperty data-toc-label='isHoveringProperty' }

(readonly)

(read-only) - It will be set to true when either:
  1. The listener is pressed and the pointer that is pressing is over the listener.
  2. There is at least one unpressed pointer that is over the listener.

#### isHighlightedProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isHighlightedProperty data-toc-label='isHighlightedProperty' }

(readonly)

(read-only) - It will be set to true when either:
  1. The listener is pressed.
  2. There is at least one unpressed pointer that is over the listener.
This is essentially true when ( isPressed || isHovering ).

#### isFocusedProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isFocusedProperty data-toc-label='isFocusedProperty' }

(readonly)

(read-only) - Whether the listener has focus (should appear to be over)

#### pointer : <span style="font-weight: 400;">[Pointer](../scenery/Pointer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #pointer data-toc-label='pointer' }

(read-only) - The current pointer, or null when not pressed. There can be short periods of
time when this has a value when isPressedProperty.value is false, such as during the processing of a pointer
release, but these periods should be very brief.

#### pressedTrail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #pressedTrail data-toc-label='pressedTrail' }

(read-only) - The Trail for the press, with no descendant nodes past the currentTarget
or targetNode (if provided). Will generally be null when not pressed, though there can be short periods of time
where this has a value when isPressedProperty.value is false, such as during the processing of a release, but
these periods should be very brief.

#### interrupted : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #interrupted data-toc-label='interrupted' }

(read-only) - Whether the last press was interrupted. Will be valid until the next press.

#### pdomClickingProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #pdomClickingProperty data-toc-label='pdomClickingProperty' }

(readonly)

(read-only) - Whether a press is being processed from a pdom click input event from the PDOM.

#### looksPressedProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #looksPressedProperty data-toc-label='looksPressedProperty' }

(readonly)

(read-only) - This Property was added to support input from the PDOM. It tracks whether
or not the button should "look" down. This will be true if downProperty is true or if a pdom click is in
progress. For a click event from the pdom, the listeners are fired right away but the button will look down for
as long as a11yLooksPressedInterval. See PressListener.click() for more details.

#### display : <span style="font-weight: 400;">[Display](../scenery/Display.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #display data-toc-label='display' }

To support looksOverProperty being true based on focus, we need to monitor the display from which
the event has come from to see if that display is showing its focusHighlights, see
Display.prototype.focusManager.FocusManager.pdomFocusHighlightsVisibleProperty for details.

### Static Properties

#### phetioAPI {: #phetioAPI data-toc-label='phetioAPI' }



## Type PressedPressListener {: #PressedPressListener }


```js
import type { PressedPressListener } from 'scenerystack/scenery';
```


WithoutNull&lt;[PressListener](../scenery/PressListener.md), "pointer" | "pressedTrail"&gt;



## Type PressListenerCallback {: #PressListenerCallback }


```js
import type { PressListenerCallback } from 'scenerystack/scenery';
```


[SceneryListenerCallback](../scenery/PressListener.md#SceneryListenerCallback)&lt;Listener, [PressListenerDOMEvent](../scenery/PressListener.md#PressListenerDOMEvent)&gt;



## Type PressListenerCanStartPressCallback {: #PressListenerCanStartPressCallback }


```js
import type { PressListenerCanStartPressCallback } from 'scenerystack/scenery';
```


( event: [PressListenerEvent](../scenery/PressListener.md#PressListenerEvent) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, listener: Listener ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>



## Type PressListenerDOMEvent {: #PressListenerDOMEvent }


```js
import type { PressListenerDOMEvent } from 'scenerystack/scenery';
```


MouseEvent | TouchEvent | PointerEvent | FocusEvent | KeyboardEvent



## Type PressListenerEvent {: #PressListenerEvent }


```js
import type { PressListenerEvent } from 'scenerystack/scenery';
```


[SceneryEvent](../scenery/SceneryEvent.md)&lt;[PressListenerDOMEvent](../scenery/PressListener.md#PressListenerDOMEvent)&gt;



## Type PressListenerNullableCallback {: #PressListenerNullableCallback }


```js
import type { PressListenerNullableCallback } from 'scenerystack/scenery';
```


[SceneryListenerNullableCallback](../scenery/PressListener.md#SceneryListenerNullableCallback)&lt;Listener, [PressListenerDOMEvent](../scenery/PressListener.md#PressListenerDOMEvent)&gt;



## Type PressListenerOptions {: #PressListenerOptions }


```js
import type { PressListenerOptions } from 'scenerystack/scenery';
```


- **press**?: [PressListenerCallback](../scenery/PressListener.md#PressListenerCallback)&lt;Listener&gt;
<br>  Called when this listener is pressed (typically from a down event, but can be triggered by other handlers)
- **release**?: [PressListenerNullableCallback](../scenery/PressListener.md#PressListenerNullableCallback)&lt;Listener&gt;
<br>  Called when this listener is released. Note that an SceneryEvent arg cannot be guaranteed from this listener. This
  is, in part, to support interrupt. (pointer up/cancel or interrupt when pressed/after click from the pdom).
  NOTE: This will also be called if the press is "released" due to being interrupted or canceled.
- **drag**?: [PressListenerCallback](../scenery/PressListener.md#PressListenerCallback)&lt;Listener&gt;
<br>  Called when this listener is dragged (move events on the pointer while pressed)
- **targetNode**?: [Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If provided, the pressedTrail (calculated from the down event) will be replaced with the (sub)trail that ends with
  the targetNode as the leaf-most Node. This affects the parent coordinate frame computations.
  This is ideally used when the Node which has this input listener is different from the Node being transformed,
  as otherwise offsets and drag behavior would be incorrect by default.
- **attach**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, this listener will not "press" while the associated pointer is attached, and when pressed,
  will mark itself as attached to the pointer. If this listener should not be interrupted by others and isn't
  a "primary" handler of the pointer's behavior, this should be set to false.
- **mouseButton**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Restricts to the specific mouse button (but allows any touch). Only one mouse button is allowed at
  a time. The button numbers are defined in https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button,
  where typically:
    0: Left mouse button
    1: Middle mouse button (or wheel press)
    2: Right mouse button
    3+: other specific numbered buttons that are more rare
- **pressCursor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  If the targetNode/currentTarget don't have a custom cursor, this will set the pointer cursor to
  this value when this listener is "pressed". This means that even when the mouse moves out of the node after
  pressing down, it will still have this cursor (overriding the cursor of whatever nodes the pointer may be
  over).
- **useInputListenerCursor**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  When true, any node this listener is added to will use this listener's cursor (see options.pressCursor)
  as the cursor for that node. This only applies if the node's cursor is null, see Node.getEffectiveCursor().
- **canStartPress**?: [PressListenerCanStartPressCallback](../scenery/PressListener.md#PressListenerCanStartPressCallback)&lt;Listener&gt;
<br>  Checks this when trying to start a press. If this function returns false, a press will not be started
- **a11yLooksPressedInterval**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  (a11y) - How long something should 'look' pressed after an accessible click input event, in ms
- **collapseDragEvents**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  If true, multiple drag events in a row (between steps) will be collapsed into one drag event
  (usually for performance) by just calling the callbacks for the last drag event. Other events (press/release
  handling) will force through the last pending drag event. Calling step() every frame will then be generally
  necessary to have accurate-looking drags. NOTE that this may put in events out-of-order.
  This is appropriate when the drag operation is expensive performance-wise AND ideally should only be run at
  most once per frame (any more, and it would be a waste).
- **phetioReadOnly**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Though PressListener is not instrumented, declare these here to support properly passing this to children, see https://github.com/phetsims/tandem/issues/60.
  PressListener by default doesn't allow PhET-iO to trigger press/release Action events
- **phetioFeatured**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **phetioPressActionInstrumented**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Opt out of instrumenting pressAction and releaseAction, only useful in subtypes where you have a better API that
  makes these redundant.
- **phetioReleaseActionInstrumented**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [EnabledComponentOptions](../axon/EnabledComponent.md#EnabledComponentOptions)




## Type SceneryListenerCallback {: #SceneryListenerCallback }


General type of callback structure shared by many scenery input-listeners

```js
import type { SceneryListenerCallback } from 'scenerystack/scenery';
```


( event: [SceneryEvent](../scenery/SceneryEvent.md)&lt;DomEventTypes&gt;, listener: Listener ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Type SceneryListenerNullableCallback {: #SceneryListenerNullableCallback }


```js
import type { SceneryListenerNullableCallback } from 'scenerystack/scenery';
```


( event: [SceneryEvent](../scenery/SceneryEvent.md)&lt;DomEventTypes&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>, listener: Listener ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Source Code

See the source for [PressListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/PressListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
