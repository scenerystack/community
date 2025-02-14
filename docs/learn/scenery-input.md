--8<-- "api-reference-snippets.md"

# Scenery Input

!!! warning "Under Construction"
    This section and others in Getting Started with SceneryStack are under heavy revisement
    and will be updated in February 2025.

TODO: this is out of date, needs updating. Lots of stuff about Scenes.

## Adding Interaction to a Display

[Display]s do not have event listeners attached by default. To initialize the event system (that will attach and set up
listeners), call `display.initializeEvents()`.

Additionally, a [Display] does not update automatically. Use `display.updateDisplay()` when needed, or create a rendering
loop with `display.updateOnRequestAnimationFrame()`:

```js
display.updateOnRequestAnimationFrame( elapsedTimeInSeconds => {
  // This code will be called every frame BEFORE the display is updated.
  // Put your update logic here.
} );
```

TODO: move the below documentation

Accessibility-related input listeners require a timer to work with assistive devices and to keep track of the state of
the keyboard. In order for accessibility input to work correctly, call `axon.timer.emit( timeElapsedInSeconds )` prior
to each call to `display.updateDisplay()`. `display.updateOnRequestAnimationFrame()` will do this for you. Take a look
at [Accessibility in Scenery](scenery-accessibility.md) for more information about accessibility.

## Pointers

A *pointer* is an abstract way of describing a mouse, a single touch point, or a pen/stylus, similar to
the [Pointer Events](https://dvcs.w3.org/hg/pointerevents/raw-file/tip/pointerEvents.html) specification. Touch and pen
pointers are transient, created when the relevant DOM *down* event occurs and released when the corresponding DOM *up*
or *cancel* event occurs. However, the mouse pointer is persistent.

Input event listeners can be added to nodes directly, or to a pointer or the Display. When a DOM event is received, it
is first broken up into multiple events (if necessary, e.g., multiple touch points), then the dispatch is handled for
each individual Scenery event. Events are first fired for any listeners attached to the pointer that caused the event,
then fire on the node directly under the pointer, and if applicable, bubble up the graph to the Scene from which the
event was triggered. Finally, listeners attached to the Display will be triggered.  
**Events are not fired directly on nodes that are not under the pointer at the time of the event.**

## Listeners and Events

Event listeners are added with `node.addInputListener(listener)`, `pointer.addInputListener(listener)`, and
`display.addInputListener(listener)`. This listener can be an arbitrary object, and the listener will be triggered by
calling `listener[eventType]( event )`, where `eventType` is one of the event types as described below, and `event` is a
Scenery event with the following properties:

| **Property**      | **Description**                                                                                                                        |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **trail**         | A Trail pointing to the node under the pointer.                                                                                        |
| **pointer**       | The Pointer that triggered the event. Additional information can be obtained from the pointer, e.g., `event.pointer.point`.            |
| **type**          | The base type of the event (e.g., for touch down events, it will always just be "down").                                               |
| **domEvent**      | The underlying DOM event that triggered this Scenery event. This could be a TouchEvent, PointerEvent, MouseEvent, MSPointerEvent, etc. |
| **target**        | The leaf-most Node in the Trail.                                                                                                       |
| **currentTarget** | The Node to which the listener being fired is attached, or null if fired directly from a pointer.                                      |

## Event Types

Scenery will fire the following base event types:

| **Event Type** | **Description**                                                                                                                                                                                             |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **down**       | Triggered when a pointer is pressed down. Touch/pen pointers are created for each down event and are active until an up/cancel event is sent.                                                               |
| **up**         | Triggered when a pointer is released normally. Touch/pen pointers will not have any more events associated with them after an up event.                                                                     |
| **cancel**     | Triggered when a pointer is canceled abnormally. Touch/pen pointers will not have any more events associated with them after an up event.                                                                   |
| **move**       | Triggered when a pointer moves.                                                                                                                                                                             |
| **wheel**      | Triggered when the (mouse) wheel is scrolled. The associated pointer will have wheelDelta information.                                                                                                      |
| **enter**      | Triggered when a pointer moves over a Node or one of its children. Does not bubble up. Mirrors behavior from the DOM [mouseenter](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseenter).          |
| **exit**       | Triggered when a pointer moves out from over a Node or one of its children. Does not bubble up. Mirrors behavior from the DOM [mouseleave](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseleave). |
| **over**       | Triggered when a pointer moves over a Node (not including its children). Mirrors behavior from the DOM [mouseover](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseover).                          |
| **out**        | Triggered when a pointer moves out from over a Node (not including its children). Mirrors behavior from the DOM [mouseout](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseout).                   |
| **keydown**    | Triggered when a key is pressed down. Fires on the keyboard-focused node and bubbles down.                                                                                                                  |
| **keyup**      | Triggered when a key is released. Fires on the keyboard-focused node and bubbles down.                                                                                                                      |

Before firing the base event type (e.g., `move`), Scenery will also fire an event specific to the type of pointer. For
example, for mice, it will fire `mousemove`; for touch events, it will fire `touchmove`; and for pen events, it will
fire `penmove`. Similarly, for any type of event, it will first fire `pointerType+eventType`, and then `eventType`.

## Event Dispatch

SceneryEvents have two methods that will cause early termination: `event.abort()` will cause no more listeners to be
notified for this event, and `event.handle()` will allow the current level of listeners to be notified (all pointer
listeners or all listeners attached to the current node), but no more listeners after that level will fire. `handle` and
`abort` are like `stopPropagation`, `stopImmediatePropagation` for DOM events, except they do not trigger those DOM
methods on the underlying DOM event.

Up/down/cancel events all happen separately, but for move events, a specific sequence occurs if the pointer changes the
node it is over:

1. The **move** event is fired (and bubbles).
2. An **out** event is fired for the old topmost Node (and bubbles).
3. **exit** events are fired for all Nodes in the Trail hierarchy that are now not under the pointer, from the leaf-most
   to the root-most. Does not bubble.
4. **enter** events are fired for all Nodes in the Trail hierarchy that were not under the pointer (but now are), from
   the root-most to the leaf-most. Does not bubble.
5. An **over** event is fired for the new topmost Node (and bubbles).

`event.abort()` and `event.handle()` will currently not affect other stages in the 'move' sequence (e.g.,
`event.abort()` in the 'move' event will not affect the following 'out' event).

For each event type:

1. Listeners on the pointer will be triggered first (in the order they were added).
2. Listeners on the target (top-most) Node will be triggered (in the order they were added to that Node).
3. If the event bubbles, each Node in the Trail will be triggered, starting from the Node under the top-most (that just
   had listeners triggered) and all the way down to the Scene. Listeners are triggered in the order they were added for
   each Node.
4. Listeners on the display will be triggered (in the order they were added).

For each listener being notified, it will fire the more specific `pointerType+eventType` first (e.g., `mousemove`), then
`eventType` next (e.g., `move`).

Currently, `preventDefault()` is called on the associated DOM event if the top-most node has the 'interactive' property
set to a truthy value.

## Relevant Specifications

- [DOM Level 3 events](http://www.w3.org/TR/DOM-Level-3-Events/)
- [Touch events](http://www.w3.org/TR/touch-events/)
- [Pointer events draft](https://dvcs.w3.org/hg/pointerevents/raw-file/tip/pointerEvents.html),
  and [documentation for Microsoft's version](http://msdn.microsoft.com/en-us/library/ie/hh673557(v=vs.85).aspx)
