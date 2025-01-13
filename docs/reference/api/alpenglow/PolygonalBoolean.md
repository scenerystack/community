# PolygonalBoolean

## Overview

Allows computing boolean operations on polygons (e.g. union, intersection, difference/complement)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PolygonalBoolean {: #PolygonalBoolean }


```js
import { PolygonalBoolean } from 'scenerystack/alpenglow';
```
### Static Methods

#### union( ...paths : <span style="font-weight: 400; opacity: 80%;">RenderPath[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2[][]</span> {: #union data-toc-label='union' }

#### intersection( ...paths : <span style="font-weight: 400; opacity: 80%;">RenderPath[]</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2[][]</span> {: #intersection data-toc-label='intersection' }

#### difference( pathA : <span style="font-weight: 400; opacity: 80%;">RenderPath</span>, pathB : <span style="font-weight: 400; opacity: 80%;">RenderPath</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2[][]</span> {: #difference data-toc-label='difference' }

#### getOverlaps( pathA : <span style="font-weight: 400; opacity: 80%;">RenderPath</span>, pathB : <span style="font-weight: 400; opacity: 80%;">RenderPath</span> ) : <span style="font-weight: 400; opacity: 80%;">{ intersection: Vector2[][]; aOnly: Vector2[][]; bOnly: Vector2[][] }</span> {: #getOverlaps data-toc-label='getOverlaps' }

#### cag( paths : <span style="font-weight: 400; opacity: 80%;">RenderPath[]</span>, getFaceData : <span style="font-weight: 400; opacity: 80%;">( face: RationalFace ) =&gt; FaceData</span>, createOutputFace : <span style="font-weight: 400; opacity: 80%;">( face: PolygonalFace, faceData: FaceData, bounds: Bounds2 ) =&gt; OutputFace</span>, isFaceDataCompatible : <span style="font-weight: 400; opacity: 80%;">( faceData1: FaceData, faceData2: FaceData | null ) =&gt; boolean</span>, log : <span style="font-weight: 400; opacity: 80%;">RasterTileLog | null</span> ) : <span style="font-weight: 400; opacity: 80%;">OutputFace[]</span> {: #cag data-toc-label='cag' }

TODO: ideally handle the fully collinear simplification?



## Source Code

See the source for [PolygonalBoolean.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/PolygonalBoolean.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
