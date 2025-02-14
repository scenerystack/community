# Loop

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/kite/blob/main/js/ops/Loop.ts](https://github.com/phetsims/kite/blob/main/js/ops/Loop.ts) for the most up-to-date information.

## Overview

A directed set of half-edges determined by how the original shapes/subpaths were directionally. This is distinct from
boundaries, as:
1. Input shapes/subpaths can self-intersect, ignore clockwise restrictions, and avoid boundary restrictions.
2. Input shapes/subpaths can repeat over the same edges multiple times (affecting winding order), and can even
   double-back or do other operations.
3. We need to record separate shape IDs for the different loops, so we can perform CAG operations on separate ones.
   This means we need to track winding order separately for each ID.

As operations simplify/remove/replace edges, it will handle replacement of the edges in the loops.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Loop {: #Loop }


```js
import { Loop } from 'scenerystack/kite';
```
### Instance Methods

#### serialize() : <span style="font-weight: 400;">[SerializedLoop](../kite/Loop.md#SerializedLoop)</span> {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

### Instance Properties

#### id : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #id data-toc-label='id' }

(readonly)

#### shapeId {: #shapeId data-toc-label='shapeId' }

Set in initialize

#### closed {: #closed data-toc-label='closed' }

#### halfEdges : <span style="font-weight: 400;">[HalfEdge](../kite/HalfEdge.md)[]</span> {: #halfEdges data-toc-label='halfEdges' }

### Static Properties

#### pool : <span style="font-weight: 400;">[Pool](../phet-core/Pool.md)</span> {: #pool data-toc-label='pool' }



## Type SerializedLoop {: #SerializedLoop }


```js
import type { SerializedLoop } from 'scenerystack/kite';
```


- **type**: "[Loop](../kite/Loop.md)"
- **id**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **shapeId**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>
- **closed**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span>
- **halfEdges**: <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]




## Source Code

See the source for [Loop.ts](https://github.com/phetsims/kite/blob/main/js/ops/Loop.ts) in the [kite](https://github.com/phetsims/kite) repository.
