# Sprite

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/Sprite.ts](https://github.com/phetsims/scenery/blob/main/js/util/Sprite.ts) for the most up-to-date information.

## Overview

Represents a single sprite for the Sprites node, whose image can change over time (if it gets regenerated, etc.).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Sprite {: #Sprite }


```js
import { Sprite } from 'scenerystack/scenery';
```
### Constructor

#### new Sprite( spriteImage : <span style="font-weight: 400;">[SpriteImage](../scenery/SpriteImage.md)</span> ) {: #Sprite-constructor data-toc-label='new Sprite' }

### Instance Methods

#### getShape() : <span style="font-weight: 400;">[Shape](../kite/Shape.md)</span> {: #getShape data-toc-label='getShape' }

Returns a Shape that represents the hit-testable area of this Sprite.

#### containsPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsPoint data-toc-label='containsPoint' }

Returns whether a given point is considered "inside" the Sprite

### Instance Properties

#### imageProperty : <span style="font-weight: 400;">[TProperty](../axon/TProperty.md)&lt;[SpriteImage](../scenery/SpriteImage.md)&gt;</span> {: #imageProperty data-toc-label='imageProperty' }

(readonly)



## Source Code

See the source for [Sprite.ts](https://github.com/phetsims/scenery/blob/main/js/util/Sprite.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
