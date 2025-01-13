# DelaunayTriangulation

## Overview

Handles constrained Delaunay triangulation based on "Sweep-line algorithm for constrained Delaunay triangulation"
by Domiter and Zalik (2008), with some details provided by "An efficient sweep-line Delaunay triangulation
algorithm" by Zalik (2005).

TODO: Second (basin) heuristic not yet implemented. https://github.com/phetsims/dot/issues/96
TODO: Constraints not yet implemented.
TODO: Check number of triangles/edges/vertices with Euler's Formula
TODO: Handle "outside" cases (and changing the front edges) for constrained edges

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class DelaunayTriangulation {: #DelaunayTriangulation }


```js
import { DelaunayTriangulation } from 'scenerystack/dot';
```
### Constructor

#### new DelaunayTriangulation( points, constraints, options ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### step() {: #step data-toc-label='step' }

Moves the triangulation forward by a vertex.
@private

#### fillBorderTriangle( firstEdge, secondEdge, firstSideVertex, middleVertex, secondSideVertex ) {: #fillBorderTriangle data-toc-label='fillBorderTriangle' }

Builds a triangle between two vertices.
@private

@param {Edge} firstEdge
@param {Edge} secondEdge
@param {Vertex} firstSideVertex
@param {Vertex} middleVertex
@param {Vertex} secondSideVertex
@returns {Edge} - The newly created edge

#### reconnectFrontEdges( oldRightEdge, oldLeftEdge, newRightEdge, newLeftEdge ) {: #reconnectFrontEdges data-toc-label='reconnectFrontEdges' }

Disconnects a section of front edges, and connects a new section.
@private

Disconnects:
&lt;nextEdge&gt; (cut) &lt;oldLeftEdge&gt; ..... &lt;oldRightEdge&gt; (cut) &lt;previousEdge&gt;

Connects:
&lt;nextEdge&gt; (join) &lt;newLeftEdge&gt; ..... &lt;newRightEdge&gt; (join) &lt;previousEdge&gt;

If previousEdge is null, we'll need to set our firstFrontEdge to the newRightEdge.

@param {Edge} oldRightEdge
@param {Edge} oldLeftEdge
@param {Edge} newRightEdge
@param {Edge} newLeftEdge

#### addHalfPiHeuristic( rightFrontEdge, leftFrontEdge ) {: #addHalfPiHeuristic data-toc-label='addHalfPiHeuristic' }

Tries to fill in acute angles with triangles after we add a vertex into the front.
@private

@param {Edge} rightFrontEdge
@param {Edge} leftFrontEdge

#### constrainEdges( vertex, rightFrontEdge, leftFrontEdge ) {: #constrainEdges data-toc-label='constrainEdges' }

Handles any "edge events" that delete intersecting edges, creating the new edge, and filling in (all only if
necessary).
@private

@param {Vertex} vertex
@param {Edge} rightFrontEdge
@param {Edge} leftFrontEdge

#### triangulatePolygon( edges ) {: #triangulatePolygon data-toc-label='triangulatePolygon' }

Creates edges/triangles to triangulate a simple polygon.
@private

@param {Array.&lt;Edge&gt;} edges - Should be in counterclockwise order

#### finalize() {: #finalize data-toc-label='finalize' }

Should be called when there are no more remaining vertices left to be processed.
@private

#### legalizeEdge( edge ) {: #legalizeEdge data-toc-label='legalizeEdge' }

Checks an edge to see whether its two adjacent triangles satisfy the delaunay condition (the far point of one
triangle should not be contained in the other triangle's circumcircle), and if it is not satisfied, flips the
edge so the condition is satisfied.
@private

@param {Edge} edge

### Static Methods

#### vertexComparison( a, b ) {: #vertexComparison data-toc-label='vertexComparison' }

Comparison for sorting points by y, then by x.
@private

TODO: Do we need to reverse the x sort? "If our edge is horizontal, the ending point with smaller x coordinate https://github.com/phetsims/dot/issues/96
      is considered as the upper point"?

@param {Vertex} a
@param {Vertex} b
@returns {number}

#### vertexProduct( sharedVertex, aVertex, bVertex ) {: #vertexProduct data-toc-label='vertexProduct' }

Returns the cross product of (aVertex-sharedVertex) and (bVertex-sharedVertex)
@private

@param {Vertex} sharedVertex
@param {Vertex} aVertex
@param {Vertex} bVertex
@returns {number}



## Source Code

See the source for [DelaunayTriangulation.js](https://github.com/phetsims/dot/blob/main/js/DelaunayTriangulation.js) in the [dot](https://github.com/phetsims/dot) repository.
