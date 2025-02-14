# Trail

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/util/Trail.ts](https://github.com/phetsims/scenery/blob/main/js/util/Trail.ts) for the most up-to-date information.

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

#### new Trail( nodes? : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | [Node](../scenery/Node.md)[] | [Node](../scenery/Node.md)</span> ) {: #Trail-constructor data-toc-label='new Trail' }

### Instance Methods

#### copy() : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #copy data-toc-label='copy' }

Returns a copy of this Trail that can be modified independently

#### isValid() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isValid data-toc-label='isValid' }

Whether all nodes in the trail are still connected from the trail's root to its leaf.

#### isVisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isVisible data-toc-label='isVisible' }

This trail is visible only if all nodes on it are marked as visible

#### isPDOMVisible() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPDOMVisible data-toc-label='isPDOMVisible' }

This trail is pdomVisible only if all nodes on it are marked as pdomVisible

#### getOpacity() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getOpacity data-toc-label='getOpacity' }

#### isPickable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isPickable data-toc-label='isPickable' }

Essentially whether this node is visited in the hit-testing operation

#### get( index : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #get data-toc-label='get' }

#### slice( startIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endIndex? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #slice data-toc-label='slice' }

#### subtrailTo( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, excludeNode ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #subtrailTo data-toc-label='subtrailTo' }

TODO: consider renaming to subtrailToExcluding and subtrailToIncluding? https://github.com/phetsims/scenery/issues/1581

#### isEmpty() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isEmpty data-toc-label='isEmpty' }

#### getMatrixConcatenation( startingIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span>, endingIndex : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getMatrixConcatenation data-toc-label='getMatrixConcatenation' }

Returns the matrix multiplication of our selected nodes transformation matrices.

@param startingIndex - Include nodes matrices starting from this index (inclusive)
@param endingIndex - Include nodes matrices up to this index (exclusive)

#### getMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getMatrix data-toc-label='getMatrix' }

From local to global

e.g. local coordinate frame of the leaf node to the parent coordinate frame of the root node

#### getAncestorMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getAncestorMatrix data-toc-label='getAncestorMatrix' }

From local to next-to-global (ignores root node matrix)

e.g. local coordinate frame of the leaf node to the local coordinate frame of the root node

#### getParentMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getParentMatrix data-toc-label='getParentMatrix' }

From parent to global

e.g. parent coordinate frame of the leaf node to the parent coordinate frame of the root node

#### getAncestorParentMatrix() : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getAncestorParentMatrix data-toc-label='getAncestorParentMatrix' }

From parent to next-to-global (ignores root node matrix)

e.g. parent coordinate frame of the leaf node to the local coordinate frame of the root node

#### getTransform() : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md)</span> {: #getTransform data-toc-label='getTransform' }

From local to global

e.g. local coordinate frame of the leaf node to the parent coordinate frame of the root node

#### getParentTransform() : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md)</span> {: #getParentTransform data-toc-label='getParentTransform' }

From parent to global

e.g. parent coordinate frame of the leaf node to the parent coordinate frame of the root node

#### addAncestor( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, index? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #addAncestor data-toc-label='addAncestor' }

#### removeAncestor() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #removeAncestor data-toc-label='removeAncestor' }

#### addDescendant( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span>, index? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #addDescendant data-toc-label='addDescendant' }

#### removeDescendant() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #removeDescendant data-toc-label='removeDescendant' }

#### addDescendantTrail( trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) {: #addDescendantTrail data-toc-label='addDescendantTrail' }

#### removeDescendantTrail( trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) {: #removeDescendantTrail data-toc-label='removeDescendantTrail' }

#### reindex() {: #reindex data-toc-label='reindex' }

Refreshes the internal index references (important if any children arrays were modified!)

#### setImmutable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setImmutable data-toc-label='setImmutable' }

#### setMutable() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">this</span></span> {: #setMutable data-toc-label='setMutable' }

#### areIndicesValid() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #areIndicesValid data-toc-label='areIndicesValid' }

#### equals( other : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #equals data-toc-label='equals' }

#### upToNode( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #upToNode data-toc-label='upToNode' }

Returns a new Trail from the root up to the parameter node.

#### isExtensionOf( other : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, allowSameTrail? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isExtensionOf data-toc-label='isExtensionOf' }

Whether this trail contains the complete 'other' trail, but with added descendants afterwards.

@param other - is other a subset of this trail?
@param allowSameTrail

#### containsNode( node : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #containsNode data-toc-label='containsNode' }

Returns whether a given node is contained in the trail.

#### getTransformTo( otherTrail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;">[Transform3](../dot/Transform3.md)</span> {: #getTransformTo data-toc-label='getTransformTo' }

A transform from our local coordinate frame to the other trail's local coordinate frame

#### getMatrixTo( otherTrail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;">[Matrix3](../dot/Matrix3.md)</span> {: #getMatrixTo data-toc-label='getMatrixTo' }

Returns a matrix that transforms a point in our last node's local coordinate frame to the other trail's last node's
local coordinate frame

#### getBranchIndexTo( otherTrail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getBranchIndexTo data-toc-label='getBranchIndexTo' }

Returns the first index that is different between this trail and the other trail.

If the trails are identical, the index should be equal to the trail's length.

#### getLastInputEnabledIndex() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getLastInputEnabledIndex data-toc-label='getLastInputEnabledIndex' }

Returns the last (largest) index into the trail's nodes that has inputEnabled=true.

#### getCursorCheckIndex() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #getCursorCheckIndex data-toc-label='getCursorCheckIndex' }

Returns the leaf-most index, unless there is a Node with inputEnabled=false (in which case, the lowest index
for those matching Nodes are returned).

#### nodeFromTop( offset : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> ) : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #nodeFromTop data-toc-label='nodeFromTop' }

TODO: phase out in favor of get() https://github.com/phetsims/scenery/issues/1581

#### lastNode() : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #lastNode data-toc-label='lastNode' }

#### rootNode() : <span style="font-weight: 400;">[Node](../scenery/Node.md)</span> {: #rootNode data-toc-label='rootNode' }

#### previous() : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #previous data-toc-label='previous' }

Returns the previous graph trail in the order of self-rendering

#### previousPainted() : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #previousPainted data-toc-label='previousPainted' }

Like previous(), but keeps moving back until the trail goes to a node with isPainted() === true

#### next() : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #next data-toc-label='next' }

In the order of self-rendering

#### nextPainted() : <span style="font-weight: 400;">[Trail](../scenery/Trail.md) | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #nextPainted data-toc-label='nextPainted' }

Like next(), but keeps moving back until the trail goes to a node with isPainted() === true

#### compare( other : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #compare data-toc-label='compare' }

Standard Java-style compare. -1 means this trail is before (under) the other trail, 0 means equal, and 1 means this trail is
after (on top of) the other trail.
A shorter subtrail will compare as -1.

Assumes that the Trails are properly indexed. If not, please reindex them!

Comparison is for the rendering order, so an ancestor is 'before' a descendant

#### isBefore( other : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isBefore data-toc-label='isBefore' }

#### isAfter( other : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isAfter data-toc-label='isAfter' }

#### localToGlobalPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #localToGlobalPoint data-toc-label='localToGlobalPoint' }

#### localToGlobalBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #localToGlobalBounds data-toc-label='localToGlobalBounds' }

#### globalToLocalPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #globalToLocalPoint data-toc-label='globalToLocalPoint' }

#### globalToLocalBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #globalToLocalBounds data-toc-label='globalToLocalBounds' }

#### parentToGlobalPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #parentToGlobalPoint data-toc-label='parentToGlobalPoint' }

#### parentToGlobalBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #parentToGlobalBounds data-toc-label='parentToGlobalBounds' }

#### globalToParentPoint( point : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> ) : <span style="font-weight: 400;">[Vector2](../dot/Vector2.md)</span> {: #globalToParentPoint data-toc-label='globalToParentPoint' }

#### globalToParentBounds( bounds : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> ) : <span style="font-weight: 400;">[Bounds2](../dot/Bounds2.md)</span> {: #globalToParentBounds data-toc-label='globalToParentBounds' }

#### getUniqueId() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #getUniqueId data-toc-label='getUniqueId' }

Concatenates the unique IDs of nodes in the trail, so that we can do id-based lookups

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns a string form of this object

#### toPathString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toPathString data-toc-label='toPathString' }

Cleaner string form which will show class names. Not optimized by any means, meant for debugging.

#### toDebugString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toDebugString data-toc-label='toDebugString' }

Returns a debugging string ideal for logged output.

### Instance Properties

#### nodes : <span style="font-weight: 400;">[Node](../scenery/Node.md)[]</span> {: #nodes data-toc-label='nodes' }

The main nodes of the trail, in order from root to leaf

#### length : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #length data-toc-label='length' }

Shortcut for the length of nodes.

#### uniqueId : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #uniqueId data-toc-label='uniqueId' }

A unique identifier that should only be shared by other trails that are identical to this one.

#### indices : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span>[]</span> {: #indices data-toc-label='indices' }

indices[x] stores the index of nodes[x] in nodes[x-1]'s children, e.g.
nodes[i].children[ indices[i] ] === nodes[i+1]

### Static Methods

#### branchIndex( a : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, b : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #branchIndex data-toc-label='branchIndex' }

The index at which the two trails diverge. If a.length === b.length === branchIndex, the trails are identical

#### sharedTrail( a : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, b : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> {: #sharedTrail data-toc-label='sharedTrail' }

The subtrail from the root that both trails share

#### appendAncestorTrailsWithPredicate( trailResults : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)[]</span>, trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, predicate : <span style="font-weight: 400;">( node: [Node](../scenery/Node.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #appendAncestorTrailsWithPredicate data-toc-label='appendAncestorTrailsWithPredicate' }

@param trailResults - Will be muted by appending matching trails
@param trail
@param predicate

#### appendDescendantTrailsWithPredicate( trailResults : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)[]</span>, trail : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, predicate : <span style="font-weight: 400;">( node: [Node](../scenery/Node.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> ) {: #appendDescendantTrailsWithPredicate data-toc-label='appendDescendantTrailsWithPredicate' }

@param trailResults - Will be muted by appending matching trails
@param trail
@param predicate

#### spannedSubtrees( a : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span>, b : <span style="font-weight: 400;">[Trail](../scenery/Trail.md)</span> ) {: #spannedSubtrees data-toc-label='spannedSubtrees' }

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



## Type TrailCallback {: #TrailCallback }


```js
import type { TrailCallback } from 'scenerystack/scenery';
```


( ( trail: [Trail](../scenery/Trail.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span> ) | ( ( trail: [Trail](../scenery/Trail.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">void</span> )



## Source Code

See the source for [Trail.ts](https://github.com/phetsims/scenery/blob/main/js/util/Trail.ts) in the [scenery](https://github.com/phetsims/scenery) repository.
