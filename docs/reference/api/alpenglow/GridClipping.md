# GridClipping

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/clip/GridClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/GridClipping.ts) for the most up-to-date information.

## Overview

Clipping arbitrary (degenerate, non-convex, self-intersecting, etc.) polygons to within a grid.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Type GridClipCallback {: #GridClipCallback }


```js
import type { GridClipCallback } from 'scenerystack/alpenglow';
```


(
  cellX: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  cellY: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  startX: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  startY: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  endX: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  endY: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>,
  startPoint: [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>,
  endPoint: [Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span>



## Class GridClipping {: #GridClipping }


```js
import { GridClipping } from 'scenerystack/alpenglow';
```
### Static Methods

#### gridClipInterceptIterate( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, callback : <span style="font-weight: 400;">[GridClipCallback](../alpenglow/GridClipping.md#GridClipCallback)</span> ) {: #gridClipInterceptIterate data-toc-label='gridClipInterceptIterate' }

TODO: See if we can get the intercepts to work, since it WOULD be higher performance. Can we perturb the
TODO: intercepts to values that will be acceptable?
@deprecated

#### gridClipIterate( startPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, endPoint : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepWidth : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, stepHeight : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, callback : <span style="font-weight: 400;">[GridClipCallback](../alpenglow/GridClipping.md#GridClipCallback)</span> ) {: #gridClipIterate data-toc-label='gridClipIterate' }



## Source Code

See the source for [GridClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/GridClipping.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
