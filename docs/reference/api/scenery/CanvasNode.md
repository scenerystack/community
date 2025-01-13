# CanvasNode

## Overview

An abstract node (should be subtyped) that is drawn by user-provided custom Canvas code.

The region that can be drawn in is handled manually, by controlling the canvasBounds property of this CanvasNode.
Any regions outside of the canvasBounds will not be guaranteed to be drawn. This can be set with canvasBounds in the
constructor, or later with node.canvasBounds = bounds or setCanvasBounds( bounds ).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class CanvasNode {: #CanvasNode }


```js
import { CanvasNode } from 'scenerystack/scenery';
```
### Constructor

#### new CanvasNode( options? : <span style="font-weight: 400; opacity: 80%;">CanvasNodeOptions</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setCanvasBounds( selfBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #setCanvasBounds data-toc-label='setCanvasBounds' }

Sets the bounds that are used for layout/repainting.

These bounds should always cover at least the area where the CanvasNode will draw in. If this is violated, this
node may be partially or completely invisible in Scenery's output.

#### getCanvasBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getCanvasBounds data-toc-label='getCanvasBounds' }

Returns the previously-set canvasBounds, or Bounds2.NOTHING if it has not been set yet.

#### isPainted() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isPainted data-toc-label='isPainted' }

Whether this Node itself is painted (displays something itself).

#### paintCanvas( context : <span style="font-weight: 400; opacity: 80%;">CanvasRenderingContext2D</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #paintCanvas data-toc-label='paintCanvas' }

Override paintCanvas with a faster version, since fillRect and drawRect don't affect the current default path.

IMPORTANT NOTE: This function will be run from inside Scenery's Display.updateDisplay(), so it should not modify
or mutate any Scenery nodes (particularly anything that would cause something to be marked as needing a repaint).
Ideally, this function should have no outside effects other than painting to the Canvas provided.

#### invalidatePaint() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #invalidatePaint data-toc-label='invalidatePaint' }

Should be called when this node needs to be repainted. When not called, Scenery assumes that this node does
NOT need to be repainted (although Scenery may repaint it due to other nodes needing to be repainted).

This sets a "dirty" flag, so that it will be repainted the next time it would be displayed.

#### canvasPaintSelf( wrapper : <span style="font-weight: 400; opacity: 80%;">CanvasContextWrapper</span>, matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #canvasPaintSelf data-toc-label='canvasPaintSelf' }

(protected)

Draws the current Node's self representation, assuming the wrapper's Canvas context is already in the local
coordinate frame of this node.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### containsPointSelf( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #containsPointSelf data-toc-label='containsPointSelf' }

Computes whether the provided point is "inside" (contained) in this Node's self content, or "outside".

If CanvasNode subtypes want to support being picked or hit-tested, it should override this function.

@param point - Considered to be in the local coordinate frame

#### getSelfShape() : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #getSelfShape data-toc-label='getSelfShape' }

Returns a Shape that represents the area covered by containsPointSelf.

#### mutate( options? : <span style="font-weight: 400; opacity: 80%;">CanvasNodeOptions</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #mutate data-toc-label='mutate' }



## Source Code

See the source for [CanvasNode.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/CanvasNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
