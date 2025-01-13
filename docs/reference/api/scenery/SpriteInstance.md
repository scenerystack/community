# SpriteInstance

## Overview

Represents a single instance on the screen of a given Sprite object. It can have its own transformation matrix, and
is set up as a lightweight container of information, for high-performance usage (with pooling).

Its individual parameters should generally be mutated directly by the client.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class SpriteInstance {: #SpriteInstance }


```js
import { SpriteInstance } from 'scenerystack/scenery';
```
### Constructor

#### new SpriteInstance() {: #constructor data-toc-label='constructor' }

### Instance Methods

#### initialize() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #initialize data-toc-label='initialize' }

For pooling. Please use SpriteInstance.pool.fetch() to grab a copy

#### getShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getShape data-toc-label='getShape' }

Returns a Shape that represents the hit-testable area of this SpriteInstance.

#### containsPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPoint data-toc-label='containsPoint' }

Returns whether a given point is considered "inside" the SpriteInstance

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### sprite : <span style="font-weight: 400;">[Sprite](../scenery/Sprite.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #sprite data-toc-label='sprite' }

This should be set to a `Sprite` object which is the sprite that should be displayed.
This field is expected to be set by the client whenever it needs to change.

#### matrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #matrix data-toc-label='matrix' }

Please just mutate the given Matrix3 for performance. If the matrix represents something
other than just a translation, please update the `transformType` to the type that represents the possible
values.

#### transformType : <span style="font-weight: 400;">[SpriteInstanceTransformType](../scenery/SpriteInstance.md#SpriteInstanceTransformType)</span> {: #transformType data-toc-label='transformType' }

#### alpha : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #alpha data-toc-label='alpha' }

The general opacity/alpha of the displayed sprite (see Node's opacity)

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

(readonly)



## Class SpriteInstanceTransformType {: #SpriteInstanceTransformType }


```js
import { SpriteInstanceTransformType } from 'scenerystack/scenery';
```
### Static Properties

#### TRANSLATION : <span style="font-weight: 400;">[SpriteInstanceTransformType](../scenery/SpriteInstance.md#SpriteInstanceTransformType)</span> {: #SpriteInstanceTransformType-TRANSLATION data-toc-label='SpriteInstanceTransformType-TRANSLATION' }

(readonly)

#### TRANSLATION_AND_SCALE : <span style="font-weight: 400;">[SpriteInstanceTransformType](../scenery/SpriteInstance.md#SpriteInstanceTransformType)</span> {: #SpriteInstanceTransformType-TRANSLATION_AND_SCALE data-toc-label='SpriteInstanceTransformType-TRANSLATION_AND_SCALE' }

(readonly)

#### TRANSLATION_AND_ROTATION : <span style="font-weight: 400;">[SpriteInstanceTransformType](../scenery/SpriteInstance.md#SpriteInstanceTransformType)</span> {: #SpriteInstanceTransformType-TRANSLATION_AND_ROTATION data-toc-label='SpriteInstanceTransformType-TRANSLATION_AND_ROTATION' }

(readonly)

#### AFFINE : <span style="font-weight: 400;">[SpriteInstanceTransformType](../scenery/SpriteInstance.md#SpriteInstanceTransformType)</span> {: #SpriteInstanceTransformType-AFFINE data-toc-label='SpriteInstanceTransformType-AFFINE' }

(readonly)

#### enumeration : <span style="font-weight: 400;">[Enumeration](../phet-core/Enumeration.md)</span> {: #SpriteInstanceTransformType-enumeration data-toc-label='SpriteInstanceTransformType-enumeration' }

(readonly)



## Source Code

See the source for [SpriteInstance.ts](https://github.com/phetsims/scenery/blob/main/js/util/SpriteInstance.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
