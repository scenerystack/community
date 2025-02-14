# Dimension2

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/dot/blob/main/js/Dimension2.ts](https://github.com/phetsims/dot/blob/main/js/Dimension2.ts) for the most up-to-date information.

## Overview

Dimension2 is a basic width and height, like a Bounds2 but without the position defined.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Dimension2 {: #Dimension2 }


```js
import { Dimension2 } from 'scenerystack/dot';
```
### Constructor

#### new Dimension2( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) {: #Dimension2-constructor data-toc-label='new Dimension2' }

### Instance Methods

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Debugging string for the dimension.

#### set( dimension : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> ) : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #set data-toc-label='set' }

Sets this dimension to be a copy of another dimension.
This is the mutable form of the function copy(). This will mutate (change) this dimension, in addition to returning
this dimension itself.

#### setWidth( width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #setWidth data-toc-label='setWidth' }

Sets the width of the dimension, returning this.

#### setHeight( height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #setHeight data-toc-label='setHeight' }

Sets the height of the dimension, returning this.

#### copy( dimension? : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> ) : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #copy data-toc-label='copy' }

Creates a copy of this dimension, or if a dimension is passed in, set that dimension's values to ours.
This is the immutable form of the function set(), if a dimension is provided. This will return a new dimension,
and will not modify this dimension.

@param [dimension] - If not provided, creates a new Dimension2 with filled in values. Otherwise, fills
                     in the values of the provided dimension so that it equals this dimension.

#### swapped() : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #swapped data-toc-label='swapped' }

Swap width and height and return a new Dimension2

#### toBounds( x? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, y? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #toBounds data-toc-label='toBounds' }

Creates a Bounds2 from this dimension based on passing in the minimum (top-left) corner as (x,y).
@param [x] - Minimum x coordinate of the bounds, or 0 if not provided.
@param [y] - Minimum y coordinate of the bounds, or 0 if not provided.

#### equals( that : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

Exact equality comparison between this dimension and another dimension.

#### equalsEpsilon( that : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span>, epsilon ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsEpsilon data-toc-label='equalsEpsilon' }

Exact equality comparison between this dimension and another dimension.

Whether difference between the two dimensions has no component with an absolute value greater than epsilon.

#### toStateObject() : <span style="font-weight: 400;">[Dimension2StateObject](../dot/Dimension2.md#Dimension2StateObject)</span> {: #toStateObject data-toc-label='toStateObject' }

### Instance Properties

#### width : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #width data-toc-label='width' }

Width of the dimension

#### height : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #height data-toc-label='height' }

Height of the dimension

### Static Methods

#### fromStateObject( stateObject : <span style="font-weight: 400;">[Dimension2StateObject](../dot/Dimension2.md#Dimension2StateObject)</span> ) : <span style="font-weight: 400;">[Dimension2](../dot/Dimension2.md)</span> {: #fromStateObject data-toc-label='fromStateObject' }

### Static Properties

#### Dimension2IO : <span style="font-weight: 400;">[IOType](../tandem/IOType.md)</span> {: #Dimension2IO data-toc-label='Dimension2IO' }



## Type Dimension2StateObject {: #Dimension2StateObject }


```js
import type { Dimension2StateObject } from 'scenerystack/dot';
```


[StateObject](../tandem/StateSchema.md#StateObject)&lt;typeof STATE_SCHEMA&gt;



## Source Code

See the source for [Dimension2.ts](https://github.com/phetsims/dot/blob/main/js/Dimension2.ts) in the [dot](https://github.com/phetsims/dot) repository.
