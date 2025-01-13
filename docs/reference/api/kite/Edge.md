# Edge

## Overview

Represents a segment in the graph (connects to vertices on both ends)

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Edge {: #Edge }


```js
import { Edge } from 'scenerystack/kite';
```
### Instance Methods

#### initialize( segment, startVertex, endVertex ) {: #initialize data-toc-label='initialize' }

Similar to a usual constructor, but is set up so it can be called multiple times (with dispose() in-between) to
support pooling.
@private

@param {Segment} segment
@param {Vertex} startVertex
@param {Vertex} endVertex
@returns {Edge} - This reference for chaining

#### serialize() {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.
@public

@returns {Object}

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.
@public

#### getOtherVertex( vertex ) {: #getOtherVertex data-toc-label='getOtherVertex' }

Returns the other vertex associated with an edge.
@public

@param {Vertex} vertex
@returns {Vertex}

#### updateReferences() {: #updateReferences data-toc-label='updateReferences' }

Update possibly reversed vertex references (since they may be updated)
@public

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

@public

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

@public



## Source Code

See the source for [Edge.js](https://github.com/phetsims/kite/blob/main/js/ops/Edge.js) in the [kite](https://github.com/phetsims/kite) repository.
