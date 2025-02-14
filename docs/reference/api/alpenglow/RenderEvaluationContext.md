# RenderEvaluationContext

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderEvaluationContext.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderEvaluationContext.ts) for the most up-to-date information.

## Overview

Represents the state passed through RenderProgram evaluation

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RenderEvaluationContext {: #RenderEvaluationContext }


```js
import { RenderEvaluationContext } from 'scenerystack/alpenglow';
```
### Instance Methods

#### set( face : <span style="font-weight: 400;">[ClippableFace](../alpenglow/ClippableFace.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span>, area : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, centroid : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span>, minX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, minY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxX : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, maxY : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #set data-toc-label='set' }

#### getFace() : <span style="font-weight: 400;">[ClippableFace](../alpenglow/ClippableFace.md)</span> {: #getFace data-toc-label='getFace' }

#### getBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #getBounds data-toc-label='getBounds' }

#### getCenterX() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCenterX data-toc-label='getCenterX' }

#### getCenterY() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCenterY data-toc-label='getCenterY' }

#### hasArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasArea data-toc-label='hasArea' }

#### hasCentroid() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasCentroid data-toc-label='hasCentroid' }

#### writeBoundsCentroid( centroid : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #writeBoundsCentroid data-toc-label='writeBoundsCentroid' }

### Instance Properties

#### face : <span style="font-weight: 400;">[ClippableFace](../alpenglow/ClippableFace.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #face data-toc-label='face' }

if null AND we have a need set for a face, it is fully covered

#### area {: #area data-toc-label='area' }

TODO: documentation!

#### centroid : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #centroid data-toc-label='centroid' }

#### minX {: #minX data-toc-label='minX' }

#### minY {: #minY data-toc-label='minY' }

#### maxX {: #maxX data-toc-label='maxX' }

#### maxY {: #maxY data-toc-label='maxY' }



## Source Code

See the source for [RenderEvaluationContext.ts](https://github.com/phetsims/alpenglow/blob/main/js/render-program/RenderEvaluationContext.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
