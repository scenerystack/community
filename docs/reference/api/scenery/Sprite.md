# Sprite

## Overview

Represents a single sprite for the Sprites node, whose image can change over time (if it gets regenerated, etc.).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Sprite {: #Sprite }


```js
import { Sprite } from 'scenerystack/scenery';
```
### Constructor

#### new Sprite( spriteImage : <span style="font-weight: 400; opacity: 80%;">SpriteImage</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getShape() : <span style="font-weight: 400; opacity: 80%;">Shape</span> {: #getShape data-toc-label='getShape' }

Returns a Shape that represents the hit-testable area of this Sprite.

#### containsPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #containsPoint data-toc-label='containsPoint' }

Returns whether a given point is considered "inside" the Sprite

### Instance Properties

#### imageProperty : <span style="font-weight: 400; opacity: 80%;">TProperty&lt;SpriteImage&gt;</span> {: #imageProperty data-toc-label='imageProperty' }

(readonly)



## Source Code

See the source for [Sprite.ts](https://github.com/phetsims/scenery/blob/main/js/util/Sprite.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
