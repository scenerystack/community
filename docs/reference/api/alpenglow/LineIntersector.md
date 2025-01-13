# LineIntersector

## Overview

Handles finding intersections between IntegerEdges (will push RationalIntersections into the edge's intersections
arrays)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class LineIntersector {: #LineIntersector }


```js
import { LineIntersector } from 'scenerystack/alpenglow';
```
### Static Methods

#### processIntegerEdgeIntersection( edgeA : <span style="font-weight: 400; opacity: 80%;">IntegerEdge</span>, edgeB : <span style="font-weight: 400; opacity: 80%;">IntegerEdge</span>, log : <span style="font-weight: 400; opacity: 80%;">RasterTileLog | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #processIntegerEdgeIntersection data-toc-label='processIntegerEdgeIntersection' }

#### edgeIntersectionBoundsTree( integerEdges : <span style="font-weight: 400; opacity: 80%;">IntegerEdge[]</span>, log : <span style="font-weight: 400; opacity: 80%;">RasterTileLog | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #edgeIntersectionBoundsTree data-toc-label='edgeIntersectionBoundsTree' }

#### edgeIntersectionArrayBoundsTree( integerEdges : <span style="font-weight: 400; opacity: 80%;">IntegerEdge[]</span>, log : <span style="font-weight: 400; opacity: 80%;">RasterTileLog | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #edgeIntersectionArrayBoundsTree data-toc-label='edgeIntersectionArrayBoundsTree' }

#### edgeIntersectionQuadratic( integerEdges : <span style="font-weight: 400; opacity: 80%;">IntegerEdge[]</span>, log : <span style="font-weight: 400; opacity: 80%;">RasterTileLog | null</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #edgeIntersectionQuadratic data-toc-label='edgeIntersectionQuadratic' }



## Source Code

See the source for [LineIntersector.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/LineIntersector.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
