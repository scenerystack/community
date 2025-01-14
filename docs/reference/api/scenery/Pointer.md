# Pointer

## Overview

A pointer is an abstraction that includes a mouse and touch points (and possibly keys). The mouse is a single
pointer, and each finger (for touch) is a pointer.

Listeners that can be added to the pointer, and events will be fired on these listeners before any listeners are
fired on the Node structure. This is typically very useful for tracking dragging behavior (where the pointer may
cross areas where the dragged node is not directly below the pointer any more).

A valid listener should be an object. If a listener has a property with a Scenery event name (e.g. 'down' or
'touchmove'), then that property will be assumed to be a method and will be called with the Scenery event (like
normal input listeners, see Node.addInputListener).

Pointers can have one active "attached" listener, which is the main handler for responding to the events. This helps
when the main behavior needs to be interrupted, or to determine if the pointer is already in use. Additionally, this
can be used to prevent pointers from dragging or interacting with multiple components at the same time.

A listener may have an interrupt() method that will attemp to interrupt its behavior. If it is added as an attached
listener, then it must have an interrupt() method.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Pointer {: #Pointer }


```js
import { Pointer } from 'scenerystack/scenery';
```
### Constructor

#### new Pointer( initialPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, type : <span style="font-weight: 400;">PointerType</span> ) {: #Pointer-constructor data-toc-label='new Pointer' }

### Instance Methods

#### setCursor( cursor : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCursor data-toc-label='setCursor' }

Sets a cursor that takes precedence over cursor values specified on the pointer's trail.

Typically this can be set when a drag starts (and returned to null when the drag ends), so that the cursor won't
change while dragging (regardless of what is actually under the pointer). This generally will only apply to the
Mouse subtype of Pointer.

NOTE: Consider setting this only for attached listeners in the future (or have a cursor field on pointers).

#### getCursor() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getCursor data-toc-label='getCursor' }

Returns the current cursor override (or null if there is one). See setCursor().

#### addInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span>, attach? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #addInputListener data-toc-label='addInputListener' }

Adds an input listener to this pointer. If the attach flag is true, then it will be set as the "attached"
listener.

#### removeInputListener( listener : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span> ) {: #removeInputListener data-toc-label='removeInputListener' }

Removes an input listener from this pointer.

#### getAttachedListener() : <span style="font-weight: 400;">[TAttachableInputListener](../scenery/TAttachableInputListener.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getAttachedListener data-toc-label='getAttachedListener' }

Returns the listener attached to this pointer with attach(), or null if there isn't one.

#### isAttached() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isAttached data-toc-label='isAttached' }

Returns whether this pointer has an attached (primary) listener.

#### isTouchLike() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isTouchLike data-toc-label='isTouchLike' }

Some pointers are treated differently because they behave like a touch. This is not exclusive to `Touch and touch
events though. See https://github.com/phetsims/scenery/issues/1156

#### interruptAttached() {: #interruptAttached data-toc-label='interruptAttached' }

If there is an attached listener, interrupt it.

After this executes, this pointer should not be attached.

#### interruptAll() {: #interruptAll data-toc-label='interruptAll' }

Interrupts all listeners on this pointer.

#### updatePoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, eventName ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #updatePoint data-toc-label='updatePoint' }

@returns - Whether the point changed

#### hasPointChanged( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasPointChanged data-toc-label='hasPointChanged' }

(protected)

Determines whether the point of the pointer has changed (used in mouse/touch/pen).

#### addIntent( intent : <span style="font-weight: 400;">[Intent](../scenery/Pointer.md#Intent)</span> ) {: #addIntent data-toc-label='addIntent' }

Adds an Intent Pointer. By setting Intent, other listeners in the dispatch phase can react accordingly.
Note that the Intent can be changed by listeners up the dispatch phase or on the next press. See Intent enum
for valid entries.

#### removeIntent( intent : <span style="font-weight: 400;">[Intent](../scenery/Pointer.md#Intent)</span> ) {: #removeIntent data-toc-label='removeIntent' }

Remove an Intent from the Pointer. See addIntent for more information.

#### hasIntent( intent : <span style="font-weight: 400;">[Intent](../scenery/Pointer.md#Intent)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasIntent data-toc-label='hasIntent' }

Returns whether or not this Pointer has been assigned the provided Intent.

#### reserveForDrag() {: #reserveForDrag data-toc-label='reserveForDrag' }

Set the intent of this Pointer to indicate that it will be used for mouse/touch style dragging, indicating to
other listeners in the dispatch phase that behavior may need to change. Adds a listener to the pointer (with
self removal) that clears the intent when the pointer receives an "up" event. Should generally be called on
the Pointer in response to a down event.

#### reserveForKeyboardDrag() {: #reserveForKeyboardDrag data-toc-label='reserveForKeyboardDrag' }

Set the intent of this Pointer to indicate that it will be used for keyboard style dragging, indicating to
other listeners in the dispatch that behavior may need to change. Adds a listener to the pointer (with self
removal) that clears the intent when the pointer receives a "keyup" or "blur" event. Should generally be called
on the Pointer in response to a keydown event.

#### onGotPointerCapture() {: #onGotPointerCapture data-toc-label='onGotPointerCapture' }

This is called when a capture starts on this pointer. We request it on pointerstart, and if received, we should
generally receive events outside the self.

#### onLostPointerCapture() {: #onLostPointerCapture data-toc-label='onLostPointerCapture' }

This is called when a capture ends on this pointer. This happens normally when the user releases the pointer above
the sim or outside, but also in cases where we have NOT received an up/end.

See https://github.com/phetsims/scenery/issues/1186 for more information. We'll want to interrupt the pointer
on this case regardless,

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references so it can be garbage collected.

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

### Instance Properties

#### point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #point data-toc-label='point' }

The location of the pointer in the global coordinate system.

#### type : <span style="font-weight: 400;">PointerType</span> {: #type data-toc-label='type' }

(readonly)

Each Pointer subtype should implement a "type" field that can be checked against for scenery input.

#### trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #trail data-toc-label='trail' }

The trail that the pointer is currently over (if it has yet been registered). If the pointer has not yet registered
a trail, it may be null. If the pointer wasn't over any specific trail, then a trail with only the display's
rootNode will be set.

#### inputEnabledTrail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #inputEnabledTrail data-toc-label='inputEnabledTrail' }

The subset of Pointer.trail that is Node.inputEnabled. See Trail.getLastInputEnabledIndex() for details. This is
kept separately so that it can be detected when inputEnabled changes.

#### isDownProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isDownProperty data-toc-label='isDownProperty' }

@deprecated Whether this pointer is 'down' (pressed).
Will be phased out in https://github.com/phetsims/scenery/issues/803 to something that is specific for the actual
mouse/pen button (since this doesn't generalize well to the left/right mouse buttons).

#### attachedProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #attachedProperty data-toc-label='attachedProperty' }

Whether there is a main listener "attached" to this pointer. This signals that the
listener is "doing" something with the pointer, and that it should be interrupted if other actions need to take
over the pointer behavior.

### Static Properties

#### PointerIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #PointerIO data-toc-label='PointerIO' }

(readonly)

Pointer is not a PhetioObject and not instrumented, but this type is used for
toStateObject in Input



## Class Intent {: #Intent }


```js
import { Intent } from 'scenerystack/scenery';
```
### Static Properties

#### DRAG : <span style="font-weight: 400;">[Intent](../scenery/Pointer.md#Intent)</span> {: #Intent-DRAG data-toc-label='Intent-DRAG' }

(readonly)

listener attached to the pointer will be used for dragging

#### KEYBOARD_DRAG : <span style="font-weight: 400;">[Intent](../scenery/Pointer.md#Intent)</span> {: #Intent-KEYBOARD_DRAG data-toc-label='Intent-KEYBOARD_DRAG' }

(readonly)

listener attached to pointer is for dragging with a keyboard

#### enumeration : <span style="font-weight: 400;">[Enumeration](../phet-core/Enumeration.md)</span> {: #Intent-enumeration data-toc-label='Intent-enumeration' }

(readonly)



## Source Code

See the source for [Pointer.ts](https://github.com/phetsims/scenery/blob/main/js/input/Pointer.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
