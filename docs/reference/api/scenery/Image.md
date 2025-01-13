# Image

## Overview

A node that displays a single image either from an actual HTMLImageElement, a URL, a Canvas element, or a mipmap
data structure described in the constructor.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Image {: #Image }


```js
import { Image } from 'scenerystack/scenery';
```
### Constructor

#### new Image( image : <span style="font-weight: 400;">[ImageableImage](../scenery/Imageable.md#ImageableImage) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[ImageableImage](../scenery/Imageable.md#ImageableImage)&gt;</span>, providedOptions? : <span style="font-weight: 400;">[ImageOptions](../scenery/Image.md#ImageOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### invalidateImage() {: #invalidateImage data-toc-label='invalidateImage' }

Triggers recomputation of the image's bounds and refreshes any displays output of the image.

Generally this can trigger recomputation of mipmaps, will mark any drawables as needing repaints, and will
cause a spritesheet change for WebGL.

This should be done when the underlying image has changed appearance (usually the case with a Canvas changing,
but this is also triggered by our actual image reference changing).

#### invalidateSupportedRenderers() {: #invalidateSupportedRenderers data-toc-label='invalidateSupportedRenderers' }

Recomputes what renderers are supported, given the current image information.

#### setImageOpacity( imageOpacity : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #setImageOpacity data-toc-label='setImageOpacity' }

Sets an opacity that is applied only to this image (will not affect children or the rest of the node's subtree).

This should generally be preferred over Node's opacity if it has the same result, as modifying this will be much
faster, and will not force additional Canvases or intermediate steps in display.

@param imageOpacity - Should be a number between 0 (transparent) and 1 (opaque), just like normal opacity.

#### setImageBounds( imageBounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #setImageBounds data-toc-label='setImageBounds' }

Sets the imageBounds value for the Image. If non-null, determines what is considered "inside" the image for
containment and hit-testing.

NOTE: This is accomplished by using any provided imageBounds as the node's own selfBounds. This will affect layout,
hit-testing, and anything else using the bounds of this node.

#### getImageBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getImageBounds data-toc-label='getImageBounds' }

Returns the imageBounds, see setImageBounds for details.

#### isPainted() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPainted data-toc-label='isPainted' }

Whether this Node itself is painted (displays something itself).

#### canvasPaintSelf( wrapper : <span style="font-weight: 400;">[CanvasContextWrapper](../scenery/CanvasContextWrapper.md)</span>, matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #canvasPaintSelf data-toc-label='canvasPaintSelf' }

(protected)

Draws the current Node's self representation, assuming the wrapper's Canvas context is already in the local
coordinate frame of this node.

@param wrapper
@param matrix - The transformation matrix already applied to the context.

#### containsPointSelf( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPointSelf data-toc-label='containsPointSelf' }

Override this for computation of whether a point is inside our self content (defaults to selfBounds check).

@param point - Considered to be in the local coordinate frame

#### getSelfShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getSelfShape data-toc-label='getSelfShape' }

Returns a Shape that represents the area covered by containsPointSelf.

#### invalidateMipmaps() {: #invalidateMipmaps data-toc-label='invalidateMipmaps' }

Triggers recomputation of mipmaps (as long as mipmapping is enabled)

#### mutate( options? : <span style="font-weight: 400;">[ImageOptions](../scenery/Image.md#ImageOptions)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #mutate data-toc-label='mutate' }

### Static Properties

#### ImageIO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #ImageIO data-toc-label='ImageIO' }

#### DEFAULT_IMAGE_OPTIONS {: #DEFAULT_IMAGE_OPTIONS data-toc-label='DEFAULT_IMAGE_OPTIONS' }

(readonly)

Initial values for most Node mutator options



## Source Code

See the source for [Image.ts](https://github.com/phetsims/scenery/blob/main/js/nodes/Image.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
