# FocusManager

## Overview

Manages the Properties which signify and control where various forms of focus are. A Focus
just contains the Trail pointing to the Node with focus and a Display whose root is at the
root of that Trail. So it can be used for more than just DOM focus. At the time of this writing,
the forms of Focus include

 - DOM Focus - The Focus Trail points to the Node whose element has DOM focus in the Parallel DOM.
               Only one element can have focus at a time (DOM limitation) so this is managed by a static on
               FocusManager.
 - Pointer Focus - The Focus trail points to a Node that supports Highlighting with pointer events.
 - Reading Block Focus - The Focus Trail points to a Node that supports ReadingBlocks, and is active
                         while the ReadingBlock content is being spoken for Voicing. See ReadingBlock.ts

There may be other forms of Focus in the future.

This class also controls setting and clearing of several (but not all) of these Properties. It does not set the
pdomFocusProperty because that Property is set only when the browser's focus changes. Some of the focus
Properties are set in feature traits, such as pointerFocusProperty which is set by InteractiveHighlighting because it is
set through listeners on each individual Node.

This class also has a few Properties that control the behavior of the Display's HighlightOverlay.

@author Jesse Greenberg (PhET Interactive Simulations)

## Class FocusManager {: #FocusManager }


```js
import { FocusManager } from 'scenerystack/scenery';
```
### Constructor

#### new FocusManager() {: #FocusManager-constructor data-toc-label='new FocusManager' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### pointerFocusProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Focus](../scenery/Focus.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #pointerFocusProperty data-toc-label='pointerFocusProperty' }

(readonly)

This Property whose Focus Trail points to the Node under the pointer to
support features of Voicing and Interactive Highlights. Nodes that compose InteractiveHighlighting can
receive this Focus and a highlight may appear around it.

#### readingBlockFocusProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Focus](../scenery/Focus.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #readingBlockFocusProperty data-toc-label='readingBlockFocusProperty' }

(readonly)

The Property that indicates which Node that uses ReadingBlock is currently
active. Used by the HighlightOverlay to highlight ReadingBlock Nodes whose content is being spoken.

#### lockedPointerFocusProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[Focus](../scenery/Focus.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>&gt;</span> {: #lockedPointerFocusProperty data-toc-label='lockedPointerFocusProperty' }

(readonly)

A Property whose value is either null or a Focus with Trail and Display equal
to the pointerFocusProperty. When this Property has a value, the HighlightOverlay will wait to update the
highlight for the pointerFocusProperty. This is useful when the pointer has begun to interact with a Node
that uses InteractiveHighlighting, but the mouse has moved out of it or over another during interaction. The
highlight should remain on the Node receiving interaction and wait to update until interaction completes.

#### pdomFocusHighlightsVisibleProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #pdomFocusHighlightsVisibleProperty data-toc-label='pdomFocusHighlightsVisibleProperty' }

(readonly)

Controls whether or not highlights related to PDOM focus are visible.

#### interactiveHighlightsVisibleProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #interactiveHighlightsVisibleProperty data-toc-label='interactiveHighlightsVisibleProperty' }

(readonly)

Controls whether "Interactive Highlights" are visible.

#### readingBlockHighlightsVisibleProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #readingBlockHighlightsVisibleProperty data-toc-label='readingBlockHighlightsVisibleProperty' }

(readonly)

Controls whether "Reading Block" highlights will be visible around Nodes
that use ReadingBlock.

#### pointerHighlightsVisibleProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #pointerHighlightsVisibleProperty data-toc-label='pointerHighlightsVisibleProperty' }

(readonly)

Indicates whether any highlights should appear from pointer
input (mouse/touch). If false, we will try to avoid doing expensive work in PointerHighlighting.js.

### Static Methods

#### updatePDOMFocusFromEvent( displays : <span style="font-weight: 400;">[Display](../scenery/Display.md)[]</span>, event : <span style="font-weight: 400;">FocusEvent</span>, focus : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #updatePDOMFocusFromEvent data-toc-label='updatePDOMFocusFromEvent' }

Update the pdomFocus from a focusin/focusout event. Scenery events are batched so that they cannot be
reentrant. However, that means that scenery state that needs to be updated synchronously with the
changing DOM cannot happen in listeners that fire from scenery input. This method
is meant to be called from focusin/focusout listeners on the self so that The pdomFocus matches
browser state.

@param displays - List of any displays that are attached to BrowserEvents.
@param event - The focusin/focusout event that triggered this update.
@param focus - True for focusin event, false for focusout event.

#### getPDOMFocusedNode() : <span style="font-weight: 400;">[Node](../scenery/Node.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getPDOMFocusedNode data-toc-label='getPDOMFocusedNode' }

Get the Node that currently has DOM focus, the leaf-most Node of the Focus Trail. Null if no
Node has focus.

#### attachToWindow() {: #attachToWindow data-toc-label='attachToWindow' }

Updates the _windowHasFocusProperty when the self receives/loses focus. When the self has focus
it is in the foreground of the user. When in the background, the self will not receive keyboard input.
https://developer.mozilla.org/en-US/docs/Web/API/Window/focus_event.

This will be called by scenery for you when you use Display.initializeEvents().

#### detachFromWindow() {: #detachFromWindow data-toc-label='detachFromWindow' }

Detach all self focus/blur listeners from FocusManager watching for when the self loses focus.

### Static Properties

#### pdomFocusProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)</span> {: #pdomFocusProperty data-toc-label='pdomFocusProperty' }

(readonly)

Display has an axon `Property to indicate which component is focused (or null if no
scenery Node has focus). By passing the tandem and phetioTye, PhET-iO is able to interoperate (save, restore,
control, observe what is currently focused). See FocusManager.pdomFocus for setting the focus. Don't set the value
of this Property directly.

#### windowHasFocusProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #windowHasFocusProperty data-toc-label='windowHasFocusProperty' }



## Source Code

See the source for [FocusManager.ts](https://github.com/phetsims/scenery/blob/main/js/accessibility/FocusManager.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
