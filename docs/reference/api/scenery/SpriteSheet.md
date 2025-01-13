# SpriteSheet

## Overview

A single Canvas/texture with multiple different images (sprites) drawn internally. During rendering, this texture
can be used in one draw call to render multiple different images by providing UV coordinates to each quad for each
image to be drawn.

Note that the WebGL texture part is not required to be run - the Canvas-only part can be used functionally without
any WebGL dependencies.

TODO: How to use custom mipmap levels? https://github.com/phetsims/scenery/issues/1581

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Sam Reid (PhET Interactive Simulations)

## Class SpriteSheet {: #SpriteSheet }


```js
import { SpriteSheet } from 'scenerystack/scenery';
```
### Constructor

#### new SpriteSheet( useMipmaps : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initializeContext( gl : <span style="font-weight: 400; opacity: 80%;">WebGLRenderingContext</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #initializeContext data-toc-label='initializeContext' }

Initialize (or reinitialize) ourself with a new GL context. Should be called at least once before updateTexture()

NOTE: Should be safe to call with a different context (will recreate a different texture) should this be needed
      for things like context loss.

#### updateTexture() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #updateTexture data-toc-label='updateTexture' }

Updates a pre-existing texture with our current Canvas.

#### addImage( image : <span style="font-weight: 400; opacity: 80%;">HTMLCanvasElement | HTMLImageElement</span>, width : <span style="font-weight: 400; opacity: 80%;">number</span>, height : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Sprite | null</span> {: #addImage data-toc-label='addImage' }

Adds an image (if possible) to our sprite sheet. If successful, will return a {Sprite}, otherwise null.

@param image
@param width - Passed in, since it may not be fully loaded yet?
@param height - Passed in, since it may not be fully loaded yet?

#### removeImage( image : <span style="font-weight: 400; opacity: 80%;">HTMLCanvasElement | HTMLImageElement</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeImage data-toc-label='removeImage' }

Removes an image from our spritesheet. (Removes one from the amount it is used, and if it is 0, gets actually
removed).

#### containsImage( image : <span style="font-weight: 400; opacity: 80%;">HTMLCanvasElement | HTMLImageElement</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #containsImage data-toc-label='containsImage' }

Whether the sprite for the specified image is handled by this spritesheet. It can be either used or unused, but
addImage() calls with the specified image should be extremely fast (no need to modify the Canvas or texture).

### Instance Properties

#### texture : <span style="font-weight: 400; opacity: 80%;">WebGLTexture | null</span> {: #texture data-toc-label='texture' }

### Static Properties

#### Sprite : <span style="font-weight: 400; opacity: 80%;">typeof Sprite</span> {: #Sprite data-toc-label='Sprite' }

#### MAX_DIMENSION {: #MAX_DIMENSION data-toc-label='MAX_DIMENSION' }

(readonly)

the size of a sprite sheet



## Source Code

See the source for [SpriteSheet.ts](https://github.com/phetsims/scenery/blob/main/js/util/SpriteSheet.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
