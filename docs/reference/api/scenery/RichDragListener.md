# RichDragListener

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/listeners/RichDragListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/RichDragListener.ts) for the most up-to-date information.

## Overview

A drag listener that supports both pointer and keyboard input. It is composed with a DragListener and a
KeyboardDragListener to support pointer input and alternative input. In the future it can support other
input modalities or PhET-specific features.

Be sure to dispose of this listener when it is no longer needed.

Options that are common to both listeners are provided directly to this listener. Options that are specific to
a particular listener can be provided through the dragListenerOptions or keyboardDragListenerOptions.

Typical PhET usage will use a position Property in a model coordinate frame and look like this:

    // A focusable Node that can be dragged with pointer or keyboard.
    const draggableNode = new Node( {
      tagName: 'div',
      focusable: true
    } );

    const richDragListener = new RichDragListener( {
      positionProperty: someObject.positionProperty,
      transform: modelViewTransform
    } );

    draggableNode.addInputListener( richDragListener );

This listener works by implementing TInputListener and forwarding input events to the specific listeners. This is
how we support adding this listener through the scenery input listener API.

@author Jesse Greenberg

## Class RichDragListener {: #RichDragListener }


```js
import { RichDragListener } from 'scenerystack/scenery';
```
### Constructor

#### new RichDragListener( providedOptions? : <span style="font-weight: 400;">[RichDragListenerOptions](../scenery/RichDragListener.md#RichDragListenerOptions)</span> ) {: #RichDragListener-constructor data-toc-label='new RichDragListener' }

### Instance Methods

#### dispose() {: #dispose data-toc-label='dispose' }

#### interrupt() {: #interrupt data-toc-label='interrupt' }

********************************************************************
Forward input to both listeners
********************************************************************

#### keydown( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;KeyboardEvent&gt;</span> ) {: #keydown data-toc-label='keydown' }

********************************************************************
Forward to the KeyboardListener
********************************************************************

#### focusout( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)</span> ) {: #focusout data-toc-label='focusout' }

#### focusin( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)</span> ) {: #focusin data-toc-label='focusin' }

#### cancel() {: #cancel data-toc-label='cancel' }

#### click( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;MouseEvent&gt;</span> ) {: #click data-toc-label='click' }

********************************************************************
Forward to the DragListener
********************************************************************

#### touchenter( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #touchenter data-toc-label='touchenter' }

#### touchmove( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #touchmove data-toc-label='touchmove' }

#### focus( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)&lt;FocusEvent&gt;</span> ) {: #focus data-toc-label='focus' }

#### blur() {: #blur data-toc-label='blur' }

#### down( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #down data-toc-label='down' }

#### up( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #up data-toc-label='up' }

#### enter( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #enter data-toc-label='enter' }

#### move( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #move data-toc-label='move' }

#### exit( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #exit data-toc-label='exit' }

#### pointerUp( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #pointerUp data-toc-label='pointerUp' }

#### pointerCancel( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #pointerCancel data-toc-label='pointerCancel' }

#### pointerMove( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #pointerMove data-toc-label='pointerMove' }

#### pointerInterrupt() {: #pointerInterrupt data-toc-label='pointerInterrupt' }

### Instance Properties

#### dragListener : <span style="font-weight: 400;">[DragListener](../scenery/DragListener.md)</span> {: #dragListener data-toc-label='dragListener' }

(readonly)

The DragListener and KeyboardDragListener that are composed to create this listener. Public so that you can
add them to different Nodes if you need to, for cases where you need to access their properties directly,
or if you only need one of the listeners.

#### keyboardDragListener : <span style="font-weight: 400;">[KeyboardDragListener](../scenery/KeyboardDragListener.md)</span> {: #keyboardDragListener data-toc-label='keyboardDragListener' }

(readonly)

#### isPressedProperty : <span style="font-weight: 400;">[TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isPressedProperty data-toc-label='isPressedProperty' }

(readonly)

True if the listener is currently pressed (DragListener OR KeyboardDragListener).

#### hotkeys : <span style="font-weight: 400;">[Hotkey](../scenery/Hotkey.md)[]</span> {: #hotkeys data-toc-label='hotkeys' }

(readonly)

Implements TInputListener



## Type RichDragListenerOptions {: #RichDragListenerOptions }


```js
import type { RichDragListenerOptions } from 'scenerystack/scenery';
```


[AllDragListenerOptions](../scenery/AllDragListenerOptions.md)&lt;[DragListener](../scenery/DragListener.md) | [KeyboardDragListener](../scenery/KeyboardDragListener.md), [PressListenerDOMEvent](../scenery/PressListener.md#PressListenerDOMEvent) | [KeyboardDragListenerDOMEvent](../scenery/KeyboardDragListener.md#KeyboardDragListenerDOMEvent)&gt; &amp; { dragListenerOptions?: [DragListenerOptions](../scenery/DragListener.md#DragListenerOptions); keyboardDragListenerOptions?: [KeyboardDragListenerOptions](../scenery/KeyboardDragListener.md#KeyboardDragListenerOptions) }



## Source Code

See the source for [RichDragListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/RichDragListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
