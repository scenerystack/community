# ClosestDragForwardingListener

## Overview

A Scenery input listener that is able to find the closest in a list of items to a "down" event and trigger an action
(usually a drag) on that item. Usually this will be a drag listener start/press (e.g. SimpleDragHandler/DragListener),
but could accommodate other uses. It's similar in use to DragListener.createForwardingListener.

Handles items of the form:
{
  startDrag: function( event ),
  computeDistance: function( globalPoint ) : number
}

@author Jonathan Olson (PhET Interactive Simulations)

## Class ClosestDragForwardingListener {: #ClosestDragForwardingListener }


```js
import { ClosestDragForwardingListener } from 'scenerystack/sun';
```
### Constructor

#### new ClosestDragForwardingListener( touchThreshold : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, mouseThreshold : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #ClosestDragForwardingListener-constructor data-toc-label='new ClosestDragForwardingListener' }

### Instance Methods

#### addDraggableItem( item : <span style="font-weight: 400;">DraggableItem</span> ) {: #addDraggableItem data-toc-label='addDraggableItem' }

Adds an item that can be dragged.

#### removeDraggableItem( item : <span style="font-weight: 400;">DraggableItem</span> ) {: #removeDraggableItem data-toc-label='removeDraggableItem' }

Removes a previously-added item.

#### down( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #down data-toc-label='down' }

Called on pointer down.



## Source Code

See the source for [ClosestDragForwardingListener.ts](https://github.com/phetsims/sun/blob/main/js/ClosestDragForwardingListener.ts) in the [sun](https://github.com/phetsims/sun) repository.
