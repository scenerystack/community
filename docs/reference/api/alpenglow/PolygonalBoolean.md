# PolygonalBoolean

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/cag/PolygonalBoolean.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/PolygonalBoolean.ts) for the most up-to-date information.

## Overview

Allows computing boolean operations on polygons (e.g. union, intersection, difference/complement)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PolygonalBoolean {: #PolygonalBoolean }


```js
import { PolygonalBoolean } from 'scenerystack/alpenglow';
```
### Static Methods

#### union( ...paths : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)[]</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> {: #union data-toc-label='union' }

#### intersection( ...paths : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)[]</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> {: #intersection data-toc-label='intersection' }

#### difference( pathA : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span>, pathB : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)[][]</span> {: #difference data-toc-label='difference' }

#### getOverlaps( pathA : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span>, pathB : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)</span> ) : <span style="font-weight: 400;">{ intersection: [Vector2](../dot/Vector2.md)[][]; aOnly: [Vector2](../dot/Vector2.md)[][]; bOnly: [Vector2](../dot/Vector2.md)[][] }</span> {: #getOverlaps data-toc-label='getOverlaps' }

#### cag( paths : <span style="font-weight: 400;">[RenderPath](../alpenglow/RenderPath.md)[]</span>, getFaceData : <span style="font-weight: 400;">( face: [RationalFace](../alpenglow/RationalFace.md) ) =&gt; FaceData</span>, createOutputFace : <span style="font-weight: 400;">( face: [PolygonalFace](../alpenglow/ClippableFace.md#PolygonalFace), faceData: FaceData, bounds: [Bounds2](../dot/Bounds2.md) ) =&gt; OutputFace</span>, isFaceDataCompatible : <span style="font-weight: 400;">( faceData1: FaceData, faceData2: FaceData | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span> ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span>, log : <span style="font-weight: 400;">[RasterTileLog](../alpenglow/RasterLog.md#RasterTileLog) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) : <span style="font-weight: 400;">OutputFace[]</span> {: #cag data-toc-label='cag' }

TODO: ideally handle the fully collinear simplification?



## Source Code

See the source for [PolygonalBoolean.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/PolygonalBoolean.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
