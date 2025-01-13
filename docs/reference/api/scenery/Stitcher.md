# Stitcher

## Overview

Abstract base type (and API) for stitching implementations. Stitching is:
A method of updating the blocks for a backbone (the changes from the previous frame to the current frame), and
setting up the drawables to be attached/detached from blocks. At a high level:
  - We have an ordered list of blocks displayed in the last frame.
  - We have an ordered list of drawables displayed in the last frame (and what block they are part of).
  - We have an ordered list of drawables that will be displayed in the next frame (and whether they were part of our
    backbone, and if so what block they were in).
  - We need to efficiently create/dispose required blocks, add/remove drawables from blocks, notify blocks of their
    drawable range, and ensure blocks are displayed back-to-front.

Since stitching usually only involves one or a few small changes (except for on sim initialization), the stitch
method is provided with a list of intervals that were (potentially) changed. This consists of a linked-list of
intervals (it is constructed during recursion through a tree that skips known-unchanged subtrees). The intervals
are completely disjoint (don't overlap, and aren't adjacent - there is at least one drawable that is unchanged
in-between change intervals).

Assumes the same object instance will be reused multiple times, possibly for different backbones.

Any stitcher implementations should always call initialize() first and clean() at the end, so that we can set up
and then clean up any object references (allowing them to be garbage-collected or pooled more safely).

Stitcher responsibilities:
  1. Blocks used in the previous frame but not used in the current frame (no drawables, not attached) should be
     marked for disposal.
  2. Blocks should be created as necessary.
  3. If a changed drawable is removed from a block, it should have notePendingRemoval called on it.
  4. If a changed drawable is added to a block, it should have notePendingAddition called on it.
  5. If an unchanged drawable is to have a block change, it should have notePendingMove called on it.
  6. New blocks should be added to the DOM (appendChild presumably)
  7. Removed blocks should be removed from the DOM (removeChild)
     NOTE: check for child-parent relationship, since DOM blocks (wrappers) may have been
     added to the DOM elsewhere in another backbone's stitch already (which in the DOM
     automatically removes it from our backbone's div)
  8. If a block's first or last drawable changes, it should have notifyInterval called on it.
  9. At the end of the stitch, the backbone should have a way of iterating over its blocks in order (preferably an
     Array for fast repaint iteration)
  10. New blocks should have setBlockBackbone( backbone ) called on them
  11. Blocks with any drawable change should have backbone.markDirtyDrawable( block ) called so it can be visited
      in the repaint phase.
  12. Blocks should have z-indices set in the proper stacking order (back to front), using backbone.reindexBlocks()
      or equivalent (it tries to change as few z-indices as possible).

Stitcher desired behavior and optimizations:
  1. Reuse blocks of the same renderer type, instead of removing one and creating another.
  2. Minimize (as much as is possible) how many drawables are added and removed from blocks (try not to remove 1000
     drawables from A and add them to B if we could instead just add/remove 5 drawables from C to D)
  3. No more DOM manipulation than necessary
  4. Optimize first for "one or a few small change intervals" that only cause local changes (no blocks created,
     removed or reordered). It would be ideal to do this very quickly, so it could be done every frame in
     simulations.

Current constraints:
  1. DOM drawables should be paired with exactly one block (basically a wrapper, they are inserted directly into the
     DOM, and a DOM block should only ever be given the same drawable.
  2. Otherwise, consecutive drawables with the same renderer should be part of the same block. In the future we will
     want to allow "gaps" to form between (if something with a different renderer gets added and removed a lot
     in-between), but we'll need to figure out performance-sensitive flags to indicate when this needs to not be
     done (opacity and types of blending require no gaps between same-renderer drawables).

Gluing: consequences of "no gaps"
There are two (important) implications:
Gluing
  If we have the following blocks:
    … A (SVG), B (Canvas), C (SVG) ...
  and all drawables for for B are removed, the following would be invalid ("has a gap"):
    … A (SVG), C (SVG) …
  so we need to glue them together, usually either resulting in:
    … A (SVG) …
  or
    … C (SVG) …
  with A or C including all of the drawables that were in A and C.
  More generally:
    If a change interval used to have its before/after (unchanged) drawables on two
    different blocks and for the current frame there will be no blocks in-between,
    we will need to "glue".
  Additionally, note the case:
    … A (SVG), B (Canvas), C (DOM), D (SVG), E (Canvas), F (SVG).
  If B,C,E are all removed, the results of A,D,F will have to all be combined into one layer
Un-gluing
  If we have the following drawables, all part of one block:
    … a (svg), b (svg) …
  and we insert a drawable with a different renderer:
    … a (svg), c (canvas), b (svg) ...
  we will need to split them into to SVG blocks
  More generally:
    If a change interval used to have its before/after (unchanged) drawables included
    in the same block, and the current frame requires a block to be inserted
    in-between, we will need to "un-glue".
These consequences mean that "unchanged" drawables (outside of change intervals) may need to have their block changed
(with notePendingMove). For performance, please consider which "end" should keep its drawables (the other end's
drawables will ALL have to be added/removed, which can be a major performance loss if we choose the wrong one).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class Stitcher {: #Stitcher }


```js
import { Stitcher } from 'scenerystack/scenery';
```
### Instance Methods

#### initialize( backbone, firstDrawable, lastDrawable, oldFirstDrawable, oldLastDrawable, firstChangeInterval, lastChangeInterval ) {: #initialize data-toc-label='initialize' }

Main stitch entry point, called directly from the backbone or cache. We are modifying our backbone's blocks and
their attached drawables.
@public

The change-interval pair denotes a linked-list of change intervals that we will need to stitch across (they
contain drawables that need to be removed and added, and it may affect how we lay out blocks in the stacking
order).

@param {BackboneDrawable} backbone
@param {Drawable|null} firstDrawable
@param {Drawable|null} lastDrawable
@param {Drawable|null} oldFirstDrawable
@param {Drawable|null} oldLastDrawable
@param {ChangeInterval} firstChangeInterval
@param {ChangeInterval} lastChangeInterval

#### clean() {: #clean data-toc-label='clean' }

Removes object references
@public

#### recordBackboneBoundaries() {: #recordBackboneBoundaries data-toc-label='recordBackboneBoundaries' }

Writes the first/last drawables for the entire backbone into its memory. We want to wait to do this until we have
read from its previous values.
@protected

#### notePendingAddition( drawable, block ) {: #notePendingAddition data-toc-label='notePendingAddition' }

Records that this {Drawable} drawable should be added/moved to the {Block} at a later time
@protected

@param {Drawable} drawable
@param {Block} block

#### notePendingMove( drawable, block ) {: #notePendingMove data-toc-label='notePendingMove' }

Records that this {Drawable} drawable should be moved to the {Block} at a later time (called only on external
drawables). notePendingAddition and notePendingRemoval should not be called on a drawable that had
notePendingMove called on it during the same stitch, and vice versa.
@protected

@param {Drawable} drawable
@param {Block} block

#### notePendingRemoval( drawable ) {: #notePendingRemoval data-toc-label='notePendingRemoval' }

Records that this {Drawable} drawable should be removed/moved from the {Block} at a later time
@protected

@param {Drawable} drawable

#### markBlockForDisposal( block ) {: #markBlockForDisposal data-toc-label='markBlockForDisposal' }

Records that this {Block} block should be disposed at a later time. It should not be in the blocks array at the
end of the stitch.
@protected

@param {Block} block

#### removeAllBlocks() {: #removeAllBlocks data-toc-label='removeAllBlocks' }

@protected

#### notifyInterval( block, firstDrawable, lastDrawable ) {: #notifyInterval data-toc-label='notifyInterval' }

Immediately notify a block of its first/last drawable.
@protected

@param {Block} block
@param {Drawable} firstDrawable
@param {Drawable} lastDrawable

#### markBeforeBlock( block, firstDrawable ) {: #markBeforeBlock data-toc-label='markBeforeBlock' }

Note a block's tentative first drawable and block before (should be flushed later with updateBlockIntervals())
@protected

@param {Block} block
@param {Drawable} firstDrawable

#### markAfterBlock( block, lastDrawable ) {: #markAfterBlock data-toc-label='markAfterBlock' }

Note a block's tentative last drawable and block after (should be flushed later with updateBlockIntervals())
@protected

@param {Block} block
@param {Drawable} lastDrawable

#### updateBlockIntervals() {: #updateBlockIntervals data-toc-label='updateBlockIntervals' }

Flushes markBeforeBlock/markAfterBlock changes to notifyInterval on blocks themselves.
@protected

#### createBlock( renderer, drawable ) {: #createBlock data-toc-label='createBlock' }

Creates a fresh block with the desired renderer and {Drawable} arbitrary drawable included, and adds it to
our DOM.
@protected

@param {number} renderer
@param {Drawable} drawable
@returns {Block}

#### appendBlock( block ) {: #appendBlock data-toc-label='appendBlock' }

Immediately appends a block to our blocks array
@protected

@param {Block} block

#### removeBlock( block ) {: #removeBlock data-toc-label='removeBlock' }

Immediately removes a block to our blocks array
@protected

@param {Block} block

#### useNoBlocks() {: #useNoBlocks data-toc-label='useNoBlocks' }

@protected

#### reindex() {: #reindex data-toc-label='reindex' }

Triggers all blocks in the blocks array to have their z-index properties set so that they visually stack
correctly.
@protected

#### auditStitch() {: #auditStitch data-toc-label='auditStitch' }

An audit for testing assertions
@protected

### Static Methods

#### debugIntervals( firstChangeInterval ) {: #debugIntervals data-toc-label='debugIntervals' }

@public

@param {ChangeInterval} firstChangeInterval

#### debugDrawables( firstDrawable, lastDrawable, firstChangeInterval, lastChangeInterval, useCurrent ) {: #debugDrawables data-toc-label='debugDrawables' }

Logs a bunch of information about the old (useCurrent===false) or new (useCurrent===true) drawable linked list.
@public

@param {Drawable|null} firstDrawable
@param {Drawable|null} lastDrawable
@param {ChangeInterval} firstChangeInterval
@param {ChangeInterval} lastChangeInterval
@param {boolean} useCurrent



## Source Code

See the source for [Stitcher.js](https://github.com/phetsims/scenery/blob/main/js/display/Stitcher.js) in the [scenery](https://github.com/phetsims/scenery) repository.
