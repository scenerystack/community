# MultiListener

## Overview

MultiListener is responsible for monitoring the mouse, touch, and other presses on the screen and determines the
operations to apply to a target Node from this input. Single touch dragging on the screen will initiate
panning. Multi-touch gestures will initiate scaling, translation, and potentially rotation depending on
the gesture.

MultiListener will keep track of all "background" presses on the screen. When certain conditions are met, the
"background" presses become active and attached listeners may be interrupted so that the MultiListener
gestures take precedence. MultiListener uses the Intent feature of Pointer, so that the default behavior of this
listener can be prevented if necessary. Generally, you would use Pointer.reserveForDrag() to indicate
that your Node is intended for other input that should not be interrupted by this listener.

For example usage, see scenery/examples/input.html. A typical "simple" MultiListener usage
would be something like:

   display.addInputListener( new PressListener( targetNode ) );

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Jesse Greenberg

## Class MultiListener {: #MultiListener }


```js
import { MultiListener } from 'scenerystack/scenery';
```
### Constructor

#### new MultiListener( targetNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[MultiListenerOptions](../scenery/MultiListener.md#MultiListenerOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### addPress( press : <span style="font-weight: 400;">[MultiListenerPress](../scenery/MultiListenerPress.md)</span> ) {: #addPress data-toc-label='addPress' }

(protected)

Add a Press to this listener when a new Pointer is down.

#### movePress( press : <span style="font-weight: 400;">[MultiListenerPress](../scenery/MultiListenerPress.md)</span> ) {: #movePress data-toc-label='movePress' }

(protected)

Reposition in response to movement of any Presses.

#### removePress( press : <span style="font-weight: 400;">[MultiListenerPress](../scenery/MultiListenerPress.md)</span> ) {: #removePress data-toc-label='removePress' }

(protected)

Remove a Press from this listener.

#### reposition() {: #reposition data-toc-label='reposition' }

(protected)

Reposition the target Node (including all apsects of transformation) of this listener's target Node.

#### recomputeLocals() {: #recomputeLocals data-toc-label='recomputeLocals' }

(protected)

Recompute the local points of the Presses for this listener, relative to the target Node.

#### interrupt() {: #interrupt data-toc-label='interrupt' }

Interrupt this listener.

#### computeTranslationMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #computeTranslationMatrix data-toc-label='computeTranslationMatrix' }

Compute a translation matrix from multiple presses. Usually multiple presses will have some scale or rotation
as well, but this is to be used if rotation and scale are not enabled for this listener.

#### limitScale( scale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #limitScale data-toc-label='limitScale' }

(protected)

Limit the provided scale by constraints of this MultiListener.

#### getCurrentScale() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCurrentScale data-toc-label='getCurrentScale' }

Get the current scale on the target Node, assumes that there is isometric scaling in both x and y.

#### resetTransform() {: #resetTransform data-toc-label='resetTransform' }

Reset transform on the target Node.

### Instance Properties

#### matrixProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;[Matrix3](../dot/Matrix3.md)&gt;</span> {: #matrixProperty data-toc-label='matrixProperty' }

(readonly)

{Property.&lt;Matrix3&gt;} - The matrix applied to the targetNode in response to various input for the MultiListener



## Source Code

See the source for [MultiListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/MultiListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
