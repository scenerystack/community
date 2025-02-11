# Input

## Overview

Main handler for user-input events in Scenery.

*** Adding input handling to a display

Displays do not have event listeners attached by default. To initialize the event system (that will set up
listeners), use one of Display's initialize*Events functions.

*** Pointers

A 'pointer' is an abstract way of describing a mouse, a single touch point, or a pen/stylus, similar to in the
Pointer Events specification (https://dvcs.w3.org/hg/pointerevents/raw-file/tip/pointerEvents.html). Touch and pen
pointers are transient, created when the relevant DOM down event occurs and released when corresponding the DOM up
or cancel event occurs. However, the mouse pointer is persistent.

Input event listeners can be added to {Node}s directly, or to a pointer. When a DOM event is received, it is first
broken up into multiple events (if necessary, e.g. multiple touch points), then the dispatch is handled for each
individual Scenery event. Events are first fired for any listeners attached to the pointer that caused the event,
then fire on the node directly under the pointer, and if applicable, bubble up the graph to the Scene from which the
event was triggered. Events are not fired directly on nodes that are not under the pointer at the time of the event.
To handle many common patterns (like button presses, where mouse-ups could happen when not over the button), it is
necessary to add those move/up listeners to the pointer itself.

*** Listeners and Events

Event listeners are added with node.addInputListener( listener ), pointer.addInputListener( listener ) and
display.addInputListener( listener ).
This listener can be an arbitrary object, and the listener will be triggered by calling listener[eventType]( event ),
where eventType is one of the event types as described below, and event is a Scenery event with the
following properties:
- trail {Trail} - Points to the node under the pointer
- pointer {Pointer} - The pointer that triggered the event. Additional information about the mouse/touch/pen can be
                      obtained from the pointer, for example event.pointer.point.
- type {string} - The base type of the event (e.g. for touch down events, it will always just be "down").
- domEvent {UIEvent} - The underlying DOM event that triggered this Scenery event. The DOM event may correspond to
                       multiple Scenery events, particularly for touch events. This could be a TouchEvent,
                       PointerEvent, MouseEvent, MSPointerEvent, etc.
- target {Node} - The leaf-most Node in the trail.
- currentTarget {Node} - The Node to which the listener being fired is attached, or null if the listener is being
                         fired directly from a pointer.

Additionally, listeners may support an interrupt() method that detaches it from pointers, or may support being
"attached" to a pointer (indicating a primary role in controlling the pointer's behavior). See Pointer for more
information about these interactions.

*** Event Types

Scenery will fire the following base event types:

- down: Triggered when a pointer is pressed down. Touch / pen pointers are created for each down event, and are
        active until an up/cancel event is sent.
- up: Triggered when a pointer is released normally. Touch / pen pointers will not have any more events associated
      with them after an up event.
- cancel: Triggered when a pointer is canceled abnormally. Touch / pen pointers will not have any more events
          associated with them after an up event.
- move: Triggered when a pointer moves.
- wheel: Triggered when the (mouse) wheel is scrolled. The associated pointer will have wheelDelta information.
- enter: Triggered when a pointer moves over a Node or one of its children. Does not bubble up. Mirrors behavior from
         the DOM mouseenter (http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseenter)
- exit:  Triggered when a pointer moves out from over a Node or one of its children. Does not bubble up. Mirrors
         behavior from the DOM mouseleave (http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseleave).
- over: Triggered when a pointer moves over a Node (not including its children). Mirrors behavior from the DOM
        mouseover (http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseover).
- out: Triggered when a pointer moves out from over a Node (not including its children). Mirrors behavior from the
       DOM mouseout (http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseout).

Before firing the base event type (for example, 'move'), Scenery will also fire an event specific to the type of
pointer. For mice, it will fire 'mousemove', for touch events it will fire 'touchmove', and for pen events it will
fire 'penmove'. Similarly, for any type of event, it will first fire pointerType+eventType, and then eventType.

**** PDOM Specific Event Types

Some event types can only be triggered from the PDOM. If a SCENERY/Node has accessible content (see
ParallelDOM.js for more info), then listeners can be added for events fired from the PDOM. The accessibility events
triggered from a Node are dependent on the `tagName` (ergo the HTMLElement primary sibling) specified by the Node.

Some terminology for understanding:
- PDOM:  parallel DOM, see ParallelDOM.js
- Primary Sibling:  The Node's HTMLElement in the PDOM that is interacted with for accessible interactions and to
                    display accessible content. The primary sibling has the tag name specified by the `tagName`
                    option, see `ParallelDOM.setTagName`. Primary sibling is further defined in PDOMPeer.js
- Assistive Technology:  aka AT, devices meant to improve the capabilities of an individual with a disability.

The following are the supported accessible events:

- focus: Triggered when navigation focus is set to this Node's primary sibling. This can be triggered with some
         AT too, like screen readers' virtual cursor, but that is not dependable as it can be toggled with a screen
         reader option. Furthermore, this event is not triggered on mobile devices. Does not bubble.
- focusin: Same as 'focus' event, but bubbles.
- blur:  Triggered when navigation focus leaves this Node's primary sibling. This can be triggered with some
         AT too, like screen readers' virtual cursor, but that is not dependable as it can be toggled with a screen
         reader option. Furthermore, this event is not triggered on mobile devices.
- focusout: Same as 'blur' event, but bubbles.
- click:  Triggered when this Node's primary sibling is clicked. Note, though this event seems similar to some base
          event types (the event implements `MouseEvent`), it only applies when triggered from the PDOM.
          See https://www.w3.org/TR/DOM-Level-3-Events/#click
- input:  Triggered when the value of an &lt;input&gt;, &lt;select&gt;, or &lt;textarea&gt; element has been changed.
          See https://www.w3.org/TR/DOM-Level-3-Events/#input
- change:  Triggered for &lt;input&gt;, &lt;select&gt;, and &lt;textarea&gt; elements when an alteration to the element's value is
           committed by the user. Unlike the input event, the change event is not necessarily fired for each
           alteration to an element's value. See
           https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event and
           https://html.spec.whatwg.org/multipage/indices.html#event-change
- keydown: Triggered for all keys pressed. When a screen reader is active, this event will be omitted
           role="button" is activated.
           See https://www.w3.org/TR/DOM-Level-3-Events/#keydown
- keyup :  Triggered for all keys when released. When a screen reader is active, this event will be omitted
           role="button" is activated.
           See https://www.w3.org/TR/DOM-Level-3-Events/#keyup

*** Event Dispatch

Events have two methods that will cause early termination: event.abort() will cause no more listeners to be notified
for this event, and event.handle() will allow the current level of listeners to be notified (all pointer listeners,
or all listeners attached to the current node), but no more listeners after that level will fire. handle and abort
are like stopPropagation, stopImmediatePropagation for DOM events, except they do not trigger those DOM methods on
the underlying DOM event.

Up/down/cancel events all happen separately, but for move events, a specific sequence of events occurs if the pointer
changes the node it is over:

1. The move event is fired (and bubbles).
2. An out event is fired for the old topmost Node (and bubbles).
3. exit events are fired for all Nodes in the Trail hierarchy that are now not under the pointer, from the root-most
   to the leaf-most. Does not bubble.
4. enter events are fired for all Nodes in the Trail hierarchy that were not under the pointer (but now are), from
   the leaf-most to the root-most. Does not bubble.
5. An over event is fired for the new topmost Node (and bubbles).

event.abort() and event.handle() will currently not affect other stages in the 'move' sequence (e.g. event.abort() in
the 'move' event will not affect the following 'out' event).

For each event type:

1. Listeners on the pointer will be triggered first (in the order they were added)
2. Listeners on the target (top-most) Node will be triggered (in the order they were added to that Node)
3. Then if the event bubbles, each Node in the Trail will be triggered, starting from the Node under the top-most
   (that just had listeners triggered) and all the way down to the Scene. Listeners are triggered in the order they
   were added for each Node.
4. Listeners on the display will be triggered (in the order they were added)

For each listener being notified, it will fire the more specific pointerType+eventType first (e.g. 'mousemove'),
then eventType next (e.g. 'move').

Currently, preventDefault() is called on the associated DOM event if the top-most node has the 'interactive' property
set to a truthy value.

*** Relevant Specifications

DOM Level 3 events spec: http://www.w3.org/TR/DOM-Level-3-Events/
Touch events spec: http://www.w3.org/TR/touch-events/
Pointer events spec draft: https://dvcs.w3.org/hg/pointerevents/raw-file/tip/pointerEvents.html
                           http://msdn.microsoft.com/en-us/library/ie/hh673557(v=vs.85).aspx

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)

## Class Input {: #Input }


```js
import { Input } from 'scenerystack/scenery';
```
### Constructor

#### new Input( display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span>, attachToWindow : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, batchDOMEvents : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, assumeFullWindow : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, passiveEvents : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, preventMultitouch : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, interruptMultitouch : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, providedOptions? : <span style="font-weight: 400;">[InputOptions](../scenery/Input.md#InputOptions)</span> ) {: #Input-constructor data-toc-label='new Input' }

### Instance Methods

#### interruptPointers( excludePointer : <span style="font-weight: 400;">[Pointer](../scenery/Pointer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #interruptPointers data-toc-label='interruptPointers' }

Interrupts any input actions that are currently taking place (should stop drags, etc.)

If excludePointer is provided, it will NOT be interrupted along with the others

### Instance Properties

#### display : <span style="font-weight: 400;">[Display](../scenery/Display.md)</span> {: #display data-toc-label='display' }

(readonly)

#### rootNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #rootNode data-toc-label='rootNode' }

(readonly)

#### attachToWindow : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #attachToWindow data-toc-label='attachToWindow' }

(readonly)

#### batchDOMEvents : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #batchDOMEvents data-toc-label='batchDOMEvents' }

(readonly)

#### assumeFullWindow : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #assumeFullWindow data-toc-label='assumeFullWindow' }

(readonly)

#### passiveEvents : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #passiveEvents data-toc-label='passiveEvents' }

(readonly)

#### preventMultitouch : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #preventMultitouch data-toc-label='preventMultitouch' }

(readonly)

#### interruptMultitouch : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #interruptMultitouch data-toc-label='interruptMultitouch' }

(readonly)

#### pdomPointer : <span style="font-weight: 400;">[PDOMPointer](../scenery/PDOMPointer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #pdomPointer data-toc-label='pdomPointer' }

Pointer for accessibility, only created lazily on first pdom event.

#### mouse : <span style="font-weight: 400;">[Mouse](../scenery/Mouse.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #mouse data-toc-label='mouse' }

Pointer for mouse, only created lazily on first mouse event, so no mouse is allocated on tablets.

#### pointers : <span style="font-weight: 400;">[Pointer](../scenery/Pointer.md)[]</span> {: #pointers data-toc-label='pointers' }

All active pointers.

#### pointerAddedEmitter : <span style="font-weight: 400;">[TEmitter](../axon/TEmitter.md)&lt;[ [Pointer](../scenery/Pointer.md) ]&gt;</span> {: #pointerAddedEmitter data-toc-label='pointerAddedEmitter' }

#### currentlyFiringEvents : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #currentlyFiringEvents data-toc-label='currentlyFiringEvents' }

Whether we are currently firing events. We need to track this to handle re-entrant cases
like https://github.com/phetsims/balloons-and-static-electricity/issues/406.

#### currentSceneryEvent : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #currentSceneryEvent data-toc-label='currentSceneryEvent' }

### Static Properties

#### InputIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #InputIO data-toc-label='InputIO' }

(readonly)



## Type InputOptions {: #InputOptions }


```js
import type { InputOptions } from 'scenerystack/scenery';
```


[PickOptional](../phet-core/PickOptional.md)&lt;[PhetioObjectOptions](../tandem/PhetioObject.md#PhetioObjectOptions), "tandem"&gt;



## Source Code

See the source for [Input.ts](https://github.com/phetsims/scenery/blob/main/js/input/Input.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
