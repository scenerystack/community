# Vertex

## Overview

Represents a point in space that connects to edges. It stores the edges that are connected (directionally as
half-edges since Cubic segments can start and end at the same point/vertex), and can handle sorting edges so that
a half-edge's "next" half-edge (following counter-clockwise) can be determined.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Vertex {: #Vertex }


```js
import { Vertex } from 'scenerystack/kite';
```
### Instance Methods

#### serialize() : <span style="font-weight: 400;">[SerializedVertex](../kite/Vertex.md#SerializedVertex)</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.

#### sortEdges() {: #sortEdges data-toc-label='sortEdges' }

Sorts the edges in increasing angle order.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #id data-toc-label='id' }

(readonly)

#### point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #point data-toc-label='point' }

NOTE: created in initialize. Certain things may be null when disposed (in pool)

#### incidentHalfEdges : <span style="font-weight: 400;">[HalfEdge](../kite/HalfEdge.md)[]</span> {: #incidentHalfEdges data-toc-label='incidentHalfEdges' }

Records the half-edge that points to (ends at) this vertex.

#### visited {: #visited data-toc-label='visited' }

Used for depth-first search

#### visitIndex {: #visitIndex data-toc-label='visitIndex' }

Visit index for bridge detection (more efficient to have inline here)

#### lowIndex {: #lowIndex data-toc-label='lowIndex' }

Low index for bridge detection (more efficient to have inline here)

#### data : <span style="font-weight: 400;">[IntentionalAny](../phet-core/IntentionalAny.md)</span> {: #data data-toc-label='data' }

Available for arbitrary client usage. -- Keep JSONable

### Static Methods

#### edgeComparison( halfEdgeA : <span style="font-weight: 400;">[HalfEdge](../kite/HalfEdge.md)</span>, halfEdgeB : <span style="font-weight: 400;">[HalfEdge](../kite/HalfEdge.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #edgeComparison data-toc-label='edgeComparison' }

Compare two edges for sortEdges. Should have executed that first, as it relies on information looked up in that
process.

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }



## Type SerializedVertex {: #SerializedVertex }


```js
import type { SerializedVertex } from 'scenerystack/kite';
```


- **type**: "[Vertex](../kite/Vertex.md)"
- **id**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **point**: [Vector2StateObject](../dot/Vector2.md#Vector2StateObject)
- **incidentHalfEdges**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **visited**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **visitIndex**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **lowIndex**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>




## Source Code

See the source for [Vertex.ts](https://github.com/phetsims/kite/blob/main/js/ops/Vertex.ts) in the [kite](https://github.com/phetsims/kite) repository.
