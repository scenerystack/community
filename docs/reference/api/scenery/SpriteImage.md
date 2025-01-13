# SpriteImage

## Overview

Represents an image with a specific center "offset". Considered immutable (with an immutable image, the Canvas if
provided should not change).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SpriteImage {: #SpriteImage }


```js
import { SpriteImage } from 'scenerystack/scenery';
```
### Constructor

#### new SpriteImage( image : <span style="font-weight: 400;">[ImageableImage](../scenery/Imageable.md#ImageableImage) | [TReadOnlyProperty](../axon/TReadOnlyProperty.md)&lt;[ImageableImage](../scenery/Imageable.md#ImageableImage)&gt;</span>, offset : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, providedOptions? : <span style="font-weight: 400;">[SpriteImageOptions](../scenery/SpriteImage.md#SpriteImageOptions)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getShape data-toc-label='getShape' }

Returns a Shape that represents the hit-testable area of this SpriteImage.

#### containsPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPoint data-toc-label='containsPoint' }

Returns whether a given point is considered "inside" the SpriteImage.

### Instance Properties

#### id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #id data-toc-label='id' }

(readonly)

#### offset : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #offset data-toc-label='offset' }

(readonly)

#### pickable : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #pickable data-toc-label='pickable' }

(readonly)



## Source Code

See the source for [SpriteImage.ts](https://github.com/phetsims/scenery/blob/main/js/util/SpriteImage.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
