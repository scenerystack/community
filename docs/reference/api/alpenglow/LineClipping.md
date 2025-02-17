# LineClipping

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/clip/LineClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/LineClipping.ts) for the most up-to-date information.

## Overview

General purpose line-clipping algorithms

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LineClipping {: #LineClipping }


```js
import { LineClipping } from 'scenerystack/alpenglow';
```
### Static Methods

#### matthesDrakopoulosClip( p0 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, p1 : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #matthesDrakopoulosClip data-toc-label='matthesDrakopoulosClip' }

From "Another Simple but Faster Method for 2D Line Clipping" (2019)
by Dimitrios Matthes and Vasileios Drakopoulos

This will:
- mutate the given points, so that they are clipped to the given axis-aligned bounding box, and
- return whether the line segment intersects the bounds



## Source Code

See the source for [LineClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/LineClipping.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
