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

#### initialize( boundary ) {: #initialize data-toc-label='initialize' }

Similar to a usual constructor, but is set up so it can be called multiple times (with dispose() in-between) to
support pooling.
@private

@param {Boundary} boundary
@returns {Face} - This reference for chaining

#### serialize() {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.
@public

@returns {Object}

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.
@public

#### addBoundaryFaceReferences( boundary ) {: #addBoundaryFaceReferences data-toc-label='addBoundaryFaceReferences' }

Marks all half-edges on the boundary as belonging to this face.
@public

@param {Boundary} boundary

#### recursivelyAddHoles( outerBoundary ) {: #recursivelyAddHoles data-toc-label='recursivelyAddHoles' }

Processes the boundary-graph for a given outer boundary, and turns it into holes for this face.
@public

In the graph, every outer boundary in each connected component will be holes for the single inner boundary
(which will be, in this case, our face's boundary). Since it's a tree, we can walk the tree recursively to add
all necessary holes.

@param {Boundary} outerBoundary

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

@public

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

@public



## Source Code

See the source for [Face.js](https://github.com/phetsims/kite/blob/main/js/ops/Face.js) in the [kite](https://github.com/phetsims/kite) repository.
