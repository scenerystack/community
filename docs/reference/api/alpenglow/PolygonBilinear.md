# PolygonBilinear

## Overview

Utilities for the bilinear/tent filter for polygons

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class PolygonBilinear {: #PolygonBilinear }


```js
import { PolygonBilinear } from 'scenerystack/alpenglow';
```
### Static Methods

#### evaluate( p0x : <span style="font-weight: 400; opacity: 80%;">number</span>, p0y : <span style="font-weight: 400; opacity: 80%;">number</span>, p1x : <span style="font-weight: 400; opacity: 80%;">number</span>, p1y : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #evaluate data-toc-label='evaluate' }

#### evaluatePolygons( polygons : <span style="font-weight: 400; opacity: 80%;">Vector2[][]</span>, pointX : <span style="font-weight: 400; opacity: 80%;">number</span>, pointY : <span style="font-weight: 400; opacity: 80%;">number</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #evaluatePolygons data-toc-label='evaluatePolygons' }

#### evaluateLinearEdges( edges : <span style="font-weight: 400; opacity: 80%;">LinearEdge[]</span>, pointX : <span style="font-weight: 400; opacity: 80%;">number</span>, pointY : <span style="font-weight: 400; opacity: 80%;">number</span>, minX : <span style="font-weight: 400; opacity: 80%;">number</span>, minY : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #evaluateLinearEdges data-toc-label='evaluateLinearEdges' }



## Source Code

See the source for [PolygonBilinear.ts](https://github.com/phetsims/alpenglow/blob/main/js/raster/PolygonBilinear.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
