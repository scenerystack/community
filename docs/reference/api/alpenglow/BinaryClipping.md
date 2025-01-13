# BinaryClipping

## Overview

Clipping arbitrary (degenerate, non-convex, self-intersecting, etc.) polygons based on binary criteria (e.g.
left/right, inside/outside).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class BinaryClipping {: #BinaryClipping }


```js
import { BinaryClipping } from 'scenerystack/alpenglow';
```
### Static Methods

#### binaryXClipEdge( startPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, fakeCornerY : <span style="font-weight: 400; opacity: 80%;">number</span>, minLinearEdges : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span>, maxLinearEdges : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #binaryXClipEdge data-toc-label='binaryXClipEdge' }

#### binaryYClipEdge( startPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, fakeCornerX : <span style="font-weight: 400; opacity: 80%;">number</span>, minLinearEdges : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span>, maxLinearEdges : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #binaryYClipEdge data-toc-label='binaryYClipEdge' }

#### binaryLineClipEdge( startPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, endPoint : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, normal : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, value : <span style="font-weight: 400; opacity: 80%;">number</span>, fakeCornerPerpendicular : <span style="font-weight: 400; opacity: 80%;">number</span>, minLinearEdges : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span>, maxLinearEdges : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #binaryLineClipEdge data-toc-label='binaryLineClipEdge' }

line where dot( normal, point ) - value = 0. "min" side is dot-products &lt; value, "max" side is dot-products &gt; value

#### binaryXClipPolygon( polygon : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span>, minPolygon : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span>, maxPolygon : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #binaryXClipPolygon data-toc-label='binaryXClipPolygon' }

#### binaryYClipPolygon( polygon : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span>, minPolygon : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span>, maxPolygon : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #binaryYClipPolygon data-toc-label='binaryYClipPolygon' }

#### binaryLineClipPolygon( polygon : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span>, normal : <span style="font-weight: 400; opacity: 80%;">Vector2</span>, value : <span style="font-weight: 400; opacity: 80%;">number</span>, minPolygon : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span>, maxPolygon : <span style="font-weight: 400; opacity: 80%;">Vector2[]</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #binaryLineClipPolygon data-toc-label='binaryLineClipPolygon' }

line where dot( normal, point ) - value = 0. "min" side is dot-products &lt; value, "max" side is dot-products &gt; value

#### binaryXClipEdgedClipped( face : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span>, x : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">{ minFace: EdgedClippedFace; maxFace: EdgedClippedFace }</span> {: #binaryXClipEdgedClipped data-toc-label='binaryXClipEdgedClipped' }

#### binaryYClipEdgedClipped( face : <span style="font-weight: 400; opacity: 80%;">EdgedClippedFace</span>, y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">{ minFace: EdgedClippedFace; maxFace: EdgedClippedFace }</span> {: #binaryYClipEdgedClipped data-toc-label='binaryYClipEdgedClipped' }



## Source Code

See the source for [BinaryClipping.ts](https://github.com/phetsims/alpenglow/blob/main/js/clip/BinaryClipping.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
