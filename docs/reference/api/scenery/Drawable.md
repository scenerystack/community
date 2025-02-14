# Drawable

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/Drawable.js](https://github.com/phetsims/scenery/blob/main/js/display/Drawable.js) for the most up-to-date information.

## Overview

Something that can be displayed with a specific renderer.
NOTE: Drawables are assumed to be pooled with PoolableMixin, as freeToPool() is called.

A drawable's life-cycle starts with its initialization (calling initialize once), and ends with its disposal
(where it is freed to its own pool).

Drawables are part of an unordered drawable "tree" where each drawable can have a parent references. This is used
for, among other things, propagation of 'dirty' flags and usage during stitching.

Blocks and backbones (sub-types of Drawable) contain children (creating a tree, although shared caches make it more
like a DAG). Our Scenery Display is built from a root backbone, that contains blocks. This can be Canvas/SVG, but
may also contain a DOM block with another backbone (used for opacity, CSS transforms, etc.).

Drawables are part of two inherent linked lists: an "old" and a "new" one. Usually they are the same, but during
updates, the "new" linked list is changed to accomodate any changes, and then a stitch process is done to mark which
block (parent) we will belong to.

As part of stitching or other processes, a Drawable is responsible for recording its pending state changes. Most
notably, we need to determine whether a drawable is being added, moved, or removed in the next frame. This is done
with an idempotent API using notePendingAddition/notePendingRemoval/notePendingMove. Either:
  - One or more notePendingMove() calls are made. When we are updated with updateBlock(), we will move to the
    last block referenced with notePendingMove() (which may be a no-op if it is the same block).
  - Zero or one notePendingAddition() call is made, and zero or one notePendingRemoval() call is made. Our action is:
    - No addition, no removal: nothing done
    - No addition, one removal: We are removed from our last block (and then presumably disposed later)
    - One addition, no removal: We are added to our new (pending) block, without being removed from anything
    - One addition, one removal: We are removed from our last block and added to our new (pending) block.
It is set up so that the order of addition/removal calls doesn't matter, since these can occur from within different
backbone stitches (removed in one, added in another, or with the order reversed). Our updateBlocks() is guaranteed
to be called after all of those have been completed.

APIs for drawable types:

DOM: {
  domElement: {HTMLElement}
}
Canvas: {
  paintCanvas: function( {CanvasContextWrapper} wrapper, {Node} node, {Matrix3} matrix )
}
SVG: {
  svgElement: {SVGElement}
}
WebGL: {
  onAddToBlock: function( {WebGLBlock} block )
  onRemoveFromBlock: function( {WebGLBlock} block )
  render: function( {ShaderProgram} shaderProgram )
  shaderAttributes: {string[]} - names of vertex attributes to be used
}

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Drawable {: #Drawable }


```js
import { Drawable } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( renderer ) {: #initialize data-toc-label='initialize' }

@public

@param {number} renderer
@returns {Drawable} - for chaining

#### clean() {: #clean data-toc-label='clean' }

Cleans the state of this drawable to the defaults.
@protected

#### update() {: #update data-toc-label='update' }

Updates the DOM appearance of this drawable (whether by preparing/calling draw calls, DOM element updates, etc.)
@public

Generally meant to be overridden in subtypes (but should still call this to check if they should update).

@returns {boolean} - Whether the update should continue (if false, further updates in supertype steps should not
                     be done).

#### setVisible( visible ) {: #setVisible data-toc-label='setVisible' }

Sets whether the drawable is visible.
@public

@param {boolean} visible

#### isVisible() {: #isVisible data-toc-label='isVisible' }

Returns whether the drawable is visible.
@public

@returns {boolean}

#### setFittable( fittable ) {: #setFittable data-toc-label='setFittable' }

Sets whether this drawable is fittable.
@public

NOTE: Should be called just after initialization (before being added to blocks) if we aren't fittable.

@param {boolean} fittable

#### isFittable() {: #isFittable data-toc-label='isFittable' }

Returns whether the drawable is fittable.
@public

@returns {boolean}

#### setBlockBackbone( backboneInstance ) {: #setBlockBackbone data-toc-label='setBlockBackbone' }

Called to add a block (us) as a child of a backbone
@public

@param {BackboneDrawable} backboneInstance

#### notePendingAddition( display, block, backbone ) {: #notePendingAddition data-toc-label='notePendingAddition' }

Notifies the Display of a pending addition.
@public

@param {Display} display
@param {Block} block
@param {BackboneDrawable} backbone

#### notePendingRemoval( display ) {: #notePendingRemoval data-toc-label='notePendingRemoval' }

Notifies the Display of a pending removal.
@public

@param {Display} display

#### notePendingMove( display, block ) {: #notePendingMove data-toc-label='notePendingMove' }

Notifies the Display of a pending move.
@public

Moving a drawable that isn't changing backbones, just potentially changing its block.
It should not have notePendingAddition or notePendingRemoval called on it.

@param {Display} display
@param {Block} block

#### updateBlock() {: #updateBlock data-toc-label='updateBlock' }

Updates the block.
@public

@returns {boolean} - Whether we changed our block

#### updateLinks() {: #updateLinks data-toc-label='updateLinks' }

Moves the old-drawable-linked-list information into the current-linked-list.
@public

#### markDirty() {: #markDirty data-toc-label='markDirty' }

Marks this as needing an update.
@public

#### markLinksDirty( display ) {: #markLinksDirty data-toc-label='markLinksDirty' }

Marks our linked list as dirty.
@public

Will ensure that after syncTree phase is done, we will have updateLinks() called on us

@param {Display} display

#### markForDisposal( display ) {: #markForDisposal data-toc-label='markForDisposal' }

Marks us for disposal in the next phase of updateDisplay(), and disconnects from the linked list
@public

@param {Display} display

#### disposeImmediately( display ) {: #disposeImmediately data-toc-label='disposeImmediately' }

Disposes immediately, and makes no guarantees about out linked list's state (disconnects).
@public

@param {Display} display

#### dispose() {: #dispose data-toc-label='dispose' }

Releases references
@public

NOTE: Generally do not call this directly, use markForDisposal (so Display will dispose us), or disposeImmediately.

@param {*} !this.isDisposed
@param {*} 'We should not re-dispose drawables'

#### audit( allowPendingBlock, allowPendingList, allowDirty ) {: #audit data-toc-label='audit' }

Runs checks on the drawable, based on certain flags.
@public

@param {boolean} allowPendingBlock
@param {boolean} allowPendingList
@param {boolean} allowDirty

#### toString() {: #toString data-toc-label='toString' }

Returns a string form of this object
@public

@returns {string}

#### toDetailedString() {: #toDetailedString data-toc-label='toDetailedString' }

Returns a more-informative string form of this object.
@public

@returns {string}

### Static Methods

#### connectDrawables( a, b, display ) {: #connectDrawables data-toc-label='connectDrawables' }

Connects the two drawables in the linked list, while cutting the previous connection and marking
@public

@param {Drawable} a
@param {Drawable} b
@param {Display} display

#### disconnectBefore( drawable, display ) {: #disconnectBefore data-toc-label='disconnectBefore' }

Disconnects the previous/before drawable from the provided one (for the linked list).
@public

@param {Drawable} drawable
@param {Display} display

#### disconnectAfter( drawable, display ) {: #disconnectAfter data-toc-label='disconnectAfter' }

Disconnects the next/after drawable from the provided one (for the linked list).
@public

@param {Drawable} drawable
@param {Display} display

#### listToArray( firstDrawable, lastDrawable ) {: #listToArray data-toc-label='listToArray' }

Converts a linked list of drawables to an array (useful for debugging/assertion purposes, should not be used in
production code).
@public

@param {Drawable} firstDrawable
@param {Drawable} lastDrawable
@returns {Array.&lt;Drawable&gt;}

#### oldListToArray( firstDrawable, lastDrawable ) {: #oldListToArray data-toc-label='oldListToArray' }

Converts an old linked list of drawables to an array (useful for debugging/assertion purposes, should not be
used in production code)
@public

@param {Drawable} firstDrawable
@param {Drawable} lastDrawable
@returns {Array.&lt;Drawable&gt;}



## Source Code

See the source for [Drawable.js](https://github.com/phetsims/scenery/blob/main/js/display/Drawable.js) in the [scenery](https://github.com/phetsims/scenery) repository.
