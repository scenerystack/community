# Loop

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

#### initialize( shapeId, closed ) {: #initialize data-toc-label='initialize' }

Similar to a usual constructor, but is set up so it can be called multiple times (with dispose() in-between) to
support pooling.
@private

@param {number} shapeId
@param {boolean} closed
@returns {Loop} - This reference for chaining

#### serialize() {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.
@public

@returns {Object}

#### toSubpath() {: #toSubpath data-toc-label='toSubpath' }

Returns a Subpath equivalent to this loop.
@public

@returns {Subpath}

#### dispose() {: #dispose data-toc-label='dispose' }

Removes references (so it can allow other objects to be GC'ed or pooled), and frees itself to the pool so it
can be reused.
@public

#### freeToPool() {: #freeToPool data-toc-label='freeToPool' }

@public

### Static Properties

#### pool : <span style="font-weight: 400; opacity: 80%;">Pool</span> {: #pool data-toc-label='pool' }

@public



## Source Code

See the source for [Loop.js](https://github.com/phetsims/kite/blob/main/js/ops/Loop.js) in the [kite](https://github.com/phetsims/kite) repository.
