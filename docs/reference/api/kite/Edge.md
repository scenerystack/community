# Edge

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/kite/blob/main/js/ops/Edge.ts](https://github.com/phetsims/kite/blob/main/js/ops/Edge.ts) for the most up-to-date information.

## Overview

Represents a segment in the graph (connects to vertices on both ends)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Edge {: #Edge }


```js
import { Edge } from 'scenerystack/kite';
```
### Instance Methods

#### serialize() : <span style="font-weight: 400;">[SerializedEdge](../kite/Edge.md#SerializedEdge)</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.

#### getOtherVertex( vertex : <span style="font-weight: 400;">[Vertex](../kite/Vertex.md)</span> ) : <span style="font-weight: 400;">[Vertex](../kite/Vertex.md)</span> {: #getOtherVertex data-toc-label='getOtherVertex' }

Returns the other vertex associated with an edge.

#### updateReferences() {: #updateReferences data-toc-label='updateReferences' }

Update possibly reversed vertex references (since they may be updated)

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #id data-toc-label='id' }

(readonly)

#### segment : <span style="font-weight: 400;">[Segment](../kite/Segment.md)</span> {: #segment data-toc-label='segment' }

Set in initialize, will be null when disposed (in pool)

#### startVertex : <span style="font-weight: 400;">[Vertex](../kite/Vertex.md)</span> {: #startVertex data-toc-label='startVertex' }

#### endVertex : <span style="font-weight: 400;">[Vertex](../kite/Vertex.md)</span> {: #endVertex data-toc-label='endVertex' }

#### signedAreaFragment {: #signedAreaFragment data-toc-label='signedAreaFragment' }

#### forwardHalf : <span style="font-weight: 400;">[HalfEdge](../kite/HalfEdge.md)</span> {: #forwardHalf data-toc-label='forwardHalf' }

#### reversedHalf : <span style="font-weight: 400;">[HalfEdge](../kite/HalfEdge.md)</span> {: #reversedHalf data-toc-label='reversedHalf' }

#### visited {: #visited data-toc-label='visited' }

Used for depth-first search

#### data : <span style="font-weight: 400;">[IntentionalAny](../phet-core/IntentionalAny.md)</span> {: #data data-toc-label='data' }

Available for arbitrary client usage. -- Keep JSONable

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }



## Type SerializedEdge {: #SerializedEdge }


```js
import type { SerializedEdge } from 'scenerystack/kite';
```


- **type**: "[Edge](../kite/Edge.md)"
- **id**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **segment**: [SerializedSegment](../kite/Segment.md#SerializedSegment)
- **startVertex**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **endVertex**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **signedAreaFragment**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **forwardHalf**: [SerializedHalfEdge](../kite/HalfEdge.md#SerializedHalfEdge)
- **reversedHalf**: [SerializedHalfEdge](../kite/HalfEdge.md#SerializedHalfEdge)
- **visited**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **data**: [IntentionalAny](../phet-core/IntentionalAny.md)




## Source Code

See the source for [Edge.ts](https://github.com/phetsims/kite/blob/main/js/ops/Edge.ts) in the [kite](https://github.com/phetsims/kite) repository.
