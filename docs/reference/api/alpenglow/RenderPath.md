# RenderPath

## Overview

Represents a path that controls what regions things are drawn in.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderPath {: #RenderPath }


```js
import { RenderPath } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderPath( fillRule : <span style="font-weight: 400;">[FillRule](../alpenglow/FillRule.md)</span>, subpaths : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span> {: #transformed data-toc-label='transformed' }

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

#### isTriviallyEmpty() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isTriviallyEmpty data-toc-label='isTriviallyEmpty' }

Without scanning the entire path, returns whether we can guarantee that this path is empty and has zero area.

#### serialize() : <span style="font-weight: 400;">[SerializedRenderPath](../alpenglow/RenderPath.md#SerializedRenderPath)</span> {: #serialize data-toc-label='serialize' }

### Instance Properties

#### id {: #id data-toc-label='id' }

(readonly)

### Static Methods

#### deserialize( obj : <span style="font-weight: 400;">[SerializedRenderPath](../alpenglow/RenderPath.md#SerializedRenderPath)</span> ) : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span> {: #deserialize data-toc-label='deserialize' }

#### fromBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span> {: #fromBounds data-toc-label='fromBounds' }



## Type SerializedRenderPath {: #SerializedRenderPath }


```js
import type { SerializedRenderPath } from 'scenerystack/alpenglow';
```
- **fillRule**: [FillRule](../alpenglow/FillRule.md)
- **subpaths**: { x: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>; y: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> }[][]




## Source Code

See the source for [RenderPath.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderPath.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
