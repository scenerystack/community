# HalfEdge

## Overview

Represents a single direction/side of an Edge. There are two half-edges for each edge, representing each direction.
The half-edge also stores face information for the face that would be to the left of the direction of travel.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class HalfEdge {: #HalfEdge }


```js
import { HalfEdge } from 'scenerystack/kite';
```
### Instance Methods

#### initialize( edge, isReversed ) {: #initialize data-toc-label='initialize' }

Similar to a usual constructor, but is set up so it can be called multiple times (with dispose() in-between) to
support pooling.
@private

@param {Edge} edge
@param {boolean} isReversed
@returns {HalfEdge} - This reference for chaining

#### serialize() {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.
@public

@returns {Object}

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.
@public

#### getNext( filter ) {: #getNext data-toc-label='getNext' }

Returns the next half-edge, walking around counter-clockwise as possible. Assumes edges have been sorted.
@public

@param {function} [filter] - function( {Edge} ) =&gt; {boolean}. If it returns false, the edge will be skipped, and
                             not returned by getNext

#### updateReferences() {: #updateReferences data-toc-label='updateReferences' }

Update possibly reversed vertex references.
@private

#### getEndTangent() {: #getEndTangent data-toc-label='getEndTangent' }

Returns the tangent of the edge at the end vertex (in the direction away from the vertex).
@public

@returns {Vector2}

#### getEndCurvature() {: #getEndCurvature data-toc-label='getEndCurvature' }

Returns the curvature of the edge at the end vertex.
@public

@returns {number}

#### getReversed() {: #getReversed data-toc-label='getReversed' }

Returns the opposite half-edge for the same edge.
@public

@returns {HalfEdge}

#### getDirectionalSegment() {: #getDirectionalSegment data-toc-label='getDirectionalSegment' }

Returns a segment that starts at our startVertex and ends at our endVertex (may be reversed to accomplish that).
@public

@returns {Segment}

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

@public

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

@public



## Source Code

See the source for [HalfEdge.js](https://github.com/phetsims/kite/blob/main/js/ops/HalfEdge.js) in the [kite](https://github.com/phetsims/kite) repository.
