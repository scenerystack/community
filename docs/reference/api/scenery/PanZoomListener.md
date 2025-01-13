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

#### new PanZoomListener( targetNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, providedOptions? : <span style="font-weight: 400; opacity: 80%;">PanZoomListenerOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### correctReposition() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #correctReposition data-toc-label='correctReposition' }

(protected)

If the targetNode is larger than the panBounds specified, keep the panBounds completely filled with
targetNode content.

#### addPress( press : <span style="font-weight: 400; opacity: 80%;">MultiListenerPress</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addPress data-toc-label='addPress' }

(protected)

If the transformed targetBounds are equal to the panBounds, there is no space for us to pan so do not change
the pointer cursor.

#### reposition() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reposition data-toc-label='reposition' }

(protected)

Reposition but keep content within this._panBounds.

#### resetTransform() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #resetTransform data-toc-label='resetTransform' }

Reset the transform on the targetNode and follow up by making sure that the content is still within panBounds.

#### setPanBounds( panBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setPanBounds data-toc-label='setPanBounds' }

Set the containing panBounds and then make sure that the targetBounds fully fill the new panBounds.

#### setTargetBounds( targetBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setTargetBounds data-toc-label='setTargetBounds' }

Set the targetBounds which should totally fill the panBounds at all times. Useful if the targetNode has bounds
which don't accurately describe the node. For instance, if an overlay plane is on top of the node and extends
beyond the dimensions of the visible node.

targetBounds - in the global coordinate frame

#### setTargetScale( scale : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setTargetScale data-toc-label='setTargetScale' }

Set the representative scale of the target Node. If the targetBounds are different from the targetNode.bounds
it may be useful to correct changes to panning and zooming by a scale that is different from the
actual scale applied to the targetNode during panning.

#### getTargetBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getTargetBounds data-toc-label='getTargetBounds' }

Get the targetBounds, in the global coordinate frame.

### Instance Properties

#### sourceFramePanBoundsProperty : <span style="font-weight: 400; opacity: 80%;">Property&lt;Bounds2&gt;</span> {: #sourceFramePanBoundsProperty data-toc-label='sourceFramePanBoundsProperty' }

(protected)

Only needed for PhET-iO instrumented. The pan bounds of the source so if the destination bounds are different due
to a differently sized iframe or self, this can be used to determine a correction for the destination
targetNode transform. This could be removed by work recommended in



## Source Code

See the source for [PanZoomListener.ts](https://github.com/phetsims/scenery/blob/main/js/listeners/PanZoomListener.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
