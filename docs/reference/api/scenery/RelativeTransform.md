# RelativeTransform

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/RelativeTransform.js](https://github.com/phetsims/scenery/blob/main/js/display/RelativeTransform.js) for the most up-to-date information.

## Overview

RelativeTransform is a component of an Instance. It is responsible for tracking changes to "relative" transforms, and
computing them in an efficient manner.

A "relative" transform here is the transform that a Trail would have, not necessarily rooted at the display's root.
Imagine we have a CSS-transformed backbone div, and nodes underneath that render to Canvas. On the Canvas, we will
need to set the context's transform to the matrix that will transform from the displayed instances' local coordinates
frames to the CSS-transformed backbone instance. Notably, transforming the backbone instance or any of its ancestors
does NOT affect this "relative" transform from the instance to the displayed instances, while any Node transform
changes between (not including) the backbone instance and (including) the displayed instance WILL affect that
relative transform. This is key to setting the CSS transform on backbones, DOM nodes, having the transforms necessary
for the fastest Canvas display, and determining fitting bounds for layers.

Each Instance has its own "relative trail", although these aren't stored. We use implicit hierarchies in the Instance
tree for this purpose. If an Instance is a CSS-transformed backbone, or any other case that requires drawing beneath
to be done relative to its local coordinate frame, we call it a transform "root", and it has instance.isTransformed
set to true. This should NEVER change for an instance (any changes that would do this require reconstructing the
instance tree).

There are implicit hierarchies for each root, with trails starting from that root's children (they won't apply that
root's transform since we assume we are working within that root's local coordinate frame). These should be
effectively independent (if there are no bugs), so that flags affecting one implicit hierarchy will not affect the
other (dirty flags, etc.), and traversals should not cross these boundaries.

For various purposes, we want a system that can:
- every frame before repainting: notify listeners on instances whether its relative transform has changed
                                 (add|removeListener)
- every frame before repainting: precompute relative transforms on instances where we know this is required
                                 (add|removePrecompute)
- any time during repainting:    provide an efficient way to lazily compute relative transforms when needed

This is done by first having one step in the pre-repaint phase that traverses the tree where necessary, notifying
relative transform listeners, and precomputing relative transforms when they have changed (and precomputation is
requested). This traversal leaves metadata on the instances so that we can (fairly) efficiently force relative
transform "validation" any time afterwards that makes sure the matrix property is up-to-date.

First of all, to ensure we traverse the right parts of the tree, we need to keep metadata on what needs to be
traversed. This is done by tracking counts of listeners/precompution needs, both on the instance itself, and how many
children have these needs. We use counts instead of boolean flags so that we can update this quickly while (a) never
requiring full children scans to update this metadata, and (b) minimizing the need to traverse all the way up to the
root to update the metadata. The end result is hasDescendantListenerNeed and hasDescendantComputeNeed which compute,
respectively, whether we need to traverse this instance for listeners and precomputation. Additionally,
hasAncestorListenerNeed and hasAncestorComputeNeed compute whether our parent needs to traverse up to us.

The other tricky bits to remember for this traversal are the flags it sets, and how later validation uses and updates
these flags. First of all, we have relativeSelfDirty and relativeChildDirtyFrame. When a node's transform changes,
we mark relativeSelfDirty on the node, and relativeChildDirtyFrame for all ancestors up to (and including) the
transform root. relativeChildDirtyFrame allows us to prune our traversal to only modified subtrees. Additionally, so
that we can retain the invariant that it is "set" parent node if it is set on a child, we store the rendering frame
ID (unique to traversals) instead of a boolean true/false. Our traversal may skip subtrees where
relativeChildDirtyFrame is "set" due to no listeners or precomputation needed for that subtree, so if we used
booleans this would be violated. Violating that invariant would prevent us from "bailing out" when setting the
relativeChildDirtyFrame flag, and on EVERY transform change we would have to traverse ALL of the way to the root
(instead of the efficient "stop at the ancestor where it is also set").

relativeSelfDirty is initially set on instances whose nodes had transform changes (they mark that this relative
transform, and all transforms beneath, are dirty). We maintain the invariant that if a relative transform needs to be
recomputed, it or one of its ancestors WILL ALWAYS have this flag set. This is required so that later validation of
the relative transform can verify whether it has been changed in an efficient way. When we recompute the relative
transform for one instance, we have to set this flag on all children to maintain this invariant.

Additionally, so that we can have fast "validation" speed, we also store into relativeFrameId the last rendering
frame ID (counter) where we either verified that the relative transform is up to date, or we have recomputed it. Thus
when "validating" a relative transform that wasn't precomputed, we only need to scan up the ancestors to the first
one that was verified OK this frame (boolean flags are insufficient for this, since we would have to clear them all
to false on every frame, requiring a full tree traversal). In the future, we may set this flag to the frame
proactively during traversal to speed up validation, but that is not done at the time of this writing.

Some helpful notes for the scope of various relativeTransform bits:
                        (transformRoot) (regular) (regular) (transformRoot)
relativeChildDirtyFrame [---------------------------------]                 (int)
relativeSelfDirty                       [---------------------------------]
matrix                                  [---------------------------------] (transform on root applies to
                                                                            its parent context)
relativeFrameId                         [---------------------------------] (int)
child counts            [---------------------------------]                 (e.g. relativeChildrenListenersCount,
                                                                            relativeChildrenPrecomputeCount)
self counts                             [---------------------------------] (e.g. relativePrecomputeCount,
                                                                            relativeTransformListeners.length)
*********************

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class RelativeTransform {: #RelativeTransform }


```js
import { RelativeTransform } from 'scenerystack/scenery';
```
### Constructor

#### new RelativeTransform( instance ) {: #RelativeTransform-constructor data-toc-label='new RelativeTransform' }

### Instance Methods

#### initialize( display, trail ) {: #initialize data-toc-label='initialize' }

Responsible for initialization and cleaning of this. If the parameters are both null, we'll want to clean our
external references (like Instance does).
@public

@param {Display|null} display
@param {Trail|null} trail
@returns {RelativeTransform} - Returns this, to allow chaining.

#### addInstance( instance ) {: #addInstance data-toc-label='addInstance' }

@public

@param {Instance} instance

#### removeInstance( instance ) {: #removeInstance data-toc-label='removeInstance' }

@public

@param {Instance} instance

#### attachNodeListeners() {: #attachNodeListeners data-toc-label='attachNodeListeners' }

@public

#### detachNodeListeners() {: #detachNodeListeners data-toc-label='detachNodeListeners' }

@public

#### hasDescendantListenerNeed() {: #hasDescendantListenerNeed data-toc-label='hasDescendantListenerNeed' }

Only for descendants need, ignores 'self' need on isTransformed
@private

@returns {boolean}

#### hasAncestorListenerNeed() {: #hasAncestorListenerNeed data-toc-label='hasAncestorListenerNeed' }

Only for ancestors need, ignores child need on isTransformed
@private

@returns {boolean}

#### hasSelfListenerNeed() {: #hasSelfListenerNeed data-toc-label='hasSelfListenerNeed' }

@private

@returns {boolean}

#### incrementTransformListenerChildren() {: #incrementTransformListenerChildren data-toc-label='incrementTransformListenerChildren' }

Called on the ancestor of the instance with the need
@private

#### decrementTransformListenerChildren() {: #decrementTransformListenerChildren data-toc-label='decrementTransformListenerChildren' }

Called on the ancestor of the instance with the need
@private

#### addListener( listener ) {: #addListener data-toc-label='addListener' }

Called on the instance itself
@public

@param {function} listener

#### removeListener( listener ) {: #removeListener data-toc-label='removeListener' }

Called on the instance itself
@public

@param {function} listener

#### hasDescendantComputeNeed() {: #hasDescendantComputeNeed data-toc-label='hasDescendantComputeNeed' }

Only for descendants need, ignores 'self' need on isTransformed
@private

@returns {boolean}

#### hasAncestorComputeNeed() {: #hasAncestorComputeNeed data-toc-label='hasAncestorComputeNeed' }

Only for ancestors need, ignores child need on isTransformed
@private

@returns {boolean}

#### hasSelfComputeNeed() {: #hasSelfComputeNeed data-toc-label='hasSelfComputeNeed' }

@private

@returns {boolean}

#### incrementTransformPrecomputeChildren() {: #incrementTransformPrecomputeChildren data-toc-label='incrementTransformPrecomputeChildren' }

Called on the ancestor of the instance with the need
@private

#### decrementTransformPrecomputeChildren() {: #decrementTransformPrecomputeChildren data-toc-label='decrementTransformPrecomputeChildren' }

Called on the ancestor of the instance with the need
@private

#### addPrecompute() {: #addPrecompute data-toc-label='addPrecompute' }

Called on the instance itself
@public

#### removePrecompute() {: #removePrecompute data-toc-label='removePrecompute' }

Called on the instance itself
@public

#### onNodeTransformDirty() {: #onNodeTransformDirty data-toc-label='onNodeTransformDirty' }

Called immediately when the corresponding node has a transform change (can happen multiple times between renders)
@private

#### forceMarkTransformDirty() {: #forceMarkTransformDirty data-toc-label='forceMarkTransformDirty' }

@private

#### computeRelativeTransform() {: #computeRelativeTransform data-toc-label='computeRelativeTransform' }

Updates our matrix based on any parents, and the node's current transform
@private

#### isValidationNotNeeded() {: #isValidationNotNeeded data-toc-label='isValidationNotNeeded' }

@public

@returns {boolean}

#### validate() {: #validate data-toc-label='validate' }

Called from any place in the rendering process where we are not guaranteed to have a fresh relative transform.
needs to scan up the tree, so it is more expensive than precomputed transforms.
@returns Whether we had to update this transform
@public

#### updateTransformListenersAndCompute( ancestorWasDirty, ancestorIsDirty, frameId, passTransform ) {: #updateTransformListenersAndCompute data-toc-label='updateTransformListenersAndCompute' }

Called during the pre-repaint phase to (a) fire off all relative transform listeners that should be fired, and
(b) precompute transforms were desired.
@public

@param {boolean} ancestorWasDirty
@param {boolean} ancestorIsDirty
@param {number} frameId
@param {boolean} passTransform

#### notifyRelativeTransformListeners() {: #notifyRelativeTransformListeners data-toc-label='notifyRelativeTransformListeners' }

@private

#### audit( frameId, allowValidationNotNeededChecks ) {: #audit data-toc-label='audit' }

@public

@param {number} frameId
@param {boolean} allowValidationNotNeededChecks



## Source Code

See the source for [RelativeTransform.js](https://github.com/phetsims/scenery/blob/main/js/display/RelativeTransform.js) in the [scenery](https://github.com/phetsims/scenery) repository.
