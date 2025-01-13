# RenderDepthSort

## Overview

RenderProgram that provides splitting based on depth, into a RenderStack

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderDepthSort {: #RenderDepthSort }


```js
import { RenderDepthSort } from 'scenerystack/alpenglow';
```
### Constructor

#### new RenderDepthSort( items : <span style="font-weight: 400; opacity: 80%;">RenderPlanar[]</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### getName() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getName data-toc-label='getName' }

#### withChildren( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderDepthSort</span> {: #withChildren data-toc-label='withChildren' }

#### transformed( transform : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram</span> {: #transformed data-toc-label='transformed' }

#### getSimplified( children : <span style="font-weight: 400; opacity: 80%;">RenderProgram[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #getSimplified data-toc-label='getSimplified' }

(protected)

#### evaluate( context : <span style="font-weight: 400; opacity: 80%;">RenderEvaluationContext</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector4</span> {: #evaluate data-toc-label='evaluate' }

#### isSplittable() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isSplittable data-toc-label='isSplittable' }

#### split( face : <span style="font-weight: 400; opacity: 80%;">RenderableFace</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderableFace[]</span> {: #split data-toc-label='split' }

The heavy lifting of figuring out what combinations of "orders" of items are possible (front-to-back), and
splitting into each possible non-zero-area combination.

#### serialize() : <span style="font-weight: 400; opacity: 80%;">SerializedRenderDepthSort</span> {: #serialize data-toc-label='serialize' }

### Static Methods

#### deserialize( obj : <span style="font-weight: 400; opacity: 80%;">SerializedRenderDepthSort</span> ) : <span style="font-weight: 400; opacity: 80%;">RenderDepthSort</span> {: #deserialize data-toc-label='deserialize' }

#### getProjectionMatrix( near : <span style="font-weight: 400; opacity: 80%;">number</span>, far : <span style="font-weight: 400; opacity: 80%;">number</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix4</span> {: #getProjectionMatrix data-toc-label='getProjectionMatrix' }



## Source Code

See the source for [RenderDepthSort.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderDepthSort.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
