# RasterLog

## Overview

Allows logging of data from the rasterization process, for display or debugging purposes

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RasterLog {: #RasterLog }


```js
import { RasterLog } from 'scenerystack/alpenglow';
```
### Instance Properties

#### scale : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #scale data-toc-label='scale' }

#### partialAreas : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)[]</span> {: #partialAreas data-toc-label='partialAreas' }

#### fullAreas : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)[]</span> {: #fullAreas data-toc-label='fullAreas' }

#### tileLogs : <span style="font-weight: 400;">[RasterTileLog](../alpenglow/RasterLog.md#RasterTileLog)[]</span> {: #tileLogs data-toc-label='tileLogs' }

#### renderableFaces : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #renderableFaces data-toc-label='renderableFaces' }



## Class RasterTileLog {: #RasterTileLog }


```js
import { RasterTileLog } from 'scenerystack/alpenglow';
```
### Instance Properties

#### translation : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-translation data-toc-label='RasterTileLog-translation' }

#### toIntegerMatrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-toIntegerMatrix data-toc-label='RasterTileLog-toIntegerMatrix' }

#### fromIntegerMatrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-fromIntegerMatrix data-toc-label='RasterTileLog-fromIntegerMatrix' }

#### integerEdges : <span style="font-weight: 400;">[IntegerEdge](../alpenglow/IntegerEdge.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-integerEdges data-toc-label='RasterTileLog-integerEdges' }

#### filteredRationalHalfEdges : <span style="font-weight: 400;">[RationalHalfEdge](../alpenglow/RationalHalfEdge.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-filteredRationalHalfEdges data-toc-label='RasterTileLog-filteredRationalHalfEdges' }

#### refilteredRationalHalfEdges : <span style="font-weight: 400;">[RationalHalfEdge](../alpenglow/RationalHalfEdge.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-refilteredRationalHalfEdges data-toc-label='RasterTileLog-refilteredRationalHalfEdges' }

#### innerBoundaries : <span style="font-weight: 400;">[RationalBoundary](../alpenglow/RationalBoundary.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-innerBoundaries data-toc-label='RasterTileLog-innerBoundaries' }

#### outerBoundaries : <span style="font-weight: 400;">[RationalBoundary](../alpenglow/RationalBoundary.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-outerBoundaries data-toc-label='RasterTileLog-outerBoundaries' }

#### faces : <span style="font-weight: 400;">[RationalFace](../alpenglow/RationalFace.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-faces data-toc-label='RasterTileLog-faces' }

#### unboundedFace : <span style="font-weight: 400;">[RationalFace](../alpenglow/RationalFace.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-unboundedFace data-toc-label='RasterTileLog-unboundedFace' }

#### renderedFaces : <span style="font-weight: 400;">[RationalFace](../alpenglow/RationalFace.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-renderedFaces data-toc-label='RasterTileLog-renderedFaces' }

#### initialRenderableFaces : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-initialRenderableFaces data-toc-label='RasterTileLog-initialRenderableFaces' }

#### renderableFaces : <span style="font-weight: 400;">[RenderableFace](../alpenglow/RenderableFace.md)[] | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #RasterTileLog-renderableFaces data-toc-label='RasterTileLog-renderableFaces' }

#### integerIntersectionCount {: #RasterTileLog-integerIntersectionCount data-toc-label='RasterTileLog-integerIntersectionCount' }

How many integer intersections were detected

#### integerIntersectionComputationCount {: #RasterTileLog-integerIntersectionComputationCount data-toc-label='RasterTileLog-integerIntersectionComputationCount' }

How many times we ran the integer intersection computation

#### integerIntersectionOverlapCheckCount {: #RasterTileLog-integerIntersectionOverlapCheckCount data-toc-label='RasterTileLog-integerIntersectionOverlapCheckCount' }

How many times we inspected bounds between two edges (or groups), to see if we should try intersecting them



## Source Code

See the source for [RasterLog.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/RasterLog.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
