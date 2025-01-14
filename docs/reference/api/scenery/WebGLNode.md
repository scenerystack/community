# WebGLNode

## Overview

An abstract node (should be subtyped) that is drawn by user-provided custom WebGL code.

The region that can be drawn in is handled manually, by controlling the canvasBounds property of this WebGLNode.
Any regions outside of the canvasBounds will not be guaranteed to be drawn. This can be set with canvasBounds in the
constructor, or later with node.canvasBounds = bounds or setCanvasBounds( bounds ).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)

## Class WebGLNode {: #WebGLNode }


```js
import { WebGLNode } from 'scenerystack/scenery';
```
### Constructor

#### new WebGLNode( painterType : <span style="font-weight: 400;">WebGLNodePainterType</span>, options? : <span style="font-weight: 400;">[WebGLNodeOptions](../scenery/WebGLNode.md#WebGLNodeOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### setCanvasBounds( selfBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setCanvasBounds data-toc-label='setCanvasBounds' }

Sets the bounds that are used for layout/repainting.

These bounds should always cover at least the area where the WebGLNode will draw in. If this is violated, this
node may be partially or completely invisible in Scenery's output.

#### getCanvasBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getCanvasBounds data-toc-label='getCanvasBounds' }

Returns the previously-set canvasBounds, or Bounds2.NOTHING if it has not been set yet.

#### isPainted() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPainted data-toc-label='isPainted' }

Whether this Node itself is painted (displays something itself).

#### invalidatePaint() {: #invalidatePaint data-toc-label='invalidatePaint' }

Should be called when this node needs to be repainted. When not called, Scenery assumes that this node does
NOT need to be repainted (although Scenery may repaint it due to other nodes needing to be repainted).

This sets a "dirty" flag, so that it will be repainted the next time it would be displayed.

#### containsPointSelf( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPointSelf data-toc-label='containsPointSelf' }

Computes whether the provided point is "inside" (contained) in this Node's self content, or "outside".

If WebGLNode subtypes want to support being picked or hit-tested, it should override this function.

@param point - Considered to be in the local coordinate frame

#### getSelfShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getSelfShape data-toc-label='getSelfShape' }

Returns a Shape that represents the area covered by containsPointSelf.

#### renderToCanvasSelf( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #renderToCanvasSelf data-toc-label='renderToCanvasSelf' }

Renders this Node only (its self) into the Canvas wrapper, in its local coordinate frame.

@param wrapper
@param matrix - The current transformation matrix associated with the wrapper

#### mutate( options? : <span style="font-weight: 400;">[WebGLNodeOptions](../scenery/WebGLNode.md#WebGLNodeOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }

### Static Properties

#### PAINTED_NOTHING {: #PAINTED_NOTHING data-toc-label='PAINTED_NOTHING' }

(readonly)

Return code from painter.paint() when nothing was painted to the WebGL context.

#### PAINTED_SOMETHING {: #PAINTED_SOMETHING data-toc-label='PAINTED_SOMETHING' }

(readonly)

Return code from painter.paint() when something was painted to the WebGL context.



## Type WebGLNodeOptions {: #WebGLNodeOptions }


```js
import type { WebGLNodeOptions } from 'scenerystack/scenery';
```
- **canvasBounds**?: [Bounds2](../dot/Bounds2.md)
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Type WebGLNodePainter {: #WebGLNodePainter }


```js
import type { WebGLNodePainter } from 'scenerystack/scenery';
```
- **paint**: ( modelViewMatrix: [Matrix3](../dot/Matrix3.md), projectionMatrix: [Matrix3](../dot/Matrix3.md) ) =&gt; [WebGLNodePainterResult](../scenery/WebGLNode.md#WebGLNodePainterResult)
- **dispose**: () =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>




## Type WebGLNodePainterResult {: #WebGLNodePainterResult }


```js
import type { WebGLNodePainterResult } from 'scenerystack/scenery';
```
0 | 1



## Source Code

See the source for [WebGLNode.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/WebGLNode.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
