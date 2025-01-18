# SceneryEvent

## Overview

A Scenery event is an abstraction over incoming user DOM events.

It provides more information (particularly Scenery-related information), and handles a single pointer at a time
(DOM TouchEvents can include information for multiple touches at the same time, so the TouchEvent can be passed to
multiple Scenery events). Thus it is not save to assume that the DOM event is unique, as it may be shared.

NOTE: While the event is being dispatched, its currentTarget may be changed. It is not fully immutable.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SceneryEvent {: #SceneryEvent }


"out" here ensures that SceneryListenerFunctions don't specify a wider type arguments for the event, see  https://github.com/phetsims/scenery/issues/1483

```js
import { SceneryEvent } from 'scenerystack/scenery';
```
### Constructor

#### new SceneryEvent( trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, type : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, pointer : <span style="font-weight: 400;">[Pointer](../scenery/Pointer.md)</span>, context : <span style="font-weight: 400;">[EventContext](../scenery/EventContext.md)&lt;DOMEvent&gt;</span> ) {: #SceneryEvent-constructor data-toc-label='new SceneryEvent' }

### Instance Methods

#### handle() {: #handle data-toc-label='handle' }

like DOM SceneryEvent.stopPropagation(), but named differently to indicate it doesn't fire that behavior on the underlying DOM event

#### abort() {: #abort data-toc-label='abort' }

like DOM SceneryEvent.stopImmediatePropagation(), but named differently to indicate it doesn't fire that behavior on the underlying DOM event

#### isFromPDOM() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isFromPDOM data-toc-label='isFromPDOM' }

Specifies whether the SceneryEvent came from alternative input. See Input.PDOM_EVENT_TYPES for a list of events
pdom-related events supported by scenery. These events are exclusively supported by the ParallelDOM for Interactive
description.

#### canStartPress() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #canStartPress data-toc-label='canStartPress' }

Returns whether a typical PressListener (that isn't already attached) could start a drag with this event.

This can typically be used for patterns where no action should be taken if a press can't be started, e.g.:

  down: function( event ) {
    if ( !event.canStartPress() ) { return; }

    // ... Do stuff to create a node with some type of PressListener

    dragListener.press( event );
  }

NOTE: This ignores non-left mouse buttons (as this is the typical behavior). Custom checks should be done if this
      is not suitable.

### Instance Properties

#### handled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #handled data-toc-label='handled' }

Whether this SceneryEvent has been 'handled'. If so, it will not bubble further.

#### aborted : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #aborted data-toc-label='aborted' }

Whether this SceneryEvent has been 'aborted'. If so, no further listeners with it will fire.

#### trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #trail data-toc-label='trail' }

(readonly)

Path to the leaf-most node "hit" by the event, ordered list, from root to leaf

#### type : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #type data-toc-label='type' }

(readonly)

What event was triggered on the listener, e.g. 'move'

#### pointer : <span style="font-weight: 400;">[Pointer](../scenery/Pointer.md)</span> {: #pointer data-toc-label='pointer' }

(readonly)

The pointer that triggered this event

#### domEvent : <span style="font-weight: 400;">DOMEvent | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #domEvent data-toc-label='domEvent' }

(readonly)

Raw DOM InputEvent (TouchEvent, PointerEvent, MouseEvent,...)

#### context : <span style="font-weight: 400;">[EventContext](../scenery/EventContext.md)</span> {: #context data-toc-label='context' }

(readonly)

Assorted environment information when the event was fired

#### activeElement : <span style="font-weight: 400;">[Element](../nitroglycerin/Element.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #activeElement data-toc-label='activeElement' }

(readonly)

The document.activeElement when the event was fired

#### currentTarget : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #currentTarget data-toc-label='currentTarget' }

Whatever node you attached the listener to, or null when firing events on a Pointer

#### target : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #target data-toc-label='target' }

Leaf-most node in trail

#### isPrimary : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPrimary data-toc-label='isPrimary' }

Whether this is the 'primary' mode for the pointer. Always true for touches, and will be true
for the mouse if it is the primary (left) mouse button.

### Static Properties

#### SceneryEventIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #SceneryEventIO data-toc-label='SceneryEventIO' }

(readonly)



## Source Code

See the source for [SceneryEvent.ts](https://github.com/phetsims/scenery/blob/main/js/input/SceneryEvent.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
