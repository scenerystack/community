# RenderEvaluationContext

## Overview

Represents the state passed through RenderProgram evaluation

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderEvaluationContext {: #RenderEvaluationContext }


```js
import { RenderEvaluationContext } from 'scenerystack/alpenglow';
```
### Instance Methods

#### set( face : <span style="font-weight: 400; opacity: 80%;">ClippableFace | null</span>, area : <span style="font-weight: 400; opacity: 80%;">number</span>, centroid : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span>, maxX : <span style="font-weight: 400; opacity: 80%;">number</span>, maxY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #set data-toc-label='set' }

#### getFace() : <span style="font-weight: 400; opacity: 80%;">ClippableFace</span> {: #getFace data-toc-label='getFace' }

#### getBounds() : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBounds data-toc-label='getBounds' }

#### getCenterX() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getCenterX data-toc-label='getCenterX' }

#### getCenterY() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getCenterY data-toc-label='getCenterY' }

#### hasArea() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasArea data-toc-label='hasArea' }

#### hasCentroid() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #hasCentroid data-toc-label='hasCentroid' }

#### writeBoundsCentroid( centroid : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #writeBoundsCentroid data-toc-label='writeBoundsCentroid' }

### Instance Properties

#### face : <span style="font-weight: 400; opacity: 80%;">ClippableFace | null</span> {: #face data-toc-label='face' }

if null AND we have a need set for a face, it is fully covered

#### area {: #area data-toc-label='area' }

TODO: documentation!

#### centroid : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #centroid data-toc-label='centroid' }

#### minX {: #minX data-toc-label='minX' }

#### minY {: #minY data-toc-label='minY' }

#### maxX {: #maxX data-toc-label='maxX' }

#### maxY {: #maxY data-toc-label='maxY' }



## Source Code

See the source for [RenderEvaluationContext.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderEvaluationContext.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
