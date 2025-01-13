# RationalHalfEdge

## Overview

Represents a half-edge (directed line segment) with rational coordinates.

TODO: add a flag to note "removed half edge"?

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RationalHalfEdge {: #RationalHalfEdge }


Instead of storing vertices, we can get away with storing half-edges, with a linked list of next/previous and the
opposite half edge. This is like a half-edge winged data structure.

```js
import { RationalHalfEdge } from 'scenerystack/alpenglow';
```
### Constructor

#### new RationalHalfEdge( edgeId : <span style="font-weight: 400; opacity: 80%;">number</span>, p0 : <span style="font-weight: 400; opacity: 80%;">BigRationalVector2</span>, p1 : <span style="font-weight: 400; opacity: 80%;">BigRationalVector2</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### windingContribution( x : <span style="font-weight: 400; opacity: 80%;">BigRational</span>, y : <span style="font-weight: 400; opacity: 80%;">BigRational</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #windingContribution data-toc-label='windingContribution' }

See LinearEdge.windingContribution

#### addWindingFrom( other : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addWindingFrom data-toc-label='addWindingFrom' }

#### compare( other : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #compare data-toc-label='compare' }

#### addTransformedToAccumulator( accumulator : <span style="font-weight: 400; opacity: 80%;">ClippableFaceAccumulator</span>, fromIntegerMatrix : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addTransformedToAccumulator data-toc-label='addTransformedToAccumulator' }

TODO: use in more places

### Instance Properties

#### face : <span style="font-weight: 400; opacity: 80%;">RationalFace | null</span> {: #face data-toc-label='face' }

#### nextEdge : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge | null</span> {: #nextEdge data-toc-label='nextEdge' }

#### previousEdge : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge | null</span> {: #previousEdge data-toc-label='previousEdge' }

#### boundary : <span style="font-weight: 400; opacity: 80%;">RationalBoundary | null</span> {: #boundary data-toc-label='boundary' }

#### reversed : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge</span> {: #reversed data-toc-label='reversed' }

#### windingMap : <span style="font-weight: 400; opacity: 80%;">WindingMap</span> {: #windingMap data-toc-label='windingMap' }

#### discriminator : <span style="font-weight: 400; opacity: 80%;">number</span> {: #discriminator data-toc-label='discriminator' }

0 for straight +x, 1 for +y, 2 for straight -x, 3 for -y

#### slope : <span style="font-weight: 400; opacity: 80%;">BigRational</span> {: #slope data-toc-label='slope' }

#### p0float : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #p0float data-toc-label='p0float' }

#### p1float : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #p1float data-toc-label='p1float' }

#### processed {: #processed data-toc-label='processed' }

### Static Methods

#### compareBigInt( a : <span style="font-weight: 400; opacity: 80%;">bigint</span>, b : <span style="font-weight: 400; opacity: 80%;">bigint</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #compareBigInt data-toc-label='compareBigInt' }

#### quickCompareBigRational( a : <span style="font-weight: 400; opacity: 80%;">BigRational</span>, b : <span style="font-weight: 400; opacity: 80%;">BigRational</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #quickCompareBigRational data-toc-label='quickCompareBigRational' }

Provides a stable comparison, but this is NOT numerical!!!

#### quickCompareBigRationalVector2( a : <span style="font-weight: 400; opacity: 80%;">BigRationalVector2</span>, b : <span style="font-weight: 400; opacity: 80%;">BigRationalVector2</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #quickCompareBigRationalVector2 data-toc-label='quickCompareBigRationalVector2' }

#### filterAndConnectHalfEdges( rationalHalfEdges : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge[]</span> ) : <span style="font-weight: 400; opacity: 80%;">RationalHalfEdge[]</span> {: #filterAndConnectHalfEdges data-toc-label='filterAndConnectHalfEdges' }



## Source Code

See the source for [RationalHalfEdge.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/RationalHalfEdge.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
