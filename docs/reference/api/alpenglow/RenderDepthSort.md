# RenderDepthSort

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderDepthSort.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderDepthSort.ts) for the most up-to-date information.

## Overview

RenderProgram that provides splitting based on depth, into a RenderStack

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderDepthSort {: #RenderDepthSort }


```js
import { RenderDepthSort } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderDepthSort( items : <span style="font-weight: 400;">[RenderPlanar](../alpenglow/RenderPlanar.md)[]</span> ) {: #RenderDepthSort-constructor data-toc-label='new RenderDepthSort' }

### Instance Methods

#### getName() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderDepthSort](../alpenglow/RenderDepthSort.md)</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)</span> {: #transformed data-toc-label='transformed' }

#### getSimplified( children : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md)[]</span> ) : <span style="font-weight: 400;">[RenderProgram](../alpenglow/RenderProgram.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400;">[RenderEvaluationContext](../alpenglow/RenderEvaluationContext.md)</span> ) : <span style="font-weight: 400;">[Vector4](../dot/Vector4.md)</span> {: #evaluate data-toc-label='evaluate' }

#### isSplittable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isSplittable data-toc-label='isSplittable' }

#### split( face : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)</span> ) : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)[]</span> {: #split data-toc-label='split' }

The heavy lifting of figuring out what combinations of "orders" of items are possible (front-to-back), and
splitting into each possible non-zero-area combination.

#### serialize() : <span style="font-weight: 400;">[SerializedRenderDepthSort](../alpenglow/RenderDepthSort.md#SerializedRenderDepthSort)</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### getProjectionMatrix( near : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, far : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Matrix4](../dot/Matrix4.md)</span> {: #getProjectionMatrix data-toc-label='getProjectionMatrix' }



## Type SerializedRenderDepthSort {: #SerializedRenderDepthSort }


```js
import type { SerializedRenderDepthSort } from 'scenerystack/alpenglow';
```


- **type**: "[RenderDepthSort](../alpenglow/RenderDepthSort.md)"
- **items**: {
    program: [SerializedRenderProgram](../alpenglow/RenderProgram.md#SerializedRenderProgram);
    pointA: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[];
    pointB: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[];
    pointC: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[];
  }[]




## Source Code

See the source for [RenderDepthSort.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderDepthSort.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
