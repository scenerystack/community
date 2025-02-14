# Boundary

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/kite/blob/main/js/ops/Boundary.ts](https://github.com/phetsims/kite/blob/main/js/ops/Boundary.ts) for the most up-to-date information.

## Overview

A boundary is a loop of directed half-edges that always follow in the tightest counter-clockwise direction around
vertices.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Boundary {: #Boundary }


```js
import { Boundary } from 'scenerystack/kite';
```
### Instance Methods

#### serialize() : <span style="font-weight: 400;">[SerializedBoundary](../kite/Boundary.md#SerializedBoundary)</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.

#### isInner() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isInner data-toc-label='isInner' }

Returns whether this boundary is essentially "counter-clockwise" (in the non-reversed coordinate system) with
positive signed area, or "clockwise" with negative signed area.

Boundaries are treated as "inner" boundaries when they are counter-clockwise, as the path followed will generally
follow the inside of a face (given how the "next" edge of a vertex is computed).

#### computeSignedArea() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #computeSignedArea data-toc-label='computeSignedArea' }

Returns the signed area of this boundary, given its half edges.

Each half-edge has its own contribution to the signed area, which are summed together.

#### computeBounds() : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #computeBounds data-toc-label='computeBounds' }

Returns the bounds of the boundary (the union of each of the boundary's segments' bounds).

#### computeExtremePoint( transform : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #computeExtremePoint data-toc-label='computeExtremePoint' }

Returns a point on the boundary which, when the shape (and point) are transformed with the given transform, would
be a point with the minimal y value.

Will only return one point, even if there are multiple points that have the same minimal y values for the
boundary. The point may be at the end of one of the edges/segments (at a vertex), but also may somewhere in the
middle of an edge/segment.

@param transform - Transform used because we want the inverse also.

#### computeExtremeRay( transform : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md)</span> ) : <span style="font-weight: 400;">[Ray2](../dot/Ray2.md)</span> {: #computeExtremeRay data-toc-label='computeExtremeRay' }

Returns a ray (position and direction) pointing away from our boundary at an "extreme" point, so that the ray
will be guaranteed not to intersect this boundary.

The ray's position will be slightly offset from the boundary, so that it will not technically intersect the
boundary where the extreme point lies. The extreme point will be chosen such that it would have the smallest
y value when the boundary is transformed by the given transformation.

The ray's direction will be such that if the ray is transformed by the given transform, it will be pointing
in the negative-y direction (e.g. a vector of (0,-1)). This should guarantee it is facing away from the
boundary, and will be consistent in direction with other extreme rays (needed for its use case with the
boundary graph).

#### hasHalfEdge( halfEdge : <span style="font-weight: 400;">[HalfEdge](../kite/HalfEdge.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #hasHalfEdge data-toc-label='hasHalfEdge' }

Returns whether this boundary includes the specified half-edge.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #id data-toc-label='id' }

(readonly)

#### halfEdges : <span style="font-weight: 400;">[HalfEdge](../kite/HalfEdge.md)[]</span> {: #halfEdges data-toc-label='halfEdges' }

#### signedArea {: #signedArea data-toc-label='signedArea' }

#### bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #bounds data-toc-label='bounds' }

#### childBoundaries : <span style="font-weight: 400;">[Boundary](../kite/Boundary.md)[]</span> {: #childBoundaries data-toc-label='childBoundaries' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }



## Type SerializedBoundary {: #SerializedBoundary }


```js
import type { SerializedBoundary } from 'scenerystack/kite';
```


- **type**: "[Boundary](../kite/Boundary.md)"
- **id**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **halfEdges**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **signedArea**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **bounds**: [Bounds2StateObject](../dot/Bounds2.md#Bounds2StateObject)
- **childBoundaries**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]




## Source Code

See the source for [Boundary.ts](https://github.com/phetsims/kite/blob/main/js/ops/Boundary.ts) in the [kite](https://github.com/phetsims/kite) repository.
