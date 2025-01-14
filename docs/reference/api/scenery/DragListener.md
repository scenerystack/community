# DragListener

## Overview

PressListener subtype customized for handling most drag-related listener needs.

DragListener uses some specific terminology that is helpful to understand:

- Drag target: The node whose trail is used for coordinate transforms. When a targetNode is specified, it will be the
               drag target. Otherwise, whatever was the currentTarget during event bubbling for the event that
               triggered press will be used (almost always the node that the listener is added to).
- Global coordinate frame: Coordinate frame of the Display (specifically its rootNode's local coordinate frame),
                           that in some applications will be screen coordinates.
- Parent coordinate frame: The parent coordinate frame of our drag target. Basically, it's the coordinate frame
                           you'd need to use to set dragTarget.translation = &lt;parent coordinate frame point&gt; for the
                           drag target to follow the pointer.
- Local coordinate frame: The local coordinate frame of our drag target, where (0,0) would be at the drag target's
                          origin.
- Model coordinate frame: Optionally defined by a model-view transform (treating the parent coordinate frame as the
                          view). When a transform is provided, it's the coordinate frame needed for setting
                          dragModelElement.position = &lt;model coordinate frame point&gt;. If a transform is not provided
                          (or overridden), it will be the same as the parent coordinate frame.

The typical coordinate handling of DragListener is to:
1. When a drag is started (with press), record the pointer's position in the local coordinate frame. This is visually
   where the pointer is over the drag target, and typically most drags will want to move the dragged element so that
   the pointer continues to be over this point.
2. When the pointer is moved, compute the new parent translation to keep the pointer on the same place on the
   dragged element.
3. (optionally) map that to a model position, and (optionally) move that model position to satisfy any constraints of
   where the element can be dragged (recomputing the parent/model translation as needed)
4. Apply the required translation (with a provided drag callback, using the positionProperty, or directly
   transforming the Node if translateNode:true).

For example usage, see scenery/examples/input.html

For most PhET model-view usage, it's recommended to include a model position Property as the `positionProperty`
option, along with the `transform` option specifying the MVT. By default, this will then assume that the Node with
the listener is positioned in the "view" coordinate frame, and will properly handle offsets and transformations.
It is assumed that when the model `positionProperty` changes, that the position of the Node would also change.
If it's another Node being transformed, please use the `targetNode` option to specify which Node is being
transformed. If something more complicated than a Node being transformed is going on (like positioning multiple
items, positioning based on the center, changing something in CanvasNode), it's recommended to pass the
`useParentOffset` option (so that the DragListener will NOT try to compute offsets based on the Node's position), or
to use `applyOffset:false` (effectively having drags reposition the Node so that the origin is at the pointer).

The typical PhET usage would look like:

  new DragListener( {
    positionProperty: someObject.positionProperty,
    transform: modelViewTransform
  } )

Additionally, for PhET usage it's also fine NOT to hook into a `positionProperty`. Typically using start/end/drag,
and values can be read out (like `modelPoint`, `localPoint`, `parentPoint`, `modelDelta`) from the listener to do
operations. For instance, if deltas and model positions are the only thing desired:

  new DragListener( {
    drag: ( event, listener ) =&gt; {
      doSomethingWith( listener.modelDelta, listener.modelPoint );
    }
  } )

It's completely fine to use one DragListener with multiple objects, however this isn't done as much since specifying
positionProperty only works with ONE model position Property (so if things are backed by the same Property it would
be fine). Doing things based on modelPoint/modelDelta/etc. should be completely fine using one listener with
multiple nodes. The typical pattern IS creating one DragListener per draggable view Node.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DragListener {: #DragListener }


```js
import { DragListener } from 'scenerystack/scenery';
```
### Constructor

#### new DragListener( providedOptions? : <span style="font-weight: 400;">[DragListenerOptions](../scenery/DragListener.md#DragListenerOptions)&lt;[PressedDragListener](../scenery/DragListener.md#PressedDragListener)&gt;</span> ) {: #DragListener-constructor data-toc-label='new DragListener' }

### Instance Methods

#### press( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span>, targetNode? : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, callback? : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #press data-toc-label='press' }

Attempts to start a drag with a press.

NOTE: This is safe to call externally in order to attempt to start a press. dragListener.canPress( event ) can
be used to determine whether this will actually start a drag.

@param event
@param [targetNode] - If provided, will take the place of the targetNode for this call. Useful for forwarded presses.
@param [callback] - to be run at the end of the function, but only on success
@returns success - Returns whether the press was actually started

#### release( event? : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span>, callback? : <span style="font-weight: 400;">() =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #release data-toc-label='release' }

Stops the drag.

This can be called from the outside to stop the drag without the pointer having actually fired any 'up'
events. If the cancel/interrupt behavior is more preferable, call interrupt() on this listener instead.

@param [event] - scenery event if there was one
@param [callback] - called at the end of the release

#### canClick() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #canClick data-toc-label='canClick' }

Components using DragListener should generally not be activated with a click. A single click from alternative
input would pick up the component then immediately release it. But occasionally that is desirable and can be
controlled with the canClick option.

#### drag( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #drag data-toc-label='drag' }

Called when move events are fired on the attached pointer listener during a drag.

#### tryTouchSnag( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) {: #tryTouchSnag data-toc-label='tryTouchSnag' }

Attempts to start a touch snag, given a SceneryEvent.

Should be safe to be called externally with an event.

#### getGlobalPoint() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getGlobalPoint data-toc-label='getGlobalPoint' }

Returns a defensive copy of the local-coordinate-frame point of the drag.

#### getLocalPoint() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getLocalPoint data-toc-label='getLocalPoint' }

Returns a defensive copy of the local-coordinate-frame point of the drag.

#### getParentPoint() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getParentPoint data-toc-label='getParentPoint' }

Returns a defensive copy of the parent-coordinate-frame point of the drag.

#### getModelPoint() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getModelPoint data-toc-label='getModelPoint' }

Returns a defensive copy of the model-coordinate-frame point of the drag.

#### getModelDelta() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getModelDelta data-toc-label='getModelDelta' }

Returns a defensive copy of the model-coordinate-frame delta.

#### globalToParentPoint( globalPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #globalToParentPoint data-toc-label='globalToParentPoint' }

(protected)

Maps a point from the global coordinate frame to our drag target's parent coordinate frame.

NOTE: This mutates the input vector (for performance)

Should be overridden if a custom transformation is needed.

#### parentToLocalPoint( parentPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #parentToLocalPoint data-toc-label='parentToLocalPoint' }

(protected)

Maps a point from the drag target's parent coordinate frame to its local coordinate frame.

NOTE: This mutates the input vector (for performance)

Should be overridden if a custom transformation is needed.

#### localToParentPoint( localPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #localToParentPoint data-toc-label='localToParentPoint' }

(protected)

Maps a point from the drag target's local coordinate frame to its parent coordinate frame.

NOTE: This mutates the input vector (for performance)

Should be overridden if a custom transformation is needed.

#### parentToModelPoint( parentPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #parentToModelPoint data-toc-label='parentToModelPoint' }

(protected)

Maps a point from the drag target's parent coordinate frame to the model coordinate frame.

NOTE: This mutates the input vector (for performance)

Should be overridden if a custom transformation is needed. Note that by default, unless a transform is provided,
the parent coordinate frame will be the same as the model coordinate frame.

#### modelToParentPoint( modelPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #modelToParentPoint data-toc-label='modelToParentPoint' }

(protected)

Maps a point from the model coordinate frame to the drag target's parent coordinate frame.

NOTE: This mutates the input vector (for performance)

Should be overridden if a custom transformation is needed. Note that by default, unless a transform is provided,
the parent coordinate frame will be the same as the model coordinate frame.

#### mapModelPoint( modelPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #mapModelPoint data-toc-label='mapModelPoint' }

(protected)

Apply a mapping from the drag target's model position to an allowed model position.

A common example is using dragBounds, where the position of the drag target is constrained to within a bounding
box. This is done by mapping points outside the bounding box to the closest position inside the box. More
general mappings can be used.

Should be overridden (or use mapPosition) if a custom transformation is needed.

@returns - A point in the model coordinate frame

#### applyParentOffset( parentPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #applyParentOffset data-toc-label='applyParentOffset' }

(protected)

Mutates the parentPoint given to account for the initial pointer's offset from the drag target's origin.

#### reposition( globalPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #reposition data-toc-label='reposition' }

Triggers an update of the drag position, potentially changing position properties.

Should be called when something that changes the output positions of the drag occurs (most often, a drag event
itself).

#### getDragBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getDragBounds data-toc-label='getDragBounds' }

Returns the drag bounds of the listener.

#### setTransform( transform : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Transform3](../dot/Transform3.md)&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setTransform data-toc-label='setTransform' }

Sets the drag transform of the listener.

#### getTransform() : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[Transform3](../dot/Transform3.md)&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getTransform data-toc-label='getTransform' }

Returns the transform of the listener.

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Interrupts the listener, releasing it (canceling behavior).

This effectively releases/ends the press, and sets the `interrupted` flag to true while firing these events
so that code can determine whether a release/end happened naturally, or was canceled in some way.

This can be called manually, but can also be called through node.interruptSubtreeInput().

#### canPress( event : <span style="font-weight: 400;">[PressListenerEvent](../scenery/PressListener.md#PressListenerEvent)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #canPress data-toc-label='canPress' }

Returns whether a press can be started with a particular event.

#### dispose() {: #dispose data-toc-label='dispose' }

Disposes the listener, releasing references. It should not be used after this.

### Instance Properties

#### isUserControlledProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>&gt;</span> {: #isUserControlledProperty data-toc-label='isUserControlledProperty' }

Alias for isPressedProperty (as this name makes more sense for dragging)

### Static Methods

#### createForwardingListener( down : <span style="font-weight: 400;">( event: [PressListenerEvent](../scenery/PressListener.md#PressListenerEvent) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span>, providedOptions? : <span style="font-weight: 400;">CreateForwardingListenerOptions</span> ) : <span style="font-weight: 400;">[TInputListener](../scenery/TInputListener.md)</span> {: #createForwardingListener data-toc-label='createForwardingListener' }

Creates an input listener that forwards events to the specified input listener. The target listener should
probably be using PressListener.options.targetNode so that the forwarded drag has the correct Trail

See https://github.com/phetsims/scenery/issues/639



## Type DragListenerOptions {: #DragListenerOptions }


```js
import type { DragListenerOptions } from 'scenerystack/scenery';
```


- **allowTouchSnag**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **applyOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **useParentOffset**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **trackAncestors**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **offsetPosition**?: OffsetPosition&lt;Listener&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **canClick**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- &amp; [AllDragListenerOptions](../scenery/AllDragListenerOptions.md)&lt;Listener, [PressListenerDOMEvent](../scenery/PressListener.md#PressListenerDOMEvent)&gt; &amp; [PressListenerOptions](../scenery/PressListener.md#PressListenerOptions)&lt;Listener&gt;




## Type PressedDragListener {: #PressedDragListener }


```js
import type { PressedDragListener } from 'scenerystack/scenery';
```


[DragListener](../scenery/DragListener.md) &amp; [PressedPressListener](../scenery/PressListener.md#PressedPressListener)



## Source Code

See the source for [DragListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/DragListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
