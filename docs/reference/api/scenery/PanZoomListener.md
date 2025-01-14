# PanZoomListener

## Overview

A MultiListener that is designed to pan and zoom a target Node, where you can provide limiting and
describing bounds so that the targetNode is limited to a region.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Jesse Greenberg (PhET Interactive Simulations)

## Class PanZoomListener {: #PanZoomListener }


```js
import { PanZoomListener } from 'scenerystack/scenery';
```
### Constructor

#### new PanZoomListener( targetNode : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, providedOptions? : <span style="font-weight: 400;">[PanZoomListenerOptions](../scenery/PanZoomListener.md#PanZoomListenerOptions)</span> ) {: #PanZoomListener-constructor data-toc-label='new PanZoomListener' }

### Instance Methods

#### correctReposition() {: #correctReposition data-toc-label='correctReposition' }

(protected)

If the targetNode is larger than the panBounds specified, keep the panBounds completely filled with
targetNode content.

#### addPress( press : <span style="font-weight: 400;">[MultiListenerPress](../scenery/MultiListenerPress.md)</span> ) {: #addPress data-toc-label='addPress' }

(protected)

If the transformed targetBounds are equal to the panBounds, there is no space for us to pan so do not change
the pointer cursor.

#### reposition() {: #reposition data-toc-label='reposition' }

(protected)

Reposition but keep content within this._panBounds.

#### resetTransform() {: #resetTransform data-toc-label='resetTransform' }

Reset the transform on the targetNode and follow up by making sure that the content is still within panBounds.

#### setPanBounds( panBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) {: #setPanBounds data-toc-label='setPanBounds' }

Set the containing panBounds and then make sure that the targetBounds fully fill the new panBounds.

#### setTargetBounds( targetBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) {: #setTargetBounds data-toc-label='setTargetBounds' }

Set the targetBounds which should totally fill the panBounds at all times. Useful if the targetNode has bounds
which don't accurately describe the node. For instance, if an overlay plane is on top of the node and extends
beyond the dimensions of the visible node.

targetBounds - in the global coordinate frame

#### setTargetScale( scale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setTargetScale data-toc-label='setTargetScale' }

Set the representative scale of the target Node. If the targetBounds are different from the targetNode.bounds
it may be useful to correct changes to panning and zooming by a scale that is different from the
actual scale applied to the targetNode during panning.

#### getTargetBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getTargetBounds data-toc-label='getTargetBounds' }

Get the targetBounds, in the global coordinate frame.

### Instance Properties

#### sourceFramePanBoundsProperty : <span style="font-weight: 400;">[Property](../axon/Property.md)&lt;[Bounds2](../dot/Bounds2.md)&gt;</span> {: #sourceFramePanBoundsProperty data-toc-label='sourceFramePanBoundsProperty' }

(protected)

Only needed for PhET-iO instrumented. The pan bounds of the source so if the destination bounds are different due
to a differently sized iframe or self, this can be used to determine a correction for the destination
targetNode transform. This could be removed by work recommended in



## Type PanZoomListenerOptions {: #PanZoomListenerOptions }


```js
import type { PanZoomListenerOptions } from 'scenerystack/scenery';
```


- **panBounds**?: [Bounds2](../dot/Bounds2.md)
<br>  these bounds should be fully filled with content at all times, in the global coordinate frame
- **targetBounds**?: [Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
<br>  Bounds for the target node that get transformed with this listener and fill panBounds,
  useful if the targetNode bounds do not accurately describe the targetNode (like if invisible content
  extends off screen). Defaults to targetNode bounds if null. Bounds in the global coordinate frame of the
  target Node.
- **targetScale**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
<br>  Scale that accurately describes scale of the targetNode, but is different from the actual scale of the
  targetNode's transform. This scale is applied to translation Vectors for the TargetNode during panning. If
  targetNode children get scaled uniformly (such as in response to self resizing or native browser zoom), you
  likely want that scale to be applied during translation operations so that pan/zoom behaves
  the same regardless of self size or native browser zoom.
- &amp; [MultiListenerOptions](../scenery/MultiListener.md#MultiListenerOptions)




## Source Code

See the source for [PanZoomListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/PanZoomListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
