# Trail

## Overview

Represents a trail (path in the graph) from a 'root' node down to a descendant node.
In a DAG, or with different views, there can be more than one trail up from a node,
even to the same root node!

It has an array of nodes, in order from the 'root' down to the last node,
a length, and an array of indices such that node_i.children[index_i] === node_{i+1}.

The indices can sometimes become stale when nodes are added and removed, so Trails
can have their indices updated with reindex(). It's designed to be as fast as possible
on Trails that are already indexed accurately.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Trail {: #Trail }


```js
import { Trail } from 'scenerystack/scenery';
```
### Constructor

#### new Trail( nodes? : <span style="font-weight: 400; opacity: 80%;">Trail | Node[] | Node</span> ) {: #constructor data-toc-label='constructor' }

### Instance Methods

#### copy() : <span style="font-weight: 400; opacity: 80%;">Trail</span> {: #copy data-toc-label='copy' }

Returns a copy of this Trail that can be modified independently

#### isValid() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isValid data-toc-label='isValid' }

Whether all nodes in the trail are still connected from the trail's root to its leaf.

#### isVisible() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isVisible data-toc-label='isVisible' }

This trail is visible only if all nodes on it are marked as visible

#### isPDOMVisible() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isPDOMVisible data-toc-label='isPDOMVisible' }

This trail is pdomVisible only if all nodes on it are marked as pdomVisible

#### getOpacity() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getOpacity data-toc-label='getOpacity' }

#### isPickable() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isPickable data-toc-label='isPickable' }

Essentially whether this node is visited in the hit-testing operation

#### get( index : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #get data-toc-label='get' }

#### slice( startIndex : <span style="font-weight: 400; opacity: 80%;">number</span>, endIndex? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Trail</span> {: #slice data-toc-label='slice' }

#### subtrailTo( node : <span style="font-weight: 400; opacity: 80%;">Node</span>, excludeNode ) : <span style="font-weight: 400; opacity: 80%;">Trail</span> {: #subtrailTo data-toc-label='subtrailTo' }

TODO: consider renaming to subtrailToExcluding and subtrailToIncluding? https://github.com/phetsims/scenery/issues/1581

#### isEmpty() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isEmpty data-toc-label='isEmpty' }

#### getMatrixConcatenation( startingIndex : <span style="font-weight: 400; opacity: 80%;">number</span>, endingIndex : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #getMatrixConcatenation data-toc-label='getMatrixConcatenation' }

Returns the matrix multiplication of our selected nodes transformation matrices.

@param startingIndex - Include nodes matrices starting from this index (inclusive)
@param endingIndex - Include nodes matrices up to this index (exclusive)

#### getMatrix() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #getMatrix data-toc-label='getMatrix' }

From local to global

e.g. local coordinate frame of the leaf node to the parent coordinate frame of the root node

#### getAncestorMatrix() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #getAncestorMatrix data-toc-label='getAncestorMatrix' }

From local to next-to-global (ignores root node matrix)

e.g. local coordinate frame of the leaf node to the local coordinate frame of the root node

#### getParentMatrix() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #getParentMatrix data-toc-label='getParentMatrix' }

From parent to global

e.g. parent coordinate frame of the leaf node to the parent coordinate frame of the root node

#### getAncestorParentMatrix() : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #getAncestorParentMatrix data-toc-label='getAncestorParentMatrix' }

From parent to next-to-global (ignores root node matrix)

e.g. parent coordinate frame of the leaf node to the local coordinate frame of the root node

#### getTransform() : <span style="font-weight: 400; opacity: 80%;">Transform3</span> {: #getTransform data-toc-label='getTransform' }

From local to global

e.g. local coordinate frame of the leaf node to the parent coordinate frame of the root node

#### getParentTransform() : <span style="font-weight: 400; opacity: 80%;">Transform3</span> {: #getParentTransform data-toc-label='getParentTransform' }

From parent to global

e.g. parent coordinate frame of the leaf node to the parent coordinate frame of the root node

#### addAncestor( node : <span style="font-weight: 400; opacity: 80%;">Node</span>, index? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #addAncestor data-toc-label='addAncestor' }

#### removeAncestor() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #removeAncestor data-toc-label='removeAncestor' }

#### addDescendant( node : <span style="font-weight: 400; opacity: 80%;">Node</span>, index? : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">this</span> {: #addDescendant data-toc-label='addDescendant' }

#### removeDescendant() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #removeDescendant data-toc-label='removeDescendant' }

#### addDescendantTrail( trail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #addDescendantTrail data-toc-label='addDescendantTrail' }

#### removeDescendantTrail( trail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #removeDescendantTrail data-toc-label='removeDescendantTrail' }

#### reindex() : <span style="font-weight: 400; opacity: 80%;">void</span> {: #reindex data-toc-label='reindex' }

Refreshes the internal index references (important if any children arrays were modified!)

#### setImmutable() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setImmutable data-toc-label='setImmutable' }

#### setMutable() : <span style="font-weight: 400; opacity: 80%;">this</span> {: #setMutable data-toc-label='setMutable' }

#### areIndicesValid() : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #areIndicesValid data-toc-label='areIndicesValid' }

#### equals( other : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #equals data-toc-label='equals' }

#### upToNode( node : <span style="font-weight: 400; opacity: 80%;">Node</span> ) : <span style="font-weight: 400; opacity: 80%;">Trail</span> {: #upToNode data-toc-label='upToNode' }

Returns a new Trail from the root up to the parameter node.

#### isExtensionOf( other : <span style="font-weight: 400; opacity: 80%;">Trail</span>, allowSameTrail? : <span style="font-weight: 400; opacity: 80%;">boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isExtensionOf data-toc-label='isExtensionOf' }

Whether this trail contains the complete 'other' trail, but with added descendants afterwards.

@param other - is other a subset of this trail?
@param allowSameTrail

#### containsNode( node : <span style="font-weight: 400; opacity: 80%;">Node</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #containsNode data-toc-label='containsNode' }

Returns whether a given node is contained in the trail.

#### getTransformTo( otherTrail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">Transform3</span> {: #getTransformTo data-toc-label='getTransformTo' }

A transform from our local coordinate frame to the other trail's local coordinate frame

#### getMatrixTo( otherTrail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">Matrix3</span> {: #getMatrixTo data-toc-label='getMatrixTo' }

Returns a matrix that transforms a point in our last node's local coordinate frame to the other trail's last node's
local coordinate frame

#### getBranchIndexTo( otherTrail : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getBranchIndexTo data-toc-label='getBranchIndexTo' }

Returns the first index that is different between this trail and the other trail.

If the trails are identical, the index should be equal to the trail's length.

#### getLastInputEnabledIndex() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getLastInputEnabledIndex data-toc-label='getLastInputEnabledIndex' }

Returns the last (largest) index into the trail's nodes that has inputEnabled=true.

#### getCursorCheckIndex() : <span style="font-weight: 400; opacity: 80%;">number</span> {: #getCursorCheckIndex data-toc-label='getCursorCheckIndex' }

Returns the leaf-most index, unless there is a Node with inputEnabled=false (in which case, the lowest index
for those matching Nodes are returned).

#### nodeFromTop( offset : <span style="font-weight: 400; opacity: 80%;">number</span> ) : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #nodeFromTop data-toc-label='nodeFromTop' }

TODO: phase out in favor of get() https://github.com/phetsims/scenery/issues/1581

#### lastNode() : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #lastNode data-toc-label='lastNode' }

#### rootNode() : <span style="font-weight: 400; opacity: 80%;">Node</span> {: #rootNode data-toc-label='rootNode' }

#### previous() : <span style="font-weight: 400; opacity: 80%;">Trail | null</span> {: #previous data-toc-label='previous' }

Returns the previous graph trail in the order of self-rendering

#### previousPainted() : <span style="font-weight: 400; opacity: 80%;">Trail | null</span> {: #previousPainted data-toc-label='previousPainted' }

Like previous(), but keeps moving back until the trail goes to a node with isPainted() === true

#### next() : <span style="font-weight: 400; opacity: 80%;">Trail | null</span> {: #next data-toc-label='next' }

In the order of self-rendering

#### nextPainted() : <span style="font-weight: 400; opacity: 80%;">Trail | null</span> {: #nextPainted data-toc-label='nextPainted' }

Like next(), but keeps moving back until the trail goes to a node with isPainted() === true

#### eachTrailUnder( callback : <span style="font-weight: 400; opacity: 80%;">TrailCallback</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #eachTrailUnder data-toc-label='eachTrailUnder' }

Calls callback( trail ) for this trail, and each descendant trail. If callback returns true, subtree will be skipped

#### compare( other : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #compare data-toc-label='compare' }

Standard Java-style compare. -1 means this trail is before (under) the other trail, 0 means equal, and 1 means this trail is
after (on top of) the other trail.
A shorter subtrail will compare as -1.

Assumes that the Trails are properly indexed. If not, please reindex them!

Comparison is for the rendering order, so an ancestor is 'before' a descendant

#### isBefore( other : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isBefore data-toc-label='isBefore' }

#### isAfter( other : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">boolean</span> {: #isAfter data-toc-label='isAfter' }

#### localToGlobalPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #localToGlobalPoint data-toc-label='localToGlobalPoint' }

#### localToGlobalBounds( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #localToGlobalBounds data-toc-label='localToGlobalBounds' }

#### globalToLocalPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #globalToLocalPoint data-toc-label='globalToLocalPoint' }

#### globalToLocalBounds( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #globalToLocalBounds data-toc-label='globalToLocalBounds' }

#### parentToGlobalPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #parentToGlobalPoint data-toc-label='parentToGlobalPoint' }

#### parentToGlobalBounds( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #parentToGlobalBounds data-toc-label='parentToGlobalBounds' }

#### globalToParentPoint( point : <span style="font-weight: 400; opacity: 80%;">Vector2</span> ) : <span style="font-weight: 400; opacity: 80%;">Vector2</span> {: #globalToParentPoint data-toc-label='globalToParentPoint' }

#### globalToParentBounds( bounds : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> ) : <span style="font-weight: 400; opacity: 80%;">Bounds2</span> {: #globalToParentBounds data-toc-label='globalToParentBounds' }

#### getUniqueId() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #getUniqueId data-toc-label='getUniqueId' }

Concatenates the unique IDs of nodes in the trail, so that we can do id-based lookups

#### toString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toString data-toc-label='toString' }

Returns a string form of this object

#### toPathString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toPathString data-toc-label='toPathString' }

Cleaner string form which will show class names. Not optimized by any means, meant for debugging.

#### toDebugString() : <span style="font-weight: 400; opacity: 80%;">string</span> {: #toDebugString data-toc-label='toDebugString' }

Returns a debugging string ideal for logged output.

### Instance Properties

#### nodes : <span style="font-weight: 400; opacity: 80%;">Node[]</span> {: #nodes data-toc-label='nodes' }

The main nodes of the trail, in order from root to leaf

#### length : <span style="font-weight: 400; opacity: 80%;">number</span> {: #length data-toc-label='length' }

Shortcut for the length of nodes.

#### uniqueId : <span style="font-weight: 400; opacity: 80%;">string</span> {: #uniqueId data-toc-label='uniqueId' }

A unique identifier that should only be shared by other trails that are identical to this one.

#### indices : <span style="font-weight: 400; opacity: 80%;">number[]</span> {: #indices data-toc-label='indices' }

indices[x] stores the index of nodes[x] in nodes[x-1]'s children, e.g.
nodes[i].children[ indices[i] ] === nodes[i+1]

### Static Methods

#### eachPaintedTrailBetween( a : <span style="font-weight: 400; opacity: 80%;">Trail</span>, b : <span style="font-weight: 400; opacity: 80%;">Trail</span>, callback : <span style="font-weight: 400; opacity: 80%;">( trail: Trail ) =&gt; void</span>, excludeEndTrails : <span style="font-weight: 400; opacity: 80%;">boolean</span>, rootNode : <span style="font-weight: 400; opacity: 80%;">Node</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #eachPaintedTrailBetween data-toc-label='eachPaintedTrailBetween' }

Like eachTrailBetween, but only fires for painted trails. If callback returns true, subtree will be skipped

#### eachTrailBetween( a : <span style="font-weight: 400; opacity: 80%;">Trail</span>, b : <span style="font-weight: 400; opacity: 80%;">Trail</span>, callback : <span style="font-weight: 400; opacity: 80%;">( trail: Trail ) =&gt; void</span>, excludeEndTrails : <span style="font-weight: 400; opacity: 80%;">boolean</span>, rootNode : <span style="font-weight: 400; opacity: 80%;">Node</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #eachTrailBetween data-toc-label='eachTrailBetween' }

Global way of iterating across trails. when callback returns true, subtree will be skipped

#### branchIndex( a : <span style="font-weight: 400; opacity: 80%;">Trail</span>, b : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">number</span> {: #branchIndex data-toc-label='branchIndex' }

The index at which the two trails diverge. If a.length === b.length === branchIndex, the trails are identical

#### sharedTrail( a : <span style="font-weight: 400; opacity: 80%;">Trail</span>, b : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">Trail</span> {: #sharedTrail data-toc-label='sharedTrail' }

The subtrail from the root that both trails share

#### appendAncestorTrailsWithPredicate( trailResults : <span style="font-weight: 400; opacity: 80%;">Trail[]</span>, trail : <span style="font-weight: 400; opacity: 80%;">Trail</span>, predicate : <span style="font-weight: 400; opacity: 80%;">( node: Node ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #appendAncestorTrailsWithPredicate data-toc-label='appendAncestorTrailsWithPredicate' }

@param trailResults - Will be muted by appending matching trails
@param trail
@param predicate

#### appendDescendantTrailsWithPredicate( trailResults : <span style="font-weight: 400; opacity: 80%;">Trail[]</span>, trail : <span style="font-weight: 400; opacity: 80%;">Trail</span>, predicate : <span style="font-weight: 400; opacity: 80%;">( node: Node ) =&gt; boolean</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #appendDescendantTrailsWithPredicate data-toc-label='appendDescendantTrailsWithPredicate' }

@param trailResults - Will be muted by appending matching trails
@param trail
@param predicate

#### spannedSubtrees( a : <span style="font-weight: 400; opacity: 80%;">Trail</span>, b : <span style="font-weight: 400; opacity: 80%;">Trail</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #spannedSubtrees data-toc-label='spannedSubtrees' }

Fires subtree(trail) or self(trail) on the callbacks to create disjoint subtrees (trails) that cover exactly the nodes
inclusively between a and b in rendering order.
We try to consolidate these as much as possible.

"a" and "b" are treated like self painted trails in the rendering order


Example tree:
  a
  - b
  --- c
  --- d
  - e
  --- f
  ----- g
  ----- h
  ----- i
  --- j
  ----- k
  - l
  - m
  --- n

spannedSubtrees( a, a ) -&gt; self( a );
spannedSubtrees( c, n ) -&gt; subtree( a ); NOTE: if b is painted, that wouldn't work!
spannedSubtrees( h, l ) -&gt; subtree( h ); subtree( i ); subtree( j ); self( l );
spannedSubtrees( c, i ) -&gt; [b,f] --- wait, include e self?

#### fromUniqueId( rootNode : <span style="font-weight: 400; opacity: 80%;">Node</span>, uniqueId : <span style="font-weight: 400; opacity: 80%;">string</span> ) : <span style="font-weight: 400; opacity: 80%;">Trail</span> {: #fromUniqueId data-toc-label='fromUniqueId' }

Re-create a trail to a root node from an existing Trail id. The rootNode must have the same Id as the first
Node id of uniqueId.

@param rootNode - the root of the trail being created
@param uniqueId - integers separated by ID_SEPARATOR, see getUniqueId



## Source Code

See the source for [Trail.ts](https://github.com/phetsims/scenery/blob/main/js/util/Trail.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
