# Sprites

## Overview

Meant for displaying a large amount of high-performance instances of sprites.
See https://github.com/phetsims/scenery/issues/990 for more information.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Sprites {: #Sprites }


```js
import { Sprites } from 'scenerystack/scenery';
```
### Constructor

#### new Sprites( providedOptions? : <span style="font-weight: 400;">[SpritesOptions](../scenery/Sprites.md#SpritesOptions)</span> ) {: #Sprites-constructor data-toc-label='new Sprites' }

### Instance Methods

#### setCanvasBounds( selfBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) {: #setCanvasBounds data-toc-label='setCanvasBounds' }

Sets the bounds that are used for layout/repainting.

These bounds should always cover at least the area where the Sprites will draw in. If this is violated, this
node may be partially or completely invisible in Scenery's output.

#### getCanvasBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getCanvasBounds data-toc-label='getCanvasBounds' }

Returns the previously-set canvasBounds, or Bounds2.NOTHING if it has not been set yet.

#### canvasPaintSelf( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #canvasPaintSelf data-toc-label='canvasPaintSelf' }

(protected)

Draws the current Node's self representation, assuming the wrapper's Canvas context is already in the local
coordinate frame of this node.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### containsPointSelf( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPointSelf data-toc-label='containsPointSelf' }

Computes whether the provided point is "inside" (contained) in this Node's self content, or "outside".

@param point - Considered to be in the local coordinate frame

#### getSpriteInstanceFromPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[SpriteInstance](../scenery/SpriteInstance.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSpriteInstanceFromPoint data-toc-label='getSpriteInstanceFromPoint' }

Finds which sprite instance is on top under a certain point (or null if none are).

#### getSelfShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getSelfShape data-toc-label='getSelfShape' }

Returns a Shape that represents the area covered by containsPointSelf.

#### isPainted() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPainted data-toc-label='isPainted' }

Whether this Node itself is painted (displays something itself).

#### invalidatePaint() {: #invalidatePaint data-toc-label='invalidatePaint' }

Should be called when this node needs to be repainted. When not called, Scenery assumes that this node does
NOT need to be repainted (although Scenery may repaint it due to other nodes needing to be repainted).

This sets a "dirty" flag, so that it will be repainted the next time it would be displayed.

#### mutate( options? : <span style="font-weight: 400;">[SpritesOptions](../scenery/Sprites.md#SpritesOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }



## Type SpritesOptions {: #SpritesOptions }


```js
import type { SpritesOptions } from 'scenerystack/scenery';
```


- **sprites**?: [Sprite](../scenery/Sprite.md)[]
<br>  Provide a fixed set of Sprite objects that will be used for this node. Currently, it cannot be modified after
  construction for simplicity of the implementation.
- **spriteInstances**?: [SpriteInstance](../scenery/SpriteInstance.md)[]
<br>  A reference to an Array of instances. This array can be (and should be)
  manipulated to adjust the displayed instances (their sprites/transforms/etc.). After this has been adjusted,
  invalidatePaint() should be called on the Sprites node.
- **hitTestSprites**?: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
<br>  Whether individual sprites will be hit-tested to determine what is a contained point (for hit
  testing, etc.). If false, the canvasBounds will be used for hit testing.
- **canvasBounds**?: [Bounds2](../dot/Bounds2.md)
- &amp; [NodeOptions](../scenery/Node.md#NodeOptions)




## Source Code

See the source for [Sprites.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Sprites.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
