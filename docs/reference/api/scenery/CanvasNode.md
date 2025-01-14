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

#### new CanvasNode( options? : <span style="font-weight: 400;">[CanvasNodeOptions](../scenery/CanvasNode.md#CanvasNodeOptions)</span> ) {: #CanvasNode-constructor data-toc-label='new CanvasNode' }

### Instance Methods

#### setCanvasBounds( selfBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) {: #setCanvasBounds data-toc-label='setCanvasBounds' }

Sets the bounds that are used for layout/repainting.

These bounds should always cover at least the area where the CanvasNode will draw in. If this is violated, this
node may be partially or completely invisible in Scenery's output.

#### getCanvasBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getCanvasBounds data-toc-label='getCanvasBounds' }

Returns the previously-set canvasBounds, or Bounds2.NOTHING if it has not been set yet.

#### isPainted() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPainted data-toc-label='isPainted' }

Whether this Node itself is painted (displays something itself).

#### paintCanvas( context : <span style="font-weight: 400;">CanvasRenderingContext2D</span> ) {: #paintCanvas data-toc-label='paintCanvas' }

Override paintCanvas with a faster version, since fillRect and drawRect don't affect the current default path.

IMPORTANT NOTE: This function will be run from inside Scenery's Display.updateDisplay(), so it should not modify
or mutate any Scenery nodes (particularly anything that would cause something to be marked as needing a repaint).
Ideally, this function should have no outside effects other than painting to the Canvas provided.

#### invalidatePaint() {: #invalidatePaint data-toc-label='invalidatePaint' }

Should be called when this node needs to be repainted. When not called, Scenery assumes that this node does
NOT need to be repainted (although Scenery may repaint it due to other nodes needing to be repainted).

This sets a "dirty" flag, so that it will be repainted the next time it would be displayed.

#### canvasPaintSelf( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #canvasPaintSelf data-toc-label='canvasPaintSelf' }

(protected)

Draws the current Node's self representation, assuming the wrapper's Canvas context is already in the local
coordinate frame of this node.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### containsPointSelf( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPointSelf data-toc-label='containsPointSelf' }

Computes whether the provided point is "inside" (contained) in this Node's self content, or "outside".

If CanvasNode subtypes want to support being picked or hit-tested, it should override this function.

@param point - Considered to be in the local coordinate frame

#### getSelfShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getSelfShape data-toc-label='getSelfShape' }

Returns a Shape that represents the area covered by containsPointSelf.

#### mutate( options? : <span style="font-weight: 400;">[CanvasNodeOptions](../scenery/CanvasNode.md#CanvasNodeOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }



## Type CanvasNodeOptions {: #CanvasNodeOptions }


```js
import type { CanvasNodeOptions } from 'scenerystack/scenery';
```


- **canvasBounds**?: [Bounds2](../dot/Bounds2.md)
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [CanvasNode.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/CanvasNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
