# AnimatedPanZoomListener

## Overview

A PanZoomListener that supports additional forms of input for pan and zoom, including trackpad gestures, mouse
wheel, and keyboard input. These gestures will animate the target node to its destination translation and scale so it
uses a step function that must be called every animation frame.

@author Jesse Greenberg

## Class AnimatedPanZoomListener {: #AnimatedPanZoomListener }


```js
import { AnimatedPanZoomListener } from 'scenerystack/scenery';
```
### Constructor

#### new AnimatedPanZoomListener( targetNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[PanZoomListenerOptions](../scenery/PanZoomListener.md#PanZoomListenerOptions)</span> ) {: #AnimatedPanZoomListener-constructor data-toc-label='new AnimatedPanZoomListener' }

### Instance Methods

#### step( dt : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #step data-toc-label='step' }

Step the listener, supporting any animation as the target node is transformed to target position and scale.

#### down( event : <span style="font-weight: 400;">[SceneryEvent](../scenery/SceneryEvent.md)</span> ) {: #down data-toc-label='down' }

Attach a MiddlePress for drag panning, if detected.

#### movePress( press : <span style="font-weight: 400;">[MultiListenerPress](../scenery/MultiListenerPress.md)</span> ) {: #movePress data-toc-label='movePress' }

(protected)

Listener for the attached pointer on move. Only move if a middle press is not currently down.

#### handleFocusChange( focus : <span style="font-weight: 400;">[Focus](../scenery/Focus.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, previousFocus : <span style="font-weight: 400;">[Focus](../scenery/Focus.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #handleFocusChange data-toc-label='handleFocusChange' }

Handle a change of focus by immediately panning so that the focused Node is in view. Also sets up the
TransformTracker which will automatically keep the target in the viewport as it is animates, and a listener
on the focusPanTargetBoundsProperty (if provided) to handle Node other size or custom changes.

#### handleZoomCommands( domEvent : <span style="font-weight: 400;">Event</span> ) {: #handleZoomCommands data-toc-label='handleZoomCommands' }

Handle zoom commands from a keyboard.

#### translateToTarget( initialPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, targetPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) {: #translateToTarget data-toc-label='translateToTarget' }

Translate the targetNode from a local point to a target point. Both points should be in the global coordinate
frame.
@param initialPoint - in global coordinate frame, source position
@param targetPoint - in global coordinate frame, target position

#### correctReposition() {: #correctReposition data-toc-label='correctReposition' }

(protected)

Upon any kind of reposition, update the source position and scale for the next update in animateToTargets.

Note: This assumes that any kind of repositioning of the target node will eventually call correctReposition.

#### addPress( press : <span style="font-weight: 400;">[MultiListenerPress](../scenery/MultiListenerPress.md)</span> ) {: #addPress data-toc-label='addPress' }

(protected)

When a new press begins, stop any in progress animation.

#### removePress( press : <span style="font-weight: 400;">[MultiListenerPress](../scenery/MultiListenerPress.md)</span> ) {: #removePress data-toc-label='removePress' }

(protected)

When presses are removed, reset animation destinations.

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Interrupt the listener. Cancels any active input and clears references upon interaction end.

#### cancel() {: #cancel data-toc-label='cancel' }

"Cancel" the listener, when input stops abnormally. Part of the scenery Input API.

#### panToNode( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, panToCenter : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, panDirection? : <span style="font-weight: 400;">[LimitPanDirection](../scenery/ParallelDOM.md#LimitPanDirection) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #panToNode data-toc-label='panToNode' }

Pan to a provided Node, attempting to place the node in the center of the transformedPanBounds. It may not end
up exactly in the center since we have to make sure panBounds are completely filled with targetNode content.

You can conditionally not pan to the center by setting panToCenter to false. Sometimes shifting the screen so
that the Node is at the center is too jarring.

@param node - Node to pan to
@param panToCenter - If true, listener will pan so that the Node is at the center of the screen. Otherwise, just
                     until the Node is fully displayed in the viewport.
@param panDirection - if provided, we will only pan in the direction specified, null for all directions

#### setPanBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) {: #setPanBounds data-toc-label='setPanBounds' }

Set the containing panBounds and then make sure that the targetBounds fully fill the new panBounds. Updates
bounds that trigger panning during a drag operation.

#### setTargetBounds( targetBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) {: #setTargetBounds data-toc-label='setTargetBounds' }

Upon setting target bounds, re-set source and destination positions.

#### resetTransform() {: #resetTransform data-toc-label='resetTransform' }

Reset all transformations on the target node, and reset destination targets to source values to prevent any
in progress animation.

#### dispose() {: #dispose data-toc-label='dispose' }

### Instance Properties

#### animatingProperty : <span style="font-weight: 400;">[BooleanProperty](../axon/BooleanProperty.md)</span> {: #animatingProperty data-toc-label='animatingProperty' }

(readonly)

True when the listener is actively panning or zooming to the destination position and scale. Updated in the
animation frame.



## Source Code

See the source for [AnimatedPanZoomListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/AnimatedPanZoomListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
