# RationalFace

## Overview

Represents a face with a main (positive-oriented) boundary and zero or more (negative-oriented) holes.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RationalFace {: #RationalFace }


```js
import { RationalFace } from 'scenerystack/alpenglow';
```
### Constructor

#### new RationalFace( boundary : <span style="font-weight: 400; opacity: 80%;">RationalBoundary</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### toAccumulator( accumulator : <span style="font-weight: 400; opacity: 80%;">ClippableFaceAccumulator</span>, matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #toAccumulator data-toc-label='toAccumulator' }

#### getEdges() : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge[]</span> {: #getEdges data-toc-label='getEdges' }

#### getBounds( matrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #getBounds data-toc-label='getBounds' }

#### getIncludedRenderPaths() : <span style="font-weight: 400; opacity: 80%;">Set&lt;RenderPath&gt;</span> {: #getIncludedRenderPaths data-toc-label='getIncludedRenderPaths' }

Returns a set of render paths that are included in this face (based on winding numbers).

REQUIRED: Should have computed the winding map first.

### Instance Properties

#### holes : <span style="font-weight: 400; opacity: 80%;">RationalBoundary[]</span> {: #holes data-toc-label='holes' }

(readonly)

#### windingMapMap : <span style="font-weight: 400; opacity: 80%;">Map</span> {: #windingMapMap data-toc-label='windingMapMap' }

#### windingMap : <span style="font-weight: 400; opacity: 80%;">WindingMap | null</span> {: #windingMap data-toc-label='windingMap' }

#### renderProgram : <span style="font-weight: 400; opacity: 80%;">RenderProgram | null</span> {: #renderProgram data-toc-label='renderProgram' }

#### processed {: #processed data-toc-label='processed' }

### Static Methods

#### traceBoundaries( filteredRationalHalfEdges : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge[]</span>, innerBoundaries : <span style="font-weight: 400; opacity: 80%;">RationalBoundary[]</span>, outerBoundaries : <span style="font-weight: 400; opacity: 80%;">RationalBoundary[]</span>, faces : <span style="font-weight: 400; opacity: 80%;">RationalFace[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge[]</span> {: #traceBoundaries data-toc-label='traceBoundaries' }

NOTE: Returns better-filtered rational half edges, with zero-area boundaries removed

#### computeFaceHolesWithOrderedWindingNumbers( outerBoundaries : <span style="font-weight: 400; opacity: 80%;">RationalBoundary[]</span>, faces : <span style="font-weight: 400; opacity: 80%;">RationalFace[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RationalBoundary[]</span> {: #computeFaceHolesWithOrderedWindingNumbers data-toc-label='computeFaceHolesWithOrderedWindingNumbers' }

Returns the fully exterior boundaries (should be singular in the rendering case, since we added the exterior,
rectangle, HOWEVER can be multiples otherwise)
NOTE: mutates faces order

#### computeFaceHoles( integerBounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span>, outerBoundaries : <span style="font-weight: 400; opacity: 80%;">RationalBoundary[]</span>, faces : <span style="font-weight: 400; opacity: 80%;">RationalFace[]</span>, faceHoleLog : <span style="font-weight: 400; opacity: 80%;">FaceHoleLog | null</span> ) : <span style="font-weight: 400; opacity: 80%;">RationalBoundary</span> {: #computeFaceHoles data-toc-label='computeFaceHoles' }

Returns the fully exterior boundary (should be singular, since we added the exterior rectangle)
TODO: DOUBTS on the correctness of this, the filtering of boundaries seems sketchy. Probably not as high-performance
TODO: BUT perhaps it is more parallelizable?

#### createUnboundedFace( ...exteriorBoundaries : <span style="font-weight: 400; opacity: 80%;">RationalBoundary[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RationalFace</span> {: #createUnboundedFace data-toc-label='createUnboundedFace' }

#### computeWindingMaps( filteredRationalHalfEdges : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge[]</span>, unboundedFace : <span style="font-weight: 400; opacity: 80%;">RationalFace</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #computeWindingMaps data-toc-label='computeWindingMaps' }

Computes winding maps for all of the faces

#### traceCombineFaces( faces : <span style="font-weight: 400; opacity: 80%;">RationalFace[]</span>, fromIntegerMatrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span>, getFaceData : <span style="font-weight: 400; opacity: 80%;">( face: RationalFace ) =&gt; FaceData</span>, createOutputFace : <span style="font-weight: 400; opacity: 80%;">( face: ClippableFaceType, faceData: FaceData, bounds: Bounds2 ) =&gt; OutputFace</span>, isFaceDataCompatible : <span style="font-weight: 400; opacity: 80%;">( faceData1: FaceData, faceData2: FaceData | null ) =&gt; boolean</span>, accumulator : <span style="font-weight: 400; opacity: 80%;">ClippableFaceAccumulator&lt;ClippableFaceType&gt;</span> ) : <span style="font-weight: 400; opacity: 80%;">OutputFace[]</span> {: #traceCombineFaces data-toc-label='traceCombineFaces' }

Combines faces that have equivalent face data IFF they border each other (leaving separate programs with
equivalent face data separate if they don't border). It will also remove edges that border between faces
that we combine, and will connect edges to keep things polygonal!



## Source Code

See the source for [RationalFace.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/RationalFace.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
