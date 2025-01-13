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

#### new RationalHalfEdge( edgeId : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, p0 : <span style="font-weight: 400;">[BigRationalVector2](../alpenglow/BigRationalVector2.md)</span>, p1 : <span style="font-weight: 400;">[BigRationalVector2](../alpenglow/BigRationalVector2.md)</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### windingContribution( x : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span>, y : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #windingContribution data-toc-label='windingContribution' }

See LinearEdge.windingContribution

#### addWindingFrom( other : <span style="font-weight: 400;">[RationalHalfEdge](../alpenglow/RationalHalfEdge.md)</span> ) {: #addWindingFrom data-toc-label='addWindingFrom' }

#### compare( other : <span style="font-weight: 400;">[RationalHalfEdge](../alpenglow/RationalHalfEdge.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #compare data-toc-label='compare' }

#### addTransformedToAccumulator( accumulator : <span style="font-weight: 400;">[ClippableFaceAccumulator](../alpenglow/ClippableFace.md#ClippableFaceAccumulator)</span>, fromIntegerMatrix : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> ) {: #addTransformedToAccumulator data-toc-label='addTransformedToAccumulator' }

TODO: use in more places

### Instance Properties

#### face : <span style="font-weight: 400;">[RationalFace](../alpenglow/RationalFace.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #face data-toc-label='face' }

#### nextEdge : <span style="font-weight: 400;">[RationalHalfEdge](../alpenglow/RationalHalfEdge.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #nextEdge data-toc-label='nextEdge' }

#### previousEdge : <span style="font-weight: 400;">[RationalHalfEdge](../alpenglow/RationalHalfEdge.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #previousEdge data-toc-label='previousEdge' }

#### boundary : <span style="font-weight: 400;">[RationalBoundary](../alpenglow/RationalBoundary.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #boundary data-toc-label='boundary' }

#### reversed : <span style="font-weight: 400;">[RationalHalfEdge](../alpenglow/RationalHalfEdge.md)</span> {: #reversed data-toc-label='reversed' }

#### windingMap : <span style="font-weight: 400;">[WindingMap](../alpenglow/WindingMap.md)</span> {: #windingMap data-toc-label='windingMap' }

#### discriminator : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #discriminator data-toc-label='discriminator' }

0 for straight +x, 1 for +y, 2 for straight -x, 3 for -y

#### slope : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> {: #slope data-toc-label='slope' }

#### p0float : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #p0float data-toc-label='p0float' }

#### p1float : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #p1float data-toc-label='p1float' }

#### processed {: #processed data-toc-label='processed' }

### Static Methods

#### compareBigInt( a : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span></span>, b : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">bigint</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #compareBigInt data-toc-label='compareBigInt' }

#### quickCompareBigRational( a : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span>, b : <span style="font-weight: 400;">[BigRational](../alpenglow/BigRational.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #quickCompareBigRational data-toc-label='quickCompareBigRational' }

Provides a stable comparison, but this is NOT numerical!!!

#### quickCompareBigRationalVector2( a : <span style="font-weight: 400;">[BigRationalVector2](../alpenglow/BigRationalVector2.md)</span>, b : <span style="font-weight: 400;">[BigRationalVector2](../alpenglow/BigRationalVector2.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #quickCompareBigRationalVector2 data-toc-label='quickCompareBigRationalVector2' }

#### filterAndConnectHalfEdges( rationalHalfEdges : <span style="font-weight: 400;">[RationalHalfEdge](../alpenglow/RationalHalfEdge.md)[]</span> ) : <span style="font-weight: 400;">[RationalHalfEdge](../alpenglow/RationalHalfEdge.md)[]</span> {: #filterAndConnectHalfEdges data-toc-label='filterAndConnectHalfEdges' }



## Source Code

See the source for [RationalHalfEdge.ts](https://github.com/phetsims/alpenglow/blob/main/js/cag/RationalHalfEdge.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
