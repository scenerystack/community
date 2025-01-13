# Boundary

## Overview

A boundary is a loop of directed half-edges that always follow in the tightest counter-clockwise direction around
vertices.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Boundary {: #Boundary }


```js
import { Boundary } from 'scenerystack/kite';
```
### Instance Methods

#### initialize( halfEdges ) {: #initialize data-toc-label='initialize' }

Similar to a usual constructor, but is set up so it can be called multiple times (with dispose() in-between) to
support pooling.
@private

@param {Array.&lt;HalfEdge&gt;} halfEdges
@returns {Boundary} - This reference for chaining

#### serialize() {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.
@public

@returns {Object}

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.
@public

#### isInner() {: #isInner data-toc-label='isInner' }

Returns whether this boundary is essentially "counter-clockwise" (in the non-reversed coordinate system) with
positive signed area, or "clockwise" with negative signed area.
@public

Boundaries are treated as "inner" boundaries when they are counter-clockwise, as the path followed will generally
follow the inside of a face (given how the "next" edge of a vertex is computed).

@returns {number}

#### computeSignedArea() {: #computeSignedArea data-toc-label='computeSignedArea' }

Returns the signed area of this boundary, given its half edges.
@public

Each half-edge has its own contribution to the signed area, which are summed together.

@returns {number}

#### computeBounds() {: #computeBounds data-toc-label='computeBounds' }

Returns the bounds of the boundary (the union of each of the boundary's segments' bounds).
@public

@returns {Bounds2}

#### computeExtremePoint( transform ) {: #computeExtremePoint data-toc-label='computeExtremePoint' }

Returns a point on the boundary which, when the shape (and point) are transformed with the given transform, would
be a point with the minimal y value.
@public

Will only return one point, even if there are multiple points that have the same minimal y values for the
boundary. The point may be at the end of one of the edges/segments (at a vertex), but also may somewhere in the
middle of an edge/segment.

@param {Transform3} transform - Transform used because we want the inverse also.
@returns {Vector2}

#### computeExtremeRay( transform ) {: #computeExtremeRay data-toc-label='computeExtremeRay' }

Returns a ray (position and direction) pointing away from our boundary at an "extreme" point, so that the ray
will be guaranteed not to intersect this boundary.
@public

The ray's position will be slightly offset from the boundary, so that it will not technically intersect the
boundary where the extreme point lies. The extreme point will be chosen such that it would have the smallest
y value when the boundary is transformed by the given transformation.

The ray's direction will be such that if the ray is transformed by the given transform, it will be pointing
in the negative-y direction (e.g. a vector of (0,-1)). This should guarantee it is facing away from the
boundary, and will be consistent in direction with other extreme rays (needed for its use case with the
boundary graph).

@param {Transform3} transform
@returns {Ray2}

#### hasHalfEdge( halfEdge ) {: #hasHalfEdge data-toc-label='hasHalfEdge' }

Returns whether this boundary includes the specified half-edge.
@public

@param {HalfEdge} halfEdge
@returns {boolean}

#### toSubpath() {: #toSubpath data-toc-label='toSubpath' }

Converts this boundary to a Subpath, so that we can construct things like Shape objects from it.
@public

@returns {Subpath}

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

@public

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }

@public



## Source Code

See the source for [Boundary.js](https://github.com/phetsims/kite/blob/main/js/ops/Boundary.js) in the [kite](https://github.com/phetsims/kite) repository.
