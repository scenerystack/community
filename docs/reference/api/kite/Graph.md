# Graph

## Overview

A multigraph whose edges are segments.

Supports general shape simplification, overlap/intersection removal and computation. General output would include
Shapes (from CAG - Constructive Area Geometry) and triangulations.

See Graph.binaryResult for the general procedure for CAG.

TODO: Use https://github.com/mauriciosantos/Buckets-JS for priority queue, implement simple sweep line https://github.com/phetsims/kite/issues/76
      with "enters" and "leaves" entries in the queue. When edge removed, remove "leave" from queue.
      and add any replacement edges. Applies to overlap and intersection handling.
      NOTE: This should impact performance a lot, as we are currently over-scanning and re-scanning a lot.
      Intersection is currently (by far?) the performance bottleneck.
TODO: Collapse non-Line adjacent edges together. Similar logic to overlap for each segment time, hopefully can
      factor this out.
TODO: Properly handle sorting edges around a vertex when two edges have the same tangent out. We'll need to use
      curvature, or do tricks to follow both curves by an 'epsilon' and sort based on that.
TODO: Consider separating out epsilon values (may be a general Kite thing rather than just ops)
TODO: Loop-Blinn output and constrained Delaunay triangulation

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Graph {: #Graph }


```js
import { Graph } from 'scenerystack/kite';
```
### Instance Methods

#### serialize() {: #serialize data-toc-label='serialize' }

Returns an object form that can be turned back into a segment with the corresponding deserialize method.
@public

@returns {Object}

#### addShape( shapeId, shape, options ) {: #addShape data-toc-label='addShape' }

Adds a Shape (with a given ID for CAG purposes) to the graph.
@public

@param {number} shapeId - The ID which should be shared for all paths/shapes that should be combined with
                          respect to the winding number of faces. For CAG, independent shapes should be given
                          different IDs (so they have separate winding numbers recorded).
@param {Shape} shape
@param {Object} [options] - See addSubpath

#### addSubpath( shapeId, subpath, options ) {: #addSubpath data-toc-label='addSubpath' }

Adds a subpath of a Shape (with a given ID for CAG purposes) to the graph.
@public

@param {number} shapeId - See addShape() documentation
@param {Subpath} subpath
@param {Object} [options]

#### computeSimplifiedFaces() {: #computeSimplifiedFaces data-toc-label='computeSimplifiedFaces' }

Simplifies edges/vertices, computes boundaries and faces (with the winding map).
@public

#### computeFaceInclusion( windingMapFilter ) {: #computeFaceInclusion data-toc-label='computeFaceInclusion' }

Sets whether each face should be filled or unfilled based on a filter function.
@public

The windingMapFilter will be called on each face's winding map, and will use the return value as whether the face
is filled or not.

The winding map is an {Object} associated with each face that has a key for every shapeId that was used in
addShape/addSubpath, and the value for those keys is the winding number of the face given all paths with the
shapeId.

For example, imagine you added two shapeIds (0 and 1), and the iteration is on a face that is included in
one loop specified with shapeId:0 (inside a counter-clockwise curve), and is outside of any segments specified
by the second loop (shapeId:1). Then the winding map will be:
{
  0: 1 // shapeId:0 has a winding number of 1 for this face (generally filled)
  1: 0 // shapeId:1 has a winding number of 0 for this face (generally not filled)
}

Generally, winding map filters can be broken down into two steps:
1. Given the winding number for each shapeId, compute whether that loop was originally filled. Normally, this is
   done with a non-zero rule (any winding number is filled, except zero). SVG also provides an even-odd rule
   (odd numbers are filled, even numbers are unfilled).
2. Given booleans for each shapeId from step 1, compute CAG operations based on boolean formulas. Say you wanted
   to take the union of shapeIds 0 and 1, then remove anything in shapeId 2. Given the booleans above, this can
   be directly computed as (filled0 || filled1) &amp;&amp; !filled2.

@param {function} windingMapFilter

#### createFilledSubGraph() {: #createFilledSubGraph data-toc-label='createFilledSubGraph' }

Create a new Graph object based only on edges in this graph that separate a "filled" face from an "unfilled"
face.
@public

This is a convenient way to "collapse" adjacent filled and unfilled faces together, and compute the curves and
holes properly, given a filled "normal" graph.

#### facesToShape() {: #facesToShape data-toc-label='facesToShape' }

Returns a Shape that creates a subpath for each filled face (with the desired holes).
@public

Generally should be called on a graph created with createFilledSubGraph().

@returns {Shape}

#### dispose() {: #dispose data-toc-label='dispose' }

Releases owned objects to their pools, and clears references that may have been picked up from external sources.
@public

#### addEdge( edge ) {: #addEdge data-toc-label='addEdge' }

Adds an edge to the graph (and sets up connection information).
@private

@param {Edge} edge

#### removeEdge( edge ) {: #removeEdge data-toc-label='removeEdge' }

Removes an edge from the graph (and disconnects incident information).
@private

@param {Edge} edge

#### replaceEdgeInLoops( edge, forwardHalfEdges ) {: #replaceEdgeInLoops data-toc-label='replaceEdgeInLoops' }

Replaces a single edge (in loops) with a series of edges (possibly empty).
@private

@param {Edge} edge
@param {Array.&lt;HalfEdge&gt;} forwardHalfEdges

#### collapseAdjacentEdges() {: #collapseAdjacentEdges data-toc-label='collapseAdjacentEdges' }

Tries to combine adjacent edges (with a 2-order vertex) into one edge where possible.
@private

This helps to combine things like collinear lines, where there's a vertex that can basically be removed.

#### eliminateOverlap() {: #eliminateOverlap data-toc-label='eliminateOverlap' }

Gets rid of overlapping segments by combining overlaps into a shared edge.
@private

#### splitOverlap( aEdge, bEdge, overlap ) {: #splitOverlap data-toc-label='splitOverlap' }

Splits/combines edges when there is an overlap of two edges (two edges who have an infinite number of
intersection points).
@private

NOTE: This does NOT dispose aEdge/bEdge, due to eliminateOverlap's needs.

Generally this creates an edge for the "shared" part of both segments, and then creates edges for the parts
outside of the shared region, connecting them together.

@param {Edge} aEdge
@param {Edge} bEdge
@param {Overlap} overlap
@returns {Array.&lt;Edge&gt;}

#### eliminateSelfIntersection() {: #eliminateSelfIntersection data-toc-label='eliminateSelfIntersection' }

Handles splitting of self-intersection of segments (happens with Cubics).
@private

#### eliminateIntersection() {: #eliminateIntersection data-toc-label='eliminateIntersection' }

Replace intersections between different segments by splitting them and creating a vertex.
@private

#### simpleSplit( aEdge, bEdge, aT, bT, point ) {: #simpleSplit data-toc-label='simpleSplit' }

Handles splitting two intersecting edges.
@private

@param {Edge} aEdge
@param {Edge} bEdge
@param {number} aT - Parametric t value of the intersection for aEdge
@param {number} bT - Parametric t value of the intersection for bEdge
@param {Vector2} point - Location of the intersection

@returns {{addedEdges: Edge[], removedEdges: Edge[]}|null}

#### splitEdge( edge, t, vertex ) {: #splitEdge data-toc-label='splitEdge' }

Splits an edge into two edges at a specific parametric t value.
@private

@param {Edge} edge
@param {number} t
@param {Vertex} vertex - The vertex that is placed at the split location

#### collapseVertices() {: #collapseVertices data-toc-label='collapseVertices' }

Combine vertices that are almost exactly in the same place (removing edges and vertices where necessary).
@private

#### markBridges( bridges, vertex ) {: #markBridges data-toc-label='markBridges' }

Scan a given vertex for bridges recursively with a depth-first search.
@private

Records visit times to each vertex, and back-propagates so that we can efficiently determine if there was another
path around to the vertex.

Assumes this is only called one time once all edges/vertices are set up. Repeated calls will fail because we
don't mark visited/etc. references again on startup

See Tarjan's algorithm for more information. Some modifications were needed, since this is technically a
multigraph/pseudograph (can have edges that have the same start/end vertex, and can have multiple edges
going from the same two vertices).

@param {Array.&lt;Edge&gt;} bridges - Appends bridge edges to here.
@param {Vertex} vertex

#### removeBridges() {: #removeBridges data-toc-label='removeBridges' }

Removes edges that are the only edge holding two connected components together. Based on our problem, the
face on either side of the "bridge" edges would always be the same, so we can safely remove them.
@private

#### removeLowOrderVertices() {: #removeLowOrderVertices data-toc-label='removeLowOrderVertices' }

Removes vertices that have order less than 2 (so either a vertex with one or zero edges adjacent).
@private

#### orderVertexEdges() {: #orderVertexEdges data-toc-label='orderVertexEdges' }

Sorts incident half-edges for each vertex.
@private

#### extractFaces() {: #extractFaces data-toc-label='extractFaces' }

Creates boundaries and faces by following each half-edge counter-clockwise
@private

#### computeBoundaryTree() {: #computeBoundaryTree data-toc-label='computeBoundaryTree' }

Given the inner and outer boundaries, it computes a tree representation to determine what boundaries are
holes of what other boundaries, then sets up face holes with the result.
@public

This information is stored in the childBoundaries array of Boundary, and is then read out to set up faces.

#### computeWindingMap() {: #computeWindingMap data-toc-label='computeWindingMap' }

Computes the winding map for each face, starting with 0 on the unbounded face (for each shapeId).
@private

#### computeDifferential( edge, shapeId ) {: #computeDifferential data-toc-label='computeDifferential' }

Computes the differential in winding numbers (forward face winding number minus the reversed face winding number)
("forward face" is the face on the forward half-edge side, etc.)
@private

@param {Edge} edge
@param {number} shapeId
@returns {number} - The difference between forward face and reversed face winding numbers.

#### fillAlternatingFaces() {: #fillAlternatingFaces data-toc-label='fillAlternatingFaces' }

Sets the unbounded face as unfilled, and then sets each face's fill so that edges separate one filled face with
one unfilled face.
@private

NOTE: Best to call this on the result from createFilledSubGraph(), since it should have guaranteed properties
      to make this consistent. Notably, all vertices need to have an even order (number of edges)

#### getBoundaryOfHalfEdge( halfEdge ) {: #getBoundaryOfHalfEdge data-toc-label='getBoundaryOfHalfEdge' }

Returns the boundary that contains the specified half-edge.
@private

TODO: find a better way, this is crazy inefficient https://github.com/phetsims/kite/issues/76

@param {HalfEdge} halfEdge
@returns {Boundary}

### Static Methods

#### deserialize( obj ) {: #deserialize data-toc-label='deserialize' }

Recreate a Graph based on serialized state from serialize()
@public

@param {Object} obj

#### isInternal( point, t, segment, distanceThreshold, tThreshold ) {: #isInternal data-toc-label='isInternal' }

@public

#### BINARY_NONZERO_UNION( windingMap ) {: #BINARY_NONZERO_UNION data-toc-label='BINARY_NONZERO_UNION' }

"Union" binary winding map filter for use with Graph.binaryResult.
@public

This combines both shapes together so that a point is in the resulting shape if it was in either of the input
shapes.

@param {Object} windingMap - See computeFaceInclusion for more details
@returns {boolean}

#### BINARY_NONZERO_INTERSECTION( windingMap ) {: #BINARY_NONZERO_INTERSECTION data-toc-label='BINARY_NONZERO_INTERSECTION' }

"Intersection" binary winding map filter for use with Graph.binaryResult.
@public

This combines both shapes together so that a point is in the resulting shape if it was in both of the input
shapes.

@param {Object} windingMap - See computeFaceInclusion for more details
@returns {boolean}

#### BINARY_NONZERO_DIFFERENCE( windingMap ) {: #BINARY_NONZERO_DIFFERENCE data-toc-label='BINARY_NONZERO_DIFFERENCE' }

"Difference" binary winding map filter for use with Graph.binaryResult.
@public

This combines both shapes together so that a point is in the resulting shape if it was in the first shape AND
was NOT in the second shape.

@param {Object} windingMap - See computeFaceInclusion for more details
@returns {boolean}

#### BINARY_NONZERO_XOR( windingMap ) {: #BINARY_NONZERO_XOR data-toc-label='BINARY_NONZERO_XOR' }

"XOR" binary winding map filter for use with Graph.binaryResult.
@public

This combines both shapes together so that a point is in the resulting shape if it is only in exactly one of the
input shapes. It's like the union minus intersection.

@param {Object} windingMap - See computeFaceInclusion for more details
@returns {boolean}

#### binaryResult( shapeA, shapeB, windingMapFilter ) {: #binaryResult data-toc-label='binaryResult' }

Returns the resulting Shape obtained by combining the two shapes given with the filter.
@public

@param {Shape} shapeA
@param {Shape} shapeB
@param {function} windingMapFilter - See computeFaceInclusion for details on the format
@returns {Shape}

#### unionNonZero( shapes ) {: #unionNonZero data-toc-label='unionNonZero' }

Returns the union of an array of shapes.
@public

@param {Array.&lt;Shape&gt;} shapes
@returns {Shape}

#### intersectionNonZero( shapes ) {: #intersectionNonZero data-toc-label='intersectionNonZero' }

Returns the intersection of an array of shapes.
@public

@param {Array.&lt;Shape&gt;} shapes
@returns {Shape}

#### xorNonZero( shapes ) {: #xorNonZero data-toc-label='xorNonZero' }

Returns the xor of an array of shapes.
@public

TODO: reduce code duplication? https://github.com/phetsims/kite/issues/76

@param {Array.&lt;Shape&gt;} shapes
@returns {Shape}

#### simplifyNonZero( shape ) {: #simplifyNonZero data-toc-label='simplifyNonZero' }

Returns a simplified Shape obtained from running it through the simplification steps with non-zero output.
@public

@param {Shape} shape
@returns {Shape}

#### clipShape( clipAreaShape, shape, options ) {: #clipShape data-toc-label='clipShape' }

Returns a clipped version of `shape` that contains only the parts that are within the area defined by
`clipAreaShape`
@public

@param {Shape} clipAreaShape
@param {Shape} shape
@param {Object} [options]
@returns {Shape}



## Source Code

See the source for [Graph.js](https://github.com/phetsims/kite/blob/main/js/ops/Graph.js) in the [kite](https://github.com/phetsims/kite) repository.
