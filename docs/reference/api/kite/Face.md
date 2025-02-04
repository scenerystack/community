# Face

## Overview

A face is usually contained by an ("inner") boundary of edges, and zero or more ("outer") boundary holes on the inside.
The naming is somewhat counterintuitive here, because the "inner" boundaries are on the inside of the edges
(towards our face), and the "outer" hole boundaries are on the outer half-edges of the holes.

There is normally one "unbounded" face without a normal boundary, whose "area" expands to infinity, and contains the
everything on the exterior of all of the edges.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Face {: #Face }


```js
import { Face } from 'scenerystack/kite';
```
### Instance Methods

#### serialize() : <span style="font-weight: 400;">[SerializedFace](../kite/Face.md#SerializedFace)</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.

#### addBoundaryFaceReferences( boundary : <span style="font-weight: 400;">[Boundary](../kite/Boundary.md)</span> ) {: #addBoundaryFaceReferences data-toc-label='addBoundaryFaceReferences' }

Marks all half-edges on the boundary as belonging to this face.

#### recursivelyAddHoles( outerBoundary : <span style="font-weight: 400;">[Boundary](../kite/Boundary.md)</span> ) {: #recursivelyAddHoles data-toc-label='recursivelyAddHoles' }

Processes the boundary-graph for a given outer boundary, and turns it into holes for this face.

In the graph, every outer boundary in each connected component will be holes for the single inner boundary
(which will be, in this case, our face's boundary). Since it's a tree, we can walk the tree recursively to add
all necessary holes.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #id data-toc-label='id' }

(readonly)

#### boundary : <span style="font-weight: 400;">[Boundary](../kite/Boundary.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #boundary data-toc-label='boundary' }

"inner" types, null when disposed (in pool), OR null if the face is unbounded

#### holes : <span style="font-weight: 400;">[Boundary](../kite/Boundary.md)[]</span> {: #holes data-toc-label='holes' }

"outer" types

#### windingMap : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #windingMap data-toc-label='windingMap' }

If non-null, it's a map from shapeId {number} =&gt; winding {number}

#### filled : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #filled data-toc-label='filled' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }



## Type SerializedFace {: #SerializedFace }


```js
import type { SerializedFace } from 'scenerystack/kite';
```


- **type**: "[Face](../kite/Face.md)"
- **id**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **boundary**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **holes**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]
- **windingMap**: Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>&gt; | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>
- **filled**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span>




## Source Code

See the source for [Face.ts](https://github.com/phetsims/kite/blob/main/js/ops/Face.ts) in the [kite](https://github.com/phetsims/kite) repository.
