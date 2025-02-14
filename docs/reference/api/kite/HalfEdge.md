# HalfEdge

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/kite/blob/main/js/ops/HalfEdge.ts](https://github.com/phetsims/kite/blob/main/js/ops/HalfEdge.ts) for the most up-to-date information.

## Overview

Represents a single direction/side of an Edge. There are two half-edges for each edge, representing each direction.
The half-edge also stores face information for the face that would be to the left of the direction of travel.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class HalfEdge {: #HalfEdge }


```js
import { HalfEdge } from 'scenerystack/kite';
```
### Instance Methods

#### serialize() : <span style="font-weight: 400;">[SerializedHalfEdge](../kite/HalfEdge.md#SerializedHalfEdge)</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.

#### getNext( filter? : <span style="font-weight: 400;">( edge: [Edge](../kite/Edge.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;">[HalfEdge](../kite/HalfEdge.md)</span> {: #getNext data-toc-label='getNext' }

Returns the next half-edge, walking around counter-clockwise as possible. Assumes edges have been sorted.

@param [filter] - If it returns false, the edge will be skipped, and not returned by getNext

#### getEndTangent() : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #getEndTangent data-toc-label='getEndTangent' }

Returns the tangent of the edge at the end vertex (in the direction away from the vertex).

#### getEndCurvature() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getEndCurvature data-toc-label='getEndCurvature' }

Returns the curvature of the edge at the end vertex.

#### getReversed() : <span style="font-weight: 400;">[HalfEdge](../kite/HalfEdge.md)</span> {: #getReversed data-toc-label='getReversed' }

Returns the opposite half-edge for the same edge.

#### getDirectionalSegment() : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> {: #getDirectionalSegment data-toc-label='getDirectionalSegment' }

Returns a segment that starts at our startVertex and ends at our endVertex (may be reversed to accomplish that).

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #id data-toc-label='id' }

(readonly)

#### edge : <span style="font-weight: 400;">[Edge](../kite/Edge.md)</span> {: #edge data-toc-label='edge' }

Set in initialize, will be null when disposed (in pool)

#### face : <span style="font-weight: 400;">[Face](../kite/Face.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #face data-toc-label='face' }

#### isReversed {: #isReversed data-toc-label='isReversed' }

#### signedAreaFragment {: #signedAreaFragment data-toc-label='signedAreaFragment' }

#### startVertex : <span style="font-weight: 400;">[Vertex](../kite/Vertex.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #startVertex data-toc-label='startVertex' }

#### endVertex : <span style="font-weight: 400;">[Vertex](../kite/Vertex.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #endVertex data-toc-label='endVertex' }

#### sortVector : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #sortVector data-toc-label='sortVector' }

Used for vertex sorting in Vertex.js. X is angle of end tangent (shifted),
Y is curvature at end. See Vertex edge sort for more information.

#### data : <span style="font-weight: 400;">[IntentionalAny](../phet-core/IntentionalAny.md)</span> {: #data data-toc-label='data' }

Available for arbitrary client usage. -- Keep JSONable

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }



## Type SerializedHalfEdge {: #SerializedHalfEdge }


```js
import type { SerializedHalfEdge } from 'scenerystack/kite';
```


- **type**: "[HalfEdge](../kite/HalfEdge.md)"
- **id**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **edge**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **face**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **isReversed**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **signedAreaFragment**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **startVertex**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **endVertex**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **sortVector**: [Vector2StateObject](../dot/Vector2.md#Vector2StateObject)
- **data**: [IntentionalAny](../phet-core/IntentionalAny.md)




## Source Code

See the source for [HalfEdge.ts](https://github.com/phetsims/kite/blob/main/js/ops/HalfEdge.ts) in the [kite](https://github.com/phetsims/kite) repository.
