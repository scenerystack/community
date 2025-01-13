# BoundsClipping

## Overview

Clipping arbitrary (degenerate, non-convex, self-intersecting, etc.) polygons to within an axis-aligned bounding box

This uses a somewhat home-brew algorithm that conceptually will work for both polygonal (sorted) and edge-based
(unsorted) inputs, so that computations can be done in parallel and on unsorted edges if helpful.

They work by taking each "exterior" section of edge and mapping the endpoints to the closest corners (with a possible
third corner in-between).

                        C
                       x
                      x
       closest       x
     corner to C    x
           ┌───────2──────────────────────────┐
           │3cccccx                           │
           │    bx                            │
           │   bx                             │
           │  bx       x: the input line      │
           │ bx        A: start vertex        │
           │bx         C: end vertex          │
           │x          1: clipped start vertex│
           1a          2: clipped end vertex  │
          x│a                                 │
         x │a    The line from A to C will    │
        x  │a    generate three edges:        │
       x   │a                                 │
      x    │a   a - 0 to 1 (from corner)      │
     x     │a   b - 1 to 2 (clipped inside)   │
    A      │a   c - 2 to 3 (to corner)        │
           │a                                 │
           │0                                 │
           └──────────────────────────────────┘
       closest
      corner to A



                         B
                       xx
                     xx
                   xx
                 xxx
               xx
             xx
           xx 1──────2
         xx   │      │
       xx     │      │
     xx       │      │
    A         0──────┘

In the above case, the line from A to B will generate two edges, (0 to 1, 1 to 2), and is the case where we need to
disambiguate between the two possible middle corners, since it is going opposite-to-opposite.

For these cases to work, it's important for the points of a polygon to be precise (so edges match up perfectly
flush), since we will conditionally generate the "to-corner" edges based on whether the start/end points are
on the border or outside.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BoundsClipping {: #BoundsClipping }


```js
import { BoundsClipping } from 'scenerystack/alpenglow';
```
### Static Methods

#### boundsClipEdge( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, result : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> ) : <span style="font-weight: 400;">[LinearEdge](../alpenglow/LinearEdge.md)[]</span> {: #boundsClipEdge data-toc-label='boundsClipEdge' }

Clips a single edge to the inside of the given bounding box, and appends the resulting edges to the result array.

For efficiency, the center point of the bounding box should also be provided.

@param startPoint - Starting point of the input edge
@param endPoint - Ending point of the input edge
@param minX - Minimum x of the bounding box
@param minY - Minimum y of the bounding box
@param maxX - Maximum x of the bounding box
@param maxY - Maximum y of the bounding box
@param centerX - Center x of the bounding box
@param centerY - Center y of the bounding box
@param [result] - The array that we'll append the output edges to

#### boundsClipPolygon( polygon : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centerY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[]</span> {: #boundsClipPolygon data-toc-label='boundsClipPolygon' }

Clips a single polygon to the inside of the given bounding box, returning the resulting points of the polygon.

For efficiency, the center point of the bounding box should also be provided.

@param polygon - The input polygon
@param minX - Minimum x of the bounding box
@param minY - Minimum y of the bounding box
@param maxX - Maximum x of the bounding box
@param maxY - Maximum y of the bounding box
@param centerX - Center x of the bounding box
@param centerY - Center y of the bounding box



## Source Code

See the source for [BoundsClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/BoundsClipping.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
