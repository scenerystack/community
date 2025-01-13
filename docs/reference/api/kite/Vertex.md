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

#### initialize( point ) {: #initialize data-toc-label='initialize' }

Similar to a usual constructor, but is set up so it can be called multiple times (with dispose() in-between) to
support pooling.
@private

@param {Vector2} point
@returns {Vertex} - This reference for chaining

#### serialize() {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.
@public

@returns {Object}

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.
@public

#### sortEdges() {: #sortEdges data-toc-label='sortEdges' }

Sorts the edges in increasing angle order.
@public

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

@public

### Static Methods

#### edgeComparison( halfEdgeA, halfEdgeB ) {: #edgeComparison data-toc-label='edgeComparison' }

Compare two edges for sortEdges. Should have executed that first, as it relies on information looked up in that
process.
@public

@param {Edge} halfEdgeA
@param {Edge} halfEdgeB
@returns {number}

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

@public



## Source Code

See the source for [Vertex.js](https://github.com/phetsims/kite/blob/main/js/ops/Vertex.js) in the [kite](https://github.com/phetsims/kite) repository.
