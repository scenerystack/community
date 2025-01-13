# GridClipping

## Overview

Clipping arbitrary (degenerate, non-convex, self-intersecting, etc.) polygons to within a grid.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class GridClipping {: #GridClipping }


```js
import { GridClipping } from 'scenerystack/alpenglow';
```
### Static Methods

#### gridClipInterceptIterate( startPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span>, stepX : <span style="font-weight: 400; opacity: 80%;">number</span>, stepY : <span style="font-weight: 400; opacity: 80%;">number</span>, stepWidth : <span style="font-weight: 400; opacity: 80%;">number</span>, stepHeight : <span style="font-weight: 400; opacity: 80%;">number</span>, callback : <span style="font-weight: 400; opacity: 80%;">GridClipCallback</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #gridClipInterceptIterate data-toc-label='gridClipInterceptIterate' }

TODO: See if we can get the intercepts to work, since it WOULD be higher performance. Can we perturb the
TODO: intercepts to values that will be acceptable?
@deprecated

#### gridClipIterate( startPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span>, stepX : <span style="font-weight: 400; opacity: 80%;">number</span>, stepY : <span style="font-weight: 400; opacity: 80%;">number</span>, stepWidth : <span style="font-weight: 400; opacity: 80%;">number</span>, stepHeight : <span style="font-weight: 400; opacity: 80%;">number</span>, callback : <span style="font-weight: 400; opacity: 80%;">GridClipCallback</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #gridClipIterate data-toc-label='gridClipIterate' }



## Source Code

See the source for [GridClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/GridClipping.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
