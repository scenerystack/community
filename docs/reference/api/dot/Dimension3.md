# Dimension3

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/Dimension3.ts](https://github.com/phetsims/dot/blob/main/js/Dimension3.ts) for the most up-to-date information.

## Overview

Dimension3 is a basic width, height, and depth, like a Bounds3 but without the position defined.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Chris Malley (PixelZoom, Inc.)

## Class Dimension3 {: #Dimension3 }


```js
import { Dimension3 } from 'scenerystack/dot';
```
### Constructor

#### new Dimension3( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, depth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Dimension3-constructor data-toc-label='new Dimension3' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Debugging string for the dimension.

#### set( dimension : <span style="font-weight: 400;">[Dimension3](../dot/Dimension3.md)</span> ) : <span style="font-weight: 400;">[Dimension3](../dot/Dimension3.md)</span> {: #set data-toc-label='set' }

Sets this dimension to be a copy of another dimension.
This is the mutable form of the function copy(). This will mutate (change) this dimension, in addition to returning
this dimension itself.

#### setWidth( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Dimension3](../dot/Dimension3.md)</span> {: #setWidth data-toc-label='setWidth' }

Sets the width of the dimension, returning this.

#### setHeight( height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Dimension3](../dot/Dimension3.md)</span> {: #setHeight data-toc-label='setHeight' }

Sets the height of the dimension, returning this.

#### setDepth( depth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Dimension3](../dot/Dimension3.md)</span> {: #setDepth data-toc-label='setDepth' }

Sets the depth of the dimension, returning this.

#### copy( dimension? : <span style="font-weight: 400;">[Dimension3](../dot/Dimension3.md)</span> ) : <span style="font-weight: 400;">[Dimension3](../dot/Dimension3.md)</span> {: #copy data-toc-label='copy' }

Creates a copy of this dimension, or if a dimension is passed in, set that dimension's values to ours.
This is the immutable form of the function set(), if a dimension is provided. This will return a new dimension,
and will not modify this dimension.

@param [dimension] - If not provided, creates a new Dimension3 with filled in values. Otherwise, fills
                     in the values of the provided dimension so that it equals this dimension.

#### toBounds( x? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, z? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds3](../dot/Bounds3.md)</span> {: #toBounds data-toc-label='toBounds' }

Creates a Bounds2 from this dimension based on passing in the minimum (top-left) corner as (x,y).
@param [x] - Minimum x coordinate of the bounds, or 0 if not provided.
@param [y] - Minimum y coordinate of the bounds, or 0 if not provided.
@param [z] - Minimum z coordinate of the bounds, or 0 if not provided.

#### equals( that : <span style="font-weight: 400;">[Dimension3](../dot/Dimension3.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

Exact equality comparison between this dimension and another dimension.

#### toStateObject() : <span style="font-weight: 400;">[Dimension3StateObject](../dot/Dimension3.md#Dimension3StateObject)</span> {: #toStateObject data-toc-label='toStateObject' }

### Instance Properties

#### width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #width data-toc-label='width' }

#### height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #height data-toc-label='height' }

#### depth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #depth data-toc-label='depth' }

### Static Methods

#### fromStateObject( stateObject : <span style="font-weight: 400;">[Dimension3StateObject](../dot/Dimension3.md#Dimension3StateObject)</span> ) : <span style="font-weight: 400;">[Dimension3](../dot/Dimension3.md)</span> {: #fromStateObject data-toc-label='fromStateObject' }

### Static Properties

#### Dimension3IO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #Dimension3IO data-toc-label='Dimension3IO' }



## Type Dimension3StateObject {: #Dimension3StateObject }


```js
import type { Dimension3StateObject } from 'scenerystack/dot';
```


[StateObject](../tandem/StateSchema.md#StateObject)&lt;typeof STATE_SCHEMA&gt;



## Source Code

See the source for [Dimension3.ts](https://github.com/phetsims/dot/blob/main/js/Dimension3.ts) in the [dot](https://github.com/phetsims/dot) repository.
