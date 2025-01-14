# Instance

## Overview

An instance that is specific to the display (not necessarily a global instance, could be in a Canvas cache, etc),
that is needed to tracking instance-specific display information, and signals to the display system when other
changes are necessary.

Instances generally form a true tree, as opposed to the DAG of nodes. The one exception is for shared Canvas caches,
where multiple instances can point to one globally-stored (shared) cache instance.

An Instance is pooled, but when constructed will not automatically create children, drawables, etc.
syncTree() is responsible for synchronizing the instance itself and its entire subtree.

Instances are created as 'stateless' instances, but during syncTree the rendering state (properties to determine
how to construct the drawable tree for this instance and its subtree) are set.

While Instances are considered 'stateful', they will have listeners added to their Node which records actions taken
in-between Display.updateDisplay().

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Instance {: #Instance }


```js
import { Instance } from 'scenerystack/scenery';
```
### Constructor

#### new Instance( display, trail, isDisplayRoot, isSharedCanvasCacheRoot ) {: #Instance-constructor data-toc-label='new Instance' }

### Instance Methods

#### initialize( display, trail, isDisplayRoot, isSharedCanvasCacheRoot ) {: #initialize data-toc-label='initialize' }

@public

@param {Display} display - Instances are bound to a single display
@param {Trail} trail - The list of ancestors going back up to our root instance (for the display, or for a cache)
@param {boolean} isDisplayRoot - Whether our instance is for the root node provided to the Display.
@param {boolean} isSharedCanvasCacheRoot - Whether our instance is the root for a shared Canvas cache (which can
                                           be used multiple places in the main instance tree)

#### cleanInstance( display, trail ) {: #cleanInstance data-toc-label='cleanInstance' }

Called for initialization of properties (via initialize(), via constructor), and to clean the instance for
placement in the pool (don't leak memory).
@private

If the parameters are null, we remove all external references so that we don't leak memory.

@param {Display|null} display - Instances are bound to a single display
@param {Trail|null} trail - The list of ancestors going back up to our root instance (for the display, or for a cache)

#### cleanSyncTreeResults() {: #cleanSyncTreeResults data-toc-label='cleanSyncTreeResults' }

Initializes or clears properties that are all set as pseudo 'return values' of the syncTree() method. It is the
responsibility of the caller of syncTree() to afterwards (optionally read these results and) clear the references
using this method to prevent memory leaks.
@private

TODO: consider a pool of (or a single global) typed return object(s), since setting these values on the instance https://github.com/phetsims/scenery/issues/1581
generally means hitting the heap, and can slow us down.

#### updateRenderingState() {: #updateRenderingState data-toc-label='updateRenderingState' }

Updates the rendering state properties, and returns a {boolean} flag of whether it was successful if we were
already stateful.
@private

Rendering state properties determine how we construct the drawable tree from our instance tree (e.g. do we
create an SVG or Canvas rectangle, where to place CSS transforms, how to handle opacity, etc.)

Instances start out as 'stateless' until updateRenderingState() is called the first time.

Node changes that can cause a potential state change (using Node event listeners):
- hints
- opacity
- clipArea
- _rendererSummary
- _rendererBitmask

State changes that can cause cascading state changes in descendants:
- isUnderCanvasCache
- preferredRenderers

#### getStateString() {: #getStateString data-toc-label='getStateString' }

A short string that contains a summary of the rendering state, for debugging/logging purposes.
@public

@returns {string}

#### baseSyncTree() {: #baseSyncTree data-toc-label='baseSyncTree' }

The main entry point for syncTree(), called on the root instance. See syncTree() for more information.
@public

#### syncTree() {: #syncTree data-toc-label='syncTree' }

Updates the rendering state, synchronizes the instance sub-tree (so that our instance tree matches
the Node tree the client provided), and back-propagates {ChangeInterval} information for stitching backbones
and/or caches.
@private

syncTree() also sets a number of pseudo 'return values' (documented in cleanSyncTreeResults()). After calling
syncTree() and optionally reading those results, cleanSyncTreeResults() should be called on the same instance
in order to prevent memory leaks.

@returns {boolean} - Whether the sync was possible. If it wasn't, a new instance subtree will need to be created.

#### localSyncTree( selfChanged ) {: #localSyncTree data-toc-label='localSyncTree' }

Responsible for syncing children, connecting the drawable linked list as needed, and outputting change intervals
and first/last drawable information.
@private

@param {boolean} selfChanged

#### updateSelfDrawable() {: #updateSelfDrawable data-toc-label='updateSelfDrawable' }

If necessary, create/replace/remove our selfDrawable.
@private

@returns whether the selfDrawable changed

#### updateIncompatibleChildInstance( childInstance, index ) {: #updateIncompatibleChildInstance data-toc-label='updateIncompatibleChildInstance' }

Returns the up-to-date instance.
@private

@param {Instance} childInstance
@param {number} index
@returns {Instance}

#### groupSyncTree( wasStateless ) {: #groupSyncTree data-toc-label='groupSyncTree' }

@private

@param {boolean} wasStateless

#### sharedSyncTree() {: #sharedSyncTree data-toc-label='sharedSyncTree' }

@private

#### prepareChildInstances( wasStateless ) {: #prepareChildInstances data-toc-label='prepareChildInstances' }

@private

@param {boolean} wasStateless

#### ensureSharedCacheInitialized() {: #ensureSharedCacheInitialized data-toc-label='ensureSharedCacheInitialized' }

@private

#### shouldIncludeInParentDrawables() {: #shouldIncludeInParentDrawables data-toc-label='shouldIncludeInParentDrawables' }

Whether out drawables (from firstDrawable to lastDrawable) should be included in our parent's drawables
@private

@returns {boolean}

#### findPreviousDrawable( childIndex ) {: #findPreviousDrawable data-toc-label='findPreviousDrawable' }

Finds the closest drawable (not including the child instance at childIndex) using lastDrawable, or null
@private

TODO: check usage? https://github.com/phetsims/scenery/issues/1581

@param {number} childIndex
@returns {Drawable|null}

#### findNextDrawable( childIndex ) {: #findNextDrawable data-toc-label='findNextDrawable' }

Finds the closest drawable (not including the child instance at childIndex) using nextDrawable, or null
@private

TODO: check usage? https://github.com/phetsims/scenery/issues/1581

@param {number} childIndex
@returns {Drawable|null}

#### appendInstance( instance ) {: #appendInstance data-toc-label='appendInstance' }

@private

@param {Instance} instance

#### insertInstance( instance, index ) {: #insertInstance data-toc-label='insertInstance' }

@private

NOTE: different parameter order compared to Node

@param {Instance} instance
@param {number} index

#### removeInstance( instance ) {: #removeInstance data-toc-label='removeInstance' }

@private

@param {Instance} instance

#### removeInstanceWithIndex( instance, index ) {: #removeInstanceWithIndex data-toc-label='removeInstanceWithIndex' }

@private

@param {Instance} instance
@param {number} index

#### replaceInstanceWithIndex( childInstance, replacementInstance, index ) {: #replaceInstanceWithIndex data-toc-label='replaceInstanceWithIndex' }

@private

@param {Instance} childInstance
@param {Instance} replacementInstance
@param {number} index

#### reorderInstances( minChangeIndex, maxChangeIndex ) {: #reorderInstances data-toc-label='reorderInstances' }

For handling potential reordering of child instances inclusively between the min and max indices.
@private

@param {number} minChangeIndex
@param {number} maxChangeIndex

#### findChildInstanceOnNode( node ) {: #findChildInstanceOnNode data-toc-label='findChildInstanceOnNode' }

If we have a child instance that corresponds to this node, return it (otherwise null).
@private

@param {Node} node
@returns {Instance|null}

#### onChildInserted( childNode, index ) {: #onChildInserted data-toc-label='onChildInserted' }

Event callback for Node's 'childInserted' event, used to track children.
@private

@param {Node} childNode
@param {number} index

#### onChildRemoved( childNode, index ) {: #onChildRemoved data-toc-label='onChildRemoved' }

Event callback for Node's 'childRemoved' event, used to track children.
@private

@param {Node} childNode
@param {number} index

#### onChildrenReordered( minChangeIndex, maxChangeIndex ) {: #onChildrenReordered data-toc-label='onChildrenReordered' }

Event callback for Node's 'childrenReordered' event
@private

@param {number} minChangeIndex
@param {number} maxChangeIndex

#### onVisibilityChange() {: #onVisibilityChange data-toc-label='onVisibilityChange' }

Event callback for Node's 'visibility' event, used to notify about stitch changes.
@private

#### onOpacityChange() {: #onOpacityChange data-toc-label='onOpacityChange' }

Event callback for Node's 'opacity' change event.
@private

#### markChildVisibilityDirty() {: #markChildVisibilityDirty data-toc-label='markChildVisibilityDirty' }

@private

#### updateDrawableFittability( fittable ) {: #updateDrawableFittability data-toc-label='updateDrawableFittability' }

Updates the currently fittability for all of the drawables attached to this instance.
@public

@param {boolean} fittable

#### updateVisibility( parentGloballyVisible, parentGloballyVoicingVisible, parentRelativelyVisible, updateFullSubtree ) {: #updateVisibility data-toc-label='updateVisibility' }

Updates the visible/relativeVisible flags on the Instance and its entire subtree.
@public

@param {boolean} parentGloballyVisible - Whether our parent (if any) is globally visible
@param {boolean} parentGloballyVoicingVisible - Whether our parent (if any) is globally voicingVisible.
@param {boolean} parentRelativelyVisible - Whether our parent (if any) is relatively visible
@param {boolean} updateFullSubtree - If true, we will visit the entire subtree to ensure visibility is correct.

#### getDescendantCount() {: #getDescendantCount data-toc-label='getDescendantCount' }

@private

@returns {number}

#### addSVGGroup( group ) {: #addSVGGroup data-toc-label='addSVGGroup' }

Add a reference for an SVG group (fastest way to track them)
@public

@param {SVGGroup} group

#### removeSVGGroup( group ) {: #removeSVGGroup data-toc-label='removeSVGGroup' }

Remove a reference for an SVG group (fastest way to track them)
@public

@param {SVGGroup} group

#### lookupSVGGroup( block ) {: #lookupSVGGroup data-toc-label='lookupSVGGroup' }

Returns null when a lookup fails (which is legitimate)
@public

@param {SVGBlock} block
@returns {SVGGroup|null}

#### getFilterRootInstance() {: #getFilterRootInstance data-toc-label='getFilterRootInstance' }

What instance have filters (opacity/visibility/clip) been applied up to?
@public

@returns {Instance}

#### getTransformRootInstance() {: #getTransformRootInstance data-toc-label='getTransformRootInstance' }

What instance transforms have been applied up to?
@public

@returns {Instance}

#### getVisibilityRootInstance() {: #getVisibilityRootInstance data-toc-label='getVisibilityRootInstance' }

@public

@returns {Instance}

#### attachNodeListeners() {: #attachNodeListeners data-toc-label='attachNodeListeners' }

@private

#### detachNodeListeners() {: #detachNodeListeners data-toc-label='detachNodeListeners' }

@private

#### markRenderStateDirty() {: #markRenderStateDirty data-toc-label='markRenderStateDirty' }

Ensure that the render state is updated in the next syncTree()
@private

#### markSkipPruning() {: #markSkipPruning data-toc-label='markSkipPruning' }

Ensure that this instance and its children will be visited in the next syncTree()
@private

#### getBranchIndexTo( instance ) {: #getBranchIndexTo data-toc-label='getBranchIndexTo' }

@public

NOTE: used in CanvasBlock internals, performance-critical.

@param {Instance} instance
@returns {number}

#### dispose() {: #dispose data-toc-label='dispose' }

Clean up listeners and garbage, so that we can be recycled (or pooled)
@public

#### audit( frameId, allowValidationNotNeededChecks ) {: #audit data-toc-label='audit' }

@public

@param {number} frameId
@param {boolean} allowValidationNotNeededChecks

#### auditVisibility( parentVisible ) {: #auditVisibility data-toc-label='auditVisibility' }

Applies checks to make sure our visibility tracking is working as expected.
@public

@param {boolean} parentVisible

#### auditChangeIntervals( oldFirstDrawable, oldLastDrawable, newFirstDrawable, newLastDrawable ) {: #auditChangeIntervals data-toc-label='auditChangeIntervals' }

@private

@param {Drawable|null} oldFirstDrawable
@param {Drawable|null} oldLastDrawable
@param {Drawable|null} newFirstDrawable
@param {Drawable|null} newLastDrawable

#### toString() {: #toString data-toc-label='toString' }

Returns a string form of this object
@public

@returns {string}

### Instance Properties

#### display {: #display data-toc-label='display' }

@public
@type {Display|null}



## Source Code

See the source for [Instance.js](https://github.com/phetsims/scenery/blob/main/js/display/Instance.js) in the [scenery](https://github.com/phetsims/scenery) repository.
