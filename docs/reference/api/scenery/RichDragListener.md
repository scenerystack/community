# RichDragListener

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

#### new RichDragListener( providedOptions? : <span style="font-weight: 400; opacity: 80%;">RichDragListenerOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### dispose() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #dispose data-toc-label='dispose' }

#### interrupt() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #interrupt data-toc-label='interrupt' }

********************************************************************
Forward input to both listeners
********************************************************************

#### keydown( event : <span style="font-weight: 400; opacity: 80%;">SceneryEvent&lt;KeyboardEvent&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #keydown data-toc-label='keydown' }

********************************************************************
Forward to the KeyboardListener
********************************************************************

#### focusout( event : <span style="font-weight: 400; opacity: 80%;">SceneryEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #focusout data-toc-label='focusout' }

#### focusin( event : <span style="font-weight: 400; opacity: 80%;">SceneryEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #focusin data-toc-label='focusin' }

#### cancel() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #cancel data-toc-label='cancel' }

#### click( event : <span style="font-weight: 400; opacity: 80%;">SceneryEvent&lt;MouseEvent&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #click data-toc-label='click' }

********************************************************************
Forward to the DragListener
********************************************************************

#### touchenter( event : <span style="font-weight: 400; opacity: 80%;">PressListenerEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #touchenter data-toc-label='touchenter' }

#### touchmove( event : <span style="font-weight: 400; opacity: 80%;">PressListenerEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #touchmove data-toc-label='touchmove' }

#### focus( event : <span style="font-weight: 400; opacity: 80%;">SceneryEvent&lt;FocusEvent&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #focus data-toc-label='focus' }

#### blur() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #blur data-toc-label='blur' }

#### down( event : <span style="font-weight: 400; opacity: 80%;">PressListenerEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #down data-toc-label='down' }

#### up( event : <span style="font-weight: 400; opacity: 80%;">PressListenerEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #up data-toc-label='up' }

#### enter( event : <span style="font-weight: 400; opacity: 80%;">PressListenerEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #enter data-toc-label='enter' }

#### move( event : <span style="font-weight: 400; opacity: 80%;">PressListenerEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #move data-toc-label='move' }

#### exit( event : <span style="font-weight: 400; opacity: 80%;">PressListenerEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #exit data-toc-label='exit' }

#### pointerUp( event : <span style="font-weight: 400; opacity: 80%;">PressListenerEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #pointerUp data-toc-label='pointerUp' }

#### pointerCancel( event : <span style="font-weight: 400; opacity: 80%;">PressListenerEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #pointerCancel data-toc-label='pointerCancel' }

#### pointerMove( event : <span style="font-weight: 400; opacity: 80%;">PressListenerEvent</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #pointerMove data-toc-label='pointerMove' }

#### pointerInterrupt() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #pointerInterrupt data-toc-label='pointerInterrupt' }

### Instance Properties

#### dragListener : <span style="font-weight: 400; opacity: 80%;">DragListener</span> {: #dragListener data-toc-label='dragListener' }

(readonly)

The DragListener and KeyboardDragListener that are composed to create this listener. Public so that you can
add them to different Nodes if you need to, for cases where you need to access their properties directly,
or if you only need one of the listeners.

#### keyboardDragListener : <span style="font-weight: 400; opacity: 80%;">KeyboardDragListener</span> {: #keyboardDragListener data-toc-label='keyboardDragListener' }

(readonly)

#### isPressedProperty : <span style="font-weight: 400; opacity: 80%;">TReadOnlyProperty&lt;boolean&gt;</span> {: #isPressedProperty data-toc-label='isPressedProperty' }

(readonly)

True if the listener is currently pressed (DragListener OR KeyboardDragListener).

#### hotkeys : <span style="font-weight: 400; opacity: 80%;">Hotkey[]</span> {: #hotkeys data-toc-label='hotkeys' }

(readonly)

Implements TInputListener



## Source Code

See the source for [RichDragListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/RichDragListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
