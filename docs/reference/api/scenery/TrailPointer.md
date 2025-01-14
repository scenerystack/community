# TrailPointer

## Overview

Points to a specific node (with a trail), and whether it is conceptually before or after the node.

There are two orderings:
- rendering order: the order that node selves would be rendered, matching the Trail implicit order
- nesting order:   the order in depth first with entering a node being "before" and exiting a node being "after"

TODO: more seamless handling of the orders. or just exclusively use the nesting order https://github.com/phetsims/scenery/issues/1581

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class TrailPointer {: #TrailPointer }


```js
import { TrailPointer } from 'scenerystack/scenery';
```
### Constructor

#### new TrailPointer( trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, isBefore : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #TrailPointer-constructor data-toc-label='new TrailPointer' }

### Instance Methods

#### isActive() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span> is ActiveTrailPointer</span> {: #isActive data-toc-label='isActive' }

#### copy() : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md)</span> {: #copy data-toc-label='copy' }

#### setBefore( isBefore : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #setBefore data-toc-label='setBefore' }

#### getRenderSwappedPointer() : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getRenderSwappedPointer data-toc-label='getRenderSwappedPointer' }

Return the equivalent pointer that swaps before and after (may return null if it doesn't exist)

#### getRenderBeforePointer() : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getRenderBeforePointer data-toc-label='getRenderBeforePointer' }

#### getRenderAfterPointer() : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getRenderAfterPointer data-toc-label='getRenderAfterPointer' }

#### compareRender( other : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #compareRender data-toc-label='compareRender' }

In the render order, will return 0 if the pointers are equivalent, -1 if this pointer is before the
other pointer, and 1 if this pointer is after the other pointer.

#### compareNested( other : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #compareNested data-toc-label='compareNested' }

Like compareRender, but for the nested (depth-first) order

TODO: optimization? https://github.com/phetsims/scenery/issues/1581

#### equalsRender( other : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsRender data-toc-label='equalsRender' }

#### equalsNested( other : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equalsNested data-toc-label='equalsNested' }

#### hasTrail() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasTrail data-toc-label='hasTrail' }

Will return false if this pointer has gone off of the beginning or end of the tree (will be marked with isAfter or
isBefore though)

#### nestedForwards() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #nestedForwards data-toc-label='nestedForwards' }

Moves this pointer forwards one step in the nested order

TODO: refactor with "Side"-like handling https://github.com/phetsims/scenery/issues/1581

#### nestedBackwards() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #nestedBackwards data-toc-label='nestedBackwards' }

Moves this pointer backwards one step in the nested order

#### eachNodeBetween( other : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md)</span>, callback : <span style="font-weight: 400;">( node: [Node](../scenery/Node.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span></span> ) {: #eachNodeBetween data-toc-label='eachNodeBetween' }

Treats the pointer as render-ordered (includes the start pointer 'before' if applicable, excludes the end pointer
'before' if applicable

#### eachTrailBetween( other : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md)</span>, callback : <span style="font-weight: 400;">TrailCallback</span> ) {: #eachTrailBetween data-toc-label='eachTrailBetween' }

Treats the pointer as render-ordered (includes the start pointer 'before' if applicable, excludes the end pointer
'before' if applicable

#### depthFirstUntil( other : <span style="font-weight: 400;">[TrailPointer](../scenery/TrailPointer.md)</span>, callback : <span style="font-weight: 400;">ActiveTrailPointerCallback</span>, excludeEndpoints : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #depthFirstUntil data-toc-label='depthFirstUntil' }

Recursively (depth-first) iterates over all pointers between this pointer and 'other', calling
callback( pointer ) for each pointer. If excludeEndpoints is truthy, the callback will not be
called if pointer is equivalent to this pointer or 'other'.

If the callback returns a truthy value, the subtree for the current pointer will be skipped
(applies only to before-pointers)

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns a string form of this object

### Instance Properties

#### trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #trail data-toc-label='trail' }

#### isBefore : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isBefore data-toc-label='isBefore' }

#### isAfter : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isAfter data-toc-label='isAfter' }

### Static Methods

#### compareNested( trailA : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, isBeforeA : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, trailB : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, isBeforeB : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #compareNested data-toc-label='compareNested' }

Same as new TrailPointer( trailA, isBeforeA ).compareNested( new TrailPointer( trailB, isBeforeB ) )



## Source Code

See the source for [TrailPointer.ts](https://github.com/phetsims/scenery/blob/main/js/util/TrailPointer.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
