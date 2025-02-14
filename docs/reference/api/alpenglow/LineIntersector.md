# LineIntersector

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/alpenglow/blob/main/js/cag/LineIntersector.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/LineIntersector.ts) for the most up-to-date information.

## Overview

Handles finding intersections between IntegerEdges (will push RationalIntersections into the edge's intersections
arrays)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LineIntersector {: #LineIntersector }


```js
import { LineIntersector } from 'scenerystack/alpenglow';
```
### Static Methods

#### processIntegerEdgeIntersection( edgeA : <span style="font-weight: 400;">[IntegerEdge](../alpenglow/IntegerEdge.md)</span>, edgeB : <span style="font-weight: 400;">[IntegerEdge](../alpenglow/IntegerEdge.md)</span>, log : <span style="font-weight: 400;">[RasterTileLog](../alpenglow/RasterLog.md#RasterTileLog) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #processIntegerEdgeIntersection data-toc-label='processIntegerEdgeIntersection' }

#### edgeIntersectionBoundsTree( integerEdges : <span style="font-weight: 400;">[IntegerEdge](../alpenglow/IntegerEdge.md)[]</span>, log : <span style="font-weight: 400;">[RasterTileLog](../alpenglow/RasterLog.md#RasterTileLog) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #edgeIntersectionBoundsTree data-toc-label='edgeIntersectionBoundsTree' }

#### edgeIntersectionArrayBoundsTree( integerEdges : <span style="font-weight: 400;">[IntegerEdge](../alpenglow/IntegerEdge.md)[]</span>, log : <span style="font-weight: 400;">[RasterTileLog](../alpenglow/RasterLog.md#RasterTileLog) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #edgeIntersectionArrayBoundsTree data-toc-label='edgeIntersectionArrayBoundsTree' }

#### edgeIntersectionQuadratic( integerEdges : <span style="font-weight: 400;">[IntegerEdge](../alpenglow/IntegerEdge.md)[]</span>, log : <span style="font-weight: 400;">[RasterTileLog](../alpenglow/RasterLog.md#RasterTileLog) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> ) {: #edgeIntersectionQuadratic data-toc-label='edgeIntersectionQuadratic' }



## Source Code

See the source for [LineIntersector.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/LineIntersector.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
