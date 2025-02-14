# GreedyStitcher

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery/blob/main/js/display/GreedyStitcher.js](https://github.com/phetsims/scenery/blob/main/js/display/GreedyStitcher.js) for the most up-to-date information.

## Overview

Stitcher that only rebuilds the parts necessary, and attempts greedy block matching as an optimization.

Given a list of change intervals, our greedy stitcher breaks it down into 'sub-blocks' consisting of
drawables that are 'internal' to the change interval that all have the same renderer, and handles the
glue/unglue/matching situations in a greedy way by always using the first possible (allowing only one sweep
instead of multiple ones over the drawable linked list for this process).

Conceptually, we break down drawables into groups that are 'internal' to each change interval (inside, not
including the un-changed ends), and 'external' (that are not internal to any intervals).

For each interval, we first make sure that the next 'external' group of drawables has the proper blocks (for
instance, this can change with a glue/unglue operation, with processEdgeCases), then proceed to break the 'internal'
drawables into sub-blocks and process those with processSubBlock.

Our stitcher has a list of blocks noted as 'reusable' that we use for two purposes:
  1. So that we can shift blocks to where they are needed, instead of removing (e.g.) an SVG block and
     creating another.
  2. So that blocks that are unused at the end of our stitch can be removed, and marked for disposal.
At the start of the stitch, we mark completely 'internal' blocks as reusable, so they can be shifted around as
necessary (used in a greedy way which may not be optimal). It's also possible during later phases for blocks that
also contain 'external' drawables to be marked as reusable, due to glue cases where before we needed multiple
blocks and now we only need one.

We also use a linked-list of blocks during stitch operations (that then re-builds an array of blocks on any changes
after all stitching is done) for simplicity, and to avoid O(n^2) cases that would result from having to look up
indices in the block array during stitching.

NOTE: Stitcher instances may be reused many times, even with different backbones. It should always release any
object references that it held after usage.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class GreedyStitcher {: #GreedyStitcher }


```js
import { GreedyStitcher } from 'scenerystack/scenery';
```
### Instance Methods

#### stitch( backbone, firstStitchDrawable, lastStitchDrawable, oldFirstStitchDrawable, oldLastStitchDrawable, firstChangeInterval, lastChangeInterval ) {: #stitch data-toc-label='stitch' }

Main stitch entry point, called directly from the backbone or cache. We are modifying our backbone's blocks and
their attached drawables.
@public

The change-interval pair denotes a linked-list of change intervals that we will need to stitch across (they
contain drawables that need to be removed and added, and it may affect how we lay out blocks in the stacking
order).

@param {BackboneDrawable} backbone
@param {Drawable|null} firstStitchDrawable
@param {Drawable|null} lastStitchDrawable
@param {Drawable|null} oldFirstStitchDrawable
@param {Drawable|null} oldLastStitchDrawable
@param {ChangeInterval} firstChangeInterval
@param {ChangeInterval} lastChangeInterval

#### processInterval( backbone, interval, firstStitchDrawable, lastStitchDrawable ) {: #processInterval data-toc-label='processInterval' }

Does the main bulk of the work for each change interval.
@private

@param {BackboneDrawable} backbone
@param {ChangeInterval} interval
@param {Drawable|null} firstStitchDrawable
@param {Drawable|null} lastStitchDrawable

#### processSubBlock( interval, firstDrawable, lastDrawable, matchedBlock, isFirst, isLast ) {: #processSubBlock data-toc-label='processSubBlock' }

@private

@param {ChangeInterval} interval
@param {Drawable} firstDrawable - for the specific sub-block
@param {Drawable} lastDrawable - for the specific sub-block
@param {Block} matchedBlock
@param {boolean} isFirst
@param {boolean} isLast

#### processEdgeCases( interval, openBefore, openAfter ) {: #processEdgeCases data-toc-label='processEdgeCases' }

firstDrawable and lastDrawable refer to the specific sub-block (if it exists), isLast refers to if it's the
last sub-block
@private

@param {ChangeInterval} interval
@param {boolean} openBefore
@param {boolean} openAfter

#### changeExternals( interval, newBlock ) {: #changeExternals data-toc-label='changeExternals' }

Marks all 'external' drawables from the end (drawableAfter) of the {ChangeInterval} interval to either the end
of their old block or the drawableAfter of the next interval (whichever is sooner) as being needed to be moved to
our {Block} newBlock. The next processInterval will both handle the drawables inside that next interval, and
will be responsible for the 'external' drawables after that.
@private

@param {ChangeInterval} interval
@param {Block} newBlock

#### notePendingMoves( newBlock, firstDrawable, lastDrawable ) {: #notePendingMoves data-toc-label='notePendingMoves' }

Given a {Drawable} firstDrawable and {Drawable} lastDrawable, we mark all drawables in-between (inclusively) as
needing to be moved to our {Block} newBlock. This should only be called on external drawables, and should only
occur as needed with glue/unglue cases in the stitch.
@private

@param {Block} newBlock
@param {Drawable} firstDrawable
@param {Drawable} lastDrawable

#### ensureUsedBlock( currentBlock, someIncludedDrawable ) {: #ensureUsedBlock data-toc-label='ensureUsedBlock' }

If there is no currentBlock, we create one to match. Otherwise if the currentBlock is marked as 'unused' (i.e.
it is in the reusableBlocks array), we mark it as used so it won't me matched elsewhere.
@private

@param {Block} currentBlock
@param {Drawable} someIncludedDrawable
@returns {Block}

#### getBlockForRenderer( renderer, drawable ) {: #getBlockForRenderer data-toc-label='getBlockForRenderer' }

Attemps to find an unused block with the same renderer if possible, otherwise creates a
compatible block.
@private

NOTE: this doesn't handle hooking up the block linked list

@param {number} renderer
@param {Drawable} drawable
@returns {Block}

#### unuseBlock( block ) {: #unuseBlock data-toc-label='unuseBlock' }

Marks a block as unused, moving it to the reusableBlocks array.
@private

@param {Block} block

#### useBlock( block ) {: #useBlock data-toc-label='useBlock' }

Removes a block from the list of reused blocks (done during matching)
@private

@param {Block} block

#### useBlockAtIndex( block, index ) {: #useBlockAtIndex data-toc-label='useBlockAtIndex' }

@private

@param {Block} block
@param {number} index

#### removeUnusedBlocks() {: #removeUnusedBlocks data-toc-label='removeUnusedBlocks' }

Removes all of our unused blocks from our domElement, and marks them for disposal.
@private

#### linkBeforeDrawable( drawable ) {: #linkBeforeDrawable data-toc-label='linkBeforeDrawable' }

Links blocks before a drawable (whether it is the first drawable or not)
@private

@param {Drawable} drawable

#### linkAfterDrawable( drawable ) {: #linkAfterDrawable data-toc-label='linkAfterDrawable' }

links blocks after a drawable (whether it is the last drawable or not)
@private

@param {Drawable} drawable

#### linkBlocks( beforeBlock, afterBlock, beforeDrawable, afterDrawable ) {: #linkBlocks data-toc-label='linkBlocks' }

Called to mark a boundary between blocks, or at the end of our list of blocks (one block/drawable pair being
null notes that it is the start/end, and there is no previous/next block).
This updates the block linked-list as necessary (noting changes when they occur) so that we can rebuild an array
at the end of the stitch, avoiding O(n^2) issues if we were to do block-array-index lookups during linking
operations (this results in linear time for blocks).
It also marks block boundaries as dirty when necessary, so that we can make one pass through with
updateBlockIntervals() that updates all of the block's boundaries (avoiding more than one update per block per
frame).
@private

@param {Block|null} beforeBlock
@param {Block|null} afterBlock
@param {Drawable|null} beforeDrawable
@param {Drawable|null} afterDrawable

#### processBlockLinkedList( backbone, firstBlock, lastBlock ) {: #processBlockLinkedList data-toc-label='processBlockLinkedList' }

Rebuilds the backbone's block array from our linked-list data.
@private

@param {BackboneDrawable} backbone
@param {Block|null} firstBlock
@param {Block|null} lastBlock



## Source Code

See the source for [GreedyStitcher.js](https://github.com/phetsims/scenery/blob/main/js/display/GreedyStitcher.js) in the [scenery](https://github.com/phetsims/scenery) repository.
